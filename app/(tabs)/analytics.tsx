import { Ionicons } from '@expo/vector-icons';
import React, { useMemo } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Card } from '@/components/ui/Card';
import { ProgressBar } from '@/components/ui/ProgressBar';
import { Colors } from '@/constants/colors';
import { BorderRadius, FontSize, FontWeight, Spacing } from '@/constants/layout';
import { useProgress } from '@/hooks/useProgress';

export default function AnalyticsScreen() {
  const stats = useProgress();

  const readiness = useMemo(() => {
    const accuracy = stats.overallAccuracy;
    if (stats.totalAttempted < 25) return { label: 'Early baseline', value: 0.35, tone: Colors.warning };
    if (accuracy >= 0.8) return { label: 'Strong readiness', value: 0.88, tone: Colors.secondary };
    if (accuracy >= 0.65) return { label: 'Building readiness', value: 0.68, tone: Colors.primary };
    return { label: 'Needs reinforcement', value: 0.45, tone: Colors.error };
  }, [stats.totalAttempted, stats.overallAccuracy]);

  const sortedDomains = [...stats.domainScores].sort((a, b) => a.percentage - b.percentage);
  const weakDomains = sortedDomains.slice(0, 3);
  const strongDomains = [...stats.domainScores].sort((a, b) => b.percentage - a.percentage).slice(0, 3);

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView contentContainerStyle={styles.scroll} showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>Analytics</Text>
        <Text style={styles.subtitle}>
          Mira tu readiness, dominios debiles y donde conviene concentrar la siguiente sesion.
        </Text>

        <Card style={styles.heroCard}>
          <View style={styles.heroHeader}>
            <View>
              <Text style={styles.heroEyebrow}>READINESS</Text>
              <Text style={styles.heroTitle}>{readiness.label}</Text>
              <Text style={styles.heroText}>
                {stats.totalAttempted} preguntas registradas con {Math.round(stats.overallAccuracy * 100)}% de precision general.
              </Text>
            </View>
            <View style={[styles.heroIcon, { backgroundColor: `${readiness.tone}18` }]}>
              <Ionicons name="analytics-outline" size={24} color={readiness.tone} />
            </View>
          </View>
          <ProgressBar progress={readiness.value} color={readiness.tone} animated />
        </Card>

        <View style={styles.statsRow}>
          <Card style={styles.metricCard}>
            <Text style={styles.metricLabel}>Precision</Text>
            <Text style={styles.metricValue}>{Math.round(stats.overallAccuracy * 100)}%</Text>
            <Text style={styles.metricSub}>global</Text>
          </Card>
          <Card style={styles.metricCard}>
            <Text style={styles.metricLabel}>Racha</Text>
            <Text style={styles.metricValue}>{stats.currentStreak}</Text>
            <Text style={styles.metricSub}>dias</Text>
          </Card>
        </View>

        <Card style={styles.sectionCard}>
          <Text style={styles.sectionTitle}>Weak Areas</Text>
          {weakDomains.length > 0 ? weakDomains.map((domain) => (
            <View key={domain.domain} style={styles.domainRow}>
              <View style={styles.domainCopy}>
                <Text style={styles.domainName}>{domain.domain}</Text>
                <Text style={styles.domainMeta}>{domain.correct}/{domain.total} correctas</Text>
              </View>
              <Text style={styles.domainPct}>{Math.round(domain.percentage * 100)}%</Text>
            </View>
          )) : (
            <Text style={styles.emptyText}>Todavia no hay suficiente historial para detectar debilidades.</Text>
          )}
        </Card>

        <Card style={styles.sectionCard}>
          <Text style={styles.sectionTitle}>Strong Areas</Text>
          {strongDomains.length > 0 ? strongDomains.map((domain) => (
            <View key={domain.domain} style={styles.domainRow}>
              <View style={styles.domainCopy}>
                <Text style={styles.domainName}>{domain.domain}</Text>
                <Text style={styles.domainMeta}>{domain.correct}/{domain.total} correctas</Text>
              </View>
              <Text style={[styles.domainPct, styles.domainPctStrong]}>
                {Math.round(domain.percentage * 100)}%
              </Text>
            </View>
          )) : (
            <Text style={styles.emptyText}>Completa algunas sesiones para poblar esta vista.</Text>
          )}
        </Card>

        <Card style={styles.sectionCard}>
          <Text style={styles.sectionTitle}>Next Best Focus</Text>
          <Text style={styles.recommendationText}>
            {weakDomains[0]
              ? `Empieza con ${weakDomains[0].domain} en Practice Questions y luego cierra con un Timed Drill corto.`
              : 'Empieza con una sesion de Practice Questions para construir datos y recomendaciones.'}
          </Text>
        </Card>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: Colors.background },
  scroll: { padding: Spacing.lg, gap: Spacing.md, paddingBottom: Spacing.xxl },
  title: { fontSize: FontSize.xxl, fontWeight: FontWeight.bold, color: Colors.textPrimary },
  subtitle: { fontSize: FontSize.md, color: Colors.textSecondary, lineHeight: 22 },
  heroCard: { gap: Spacing.md, borderRadius: 28 },
  heroHeader: { flexDirection: 'row', justifyContent: 'space-between', gap: Spacing.md },
  heroEyebrow: { fontSize: FontSize.xs, fontWeight: FontWeight.bold, letterSpacing: 1, color: Colors.primary },
  heroTitle: { fontSize: FontSize.xl, fontWeight: FontWeight.bold, color: Colors.textPrimary, marginTop: 4 },
  heroText: { marginTop: 6, color: Colors.textSecondary, lineHeight: 20, maxWidth: 240 },
  heroIcon: {
    width: 52,
    height: 52,
    borderRadius: BorderRadius.lg,
    alignItems: 'center',
    justifyContent: 'center',
  },
  statsRow: { flexDirection: 'row', gap: Spacing.md },
  metricCard: { flex: 1, borderRadius: 24, minHeight: 120, gap: 4 },
  metricLabel: { fontSize: FontSize.xs, fontWeight: FontWeight.semibold, color: Colors.textTertiary, textTransform: 'uppercase', letterSpacing: 0.8 },
  metricValue: { fontSize: 34, fontWeight: FontWeight.bold, color: Colors.textPrimary },
  metricSub: { color: Colors.textSecondary, fontSize: FontSize.sm },
  sectionCard: { borderRadius: 24, gap: Spacing.md },
  sectionTitle: { fontSize: FontSize.md, fontWeight: FontWeight.bold, color: Colors.textPrimary },
  domainRow: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', gap: Spacing.md },
  domainCopy: { flex: 1 },
  domainName: { fontSize: FontSize.sm, fontWeight: FontWeight.semibold, color: Colors.textPrimary },
  domainMeta: { marginTop: 2, fontSize: FontSize.xs, color: Colors.textSecondary },
  domainPct: { fontSize: FontSize.md, fontWeight: FontWeight.bold, color: Colors.error },
  domainPctStrong: { color: Colors.secondary },
  recommendationText: { fontSize: FontSize.sm, lineHeight: 21, color: Colors.textSecondary },
  emptyText: { fontSize: FontSize.sm, color: Colors.textSecondary, lineHeight: 20 },
});
