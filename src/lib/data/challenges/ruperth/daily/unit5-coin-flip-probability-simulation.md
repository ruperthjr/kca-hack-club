---
title: "Coin Flip Simulation and Distribution Plot"
description: "Simulate coin flips using Python, analyze outcomes, and visualize the empirical distribution."
difficulty: "Beginner"
unit: "PROBABILITY AND STATISTICS I"
day: 5
week: 1
month: 1
technologies: ["Python", "Matplotlib", "Random"]
learningOutcomes:
    - "Use the random module to simulate stochastic processes"
    - "Count outcomes and compute relative frequencies"
    - "Create bar charts to visualize empirical distributions"
estimatedTime: "1 hour"
requirements:
    - "Python 3.x"
    - "Matplotlib installed"
deliverables:
    - "Python script that simulates coin flips and displays a bar plot"
resources:
  - name: "random — Generate pseudo‑random numbers – Python Docs"
    url: "https://docs.python.org/3/library/random.html"
  - name: "Matplotlib Bar Chart Tutorial"
    url: "https://matplotlib.org/stable/gallery/statistics/barchart_demo.html"
  - name: "Law of Large Numbers – Wikipedia"
    url: "https://en.wikipedia.org/wiki/Law_of_large_numbers"
  - name: "Coin Flip Simulation – Interactive"
    url: "https://www.random.org/coins/"
  - name: "NumPy Random Sampling"
    url: "https://numpy.org/doc/stable/reference/random/index.html"
completed: false
completedDate: ""
watermarkStyle: "diagonal"
dateAdded: "2026-02-13"
unlockDate: "2026-02-13"
---

# Coin Flip Simulation and Distribution Plot

## Overview

Simulating coin flips is a classic introduction to probability and randomness. By running simulations and comparing empirical results to theoretical expectations, you gain intuition about the law of large numbers and random sampling. This challenge also builds data visualization skills essential for data-oriented programming.

## Objective

Write a Python script to simulate 100, 1,000, 10,000, and 100,000 fair coin flips, count heads and tails, and visualize the results with bar charts. Observe how relative frequencies approach 0.5 as the number of flips increases.

## Prerequisites

- Basic Python (loops, lists, functions)
- Python 3.x installed
- Matplotlib installed

## Instructions

### Part 1: Simulate Coin Flips

- Import the `random` module (or `numpy.random`).
- Simulate 100 coin flips, representing heads as 1 and tails as 0.
- Count the number of heads and tails.
- Print the counts and relative frequencies for heads and tails.

### Part 2: Visualize the Distribution

- Create a function `plot_flip_distribution(counts, title)` that:
    - Accepts a dictionary or list with heads and tails counts.
    - Generates a bar chart labeled "Heads" and "Tails".
    - Adds a title, axis labels, and value labels on the bars.
- Call this function for the 100-flip simulation.

### Part 3: Run Multiple Simulations

- Repeat the simulation for n = 100, 1,000, 10,000, and 100,000 flips.
- For each n:
    - Print counts and relative frequencies.
    - Display a bar chart (separate figures or subplots).
    - Include the expected count (n/2) as a horizontal line on each chart.

## Deliverables

1. `coin_flip_sim.py` script performing all simulations and generating plots.
2. Bar chart image file (e.g., `coin_flips.png`) or interactive display.
3. Clear code with comments and function usage.

## Evaluation Criteria

| Criteria             | Weight | Description                                         |
|----------------------|--------|-----------------------------------------------------|
| Correct Simulation   | 30%    | Random flips are properly generated and counted.    |
| Visualization        | 40%    | Bar charts are correctly rendered and labeled.      |
| Multiple Simulations | 20%    | Script runs for all sample sizes without changes.   |
| Code Readability     | 10%    | Clear variable names, comments, and functions.      |

## Tips & Common Mistakes

- Use `random.randint(0, 1)` or `random.choice(['H', 'T'])`.
- Set `random.seed(42)` for reproducible results.
- Use `plt.show()` to display or `plt.savefig()` to save plots.
- The law of large numbers refers to convergence of relative frequency, not absolute difference.

## Bonus Challenges (Optional)

1. Simulate a biased coin (e.g., 60% heads) and compare to expected distribution.
2. Plot convergence of relative frequency as flips increase (line plot with error bars).
3. Use `numpy.random.binomial` for direct count generation and compare performance.

## Submission

Commit `coin_flip_sim.py` and the generated plot file to `unit5/day5/`. Provide the repository URL for review.
