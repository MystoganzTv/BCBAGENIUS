import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FlashCard } from '@/components/flashcards/FlashCard';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { ProgressBar } from '@/components/ui/ProgressBar';
import { Colors } from '@/constants/colors';
import { BorderRadius, FontSize, FontWeight, Spacing } from '@/constants/layout';
import { getRandomFlashcards } from '@/data/flashcards';
import { useAuth } from '@/hooks/useAuth';
import { CertType, Flashcard } from '@/lib/types';

type DeckState = 'setup' | 'studying' | 'complete';

export default function FlashcardsScreen() {
  const { profile } = useAuth();
  const [deckState, setDeckState]   = useState<DeckState>('setup');
  const [certType, setCertType]     = useState<CertType>(profile?.certTarget ?? 'BCBA');
  const [deck, setDeck]             = useState<Flashcard[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [known, setKnown]           = useState(0);
  const [toReview, setToReview]     = useState(0);

  const startDeck = (count: number) => {
    const cards = getRandomFlashcards(count, certType);
    setDeck(cards);
    setCurrentIndex(0);
    setKnown(0);
    setToReview(0);
    setDeckState('studying');
  };

  const handleKnow = () => {
    setKnown((k) => k + 1);
    advance();
  };

  const handleReview = () => {
    setToReview((r) => r + 1);
    advance();
  };

  const advance = () => {
    if (currentIndex + 1 >= deck.length) {
      setDeckState('complete');
    } else {
      setCurrentIndex((i) => i + 1);
    }
  };

  // ── Setup ──────────────────────────────────────────────────────────────────
  if (deckState === 'setup') {
    return (
      <SafeAreaView style={styles.safe}>
        <ScrollView contentContainerStyle={styles.scroll}>
          <Text style={styles.screenTitle}>Flashcards</Text>
          <Text style={styles.screenSubtitle}>Repasa conceptos clave del Task List</Text>

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
            <Text style={styles.sectionTitle}>Tamaño del mazo</Text>
            <View style={styles.deckGrid}>
              {[
                { count: 5,  label: 'Rápido',    sub: '~5 min' },
                { count: 10, label: 'Estándar',  sub: '~10 min' },
                { count: 20, label: 'Intensivo', sub: '~20 min' },
              ].map(({ count, label, sub }) => (
                <TouchableOpacity
                  key={count}
                  style={styles.deckOption}
                  onPress={() => startDeck(count)}
                >
                  <Text style={styles.deckCount}>{count}</Text>
                  <Text style={styles.deckLabel}>{label}</Text>
                  <Text style={styles.deckSub}>{sub}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </Card>
        </ScrollView>
      </SafeAreaView>
    );
  }

  // ── Studying ───────────────────────────────────────────────────────────────
  if (deckState === 'studying') {
    return (
      <SafeAreaView style={styles.safe}>
        <View style={styles.studyHeader}>
          <ProgressBar progress={currentIndex / deck.length} animated />
          <Text style={styles.progressLabel}>{currentIndex + 1} / {deck.length}</Text>
        </View>
        <ScrollView contentContainerStyle={styles.scroll}>
          <FlashCard
            key={deck[currentIndex].id}
            card={deck[currentIndex]}
            onSwipeLeft={handleReview}
            onSwipeRight={handleKnow}
          />
        </ScrollView>
      </SafeAreaView>
    );
  }

  // ── Complete ───────────────────────────────────────────────────────────────
  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView contentContainerStyle={styles.scroll}>
        <Text style={styles.screenTitle}>Mazo completado 🎉</Text>
        <Card style={styles.resultsCard}>
          <View style={styles.resultRow}>
            <Text style={styles.resultEmoji}>✅</Text>
            <Text style={styles.resultLabel}>Las sé</Text>
            <Text style={styles.resultCount}>{known}</Text>
          </View>
          <View style={styles.divider} />
          <View style={styles.resultRow}>
            <Text style={styles.resultEmoji}>↩</Text>
            <Text style={styles.resultLabel}>A repasar</Text>
            <Text style={styles.resultCount}>{toReview}</Text>
          </View>
        </Card>
        <View style={styles.resultActions}>
          <Button title="Nuevo mazo" onPress={() => setDeckState('setup')} fullWidth size="lg" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe:              { flex: 1, backgroundColor: Colors.background },
  scroll:            { padding: Spacing.lg, gap: Spacing.md },
  screenTitle:       { fontSize: FontSize.xxl, fontWeight: FontWeight.bold, color: Colors.textPrimary },
  screenSubtitle:    { fontSize: FontSize.md, color: Colors.textSecondary },
  section:           {},
  sectionTitle:      { fontSize: FontSize.md, fontWeight: FontWeight.semibold, color: Colors.textPrimary, marginBottom: Spacing.md },
  certSelector:      { flexDirection: 'row', gap: Spacing.sm },
  certOption:        { flex: 1, height: 44, borderRadius: BorderRadius.md, borderWidth: 1.5, borderColor: Colors.border, alignItems: 'center', justifyContent: 'center', backgroundColor: Colors.surfaceAlt },
  certOptionActive:  { borderColor: Colors.primary, backgroundColor: '#EEF2FF' },
  certText:          { fontWeight: FontWeight.medium, color: Colors.textSecondary },
  certTextActive:    { color: Colors.primary, fontWeight: FontWeight.bold },
  deckGrid:          { flexDirection: 'row', gap: Spacing.sm },
  deckOption:        { flex: 1, backgroundColor: Colors.surfaceAlt, borderRadius: BorderRadius.md, padding: Spacing.md, alignItems: 'center', gap: 2 },
  deckCount:         { fontSize: FontSize.xxl, fontWeight: FontWeight.bold, color: Colors.primary },
  deckLabel:         { fontSize: FontSize.sm, fontWeight: FontWeight.semibold, color: Colors.textPrimary },
  deckSub:           { fontSize: FontSize.xs, color: Colors.textTertiary },
  studyHeader:       { paddingHorizontal: Spacing.lg, paddingTop: Spacing.md, gap: Spacing.xs },
  progressLabel:     { fontSize: FontSize.xs, color: Colors.textTertiary, textAlign: 'right' },
  resultsCard:       { gap: Spacing.md },
  resultRow:         { flexDirection: 'row', alignItems: 'center', gap: Spacing.md },
  resultEmoji:       { fontSize: 24 },
  resultLabel:       { flex: 1, fontSize: FontSize.lg, color: Colors.textPrimary },
  resultCount:       { fontSize: FontSize.xl, fontWeight: FontWeight.bold, color: Colors.primary },
  divider:           { height: 1, backgroundColor: Colors.border },
  resultActions:     { gap: Spacing.sm },
});
