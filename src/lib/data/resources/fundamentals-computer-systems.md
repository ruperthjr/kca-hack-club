---
title: "Fundamentals of Computer Systems - Complete Resource Guide"
category: "units"
subcategory: "Systems"
description: "Master the foundational concepts of computer systems including hardware, software, data representation, and system architecture"
units:
  - "Fundamentals of Computer Systems"
recommendedFor:
  - "Maryphin"
  - "Pauline"
  - "Daniel"
links:
  - name: "Study Group Discord"
    url: "https://discord.com/channels/1464698304406225106/1464698305823903867"
  - name: "Course Materials Drive"
    url: "https://drive.google.com/fundamentals-cs"
lastUpdated: "2026-01-27"
---

# Fundamentals of Computer Systems - Complete Resource Guide

## Unit Overview

**Course Focus**: Understanding how computers work from the ground up  
**Credit Hours**: 3 credits  
**Prerequisites**: None (intro course)  
**Difficulty**: Beginner

**What You'll Learn**:
- Computer hardware components and architecture
- Number systems and data representation
- Boolean logic and digital circuits
- Computer software hierarchy
- Operating system basics
- Computer networks fundamentals
- Data storage and memory
- Input/output systems

**Why This Matters**: This is your foundation. Everything in computer science builds on understanding how computers actually work at the system level.

---

## Essential Textbooks

### Primary Textbook: Computer Systems: A Programmer's Perspective
**Authors**: Randal E. Bryant, David R. O'Hallaron  
**Edition**: 3rd Edition  
**Pages**: 1120

**Why It's Essential**:
- Industry standard for systems fundamentals
- Bridges hardware and software
- Practical programmer's viewpoint
- Excellent for understanding abstraction layers

**Key Chapters**:
- Chapter 1: Tour of Computer Systems (Week 1)
- Chapter 2: Representing and Manipulating Information (Weeks 2-3)
- Chapter 3: Machine-Level Representation (Week 4)
- Chapter 4: Processor Architecture (Weeks 5-6)
- Chapter 5: Optimizing Program Performance (Week 7)
- Chapter 6: Memory Hierarchy (Weeks 8-9)
- Chapter 7: Linking (Week 10)
- Chapter 8: Exceptional Control Flow (Week 11)
- Chapter 9: Virtual Memory (Week 12)

**Available**: Check shared Drive

---

### Alternative: Computer Organization and Design
**Authors**: David A. Patterson, John L. Hennessy  
**Edition**: RISC-V Edition  
**Style**: Hardware-focused approach

**Best For**:
- Understanding hardware architecture
- RISC-V instruction set
- Performance analysis
- Computer organization concepts

**Use When**: You need deeper hardware understanding

---

### Supplement: Code: The Hidden Language of Computer Hardware and Software
**Author**: Charles Petzold  
**Pages**: 400  
**Level**: Beginner-friendly

**Why Read This**:
- Makes complex concepts accessible
- Historical perspective
- Builds understanding from first principles
- No prerequisites needed

**Perfect For**: Daniel, Maryphin (starting from basics)

**Read**: First 2 weeks alongside main textbook

---

### Free Resource: Nand to Tetris
**Authors**: Noam Nisan, Shimon Schocken  
**Website**: https://www.nand2tetris.org/  
**Cost**: FREE

**What It Is**: Build a complete computer from logic gates up

**Includes**:
- Free textbook (The Elements of Computing Systems)
- Project materials
- Software tools
- Video lectures

**Best For**: Hands-on learners who want to build

---

## Video Lectures

### 1. MIT 6.004: Computation Structures
**Platform**: MIT OpenCourseWare  
**Link**: https://ocw.mit.edu/courses/6-004-computation-structures-spring-2017/  
**Episodes**: 25 lectures  
**Length**: 50 minutes each

**Coverage**:
- Digital circuits and logic
- Assembly language
- Computer architecture
- Memory systems
- Operating systems basics

**Why Watch**: Top-tier university content, comprehensive

**Study Strategy**: Watch 2 lectures per week

---

