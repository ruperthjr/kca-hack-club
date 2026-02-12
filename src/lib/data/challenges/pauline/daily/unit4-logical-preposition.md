---
title: "Proposition Logic - The Liar Paradox Analysis"
description: "Determine if 'This statement is false' is a proposition using formal logic principles"
difficulty: "intermediate"
unit: "Unit 4: Discrete Mathematics"
day: 2
technologies:
    - "Propositional Logic"
    - "Logical Paradoxes"
    - "Truth Values"
    - "Mathematical Logic"
learningOutcomes:
    - "Define what constitutes a proposition in logic"
    - "Identify self-referential statements"
    - "Analyze the Liar Paradox structure"
    - "Distinguish between propositions and paradoxes"
estimatedTime: "60-75 minutes"
requirements:
    - "Understanding of basic logic terms"
    - "Knowledge of truth values"
    - "Critical thinking skills"
deliverables:
    - "Formal definition of a proposition"
    - "Step-by-step analysis of the statement"
    - "Truth value assignment attempt"
    - "Resolution explanation"
    - "Examples of valid propositions"
resources:
  - name: "Rosen: Discrete Mathematics and Its Applications, 8th Ed. - Chapter 1.1"
    url: "https://www.mheducation.com/highered/product/discrete-mathematics-applications-rosen/M9781259676512.html"
  - name: "Stanford Encyclopedia: The Liar Paradox"
    url: "https://plato.stanford.edu/entries/liar-paradox/"
  - name: "MIT OpenCourseWare: Mathematics for Computer Science - Logic"
    url: "https://ocw.mit.edu/courses/6-042j-mathematics-for-computer-science-fall-2010/pages/lecture-notes/"
  - name: "Khan Academy: Propositional Logic"
    url: "https://www.khanacademy.org/computing/computer-science/cryptography/crypt/v/propositional-logic"
  - name: "Wikipedia: Proposition"
    url: "https://en.wikipedia.org/wiki/Proposition"

completed: false
completedDate: ""
watermarkStyle: "diagonal"
dateAdded: "2026-02-10"
unlockDate: "2026-02-10"
---

# Proposition Logic Challenge: The Liar Paradox

## Overview

In discrete mathematics, a proposition is a declarative statement that is either true or false, but not both. The Liar Paradox presents a fundamental challenge to this binary classification, exposing limitations in classical logic systems.

## Objective

Determine whether the statement "This statement is false" qualifies as a proposition according to formal logic principles. Analyze its structure, attempt to assign truth values, and explain why it creates a paradox.

## Instructions

### Section 1: Proposition Definition Analysis

- **Formal Definition of a Proposition:**  
    A proposition must be declarative, truth-valued, well-defined, non-self-referential (standard requirement), and consistent.

- **Checklist for "This statement is false":**
    - Declarative form? ✓
    - Single truth value assignable? ?
    - Clear meaning? ✓
    - Self-referential? ✓
    - Consistent? ?

### Section 2: Step-by-Step Truth Value Analysis

- **Assume TRUE:**  
    If true, it claims to be false, so it must be false — contradiction.

- **Assume FALSE:**  
    If false, its claim is incorrect, so it must be true — contradiction.

- **Truth Table Attempt:**

    | Assigned Truth Value      | Implication      | Result            |
    |--------------------------|------------------|-------------------|
    | TRUE                     | Must be false    | Contradiction     |
    | FALSE                    | Must be true     | Contradiction     |
    | BOTH TRUE AND FALSE      | Violates LNC     | Invalid assignment|
    | NEITHER TRUE NOR FALSE   | Not a prop       | Violates bivalence|

    (LNC = Law of Non-Contradiction)

### Section 3: Formal Logic Representation

- Let **P** represent "This statement is false".
- Symbolically: P ≡ F(P)
- Logical analysis:
    - Assume T(P): T(P) → F(P) ⇒ Contradiction
    - Assume F(P): F(P) → ¬F(P) ⇒ Contradiction

- **Truth Value Graph:**  
    Assigning T or F leads to an infinite loop.

### Section 4: Historical and Philosophical Context

