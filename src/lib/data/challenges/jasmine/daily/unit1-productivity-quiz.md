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
dateAdded: "2026-02-10"
unlockDate: "2026-02-10"
---

# Process Lifecycle State Identification Challenge

## Overview

Master the five states in a process lifecycle: New, Ready, Running, Waiting, and Terminated. Understanding these states is fundamental for process management in operating systems.

## Objective

Identify all five process lifecycle states and create a diagram showing transitions between them.

## Instructions

### Part 1: State Descriptions

Write 1-2 sentences for each state:

- **New:** The process is being created; OS allocates resources and sets up the PCB. Entry: process creation. Exit: admitted to Ready.
- **Ready:** Loaded in memory, waiting for CPU. Entry: admitted from New or Waiting. Exit: dispatched to Running.
- **Running:** Process is executing on CPU. Entry: dispatched from Ready. Exit: time quantum expires (to Ready), I/O request (to Waiting), or completion (to Terminated).
- **Waiting:** Process is blocked, waiting for an event (e.g., I/O). Entry: Running process requests I/O. Exit: event completes, returns to Ready.
- **Terminated:** Process has finished execution; OS cleans up resources. Entry: process completes. Exit: process removed from system.

### Part 2: State Transition Diagram

Create a diagram showing:

- New → Ready (admitted)
- Ready → Running (dispatch)
- Running → Ready (time quantum expired)
- Running → Waiting (I/O request)
- Waiting → Ready (event occurs)
- Running → Terminated (completion)

Label arrows with transition triggers.

### Part 3: Waiting State Examples

Provide three examples:

- **Situation:** Process requests disk read  
    **Reason:** Must wait for disk I/O  
    **Transition:** Running → Waiting

- **Situation:** Process waits for network response  
    **Reason:** Cannot proceed until data arrives  
    **Transition:** Running → Waiting

- **Situation:** Process requests printer output  
    **Reason:** Waits for printer to become available  
    **Transition:** Running → Waiting

## Submission Format

Submit a PDF or image containing:

- State transition diagram
- Five state descriptions
- Three Waiting state examples

**Filename:** `process-states-[yourname].pdf` (or `.png`/`.jpg`)