### 2. Crash Course Computer Science
**Platform**: YouTube  
**Link**: https://www.youtube.com/playlist?list=PL8dPuuaLjXtNlUrzyH5r6jN9ulIgZBpdo  
**Episodes**: 41 videos  
**Length**: 10-15 minutes each

**Why Excellent**:
- Perfect introduction
- Animated and engaging
- Covers all fundamentals
- Great for visual learners

**Best For**: Everyone, watch first

**Recommended Order**: Watch entire series in first 2 weeks

---

### 3. Ben Eater - Building an 8-bit Computer
**Platform**: YouTube  
**Link**: https://www.youtube.com/c/BenEater  
**Format**: Hands-on hardware build

**What Makes It Special**: Actually build a computer on breadboards

**Topics**:
- Clock circuits
- Registers and RAM
- ALU construction
- Control logic
- Assembly programming

**Time Commitment**: 20+ hours (optional, but amazing)

**Best For**: Understanding hardware at physical level

---

### 4. David Black-Schaffer - Computer Architecture
**Platform**: YouTube  
**Link**: https://www.youtube.com/c/DavidBlack-Schaffer  
**Focus**: How CPUs actually work

**Topics**:
- Instruction execution
- Pipelining
- Memory hierarchy
- Cache optimization

**Best For**: Deeper architectural understanding

---

### 5. Neso Academy - Computer Organization
**Platform**: YouTube  
**Link**: https://www.youtube.com/playlist?list=PLBlnK6fEyqRgLLlzdgiTUKULKJPYc0A4q  
**Episodes**: 150+ videos  
**Length**: 10-20 minutes each

**Coverage**: Complete course on computer organization

**Use For**: Specific topic clarification, exam prep

---

## Interactive Learning Resources

### 1. Nand2Tetris Course
**Website**: https://www.nand2tetris.org/  
**Platform**: Coursera (free audit)

**12 Projects**:
1. Boolean Logic
2. Boolean Arithmetic
3. Sequential Logic
4. Machine Language
5. Computer Architecture
6. Assembler
7. Virtual Machine I
8. Virtual Machine II
9. High-Level Language
10. Compiler I
11. Compiler II
12. Operating System

**Time**: 6-12 weeks

**Why Do This**: Build complete understanding by building

---

### 2. Digital Logic Sim
**Link**: https://sebastian.itch.io/digital-logic-sim  
**Type**: Visual circuit simulator

**Use For**:
- Designing logic circuits
- Testing circuit behavior
- Understanding gate logic

**Free**: Yes

---

### 3. CPU Simulator
**Various Options**:
- **Logisim**: Circuit design and simulation
- **MARS**: MIPS assembly simulator
- **RISC-V Simulator**: Venus online simulator

**Practice**: Assembly programming, CPU simulation

---

## 12-Week Study Plan

### Week 1: Introduction to Computer Systems
**Topics**:
- What is a computer system?
- Hardware vs software
- Abstraction layers
- System components overview
- Information as bits and bytes

**Resources**:
- Bryant Chapter 1
- Crash Course CS Episodes 1-5
- Code (Petzold) Chapters 1-5

**Practice**:
- Identify computer components
- Understand the compilation process
- Trace program execution at high level

**Lab**: Explore your own computer's specifications

---

### Week 2: Number Systems and Data Representation
**Topics**:
- Binary, octal, hexadecimal
- Number system conversions
- Signed and unsigned integers
- Two's complement representation
- Floating-point representation (IEEE 754)

**Resources**:
- Bryant Chapter 2.1-2.3
- Crash Course CS Episode 6
- Practice conversion problems (100+)

**Practice**:
- Binary arithmetic (50 problems)
- Hexadecimal conversions (50 problems)
- Two's complement operations (30 problems)
- Floating-point representation (20 problems)

**Checkpoint**: Convert between any number system instantly

**Key Concepts**:
```
Decimal to Binary: Divide by 2, collect remainders
Binary to Hexadecimal: Group by 4 bits
Two's Complement: Flip bits, add 1
```

---

### Week 3: Character Encoding and Data Types
**Topics**:
- ASCII and Unicode
- Character representation
- Strings and text
- Data types in C
- Memory layout of data types

