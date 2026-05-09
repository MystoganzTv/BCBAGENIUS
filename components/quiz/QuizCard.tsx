import { Ionicons } from '@expo/vector-icons';
import * as Haptics from 'expo-haptics';
import React, { useState } from 'react';
import { Animated, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Badge } from '@/components/ui/Badge';
import { Card } from '@/components/ui/Card';
import { Colors } from '@/constants/colors';
import { BorderRadius, FontSize, FontWeight, Spacing } from '@/constants/layout';
import { QuizQuestion } from '@/lib/types';

interface QuizCardProps {
  question: QuizQuestion;
  questionNumber: number;
  totalQuestions: number;
  onAnswer: (selectedIndex: number, isCorrect: boolean) => void;
}

export function QuizCard({ question, questionNumber, totalQuestions, onAnswer }: QuizCardProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);

  const handleSelect = (index: number) => {
    if (selectedIndex !== null) return; // Ya respondida
    setSelectedIndex(index);
    const isCorrect = index === question.correctIndex;
    Haptics.impactAsync(isCorrect ? Haptics.ImpactFeedbackStyle.Light : Haptics.ImpactFeedbackStyle.Heavy);
    setShowExplanation(true);
    onAnswer(index, isCorrect);
  };

  const getOptionStyle = (index: number) => {
    if (selectedIndex === null) return styles.optionDefault;
    if (index === question.correctIndex) return styles.optionCorrect;
    if (index === selectedIndex) return styles.optionWrong;
    return styles.optionDefault;
  };

  const getOptionTextStyle = (index: number) => {
    if (selectedIndex === null) return styles.optionTextDefault;
    if (index === question.correctIndex) return styles.optionTextCorrect;
    if (index === selectedIndex) return styles.optionTextWrong;
    return styles.optionTextDefault;
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Badge
          label={question.domain}
          color={Colors.domains[question.domain as keyof typeof Colors.domains]}
        />
        <View style={styles.counter}>
          <Text style={styles.counterText}>{questionNumber} / {totalQuestions}</Text>
        </View>
      </View>

      {/* Pregunta */}
      <Card style={styles.questionCard}>
        <Text style={styles.taskCode}>{question.taskCode}</Text>
        <Text style={styles.questionText}>{question.question}</Text>
      </Card>

      {/* Opciones */}
      <View style={styles.options}>
        {question.options.map((option, index) => (
          <TouchableOpacity
            key={index}
            style={[styles.option, getOptionStyle(index)]}
            onPress={() => handleSelect(index)}
            activeOpacity={0.75}
            disabled={selectedIndex !== null}
          >
            <View style={styles.optionInner}>
              <View style={[styles.optionLabel, getOptionStyle(index)]}>
                <Text style={[styles.optionLabelText, getOptionTextStyle(index)]}>
                  {String.fromCharCode(65 + index)}
                </Text>
              </View>
              <Text style={[styles.optionText, getOptionTextStyle(index)]}>{option}</Text>
              {selectedIndex !== null && index === question.correctIndex && (
                <Ionicons name="checkmark-circle" size={20} color={Colors.secondary} style={styles.icon} />
              )}
              {selectedIndex === index && index !== question.correctIndex && (
                <Ionicons name="close-circle" size={20} color={Colors.error} style={styles.icon} />
              )}
            </View>
          </TouchableOpacity>
        ))}
      </View>

      {/* Explicación */}
      {showExplanation && (
        <Card style={styles.explanationCard} padding="md">
          <View style={styles.explanationHeader}>
            <Ionicons
              name={selectedIndex === question.correctIndex ? 'checkmark-circle' : 'information-circle'}
              size={18}
              color={selectedIndex === question.correctIndex ? Colors.secondary : Colors.primary}
            />
            <Text style={styles.explanationTitle}>
              {selectedIndex === question.correctIndex ? '¡Correcto!' : 'Explicación'}
            </Text>
          </View>
          <Text style={styles.explanationText}>{question.explanation}</Text>
        </Card>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container:          { gap: Spacing.md },
  header:             { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  counter:            { backgroundColor: Colors.surfaceAlt, paddingHorizontal: Spacing.sm, paddingVertical: 4, borderRadius: BorderRadius.full },
  counterText:        { fontSize: FontSize.sm, color: Colors.textSecondary, fontWeight: FontWeight.medium },
  questionCard:       { backgroundColor: Colors.surface },
  taskCode:           { fontSize: FontSize.xs, color: Colors.textTertiary, fontWeight: FontWeight.semibold, marginBottom: Spacing.xs, textTransform: 'uppercase', letterSpacing: 1 },
  questionText:       { fontSize: FontSize.lg, fontWeight: FontWeight.semibold, color: Colors.textPrimary, lineHeight: 26 },
  options:            { gap: Spacing.sm },
  option:             { borderRadius: BorderRadius.md, borderWidth: 1.5, padding: Spacing.md },
  optionDefault:      { borderColor: Colors.border, backgroundColor: Colors.surface },
  optionCorrect:      { borderColor: Colors.secondary, backgroundColor: '#ECFDF5' },
  optionWrong:        { borderColor: Colors.error, backgroundColor: '#FEF2F2' },
  optionInner:        { flexDirection: 'row', alignItems: 'center', gap: Spacing.sm },
  optionLabel:        { width: 28, height: 28, borderRadius: 14, alignItems: 'center', justifyContent: 'center' },
  optionLabelText:    { fontSize: FontSize.sm, fontWeight: FontWeight.bold },
  optionText:         { flex: 1, fontSize: FontSize.md, lineHeight: 22 },
  optionTextDefault:  { color: Colors.textPrimary },
  optionTextCorrect:  { color: '#065F46' },
  optionTextWrong:    { color: '#991B1B' },
  icon:               { marginLeft: 'auto' },
  explanationCard:    { backgroundColor: '#F0FDF4', borderColor: Colors.secondary },
  explanationHeader:  { flexDirection: 'row', alignItems: 'center', gap: Spacing.xs, marginBottom: Spacing.xs },
  explanationTitle:   { fontSize: FontSize.md, fontWeight: FontWeight.semibold, color: Colors.textPrimary },
  explanationText:    { fontSize: FontSize.sm, color: Colors.textSecondary, lineHeight: 20 },
});
