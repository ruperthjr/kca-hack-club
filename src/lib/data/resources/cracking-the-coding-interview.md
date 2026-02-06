---
title: "Cracking the Coding Interview"
category: "books"
subcategory: "Interview Preparation"
description: "189 Programming Questions and Solutions - Your ultimate guide to landing a software engineering job at a top tech company."
units:
    - "Data Structures"
    - "Algorithms"
    - "Behavioral Questions"
    - "System Design"
recommendedFor:
    - "Job Seekers"
    - "Students"
    - "Interviewers"
    - "Software Engineers"
links:
    - name: "Access on Google Drive"
      url: "https://drive.google.com/file/d/1DAJBIlvLQ6KEKcFJrgi_DRFbPcjLOpT1/view?usp=sharing"
lastUpdated: "2026-03-15"
---

# Cracking the Coding Interview: 189 Programming Questions and Solutions

**Author:** Gayle Laakmann McDowell
**Publisher:** CareerCup
**Pages:** 708 (6th Edition)

## Overview

"Cracking the Coding Interview" (CTCI) is the essential guide for software engineers preparing for technical interviews at top tech companies. It breaks down the interview process, provides strategies for solving algorithmic problems, and covers key data structures and algorithms with 189 real-world interview questions and detailed solutions.

## Core Philosophy

> "The key to success in the technical interview is practice. It's not about memorizing solutions, but about developing a framework for problem-solving that you can apply to any question."

## What You'll Learn

### The Interview Process
- **Behind the Scenes:** Understand what companies like Google, Amazon, Microsoft, and Facebook are looking for.
- **Behavioral Questions:** Learn how to prepare for and answer questions about your experience, teamwork, and leadership using the STAR method.
- **Big O Notation:** Master time and space complexity analysis, a critical skill for every coding problem.

### Technical Questions
- **Data Structures:** In-depth review of Arrays, Linked Lists, Stacks, Queues, Trees, Graphs, and Hash Tables.
- **Core Algorithms:** Sorting, searching, recursion, dynamic programming, and more.
- **Problem-Solving Frameworks:** Develop a systematic approach to deconstruct and solve any coding challenge.

## Book Structure

### Part I: The Interview Process
- **Chapter 1: The Interview Process:** What to expect from application to offer.
- **Chapter 2: Behind the Scenes:** How candidates are evaluated.
- **Chapter 3: The "Big Four" and Others:** Insights into specific company processes.
- **Chapter 4: Before the Interview:** How to prepare your resume and projects.
- **Chapter 5: Behavioral Questions:** Crafting compelling stories about your experience.
- **Chapter 6: Technical Questions:** Strategies for handling coding problems.
- **Chapter 7: The Offer and Beyond:** Negotiation and decision-making.

### Part II: Technical Questions
- **Chapter 8: Big O:** A deep dive into complexity analysis.
- **Chapter 9: The Interview Questions:** The core of the book, organized by topic.

### Part III: Interview Questions by Topic
- **Chapter 10: Data Structures**
    - Arrays and Strings
    - Linked Lists
    - Stacks and Queues
    - Trees and Graphs
- **Chapter 11: Concepts and Algorithms**
    - Bit Manipulation
    - Math and Logic Puzzles
    - Object-Oriented Design
    - Recursion and Dynamic Programming
    - System Design and Scalability
    - Sorting and Searching
    - Testing
- **Chapter 12: Knowledge Based**
    - C and C++
    - Java
    - Databases
    - Threads and Locks
- **Chapter 13: Additional Review Problems**
    - Moderate and Hard problems for extra practice.

### Part IV: Solutions
- Detailed, step-by-step solutions for all 189 problems, often including multiple approaches and complexity analysis.

## Key Problem-Solving Approach: BUD

A framework for when you get stuck on a problem:
- **B**ottlenecks: Identify the most demanding part of the problem. Is it time? Space?
- **U**nnecessary Work: Look for calculations or steps you can optimize or eliminate.
- **D**uplicated Work: Find repeated computations that can be cached or computed once.

## Example Problem & Solution Sketch

### Problem: Check Permutation
> Given two strings, write a method to decide if one is a permutation of the other.

#### Approach 1: Sorting
1.  Check if the strings have different lengths. If so, they can't be permutations. Return `false`.
2.  Convert both strings to character arrays.
3.  Sort both arrays.
4.  Compare the sorted arrays. If they are identical, the strings are permutations.