**Resources**:
- Bryant Chapter 2.4
- Crash Course CS Episode 4
- Practice encoding/decoding

**Practice**:
- ASCII table memorization
- Character encoding exercises
- C data type size calculations

**Lab**: Write program to convert between encodings

---

### Week 4: Boolean Logic and Digital Circuits
**Topics**:
- Boolean algebra basics
- Logic gates (AND, OR, NOT, NAND, NOR, XOR)
- Truth tables
- Logic expressions and simplification
- Karnaugh maps
- Combinational circuits

**Resources**:
- Digital design textbook sections
- Crash Course CS Episodes 7-8
- Logisim simulator

**Practice**:
- Build circuits in Logisim (10+ circuits)
- Simplify Boolean expressions (30 problems)
- Design combinational circuits (adders, multiplexers)

**Lab**: Design and simulate full adder circuit

**Critical Gates**:
```
AND: A · B
OR: A + B
NOT: Ā
NAND: (A · B)̄
XOR: A ⊕ B
```

---

### Week 5: Sequential Logic and Memory
**Topics**:
- Flip-flops and latches
- Registers
- Counters
- Sequential circuit design
- Memory cells
- RAM and ROM basics

**Resources**:
- Digital design chapters
- Crash Course CS Episode 9
- Ben Eater's register videos

**Practice**:
- Design sequential circuits
- Build counters and registers
- Understand memory timing

**Lab**: Design 4-bit register with load control

---

### Week 6: Computer Architecture Basics
**Topics**:
- Von Neumann architecture
- Harvard architecture
- CPU components (ALU, registers, control unit)
- Instruction cycle (fetch-decode-execute)
- Memory hierarchy overview

**Resources**:
- Bryant Chapter 4.1-4.3
- Crash Course CS Episodes 10-11
- MIT 6.004 Lectures 5-6

**Practice**:
- Trace instruction execution
- Understand CPU datapath
- Identify architecture components

**Lab**: Simulate simple CPU operation

**Instruction Cycle**:
```
1. Fetch: Get instruction from memory
2. Decode: Interpret instruction
3. Execute: Perform operation
4. Store: Write back results
```

---

### Week 7: Assembly Language
**Topics**:
- Machine language vs assembly
- RISC vs CISC
- Assembly language basics
- Registers and memory addressing
- Common instructions
- Assembly programming

**Resources**:
- Bryant Chapter 3
- RISC-V or MIPS tutorials
- Assembly programming practice

**Practice**:
- Write 10+ assembly programs
- Convert C to assembly
- Understand calling conventions

**Lab**: Implement simple functions in assembly

**Common Operations**:
```assembly
; Load/Store
lw $t0, 0($sp)    # Load word
sw $t0, 4($sp)    # Store word

; Arithmetic
add $t0, $t1, $t2 # Add
sub $t0, $t1, $t2 # Subtract

; Control Flow
beq $t0, $t1, label # Branch if equal
j label             # Jump
```

---

### Week 8: Memory Systems
**Topics**:
- Memory hierarchy (cache, RAM, disk)
- Cache organization
- Cache mapping (direct, associative, set-associative)
- Cache replacement policies
- Virtual memory introduction

**Resources**:
- Bryant Chapter 6
- Crash Course CS Episode 19
- MIT 6.004 Lectures on memory

**Practice**:
- Cache mapping calculations (50 problems)
- Hit/miss ratio calculations (30 problems)
- Memory access time calculations

**Lab**: Cache simulator

**Cache Formulas**:
```
Number of Sets = Cache Size / (Block Size × Associativity)
Tag Bits = Address Bits - Index Bits - Offset Bits
Average Access Time = Hit Time + (Miss Rate × Miss Penalty)
```

---

### Week 9: Storage and I/O Systems
**Topics**:
- Storage hierarchy
- Hard disk drives
- Solid-state drives
- I/O devices
- Device controllers
- Interrupts and polling
- DMA (Direct Memory Access)

**Resources**:
- Bryant Chapter on I/O
- Crash Course CS Episodes 20-21
- Storage technology articles

