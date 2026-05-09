import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import React from 'react';
import { ActivityIndicator, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Badge } from '@/components/ui/Badge';
import { Card } from '@/components/ui/Card';
import { ProgressBar } from '@/components/ui/ProgressBar';
import { Colors } from '@/constants/colors';
import { BorderRadius, FontSize, FontWeight, Spacing } from '@/constants/layout';
import { useAuth } from '@/hooks/useAuth';
import { useProgress } from '@/hooks/useProgress';

export default function DashboardScreen() {
  const { profile } = useAuth();
  const stats = useProgress();

  const quickActions = [
    { icon: 'school-outline' as const,  label: 'Quiz',       route: '/(tabs)/quiz',       color: Colors.primary },
    { icon: 'albums-outline' as const,  label: 'Flashcards', route: '/(tabs)/flashcards', color: Colors.secondary },
  ];

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView contentContainerStyle={styles.scroll} showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <View>
            <Text style={styles.greeting}>Hola, {profile?.fullName?.split(' ')[0] ?? 'estudiante'} 👋</Text>
            <Text style={styles.subGreeting}>Sigue estudiando para tu {profile?.certTarget ?? 'BCBA'}</Text>
          </View>
          <Badge label={profile?.certTarget ?? 'BCBA'} variant="info" />
        </View>

        {/* Racha */}
        <Card style={styles.streakCard}>
          <View style={styles.streakRow}>
            <Text style={styles.streakEmoji}>🔥</Text>
            <View style={styles.streakInfo}>
              <Text style={styles.streakCount}>{stats.currentStreak} días</Text>
              <Text style={styles.streakLabel}>racha actual</Text>
            </View>
            <View style={styles.streakDivider} />
            <View style={styles.streakInfo}>
              <Text style={styles.streakCount}>{stats.longestStreak}</Text>
              <Text style={styles.streakLabel}>record</Text>
            </View>
          </View>
        </Card>

        {/* Acciones rápidas */}
        <Text style={styles.sectionTitle}>Practicar ahora</Text>
        <View style={styles.quickActions}>
          {quickActions.map((action) => (
            <TouchableOpacity
              key={action.route}
              style={[styles.actionCard, { borderTopColor: action.color }]}
              onPress={() => router.push(action.route as any)}
              activeOpacity={0.8}
            >
              <Ionicons name={action.icon} size={28} color={action.color} />
              <Text style={styles.actionLabel}>{action.label}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Stats generales */}
        <Text style={styles.sectionTitle}>Tu progreso</Text>
        {stats.loading ? (
          <ActivityIndicator color={Colors.primary} />
        ) : (
          <>
            <View style={styles.statsRow}>
              <Card style={styles.statCard}>
                <Text style={styles.statValue}>{stats.totalSessions}</Text>
                <Text style={styles.statLabel}>Sesiones</Text>
              </Card>
              <Card style={styles.statCard}>
                <Text style={styles.statValue}>{Math.round(stats.overallAccuracy * 100)}%</Text>
                <Text style={styles.statLabel}>Precisión</Text>
              </Card>
              <Card style={styles.statCard}>
                <Text style={styles.statValue}>{stats.totalAttempted}</Text>
                <Text style={styles.statLabel}>Preguntas</Text>
              </Card>
            </View>

            {/* Progreso por dominio */}
            {stats.domainScores.length > 0 && (
              <Card style={styles.domainsCard}>
                <Text style={styles.domainsTitle}>Por dominio</Text>
                <View style={styles.domainsList}>
                  {stats.domainScores.map((d) => (
                    <View key={d.domain} style={styles.domainItem}>
                      <ProgressBar
                        progress={d.percentage}
                        label={d.domain}
                        showLabel
                        color={Colors.domains[d.domain as keyof typeof Colors.domains] ?? Colors.primary}
                      />
                    </View>
                  ))}
                </View>
              </Card>
            )}

            {/* Sesiones recientes */}
            {stats.recentSessions.length > 0 && (
              <Card style={styles.recentCard}>
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
                        {s.sessionType === 'quiz' ? 'Quiz' : 'Flashcards'} · {s.certType}
                      </Text>
                      <Text style={styles.sessionDate}>
                        {new Date(s.completedAt).toLocaleDateString('es', { month: 'short', day: 'numeric' })}
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

            {/* Estado vacío */}
            {stats.totalSessions === 0 && (
              <Card style={styles.emptyCard}>
                <Text style={styles.emptyEmoji}>📚</Text>
                <Text style={styles.emptyTitle}>¡Empieza a estudiar!</Text>
                <Text style={styles.emptyText}>
                  Completa tu primera sesión de quiz o flashcards para ver tu progreso aquí.
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
  scroll:         { padding: Spacing.lg, gap: Spacing.md },
  header:         { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start' },
  greeting:       { fontSize: FontSize.xl, fontWeight: FontWeight.bold, color: Colors.textPrimary },
  subGreeting:    { fontSize: FontSize.sm, color: Colors.textSecondary, marginTop: 2 },

  streakCard:     { backgroundColor: Colors.primary },
  streakRow:      { flexDirection: 'row', alignItems: 'center', gap: Spacing.md },
  streakEmoji:    { fontSize: 32 },
  streakInfo:     { alignItems: 'center' },
  streakCount:    { fontSize: FontSize.xxl, fontWeight: FontWeight.bold, color: Colors.textInverse },
  streakLabel:    { fontSize: FontSize.xs, color: '#C7D2FE' },
  streakDivider:  { width: 1, height: 40, backgroundColor: '#6366F1', marginHorizontal: Spacing.sm },

  sectionTitle:   { fontSize: FontSize.lg, fontWeight: FontWeight.semibold, color: Colors.textPrimary },
  quickActions:   { flexDirection: 'row', gap: Spacing.md },
  actionCard:     { flex: 1, backgroundColor: Colors.surface, borderRadius: BorderRadius.lg, padding: Spacing.md, alignItems: 'center', gap: Spacing.sm, borderTopWidth: 3, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.06, shadowRadius: 6, elevation: 2 },
  actionLabel:    { fontSize: FontSize.md, fontWeight: FontWeight.semibold, color: Colors.textPrimary },

  statsRow:       { flexDirection: 'row', gap: Spacing.sm },
  statCard:       { flex: 1, alignItems: 'center', gap: 2 },
  statValue:      { fontSize: FontSize.xxl, fontWeight: FontWeight.bold, color: Colors.primary },
  statLabel:      { fontSize: FontSize.xs, color: Colors.textSecondary },

  domainsCard:    {},
  domainsTitle:   { fontSize: FontSize.md, fontWeight: FontWeight.semibold, color: Colors.textPrimary, marginBottom: Spacing.md },
  domainsList:    { gap: Spacing.md },
  domainItem:     {},

  recentCard:     { gap: Spacing.sm },
  sessionRow:     { flexDirection: 'row', alignItems: 'center', gap: Spacing.sm, paddingVertical: Spacing.xs },
  sessionInfo:    { flex: 1 },
  sessionType:    { fontSize: FontSize.sm, fontWeight: FontWeight.medium, color: Colors.textPrimary },
  sessionDate:    { fontSize: FontSize.xs, color: Colors.textTertiary },

  emptyCard:      { alignItems: 'center', gap: Spacing.sm, paddingVertical: Spacing.xl },
  emptyEmoji:     { fontSize: 48 },
  emptyTitle:     { fontSize: FontSize.lg, fontWeight: FontWeight.bold, color: Colors.textPrimary },
  emptyText:      { fontSize: FontSize.sm, color: Colors.textSecondary, textAlign: 'center', lineHeight: 22 },
});
