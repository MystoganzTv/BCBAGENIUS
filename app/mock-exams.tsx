import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Colors } from '@/constants/colors';
import { BorderRadius, FontSize, FontWeight, Spacing } from '@/constants/layout';

const EXAM_OPTIONS = [
  {
    title: 'Diagnostic Exam',
    count: 25,
    time: '30 min',
    description: 'Lectura rapida de baseline para detectar dominios debiles.',
  },
  {
    title: 'Mid-Length Mock',
    count: 50,
    time: '60 min',
    description: 'Sesion intermedia para stamina y precision sostenida.',
  },
  {
    title: 'Full Mock',
    count: 85,
    time: '90 min',
    description: 'Formato largo con timer global para practicar resistencia.',
  },
];

export default function MockExamsScreen() {
  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView contentContainerStyle={styles.scroll} showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>Mock Exams</Text>
        <Text style={styles.subtitle}>
          Igual que en una prep app seria, aqui el objetivo es stamina, pacing y lectura bajo presion.
        </Text>

        <Card style={styles.heroCard}>
          <View style={styles.heroRow}>
            <View style={styles.heroIcon}>
              <Ionicons name="document-text-outline" size={24} color={Colors.primary} />
            </View>
            <View style={styles.heroCopy}>
              <Text style={styles.heroTitle}>Exam-style sessions</Text>
              <Text style={styles.heroText}>
                Los mock exams no muestran explicacion inmediata. El review llega al final con weak areas.
              </Text>
            </View>
          </View>
        </Card>

        <View style={styles.examList}>
          {EXAM_OPTIONS.map((exam) => (
            <TouchableOpacity
              key={exam.title}
              activeOpacity={0.85}
              style={styles.examCard}
              onPress={() =>
                router.push({
                  pathname: '/(tabs)/quiz',
                  params: { mode: 'exam', count: String(exam.count) },
                })
              }
            >
              <View style={styles.examTopRow}>
                <Text style={styles.examTitle}>{exam.title}</Text>
                <View style={styles.examMetaPill}>
                  <Text style={styles.examMetaPillText}>{exam.time}</Text>
                </View>
              </View>
              <Text style={styles.examDescription}>{exam.description}</Text>
              <View style={styles.examFooter}>
                <Text style={styles.examCount}>{exam.count} preguntas</Text>
                <Ionicons name="arrow-forward-circle" size={22} color={Colors.primary} />
              </View>
            </TouchableOpacity>
          ))}
        </View>

        <Button title="Volver al dashboard" onPress={() => router.back()} variant="outline" fullWidth />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: Colors.background },
  scroll: { padding: Spacing.lg, gap: Spacing.md, paddingBottom: Spacing.xxl },
  title: { fontSize: FontSize.xxl, fontWeight: FontWeight.bold, color: Colors.textPrimary },
  subtitle: { fontSize: FontSize.md, color: Colors.textSecondary, lineHeight: 22 },
  heroCard: { borderRadius: 28 },
  heroRow: { flexDirection: 'row', gap: Spacing.md, alignItems: 'flex-start' },
  heroIcon: {
    width: 50,
    height: 50,
    borderRadius: BorderRadius.lg,
    backgroundColor: '#EEF2FF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  heroCopy: { flex: 1 },
  heroTitle: { fontSize: FontSize.lg, fontWeight: FontWeight.bold, color: Colors.textPrimary },
  heroText: { marginTop: 4, fontSize: FontSize.sm, lineHeight: 20, color: Colors.textSecondary },
  examList: { gap: Spacing.md },
  examCard: {
    borderRadius: 24,
    borderWidth: 1,
    borderColor: Colors.border,
    backgroundColor: Colors.surface,
    padding: Spacing.md,
    gap: Spacing.sm,
  },
  examTopRow: { flexDirection: 'row', justifyContent: 'space-between', gap: Spacing.md, alignItems: 'center' },
  examTitle: { flex: 1, fontSize: FontSize.lg, fontWeight: FontWeight.bold, color: Colors.textPrimary },
  examMetaPill: {
    borderRadius: BorderRadius.full,
    paddingHorizontal: 12,
    paddingVertical: 7,
    backgroundColor: '#EEF2FF',
  },
  examMetaPillText: { color: Colors.primary, fontWeight: FontWeight.bold, fontSize: FontSize.xs },
  examDescription: { fontSize: FontSize.sm, lineHeight: 20, color: Colors.textSecondary },
  examFooter: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  examCount: { color: Colors.textPrimary, fontWeight: FontWeight.semibold, fontSize: FontSize.sm },
});
