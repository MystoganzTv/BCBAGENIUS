import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import { useAuth } from './useAuth';

export interface ProgressStats {
  totalSessions: number;
  totalCorrect: number;
  totalAttempted: number;
  overallAccuracy: number;
  currentStreak: number;
  longestStreak: number;
  domainScores: {
    domain: string;
    correct: number;
    total: number;
    percentage: number;
  }[];
  recentSessions: {
    id: string;
    sessionType: string;
    certType: string;
    correctAnswers: number;
    questionsAttempted: number;
    completedAt: string;
  }[];
  loading: boolean;
}

export function useProgress(): ProgressStats {
  const { user } = useAuth();
  const [stats, setStats] = useState<ProgressStats>({
    totalSessions:  0,
    totalCorrect:   0,
    totalAttempted: 0,
    overallAccuracy:0,
    currentStreak:  0,
    longestStreak:  0,
    domainScores:   [],
    recentSessions: [],
    loading: true,
  });

  useEffect(() => {
    if (!user) {
      setStats((s) => ({ ...s, loading: false }));
      return;
    }
    loadStats();
  }, [user]);

  const loadStats = async () => {
    if (!user) return;

    const [sessionsRes, domainRes, streakRes] = await Promise.all([
      supabase
        .from('study_sessions')
        .select('*')
        .eq('user_id', user.id)
        .order('completed_at', { ascending: false })
        .limit(50),
      supabase
        .from('domain_progress')
        .select('*')
        .eq('user_id', user.id),
      supabase
        .from('streaks')
        .select('*')
        .eq('user_id', user.id)
        .single(),
    ]);

    const sessions = sessionsRes.data ?? [];
    const domains  = domainRes.data ?? [];
    const streak   = streakRes.data;

    const totalCorrect   = sessions.reduce((sum, s) => sum + (s.correct_answers ?? 0), 0);
    const totalAttempted = sessions.reduce((sum, s) => sum + (s.questions_attempted ?? 0), 0);

    setStats({
      totalSessions:  sessions.length,
      totalCorrect,
      totalAttempted,
      overallAccuracy: totalAttempted > 0 ? totalCorrect / totalAttempted : 0,
      currentStreak:  streak?.current_streak ?? 0,
      longestStreak:  streak?.longest_streak ?? 0,
      domainScores: domains.map((d) => ({
        domain:     d.domain,
        correct:    d.correct,
        total:      d.total,
        percentage: d.total > 0 ? d.correct / d.total : 0,
      })),
      recentSessions: sessions.slice(0, 5).map((s) => ({
        id:                  s.id,
        sessionType:         s.session_type,
        certType:            s.cert_type,
        correctAnswers:      s.correct_answers,
        questionsAttempted:  s.questions_attempted,
        completedAt:         s.completed_at,
      })),
      loading: false,
    });
  };

  return stats;
}