**Practice**:
- Compare storage technologies
- Calculate disk access times
- Understand I/O mechanisms

**Assignment**: Research and compare SSD vs HDD

---

### Week 10: Operating System Fundamentals
**Topics**:
- OS purposes and functions
- Process management basics
- Memory management overview
- File systems introduction
- System calls
- Shell basics

**Resources**:
- OS overview chapters
- Crash Course CS Episodes 12-13
- Linux command line practice

**Practice**:
- Use basic Linux commands (50+ commands)
- Understand process concept
- Explore file systems

**Lab**: Write shell scripts for system tasks

**Essential Commands**:
```bash
ls          # List files
cd          # Change directory
pwd         # Print working directory
cp          # Copy files
mv          # Move files
rm          # Remove files
ps          # Process status
top         # System monitor
chmod       # Change permissions
```

---

### Week 11: Computer Networks Basics
**Topics**:
- Network fundamentals
- OSI and TCP/IP models
- IP addressing
- Protocols (HTTP, TCP, UDP)
- Client-server model
- Network security basics

**Resources**:
- Networking chapters
- Crash Course CS Episodes 28-30
- Packet tracer simulations

**Practice**:
- Understand network layers
- IP address calculations
- Protocol analysis

**Lab**: Set up simple network simulation

**Network Layers**:
```
Application: HTTP, FTP, DNS
Transport: TCP, UDP
Network: IP, ICMP
Data Link: Ethernet
Physical: Cables, signals
```

---

### Week 12: System Integration and Review
**Topics**:
- How all components work together
- System performance
- Optimization principles
- Security fundamentals
- Current trends (cloud, mobile)

**Activities**:
- Comprehensive review
- Practice exams (3-4 full exams)
- Weak area focus
- Final project completion

**Final Project**: Trace complete program execution from source code to hardware

---

## Hands-On Projects

### Project 1: Number System Calculator
**Week 2-3**

Build calculator that converts between:
- Binary, decimal, octal, hexadecimal
- Performs arithmetic in different bases
- Shows two's complement representation

**Skills**: Data representation, programming

---

### Project 2: Logic Circuit Simulator
**Week 4-5**

Create tool that:
- Simulates basic logic gates
- Builds combinational circuits
- Tests with truth tables
- Designs arithmetic circuits

**Skills**: Boolean logic, circuit design

---

### Project 3: Simple CPU Simulator
**Week 6-7**

Implement simulator for:
- Basic instruction set
- Register operations
- Memory access
- Instruction execution

**Skills**: Computer architecture, assembly programming

---

### Project 4: Cache Simulator
**Week 8**

Build simulator that:
- Models cache behavior
- Implements different mapping strategies
- Calculates hit/miss rates
- Shows cache contents

**Skills**: Memory hierarchy, performance analysis

---

## Study Strategies

### For Conceptual Understanding
1. Build From Bottom Up: Start with transistors, build to systems
2. Draw Diagrams: Visualize components and connections
3. Use Analogies: Relate to real-world systems
4. Teach Others: Explaining solidifies understanding
5. Ask "Why": Understand design decisions

### For Problem Solving
1. Practice Conversions: Do 100+ number system problems
2. Trace Execution: Follow programs through each stage
3. Timing Diagrams: Draw for sequential circuits
4. Calculate Everything: Memory timing, cache performance
5. Check Your Work: One error ruins calculations

### For Labs and Projects
1. Start Early: Hardware projects take time
2. Test Components: Verify each part before integration
3. Document Design: Keep track of decisions
4. Debug Systematically: Isolate problems
5. Version Control: Use Git for code projects

---

## Essential Tools

### Simulators
```
Circuit Simulation:
- Logisim Evolution (logic circuits)
- Digital (modern circuit simulator)

CPU/Assembly:
- MARS (MIPS simulator)
- Venus (RISC-V online)
- QtSpim (MIPS)

Memory:
- Cachegrind (cache profiler)
- Custom cache simulators

System:
- VirtualBox (virtual machines)
- QEMU (system emulator)
```

