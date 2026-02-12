---
title: "Descriptive Statistics for API Response Times"
description: "Compute mean, median, and mode from real-world API response time data, handling missing or invalid entries."
difficulty: "Beginner"
unit: "PROBABILITY AND STATISTICS I"
day: 5
week: 1
month: 1
technologies: ["Python", "Statistics", "Pandas"]
learningOutcomes:
    - "Compute mean, median, and mode of a numeric dataset"
    - "Handle missing or invalid data gracefully"
    - "Interpret summary statistics in the context of performance monitoring"
estimatedTime: "1 hour"
requirements:
    - "Python 3.x"
    - "Basic knowledge of descriptive statistics"
    - "(Optional) Pandas library"
deliverables:
    - "Python script or Jupyter notebook that reads the data and outputs the statistics"
resources:
  - name: "Descriptive Statistics – Stat Trek"
    url: "https://stattrek.com/statistics/descriptive-statistics"
  - name: "Pandas Descriptive Statistics – Official Guide"
    url: "https://pandas.pydata.org/docs/user_guide/basics.html#descriptive-statistics"
  - name: "numpy.mean – NumPy Docs"
    url: "https://numpy.org/doc/stable/reference/generated/numpy.mean.html"
  - name: "Real Python – Python Statistics"
    url: "https://realpython.com/python-statistics/"
  - name: "Mean, Median, Mode – Khan Academy"
    url: "https://www.khanacademy.org/math/statistics-probability/summarizing-quantitative-data/mean-median-basics/a/mean-median-and-mode-review"
completed: false
completedDate: ""
watermarkStyle: "diagonal"
dateAdded: "2026-02-13"
unlockDate: "2026-02-13"
---

# Descriptive Statistics for API Response Times

## Overview

API response times are a key performance indicator in system monitoring. By calculating summary statistics such as mean, median, and mode, engineers can quickly assess typical behavior and spot anomalies. This challenge provides hands-on experience with data cleaning and statistical computation using real-world data.

## Objective

Given a CSV file of API response times, load and clean the data, then compute and report the mean, median, and mode. Handle missing or invalid entries and present the results in a clear, formatted summary.

## Prerequisites

- Python 3.x installed
- Basic file I/O knowledge
- Understanding of descriptive statistics
- (Optional) Familiarity with Pandas

## Instructions

### Part 1: Data Preparation

- Download the sample dataset: `api_response_times.csv` (columns: `timestamp`, `response_time_ms`).
- Write a function `load_data(filename)` that:
    - Reads the CSV file.
    - Converts the `response_time_ms` column to numeric, coercing errors to NaN.
    - Drops rows where `response_time_ms` is NaN.
    - Returns a list or NumPy array of clean response times.

### Part 2: Compute Statistics

- Implement custom functions (without high-level libraries except NumPy):
    - `mean(data)`
    - `median(data)`
    - `mode(data)` (return all modes if multiple exist)
- Optionally, use `pandas.DataFrame.describe()` and `scipy.stats.mode()` for comparison, but provide your own implementations.

### Part 3: Report

- Print a summary report:
    ```
    Total valid samples:  X
    Mean response time:   Y ms
    Median response time: Z ms
    Mode(s):             [W1, W2, ...] ms
    ```
- Add a brief interpretation: Is the distribution symmetric? What might cause the mode to differ from the mean?

## Deliverables

1. `api_stats.py` script containing data loading, custom statistics functions, and the report.
2. (Optional) Jupyter notebook with markdown explanations.
3. Brief interpretation of the results.

## Evaluation Criteria

| Criteria            | Weight | Description                                      |
|---------------------|--------|--------------------------------------------------|
| Data Cleaning       | 30%    | Handles missing/invalid data without crashing    |
| Statistical Accuracy| 40%    | Correct computation of mean, median, and mode    |
| Code Clarity        | 20%    | Well-named functions and clear docstrings        |
| Interpretation      | 10%    | Reasonable summary and interpretation provided   |

## Tips & Common Mistakes

- Use `pandas.to_numeric(..., errors='coerce')` for robust conversion.
- For even-sized datasets, median is the average of the two middle values.
- If all values occur with the same frequency, all are modes.
- Handle empty datasets gracefully after cleaning.

## Bonus Challenges (Optional)

1. Compute variance and standard deviation.
2. Plot a histogram of response times using matplotlib.
3. Identify outliers using the interquartile range (IQR) method.

## Submission

Save your script as `unit5/day5/api_stats.py` (or `.ipynb`) and submit the commit URL.