- **Ancient:** Eubulides' and Epimenides' paradoxes.
- **Medieval:** Buridan, Ockham on self-reference and truth gaps.
- **Modern:** Tarski's hierarchy, Kripke's fixed points.

- **Mathematical Significance:**  
    Impact on Frege, Russell, Gödel, Tarski, Kripke.

### Section 5: Resolution Approaches

- **Truth Value Gaps (Kripke):** Some statements have no truth value.
- **Hierarchical Languages (Tarski):** Truth predicates require metalanguage.
- **Paraconsistent Logic:** Allows true contradictions (dialetheism).
- **Fixed Point Theory (Kripke):** Some sentences have no fixed truth value.

### Section 6: Examples for Comparison

- **Valid Propositions:**  
    "2 + 2 = 4", "Paris is in Germany", "All squares have four sides", "Some cats are blue".

- **Invalid Statements:**  
    Questions, commands, paradoxical/self-referential statements, open sentences, meaningless statements.

- **Borderline Cases:**  
    "This sentence contains five words." (verifiable),  
    "I am lying right now." (potential paradox),  
    "The next sentence is true. The previous sentence is false." (circular).

### Section 7: Formal Conclusion

- **Standard Logic:**  
    "This statement is false" violates LNC and LEM, cannot be assigned a stable truth value, and is not a proposition.

- **Classification Table:**

    | Classification         | Verdict    |
    |------------------------|------------|
    | Proposition            | NO         |
    | Paradox                | YES        |
    | Statement              | YES        |
    | Truth-apt              | NO         |
    | Well-formed formula    | YES        |
    | Meaningful             | YES        |
    | Consistent             | NO         |

### Section 8: Applications in Computer Science

- **Halting Problem:** Self-reference and undecidability.
- **Gödel Numbering:** Statements about their own provability.
- **Type Theory:** Prevents self-reference.
- **Database Theory:** Self-referential queries and recursion.
- **Programming Languages:** Recursive functions, fixed-point combinators, infinite loops.

- **Example (SQL):**
    ```sql
    WITH RECURSIVE cte AS (
        SELECT 1 AS n
        UNION ALL
        SELECT n + 1 FROM cte WHERE n < 10
    )
    ```
    (Termination condition prevents infinite recursion.)

### Section 9: Related Paradoxes

- **Berry Paradox:** "The smallest positive integer not definable in fewer than twelve words."
- **Russell's Paradox:** R = `&#123;x &#124; x not in x&#125;`; does R in R?
- **Quine's Paradox:** "Yields falsehood when preceded by its quotation" yields falsehood when preceded by its quotation.

### Section 10: Assessment Criteria

- **Analysis Must Include:**
    - Definition and criteria for proposition
    - Truth value assignment and contradiction
    - Formal representation and classification
    - Context, applications, and related paradoxes

- **Grading Rubric:**
    - Conceptual Understanding (30%)
    - Logical Analysis (40%)
    - Contextual Knowledge (20%)
    - Communication (10%)

### Section 11: Submission Requirements

- **Deliverables:**
    1. Written analysis (500-800 words) covering all required points
    2. Supporting materials: truth table, classification table, examples, references
    3. Format: PDF or Markdown, clear headings, citations, name and date

- **Submission Checklist:**
    - [ ] Proposition definition with all 5 criteria
    - [ ] Truth value analysis (both cases)
    - [ ] Contradiction clearly shown
    - [ ] Formal conclusion (is/is not a proposition)
    - [ ] Historical context mentioned
    - [ ] Computing applications discussed
    - [ ] Related paradoxes identified
    - [ ] Examples of valid propositions provided
    - [ ] Proper formatting and organization
    - [ ] All calculations/logical steps shown

### Section 12: Advanced Considerations

- **Further Study:**
    - Three-valued logic (Łukasiewicz, Kleene)
    - Fuzzy logic
    - Provability logic (Gödel, Löb)
    - Game semantics

- **Research Questions:**
    1. How do programming languages handle self-reference?
    2. What computational problems are undecidable due to similar structures?
    3. How do proof assistants avoid liar-like paradoxes?
    4. Implications for AI and truth assessment

---

This challenge develops critical thinking about foundational logic concepts essential for computer science theory, programming language design, and formal verification.