### Development Tools
```bash
# C Programming
gcc -Wall -g program.c -o program

# Assembly
as program.s -o program.o
ld program.o -o program

# Debugging
gdb program
objdump -d program
hexdump file
```

---

## Assessment Preparation

### Typical Exam Format
- Multiple choice (30%): Concepts, definitions
- Problem solving (40%): Conversions, calculations
- Short answer (20%): Explanations, diagrams
- Programming (10%): Assembly or C code

### Key Topics for Exams

**Midterm (Weeks 1-6)**:
- Number systems (20%)
- Boolean logic and circuits (25%)
- Computer architecture (30%)
- Assembly language (25%)

**Final (Cumulative)**:
- Memory hierarchy (25%)
- Assembly programming (20%)
- I/O systems (15%)
- Operating systems (15%)
- Networks (10%)
- Integration (15%)

### Preparation Strategy

**3 Weeks Before**:
- Review all notes and labs
- Create formula sheet
- Practice problems (200+)

**2 Weeks Before**:
- Take practice exams (4-5 full exams)
- Focus on weak areas
- Build sample circuits

**1 Week Before**:
- Final review of all topics
- Memorize key formulas
- Speed practice

**Day Before**:
- Light review
- Rest well
- Have calculator and tools ready

---

## Common Formulas

### Number Systems
```
Binary to Decimal: Σ(bit × 2^position)
Decimal to Binary: Divide by 2, collect remainders
Hex to Binary: Each hex digit = 4 binary bits
```

### Computer Architecture
```
CPI (Cycles Per Instruction) = Total Cycles / Instruction Count
CPU Time = Instruction Count × CPI × Clock Period
MIPS = Instruction Count / (Execution Time × 10^6)
```

### Memory Hierarchy
```
Effective Access Time = Hit Rate × Cache Time + Miss Rate × (Cache Time + Miss Penalty)
Speedup = Old Time / New Time
```

### Cache Calculations
```
Block Offset Bits = log2(Block Size)
Index Bits = log2(Number of Sets)
Tag Bits = Address Bits - Index Bits - Offset Bits
```

---

## Common Mistakes

### Mistake 1: Not Practicing Conversions
**Result**: Lose points on basic questions  
**Solution**: Do 20 conversions daily until automatic

### Mistake 2: Ignoring Binary Arithmetic
**Result**: Can't solve circuit problems  
**Solution**: Master binary addition/subtraction

### Mistake 3: Memorizing Without Understanding
**Result**: Can't solve variations  
**Solution**: Understand why systems work this way

### Mistake 4: Skipping Labs
**Result**: Miss hands-on learning  
**Solution**: Complete every lab, experiment more

### Mistake 5: Not Testing Circuits
**Result**: Designs don't work  
**Solution**: Test each component before integration

---

## Beyond the Course

**Fundamentals knowledge leads to**:
- Computer Architecture
- Operating Systems
- Embedded Systems
- Hardware Design
- Systems Programming
- Computer Engineering

**Next Steps**:
- Take Computer Organization & Architecture
- Learn Verilog/VHDL (hardware description)
- Study operating systems
- Build embedded projects (Arduino, Raspberry Pi)
- Contribute to open-source systems software

---

## Recommended Reading Order

**Month 1**: Code (Petzold) + Crash Course CS  
**Month 2**: Bryant Chapters 1-3 + Number system practice  
**Month 3**: Bryant Chapters 4-6 + Circuit labs  
**Month 4**: Nand2Tetris projects + Final review

---

## Success Checklist

By end of semester, you should confidently:
- Convert between any number system instantly
- Design and analyze digital circuits
- Read and write assembly language
- Understand CPU architecture and operation
- Explain memory hierarchy
- Calculate cache performance
- Trace program execution through system layers
- Understand how hardware and software interact

**Target Grade**: A or A- (very achievable with consistent work)

---

## Get Help

**Resources**:
1. Study Group: Discord #fundamentals-cs
2. Office Hours: Essential for clarification
3. Stack Overflow: For programming questions
4. Reddit: r/computerscience, r/learnprogramming
5. Hack Club Team: We're here to help

---

**Master the fundamentals, and everything else becomes easier!**

*Last updated: January 27, 2026*