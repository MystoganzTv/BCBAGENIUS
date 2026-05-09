import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Card } from '@/components/ui/Card';
import { ProgressBar } from '@/components/ui/ProgressBar';
import { Colors } from '@/constants/colors';
import { FontSize, FontWeight, Spacing } from '@/constants/layout';

interface DomainScore {
  domain: string;
  correct: number;
  total: number;
  percentage: number;
}

interface DomainProgressProps {
  items: DomainScore[];
}

export function DomainProgress({ items }: DomainProgressProps) {
  return (
    <Card style={styles.card} padding="md">
      <View style={styles.header}>
        <View>
          <Text style={styles.title}>Domain Performance</Text>
          <Text style={styles.subtitle}>
            Tu precision por dominio mejora a medida que practicas mas preguntas.
          </Text>
        </View>
      </View>

      <View style={styles.list}>
        {items.map((item) => (
          <View key={item.domain} style={styles.row}>
            <View style={styles.rowHeader}>
              <Text style={styles.domain}>{item.domain}</Text>
              <Text style={styles.meta}>
                {Math.round(item.percentage * 100)}% · {item.correct}/{item.total}
              </Text>
            </View>
            <ProgressBar
              progress={item.percentage}
              color={Colors.domains[item.domain as keyof typeof Colors.domains] ?? Colors.primary}
              animated
            />
          </View>
        ))}
      </View>
    </Card>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 28,
  },
  header: {
    marginBottom: Spacing.md,
  },
  title: {
    fontSize: FontSize.sm,
    fontWeight: FontWeight.semibold,
    color: Colors.textPrimary,
  },
  subtitle: {
    marginTop: 4,
    fontSize: FontSize.xs,
    lineHeight: 18,
    color: Colors.textSecondary,
  },
  list: {
    gap: Spacing.md,
  },
  row: {
    gap: Spacing.xs,
  },
  rowHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: Spacing.sm,
  },
  domain: {
    flex: 1,
    fontSize: FontSize.sm,
    fontWeight: FontWeight.medium,
    color: Colors.textPrimary,
  },
  meta: {
    fontSize: FontSize.xs,
    fontWeight: FontWeight.semibold,
    color: Colors.textSecondary,
  },
});
