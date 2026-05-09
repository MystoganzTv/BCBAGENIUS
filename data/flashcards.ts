import { Flashcard } from '@/lib/types';

export const SAMPLE_FLASHCARDS: Flashcard[] = [
  {
    id: 'fc-001',
    certType: 'BCBA',
    domain: 'Foundations',
    taskCode: 'A-01',
    front: 'Reinforcement',
    back: 'A consequence that increases the future frequency of the behavior it follows. Positive reinforcement adds a stimulus; negative reinforcement removes one.',
  },
  {
    id: 'fc-002',
    certType: 'BCBA',
    domain: 'Foundations',
    taskCode: 'A-04',
    front: 'Determinism',
    back: 'The assumption that behavior is lawful and occurs as a function of identifiable variables rather than randomness or free will.',
  },
  {
    id: 'fc-003',
    certType: 'BCBA',
    domain: 'Foundations',
    taskCode: 'A-07',
    front: 'Motivating Operation (MO)',
    back: 'An environmental event that changes the value of a consequence and changes the current frequency of the behavior that has produced that consequence in the past.',
  },
  {
    id: 'fc-004',
    certType: 'BCBA',
    domain: 'Foundations',
    taskCode: 'A-07',
    front: 'Establishing Operation (EO)',
    back: 'An MO that increases the effectiveness of a stimulus as reinforcement or punishment and evokes behavior that has contacted that consequence before.',
  },
  {
    id: 'fc-005',
    certType: 'BCBA',
    domain: 'Measurement',
    taskCode: 'B-01',
    front: 'Continuous Measurement',
    back: 'Measurement of each occurrence of the target response. Common examples are frequency, duration, latency, and interresponse time.',
  },
  {
    id: 'fc-006',
    certType: 'BCBA',
    domain: 'Measurement',
    taskCode: 'B-02',
    front: 'Whole Interval Recording',
    back: 'Scores behavior only if it occurs for the entire interval. It tends to underestimate the actual occurrence of behavior.',
  },
  {
    id: 'fc-007',
    certType: 'BCBA',
    domain: 'Measurement',
    taskCode: 'B-07',
    front: 'Latency',
    back: 'The elapsed time between a defined antecedent stimulus and the beginning of the response.',
  },
  {
    id: 'fc-008',
    certType: 'BCBA',
    domain: 'Experimental Design',
    taskCode: 'C-03',
    front: 'Multiple Baseline Design',
    back: 'A single-case design in which treatment is introduced sequentially across behaviors, settings, or participants to demonstrate control without reversal.',
  },
  {
    id: 'fc-009',
    certType: 'BCBA',
    domain: 'Experimental Design',
    taskCode: 'C-06',
    front: 'Visual Analysis',
    back: 'The process of evaluating level, trend, variability, overlap, and immediacy of effect in graphed single-case data.',
  },
  {
    id: 'fc-010',
    certType: 'BCBA',
    domain: 'Behavior Change',
    taskCode: 'E-01',
    front: 'Differential Reinforcement of Other Behavior (DRO)',
    back: 'Reinforcement is delivered when the target behavior has not occurred for a specified amount of time.',
  },
  {
    id: 'fc-011',
    certType: 'BCBA',
    domain: 'Behavior Change',
    taskCode: 'E-02',
    front: 'Differential Reinforcement of Alternative Behavior (DRA)',
    back: 'Reinforcement is delivered for a specific alternative response while reinforcement for the target response is withheld.',
  },
  {
    id: 'fc-012',
    certType: 'BCBA',
    domain: 'Behavior Change',
    taskCode: 'E-05',
    front: 'Shaping',
    back: 'Teaching a terminal behavior by reinforcing successive approximations and no longer reinforcing earlier approximations.',
  },
  {
    id: 'fc-013',
    certType: 'BCBA',
    domain: 'Behavior Change',
    taskCode: 'E-06',
    front: 'Chaining',
    back: 'Teaching a sequence of responses in which each response produces a stimulus change that cues the next response in the chain.',
  },
  {
    id: 'fc-014',
    certType: 'BCBA',
    domain: 'Ethics',
    taskCode: 'F-01',
    front: 'Informed Consent',
    back: 'Permission obtained after the client or legal decision-maker receives understandable information about services, risks, benefits, and alternatives.',
  },
  {
    id: 'fc-015',
    certType: 'BCBA',
    domain: 'Ethics',
    taskCode: 'F-07',
    front: 'Confidentiality',
    back: 'The obligation to protect identifying and sensitive client information and share it only when authorized and clinically appropriate.',
  },
  {
    id: 'fc-016',
    certType: 'BCBA',
    domain: 'Personnel Supervision',
    taskCode: 'G-02',
    front: 'Behavior Skills Training (BST)',
    back: 'A training package combining instructions, modeling, rehearsal, and feedback to build staff performance.',
  },
  {
    id: 'fc-017',
    certType: 'BCBA',
    domain: 'Applications',
    taskCode: 'AP-01',
    front: 'Mand',
    back: 'A verbal operant controlled by a motivating operation and maintained by the specific consequence requested by the speaker.',
  },
  {
    id: 'fc-018',
    certType: 'BCBA',
    domain: 'Applications',
    taskCode: 'AP-04',
    front: 'Discrete Trial Training (DTT)',
    back: 'A structured teaching format with a clear antecedent, response opportunity, programmed consequence, and brief intertrial interval.',
  },
];

function normalizeCertType(_certType?: 'BCBA' | 'BCaBA') {
  return 'BCBA' as const;
}

export function getFlashcardsByCert(certType: 'BCBA' | 'BCaBA') {
  return SAMPLE_FLASHCARDS.filter((f) => f.certType === normalizeCertType(certType));
}

export function getFlashcardsByDomain(domain: string) {
  return SAMPLE_FLASHCARDS.filter((f) => f.domain === domain);
}

export function getRandomFlashcards(count: number, certType?: 'BCBA' | 'BCaBA') {
  const pool = getFlashcardsByCert(certType ?? 'BCBA');
  const shuffled = [...pool].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
}
