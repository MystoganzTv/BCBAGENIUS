import { QuizQuestion } from '@/lib/types';

// ═══════════════════════════════════════════════════════════════════════════
//  BCBA Genius — Banco de preguntas
//  BACB Task List 6th Edition · BCBA only
//  95 preguntas cubriendo los 7 dominios
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
    id: 'q-A-008', certType: 'BCBA', domain: 'Foundations', taskCode: 'A-08',
    question: 'Selectionism in behavior analysis refers to the idea that:',
    options: [
      'Behavior is explained only by immediate antecedents.',
      'Consequences select behavior across phylogenic, ontogenic, and cultural levels.',
      'Private events are excluded from scientific analysis.',
      'Behavior can only be understood through statistical group comparisons.',
    ],
    correctIndex: 1,
    explanation: 'Selectionism is a core assumption of behavior analysis. It holds that behavior is selected by its consequences, just as traits are selected in evolution and practices are selected at a cultural level.',
    difficulty: 'medium',
  },
  {
    id: 'q-A-009', certType: 'BCBA', domain: 'Foundations', taskCode: 'A-09',
    question: 'Which statement BEST illustrates the distinction between a respondent and an operant response?',
    options: [
      'A dog salivating to food is maintained by consequences, whereas a child requesting water is elicited by an antecedent stimulus.',
      'A student studying to earn praise is elicited by a stimulus, whereas blinking to an air puff is selected by consequences.',
      'A knee-jerk reflex is elicited by antecedent stimulation, whereas hand-raising in class is shaped and maintained by its consequences.',
      'Both respondent and operant responses are primarily defined by verbal report.',
    ],
    correctIndex: 2,
    explanation: 'Respondent behavior is elicited by antecedent stimuli, as in reflexes. Operant behavior is emitted and selected by its consequences, such as socially reinforced classroom responding.',
    difficulty: 'medium',
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
    id: 'q-B-007', certType: 'BCBA', domain: 'Measurement', taskCode: 'B-07',
    question: 'Which measurement system is MOST appropriate when you need to know how quickly a learner begins a response after an instruction?',
    options: [
      'Duration recording.',
      'Latency recording.',
      'Whole interval recording.',
      'Permanent product recording.',
    ],
    correctIndex: 1,
    explanation: 'Latency recording measures the elapsed time between a defined antecedent event and the onset of the behavior. It is especially useful for compliance, response initiation, and prompt delay decisions.',
    difficulty: 'easy',
  },
  {
    id: 'q-B-008', certType: 'BCBA', domain: 'Measurement', taskCode: 'B-08',
    question: 'A behavior analyst selects whole interval recording to measure on-task behavior. The analyst should remember that this method tends to:',
    options: [
      'Overestimate the occurrence of the target behavior.',
      'Underestimate the occurrence of the target behavior.',
      'Produce the same estimate as event recording.',
      'Be appropriate only for permanent products.',
    ],
    correctIndex: 1,
    explanation: 'Whole interval recording scores the behavior only if it occurs for the entire interval, so it tends to underestimate the true amount of behavior. That bias is often acceptable when the target is a behavior expected to occur continuously, such as on-task engagement.',
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
    id: 'q-C-006', certType: 'BCBA', domain: 'Experimental Design', taskCode: 'C-06',
    question: 'Visual analysis of single-subject data considers all of the following EXCEPT:',
    options: ['Level.', 'Trend.', 'Variability.', 'Statistical significance.'],
    correctIndex: 3,
    explanation: 'Visual analysis in single-subject research examines: level (average performance), trend (direction of change), variability (spread of data points), immediacy of effect, and overlap between phases. Statistical significance is a group-design concept.',
    difficulty: 'medium',
  },
  {
    id: 'q-C-007', certType: 'BCBA', domain: 'Experimental Design', taskCode: 'C-07',
    question: 'A changing criterion design is MOST appropriate when the target behavior:',
    options: [
      'Must be compared rapidly across two treatments.',
      'Cannot be reversed and must be increased or decreased in a stepwise fashion.',
      'Occurs too infrequently for repeated measurement.',
      'Is maintained automatically and requires sensory extinction.',
    ],
    correctIndex: 1,
    explanation: 'Changing criterion designs are ideal when the goal is gradual, stepwise change in a behavior such as reducing cigarettes smoked per day or increasing completed tasks. Experimental control is shown when behavior changes to match each new criterion level.',
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
    id: 'q-E-011', certType: 'BCBA', domain: 'Behavior Change', taskCode: 'E-11',
    question: 'Response cost is a form of:',
    options: ['Positive reinforcement.', 'Negative reinforcement.', 'Positive punishment.', 'Negative punishment.'],
    correctIndex: 3,
    explanation: 'Response cost involves removing a specific amount of a positive reinforcer (e.g., tokens, privileges) contingent on the occurrence of a behavior, which decreases its future frequency. This makes it negative punishment (removing a stimulus to decrease behavior).',
    difficulty: 'medium',
  },
  {
    id: 'q-E-012', certType: 'BCBA', domain: 'Behavior Change', taskCode: 'E-12',
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
    id: 'q-F-007', certType: 'BCBA', domain: 'Ethics', taskCode: 'F-07',
    question: 'Which action BEST reflects the ethical principle of protecting confidentiality in everyday practice?',
    options: [
      'Discussing a case in a restaurant as long as the client\'s first name is omitted.',
      'Sharing full session videos with another clinic because the client could benefit from a second opinion.',
      'Limiting access to identifying information and discussing client details only with authorized people for service-related purposes.',
      'Using client examples in staff training because internal meetings are automatically confidential.',
    ],
    correctIndex: 2,
    explanation: 'Confidentiality requires behavior analysts to limit access to protected information, share only what is necessary, and disclose information only to authorized individuals for clinically appropriate reasons. Omitting a first name alone is not enough if the client remains identifiable.',
    difficulty: 'easy',
  },
  {
    id: 'q-F-008', certType: 'BCBA', domain: 'Ethics', taskCode: 'F-08',
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
    id: 'q-G-007', certType: 'BCBA', domain: 'Personnel Supervision', taskCode: 'G-07',
    question: 'A competency-based supervision model requires the supervisor to:',
    options: [
      'Rely primarily on supervisee self-report to judge skill development.',
      'Provide direct observation, behavior-specific feedback, rehearsal, and performance-based evaluation of target skills.',
      'Focus on case discussion rather than observable performance to preserve rapport.',
      'Avoid formal evaluation until the final supervision meeting.',
    ],
    correctIndex: 1,
    explanation: 'Competency-based supervision is anchored in observable repertoires, direct observation, rehearsal, feedback, and documented performance criteria. It is not sufficient to rely on discussion alone or delayed end-point evaluation.',
    difficulty: 'hard',
  },
  {
    id: 'q-G-008', certType: 'BCBA', domain: 'Personnel Supervision', taskCode: 'G-08',
    question: 'When training staff to implement a prompting procedure, which sequence BEST reflects Behavior Skills Training (BST)?',
    options: [
      'Rehearsal, feedback, instruction, modeling.',
      'Instruction, modeling, rehearsal, feedback.',
      'Modeling, punishment, rehearsal, self-monitoring.',
      'Instruction, observation, written test, feedback.',
    ],
    correctIndex: 1,
    explanation: 'BST consists of giving clear instructions, modeling the skill, allowing the trainee to rehearse it, and then providing behavior-specific feedback. This sequence is one of the most established approaches for staff training in ABA.',
    difficulty: 'easy',
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
    id: 'q-AP-004', certType: 'BCBA', domain: 'Applications', taskCode: 'AP-04',
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
    id: 'q-AP-005', certType: 'BCBA', domain: 'Applications', taskCode: 'AP-05',
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
  {
    id: 'q-AP-006', certType: 'BCBA', domain: 'Applications', taskCode: 'AP-06',
    question: 'A listener responds correctly when told, "Touch the spoon," but cannot say "spoon" when shown the item. This pattern suggests the learner has:',
    options: [
      'Generalized imitation but not listener discrimination.',
      'A tact repertoire without listener responding.',
      'Listener responding without the corresponding tact.',
      'Textual behavior without echoic behavior.',
    ],
    correctIndex: 2,
    explanation: 'Listener responding and tacting are separate verbal operants. A learner may follow spoken directions involving an item without yet being able to label that item independently as a tact.',
    difficulty: 'medium',
  },
  {
    id: 'q-AP-007', certType: 'BCBA', domain: 'Applications', taskCode: 'AP-07',
    question: 'Which strategy BEST promotes maintenance after a new skill has been mastered in instruction?',
    options: [
      'Ending reinforcement immediately so the learner contacts natural contingencies.',
      'Scheduling follow-up opportunities, thinning prompts, and ensuring the skill contacts reinforcement over time.',
      'Restricting practice to the teaching table to prevent response variability.',
      'Switching to only written tests of the skill.',
    ],
    correctIndex: 1,
    explanation: 'Maintenance is strengthened when the learner continues to contact relevant contingencies after formal teaching. Planned review, prompt fading, and natural reinforcement opportunities help the response persist over time.',
    difficulty: 'medium',
  },
  {
    id: 'q-AP-008', certType: 'BCBA', domain: 'Applications', taskCode: 'AP-08',
    question: 'Which example BEST illustrates programming common stimuli to promote generalization?',
    options: [
      'Using the same materials, cues, and relevant features that will be present in the natural environment.',
      'Teaching a skill only with one therapist until 100% mastery is achieved.',
      'Removing all naturally occurring distractors during instruction permanently.',
      'Waiting to see if generalization occurs before making any programming decisions.',
    ],
    correctIndex: 0,
    explanation: 'Programming common stimuli means arranging instructional conditions so that important stimuli from the natural performance setting are present during teaching. This improves the likelihood that the skill will transfer outside training.',
    difficulty: 'medium',
  },
  {
    id: 'q-AP-009', certType: 'BCBA', domain: 'Applications', taskCode: 'AP-09',
    question: 'A behavior analyst teaches a learner to request "break" instead of engaging in aggression maintained by escape. This is BEST described as:',
    options: [
      'Teaching an intraverbal maintained by generalized reinforcement.',
      'Functional communication training using a response that matches the problem behavior\'s function.',
      'Respondent extinction paired with overcorrection.',
      'A token economy with delayed backup reinforcement.',
    ],
    correctIndex: 1,
    explanation: 'Functional communication training replaces problem behavior with a socially appropriate communicative response that accesses the same reinforcer. In this example, the break request serves the same escape function as the aggression previously did.',
    difficulty: 'easy',
  },
  {
    id: 'q-A-010', certType: 'BCBA', domain: 'Foundations', taskCode: 'A-01',
    question: 'A supervisor says, "There must be a reason this pattern is happening, even if we have not identified it yet." This statement is MOST consistent with:',
    options: [
      'Mentalism.',
      'Determinism.',
      'Social validity.',
      'Extinction.',
    ],
    correctIndex: 1,
    explanation: 'Determinism assumes behavior is lawful and caused by identifiable variables. The analyst may not yet know the controlling variables, but the assumption is that they exist and can be discovered.',
    difficulty: 'easy',
  },
  {
    id: 'q-A-011', certType: 'BCBA', domain: 'Foundations', taskCode: 'A-02',
    question: 'Which explanation BEST reflects parsimony?',
    options: [
      'Assume the learner is oppositional before checking whether the instruction was unclear.',
      'Start with observable environmental variables before adopting more complex hypothetical accounts.',
      'Use the explanation that feels most clinically intuitive to staff.',
      'Treat all possible explanations as equally valid until treatment ends.',
    ],
    correctIndex: 1,
    explanation: 'Parsimony means behavior analysts first examine simple, observable, and testable explanations before moving to more complex or hypothetical interpretations.',
    difficulty: 'medium',
  },
  {
    id: 'q-A-012', certType: 'BCBA', domain: 'Foundations', taskCode: 'A-05',
    question: 'A clinician says a client "has low motivation," but has not assessed access to reinforcement, task difficulty, or recent establishing operations. From a behavior-analytic perspective, this is problematic because it:',
    options: [
      'Uses a summary label instead of analyzing manipulable variables.',
      'Shows that private events cannot be measured directly.',
      'Proves the behavior is biologically determined.',
      'Accurately identifies a respondent relation.',
    ],
    correctIndex: 0,
    explanation: 'Terms like "low motivation" can become explanatory fictions if they replace assessment of actual contingencies, deprivation conditions, task variables, or reinforcement history.',
    difficulty: 'hard',
  },
  {
    id: 'q-A-013', certType: 'BCBA', domain: 'Foundations', taskCode: 'A-07',
    question: 'Which of the following is an abolishing operation?',
    options: [
      'A learner has not had access to attention for several hours and attention-maintained bids increase.',
      'A child drinks several glasses of water and requests for drinks decrease during instruction.',
      'A therapist presents a visual schedule before transitions.',
      'A token is delivered after task completion.',
    ],
    correctIndex: 1,
    explanation: 'An abolishing operation decreases the value of a reinforcer and reduces behavior historically reinforced by it. Satiation on water reduces the value of water and the frequency of requests for drinks.',
    difficulty: 'medium',
  },
  {
    id: 'q-A-014', certType: 'BCBA', domain: 'Foundations', taskCode: 'A-09',
    question: 'Which example is MOST clearly respondent behavior?',
    options: [
      'A student asks for help after learning that requests produce assistance.',
      'A client covers his ears when the fire alarm sounds because the sound elicits a reflexive response.',
      'A technician completes data collection because supervision checks have increased accuracy.',
      'A child cleans up toys because that behavior has been reinforced with praise.',
    ],
    correctIndex: 1,
    explanation: 'Respondent behavior is elicited by antecedent stimuli, often reflexively. Covering ears to a sudden aversive sound is most consistent with an elicited respondent relation rather than an operant selected by consequences.',
    difficulty: 'medium',
  },
  {
    id: 'q-B-009', certType: 'BCBA', domain: 'Measurement', taskCode: 'B-01',
    question: 'Event recording is MOST appropriate when the target behavior:',
    options: [
      'Occurs continuously for long periods with unclear onset and offset.',
      'Occurs as discrete responses that can be counted reliably.',
      'Must be measured only at the end of each interval.',
      'Can only be inferred from written work products.',
    ],
    correctIndex: 1,
    explanation: 'Event recording works best for responses with clear beginnings and endings that can be counted as separate occurrences, such as hits, requests, or out-of-seat events.',
    difficulty: 'easy',
  },
  {
    id: 'q-B-010', certType: 'BCBA', domain: 'Measurement', taskCode: 'B-02',
    question: 'A team uses partial interval recording to measure aggression. Which concern is MOST important when interpreting the data?',
    options: [
      'The method may underestimate how often the behavior occurs.',
      'The method may overestimate occurrence because one brief response scores the entire interval.',
      'The method cannot be used for socially significant behavior.',
      'The method requires a permanent product to verify the data.',
    ],
    correctIndex: 1,
    explanation: 'Partial interval recording marks the interval if the behavior occurs at any point, even briefly. This can overestimate how much behavior actually occurred, especially with brief, high-rate responses.',
    difficulty: 'medium',
  },
  {
    id: 'q-B-011', certType: 'BCBA', domain: 'Measurement', taskCode: 'B-03',
    question: 'Momentary time sampling is often selected because it:',
    options: [
      'Requires the observer to watch continuously without interruption.',
      'Can reduce observer effort because data are recorded only at specific moments.',
      'Produces a permanent product after each interval.',
      'Is always more accurate than event recording.',
    ],
    correctIndex: 1,
    explanation: 'Momentary time sampling can be practical in busy settings because the observer only records whether the behavior is occurring at the moment the interval ends. That efficiency comes with tradeoffs in accuracy depending on the behavior measured.',
    difficulty: 'medium',
  },
  {
    id: 'q-B-012', certType: 'BCBA', domain: 'Measurement', taskCode: 'B-04',
    question: 'Two observers score the same sessions using a well-defined response class, but IOA remains low. What is the BEST next step?',
    options: [
      'Assume the target behavior is too complex to measure and stop collecting data.',
      'Review the operational definition and observer training before using the data for major decisions.',
      'Average the two observers\' scores and proceed.',
      'Switch immediately to self-report data.',
    ],
    correctIndex: 1,
    explanation: 'Low IOA suggests problems with the response definition, observation procedures, or observer training. Those issues should be addressed before relying on the data for treatment or experimental decisions.',
    difficulty: 'medium',
  },
  {
    id: 'q-B-013', certType: 'BCBA', domain: 'Measurement', taskCode: 'B-05',
    question: 'An assessment has strong treatment validity when it:',
    options: [
      'Produces results that lead to interventions improving meaningful outcomes.',
      'Contains items that are statistically difficult.',
      'Uses standardized norms from large groups.',
      'Measures only private events.',
    ],
    correctIndex: 0,
    explanation: 'Treatment validity refers to whether the assessment information is actually useful for selecting interventions that improve performance or reduce problem behavior.',
    difficulty: 'medium',
  },
  {
    id: 'q-B-014', certType: 'BCBA', domain: 'Measurement', taskCode: 'B-06',
    question: 'Which target is BEST suited for permanent product recording?',
    options: [
      'Number of completed graphing assignments turned in correctly.',
      'Frequency of hand flapping during recess.',
      'Duration of tantrums during transition periods.',
      'Latency to begin homework after an instruction.',
    ],
    correctIndex: 0,
    explanation: 'Permanent product recording is most appropriate when the effects of behavior remain after the response has ended, such as completed assignments, written output, or assembled materials.',
    difficulty: 'easy',
  },
  {
    id: 'q-B-015', certType: 'BCBA', domain: 'Measurement', taskCode: 'B-07',
    question: 'A teacher wants to know how long it takes a student to begin work after receiving the instruction, "Start." Which pair of events must be defined precisely?',
    options: [
      'The offset of the behavior and the delivery of reinforcement.',
      'The onset of the antecedent cue and the onset of the target response.',
      'The duration of the response and the end of the session.',
      'The number of responses and the interresponse time.',
    ],
    correctIndex: 1,
    explanation: 'Latency depends on a clearly defined starting event and a clearly defined response onset. Without both, the resulting latency values will be inconsistent or invalid.',
    difficulty: 'medium',
  },
  {
    id: 'q-B-016', certType: 'BCBA', domain: 'Measurement', taskCode: 'B-08',
    question: 'Whole interval recording is usually a better fit than partial interval recording when the team wants to estimate:',
    options: [
      'How often very brief aggression occurs.',
      'Sustained engagement or on-task behavior across an interval.',
      'The exact count of requests emitted.',
      'The latency from instruction to response.',
    ],
    correctIndex: 1,
    explanation: 'Whole interval recording is commonly used for behaviors that should occur throughout the interval, such as engagement or on-task behavior, even though it tends to underestimate the true level somewhat.',
    difficulty: 'medium',
  },
  {
    id: 'q-D-005', certType: 'BCBA', domain: 'Behavior Change', taskCode: 'D-01',
    question: 'Providing a visual schedule before transitions is BEST classified as:',
    options: [
      'An antecedent intervention designed to alter stimulus conditions before problem behavior occurs.',
      'A punishment procedure because it changes future responding.',
      'A differential reinforcement procedure.',
      'A form of response blocking.',
    ],
    correctIndex: 0,
    explanation: 'Visual schedules are antecedent supports. They clarify expectations and can reduce uncertainty or transition-related behavior before the target response occurs.',
    difficulty: 'easy',
  },
  {
    id: 'q-D-006', certType: 'BCBA', domain: 'Behavior Change', taskCode: 'D-02',
    question: 'A high-p sequence is MOST likely to fail when:',
    options: [
      'The easy requests are truly likely to be completed.',
      'The low-p demand is presented after momentum has been established.',
      'The so-called high-p requests are not actually high-probability for the learner.',
      'Reinforcement follows compliance with the initial requests.',
    ],
    correctIndex: 2,
    explanation: 'High-p sequences depend on an actual history of compliance with the initial requests. If those requests are not reliably easy for the learner, the momentum effect is weakened or absent.',
    difficulty: 'medium',
  },
  {
    id: 'q-D-007', certType: 'BCBA', domain: 'Behavior Change', taskCode: 'D-03',
    question: 'Which statement about NCR is MOST accurate?',
    options: [
      'NCR strengthens problem behavior because reinforcement is always response-contingent.',
      'NCR can reduce problem behavior by weakening the relevant motivating operation.',
      'NCR is identical to DRO because both reinforce the absence of behavior.',
      'NCR should only be used after extinction has failed completely.',
    ],
    correctIndex: 1,
    explanation: 'NCR delivers reinforcers independent of responding, which can reduce the value of the reinforcer that previously maintained the problem behavior and thereby reduce that behavior.',
    difficulty: 'medium',
  },
  {
    id: 'q-D-008', certType: 'BCBA', domain: 'Behavior Change', taskCode: 'D-04',
    question: 'A learner says "red" when shown a red card but not when shown blue cards. This pattern suggests:',
    options: [
      'The response is under stimulus control of the relevant antecedent feature.',
      'The learner is showing extinction-induced variability.',
      'The card color functions as an abolishing operation.',
      'The response is maintained by automatic punishment.',
    ],
    correctIndex: 0,
    explanation: 'Stimulus control is shown when responding reliably occurs in the presence of relevant antecedent stimuli and not in the absence of those stimuli.',
    difficulty: 'easy',
  },
  {
    id: 'q-E-013', certType: 'BCBA', domain: 'Behavior Change', taskCode: 'E-01',
    question: 'Which example is a positive reinforcer only if it:',
    options: [
      'Is preferred by most learners in the program.',
      'Is delivered immediately after behavior and results in future responding increasing.',
      'Is edible and paired with praise.',
      'Was identified by staff as motivating.',
    ],
    correctIndex: 1,
    explanation: 'Whether something is a reinforcer is defined functionally, not by form. A consequence counts as positive reinforcement only if it is added after behavior and the future frequency of that behavior increases.',
    difficulty: 'medium',
  },
  {
    id: 'q-E-014', certType: 'BCBA', domain: 'Behavior Change', taskCode: 'E-02',
    question: 'Which consequence arrangement BEST tests whether escape is functioning as negative reinforcement?',
    options: [
      'Provide access to preferred tangibles after each instance of the behavior.',
      'Remove or postpone demands contingent on the behavior and observe whether that relation strengthens responding.',
      'Deliver praise after the behavior.',
      'Ignore the behavior across all settings.',
    ],
    correctIndex: 1,
    explanation: 'Negative reinforcement is demonstrated when behavior produces removal, reduction, or postponement of an aversive condition and the future frequency of that behavior increases.',
    difficulty: 'hard',
  },
  {
    id: 'q-E-015', certType: 'BCBA', domain: 'Behavior Change', taskCode: 'E-03',
    question: 'During extinction, which pattern is MOST likely early in treatment?',
    options: [
      'Immediate and stable elimination of the behavior.',
      'Temporary increases in intensity, rate, or variability of the response.',
      'Automatic transfer of stimulus control to peers.',
      'Guaranteed decreases without any collateral effects.',
    ],
    correctIndex: 1,
    explanation: 'Extinction often produces an initial burst or change in response variability before the behavior declines, so practitioners should plan for this possibility rather than treating it as treatment failure.',
    difficulty: 'easy',
  },
  {
    id: 'q-E-016', certType: 'BCBA', domain: 'Behavior Change', taskCode: 'E-04',
    question: 'Which schedule is MOST likely to produce a post-reinforcement pause?',
    options: [
      'Variable ratio.',
      'Fixed ratio.',
      'Variable interval.',
      'Random ratio with very dense reinforcement.',
    ],
    correctIndex: 1,
    explanation: 'Fixed ratio schedules often produce a break-and-run pattern, including a post-reinforcement pause followed by rapid responding until the next reinforcer is earned.',
    difficulty: 'medium',
  },
  {
    id: 'q-E-017', certType: 'BCBA', domain: 'Behavior Change', taskCode: 'E-05',
    question: 'Which option BEST distinguishes DRA from DRI?',
    options: [
      'DRA reinforces any behavior except the target, whereas DRI uses punishment.',
      'DRA reinforces a functionally appropriate alternative, whereas DRI reinforces a response that cannot occur at the same time as the target behavior.',
      'DRA is time-based, whereas DRI is response-dependent extinction.',
      'There is no meaningful distinction between the procedures.',
    ],
    correctIndex: 1,
    explanation: 'DRA targets an alternative response, often one serving the same function, while DRI targets a response that is physically incompatible with the problem behavior.',
    difficulty: 'medium',
  },
  {
    id: 'q-E-018', certType: 'BCBA', domain: 'Behavior Change', taskCode: 'E-06',
    question: 'Which replacement response is MOST appropriate in FCT for behavior maintained by access to attention?',
    options: [
      'Completing more difficult work independently.',
      'Using a taught communicative response such as "play with me" or tapping a help card to recruit attention.',
      'Leaving the area whenever attention is unavailable.',
      'Sitting silently until an adult notices the learner.',
    ],
    correctIndex: 1,
    explanation: 'FCT should teach a socially appropriate communicative response that accesses the same reinforcer as the problem behavior. If the function is attention, the replacement should produce attention.',
    difficulty: 'easy',
  },
  {
    id: 'q-E-019', certType: 'BCBA', domain: 'Behavior Change', taskCode: 'E-09',
    question: 'Prompt dependency is MOST likely when:',
    options: [
      'Prompts are systematically faded and natural cues are emphasized.',
      'Artificial prompts continue to control responding because they are not faded effectively.',
      'The learner contacts reinforcement for independent responding.',
      'Multiple exemplars are trained from the start.',
    ],
    correctIndex: 1,
    explanation: 'Prompt dependency occurs when the learner waits for prompts because artificial cues continue to control responding rather than the natural discriminative stimuli.',
    difficulty: 'medium',
  },
  {
    id: 'q-E-020', certType: 'BCBA', domain: 'Behavior Change', taskCode: 'E-11',
    question: 'A token is removed each time a student shouts out, and shouting decreases. This is BEST described as:',
    options: [
      'Negative reinforcement.',
      'Response cost, a form of negative punishment.',
      'Extinction with overcorrection.',
      'DRO because tokens are contingent on quiet behavior.',
    ],
    correctIndex: 1,
    explanation: 'Response cost removes a conditioned reinforcer contingent on behavior, reducing future responding. Because a stimulus is removed and the behavior decreases, it is negative punishment.',
    difficulty: 'easy',
  },
  {
    id: 'q-F-009', certType: 'BCBA', domain: 'Ethics', taskCode: 'F-01',
    question: 'Which practice BEST supports informed consent?',
    options: [
      'Using highly technical language so clients understand the professionalism of the service.',
      'Providing enough information in understandable language for the client or guardian to make a voluntary decision.',
      'Obtaining one signature at intake and never revisiting consent again.',
      'Asking the referring professional to consent on behalf of the client.',
    ],
    correctIndex: 1,
    explanation: 'Informed consent requires understandable disclosure, voluntary agreement, and relevant information about procedures, risks, benefits, and alternatives. It is a process, not just a signed form.',
    difficulty: 'easy',
  },
  {
    id: 'q-F-010', certType: 'BCBA', domain: 'Ethics', taskCode: 'F-05',
    question: 'A treatment plan for severe problem behavior was designed without a functional assessment because the team was in a hurry. Ethically, the strongest concern is that:',
    options: [
      'The plan may be disconnected from the variables actually maintaining the behavior.',
      'The plan will necessarily require punishment.',
      'The plan cannot include reinforcement procedures.',
      'The BACB prohibits any treatment before a medical diagnosis is obtained.',
    ],
    correctIndex: 0,
    explanation: 'Ethical and effective intervention depends on understanding the controlling variables for the behavior. Skipping functional assessment increases the risk of ineffective or harmful treatment decisions.',
    difficulty: 'hard',
  },
  {
    id: 'q-F-011', certType: 'BCBA', domain: 'Ethics', taskCode: 'F-06',
    question: 'A BCBA is asked to treat a feeding disorder but has no supervised experience in that area. The MOST ethical next step is to:',
    options: [
      'Take the case and learn while providing treatment.',
      'Accept the case only if the family signs a waiver.',
      'Seek appropriate consultation, supervision, or referral before independently practicing outside competence.',
      'Use only reinforcement procedures and proceed.',
    ],
    correctIndex: 2,
    explanation: 'Practicing within competence boundaries means obtaining the training, consultation, or supervision required before independently providing services in a specialized area.',
    difficulty: 'medium',
  },
  {
    id: 'q-F-012', certType: 'BCBA', domain: 'Ethics', taskCode: 'F-07',
    question: 'Which situation is the CLEAREST confidentiality breach?',
    options: [
      'Discussing treatment goals in a private supervision meeting with authorized personnel.',
      'De-identifying graph examples before using them in a training deck.',
      'Posting a therapy-room photo online where client materials with identifying information are visible.',
      'Sharing session data with the legal guardian named in the service agreement.',
    ],
    correctIndex: 2,
    explanation: 'Confidentiality is breached when identifying or protected information is disclosed without proper authorization. Publicly posting visible client information is a clear violation.',
    difficulty: 'easy',
  },
  {
    id: 'q-AP-010', certType: 'BCBA', domain: 'Applications', taskCode: 'AP-01',
    question: 'A learner says "help" only when tasks become difficult and receives assistance. This verbal response is BEST classified as a:',
    options: [
      'Tact.',
      'Mand.',
      'Echoic.',
      'Textual response.',
    ],
    correctIndex: 1,
    explanation: 'A mand is controlled by a motivating operation and specifies its own reinforcer. In this example, the difficulty of the task establishes the value of help, and the response produces help.',
    difficulty: 'easy',
  },
  {
    id: 'q-AP-011', certType: 'BCBA', domain: 'Applications', taskCode: 'AP-02',
    question: 'Which arrangement is MOST likely to produce generalization from the start?',
    options: [
      'Teach only with identical materials until perfect mastery is reached before changing anything.',
      'Teach with multiple instructors, settings, and relevant stimuli while preserving the core response requirement.',
      'Teach only in distraction-free rooms and delay real-world practice indefinitely.',
      'Use one script and one reinforcer for every trial across all contexts.',
    ],
    correctIndex: 1,
    explanation: 'Training across people, settings, and materials from the beginning helps the learner contact the relevant features that should control responding outside the original teaching context.',
    difficulty: 'medium',
  },
  {
    id: 'q-AP-012', certType: 'BCBA', domain: 'Applications', taskCode: 'AP-05',
    question: 'Which teaching example BEST reflects NET rather than DTT?',
    options: [
      'A therapist conducts repeated table-top trials with fixed materials and preplanned prompts.',
      'A clinician pauses during block play to create a natural opportunity for the learner to request "more blocks."',
      'A technician presents 20 mastered receptive trials in rapid succession at a desk.',
      'An instructor teaches only in a therapy room to improve stimulus control.',
    ],
    correctIndex: 1,
    explanation: 'NET embeds instruction in naturally occurring activities and motivation. In this example, the ongoing play context and naturally relevant reinforcer make it a good NET teaching opportunity.',
    difficulty: 'easy',
  },
];

// ─── Helpers ─────────────────────────────────────────────────────────────────
function normalizeCertType(_certType?: 'BCBA' | 'BCaBA') {
  return 'BCBA' as const;
}

export function getQuestionsByCert(certType: 'BCBA' | 'BCaBA') {
  return ALL_QUESTIONS.filter((q) => q.certType === normalizeCertType(certType));
}

export function getQuestionsByDomain(domain: string, certType?: 'BCBA' | 'BCaBA') {
  return ALL_QUESTIONS.filter(
    (q) => q.domain === domain && q.certType === normalizeCertType(certType)
  );
}

export function getQuestionsByDifficulty(difficulty: 'easy' | 'medium' | 'hard', certType?: 'BCBA' | 'BCaBA') {
  return ALL_QUESTIONS.filter(
    (q) => q.difficulty === difficulty && q.certType === normalizeCertType(certType)
  );
}

export function getRandomQuestions(count: number, certType?: 'BCBA' | 'BCaBA', domain?: string) {
  let pool = getQuestionsByCert(certType ?? 'BCBA');
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
  bcaba:   0,
  domains: getDomains(),
};
