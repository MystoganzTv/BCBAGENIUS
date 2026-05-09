import { router } from 'expo-router';
import React, { useState } from 'react';
import {
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
import { getRandomQuestions } from '@/data/questions';
import { useAuth } from '@/hooks/useAuth';
import { CertType, QuizQuestion } from '@/lib/types';

type QuizState = 'setup' | 'active' | 'results';

export default function QuizScreen() {
  const { profile } = useAuth();
  const [quizState, setQuizState]     = useState<QuizState>('setup');
  const [certType, setCertType]       = useState<CertType>(profile?.certTarget ?? 'BCBA');
  const [questions, setQuestions]     = useState<QuizQuestion[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers]         = useState<boolean[]>([]);
  const [questionCount, setQuestionCount] = useState(10);

  const startQuiz = () => {
    const qs = getRandomQuestions(questionCount, certType);
    setQuestions(qs);
    setCurrentIndex(0);
    setAnswers([]);
    setQuizState('active');
  };

  const handleAnswer = (_selectedIndex: number, isCorrect: boolean) => {
    setTimeout(() => {
      const newAnswers = [...answers, isCorrect];
      setAnswers(newAnswers);
      if (currentIndex + 1 >= questions.length) {
        setQuizState('results');
      } else {
        setCurrentIndex(currentIndex + 1);
      }
    }, 1500);
  };

  const correctCount = answers.filter(Boolean).length;
  const score = questions.length > 0 ? correctCount / questions.length : 0;

  // ── Setup ──────────────────────────────────────────────────────────────────
  if (quizState === 'setup') {
    return (
      <SafeAreaView style={styles.safe}>
        <ScrollView contentContainerStyle={styles.scroll}>
          <Text style={styles.screenTitle}>Quiz de práctica</Text>
          <Text style={styles.screenSubtitle}>Configura tu sesión de estudio</Text>

          <Card style={styles.section}>
            <Text style={styles.sectionTitle}>Certificación</Text>
            <View style={styles.certSelector}>
              {(['BCBA', 'BCaBA'] as CertType[]).map((c) => (
                <TouchableOpacity
                  key={c}
                  style={[styles.certOption, certType === c && styles.certOptionActive]}
                  onPress={() => setCertType(c)}
                >
                  <Text style={[styles.certText, certType === c && styles.certTextActive]}>{c}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </Card>

          <Card style={styles.section}>
            <Text style={styles.sectionTitle}>Número de preguntas</Text>
            <View style={styles.countSelector}>
              {[5, 10, 20, 30].map((count) => (
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
          </Card>

          <Button title="Comenzar Quiz" onPress={startQuiz} fullWidth size="lg" style={styles.startBtn} />
        </ScrollView>
      </SafeAreaView>
    );
  }

  // ── Active Quiz ────────────────────────────────────────────────────────────
  if (quizState === 'active') {
    return (
      <SafeAreaView style={styles.safe}>
        <View style={styles.activeHeader}>
          <ProgressBar progress={(currentIndex) / questions.length} animated />
          <Text style={styles.progressLabel}>{currentIndex} / {questions.length}</Text>
        </View>
        <ScrollView contentContainerStyle={styles.scroll}>
          <QuizCard
            key={questions[currentIndex].id}
            question={questions[currentIndex]}
            questionNumber={currentIndex + 1}
            totalQuestions={questions.length}
            onAnswer={handleAnswer}
          />
        </ScrollView>
      </SafeAreaView>
    );
  }

  // ── Results ────────────────────────────────────────────────────────────────
  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView contentContainerStyle={styles.scroll}>
        <Text style={styles.screenTitle}>Resultados</Text>

        <Card style={styles.scoreCard}>
          <Text style={styles.scorePercent}>{Math.round(score * 100)}%</Text>
          <Text style={styles.scoreLabel}>
            {correctCount} de {questions.length} correctas
          </Text>
          <Badge
            label={score >= 0.7 ? '¡Aprobado!' : 'Sigue practicando'}
            variant={score >= 0.7 ? 'success' : 'warning'}
            style={styles.scoreBadge}
          />
          <ProgressBar progress={score} color={score >= 0.7 ? Colors.secondary : Colors.warning} animated />
        </Card>

        <View style={styles.resultActions}>
          <Button title="Nuevo quiz" onPress={() => setQuizState('setup')} fullWidth size="lg" />
          <Button
            title="Ir al inicio"
            onPress={() => router.replace('/(tabs)')}
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
  safe:              { flex: 1, backgroundColor: Colors.background },
  scroll:            { padding: Spacing.lg, gap: Spacing.md },
  screenTitle:       { fontSize: FontSize.xxl, fontWeight: FontWeight.bold, color: Colors.textPrimary },
  screenSubtitle:    { fontSize: FontSize.md, color: Colors.textSecondary, marginBottom: Spacing.sm },
  section:           {},
  sectionTitle:      { fontSize: FontSize.md, fontWeight: FontWeight.semibold, color: Colors.textPrimary, marginBottom: Spacing.md },
  certSelector:      { flexDirection: 'row', gap: Spacing.sm },
  certOption:        { flex: 1, height: 44, borderRadius: BorderRadius.md, borderWidth: 1.5, borderColor: Colors.border, alignItems: 'center', justifyContent: 'center', backgroundColor: Colors.surfaceAlt },
  certOptionActive:  { borderColor: Colors.primary, backgroundColor: '#EEF2FF' },
  certText:          { fontWeight: FontWeight.medium, color: Colors.textSecondary },
  certTextActive:    { color: Colors.primary, fontWeight: FontWeight.bold },
  countSelector:     { flexDirection: 'row', gap: Spacing.sm },
  countOption:       { flex: 1, height: 44, borderRadius: BorderRadius.md, borderWidth: 1.5, borderColor: Colors.border, alignItems: 'center', justifyContent: 'center', backgroundColor: Colors.surfaceAlt },
  countOptionActive: { borderColor: Colors.primary, backgroundColor: '#EEF2FF' },
  countText:         { fontWeight: FontWeight.medium, color: Colors.textSecondary },
  countTextActive:   { color: Colors.primary, fontWeight: FontWeight.bold },
  startBtn:          { marginTop: Spacing.md },
  activeHeader:      { paddingHorizontal: Spacing.lg, paddingTop: Spacing.md, gap: Spacing.xs },
  progressLabel:     { fontSize: FontSize.xs, color: Colors.textTertiary, textAlign: 'right' },
  scoreCard:         { alignItems: 'center', gap: Spacing.sm },
  scorePercent:      { fontSize: 64, fontWeight: FontWeight.bold, color: Colors.primary },
  scoreLabel:        { fontSize: FontSize.lg, color: Colors.textSecondary },
  scoreBadge:        { alignSelf: 'center' },
  resultActions:     { gap: Spacing.sm },
});
