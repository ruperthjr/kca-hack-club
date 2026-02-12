---
title: "Applying the Five Whys Technique to Software Bug Root Cause Analysis"
description: "Use the Five Whys methodology to drill from symptom to root cause for a time-bound software bug and propose preventative actions"
difficulty: "intermediate"
unit: "Unit 2: FOUNDATIONS OF CRITICAL AND CREATIVE THINKING"
day: 2
technologies:
  - "Root Cause Analysis"
  - "Problem Solving"
  - "Software Debugging"
  - "Systems Thinking"
learningOutcomes:
  - "Apply the Five Whys technique to technical problems"
  - "Differentiate symptoms from root causes in software bugs"
  - "Document analysis clearly and systematically"
  - "Propose concrete preventative measures"
estimatedTime: "45-60 minutes"
requirements:
  - "Provided bug report scenario"
  - "Five Whys worksheet template"
  - "Systems thinking frame"
deliverables:
  - "Completed Five Whys analysis chart"
  - "Root cause statement and validation"
  - "Three preventative actions with owners and metrics"
  - "Systems thinking analysis write-up"
resources:
  - name: "Thinking in Systems: A Primer by Donella H. Meadows"
    url: "https://www.chelseagreen.com/product/thinking-in-systems/"
  - name: "The Fifth Discipline: The Art & Practice of The Learning Organization by Peter M. Senge"
    url: "https://www.penguinrandomhouse.com/books/291299/the-fifth-discipline-by-peter-m-senge/"
  - name: "An Introduction to General Systems Thinking by Gerald M. Weinberg"
    url: "https://www.dorsethouse.com/books/gst.html"
  - name: "Toyota Production System: Beyond Large-Scale Production by Taiichi Ohno"
    url: "https://www.amazon.com/Toyota-Production-System-Beyond-Large-Scale/dp/0915299143"
  - name: "Root Cause Analysis: The Core of Problem Solving and Corrective Action by Duke Okes"
    url: "https://www.asq.org/quality-press/display-item?item=H1443"

completed: false
completedDate: ""
watermarkStyle: "diagonal"
dateAdded: "2026-02-10"
unlockDate: "2026-02-10"
---

# Applying the Five Whys Technique to Software Bug Root Cause Analysis

## Overview

The Five Whys is a simple, evidence-driven technique to move beyond symptoms and uncover actionable root causes. In this exercise you'll apply it to a time-bound crash in a mobile banking app and produce validation and prevention steps.

## Objective

Use the provided scenario to:
- Identify the root cause using Five Whys.
- Validate the root cause against practical criteria.
- Propose three specific preventative actions (owner, timeline, success metric).
- Analyze systemic factors that contributed to the recurrence.

## Bug Scenario (provided)

User reports the mobile banking app crashes when transferring money between 11:55 PM and 12:05 AM. Crash log: ArrayIndexOutOfBoundsException in transaction processing. Bug was fixed last month but has reappeared in current release.

---

## Part 1: Five Whys Analysis Chart

### Problem Statement
Mobile banking app crashes during money transfers between 11:55 PM and 12:05 AM (ArrayIndexOutOfBoundsException).

### Five Whys Drill-Down
1. Why 1: Why does it crash during these times?
   - Answer: ArrayIndexOutOfBoundsException occurs in transaction processing.
   - Evidence: Crash log points to line 47 of TransactionProcessor.java.

2. Why 2: Why is there an ArrayIndexOutOfBoundsException at line 47?
   - Answer: Code accesses transactions[dayOfMonth] without bounds checks.
   - Evidence: Code review shows transactions[dayOfMonth] used directly.

3. Why 3: Why does code use transactions[dayOfMonth] without checking bounds?
   - Answer: Developer assumed dayOfMonth is always in range 1–31 and used it as an index.
   - Evidence: No input validation; no defensive checks around index access.

4. Why 4: Why did the developer assume safe dayOfMonth values?
   - Answer: Requirements and design didn't specify month-end/time-bound processing edge cases.
   - Evidence: Requirements section 3.2 only describes "daily transactions" without temporal edge cases.

5. Why 5: Why didn't requirements capture temporal edge cases?
   - Answer: No formal process or checklist for time-related edge cases (month boundaries, DST, leap years) during requirements gathering.
   - Evidence: Requirements templates and acceptance criteria lack a "Temporal/Time Boundaries" section.

### Root Cause Statement
Requirements gathering process lacks a systematic step to identify temporal edge cases (e.g., month rollover, midnight processing, DST), causing design and tests that miss time-bound scenarios and enabling recurrence of similar bugs.

---

## Part 2: Root Cause Validation

