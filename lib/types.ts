// ─── Certificaciones ────────────────────────────────────────────────────────
export type CertType = 'BCBA' | 'BCaBA';

// ─── Dominio del Task List BACB ──────────────────────────────────────────────
export type TaskListDomain =
  | 'Foundations'
  | 'Applications'
  | 'Ethics'
  | 'Experimental Design'
  | 'Measurement'
  | 'Behavior Change'
  | 'Personnel Supervision';

// ─── Pregunta de Quiz ────────────────────────────────────────────────────────
export interface QuizQuestion {
  id: string;
  certType: CertType;
  domain: TaskListDomain;
  taskCode: string;        // ej. "A-01", "B-04"
  question: string;
  options: string[];       // siempre 4 opciones
  correctIndex: number;    // índice de la respuesta correcta (0-3)
  explanation: string;     // explicación de la respuesta
  difficulty: 'easy' | 'medium' | 'hard';
}

// ─── Flashcard ───────────────────────────────────────────────────────────────
export interface Flashcard {
  id: string;
  certType: CertType;
  domain: TaskListDomain;
  taskCode: string;
  front: string;           // término / concepto
  back: string;            // definición / explicación
}

// ─── Progreso del usuario ────────────────────────────────────────────────────
export interface UserProgress {
  userId: string;
  totalQuizzesTaken: number;
  totalCorrect: number;
  totalIncorrect: number;
  currentStreak: number;   // días consecutivos
  lastStudyDate: string;   // ISO date string
  domainScores: Record<TaskListDomain, DomainScore>;
}

export interface DomainScore {
  domain: TaskListDomain;
  correct: number;
  total: number;
  percentage: number;
}

// ─── Sesión de estudio ───────────────────────────────────────────────────────
export interface StudySession {
  id: string;
  userId: string;
  sessionType: 'quiz' | 'flashcards';
  certType: CertType;
  domain?: TaskListDomain;
  questionsAttempted: number;
  correctAnswers: number;
  durationSeconds: number;
  completedAt: string;
}

// ─── Perfil de usuario (tabla Supabase) ──────────────────────────────────────
export interface UserProfile {
  id: string;
  email: string;
  fullName: string;
  certTarget: CertType;    // certificación que está estudiando
  createdAt: string;
  avatarUrl?: string;
}

// ─── Estado de Auth ──────────────────────────────────────────────────────────
export interface AuthState {
  user: UserProfile | null;
  session: unknown | null;
  loading: boolean;
}
