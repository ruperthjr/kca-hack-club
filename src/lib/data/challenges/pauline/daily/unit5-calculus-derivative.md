---
title: "Calculus Derivative - Polynomial Function Analysis"
description: "Compute the derivative of f(x) = x² + 3x + 1 using first principles and the power rule; verify and interpret results."
difficulty: "beginner"
unit: "Unit 5: Computing Mathematics"
day: 2
technologies:
    - "Calculus"
    - "Derivatives"
    - "Limits"
    - "Polynomial Functions"
learningOutcomes:
    - "Apply the limit definition of the derivative"
    - "Use the power rule for differentiation"
    - "Interpret derivative as rate of change and slope"
    - "Verify results numerically and symbolically"
estimatedTime: "45-60 minutes"
requirements:
    - "Algebra proficiency"
    - "Understanding of limits"
    - "Familiarity with function notation"
deliverables:
    - "Derivative via limit definition"
    - "Derivative via power rule"
    - "Complete algebraic steps"
    - "Numerical and symbolic verification"
    - "Interpretation of rate of change"
resources:
  - name: "Stewart: Calculus Early Transcendentals, 9th Ed. - Chapter 3.1"
    url: "https://www.cengage.com/c/calculus-early-transcendentals-9e-stewart/9781337613927/"
  - name: "Khan Academy: Derivatives Introduction"
    url: "https://www.khanacademy.org/math/differential-calculus/dc-diff-intro"
  - name: "Paul's Online Math Notes: Derivatives"
    url: "https://tutorial.math.lamar.edu/classes/calci/DerivativeIntro.aspx"
  - name: "MIT OpenCourseWare: Single Variable Calculus"
    url: "https://ocw.mit.edu/courses/18-01-single-variable-calculus-fall-2006/"
  - name: "Wolfram Alpha Derivative Calculator"
    url: "https://www.wolframalpha.com/calculators/derivative-calculator"
dateAdded: "2026-02-10"
unlockDate: "2026-02-10"
---

# Calculus Derivative Challenge: f(x) = x² + 3x + 1

## Overview
Compute f'(x) and show work using both the limit (first principles) and the power rule. Verify both methods match numerically and symbolically, and interpret the derivative as slope and rate of change.

## Objective
Find f'(x) for f(x) = x² + 3x + 1, verify with sample points, and interpret results (tangent line, critical point, and applied meanings).

---

## Part 1 — Function Analysis
- Type: quadratic polynomial (degree 2), continuous and differentiable ∀ x
- Vertex: x = -b/(2a) = -3/(2·1) = -1.5
- y-intercept: f(0) = 1
- Parabola opens upward (a = 1 > 0)

---

## Part 2 - Derivative via Limit Definition
`f'(x) = lim_{h → 0} (f(x + h) - f(x)) / h`

1. f(x+h) = (x+h)^2 + 3(x+h) + 1 = x^2 + 2xh + h^2 + 3x + 3h + 1  
2. f(x+h) - f(x) = 2xh + h^2 + 3h = h(2x + h + 3)  
3. Difference quotient = (2x + h + 3) for h != 0  
4. Take limit h → 0: f'(x) = 2x + 3

Therefore f'(x) = 2x + 3.

---

## Part 3 — Derivative via Power Rule
d/dx [x²] = 2x  
d/dx [3x] = 3  
d/dx [1] = 0  
Combine: f'(x) = 2x + 3

Matches limit result.

---

## Part 4 — Verification (Numerical & Symbolic)
Numerical checks:
- x = 0: f'(0) = 3. Approximation with h = 0.001 gives ≈ 3.001 → close.
- x = 2: f'(2) = 7. Approximation with h = 0.001 gives ≈ 7.001 → close.

Symbolic (e.g., SymPy) yields f'(x) = 2*x + 3.

---

## Part 5 — Geometric Interpretation
- Tangent at x0: y − f(x0) = f'(x0)(x − x0)  
    Example x0 = 1: f(1) = 5, f'(1) = 5 → tangent: y − 5 = 5(x − 1) ⇒ y = 5x
- Slope behavior:
    - x = −2 → f' = −1 (locally decreasing)
    - x = 0 → f' = 3 (increasing)
- Critical point where f'(x) = 0: 2x + 3 = 0 ⇒ x = −1.5 (vertex at (−1.5, −1.25))
- Concavity: f''(x) = 2 > 0 ⇒ concave up everywhere

---

## Part 6 — Rate of Change (Applications)
- If x = time, f'(x) is velocity: v(x) = 2x + 3 (units/s)  
- Acceleration: f''(x) = 2 (constant)  
- If x = production units, f' = marginal cost: at x = 10 → 23 dollars/unit

---

## Part 7 — Computational Examples

Python — numerical derivative (limit approximation)
```python
def derivative_limit(f, x, h=1e-5):
        return (f(x + h) - f(x)) / h

def f(x): return x**2 + 3*x + 1

for h in [1e-1, 1e-2, 1e-3, 1e-4, 1e-5]:
        print(h, derivative_limit(f, 2, h))
# Converges to 7
```

SymPy — symbolic
```python
from sympy import symbols, diff
x = symbols('x')
f = x**2 + 3*x + 1
diff(f, x)  # 2*x + 3
```

---

## Part 8 — Higher-Order Derivatives
- f'(x) = 2x + 3  
- f''(x) = 2  
- f'''(x) = 0 and all higher derivatives are 0

---

## Part 9 — Related Examples
- x² → 2x  
- x² + 5x → 2x + 5  
- 2x² + 3x + 1 → 4x + 3  
- Exponential/log/trig contrasts:
    - e^x → e^x, ln x → 1/x, sin x → cos x

---

## Part 10 — Assessment Criteria (Brief)
- Accuracy of limit and power rule work (40%)
- Verification with ≥2 numerical checks (30%)
- Interpretation: geometric and applied meaning (20%)
- Clarity and completeness of steps (10%)

---

## Part 11 — Common Errors
- Mis-expanding (x+h)² (must include 2xh)
- Cancelling h incorrectly (forgetting to factor h)
- Failing to take the h → 0 limit
- Mis-differentiating constants or coefficients

---

## Part 12 — Extension Challenges
1. Use limit as z→x form and show equivalence.  
2. Use derivative to find minimum and compare with vertex.  
3. Related rates: if dx/dt = 2, find df/dt at x = 3.  
4. Error analysis for numerical derivative for various h.  
5. Implement a function that returns derivative of ax² + bx + c.

---

## Submission Checklist
- Complete limit derivation and algebra shown  
- Power rule application demonstrated  
- Methods agree and numeric checks included  
- Tangent line and rate-of-change interpretation provided  
- No algebraic errors; clear notation

This exercise builds core skills for optimization, simulation, and gradient-based methods used in computing and data science.
