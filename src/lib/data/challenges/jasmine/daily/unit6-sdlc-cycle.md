---
title: "Software Development Life Cycle Phases"
description: "List, explain, and compare SDLC phases; contrast Waterfall and Agile; map deliverables and estimate durations for a 6‑month project."
difficulty: "beginner"
unit: "Unit 6: Software Engineering Principles"
day: 2
technologies:
    - "Software Engineering"
    - "Project Management"
    - "Development Methodologies"
learningOutcomes:
    - "Identify all SDLC phases"
    - "Explain each phase's purpose (≈50 words each)"
    - "Compare traditional vs agile approaches"
    - "Map deliverables to phases"
estimatedTime: "40-50 minutes"
requirements:
    - "Basic understanding of software development"
    - "Familiarity with project lifecycle concepts"
deliverables:
    - "List of 7 SDLC phases"
    - "~50-word explanation of each phase"
    - "Key deliverables matrix for 6 phases"
    - "Comparison table: Waterfall vs Agile"
    - "Phase duration estimates for a 6-month project"
resources:
    - name: "Software Engineering, 10th Edition by Ian Sommerville"
      url: "https://www.google.com/search?q=Software+Engineering+10th+Edition"
    - name: "Software Engineering: A Practitioner's Approach by Pressman"
      url: "https://www.google.com/search?q=Software+Engineering+Practitioner%27s+Approach"
    - name: "The Mythical Man-Month by Frederick Brooks"
      url: "https://www.google.com/search?q=The+Mythical+Man-Month"
    - name: "Code Complete, 2nd Edition by Steve McConnell"
      url: "https://www.google.com/search?q=Code+Complete+2nd+Edition"
    - name: "Clean Code by Robert C. Martin"
      url: "https://www.google.com/search?q=Clean+Code"
dateAdded: "2026-02-10"
unlockDate: "2026-02-10"
---

# Software Development Life Cycle Phases

## Part 1: Phase Explanations

### 1. Planning & Requirement Analysis
- Purpose: Establish scope, goals, constraints, and a validated set of functional and non‑functional requirements that guide the project.
- Explanation: Through stakeholder interviews, requirement elicitation, and feasibility checks, the team defines what to build, why, and the success criteria. This phase minimizes ambiguity and aligns business and technical expectations before major work begins.
- Activities: stakeholder interviews, requirements documentation, feasibility study, risk assessment
- Duration: 12%
- Key Participants: business analysts, project managers, stakeholders, architects

### 2. System Design
- Purpose: Translate requirements into architecture and detailed designs (high and low level) to guide implementation.
- Explanation: Create system architecture, component designs, interfaces, and data models. Decisions include technology choices, deployment architecture, and security approaches. Deliverables inform developers and testers and reduce downstream rework.
- Activities: high-level architecture, low-level module design, prototyping, tech selection
- Duration: 18%
- Key Participants: architects, designers, senior developers, security engineers

### 3. Implementation (Coding)
- Purpose: Build the software by implementing designs into working code and integrating components.
- Explanation: Developers write, review, and integrate code, following coding standards and CI practices. Unit tests and feature branches are used to maintain quality while delivering increments of functionality for later testing and deployment.
- Activities: coding, code reviews, continuous integration, local unit testing
- Duration: 35%
- Key Participants: developers, tech leads, CI/CD engineers, code reviewers

### 4. Testing
- Purpose: Verify that the software meets requirements, is stable, secure, and performs as expected.
- Explanation: Test planning, automated and manual testing (unit, integration, system, acceptance), defect tracking, and regression testing ensure quality. Feedback loops return defects to implementation for fixes.
- Activities: test planning, automated tests, manual QA, regression testing, bug triage
- Duration: 15%
- Key Participants: QA engineers, testers, developers, product owners

### 5. Deployment
- Purpose: Release the validated software into production and ensure operational readiness.
- Explanation: Prepare release artifacts, deployment scripts, run release rehearsals, and perform the go‑live. Monitoring and rollback plans ensure a controlled transition and quick recovery from issues.
- Activities: release packaging, deployment automation, smoke testing, monitoring setup
- Duration: 5%
- Key Participants: DevOps, release managers, sysadmins, product owner

### 6. Maintenance
- Purpose: Operate, support, and evolve the system after release to fix defects and add enhancements.
- Explanation: Ongoing support, patching, performance tuning, and incremental feature delivery keep the system useful and secure. Maintenance often consumes the most lifecycle time and includes monitoring and lifecycle planning.
- Activities: incident response, patching, minor enhancements, performance monitoring
- Duration: 15%
- Key Participants: support engineers, developers, ops, product managers

