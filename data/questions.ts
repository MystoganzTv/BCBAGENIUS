import { QuizQuestion } from '@/lib/types';

// ═══════════════════════════════════════════════════════════════════════════
//  ABAGenius — Banco de preguntas
//  BACB Task List 6th Edition · BCBA & BCaBA
//  ~65 preguntas cubriendo los 7 dominios
// ═══════════════════════════════════════════════════════════════════════════

export const ALL_QUESTIONS: QuizQuestion[] = [

  // ──────────────────────────────────────────────────────────────────────────
  // DOMAIN A · FOUNDATIONS
  // ──────────────────────────────────────────────────────────────────────────
  {
    id: 'q-A-001', certType: 'BCBA', domain: 'Foundations', taskCode: 'A-01',
    question: 'Which statement best reflects the philosophical assumption of determinism in behavior analysis?',
    options: [
      'Behavior is random and cannot be systematically studied.',
      'Every behavior has identifiable causes rooted in environmental variables.',
      'Internal mental states are the primary causes of all behavior.',
      'Behavior is predetermined by genetic factors alone.',
    ],
    correctIndex: 1,
    explanation: 'Determinism holds that all behavior has specific, lawful causes that can be identified and studied. This allows behavior analysts to predict and control behavior through environmental manipulation.',
    difficulty: 'easy',
  },
  {
    id: 'q-A-002', certType: 'BCBA', domain: 'Foundations', taskCode: 'A-02',
    question: 'The concept of "parsimony" in behavior analysis suggests that:',
    options: [
      'Complex hypothetical constructs should always be preferred.',
      'The simplest explanation that accounts for the data should be favored.',
      'Multiple competing explanations should be accepted simultaneously.',
      'Mentalistic explanations are equally valid as behavioral ones.',
    ],
    correctIndex: 1,
    explanation: 'Parsimony (Occam\'s Razor) requires that behavior analysts adopt the simplest, most logical explanation supported by the data before considering more complex ones, including hypothetical constructs.',
    difficulty: 'medium',
  },
  {
    id: 'q-A-003', certType: 'BCBA', domain: 'Foundations', taskCode: 'A-03',
    question: 'Which of the following is an example of a private event?',
    options: [
      'A student raising her hand in class.',
      'A person saying "I feel anxious" aloud.',
      'A headache experienced by a client that only he can directly observe.',
      'Running away from a loud noise.',
    ],
    correctIndex: 2,
    explanation: 'Private events are behaviors (covert responses) that occur inside the skin and are accessible only to the organism emitting them, such as thoughts, feelings, and private physical states.',
    difficulty: 'easy',
  },
  {
    id: 'q-A-004', certType: 'BCBA', domain: 'Foundations', taskCode: 'A-04',
    question: 'Mentalism as criticized by radical behaviorism refers to:',
    options: [
      'The use of indirect measurement of behavior.',
      'Explaining behavior by appealing to internal mental events as autonomous causes.',
      'The study of private events using self-report.',
      'Measuring cognitive processes through performance tests.',
    ],
    correctIndex: 1,
    explanation: 'Radical behaviorism criticizes mentalism because it invokes hypothetical internal states (e.g., "he hit because he was frustrated") as explanations, which creates circular reasoning and doesn\'t advance understanding of environmental causes.',
    difficulty: 'medium',
  },
  {
    id: 'q-A-005', certType: 'BCBA', domain: 'Foundations', taskCode: 'A-05',
    question: 'A behavior analyst states that a child "misbehaves because of ADHD." This is an example of:',
    options: [
      'A valid functional hypothesis.',
      'A circular, mentalistic explanation.',
      'A structural behavioral definition.',
      'A proper environmental analysis.',
    ],
    correctIndex: 1,
    explanation: 'Citing ADHD as the cause of behavior is circular: the behavior is used to diagnose ADHD, then ADHD is used to explain the behavior. Behavior analysis seeks environmental causes rather than hypothetical internal constructs.',
    difficulty: 'medium',
  },
  {
    id: 'q-A-006', certType: 'BCBA', domain: 'Foundations', taskCode: 'A-06',
    question: 'In radical behaviorism, private events are:',
    options: [
      'Dismissed as unimportant and irrelevant to behavior analysis.',
      'Considered legitimate behaviors subject to the same environmental variables as public behaviors.',
      'Treated as the primary causes of observable behavior.',
      'Accessible only through introspection and self-report.',
    ],
    correctIndex: 1,
    explanation: 'Radical behaviorism, developed by Skinner, acknowledges private events as real behaviors occurring within the organism. They are subject to the same controlling variables (antecedents, consequences) as observable behaviors.',
    difficulty: 'medium',
  },
  {
    id: 'q-A-007', certType: 'BCBA', domain: 'Foundations', taskCode: 'A-07',
    question: 'Which of the following best exemplifies the concept of a "motivating operation" (MO)?',
    options: [
      'A therapist presents a picture card as an SD for manding.',
      'Food deprivation that increases the reinforcing value of food and the frequency of food-seeking behavior.',
      'A token delivered immediately after a correct response.',
      'A time-out contingency that reduces aggression.',
    ],
    correctIndex: 1,
    explanation: 'An MO has two effects: a value-altering effect (changes the reinforcing or punishing effectiveness of a stimulus) and a behavior-altering effect (changes the frequency of behavior reinforced/punished by that stimulus). Food deprivation makes food more reinforcing and increases food-seeking.',
    difficulty: 'easy',
  },
  {
    id: 'q-A-008', certType: 'BCaBA', domain: 'Foundations', taskCode: 'A-01',
    question: 'The three-term contingency (ABC) consists of:',
    options: [
      'Antecedent, Behavior, Consequence.',
      'Assessment, Behavior, Condition.',
      'Antecedent, Baseline, Control.',
      'Attention, Behavior, Communication.',
    ],
    correctIndex: 0,
    explanation: 'The three-term contingency describes the relationship between the discriminative stimulus (antecedent), the operant response (behavior), and the reinforcing or punishing consequence. It is the basic unit of operant analysis.',
    difficulty: 'easy',
  },
  {
    id: 'q-A-009', certType: 'BCaBA', domain: 'Foundations', taskCode: 'A-02',
    question: 'Which philosopher\'s work is most closely associated with the philosophical roots of behaviorism?',
    options: [
      'René Descartes.',
      'Aristotle.',
      'John Locke and British Empiricism.',
      'Plato.',
    ],
    correctIndex: 2,
    explanation: 'Behaviorism\'s philosophical roots include British Empiricism (Locke, Hume) which held that the mind is a blank slate shaped by experience, and Charles Darwin\'s evolutionary theory which linked human and animal behavior.',
    difficulty: 'hard',
  },

  // ──────────────────────────────────────────────────────────────────────────
  // DOMAIN B · MEASUREMENT
  // ──────────────────────────────────────────────────────────────────────────
  {
    id: 'q-B-001', certType: 'BCBA', domain: 'Measurement', taskCode: 'B-01',
    question: 'A behavior analyst counts the number of times a student leaves their seat during a 45-minute class. This is best described as:',
    options: ['Duration recording.', 'Frequency (event) recording.', 'Momentary time sampling.', 'Whole interval recording.'],
    correctIndex: 1,
    explanation: 'Frequency recording involves counting each discrete occurrence of a behavior. It is appropriate when behaviors have a clear onset and offset and relatively similar durations across occurrences.',
    difficulty: 'easy',
  },
  {
    id: 'q-B-002', certType: 'BCBA', domain: 'Measurement', taskCode: 'B-02',
    question: 'Celeration as a measure of behavior change refers to:',
    options: [
      'The total count of responses in an observation period.',
      'The change in rate of behavior over time (acceleration or deceleration).',
      'The proportion of intervals in which behavior occurred.',
      'The time between the onset and offset of a single behavior.',
    ],
    correctIndex: 1,
    explanation: 'Celeration is a measure derived from Standard Celeration Chart data. It describes how much behavior is accelerating (increasing) or decelerating (decreasing) per unit of time, typically expressed as ×2 or ÷2 per week.',
    difficulty: 'hard',
  },
  {
    id: 'q-B-003', certType: 'BCBA', domain: 'Measurement', taskCode: 'B-03',
    question: 'Momentary time sampling (MTS) is MOST likely to produce an accurate estimate when the target behavior:',
    options: [
      'Occurs in brief, discrete bursts.',
      'Is high-frequency and short-duration.',
      'Occurs at a constant, steady rate throughout the session.',
      'Is low-frequency and varies greatly in duration.',
    ],
    correctIndex: 2,
    explanation: 'MTS records whether the behavior is occurring at the exact moment the interval ends. It produces the most accurate estimates when behavior rate is steady throughout the observation, rather than variable or occurring in brief bursts.',
    difficulty: 'hard',
  },
  {
    id: 'q-B-004', certType: 'BCBA', domain: 'Measurement', taskCode: 'B-04',
    question: 'Interobserver agreement (IOA) is calculated primarily to:',
    options: [
      'Demonstrate the social validity of the intervention.',
      'Assess the reliability and accuracy of the measurement system.',
      'Show that the treatment produced a clinically significant change.',
      'Establish experimental control.',
    ],
    correctIndex: 1,
    explanation: 'IOA measures the degree to which two independent observers using the same measurement system produce similar data. High IOA (typically ≥80%) indicates the behavior definition is clear and the measurement is reliable.',
    difficulty: 'easy',
  },
  {
    id: 'q-B-005', certType: 'BCBA', domain: 'Measurement', taskCode: 'B-05',
    question: 'Which of the following BEST describes "treatment validity"?',
    options: [
      'The degree to which a test measures what it claims to measure.',
      'The extent to which assessment data inform effective intervention decisions.',
      'The accuracy of self-report measures used in behavior analysis.',
      'The reliability of permanent product recording.',
    ],
    correctIndex: 1,
    explanation: 'Treatment validity (also called treatment utility) refers to whether the assessment information obtained actually leads to interventions that improve outcomes. It is a criterion for judging the usefulness of assessment procedures.',
    difficulty: 'hard',
  },
  {
    id: 'q-B-006', certType: 'BCBA', domain: 'Measurement', taskCode: 'B-06',
    question: 'A behavior measured by recording whether a completed product meets a defined criterion is called:',
    options: ['Event recording.', 'Latency recording.', 'Permanent product recording.', 'Interval recording.'],
    correctIndex: 2,
    explanation: 'Permanent product recording involves measuring the outcomes or results of behavior rather than the behavior itself (e.g., number of math problems completed correctly, pages written). The "product" persists after the behavior ends.',
    difficulty: 'easy',
  },
  {
    id: 'q-B-007', certType: 'BCaBA', domain: 'Measurement', taskCode: 'B-01',
    question: 'Latency recording measures:',
    options: [
      'How long a behavior lasts from onset to offset.',
      'The time between the end of one response and the beginning of the next.',
      'The elapsed time between an antecedent stimulus and the beginning of the behavior.',
      'The number of correct responses per minute.',
    ],
    correctIndex: 2,
    explanation: 'Latency measures the time from the presentation of an antecedent (e.g., an instruction) to the onset of the behavior. It is useful when the speed of responding to a cue is the target (e.g., compliance time).',
    difficulty: 'easy',
  },
  {
    id: 'q-B-008', certType: 'BCaBA', domain: 'Measurement', taskCode: 'B-02',
    question: 'Partial interval recording tends to _______ the true frequency of behavior.',
    options: ['Underestimate.', 'Accurately represent.', 'Overestimate.', 'Have no systematic bias on.'],
    correctIndex: 2,
    explanation: 'Partial interval recording scores an interval as "behavior occurred" if the behavior happens at any point during the interval, even briefly. This tends to overestimate true frequency compared to continuous measurement.',
    difficulty: 'medium',
  },

  // ──────────────────────────────────────────────────────────────────────────
  // DOMAIN C · EXPERIMENTAL DESIGN
  // ──────────────────────────────────────────────────────────────────────────
  {
    id: 'q-C-001', certType: 'BCBA', domain: 'Experimental Design', taskCode: 'C-01',
    question: 'Experimental control in single-subject research is demonstrated by:',
    options: [
      'Using a large enough sample to achieve statistical significance.',
      'Replicating the predicted change in behavior each time the independent variable is introduced or withdrawn.',
      'Comparing a treatment group to a randomly assigned control group.',
      'Collecting at least 20 data points in baseline.',
    ],
    correctIndex: 1,
    explanation: 'In single-subject designs, experimental control is established through replication — showing that the behavior changes in the predicted direction each time the independent variable (IV) is applied or removed, within and across participants.',
    difficulty: 'medium',
  },
  {
    id: 'q-C-002', certType: 'BCBA', domain: 'Experimental Design', taskCode: 'C-02',
    question: 'The primary purpose of a stable baseline in a single-subject design is to:',
    options: [
      'Demonstrate that the participant is capable of learning the target behavior.',
      'Provide a prediction of future behavior levels in the absence of intervention.',
      'Satisfy ethical requirements before introducing treatment.',
      'Establish social validity of the target behavior.',
    ],
    correctIndex: 1,
    explanation: 'Baseline data serve as a prediction of what behavior would look like if no intervention occurred. The stability criterion helps ensure that the projection is reliable before the independent variable is introduced.',
    difficulty: 'medium',
  },
  {
    id: 'q-C-003', certType: 'BCBA', domain: 'Experimental Design', taskCode: 'C-03',
    question: 'Which single-subject design is MOST appropriate when reversal is impossible or unethical?',
    options: [
      'ABAB reversal design.',
      'Alternating treatments design.',
      'Multiple baseline design.',
      'Changing criterion design.',
    ],
    correctIndex: 2,
    explanation: 'Multiple baseline designs do not require withdrawal of treatment and are used when: (a) the behavior is unlikely to reverse (learned skills), (b) reversal would be unethical (aggressive behavior), or (c) the behavior is irreversible by nature.',
    difficulty: 'easy',
  },
  {
    id: 'q-C-004', certType: 'BCBA', domain: 'Experimental Design', taskCode: 'C-04',
    question: 'In a changing criterion design, experimental control is demonstrated when:',
    options: [
      'Behavior returns to baseline each time treatment is withdrawn.',
      'Behavior changes to match the criterion each time the criterion is shifted.',
      'Multiple tiers show simultaneous changes with intervention.',
      'Two treatments are shown to produce different levels of behavior.',
    ],
    correctIndex: 1,
    explanation: 'The changing criterion design involves systematically changing the performance criterion throughout treatment. Experimental control is established by showing behavior matches each successive criterion level, demonstrating a functional relationship.',
    difficulty: 'medium',
  },
  {
    id: 'q-C-005', certType: 'BCBA', domain: 'Experimental Design', taskCode: 'C-05',
    question: 'A major advantage of the alternating treatments design (ATD) is:',
    options: [
      'It requires only one baseline condition.',
      'It can compare two or more treatments rapidly within the same participant.',
      'It eliminates all carryover effects between conditions.',
      'It allows for return-to-baseline to demonstrate experimental control.',
    ],
    correctIndex: 1,
    explanation: 'The ATD rapidly alternates between two or more conditions (often within sessions or days), allowing direct comparison of treatment effects for the same participant. This is useful when a faster comparison is needed.',
    difficulty: 'medium',
  },
  {
    id: 'q-C-006', certType: 'BCaBA', domain: 'Experimental Design', taskCode: 'C-01',
    question: 'Visual analysis of single-subject data considers all of the following EXCEPT:',
    options: ['Level.', 'Trend.', 'Variability.', 'Statistical significance.'],
    correctIndex: 3,
    explanation: 'Visual analysis in single-subject research examines: level (average performance), trend (direction of change), variability (spread of data points), immediacy of effect, and overlap between phases. Statistical significance is a group-design concept.',
    difficulty: 'medium',
  },
  {
    id: 'q-C-007', certType: 'BCaBA', domain: 'Experimental Design', taskCode: 'C-02',
    question: 'A "functional relationship" between a treatment and a behavior change means:',
    options: [
      'The treatment is socially acceptable.',
      'Changes in the dependent variable are caused by manipulation of the independent variable.',
      'The behavior changed significantly compared to a control group.',
      'The treatment was implemented with high fidelity.',
    ],
    correctIndex: 1,
    explanation: 'A functional relationship means that the independent variable (treatment) is the cause of changes in the dependent variable (behavior), as demonstrated through experimental control in a single-subject design.',
    difficulty: 'medium',
  },

  // ──────────────────────────────────────────────────────────────────────────
  // DOMAIN D · BEHAVIOR CHANGE: ANTECEDENT INTERVENTIONS
  // ──────────────────────────────────────────────────────────────────────────
  {
    id: 'q-D-001', certType: 'BCBA', domain: 'Behavior Change', taskCode: 'D-01',
    question: 'Which of the following is an antecedent-based intervention?',
    options: [
      'Delivering praise immediately after the target behavior.',
      'Providing a choice of activities before a demand is presented.',
      'Implementing a DRO schedule to reduce self-injury.',
      'Using response cost to decrease tantrums.',
    ],
    correctIndex: 1,
    explanation: 'Antecedent-based interventions modify events before the behavior occurs. Offering choices before presenting demands is a noncontingent antecedent strategy that can reduce problem behavior by establishing behavioral momentum or changing MOs.',
    difficulty: 'easy',
  },
  {
    id: 'q-D-002', certType: 'BCBA', domain: 'Behavior Change', taskCode: 'D-02',
    question: 'High-probability (high-p) request sequences work primarily by:',
    options: [
      'Establishing a new conditioned reinforcer.',
      'Using behavioral momentum to increase compliance with low-p requests.',
      'Reducing the establishing operation for escape from demands.',
      'Providing errorless learning opportunities.',
    ],
    correctIndex: 1,
    explanation: 'High-p sequences involve delivering a series of requests the person almost always complies with before presenting a low-p (challenging) request. Behavioral momentum from the high-p responses carries over to increase compliance with the low-p request.',
    difficulty: 'medium',
  },
  {
    id: 'q-D-003', certType: 'BCBA', domain: 'Behavior Change', taskCode: 'D-03',
    question: 'Noncontingent reinforcement (NCR) as an antecedent intervention functions primarily by:',
    options: [
      'Punishing the problem behavior directly.',
      'Abolishing the MO that maintains problem behavior by providing free access to the maintaining reinforcer.',
      'Teaching an alternative communicative response.',
      'Reinforcing the absence of problem behavior.',
    ],
    correctIndex: 1,
    explanation: 'NCR delivers the maintaining reinforcer on a time-based schedule independent of behavior. This abolishes (or reduces) the motivating operation for the problem behavior, thereby reducing its frequency. Over time, schedules are thinned.',
    difficulty: 'medium',
  },
  {
    id: 'q-D-004', certType: 'BCBA', domain: 'Behavior Change', taskCode: 'D-04',
    question: 'Stimulus control refers to:',
    options: [
      'A change in response probability in the presence of a specific antecedent stimulus.',
      'The removal of reinforcement for a previously reinforced behavior.',
      'The contingent delivery of a punishing stimulus following behavior.',
      'The process of teaching new behaviors through shaping.',
    ],
    correctIndex: 0,
    explanation: 'Stimulus control is demonstrated when a behavior occurs more frequently in the presence of a discriminative stimulus (SD) than in its absence. It develops through differential reinforcement in the presence and absence of the SD.',
    difficulty: 'easy',
  },

  // ──────────────────────────────────────────────────────────────────────────
  // DOMAIN E · BEHAVIOR CHANGE: REINFORCEMENT & PUNISHMENT
  // ──────────────────────────────────────────────────────────────────────────
  {
    id: 'q-E-001', certType: 'BCBA', domain: 'Behavior Change', taskCode: 'E-01',
    question: 'Positive reinforcement is defined by:',
    options: [
      'Presenting a pleasant stimulus to decrease behavior.',
      'Removing an aversive stimulus to decrease behavior.',
      'Adding a stimulus following a behavior that increases the future frequency of that behavior.',
      'Removing a stimulus following a behavior that increases the future frequency of that behavior.',
    ],
    correctIndex: 2,
    explanation: 'Positive reinforcement involves the contingent presentation of a stimulus (the positive reinforcer) following a behavior, which results in an increase in the future probability of that behavior. The word "positive" means adding (+).',
    difficulty: 'easy',
  },
  {
    id: 'q-E-002', certType: 'BCBA', domain: 'Behavior Change', taskCode: 'E-02',
    question: 'Negative reinforcement is best illustrated by:',
    options: [
      'A child receives candy for completing homework, and homework completion increases.',
      'A student escapes math class by having a tantrum; tantrums increase over time.',
      'A teacher ignores talking-out behavior; talking-out decreases.',
      'A driver receives a speeding ticket; speeding decreases.',
    ],
    correctIndex: 1,
    explanation: 'Negative reinforcement involves the removal of an aversive stimulus (math class demands) contingent on a behavior (tantrum), which increases the future frequency of that behavior. It is called negative because a stimulus is removed (−).',
    difficulty: 'easy',
  },
  {
    id: 'q-E-003', certType: 'BCBA', domain: 'Behavior Change', taskCode: 'E-03',
    question: 'The term "extinction burst" refers to:',
    options: [
      'A rapid increase in behavior frequency at the beginning of extinction.',
      'The gradual decline of behavior during extinction.',
      'Spontaneous recovery of extinguished behavior after a rest period.',
      'Increased variability in behavior once extinction has been fully completed.',
    ],
    correctIndex: 0,
    explanation: 'When reinforcement is first withheld (extinction), behavior often initially increases in rate, intensity, or variability before declining. This temporary increase is the extinction burst. Practitioners must be prepared for it.',
    difficulty: 'easy',
  },
  {
    id: 'q-E-004', certType: 'BCBA', domain: 'Behavior Change', taskCode: 'E-04',
    question: 'Which reinforcement schedule produces the HIGHEST and MOST CONSISTENT rate of responding?',
    options: [
      'Fixed ratio (FR).',
      'Fixed interval (FI).',
      'Variable ratio (VR).',
      'Variable interval (VI).',
    ],
    correctIndex: 2,
    explanation: 'Variable ratio schedules (e.g., slot machines) produce the highest, most consistent rates of responding and the greatest resistance to extinction because the reinforcer delivery is unpredictable, preventing the detection of non-reinforcement.',
    difficulty: 'medium',
  },
  {
    id: 'q-E-005', certType: 'BCBA', domain: 'Behavior Change', taskCode: 'E-05',
    question: 'Which of the following is an example of a DRI procedure?',
    options: [
      'Reinforcing 30-second intervals during which self-injury does not occur.',
      'Reinforcing in-seat behavior that is physically incompatible with out-of-seat behavior.',
      'Delivering reinforcement on a time-based schedule to reduce aggression.',
      'Teaching a student to request a break instead of throwing materials.',
    ],
    correctIndex: 1,
    explanation: 'DRI (Differential Reinforcement of Incompatible behavior) reinforces a behavior that cannot physically co-occur with the problem behavior. Sitting is incompatible with out-of-seat behavior — both cannot happen simultaneously.',
    difficulty: 'medium',
  },
  {
    id: 'q-E-006', certType: 'BCBA', domain: 'Behavior Change', taskCode: 'E-06',
    question: 'Functional Communication Training (FCT) works by:',
    options: [
      'Punishing the problem behavior and reinforcing the absence of problem behavior.',
      'Teaching a communicative response that produces the same reinforcement that previously maintained the problem behavior.',
      'Modifying antecedents to prevent the problem behavior from occurring.',
      'Using extinction alone to reduce problem behavior.',
    ],
    correctIndex: 1,
    explanation: 'FCT identifies the function of the problem behavior (e.g., escape, attention) and teaches a more appropriate communication response (verbal, gestural, or AAC) that produces the same reinforcer, replacing the problem behavior.',
    difficulty: 'medium',
  },
  {
    id: 'q-E-007', certType: 'BCBA', domain: 'Behavior Change', taskCode: 'E-07',
    question: 'Shaping by successive approximations requires:',
    options: [
      'Reinforcing only the terminal behavior from the very start.',
      'Systematically reinforcing closer approximations to the terminal behavior while extinguishing previous ones.',
      'Using physical guidance to prompt the final form of the behavior.',
      'Chaining behaviors in a fixed sequence.',
    ],
    correctIndex: 1,
    explanation: 'Shaping involves: (1) reinforcing a behavior that already occurs and resembles the terminal behavior, (2) gradually shifting the criterion for reinforcement to closer approximations, (3) extinguishing the previous approximation once a new one is reinforced.',
    difficulty: 'easy',
  },
  {
    id: 'q-E-008', certType: 'BCBA', domain: 'Behavior Change', taskCode: 'E-08',
    question: 'In a backward chaining procedure, training begins with:',
    options: [
      'The first step in the chain.',
      'The step with the highest level of baseline performance.',
      'The last step in the chain, which is directly linked to the terminal reinforcer.',
      'All steps simultaneously.',
    ],
    correctIndex: 2,
    explanation: 'Backward chaining starts with the last step of the behavioral chain, which produces the terminal reinforcer. The trainer completes all preceding steps and the learner only performs the final step, then the second-to-last is added, and so on.',
    difficulty: 'medium',
  },
  {
    id: 'q-E-009', certType: 'BCBA', domain: 'Behavior Change', taskCode: 'E-09',
    question: 'Prompt fading is used to:',
    options: [
      'Decrease the intensity of punishing stimuli over time.',
      'Gradually reduce the level of prompting to transfer stimulus control to the natural SD.',
      'Increase the strength of reinforcement delivered for correct responses.',
      'Systematically eliminate all antecedents for problem behavior.',
    ],
    correctIndex: 1,
    explanation: 'Prompt fading (also called prompt delay or systematic fading) gradually removes artificial prompts so that responding comes under control of the natural discriminative stimulus. Failure to fade prompts results in prompt dependency.',
    difficulty: 'easy',
  },
  {
    id: 'q-E-010', certType: 'BCBA', domain: 'Behavior Change', taskCode: 'E-10',
    question: 'Positive punishment is defined as:',
    options: [
      'Adding a pleasant stimulus after behavior to increase it.',
      'Removing an aversive stimulus after behavior to increase it.',
      'Adding a stimulus after behavior that decreases the future frequency of that behavior.',
      'Removing a pleasant stimulus after behavior to decrease it.',
    ],
    correctIndex: 2,
    explanation: 'Positive punishment involves adding a stimulus (+) following a behavior that results in a decrease in future frequency. The word "positive" refers to addition; "punishment" refers to the decrease in behavior.',
    difficulty: 'easy',
  },
  {
    id: 'q-E-011', certType: 'BCaBA', domain: 'Behavior Change', taskCode: 'E-01',
    question: 'Response cost is a form of:',
    options: ['Positive reinforcement.', 'Negative reinforcement.', 'Positive punishment.', 'Negative punishment.'],
    correctIndex: 3,
    explanation: 'Response cost involves removing a specific amount of a positive reinforcer (e.g., tokens, privileges) contingent on the occurrence of a behavior, which decreases its future frequency. This makes it negative punishment (removing a stimulus to decrease behavior).',
    difficulty: 'medium',
  },
  {
    id: 'q-E-012', certType: 'BCaBA', domain: 'Behavior Change', taskCode: 'E-02',
    question: 'Time-out from positive reinforcement is effective ONLY when:',
    options: [
      'Used with adult clients who understand the contingency.',
      'The time-out environment is less reinforcing than the environment from which the person is removed.',
      'Physical guidance is used to move the person to time-out.',
      'It lasts at least 30 minutes.',
    ],
    correctIndex: 1,
    explanation: 'Time-out removes access to positive reinforcement. If the "time-in" environment is not reinforcing (or is aversive), time-out becomes an escape contingency and may actually reinforce the problem behavior instead of reducing it.',
    difficulty: 'medium',
  },

  // ──────────────────────────────────────────────────────────────────────────
  // DOMAIN F · ETHICS
  // ──────────────────────────────────────────────────────────────────────────
  {
    id: 'q-F-001', certType: 'BCBA', domain: 'Ethics', taskCode: 'F-01',
    question: 'According to the BACB Ethics Code, BCBAs must obtain informed consent from clients or their legal guardians before:',
    options: [
      'Attending a supervision meeting.',
      'Initiating assessment and intervention procedures.',
      'Consulting with another BCBA about a case.',
      'Writing a progress note.',
    ],
    correctIndex: 1,
    explanation: 'The BACB Ethics Code (2.11) requires BCBAs to obtain informed consent before initiating assessment or intervention. Informed consent requires disclosure of procedures, risks, benefits, and alternatives in understandable language.',
    difficulty: 'easy',
  },
  {
    id: 'q-F-002', certType: 'BCBA', domain: 'Ethics', taskCode: 'F-02',
    question: 'The "least restrictive alternative" principle means a BCBA should:',
    options: [
      'Only use positive reinforcement procedures.',
      'Select the procedure that requires the fewest sessions to produce change.',
      'Use the most effective procedure available regardless of intrusiveness.',
      'Prefer procedures that achieve goals while minimizing restrictions on freedom and using the least aversive methods.',
    ],
    correctIndex: 3,
    explanation: 'The least restrictive alternative requires behavior analysts to select from effective options the one that imposes the least restriction on the individual\'s freedom, causes the least discomfort, and uses the least intrusive procedures.',
    difficulty: 'medium',
  },
  {
    id: 'q-F-003', certType: 'BCBA', domain: 'Ethics', taskCode: 'F-03',
    question: 'If a BCBA notices that a colleague is engaging in unethical behavior, what is the FIRST recommended course of action according to the BACB Ethics Code?',
    options: [
      'Immediately report the colleague to the BACB.',
      'Do nothing; it is not the BCBA\'s responsibility.',
      'Attempt to resolve the issue informally by discussing it directly with the colleague.',
      'Report the behavior to the state licensing board.',
    ],
    correctIndex: 2,
    explanation: 'The BACB Ethics Code (Section 7) states that BCBAs should first try to resolve ethical violations informally by bringing the issue to the attention of the colleague, unless the violation is so severe that informal resolution is inappropriate.',
    difficulty: 'medium',
  },
  {
    id: 'q-F-004', certType: 'BCBA', domain: 'Ethics', taskCode: 'F-04',
    question: 'Dual relationships in behavior analysis are considered problematic because:',
    options: [
      'They are always illegal.',
      'They can impair the BCBA\'s objectivity and potentially exploit the client.',
      'They increase treatment costs.',
      'They reduce the effectiveness of treatment.',
    ],
    correctIndex: 1,
    explanation: 'Dual (or multiple) relationships occur when a BCBA holds both a professional and a personal/financial role with a client (e.g., supervisor and friend). These relationships risk compromising objectivity, creating conflicts of interest, and potentially exploiting the client.',
    difficulty: 'medium',
  },
  {
    id: 'q-F-005', certType: 'BCBA', domain: 'Ethics', taskCode: 'F-05',
    question: 'Which of the following is a key requirement for a behavior intervention plan (BIP) targeting problem behavior to be ethical?',
    options: [
      'The plan must use extinction as the primary procedure.',
      'The plan must be based on the results of a functional behavior assessment (FBA).',
      'The plan must target only one behavior at a time.',
      'The plan must be approved by the BACB before implementation.',
    ],
    correctIndex: 1,
    explanation: 'Ethical practice requires that interventions for problem behavior be based on a thorough FBA. Without understanding the function(s) maintaining the behavior, treatments may be ineffective or inadvertently reinforce the problem behavior.',
    difficulty: 'medium',
  },
  {
    id: 'q-F-006', certType: 'BCBA', domain: 'Ethics', taskCode: 'F-06',
    question: 'A BCBA may NOT provide behavior analytic services to a client if:',
    options: [
      'The client has a diagnosis the BCBA has not worked with before.',
      'The client lives in a different state than the BCBA is licensed in.',
      'The BCBA lacks the competence required for the specific type of case.',
      'Both B and C.',
    ],
    correctIndex: 3,
    explanation: 'BCBAs must only practice within their competence boundaries (scope of practice). Additionally, many states require licensure to practice ABA, and providing services without licensure in the client\'s jurisdiction may be illegal and unethical.',
    difficulty: 'hard',
  },
  {
    id: 'q-F-007', certType: 'BCaBA', domain: 'Ethics', taskCode: 'F-01',
    question: 'Which of the following is NOT an obligation of a BCaBA under the BACB Ethics Code?',
    options: [
      'Practicing under the supervision of a BCBA.',
      'Maintaining client confidentiality.',
      'Independently designing behavior analytic programs without supervision.',
      'Following the least restrictive alternative principle.',
    ],
    correctIndex: 2,
    explanation: 'BCaBAs are prohibited from practicing independently. All behavior analytic programs must be designed, directed, and regularly reviewed by a supervising BCBA or BCBA-D. Independent design is outside the scope of BCaBA certification.',
    difficulty: 'easy',
  },
  {
    id: 'q-F-008', certType: 'BCaBA', domain: 'Ethics', taskCode: 'F-02',
    question: 'Social validity assessment involves:',
    options: [
      'Measuring a behavior using direct observation across social contexts.',
      'Evaluating whether the treatment goals, procedures, and outcomes are acceptable and meaningful to the client and society.',
      'Assessing social skills deficits through standardized tests.',
      'Ensuring the intervention is implemented in natural social environments.',
    ],
    correctIndex: 1,
    explanation: 'Social validity (Wolf, 1978) asks whether: (1) goals are socially important, (2) procedures are acceptable to stakeholders, and (3) outcomes are meaningful. It is assessed through questionnaires, interviews, or comparison to normative peers.',
    difficulty: 'medium',
  },

  // ──────────────────────────────────────────────────────────────────────────
  // DOMAIN G · PERSONNEL SUPERVISION & MANAGEMENT
  // ──────────────────────────────────────────────────────────────────────────
  {
    id: 'q-G-001', certType: 'BCBA', domain: 'Personnel Supervision', taskCode: 'G-01',
    question: 'According to the BACB, the purpose of supervision is to:',
    options: [
      'Evaluate supervisees for billing purposes.',
      'Ensure that clients receive effective and ethical behavior analytic services.',
      'Train supervisees to pass the BCBA exam.',
      'Monitor supervisees\' compliance with insurance requirements.',
    ],
    correctIndex: 1,
    explanation: 'The BACB\'s Supervision Training Curriculum Outline states that the primary purpose of supervision is to protect clients by ensuring supervisees provide effective, evidence-based, and ethical behavior analytic services.',
    difficulty: 'easy',
  },
  {
    id: 'q-G-002', certType: 'BCBA', domain: 'Personnel Supervision', taskCode: 'G-02',
    question: 'Performance management in behavior analysis is based on:',
    options: [
      'Annual performance reviews using subjective ratings.',
      'Objective measurement and contingency management to improve staff performance.',
      'Motivational interviewing to understand staff needs.',
      'Cognitive-behavioral strategies to address performance problems.',
    ],
    correctIndex: 1,
    explanation: 'Behavioral performance management (also called organizational behavior management, OBM) applies behavioral principles — objective measurement, antecedent modifications, and consequence-based feedback — to improve staff behavior and performance.',
    difficulty: 'medium',
  },
  {
    id: 'q-G-003', certType: 'BCBA', domain: 'Personnel Supervision', taskCode: 'G-03',
    question: 'Behavioral Skills Training (BST) consists of which components?',
    options: [
      'Instruction, Modeling, Rehearsal, and Feedback.',
      'Assessment, Planning, Implementation, and Evaluation.',
      'Antecedent, Behavior, Consequence, and Review.',
      'Observation, Data collection, Analysis, and Reporting.',
    ],
    correctIndex: 0,
    explanation: 'BST is an evidence-based training package that includes: (1) Instructions (verbal/written), (2) Modeling (demonstration), (3) Rehearsal (practice), and (4) Feedback (corrective and positive). It is the gold standard for training behavior analytic procedures.',
    difficulty: 'easy',
  },
  {
    id: 'q-G-004', certType: 'BCBA', domain: 'Personnel Supervision', taskCode: 'G-04',
    question: 'When providing feedback to a supervisee, best practice dictates:',
    options: [
      'Waiting until the end of the month to provide cumulative feedback.',
      'Providing only positive feedback to avoid demotivating the supervisee.',
      'Delivering feedback immediately, specifically, and with both positive and corrective components.',
      'Focusing exclusively on errors to maximize skill improvement.',
    ],
    correctIndex: 2,
    explanation: 'Effective behavioral feedback is: immediate (close in time to the behavior), specific (describes the precise behavior), balanced (includes praise for correct performance AND correction of errors), and consistent.',
    difficulty: 'medium',
  },
  {
    id: 'q-G-005', certType: 'BCBA', domain: 'Personnel Supervision', taskCode: 'G-05',
    question: 'A BCBA supervisor is responsible for ALL behavior analytic services delivered by their supervisees. This means:',
    options: [
      'The supervisor must be physically present at all client sessions.',
      'The supervisor must review, approve, and take professional responsibility for decisions made during supervision.',
      'Supervisees may not bill independently for any services.',
      'The supervisor must co-sign all documentation regardless of content.',
    ],
    correctIndex: 1,
    explanation: 'Supervisors hold professional and ethical responsibility for the services delivered under their supervision. This requires: reviewing data, approving program changes, signing relevant documentation, and ensuring supervisees are implementing procedures correctly.',
    difficulty: 'hard',
  },
  {
    id: 'q-G-006', certType: 'BCBA', domain: 'Personnel Supervision', taskCode: 'G-06',
    question: 'Structured supervision meetings should include which of the following?',
    options: [
      'Only case-specific discussions.',
      'A combination of direct observation, performance feedback, skill development, and review of current cases.',
      'Exclusively administrative tasks and documentation review.',
      'Only group supervision for efficiency.',
    ],
    correctIndex: 1,
    explanation: 'BACB supervision requirements specify that structured supervision must include: direct observation of supervisee work, performance feedback, discussion of professional and ethical issues, and support for the supervisee\'s ongoing skill development.',
    difficulty: 'medium',
  },
  {
    id: 'q-G-007', certType: 'BCaBA', domain: 'Personnel Supervision', taskCode: 'G-01',
    question: 'BCaBAs may supervise:',
    options: [
      'Other BCaBAs who are working toward BCBA certification.',
      'Registered Behavior Technicians (RBTs) under specific circumstances.',
      'Board Certified Behavior Analysts.',
      'BCaBAs may not supervise anyone under BACB guidelines.',
    ],
    correctIndex: 1,
    explanation: 'BCaBAs may provide behavior technician supervision (RBT-level oversight) under the supervision of a BCBA, according to BACB guidelines. They may not provide BCBA-level supervision or direct the work of other certificants.',
    difficulty: 'hard',
  },

  // ──────────────────────────────────────────────────────────────────────────
  // DOMAIN — APPLICATIONS (Verbal Behavior, Generalization, ABA in practice)
  // ──────────────────────────────────────────────────────────────────────────
  {
    id: 'q-AP-001', certType: 'BCBA', domain: 'Applications', taskCode: 'AP-01',
    question: 'According to Skinner\'s analysis of verbal behavior, a mand is:',
    options: [
      'A verbal response controlled by a prior verbal stimulus (the behavior of another speaker).',
      'A verbal response controlled by a motivating operation that specifies its own reinforcement.',
      'A verbal response with point-to-point correspondence to a stimulus.',
      'A verbal response controlled by non-verbal stimulus conditions.',
    ],
    correctIndex: 1,
    explanation: 'A mand is a verbal operant in which the response is controlled by a relevant MO (deprivation or aversive stimulation) and produces the specific reinforcer that momentarily satisfies that MO. Examples: asking for water when thirsty, requesting a break when overwhelmed.',
    difficulty: 'medium',
  },
  {
    id: 'q-AP-002', certType: 'BCBA', domain: 'Applications', taskCode: 'AP-02',
    question: 'Generalization programming is BEST achieved by:',
    options: [
      'Teaching in a single setting with a single therapist until mastery is achieved.',
      'Training sufficient exemplars across multiple settings, people, and materials from the beginning.',
      'Only reinforcing the behavior in the training setting until it generalizes naturally.',
      'Using massed trial training exclusively.',
    ],
    correctIndex: 1,
    explanation: 'Stokes and Baer\'s (1977) generalization programming strategies include training across multiple exemplars, settings, persons, and materials to promote generalization. Teaching in one setting creates stimulus control too narrow for natural environments.',
    difficulty: 'medium',
  },
  {
    id: 'q-AP-003', certType: 'BCBA', domain: 'Applications', taskCode: 'AP-03',
    question: 'A tact is a verbal operant that is:',
    options: [
      'Controlled by a motivating operation and specifies its own reinforcement.',
      'Controlled by a non-verbal discriminative stimulus and followed by generalized conditioned reinforcement.',
      'A verbal response that is an exact copy of a preceding verbal stimulus.',
      'A verbal response that is controlled by the verbal behavior of another speaker.',
    ],
    correctIndex: 1,
    explanation: 'A tact is a verbal operant controlled by a non-verbal antecedent stimulus (an object, event, or property) and is maintained by generalized conditioned reinforcement (social praise). Simply put: naming or labeling something in the environment.',
    difficulty: 'medium',
  },
  {
    id: 'q-AP-004', certType: 'BCaBA', domain: 'Applications', taskCode: 'AP-01',
    question: 'Discrete Trial Training (DTT) is characterized by:',
    options: [
      'Teaching in natural environments using the child\'s natural motivation.',
      'A structured, therapist-led format with a clear SD, response opportunity, and consequence.',
      'Only using verbal instructions without physical prompts.',
      'Teaching behaviors using video modeling alone.',
    ],
    correctIndex: 1,
    explanation: 'DTT breaks skills into small components taught in a structured 1:1 format. Each trial includes: SD (discriminative stimulus), prompt (if needed), response, consequence (reinforcement or correction), and an inter-trial interval.',
    difficulty: 'easy',
  },
  {
    id: 'q-AP-005', certType: 'BCaBA', domain: 'Applications', taskCode: 'AP-02',
    question: 'Natural Environment Teaching (NET) differs from DTT primarily in that NET:',
    options: [
      'Does not use reinforcement.',
      'Embeds learning opportunities within the learner\'s natural activities and motivations.',
      'Is only appropriate for verbal learners.',
      'Requires no data collection.',
    ],
    correctIndex: 1,
    explanation: 'NET follows the learner\'s motivation and interest, embedding teaching trials into ongoing activities in natural environments. It promotes generalization by using natural reinforcers and varied contexts from the start, unlike the structured format of DTT.',
    difficulty: 'easy',
  },
];

