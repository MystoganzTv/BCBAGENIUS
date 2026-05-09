import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { router } from 'expo-router';
import React from 'react';
import { ActivityIndicator, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { DomainProgress } from '@/components/dashboard/DomainProgress';
import { StatCard } from '@/components/dashboard/StatCard';
import { StreakCard } from '@/components/dashboard/StreakCard';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Badge } from '@/components/ui/Badge';
import { Card } from '@/components/ui/Card';
import { Colors } from '@/constants/colors';
import { BorderRadius, FontSize, FontWeight, Spacing } from '@/constants/layout';
import { useAuth } from '@/hooks/useAuth';
import { useProgress } from '@/hooks/useProgress';

export default function DashboardScreen() {
  const { profile } = useAuth();
  const stats = useProgress();
  const firstName = profile?.fullName?.split(' ')[0] ?? 'estudiante';
  const hasStudiedToday = stats.recentSessions.some((session) => {
    const completed = new Date(session.completedAt);
    const now = new Date();

    return (
      completed.getFullYear() === now.getFullYear() &&
      completed.getMonth() === now.getMonth() &&
      completed.getDate() === now.getDate()
    );
  });

  const quickActions = [
    {
      icon: 'school-outline' as const,
      label: 'Practice Questions',
      description: 'Drills por dominio, feedback inmediato y timed mode',
      route: '/(tabs)/quiz',
      color: Colors.primary,
      tint: '#EEF2FF',
    },
    {
      icon: 'document-text-outline' as const,
      label: 'Mock Exams',
      description: 'Simulacros con timer global y review al final',
      route: '/mock-exams',
      color: '#2563EB',
      tint: '#EFF6FF',
    },
    {
      icon: 'albums-outline' as const,
      label: 'Flashcards',
      description: 'Repasa conceptos y fortalece memoria',
      route: '/(tabs)/flashcards',
      color: Colors.secondary,
      tint: '#ECFDF5',
    },
    {
      icon: 'analytics-outline' as const,
      label: 'Analytics',
      description: 'Readiness, weak areas y foco recomendado',
      route: '/(tabs)/analytics',
      color: Colors.warning,
      tint: '#FFFBEB',
    },
  ];

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView contentContainerStyle={styles.scroll} showsVerticalScrollIndicator={false}>
        <LinearGradient
          colors={['#FFFFFF', '#F5F7FF']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.heroCard}
        >
          <View style={styles.heroGlow} />
          <View style={styles.header}>
            <View style={styles.headerCopy}>
              <Text style={styles.eyebrow}>BCBA GENIUS</Text>
              <Text style={styles.greeting}>Hola, {firstName}</Text>
              <Text style={styles.subGreeting}>
                Sigue estudiando para tu {profile?.certTarget ?? 'BCBA'} con sesiones cortas y consistentes.
              </Text>
            </View>
            <Badge label={profile?.certTarget ?? 'BCBA'} variant="info" style={styles.certBadge} />
          </View>

          <View style={styles.heroPills}>
            <View style={styles.heroPillPrimary}>
              <Text style={styles.heroPillPrimaryText}>
                {stats.currentStreak > 0 ? `Racha de ${stats.currentStreak} dias` : 'Empieza tu racha hoy'}
              </Text>
            </View>
            <View style={styles.heroPill}>
              <Text style={styles.heroPillText}>{stats.totalAttempted} preguntas respondidas</Text>
            </View>
          </View>
        </LinearGradient>

        {/* Acciones rápidas */}
        <Text style={styles.sectionTitle}>Study Sections</Text>
        <View style={styles.quickActions}>
          {quickActions.map((action) => (
            <TouchableOpacity
              key={action.route}
              style={styles.actionCard}
              onPress={() => router.push(action.route as any)}
              activeOpacity={0.8}
            >
              <View style={[styles.actionIconWrap, { backgroundColor: action.tint }]}>
                <Ionicons name={action.icon} size={24} color={action.color} />
              </View>
              <Text style={styles.actionLabel}>{action.label}</Text>
              <Text style={styles.actionDescription}>{action.description}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Stats generales */}
        {stats.loading ? (
          <ActivityIndicator color={Colors.primary} style={styles.loader} />
        ) : (
          <>
            <Text style={styles.sectionTitle}>Tu progreso</Text>
            <View style={styles.statsRow}>
              <StatCard
                title="Sesiones"
                value={String(stats.totalSessions)}
                subtitle="Practica acumulada"
                icon="calendar-outline"
                accent="primary"
              />
              <StatCard
                title="Precision"
                value={`${Math.round(stats.overallAccuracy * 100)}%`}
                subtitle="Promedio general"
                icon="analytics-outline"
                accent="secondary"
              />
            </View>

            <View style={styles.statsRow}>
              <StatCard
                title="Preguntas"
                value={String(stats.totalAttempted)}
                subtitle={`${stats.totalCorrect} correctas registradas`}
                icon="help-circle-outline"
                accent="info"
              />
              <StatCard
                title="Mejor Racha"
                value={String(stats.longestStreak)}
                subtitle="Tu record historico"
                icon="flame-outline"
                accent="warning"
              />
            </View>

            <StreakCard
              streak={stats.currentStreak}
              longestStreak={stats.longestStreak}
              hasStudiedToday={hasStudiedToday}
            />

            {stats.domainScores.length > 0 && (
              <DomainProgress items={stats.domainScores} />
            )}

            {stats.recentSessions.length > 0 && (
              <Card style={styles.recentCard} padding="md">
                <Text style={styles.domainsTitle}>Actividad reciente</Text>
                {stats.recentSessions.map((s) => (
                  <View key={s.id} style={styles.sessionRow}>
                    <Ionicons
                      name={s.sessionType === 'quiz' ? 'school-outline' : 'albums-outline'}
                      size={18}
                      color={Colors.textSecondary}
                    />
                    <View style={styles.sessionInfo}>
                      <Text style={styles.sessionType}>
                        {s.sessionType === 'quiz'
                          ? `${s.studyMode === 'exam' ? 'Mock Exam' : s.studyMode === 'timed' ? 'Timed Drill' : 'Practice Questions'} · ${s.certType}`
                          : `Flashcards · ${s.certType}`}
                      </Text>
                      <Text style={styles.sessionDate}>
                        {new Date(s.completedAt).toLocaleDateString('es', {
                          month: 'short',
                          day: 'numeric',
                        })}
                      </Text>
                    </View>
                    <Badge
                      label={`${s.correctAnswers}/${s.questionsAttempted}`}
                      variant={s.correctAnswers / s.questionsAttempted >= 0.7 ? 'success' : 'warning'}
                    />
                  </View>
                ))}
              </Card>
            )}

            {stats.totalSessions === 0 && (
              <Card style={styles.emptyCard} padding="lg">
                <View style={styles.emptyIconWrap}>
                  <Ionicons name="sparkles-outline" size={26} color={Colors.primary} />
                </View>
                <Text style={styles.emptyTitle}>Tu tablero se llenara con tu primera sesion</Text>
                <Text style={styles.emptyText}>
                  Completa un quiz o un mazo de flashcards y empezaremos a construir tu progreso aqui.
                </Text>
              </Card>
            )}
          </>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe:           { flex: 1, backgroundColor: Colors.background },
  scroll:         { padding: Spacing.lg, gap: Spacing.md, paddingBottom: Spacing.xxl },
  heroCard:       {
    overflow: 'hidden',
    borderRadius: 32,
    borderWidth: 1,
    borderColor: '#E0E7FF',
    padding: Spacing.lg,
    shadowColor: '#1E1B4B',
    shadowOffset: { width: 0, height: 14 },
    shadowOpacity: 0.08,
    shadowRadius: 32,
    elevation: 6,
  },
  heroGlow:       {
    position: 'absolute',
    top: -42,
    right: -32,
    width: 160,
    height: 160,
    borderRadius: 80,
    backgroundColor: '#E0E7FF',
  },
  header:         { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start', gap: Spacing.md },
  headerCopy:     { flex: 1 },
  eyebrow:        { fontSize: 10, fontWeight: FontWeight.bold, letterSpacing: 1.4, color: Colors.primary, marginBottom: 6 },
  greeting:       { fontSize: 28, fontWeight: FontWeight.bold, color: Colors.textPrimary },
  subGreeting:    { fontSize: FontSize.sm, color: Colors.textSecondary, marginTop: 6, lineHeight: 20 },
  certBadge:      { marginTop: 4 },
  heroPills:      { flexDirection: 'row', flexWrap: 'wrap', gap: Spacing.sm, marginTop: Spacing.lg },
  heroPillPrimary:{ borderRadius: BorderRadius.full, backgroundColor: Colors.primary, paddingHorizontal: 14, paddingVertical: 10 },
  heroPillPrimaryText: { fontSize: FontSize.sm, fontWeight: FontWeight.semibold, color: Colors.textInverse },
  heroPill:       { borderRadius: BorderRadius.full, backgroundColor: Colors.surface, borderWidth: 1, borderColor: Colors.border, paddingHorizontal: 14, paddingVertical: 10 },
  heroPillText:   { fontSize: FontSize.sm, fontWeight: FontWeight.semibold, color: Colors.textSecondary },
  sectionTitle:   { fontSize: FontSize.lg, fontWeight: FontWeight.semibold, color: Colors.textPrimary, marginTop: 2 },
  quickActions:   { flexDirection: 'row', flexWrap: 'wrap', gap: Spacing.md },
  actionCard:     {
    width: '47%',
    backgroundColor: Colors.surface,
    borderRadius: 28,
    padding: Spacing.md,
    borderWidth: 1,
    borderColor: Colors.border,
    shadowColor: '#0F172A',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.05,
    shadowRadius: 24,
    elevation: 3,
  },
  actionIconWrap: {
    width: 46,
    height: 46,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: Spacing.sm,
  },
  actionLabel:    { fontSize: FontSize.md, fontWeight: FontWeight.semibold, color: Colors.textPrimary },
  actionDescription: { marginTop: 4, fontSize: FontSize.xs, lineHeight: 18, color: Colors.textSecondary },
  loader:         { marginTop: Spacing.lg },
  statsRow:       { flexDirection: 'row', gap: Spacing.sm },
  domainsTitle:   { fontSize: FontSize.md, fontWeight: FontWeight.semibold, color: Colors.textPrimary, marginBottom: Spacing.md },
  recentCard:     { gap: Spacing.sm, borderRadius: 28 },
  sessionRow:     { flexDirection: 'row', alignItems: 'center', gap: Spacing.sm, paddingVertical: Spacing.xs },
  sessionInfo:    { flex: 1 },
  sessionType:    { fontSize: FontSize.sm, fontWeight: FontWeight.medium, color: Colors.textPrimary },
  sessionDate:    { fontSize: FontSize.xs, color: Colors.textTertiary },
  emptyCard:      { alignItems: 'center', gap: Spacing.sm, paddingVertical: Spacing.xl, borderRadius: 28 },
  emptyIconWrap:  {
    width: 60,
    height: 60,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#EEF2FF',
  },
  emptyTitle:     { fontSize: FontSize.lg, fontWeight: FontWeight.bold, color: Colors.textPrimary },
  emptyText:      { fontSize: FontSize.sm, color: Colors.textSecondary, textAlign: 'center', lineHeight: 22 },
});
