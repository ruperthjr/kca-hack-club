---
title: "Process Lifecycle State Identification"
description: "Identify and describe the five states in a process lifecycle: New, Ready, Running, Waiting, Terminated"
difficulty: "beginner"
unit: "Unit 4: Operating Systems"
day: 2
technologies:
    - "Operating Systems"
    - "Process Management"
    - "System Calls"
learningOutcomes:
    - "Identify all five process lifecycle states"
    - "Understand transitions between process states"
    - "Recognize system events that trigger state changes"
    - "Diagram process state transitions"
estimatedTime: "25-35 minutes"
requirements:
    - "Textbook: Operating System Concepts, 10th Edition"
    - "Diagramming tool (draw.io, Lucidchart, or paper/pencil)"
    - "Access to UNIX/Linux command line (optional)"
deliverables:
    - "Diagram showing all five process states with arrows indicating transitions"
    - "Brief description (1-2 sentences) of each state"
    - "Three real-world examples of when a process might enter the Waiting state"
resources:
    - name: "Process States in Operating Systems"
      url: "https://www.geeksforgeeks.org/states-of-a-process-in-operating-systems/"
    - name: "Operating Systems: Three Easy Pieces - Process API"
      url: "https://pages.cs.wisc.edu/~remzi/OSTEP/cpu-api.pdf"
    - name: "Linux Process States"
      url: "https://www.baeldung.com/linux/process-states"
    - name: "Process Management in OS"
      url: "https://www.javatpoint.com/process-management-in-os"
    - name: "Process State Transition Diagram"
      url: "https://www.tutorialspoint.com/process-states-in-operating-system"
dateAdded: "2026-02-11"
unlockDate: "2026-02-11"
---

# Process Lifecycle State Identification Challenge

## Overview

In this operating systems challenge, you'll master one of the fundamental concepts in process management: the five states in a process lifecycle. Understanding these states is crucial for grasping how operating systems schedule and manage multiple processes efficiently.

## Objective

Identify all five process lifecycle states (New, Ready, Running, Waiting, Terminated) and create a diagram showing how processes transition between these states based on system events.

## Instructions

### 1. Research Process States

Use your textbook and online resources to understand each state:

- **New**  
    The process is being created. The operating system allocates memory and sets up the process control block (PCB). This is the initialization phase before the process can be scheduled.

- **Ready**  
    The process is loaded into main memory and has all resources except CPU time. It waits in the ready queue for the CPU scheduler.

- **Running**  
    The process instructions are being executed. The CPU is actively processing this process. Only one process per CPU core can be in this state at a time.

- **Waiting**  
    The process cannot proceed until some event occurs (also called the "blocked" state). Examples: waiting for I/O completion or user input.

- **Terminated**  
    The process has finished execution. The operating system cleans up resources and deletes the process control block.

### 2. Create State Transition Diagram

Create a diagram showing transitions between states. Required transitions:

- New → Ready (Process admitted)
- Ready → Running (CPU scheduler dispatch)
- Running → Ready (Time quantum expired)
- Running → Waiting (I/O request, wait for event)
- Waiting → Ready (I/O completion, event occurs)
- Running → Terminated (Process completes)

Use any diagramming tool (draw.io, Lucidchart, or paper/pencil).

**Diagram requirements:**

- Clear boxes for each state
- Arrows showing all six transitions
- Brief label on each arrow (e.g., "admitted", "I/O request")
- Professional appearance with consistent styling

### 3. Write State Descriptions

For each state, write 1-2 sentences covering:

- What characterizes this state
- What triggers entry into this state
- What triggers exit from this state

### 4. Identify Waiting State Examples

Provide three specific examples of when a process would enter the Waiting state. Example format:

- **Situation:** Process requests keyboard input from user  
    **Reason:** Process cannot continue until user types something  
    **Transition:** Running → Waiting

- [Your second example]
- [Your third example]

## Evaluation Criteria

- **Completeness (40%)**: All five states and six transitions included
- **Accuracy (30%)**: Correct understanding of state definitions and transitions
- **Examples (20%)**: Realistic, specific Waiting state examples
- **Presentation (10%)**: Clean, readable diagram and descriptions

## Common Mistakes to Avoid

- Confusing "Ready" with "Waiting" (Ready = needs CPU, Waiting = needs I/O/event)
- Missing the "New" state (creation phase is important)
- Forgetting that "Terminated" is a state
- Not showing transitions back from Waiting to Ready
- Creating overly complex diagrams (keep it to the five basic states)

## Real-World Application

Understanding process states helps you:

- Write more efficient multi-threaded programs
- Debug performance issues in applications
- Understand system monitoring tools (like top or Task Manager)
- Design systems that effectively manage resources
- Prepare for operating system interviews and certifications

## Submission Format

Submit a single PDF or image containing:

- State transition diagram
- Five state descriptions
- Three Waiting state examples

**Filename:** `process-states-[yourname].pdf` (or `.png`/`.jpg`)
