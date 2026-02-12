---
title: "Truth Tables for Logic Puzzles"
description: "Construct truth tables to solve classic logic puzzles and evaluate logical statements."
difficulty: "Beginner"
unit: "DISCRETE MATHEMATICS"
day: 4
week: 1
month: 1
technologies: ["Logic", "Truth Tables"]
learningOutcomes:
    - "Construct truth tables for compound logical expressions"
    - "Solve logic puzzles using systematic truth-table reasoning"
    - "Identify tautologies, contradictions, and logical equivalences"
estimatedTime: "1.5 hours"
requirements:
    - "Understanding of basic logical operators: AND, OR, NOT, IMPLIES, IFF"
    - "Pen and paper, or a digital tool (e.g., spreadsheet)"
deliverables:
    - "Written truth tables (PDF or image) for given expressions"
    - "A written solution to a classic logic puzzle"
resources:
  - name: "Truth Table – Wikipedia"
    url: "https://en.wikipedia.org/wiki/Truth_table"
  - name: "Logic in Computer Science – Internet Encyclopedia of Philosophy"
    url: "https://iep.utm.edu/logic/"
  - name: "Interactive Truth Table Generator"
    url: "https://web.stanford.edu/class/cs103/tools/truth-table-tool/"
  - name: "Logical Puzzles – Brilliant"
    url: "https://brilliant.org/wiki/logic-puzzles/"
  - name: "Chapter 2: Truth Tables – Open Logic Project"
    url: "https://openlogicproject.org/"
completed: false
completedDate: ""
watermarkStyle: "diagonal"
dateAdded: "2026-02-12"
unlockDate: "2026-02-12"
---

# Truth Tables for Logic Puzzles

## Overview

Truth tables provide a systematic way to evaluate logical statements under all possible assignments of their atomic propositions. They are essential for circuit design, program verification, and solving puzzles where relationships must be deduced. This challenge reinforces the connection between symbolic logic and algorithmic reasoning.

## Objective

Construct truth tables for given logical expressions and use them to solve classic logic puzzles. Document your work clearly, either as handwritten scans or neatly formatted digital tables.

## Prerequisites

- Familiarity with propositional logic and truth tables
- Understanding of basic logical operators: AND, OR, NOT, IMPLIES, IFF
- Pen and paper, or a digital tool (e.g., spreadsheet)

## Instructions

### Part 1: Truth Tables for Compound Expressions

- For each of the following expressions, create a complete truth table showing the truth value for every combination of atomic propositions:
    - (A ∧ B) → C
    - ¬(P ∨ Q) ↔ (¬P ∧ ¬Q)
    - (X → Y) ∧ (Y → Z) → (X → Z)
- Label each expression as a tautology, contradiction, or contingency.
- For equivalences, state whether the two sides are logically equivalent.

### Part 2: Solving a Logic Puzzle

- Solve the "Knights and Knaves" puzzle using a truth table:
    - On a remote island, inhabitants are either knights (always tell the truth) or knaves (always lie).
    - You meet two people, A and B.
        - A says: "B is a knight."
        - B says: "We are different types."
- Determine, using a truth table, what A and B are.

### Part 3: Another Puzzle (Optional)

- Solve the "Three Gods" puzzle (simplified) or a similar puzzle of your choice.
- Provide the truth table or reasoning steps.

## Deliverables

1. PDF or image containing the three truth tables from Part 1
2. Classification of each expression (tautology, contradiction, contingency)
3. Truth table and solution for the Knights and Knaves puzzle
4. (Optional) Short paragraph explaining your reasoning

## Evaluation Criteria

| Criteria                | Weight | Description                                         |
|-------------------------|--------|-----------------------------------------------------|
| Truth Table Accuracy    | 50%    | All rows are correct; no missing combinations       |
| Classification          | 20%    | Correct identification of tautology/contradiction/contingency |
| Puzzle Solution         | 30%    | Correct classification of A and B, supported by the truth table |

## Tips & Common Mistakes

- Always list atomic propositions in a consistent order
- Use intermediate columns for sub-expressions to reduce errors
- In implication (→), the only false case is when the antecedent is true and the consequent is false
- Double-check that you have 2^n rows for n variables

## Bonus Challenges (Optional)

1. Create a truth table for a 3-bit binary adder circuit (sum and carry out) using only AND, OR, and NOT
2. Write a Python script that automatically generates truth tables for any given logical expression (using sympy or similar)

## Submission

Upload your deliverable to the `unit4/day4/` folder in your course repository as `truth_tables_puzzles.pdf` (or `.png`). Include the script for the bonus challenge if attempted.