Use the True Root Cause Checklist:

- Prevent recurrence if addressed? Yes — addressing temporal edge cases prevents this class of bugs, not just the instance.
- Within the team's control? Yes — templates and workflows are team-owned.
- Specific and actionable? Yes — add temporal edge-case checklist and acceptance criteria.
- Process-focused and explanatory? Yes — explains why previous fix addressed symptom (specific index) but not underlying requirement gaps.

Validation Questions (examples to answer in your submission):
- Does fixing requirements prevent similar time-bound bugs? Yes, because tests and designs will cover those cases.
- Is requirements process within team's control? Yes, templates and sprint practices can be updated.
- Can we create specific actions? Yes — template change, training, and CI tests.
- Does this explain the bug's reappearance? Yes — prior fix was ad hoc and lacked systemic change.

Considered and rejected alternative hypotheses (examples):
- "Developer incompetence" — rejected: blames individual and ignores templates/processes.
- "Insufficient testing" — rejected as primary cause: testing without explicit requirements is unlikely to include time-bound cases.
- "Java array limitation" — rejected: proper design and validation prevent the issue regardless of language.

---

## Part 3: Preventative Actions

Action 1: Requirements Template Improvement
- What: Add "Temporal Edge Cases" checklist to all requirement documents (day/month boundaries, DST, leap year, timezone rollover).
- How: Update template, require sign-off on temporal checklist before development.
- Responsible: Product Owner + Lead Developer
- Timeline: Implement next sprint planning
- Success Metric: Zero time-boundary incidents reported in the next quarter; checklist present on 100% of stories involving time.

Action 2: Developer Training & Patterns
- What: Short workshop on temporal programming, defensive indexing, and edge-case thinking.
- How: Case studies of past incidents, best practices (use of robust date/time libraries, unit tests).
- Responsible: Engineering Manager
- Timeline: Within 2 weeks
- Success Metric: 100% team attendance; measurable improvement on pre/post quiz.

Action 3: Testing & CI Enhancements
- What: Add time-bound tests (time-warp/simulated clocks) to unit/integration suites and CI.
- How: Introduce tests that simulate midnight, month-end, DST transitions and fail builds on regressions.
- Responsible: QA Lead + DevOps
- Timeline: Implement within 3 sprints
- Success Metric: CI catches similar defects before release; coverage reports show temporal test coverage for applicable modules.

---

## Part 4: Systems Thinking Analysis

System Components:
- Requirements gathering and templates
- Development practices (design assumptions)
- Testing pipeline (unit, integration, CI)
- Deployment cadence and rollbacks
- User reporting and feedback loop

Feedback Loops:
- Reinforcing: Poor requirements → recurring bugs → firefighting → less time for improving requirements.
- Balancing: Bug reports trigger fixes that temporarily mask systemic issues, reducing perceived urgency to fix root cause.

Leverage Points:
- Most effective (upstream): Requirements template + acceptance criteria change.
- Quick win: Developer checklist and small-time-bound unit tests.
- Long-term: Cultural shift to prioritize preventive measures (training, definition of done includes edge-case sign-off).

Interconnections (examples to include in submission):
- How requirements affect tests: Explicit temporal requirements lead to specific test cases and CI checks.
- How deployment schedule affects recurrence: Frequent releases without sufficient test coverage can reintroduce regressions.
- How user reporting feeds back: Timely, structured bug reports improve root cause analysis and drive systemic fixes.

---

## Submission & Evaluation

Follow the provided document structure:
- Completed Five Whys through five levels with evidence for each level.
- Root cause validated against the checklist.
- Three preventative actions with owner, timeline, and success metric.
- Systems thinking analysis that connects components, feedback loops, and leverage points.

Evaluation focus:
- Logical Five Whys progression (40%)
- Action effectiveness and specificity (30%)
- Rigor in validation and systemic thinking (20%)
- Presentation and clarity (10%)

Tips
- Ask real "why" questions that dig deeper.
- Support each answer with concrete evidence (logs, code, docs).
- Focus on processes and designs, not people.
- Ensure proposed actions are measurable and realistic.

Bonus
- Apply the template to a real incident from your team's backlog.
- Create a facilitation guide for running Five Whys sessions.
- Propose metrics for tracking RCA effectiveness over time.

Submission checklist
- Five Whys through 5 levels ✓
- Evidence at each level ✓
- Clear, actionable root cause ✓
- Root cause validation ✓
- Three specific preventative actions ✓
- Systems thinking analysis ✓
- Well-organized Markdown ✓
- No spelling/grammar errors ✓
- Submitted as Markdown or PDF ✓
