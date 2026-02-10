---
title: "Writing a C Program Simulating an AND Logic Gate"
description: "Implement a software simulation of an AND logic gate with truth table verification and multi-gate circuits"
difficulty: "beginner"
unit: "Unit 3: COMPUTER ORGANIZATION AND ARCHITECTURE"
day: 3
technologies:
  - "C Programming"
  - "Digital Logic"
  - "Computer Architecture"
  - "Boolean Algebra"
learningOutcomes:
  - "Implement basic digital logic in software"
  - "Understand Boolean algebra implementation"
  - "Write truth table verification tests"
  - "Apply Boolean logic in C"
estimatedTime: "45-60 minutes"
requirements:
  - "C compiler (GCC, Clang, or online compiler)"
  - "Text editor or IDE"
  - "Basic C syntax knowledge"
deliverables:
  - "Complete C program with AND gate simulation"
  - "Truth table verification output"
  - "Extended multi-gate circuit simulation"
  - "Documentation and comments"
resources:
  - name: "Digital Design and Computer Architecture"
    url: "https://booksite.elsevier.com/9780123944245/"
  - name: "Computer Organization and Design"
    url: "https://www.elsevier.com/books/computer-organization-and-design-risc-v-edition/patterson/978-0-12-820331-6"
  - name: "The C Programming Language"
    url: "https://www.amazon.com/Programming-Language-2nd-Brian-Kernighan/dp/0131103628"
  - name: "Logic Gates Tutorial - Electronics Tutorials"
    url: "https://www.electronics-tutorials.ws/logic/logic_1.html"
dateAdded: "2026-02-11"
unlockDate: "2026-02-11"
---

# AND Logic Gate Simulation in C

## Complete C Program

```c
/**
 * Digital Logic Gate Simulations in C
 * - AND, OR, NOT implementations using Boolean logic
 * - Truth table verifier for AND gate
 * - Multi-gate circuit: (A AND B) OR (C AND D)
 * - Practical security system: (A AND B) AND (NOT C)
 *
 * Compiles with: gcc -std=c11 -Wall -Wextra -o logic_sim logic_sim.c
 */

#include <stdio.h>
#include <stdbool.h>

/* Function prototypes */
bool and_gate(bool input_a, bool input_b);
bool or_gate(bool input_a, bool input_b);
bool not_gate(bool input);
void verify_and_gate(void);
bool circuit_simulation(bool a, bool b, bool c, bool d);
void test_circuit(void);
bool door_access_system(bool keycard, bool security_code, bool emergency_override);
void test_security_system(void);

int main(void) {
    /* Part 1: Basic AND gate demonstration */
    printf("Part 1: Basic AND Gate\n");
    printf("----------------------\n");
    printf("A B | Output\n");
    printf("----------\n");
    printf("0 0 | %d\n", and_gate(false, false));
    printf("0 1 | %d\n", and_gate(false, true));
    printf("1 0 | %d\n", and_gate(true, false));
    printf("1 1 | %d\n", and_gate(true, true));

    /* Part 2: Truth table verification */
    verify_and_gate();

    /* Part 3: Multi-gate circuit tests */
    test_circuit();

    /* Part 4: Practical security system tests */
    test_security_system();

    return 0;
}

/* AND gate implementation
 * Returns true only if both inputs are true.
 * Uses logical && (Boolean) rather than bitwise &.
 */
bool and_gate(bool input_a, bool input_b) {
    return input_a && input_b;
}

/* OR gate implementation
 * Returns true if at least one input is true.
 */
bool or_gate(bool input_a, bool input_b) {
    return input_a || input_b;
}

/* NOT gate implementation
 * Returns logical negation of input.
 */
bool not_gate(bool input) {
    return !input;
}

/* Verify AND gate against expected truth table */
void verify_and_gate(void) {
    bool test_cases[4][3] = {
        {false, false, false},
        {false, true,  false},
        {true,  false, false},
        {true,  true,  true}
    };

    int passed = 0;
    const int total = 4;

    printf("\nPart 2: Truth Table Verification (AND)\n");
    printf("-------------------------------------\n");

    for (int i = 0; i < total; i++) {
        bool a = test_cases[i][0];
        bool b = test_cases[i][1];
        bool expected = test_cases[i][2];
        bool result = and_gate(a, b);

        printf("Test %d: AND(%d, %d) = %d", i + 1, a, b, result);
        if (result == expected) {
            printf("  PASS\n");
            passed++;
        } else {
            printf("  FAIL (expected %d)\n", expected);
        }
    }

    printf("Result: %d/%d tests passed\n", passed, total);
}

/* Circuit simulation: (A AND B) OR (C AND D)
 * Uses modular gates to compose the circuit.
 */
bool circuit_simulation(bool a, bool b, bool c, bool d) {
    bool left = and_gate(a, b);
    bool right = and_gate(c, d);
    return or_gate(left, right);
}

/* Test the multi-gate circuit across all 16 input combinations */
void test_circuit(void) {
    printf("\nPart 3: Circuit Simulation: (A AND B) OR (C AND D)\n");
    printf("-------------------------------------------------\n");
    printf("A B C D | Output | Expected\n");
    printf("----------------------------\n");

    int passed = 0;
    const int total = 16;
    int idx = 0;

    for (int a = 0; a <= 1; a++) {
        for (int b = 0; b <= 1; b++) {
            for (int c = 0; c <= 1; c++) {
                for (int d = 0; d <= 1; d++) {
                    bool out = circuit_simulation(a, b, c, d);
                    bool expected = (a && b) || (c && d);
                    printf("%d %d %d %d |   %d    |    %d\n", a, b, c, d, out, expected);
                    if (out == expected) passed++;
                    idx++;
                }
            }
        }
    }

    printf("Circuit test result: %d/%d passed\n", passed, total);
}

/* Door access control: (keycard AND security_code) AND (NOT emergency_override) */
bool door_access_system(bool keycard, bool security_code, bool emergency_override) {
    bool creds_ok = and_gate(keycard, security_code);
    bool not_override = not_gate(emergency_override);
    return and_gate(creds_ok, not_override);
}

/* Test scenarios for the security system */
void test_security_system(void) {
    printf("\nPart 4: Security System Simulation\n");
    printf("---------------------------------\n");
    struct {
        bool keycard;
        bool code;
        bool override;
    } scenarios[] = {
        {true,  true,  false}, /* Normal access: GRANTED */
        {true,  false, false}, /* Wrong code: DENIED */
        {false, false, true }, /* Override active: DENIED */
        {true,  true,  true }, /* Override active despite credentials: DENIED */
        {false, true,  false}  /* No keycard: DENIED */
    };

    const int total = sizeof(scenarios) / sizeof(scenarios[0]);
    for (int i = 0; i < total; i++) {
        bool acc = door_access_system(
            scenarios[i].keycard,
            scenarios[i].code,
            scenarios[i].override
        );
        printf("Scenario %d: keycard=%d code=%d override=%d -> Access %s\n",
               i + 1,
               scenarios[i].keycard,
               scenarios[i].code,
               scenarios[i].override,
               acc ? "GRANTED" : "DENIED");
    }
}
```

