import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Card } from '@/components/ui/Card';
import { Colors } from '@/constants/colors';
import { BorderRadius, FontSize, FontWeight, Spacing } from '@/constants/layout';

type Accent = 'primary' | 'secondary' | 'warning' | 'info';
type IconName = React.ComponentProps<typeof Ionicons>['name'];

interface StatCardProps {
  title: string;
  value: string;
  subtitle?: string;
  icon: IconName;
  accent?: Accent;
}

const accentStyles: Record<Accent, { bg: string; fg: string }> = {
  primary: { bg: '#EEF2FF', fg: Colors.primary },
  secondary: { bg: '#ECFDF5', fg: Colors.secondary },
  warning: { bg: '#FFFBEB', fg: Colors.warning },
  info: { bg: '#EFF6FF', fg: '#2563EB' },
};

export function StatCard({ title, value, subtitle, icon, accent = 'primary' }: StatCardProps) {
  const palette = accentStyles[accent];

  return (
    <Card style={styles.card} padding="md">
      <View style={styles.header}>
        <View>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.value}>{value}</Text>
          {subtitle ? <Text style={styles.subtitle}>{subtitle}</Text> : null}
        </View>

        <View style={[styles.iconWrap, { backgroundColor: palette.bg }]}>
          <Ionicons name={icon} size={18} color={palette.fg} />
        </View>
      </View>
    </Card>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    minHeight: 126,
    borderRadius: 28,
  },
  header: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: Spacing.sm,
  },
  title: {
    fontSize: FontSize.xs,
    fontWeight: FontWeight.semibold,
    textTransform: 'uppercase',
    letterSpacing: 0.8,
    color: Colors.textTertiary,
    marginBottom: Spacing.xs,
  },
  value: {
    fontSize: 30,
    fontWeight: FontWeight.bold,
    color: Colors.textPrimary,
  },
  subtitle: {
    marginTop: Spacing.xs,
    fontSize: FontSize.xs,
    lineHeight: 16,
    color: Colors.textSecondary,
    maxWidth: 150,
  },
  iconWrap: {
    width: 40,
    height: 40,
    borderRadius: BorderRadius.lg,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
