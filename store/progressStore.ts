import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';
import { supabase } from '@/lib/supabase';

// ─── Tipos locales ─────────────────────────────────────────────────────────
export interface LocalSession {
  id: string;
  sessionType: 'quiz' | 'flashcards';
  studyMode?: 'practice' | 'timed' | 'exam';
  certType: 'BCBA' | 'BCaBA';
  domain?: string;
  questionsAttempted: number;
  correctAnswers: number;
  durationSeconds: number;
  completedAt: string;
}

interface ProgressStore {
  // Estado
  sessions:       LocalSession[];
  currentStreak:  number;
  longestStreak:  number;
  lastStudyDate:  string | null;
  pendingSync:    boolean;

  // Acciones
  addSession:      (session: Omit<LocalSession, 'id' | 'completedAt'>) => Promise<void>;
  loadLocal:       () => Promise<void>;
  syncToSupabase:  (userId: string) => Promise<void>;
  getStats: () => {
    totalSessions:   number;
    totalCorrect:    number;
    totalAttempted:  number;
    overallAccuracy: number;
    byDomain: Record<string, { correct: number; total: number; pct: number }>;
    recentSessions:  LocalSession[];
  };
}

const STORAGE_KEY = '@bcbagenius_progress';

export const useProgressStore = create<ProgressStore>((set, get) => ({
  sessions:      [],
  currentStreak: 0,
  longestStreak: 0,
  lastStudyDate: null,
  pendingSync:   false,

  loadLocal: async () => {
    try {
      const raw = await AsyncStorage.getItem(STORAGE_KEY);
      if (raw) {
        const data = JSON.parse(raw);
        set(data);
      }
    } catch (e) {
      console.warn('Error cargando progreso local:', e);
    }
  },

  addSession: async (sessionData) => {
    const now = new Date();
    const todayStr = now.toISOString().split('T')[0];

    const newSession: LocalSession = {
      ...sessionData,
      id: `local-${Date.now()}`,
      completedAt: now.toISOString(),
    };

    const state = get();

    // Actualizar racha
    let currentStreak = state.currentStreak;
    let longestStreak = state.longestStreak;
    const lastDate    = state.lastStudyDate;

    if (lastDate) {
      const yesterday = new Date(now);
      yesterday.setDate(yesterday.getDate() - 1);
      const yesterdayStr = yesterday.toISOString().split('T')[0];

      if (lastDate === todayStr) {
        // Ya estudió hoy — no cambiar racha
      } else if (lastDate === yesterdayStr) {
        // Estudió ayer — incrementar racha
        currentStreak += 1;
        if (currentStreak > longestStreak) longestStreak = currentStreak;
      } else {
        // Rompió la racha
        currentStreak = 1;
      }
    } else {
      currentStreak = 1;
      longestStreak = 1;
    }

    const newState = {
      sessions:      [newSession, ...state.sessions].slice(0, 200), // max 200 sesiones
      currentStreak,
      longestStreak,
      lastStudyDate: todayStr,
      pendingSync:   true,
    };

    set(newState);

    // Persistir localmente
    try {
      await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(newState));
    } catch (e) {
      console.warn('Error guardando progreso:', e);
    }
  },

  syncToSupabase: async (userId: string) => {
    const state = get();
    if (!state.pendingSync) return;

    try {
      // Obtener sesiones que no se han sincronizado (las que tienen id "local-")
      const unsyncedSessions = state.sessions.filter(s => s.id.startsWith('local-'));

      if (unsyncedSessions.length === 0) {
        set({ pendingSync: false });
        return;
      }

      // Insertar en Supabase
      const { error: sessError } = await supabase.from('study_sessions').insert(
        unsyncedSessions.map(s => ({
          user_id:             userId,
          session_type:        s.sessionType,
          cert_type:           s.certType,
          domain:              s.domain,
          questions_attempted: s.questionsAttempted,
          correct_answers:     s.correctAnswers,
          duration_seconds:    s.durationSeconds,
          completed_at:        s.completedAt,
        }))
      );

      if (sessError) throw sessError;

      // Actualizar racha en Supabase
      await supabase.from('streaks').upsert({
        user_id:        userId,
        current_streak: state.currentStreak,
        longest_streak: state.longestStreak,
        last_study_date: state.lastStudyDate,
        updated_at:     new Date().toISOString(),
      });

      // Actualizar progreso por dominio
      const domainMap: Record<string, { correct: number; total: number }> = {};
      for (const s of unsyncedSessions) {
        if (!s.domain) continue;
        if (!domainMap[s.domain]) domainMap[s.domain] = { correct: 0, total: 0 };
        domainMap[s.domain].correct += s.correctAnswers;
        domainMap[s.domain].total   += s.questionsAttempted;
      }
      for (const [domain, scores] of Object.entries(domainMap)) {
        try {
          await supabase.rpc('increment_domain_progress', {
            p_user_id:  userId,
            p_cert_type: unsyncedSessions[0]?.certType ?? 'BCBA',
            p_domain:   domain,
            p_correct:  scores.correct,
            p_total:    scores.total,
          });
        } catch {
          // graceful fail si no existe la función RPC
        }
      }

      set({ pendingSync: false });
    } catch (e) {
      console.warn('Error sincronizando con Supabase:', e);
    }
  },

  getStats: () => {
    const { sessions, currentStreak, longestStreak } = get();

    const totalCorrect   = sessions.reduce((s, x) => s + x.correctAnswers, 0);
    const totalAttempted = sessions.reduce((s, x) => s + x.questionsAttempted, 0);

    const byDomain: Record<string, { correct: number; total: number; pct: number }> = {};
    for (const s of sessions) {
      if (!s.domain) continue;
      if (!byDomain[s.domain]) byDomain[s.domain] = { correct: 0, total: 0, pct: 0 };
      byDomain[s.domain].correct += s.correctAnswers;
      byDomain[s.domain].total   += s.questionsAttempted;
    }
    for (const d of Object.values(byDomain)) {
      d.pct = d.total > 0 ? d.correct / d.total : 0;
    }

    return {
      totalSessions:   sessions.length,
      totalCorrect,
      totalAttempted,
      overallAccuracy: totalAttempted > 0 ? totalCorrect / totalAttempted : 0,
      byDomain,
      recentSessions:  sessions.slice(0, 5),
    };
  },
}));