// ─── Helpers ─────────────────────────────────────────────────────────────────
export function getQuestionsByCert(certType: 'BCBA' | 'BCaBA') {
  return ALL_QUESTIONS.filter((q) => q.certType === certType);
}

export function getQuestionsByDomain(domain: string, certType?: 'BCBA' | 'BCaBA') {
  return ALL_QUESTIONS.filter(
    (q) => q.domain === domain && (certType ? q.certType === certType : true)
  );
}

export function getQuestionsByDifficulty(difficulty: 'easy' | 'medium' | 'hard', certType?: 'BCBA' | 'BCaBA') {
  return ALL_QUESTIONS.filter(
    (q) => q.difficulty === difficulty && (certType ? q.certType === certType : true)
  );
}

export function getRandomQuestions(count: number, certType?: 'BCBA' | 'BCaBA', domain?: string) {
  let pool = certType ? getQuestionsByCert(certType) : ALL_QUESTIONS;
  if (domain) pool = pool.filter((q) => q.domain === domain);
  const shuffled = [...pool].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, Math.min(count, shuffled.length));
}

export function getDomains(): string[] {
  return [...new Set(ALL_QUESTIONS.map((q) => q.domain))].sort();
}

// Estadísticas del banco
export const QUESTION_STATS = {
  total:   ALL_QUESTIONS.length,
  bcba:    ALL_QUESTIONS.filter(q => q.certType === 'BCBA').length,
  bcaba:   ALL_QUESTIONS.filter(q => q.certType === 'BCaBA').length,
  domains: getDomains(),
};
