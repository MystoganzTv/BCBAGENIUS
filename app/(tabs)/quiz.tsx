import { Ionicons } from '@expo/vector-icons';
import { router, useLocalSearchParams } from 'expo-router';
import React, { useEffect, useMemo, useState } from 'react';
import {
  Alert,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { QuizCard } from '@/components/quiz/QuizCard';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { ProgressBar } from '@/components/ui/ProgressBar';
import { Colors } from '@/constants/colors';
import { BorderRadius, FontSize, FontWeight, Spacing } from '@/constants/layout';
import { getDomains, getRandomQuestions } from '@/data/questions';
import { QuizQuestion } from '@/lib/types';
import { useProgressStore } from '@/store/progressStore';

type QuizState = 'setup' | 'active' | 'results';
type StudyMode = 'practice' | 'timed' | 'exam';

const DOMAIN_OPTIONS = ['All Domains', ...getDomains()];

function formatTime(totalSeconds: number) {
  const safe = Math.max(0, totalSeconds);
  const minutes = Math.floor(safe / 60);
  const seconds = safe % 60;
  return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

function getSessionDuration(mode: StudyMode, questionCount: number) {
  if (mode === 'exam') {
    if (questionCount >= 85) return 90 * 60;
    if (questionCount >= 50) return 60 * 60;
    return 30 * 60;
  }

  if (mode === 'timed') {
    return questionCount * 75;
  }

  return 0;
}

export default function QuizScreen() {
  const params = useLocalSearchParams<{ mode?: string; count?: string; domain?: string }>();
  const addSession = useProgressStore((state) => state.addSession);

  const [quizState, setQuizState] = useState<QuizState>('setup');
  const [studyMode, setStudyMode] = useState<StudyMode>('practice');
  const [questions, setQuestions] = useState<QuizQuestion[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<boolean[]>([]);
  const [missedQuestions, setMissedQuestions] = useState<QuizQuestion[]>([]);
  const [questionCount, setQuestionCount] = useState(10);
  const [domainFilter, setDomainFilter] = useState('All Domains');
  const [startedAt, setStartedAt] = useState<number | null>(null);
  const [sessionSaved, setSessionSaved] = useState(false);
  const [remainingSeconds, setRemainingSeconds] = useState(0);

  const isTimed = studyMode === 'timed' || studyMode === 'exam';
  const showInstantFeedback = studyMode === 'practice';

  const startQuiz = (modeOverride?: StudyMode, countOverride?: number, domainOverride?: string) => {
    const nextMode = modeOverride ?? studyMode;
    const nextCount = countOverride ?? questionCount;
    const nextDomain = domainOverride ?? domainFilter;
    const selectedDomain = nextDomain === 'All Domains' ? undefined : nextDomain;
    const qs = getRandomQuestions(nextCount, 'BCBA', selectedDomain);

    setStudyMode(nextMode);
    setQuestionCount(nextCount);
    setDomainFilter(nextDomain);
    setQuestions(qs);
    setCurrentIndex(0);
    setAnswers([]);
    setMissedQuestions([]);
    setSessionSaved(false);
    setStartedAt(Date.now());
    setRemainingSeconds(getSessionDuration(nextMode, nextCount));
    setQuizState('active');
  };

  const advanceQuestion = (question: QuizQuestion, isCorrect: boolean) => {
    setAnswers((prev) => [...prev, isCorrect]);
    if (!isCorrect) {
      setMissedQuestions((prev) => [...prev, question]);
    }

    if (currentIndex + 1 >= questions.length) {
      setQuizState('results');
    } else {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const handleAnswer = (_selectedIndex: number, isCorrect: boolean) => {
    const question = questions[currentIndex];
    if (!question) return;

    if (showInstantFeedback) {
      setTimeout(() => {
        advanceQuestion(question, isCorrect);
      }, 1400);
      return;
    }

    advanceQuestion(question, isCorrect);
  };

  useEffect(() => {
    if (quizState !== 'active' || !isTimed) return;
    if (remainingSeconds <= 0) {
      setQuizState('results');
      return;
    }

    const timer = setTimeout(() => {
      setRemainingSeconds((prev) => prev - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [quizState, isTimed, remainingSeconds]);

  useEffect(() => {
    if (quizState !== 'setup') return;
    if (!params.mode && !params.count && !params.domain) return;

    const incomingMode = params.mode === 'exam' || params.mode === 'timed' ? params.mode : 'practice';
    const incomingCount = Number(params.count);
    const normalizedCount = Number.isFinite(incomingCount) && incomingCount > 0 ? incomingCount : 10;
    const incomingDomain = typeof params.domain === 'string' && DOMAIN_OPTIONS.includes(params.domain)
      ? params.domain
      : 'All Domains';

    startQuiz(incomingMode, normalizedCount, incomingDomain);
  }, [params.mode, params.count, params.domain, quizState]);

  const correctCount = answers.filter(Boolean).length;
  const score = questions.length > 0 ? correctCount / questions.length : 0;
  const dominantDomain = useMemo(() => {
    const counts: Record<string, number> = {};
    for (const question of questions) {
      counts[question.domain] = (counts[question.domain] ?? 0) + 1;
    }

    return Object.entries(counts).sort((a, b) => b[1] - a[1])[0]?.[0];
  }, [questions]);

  const readinessLabel = score >= 0.8 ? 'Readiness alta' : score >= 0.65 ? 'Readiness media' : 'Readiness baja';

  const persistQuizSession = async () => {
    if (sessionSaved || questions.length === 0) return;

    try {
      await addSession({
        sessionType: 'quiz',
        studyMode,
        certType: 'BCBA',
        domain: dominantDomain,
        questionsAttempted: questions.length,
        correctAnswers: correctCount,
        durationSeconds: startedAt
          ? Math.max(30, Math.round((Date.now() - startedAt) / 1000))
          : 0,
      });
      setSessionSaved(true);
    } catch {
      Alert.alert('No se pudo guardar', 'La sesion termino, pero no pudimos guardar el resultado.');
    }
  };

  const handleRestart = async () => {
    await persistQuizSession();
    setQuizState('setup');
  };

  const handleGoHome = async () => {
    await persistQuizSession();
    router.replace('/(tabs)');
  };

  useEffect(() => {
    if (quizState === 'results') {
      void persistQuizSession();
    }
  }, [quizState, sessionSaved, questions, answers, startedAt, studyMode, dominantDomain]);

  if (quizState === 'setup') {
    const countOptions = studyMode === 'exam' ? [25, 50, 85] : [10, 20, 40];

    return (
      <SafeAreaView style={styles.safe}>
        <ScrollView contentContainerStyle={styles.scroll}>
          <Text style={styles.screenTitle}>Practice Questions</Text>
          <Text style={styles.screenSubtitle}>
            Construye sesiones mas cercanas a un banco real: practica, timed drill o mock exam.
          </Text>

          <Card style={styles.section}>
            <Text style={styles.sectionTitle}>Modo de estudio</Text>
            <View style={styles.modeGrid}>
              {[
                {
                  key: 'practice' as const,
                  icon: 'sparkles-outline' as const,
                  title: 'Practice',
                  description: 'Feedback inmediato y explicacion por reactivo.',
                },
                {
                  key: 'timed' as const,
                  icon: 'timer-outline' as const,
                  title: 'Timed Drill',
                  description: 'Tiempo global, ritmo rapido, sin explicacion inmediata.',
                },
                {
                  key: 'exam' as const,
                  icon: 'document-text-outline' as const,
                  title: 'Mock Exam',
                  description: 'Sesion larga con timer y revision al final.',
                },
              ].map((mode) => (
                <TouchableOpacity
                  key={mode.key}
                  activeOpacity={0.85}
                  style={[styles.modeCard, studyMode === mode.key && styles.modeCardActive]}
                  onPress={() => setStudyMode(mode.key)}
                >
                  <View style={[styles.modeIconWrap, studyMode === mode.key && styles.modeIconWrapActive]}>
                    <Ionicons
                      name={mode.icon}
                      size={20}
                      color={studyMode === mode.key ? Colors.primary : Colors.textSecondary}
                    />
                  </View>
                  <Text style={styles.modeTitle}>{mode.title}</Text>
                  <Text style={styles.modeDescription}>{mode.description}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </Card>

          <Card style={styles.section}>
            <Text style={styles.sectionTitle}>Dominio</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.domainRow}>
              {DOMAIN_OPTIONS.map((domain) => {
                const active = domainFilter === domain;
                return (
                  <TouchableOpacity
                    key={domain}
                    style={[styles.pill, active && styles.pillActive]}
                    onPress={() => setDomainFilter(domain)}
                  >
                    <Text style={[styles.pillText, active && styles.pillTextActive]}>{domain}</Text>
                  </TouchableOpacity>
                );
              })}
            </ScrollView>
          </Card>

          <Card style={styles.section}>
            <Text style={styles.sectionTitle}>Cantidad de preguntas</Text>
            <View style={styles.countSelector}>
              {countOptions.map((count) => (
                <TouchableOpacity
                  key={count}
                  style={[styles.countOption, questionCount === count && styles.countOptionActive]}
                  onPress={() => setQuestionCount(count)}
                >
                  <Text style={[styles.countText, questionCount === count && styles.countTextActive]}>
                    {count}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>

            <View style={styles.modeMeta}>
              <Badge
                label={studyMode === 'practice' ? 'Feedback inmediato' : studyMode === 'timed' ? 'Timer global' : 'Mock sin feedback'}
                variant="info"
              />
              {isTimed ? (
                <Badge label={`${formatTime(getSessionDuration(studyMode, questionCount))} estimados`} variant="warning" />
              ) : null}
            </View>
          </Card>

          <Button
            title={studyMode === 'exam' ? 'Iniciar mock exam' : 'Comenzar sesion'}
            onPress={() => startQuiz()}
            fullWidth
            size="lg"
            style={styles.startBtn}
          />
        </ScrollView>
      </SafeAreaView>
    );
  }

  if (quizState === 'active') {
    const progressBase = currentIndex / Math.max(questions.length, 1);

    return (
      <SafeAreaView style={styles.safe}>
        <View style={styles.activeHeader}>
          <View style={styles.headerTopRow}>
            <Badge
              label={studyMode === 'practice' ? 'Practice' : studyMode === 'timed' ? 'Timed Drill' : 'Mock Exam'}
              variant="info"
            />
            {isTimed ? (
              <View style={[styles.timerChip, remainingSeconds < 60 && styles.timerChipDanger]}>
                <Ionicons
                  name="timer-outline"
                  size={16}
                  color={remainingSeconds < 60 ? Colors.error : Colors.primary}
                />
                <Text style={[styles.timerText, remainingSeconds < 60 && styles.timerTextDanger]}>
                  {formatTime(remainingSeconds)}
                </Text>
              </View>
            ) : null}
          </View>
          <ProgressBar progress={progressBase} animated />
          <Text style={styles.progressLabel}>{currentIndex + 1} / {questions.length}</Text>
        </View>

        <ScrollView contentContainerStyle={styles.scroll}>
          <QuizCard
            key={questions[currentIndex].id}
            question={questions[currentIndex]}
            questionNumber={currentIndex + 1}
            totalQuestions={questions.length}
            showInstantFeedback={showInstantFeedback}
            onAnswer={handleAnswer}
          />
        </ScrollView>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView contentContainerStyle={styles.scroll}>
        <Text style={styles.screenTitle}>Resultados</Text>
        <Text style={styles.screenSubtitle}>
          Resumen de tu {studyMode === 'exam' ? 'mock exam' : studyMode === 'timed' ? 'timed drill' : 'practice set'}.
        </Text>

        <Card style={styles.scoreCard}>
          <Text style={styles.scorePercent}>{Math.round(score * 100)}%</Text>
          <Text style={styles.scoreLabel}>
            {correctCount} de {questions.length} correctas
          </Text>
          <View style={styles.resultBadgeRow}>
            <Badge label={readinessLabel} variant={score >= 0.7 ? 'success' : 'warning'} />
            <Badge label={`${missedQuestions.length} para review`} variant="warning" />
          </View>
          <ProgressBar progress={score} color={score >= 0.7 ? Colors.secondary : Colors.warning} animated />
        </Card>

        <Card style={styles.summaryCard}>
          <Text style={styles.summaryTitle}>Resumen de sesion</Text>
          <View style={styles.summaryRow}>
            <Text style={styles.summaryLabel}>Dominio dominante</Text>
            <Text style={styles.summaryValue}>{dominantDomain ?? 'Mixto'}</Text>
          </View>
          <View style={styles.summaryRow}>
            <Text style={styles.summaryLabel}>Formato</Text>
            <Text style={styles.summaryValue}>
              {studyMode === 'practice' ? 'Practice' : studyMode === 'timed' ? 'Timed Drill' : 'Mock Exam'}
            </Text>
          </View>
          <View style={styles.summaryRow}>
            <Text style={styles.summaryLabel}>Review pendiente</Text>
            <Text style={styles.summaryValue}>{missedQuestions.length} reactivos</Text>
          </View>
        </Card>

        {missedQuestions.length > 0 ? (
          <Card style={styles.reviewCard}>
            <Text style={styles.summaryTitle}>Weak areas para revisar</Text>
            {missedQuestions.slice(0, 4).map((question) => (
              <View key={question.id} style={styles.reviewItem}>
                <Badge
                  label={question.domain}
                  color={Colors.domains[question.domain as keyof typeof Colors.domains]}
                />
                <Text style={styles.reviewQuestion}>{question.question}</Text>
              </View>
            ))}
          </Card>
        ) : null}

        <View style={styles.resultActions}>
          <Button title="Nueva sesion" onPress={handleRestart} fullWidth size="lg" />
          <Button
            title="Ir al inicio"
            onPress={handleGoHome}
            variant="outline"
            fullWidth
            size="lg"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: Colors.background },
  scroll: { padding: Spacing.lg, gap: Spacing.md, paddingBottom: Spacing.xxl },
  screenTitle: { fontSize: FontSize.xxl, fontWeight: FontWeight.bold, color: Colors.textPrimary },
  screenSubtitle: { fontSize: FontSize.md, color: Colors.textSecondary, marginBottom: Spacing.sm, lineHeight: 22 },
  section: {},
  sectionTitle: {
    fontSize: FontSize.md,
    fontWeight: FontWeight.semibold,
    color: Colors.textPrimary,
    marginBottom: Spacing.md,
  },
  modeGrid: { gap: Spacing.sm },
  modeCard: {
    borderWidth: 1.5,
    borderColor: Colors.border,
    borderRadius: BorderRadius.lg,
    backgroundColor: Colors.surfaceAlt,
    padding: Spacing.md,
    gap: 6,
  },
  modeCardActive: {
    borderColor: Colors.primary,
    backgroundColor: '#EEF2FF',
  },
  modeIconWrap: {
    width: 40,
    height: 40,
    borderRadius: BorderRadius.md,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.surface,
  },
  modeIconWrapActive: {
    backgroundColor: '#E0E7FF',
  },
  modeTitle: { fontSize: FontSize.md, fontWeight: FontWeight.bold, color: Colors.textPrimary },
  modeDescription: { fontSize: FontSize.sm, color: Colors.textSecondary, lineHeight: 20 },
  domainRow: { gap: Spacing.sm, paddingRight: Spacing.lg },
  pill: {
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: BorderRadius.full,
    borderWidth: 1.5,
    borderColor: Colors.border,
    backgroundColor: Colors.surface,
  },
  pillActive: { borderColor: Colors.primary, backgroundColor: '#EEF2FF' },
  pillText: { color: Colors.textSecondary, fontSize: FontSize.sm, fontWeight: FontWeight.medium },
  pillTextActive: { color: Colors.primary, fontWeight: FontWeight.bold },
  countSelector: { flexDirection: 'row', gap: Spacing.sm },
  countOption: {
    flex: 1,
    height: 48,
    borderRadius: BorderRadius.md,
    borderWidth: 1.5,
    borderColor: Colors.border,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.surfaceAlt,
  },
  countOptionActive: { borderColor: Colors.primary, backgroundColor: '#EEF2FF' },
  countText: { fontWeight: FontWeight.medium, color: Colors.textSecondary },
  countTextActive: { color: Colors.primary, fontWeight: FontWeight.bold },
  modeMeta: { flexDirection: 'row', flexWrap: 'wrap', gap: Spacing.sm, marginTop: Spacing.md },
  startBtn: { marginTop: Spacing.sm },
  activeHeader: { paddingHorizontal: Spacing.lg, paddingTop: Spacing.md, gap: Spacing.xs },
  headerTopRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  timerChip: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    borderRadius: BorderRadius.full,
    paddingHorizontal: 12,
    paddingVertical: 8,
    backgroundColor: '#EEF2FF',
  },
  timerChipDanger: { backgroundColor: '#FEF2F2' },
  timerText: { color: Colors.primary, fontWeight: FontWeight.bold, fontSize: FontSize.sm },
  timerTextDanger: { color: Colors.error },
  progressLabel: { fontSize: FontSize.xs, color: Colors.textTertiary, textAlign: 'right' },
  scoreCard: { alignItems: 'center', gap: Spacing.sm },
  scorePercent: { fontSize: 64, fontWeight: FontWeight.bold, color: Colors.primary },
  scoreLabel: { fontSize: FontSize.lg, color: Colors.textSecondary },
  resultBadgeRow: { flexDirection: 'row', flexWrap: 'wrap', gap: Spacing.sm },
  summaryCard: { gap: Spacing.sm },
  summaryTitle: { fontSize: FontSize.md, fontWeight: FontWeight.bold, color: Colors.textPrimary },
  summaryRow: { flexDirection: 'row', justifyContent: 'space-between', gap: Spacing.sm },
  summaryLabel: { color: Colors.textSecondary, fontSize: FontSize.sm },
  summaryValue: { color: Colors.textPrimary, fontSize: FontSize.sm, fontWeight: FontWeight.semibold, flexShrink: 1, textAlign: 'right' },
  reviewCard: { gap: Spacing.md },
  reviewItem: { gap: Spacing.xs },
  reviewQuestion: { fontSize: FontSize.sm, lineHeight: 20, color: Colors.textPrimary },
  resultActions: { gap: Spacing.sm },
});