```java
// Pseudocode for Sorting Approach
boolean isPermutation(String s1, String s2) {
    if (s1.length() != s2.length()) return false;
    return sort(s1).equals(sort(s2));
}
```
- **Complexity:** O(N log N) time due to sorting, O(N) space for character arrays.

#### Approach 2: Character Count
1.  Check for different lengths. Return `false` if they differ.
2.  Create an integer array (size 128 for ASCII) to act as a frequency map.
3.  Iterate through the first string, incrementing the count for each character in the map.
4.  Iterate through the second string, decrementing the count for each character.
5.  If any count drops below zero, they don't match. Return `false`.
6.  If the loop completes, the strings are permutations.

```java
// Pseudocode for Character Count Approach
boolean isPermutation(String s1, String s2) {
    if (s1.length() != s2.length()) return false;
    int[] charCounts = new int[128]; // Assuming ASCII
    for (char c : s1.toCharArray()) {
        charCounts[c]++;
    }
    for (char c : s2.toCharArray()) {
        charCounts[c]--;
        if (charCounts[c] < 0) {
            return false;
        }
    }
    return true;
}
```
- **Complexity:** O(N) time, O(1) space (since the character set is fixed).

## Behavioral Question Strategy: STAR Method

Use this method to structure your answers to behavioral questions like "Tell me about a time you had a conflict with a coworker."

- **S (Situation):** Briefly describe the context. (e.g., "We were working on a critical feature with a tight deadline.")
- **T (Task):** Explain your role and responsibility. (e.g., "My task was to implement the backend API while my coworker handled the frontend.")
- **A (Action):** Detail the steps you took to address the situation. (e.g., "We had a disagreement on the API contract. I scheduled a meeting, presented data to support my design, but also listened to their concerns about frontend complexity.")
- **R (Result):** Share the outcome. (e.g., "We compromised on a solution that was efficient for the backend and easy to consume for the frontend. We delivered the feature on time and received positive feedback.")

## Core Data Structures & Algorithms Summary

### Data Structures
- **Arrays/Strings:** ✅ Contiguous memory, fast access. ❌ Fixed size, slow inserts/deletes.
- **Linked Lists:** ✅ Dynamic size, fast inserts/deletes. ❌ Slow access (requires traversal).
- **Stacks/Queues:** ✅ LIFO/FIFO logic, essential for many algorithms. ❌ Limited operations.
- **Hash Tables:** ✅ Very fast average-case lookups, inserts, deletes (O(1)). ❌ Worst-case O(N), unordered.
- **Trees:** ✅ Efficient searching (O(log N) for balanced BSTs), sorted data. ❌ Can become unbalanced.
- **Graphs:** ✅ Model complex relationships. ❌ Traversal can be complex (BFS, DFS).

### Algorithms
- **Breadth-First Search (BFS):** Finds the shortest path in unweighted graphs. Uses a queue.
- **Depth-First Search (DFS):** Explores as far as possible along each branch. Uses a stack or recursion.
- **Binary Search:** Efficiently finds an element in a *sorted* array. O(log N).
- **Merge Sort / Quick Sort:** Efficient sorting algorithms. O(N log N).
- **Dynamic Programming:** Breaks problems into overlapping subproblems and caches results (memoization).

## How to Use This Book for Maximum Impact

1.  **Read the Intro Chapters:** Don't skip the sections on process, behavioral questions, and Big O.
2.  **Attempt Problems First:** Before looking at the solution, spend 20-45 minutes trying to solve a problem on your own on a whiteboard or paper.
3.  **Analyze the Solutions:** Read the solution carefully, even if you solved the problem. CTCI often presents multiple optimal solutions and analyzes trade-offs.
4.  **Code the Solution:** Type out the code yourself without looking. This reinforces the patterns.
5.  **Spaced Repetition:** Revisit problems you struggled with a few days or weeks later to ensure you've internalized the concepts.

## Impact on Your Career

- **Pass the Interview:** The most direct impact is getting you through one of the toughest hurdles in tech.
- **Become a Better Problem-Solver:** The skills learned are directly applicable to your day-to-day work.
- **Stronger CS Fundamentals:** Provides a much-needed refresher on computer science principles.
- **Confidence:** Walking into an interview well-prepared dramatically reduces anxiety and improves performance.

---

**Remember:** Preparation is the key. The best candidates aren't necessarily the smartest, but the ones who prepared the most effectively.