import { useEffect, useState } from 'react';
import { useProgressStore } from '@/store/progressStore';

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
  const sessions = useProgressStore((state) => state.sessions);
  const currentStreak = useProgressStore((state) => state.currentStreak);
  const longestStreak = useProgressStore((state) => state.longestStreak);
  const loadLocal = useProgressStore((state) => state.loadLocal);
  const getStats = useProgressStore((state) => state.getStats);
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
    loadLocal();
  }, [loadLocal]);

  useEffect(() => {
    const localStats = getStats();
    const domainScores = Object.entries(localStats.byDomain).map(([domain, score]) => ({
      domain,
      correct: score.correct,
      total: score.total,
      percentage: score.pct,
    }));

    setStats({
      totalSessions: localStats.totalSessions,
      totalCorrect: localStats.totalCorrect,
      totalAttempted: localStats.totalAttempted,
      overallAccuracy: localStats.overallAccuracy,
      currentStreak,
      longestStreak,
      domainScores,
      recentSessions: localStats.recentSessions.map((session) => ({
        id: session.id,
        sessionType: session.sessionType,
        certType: session.certType,
        correctAnswers: session.correctAnswers,
        questionsAttempted: session.questionsAttempted,
        completedAt: session.completedAt,
      })),
      loading: false,
    });
  }, [sessions, currentStreak, longestStreak, loadLocal, getStats]);

  return stats;
}