### 7. Documentation (Optional / Continuous)
- Purpose: Produce and maintain user, design, operational, and process documentation throughout the project.
- Explanation: Documentation is continuous: requirements, design docs, API docs, runbooks, and user guides improve maintainability and handoff. Treat documentation as living artifacts updated alongside code and releases.
- Activities: specs, API docs, runbooks, user guides, change logs
- Duration: Continuously across phases (embedded effort)

## Part 2: Key Deliverables Matrix

| Phase | Technical Deliverables | Management Deliverables | Quality Deliverables |
|-------|------------------------|-------------------------|----------------------|
| Planning | Requirements spec, feasibility report, stakeholder list | Project charter, initial roadmap | Requirements validation checklist |
| Design | Architectural diagram, data model, interface specs | Design review minutes, effort estimates | Design review checklist |
| Implementation | Source code, build artifacts, APIs | Sprint/backlog items, progress reports | Unit test suites, CI pipelines |
| Testing | Test cases, test environment, bug reports | Test plan, release readiness report | Test coverage reports, defect metrics |
| Deployment | Deployment scripts, release bundle, monitoring configs | Release notes, deployment schedule | Smoke test checklist, rollback plan |
| Maintenance | Patch releases, logs, performance reports | Support SLAs, maintenance schedule | Incident reports, monitoring alerts |

## Part 3: Phase Dependencies Diagram

         ┌─────────────┐
         │  Planning & │
         │  Analysis   │
         └──────┬──────┘
                        ↓
         ┌─────────────┐
         │   System    │
         │    Design   │
         └──────┬──────┘
                        ↓
         ┌──────────────┐
         │ Implementation│
         │   (Coding)   │
         └──────┬───────┘
                        ↓
         ┌─────────────┐
         │   Testing   │
         └──────┬──────┘
                        ↓
         ┌─────────────┐
         │  Deployment │
         └──────┬──────┘
                        ↓
         ┌─────────────┐
         │ Maintenance │
         └─────────────┘

Annotations:
- Overlaps: In iterative approaches, Design ↔ Implementation can overlap; Planning and Design may iterate.
- Feedback loops: Testing → Implementation (defects) and Deployment → Maintenance (bugs/patches).
- Documentation: Continuous across all phases (create and update artifacts as work progresses).

## Part 4: Waterfall vs Agile Comparison

| Aspect | Waterfall SDLC | Agile SDLC |
|--------|----------------|------------|
| Phase Sequence | Linear, distinct phases in order | Iterative, small cross‑functional cycles (sprints) |
| Requirements Handling | Defined upfront, change is costly | Evolving requirements; continuous refinement |
| Testing Timing | After implementation phase | Continuous testing within iterations |
| Client Involvement | Periodic (requirements & acceptance) | Continuous collaboration and frequent demos |
| Documentation Focus | Heavy upfront and final deliverables | Lighter docs, focused on value and working software |
| Change Management | Formal change control, slower | Built-in change through backlog reprioritization |
| Risk Management | Identified early; mitigation planned | Managed continuously; early delivery reduces risk |
| Typical Project Size | Suits larger, well-scoped projects | Suits variable-scope or fast-changing projects |

## Part 5: Phase Duration Estimates

### Total Project: 6 months (180 days)

#### 1. Planning & Analysis: 22 days (12%)
- Requirements gathering: 12 days
- Feasibility study: 6 days
- Resource planning & kickoff: 4 days

#### 2. System Design: 32 days (18%)
- High-level architecture: 12 days
- Low-level design: 12 days
- Technology selection & prototyping: 8 days

#### 3. Implementation: 63 days (35%)
- Feature development (iterative): 50 days
- Code reviews & refactoring: 8 days
- Integration tasks: 5 days

#### 4. Testing: 27 days (15%)
- Test planning and automation: 6 days
- Integration/System testing: 12 days
- User acceptance & regression: 9 days

#### 5. Deployment: 9 days (5%)
- Release packaging and rehearsals: 4 days
- Production cutover and smoke tests: 3 days
- Post-deploy monitoring & stabilization: 2 days

#### 6. Maintenance (initial support + early enhancements): 27 days (15%)
- Incident handling and patches: 12 days
- Minor enhancements and performance tuning: 10 days
- Documentation updates and retrospectives: 5 days

Total: 22 + 32 + 63 + 27 + 9 + 27 = 180 days

Evaluation checklist (use when grading):
- All 7 phases listed and explained (~50 words each)
- Deliverables matrix covers 6 phases
- Dependency diagram has overlaps and feedback loops
- Waterfall vs Agile table covers 8 aspects
- Durations add to 180 days and include realistic breakdowns

Tips:
- Keep documentation current; treat it as an ongoing deliverable.
- Show feedback loops clearly — real projects are rarely purely linear.
- Adjust phase durations to reflect team size, domain complexity, and risk.
- Use automation (CI, tests, deployment) to shrink Implementation & Testing overhead and reduce risk.

