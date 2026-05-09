import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Card } from '@/components/ui/Card';
import { Colors } from '@/constants/colors';
import { BorderRadius, FontSize, FontWeight, Spacing } from '@/constants/layout';

interface StreakCardProps {
  streak: number;
  longestStreak: number;
  hasStudiedToday: boolean;
}

const DAYS = ['L', 'M', 'X', 'J', 'V', 'S', 'D'];

export function StreakCard({ streak, longestStreak, hasStudiedToday }: StreakCardProps) {
  const today = new Date().getDay();
  const adjustedToday = today === 0 ? 6 : today - 1;

  return (
    <Card style={styles.card} padding="md">
      <View style={styles.header}>
        <View>
          <Text style={styles.title}>Study Streak</Text>
          <Text style={styles.subtitle}>
            {streak > 0 ? `${streak} dias seguidos` : hasStudiedToday ? 'Arrancaste hoy' : 'Sin racha aun'}
          </Text>
        </View>

        <View style={styles.badge}>
          <Ionicons name="flame" size={14} color="#EA580C" />
          <Text style={styles.badgeText}>
            Record {longestStreak}
          </Text>
        </View>
      </View>

      <View style={styles.daysRow}>
        {DAYS.map((day, index) => {
          const distanceBack = (adjustedToday - index + 7) % 7;
          const completed = hasStudiedToday
            ? distanceBack >= 0 && distanceBack < streak
            : streak > 0 && distanceBack > 0 && distanceBack <= streak;
          const isToday = distanceBack === 0;

          return (
            <View key={`${day}-${index}`} style={styles.dayWrap}>
              <View
                style={[
                  styles.dayBubble,
                  completed && styles.dayBubbleDone,
                  !completed && isToday && styles.dayBubbleToday,
                ]}
              >
                <Text
                  style={[
                    styles.dayText,
                    completed && styles.dayTextDone,
                    !completed && isToday && styles.dayTextToday,
                  ]}
                >
                  {completed ? '✓' : day}
                </Text>
              </View>
              <Text style={styles.dayLabel}>{day}</Text>
            </View>
          );
        })}
      </View>
    </Card>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 28,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: Spacing.md,
    marginBottom: Spacing.md,
  },
  title: {
    fontSize: FontSize.sm,
    fontWeight: FontWeight.semibold,
    color: Colors.textPrimary,
  },
  subtitle: {
    marginTop: 2,
    fontSize: FontSize.xs,
    color: Colors.textSecondary,
  },
  badge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    borderRadius: BorderRadius.full,
    borderWidth: 1,
    borderColor: '#FDBA74',
    backgroundColor: '#FFF7ED',
    paddingHorizontal: Spacing.sm,
    paddingVertical: 6,
  },
  badgeText: {
    fontSize: FontSize.xs,
    fontWeight: FontWeight.bold,
    color: '#C2410C',
  },
  daysRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 6,
  },
  dayWrap: {
    alignItems: 'center',
    gap: 6,
  },
  dayBubble: {
    width: 34,
    height: 34,
    borderRadius: BorderRadius.md,
    backgroundColor: Colors.surfaceAlt,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dayBubbleDone: {
    backgroundColor: '#EEF2FF',
    borderWidth: 1,
    borderColor: '#C7D2FE',
  },
  dayBubbleToday: {
    backgroundColor: '#FFF7ED',
    borderWidth: 1,
    borderColor: '#FDBA74',
  },
  dayText: {
    fontSize: FontSize.xs,
    fontWeight: FontWeight.semibold,
    color: Colors.textTertiary,
  },
  dayTextDone: {
    color: Colors.primary,
  },
  dayTextToday: {
    color: '#C2410C',
  },
  dayLabel: {
    fontSize: 10,
    color: Colors.textTertiary,
  },
});
