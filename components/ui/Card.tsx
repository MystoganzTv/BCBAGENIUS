import React from 'react';
import { StyleSheet, View, ViewProps } from 'react-native';
import { Colors } from '@/constants/colors';
import { BorderRadius, Spacing } from '@/constants/layout';

interface CardProps extends ViewProps {
  padding?: keyof typeof Spacing | number;
  elevated?: boolean;
}

export function Card({ children, style, padding = 'md', elevated = true, ...props }: CardProps) {
  const paddingValue = typeof padding === 'number' ? padding : Spacing[padding];

  return (
    <View
      style={[
        styles.card,
        elevated && styles.elevated,
        { padding: paddingValue },
        style,
      ]}
      {...props}
    >
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.surface,
    borderRadius: BorderRadius.lg,
    borderWidth: 1,
    borderColor: Colors.border,
  },
  elevated: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 8,
    elevation: 3,
  },
});
