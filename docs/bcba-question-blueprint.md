# BCBA Question Blueprint

## Goal

Build a BCBA-only question bank to **1,000 total items** without filler, duplicate stems, or invented scope creep.

This blueprint uses the current internal task-code structure in [data/questions.ts](/Users/enrique/Documents/Homework/Coding/MyProjects/BCBAGENIUS/data/questions.ts:1) as the production map for writing and review.

## Current Snapshot

- Current total questions: `65`
- Current structure: `1` question per task code
- Remaining gap to 1,000: `935`

### Current questions by domain

| Domain | Current |
| --- | ---: |
| Foundations | 9 |
| Measurement | 8 |
| Experimental Design | 7 |
| Behavior Change | 16 |
| Ethics | 8 |
| Personnel Supervision | 8 |
| Applications | 9 |
| Total | 65 |

## Domain Targets

| Domain | Target | Why |
| --- | ---: | --- |
| Foundations | 135 | Core concepts need repeated discrimination, not just definitions |
| Measurement | 140 | High exam leverage and easy to vary through scenarios/data |
| Experimental Design | 120 | Strong conceptual depth, many design-comparison stems |
| Behavior Change | 250 | Largest practical area; split across antecedent and consequence procedures |
| Ethics | 120 | High stakes and rich scenario writing |
| Personnel Supervision | 105 | Needed for realism and readiness, but smaller than behavior change |
| Applications | 130 | Verbal behavior, generalization, maintenance, FCT, DTT/NET |
| Total | 1,000 |  |

## Writing Rules

Use these rules for every batch:

- No more than `20%` of any task code should be direct-definition stems.
- At least `40%` of each task code should be applied scenario questions.
- At least `20%` of each task code should require discrimination between two similar procedures or concepts.
- At least `10%` of each task code should target common clinical or ethical errors.
- Distractors must be plausible within ABA, not obviously wrong from another discipline.
- Do not create near-duplicates by only changing names, settings, or ages.
- Each explanation should state *why the correct answer is correct* and *why the best distractor is wrong*.

## Stem Mix Per Task Code

For most task codes, aim for this mix:

- `3` definition/concept discrimination
- `4` applied scenario
- `3` procedure selection or treatment match
- `2` error analysis / common misconception
- `2` data interpretation or outcome prediction
- `1+` ethics/scope/social-validity angle when the content naturally supports it

That yields about `15` strong items per code without sounding repetitive.

## Production Order

Build in this order:

1. Measurement
2. Behavior Change
3. Ethics
4. Foundations
5. Experimental Design
6. Applications
7. Personnel Supervision

Reason:

- Measurement and Behavior Change produce the fastest gains with the least fluff.
- Ethics and Foundations anchor quality and stop the bank from becoming purely procedural.
- Experimental Design and Applications need more careful drafting.
- Personnel Supervision is important, but easier to over-repeat if drafted too early.

## Coverage Matrix

The full working matrix lives in [docs/bcba-question-blueprint.csv](/Users/enrique/Documents/Homework/Coding/MyProjects/BCBAGENIUS/docs/bcba-question-blueprint.csv:1).

### Domain subtotals

#### Foundations: 135 target

| Code | Microtopic | Target |
| --- | --- | ---: |
| A-01 | Determinism | 15 |
| A-02 | Parsimony | 15 |
| A-03 | Private events | 15 |
| A-04 | Mentalism vs radical behaviorism | 15 |
| A-05 | Circular reasoning and explanatory fictions | 15 |
| A-06 | Radical behaviorism and lawful relations | 15 |
| A-07 | Motivating operations | 15 |
| A-08 | Selectionism | 15 |
| A-09 | Respondent vs operant behavior | 15 |

#### Measurement: 140 target

| Code | Microtopic | Target |
| --- | --- | ---: |
| B-01 | Continuous measurement | 18 |
| B-02 | Discontinuous measurement and interval systems | 18 |
| B-03 | Momentary time sampling and estimation logic | 17 |
| B-04 | Interobserver agreement | 17 |
| B-05 | Treatment validity / utility | 17 |
| B-06 | Permanent product recording | 17 |
| B-07 | Latency | 18 |
| B-08 | Whole interval bias and fit-to-target behavior | 18 |

