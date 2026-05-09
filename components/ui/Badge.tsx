import React from 'react';
import { StyleSheet, Text, View, ViewStyle } from 'react-native';
import { Colors } from '@/constants/colors';
import { BorderRadius, FontSize, FontWeight, Spacing } from '@/constants/layout';

type BadgeVariant = 'default' | 'success' | 'error' | 'warning' | 'info';

interface BadgeProps {
  label: string;
  variant?: BadgeVariant;
  color?: string;
  style?: ViewStyle;
}

const variantStyles: Record<BadgeVariant, { bg: string; text: string }> = {
  default: { bg: Colors.surfaceAlt,  text: Colors.textSecondary },
  success: { bg: '#D1FAE5',          text: '#065F46' },
  error:   { bg: '#FEE2E2',          text: '#991B1B' },
  warning: { bg: '#FEF3C7',          text: '#92400E' },
  info:    { bg: '#DBEAFE',          text: '#1E40AF' },
};

export function Badge({ label, variant = 'default', color, style }: BadgeProps) {
  const vStyle = variantStyles[variant];
  return (
    <View
      style={[
        styles.badge,
        { backgroundColor: color ? `${color}22` : vStyle.bg },
        style,
      ]}
    >
      <Text style={[styles.label, { color: color ?? vStyle.text }]}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  badge: {
    borderRadius: BorderRadius.full,
    paddingHorizontal: Spacing.sm,
    paddingVertical: 3,
    alignSelf: 'flex-start',
  },
  label: {
    fontSize: FontSize.xs,
    fontWeight: FontWeight.semibold,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
});