Program Output (sample run)

```
Part 1: Basic AND Gate
----------------------
A B | Output
----------
0 0 | 0
0 1 | 0
1 0 | 0
1 1 | 1

Part 2: Truth Table Verification (AND)
-------------------------------------
Test 1: AND(0, 0) = 0  PASS
Test 2: AND(0, 1) = 0  PASS
Test 3: AND(1, 0) = 0  PASS
Test 4: AND(1, 1) = 1  PASS
Result: 4/4 tests passed

Part 3: Circuit Simulation: (A AND B) OR (C AND D)
-------------------------------------------------
A B C D | Output | Expected
----------------------------
0 0 0 0 |   0    |    0
0 0 0 1 |   0    |    0
...
1 1 1 1 |   1    |    1
Circuit test result: 16/16 passed

Part 4: Security System Simulation
---------------------------------
Scenario 1: keycard=1 code=1 override=0 -> Access GRANTED
Scenario 2: keycard=1 code=0 override=0 -> Access DENIED
Scenario 3: keycard=0 code=0 override=1 -> Access DENIED
Scenario 4: keycard=1 code=1 override=1 -> Access DENIED
Scenario 5: keycard=0 code=1 override=0 -> Access DENIED
```

Explanation and Analysis

Part 1: AND Gate Implementation
- Implementation uses stdbool.h and logical && to model Boolean AND.
- Function is a single-responsibility helper returning true only when both inputs are true.
- Clear comments document rationale and usage.

Part 2: Truth Table Verification
- Tests all four input combinations with expected outputs.
- Automated pass/fail reporting and a summary count ensure correctness.

Part 3: Multi-Gate Circuit
- The circuit is implemented compositionally: (A AND B) OR (C AND D) using and_gate and or_gate.
- Tests run through all 16 input combinations for comprehensive coverage.

Part 4: Practical Application
- Door access uses composition: creds_ok = AND(keycard, code); final = AND(creds_ok, NOT(override)).
- Tests include normal access, wrong code, override active, and other realistic cases.

Learning Insights
- Use Boolean operators (&&, ||, !) for logical gate simulation, not bitwise operators.
- Modular functions map well to hardware gate primitives and make circuits composable.
- Exhaustive testing (2^n combinations) is simple and effective for small circuits.
- Writing software models clarifies behavior before moving to HDL or hardware.

Evaluation Notes (brief)
- Code correctness verified with automated tests.
- Clean, modular design and comments support readability and maintenance.
- Testing covers truth tables, multi-gate composition, and practical scenarios.

Tips & Extensions (optional)
- Implement an N-input AND using variadic functions or loops.
- Add timing simulation by inserting delays to model propagation.
- Create a small ASCII visualizer for circuits.
- Compare direct Boolean expressions to gate composition for clarity and maintainability.