#### Experimental Design: 120 target

| Code | Microtopic | Target |
| --- | --- | ---: |
| C-01 | Experimental control | 18 |
| C-02 | Stable baseline and prediction | 17 |
| C-03 | Multiple baseline design | 17 |
| C-04 | Changing criterion design | 17 |
| C-05 | Alternating treatments design | 17 |
| C-06 | Visual analysis | 17 |
| C-07 | Stepwise behavior change and criterion shifts | 17 |

#### Behavior Change: 250 target

| Code | Microtopic | Target |
| --- | --- | ---: |
| D-01 | Antecedent interventions | 20 |
| D-02 | High-p sequences and behavioral momentum | 20 |
| D-03 | Noncontingent reinforcement | 20 |
| D-04 | Stimulus control | 20 |
| E-01 | Positive reinforcement | 14 |
| E-02 | Negative reinforcement | 14 |
| E-03 | Extinction and extinction burst | 14 |
| E-04 | Reinforcement schedules | 14 |
| E-05 | DRI / differential reinforcement procedures | 14 |
| E-06 | Functional communication training | 14 |
| E-07 | Shaping | 14 |
| E-08 | Backward chaining | 14 |
| E-09 | Prompt fading and transfer of stimulus control | 14 |
| E-10 | Positive punishment | 14 |
| E-11 | Response cost | 15 |
| E-12 | Time-out from positive reinforcement | 15 |

#### Ethics: 120 target

| Code | Microtopic | Target |
| --- | --- | ---: |
| F-01 | Informed consent | 15 |
| F-02 | Least restrictive alternative | 15 |
| F-03 | Responding to colleague misconduct | 15 |
| F-04 | Dual relationships and conflicts | 15 |
| F-05 | Ethical BIP requirements and FBA linkage | 15 |
| F-06 | Competence and licensure boundaries | 15 |
| F-07 | Confidentiality | 15 |
| F-08 | Social validity | 15 |

#### Personnel Supervision: 105 target

| Code | Microtopic | Target |
| --- | --- | ---: |
| G-01 | Purpose of supervision | 13 |
| G-02 | Performance management | 13 |
| G-03 | BST components | 13 |
| G-04 | Effective feedback | 13 |
| G-05 | Supervisor responsibility | 13 |
| G-06 | Structured supervision meetings | 13 |
| G-07 | Competency-based supervision | 13 |
| G-08 | BST sequencing in staff training | 14 |

#### Applications: 130 target

| Code | Microtopic | Target |
| --- | --- | ---: |
| AP-01 | Mand | 14 |
| AP-02 | Generalization programming | 14 |
| AP-03 | Tact | 14 |
| AP-04 | Discrete trial training | 14 |
| AP-05 | Natural environment teaching | 14 |
| AP-06 | Listener vs tact repertoires | 15 |
| AP-07 | Maintenance programming | 15 |
| AP-08 | Common stimuli and generalization | 15 |
| AP-09 | Function-based communication replacement | 15 |

## Batch Plan

Use batch sizes that are large enough to create momentum but small enough to review hard:

- Batch 1: `65 -> 200`
- Batch 2: `200 -> 350`
- Batch 3: `350 -> 500`
- Batch 4: `500 -> 700`
- Batch 5: `700 -> 850`
- Batch 6: `850 -> 1,000`

Each batch should include:

- at least `3` domains
- at least `1` ethics cluster
- at least `1` measurement or design cluster
- no more than `25` new items per task code in one pass

## Review Checklist

Before merging any batch:

- Remove concept duplicates.
- Check answer-key balance.
- Check distractor plausibility.
- Check domain and task-code tags.
- Check explanation quality.
- Check that scenario language is not reused across items.

## Immediate Recommendation

Write the next `135` items as:

- Measurement: `+40`
- Behavior Change: `+45`
- Ethics: `+20`
- Foundations: `+15`
- Applications: `+15`

That moves the bank from `65` to `200` while improving realism and exam usefulness fast.
