import React, { useRef, useState } from 'react';
import { Animated, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Colors } from '@/constants/colors';
import { BorderRadius, FontSize, FontWeight, Spacing } from '@/constants/layout';
import { Flashcard } from '@/lib/types';

interface FlashCardProps {
  card: Flashcard;
  onSwipeLeft?: () => void;  // "Necesito repasar"
  onSwipeRight?: () => void; // "Lo sé"
}

export function FlashCard({ card, onSwipeLeft, onSwipeRight }: FlashCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);
  const flipAnim = useRef(new Animated.Value(0)).current;

  const flip = () => {
    Animated.spring(flipAnim, {
      toValue: isFlipped ? 0 : 1,
      useNativeDriver: true,
      tension: 50,
      friction: 8,
    }).start();
    setIsFlipped(!isFlipped);
  };

  const frontRotate = flipAnim.interpolate({ inputRange: [0, 1], outputRange: ['0deg', '180deg'] });
  const backRotate  = flipAnim.interpolate({ inputRange: [0, 1], outputRange: ['180deg', '360deg'] });

  const frontOpacity = flipAnim.interpolate({ inputRange: [0, 0.5, 1], outputRange: [1, 0, 0] });
  const backOpacity  = flipAnim.interpolate({ inputRange: [0, 0.5, 1], outputRange: [0, 0, 1] });

  return (
    <View style={styles.container}>
      {/* Tarjeta */}
      <TouchableOpacity onPress={flip} activeOpacity={0.9} style={styles.cardWrapper}>
        {/* Frente */}
        <Animated.View
          style={[
            styles.card,
            styles.cardFront,
            { transform: [{ rotateY: frontRotate }], opacity: frontOpacity },
          ]}
        >
          <Text style={styles.hint}>Toca para ver la definición</Text>
          <Text style={styles.taskCode}>{card.taskCode}</Text>
          <Text style={styles.frontText}>{card.front}</Text>
          <View style={styles.domainBadge}>
            <Text style={styles.domainText}>{card.domain}</Text>
          </View>
        </Animated.View>

        {/* Atrás */}
        <Animated.View
          style={[
            styles.card,
            styles.cardBack,
            { transform: [{ rotateY: backRotate }], opacity: backOpacity, position: 'absolute', top: 0 },
          ]}
        >
          <Text style={styles.hint}>Definición</Text>
          <Text style={styles.backText}>{card.back}</Text>
        </Animated.View>
      </TouchableOpacity>

      {/* Botones de acción (sólo cuando está volteada) */}
      {isFlipped && (
        <View style={styles.actions}>
          <TouchableOpacity style={[styles.actionBtn, styles.actionBtnRepeat]} onPress={onSwipeLeft}>
            <Text style={styles.actionBtnText}>↩ Repasar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.actionBtn, styles.actionBtnKnow]} onPress={onSwipeRight}>
            <Text style={[styles.actionBtnText, styles.actionBtnTextKnow]}>Lo sé ✓</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container:   { alignItems: 'center', width: '100%' },
  cardWrapper: { width: '100%', height: 280 },
  card:        {
    width: '100%',
    height: 280,
    borderRadius: BorderRadius.xl,
    padding: Spacing.xl,
    justifyContent: 'center',
    alignItems: 'center',
    backfaceVisibility: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 5,
  },
  cardFront:        { backgroundColor: Colors.surface },
  cardBack:         { backgroundColor: Colors.primary, width: '100%', height: 280, borderRadius: BorderRadius.xl, padding: Spacing.xl, justifyContent: 'center', alignItems: 'center', backfaceVisibility: 'hidden' },
  hint:             { position: 'absolute', top: Spacing.md, fontSize: FontSize.xs, color: Colors.textTertiary },
  taskCode:         { fontSize: FontSize.xs, color: Colors.textTertiary, fontWeight: FontWeight.semibold, textTransform: 'uppercase', letterSpacing: 1, marginBottom: Spacing.md },
  frontText:        { fontSize: FontSize.xxl, fontWeight: FontWeight.bold, color: Colors.textPrimary, textAlign: 'center', lineHeight: 34 },
  backText:         { fontSize: FontSize.md, color: Colors.textInverse, textAlign: 'center', lineHeight: 26 },
  domainBadge:      { position: 'absolute', bottom: Spacing.md, backgroundColor: Colors.surfaceAlt, paddingHorizontal: Spacing.sm, paddingVertical: 3, borderRadius: BorderRadius.full },
  domainText:       { fontSize: FontSize.xs, color: Colors.textSecondary },
  actions:          { flexDirection: 'row', gap: Spacing.md, marginTop: Spacing.lg, width: '100%' },
  actionBtn:        { flex: 1, height: 48, borderRadius: BorderRadius.md, alignItems: 'center', justifyContent: 'center', borderWidth: 1.5 },
  actionBtnRepeat:  { borderColor: Colors.warning, backgroundColor: '#FFFBEB' },
  actionBtnKnow:    { borderColor: Colors.secondary, backgroundColor: '#ECFDF5' },
  actionBtnText:    { fontSize: FontSize.md, fontWeight: FontWeight.semibold, color: Colors.warning },
  actionBtnTextKnow:{ color: Colors.secondary },
});
