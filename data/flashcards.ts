import { Flashcard } from '@/lib/types';

export const SAMPLE_FLASHCARDS: Flashcard[] = [
  // ── Foundations ──────────────────────────────────────────────────────────
  {
    id: 'fc-001',
    certType: 'BCBA',
    domain: 'Foundations',
    taskCode: 'A-01',
    front: 'Reinforcement',
    back: 'A consequence that follows a behavior and increases the future frequency of that behavior. Can be positive (adding a stimulus) or negative (removing a stimulus).',
  },
  {
    id: 'fc-002',
    certType: 'BCBA',
    domain: 'Foundations',
    taskCode: 'A-01',
    front: 'Punishment',
    back: 'A consequence that follows a behavior and decreases the future frequency of that behavior. Can be positive (adding an aversive stimulus) or negative (removing a desired stimulus).',
  },
  {
    id: 'fc-003',
    certType: 'BCBA',
    domain: 'Foundations',
    taskCode: 'A-02',
    front: 'Motivating Operation (MO)',
    back: 'An environmental variable that (1) alters the effectiveness of a stimulus as a reinforcer or punisher, and (2) alters the frequency of behavior that has been reinforced or punished by that stimulus.',
  },
  {
    id: 'fc-004',
    certType: 'BCBA',
    domain: 'Foundations',
    taskCode: 'A-03',
    front: 'Establishing Operation (EO)',
    back: 'A type of MO that increases the effectiveness (value-altering effect) of a stimulus as a reinforcer and increases the frequency of behavior that produces that stimulus (behavior-altering effect).',
  },
  // ── Measurement ──────────────────────────────────────────────────────────
  {
    id: 'fc-005',
    certType: 'BCBA',
    domain: 'Measurement',
    taskCode: 'B-01',
    front: 'Continuous Measurement',
    back: 'Measurement of every occurrence of the behavior during the observation period. Includes frequency, duration, latency, and inter-response time (IRT).',
  },
  {
    id: 'fc-006',
    certType: 'BCBA',
    domain: 'Measurement',
    taskCode: 'B-02',
    front: 'Whole Interval Recording',
    back: 'Behavior is scored as occurring only if it occurs throughout the ENTIRE interval. Tends to underestimate the true frequency of behavior.',
  },
  {
    id: 'fc-007',
    certType: 'BCBA',
    domain: 'Measurement',
    taskCode: 'B-02',
    front: 'Partial Interval Recording',
    back: 'Behavior is scored as occurring if it occurs at ANY point during the interval. Tends to overestimate the true frequency of behavior.',
  },
  // ── Behavior Change ───────────────────────────────────────────────────────
  {
    id: 'fc-008',
    certType: 'BCBA',
    domain: 'Behavior Change',
    taskCode: 'E-01',
    front: 'Differential Reinforcement of Other Behavior (DRO)',
    back: 'Reinforcement is delivered after a specified interval during which the target behavior has NOT occurred. Does not specify what alternative behavior should occur.',
  },
  {
    id: 'fc-009',
    certType: 'BCBA',
    domain: 'Behavior Change',
    taskCode: 'E-02',
    front: 'Differential Reinforcement of Alternative Behavior (DRA)',
    back: 'Reinforcement is delivered for a specific alternative behavior while reinforcement is withheld for the target behavior. The alternative behavior serves the same function as the problem behavior.',
  },
  {
    id: 'fc-010',
    certType: 'BCBA',
    domain: 'Behavior Change',
    taskCode: 'E-05',
    front: 'Shaping',
    back: 'The process of systematically reinforcing successive approximations toward a terminal behavior while extinguishing previous approximations.',
  },
  {
    id: 'fc-011',
    certType: 'BCBA',
    domain: 'Behavior Change',
    taskCode: 'E-06',
    front: 'Chaining',
    back: 'A procedure used to teach a sequence of behaviors (behavior chain). Each step in the chain serves as both the SD for the next behavior and the reinforcer for the previous behavior.',
  },
  // ── Ethics ────────────────────────────────────────────────────────────────
  {
    id: 'fc-012',
    certType: 'BCBA',
    domain: 'Ethics',
    taskCode: 'F-03',
    front: 'Functional Behavior Assessment (FBA)',
    back: 'A systematic process for identifying the environmental variables that predict and maintain problem behavior. Includes indirect (interviews, rating scales), descriptive (ABC data), and experimental (functional analysis) methods.',
  },
  {
    id: 'fc-013',
    certType: 'BCaBA',
    domain: 'Foundations',
    taskCode: 'A-01',
    front: 'Extinction',
    back: 'The discontinuation of reinforcement for a previously reinforced behavior, resulting in a decrease in the future frequency of that behavior. May initially produce an extinction burst.',
  },
  {
    id: 'fc-014',
    certType: 'BCaBA',
    domain: 'Behavior Change',
    taskCode: 'E-03',
    front: 'Discrete Trial Training (DTT)',
    back: 'A structured teaching method that breaks skills into small, distinct components taught in a 1:1 format. Each trial consists of: discriminative stimulus (SD) → response → consequence (reinforcement or correction).',
  },
];

export function getFlashcardsByCert(certType: 'BCBA' | 'BCaBA') {
  return SAMPLE_FLASHCARDS.filter((f) => f.certType === certType);
}

export function getFlashcardsByDomain(domain: string) {
  return SAMPLE_FLASHCARDS.filter((f) => f.domain === domain);
}

export function getRandomFlashcards(count: number, certType?: 'BCBA' | 'BCaBA') {
  const pool = certType ? getFlashcardsByCert(certType) : SAMPLE_FLASHCARDS;
  const shuffled = [...pool].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
}
