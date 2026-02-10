---
title: "Brainstorming Three Alternative Architectures for a Chat Application"
description: "Design and compare three distinct architectural approaches for a modern chat application"
difficulty: "advanced"
unit: "Unit 2: FOUNDATIONS OF CRITICAL AND CREATIVE THINKING"
day: 2
technologies:
  - "System Architecture"
  - "Software Design"
  - "Real-time Systems"
  - "Scalability"
learningOutcomes:
  - "Generate alternative architectural solutions for given requirements"
  - "Compare trade-offs between different architectural approaches"
  - "Design system components and interactions"
  - "Evaluate architectures against specific criteria"
estimatedTime: "75-90 minutes"
requirements:
  - "Chat application requirements (provided)"
  - "Architecture diagram tools (digital or paper)"
  - "Trade-off analysis framework"
deliverables:
  - "Three complete architecture designs with diagrams"
  - "Comparative analysis table"
  - "Scenario-based recommendations"
  - "Component specifications"
resources:
  - name: "System Design Interview – An Insider's Guide by Alex Xu"
    url: "https://www.amazon.com/System-Design-Interview-Insiders-Guide/dp/B08CMF2CQF"
  - name: "Designing Data-Intensive Applications by Martin Kleppmann"
    url: "https://dataintensive.net/"
  - name: "Software Architecture: The Hard Parts by Neal Ford et al."
    url: "https://www.oreilly.com/library/view/software-architecture-the/9781492086888/"
  - name: "Building Microservices: Designing Fine-Grained Systems by Sam Newman"
    url: "https://samnewman.io/books/building-microservices/"
  - name: "Real-Time Communication with WebRTC by Salvatore Loreto and Simon Pietro Romano"
    url: "https://www.oreilly.com/library/view/real-time-communication-with/9781449371876/"
dateAdded: "2026-02-10"
unlockDate: "2026-02-10"
---

# Chat Application Architecture Brainstorm

## Part 1: Requirements Analysis
Primary functional and non-functional requirements (summary):
- Support 1M+ concurrent users, 99.9% SLA, real-time messaging &lt;200ms, group chats (≤500 participants), 7-year retention, typing/delivery/read indicators, media up to 100MB, optional E2EE, Web/iOS/Android, initial infra cap $50K/month.

Derived NFRs:
- Scalability: horizontal scaling where possible
- Reliability: fault tolerance, deduplication, DR
- Performance: low end-to-end latency for real-time paths
- Security: transport + at-rest encryption; optional E2EE in client
- Maintainability: modular, observable, CI/CD friendly
- Cost efficiency: meet budget until proven scale

## Part 2: Architecture 1 — Monolithic Core with Real-time Edge
Architecture name: Monolithic Core with Real-time Edge

High-level diagram (ASCII):
┌───────────── Clients ─────────────┐
│ (Web / iOS / Android via WS/HTTP) │
└───────────────────────────────────┘
              │
              ▼
┌───────────── Load Balancer (sticky WS) ─────────────┐
              │
      ┌───────┴────────┐
      ▼                ▼
┌──────────┐    ┌──────────────────────────┐
│Realtime  │    │ Monolithic Application   │
│Gateway   │    │ (Business logic, DB ops) │
│(Socket)  │    └──────────────────────────┘
└──────────┘           │   │    │
                   PostgreSQL Redis S3

Component specs (concise):
- Real-time Gateway: Node.js/Socket.IO or Elixir/Phoenix — handles connections, routing, presence; stateless layer preferred.
- Monolith: Java Spring / Django — business logic, media processing; start vertical, plan sharding.
- Data: PostgreSQL (messages, users) with read replicas; Redis for sessions/presence; S3 for media.

Pros:
- Simple deployment and debugging
- Lower operational overhead initially
Cons:
- Hard to scale partial workloads
- Single large failure surface, team bottlenecks

Best for: small teams, fast prototyping, simple coordination needs

## Part 3: Architecture 2 — Event-Driven Microservices Mesh
Architecture name: Event-Driven Microservices Mesh

High-level diagram (ASCII):
Clients -> API Gateway -> Service Mesh -> {Presence, Messaging, Media, User} -> Message Bus (Kafka) -> Analytics/Search/Consumers

Component specs:
- API Gateway: Kong / AWS API GW — auth, rate limit, WS termination
- Presence: Elixir/Phoenix or Go — distributed connections, Redis for ephemeral state
- Messaging: Java/Go with partitioning by roomId; Cassandra for immutable message store
- Event Bus: Kafka/Pulsar — decoupling, replayability
- Media: dedicated service handling upload/transcode + CDN

Pros:
- Independent scaling, fault isolation, team autonomy
Cons:
- Higher ops complexity, distributed debugging, possible increased latency

Best for: large teams, long-lived product aiming at high scale and feature velocity

## Part 4: Architecture 3 — Serverless / FaaS Real-time Platform
Architecture name: Serverless Real-time Platform

High-level diagram (ASCII):
Clients -> Managed Real-time Service (SignalR/AppSync/Pusher) -> FaaS (Lambda/Functions) -> Managed DB (DynamoDB) & S3/CDN

Component specs:
- Managed real-time: Azure SignalR / Pusher / Ably — handle pub/sub and scaling
- FaaS: ProcessMessage, StoreMessage, NotifyPresence, MediaHandler — event-driven functions
- Data: DynamoDB (GSI on roomId+timestamp), S3 + CDN for media, optional Redis for low-lat TTL presence

Pros:
- No server management, automatic scaling, fast delivery
Cons:
- Vendor lock-in, cold starts, hard to predict cost at massive scale

Best for: MVPs, small teams, unpredictable traffic

## Part 5: Comparative Analysis & Recommendations

Comparison table (summary):
| Criteria | Monolith | Microservices | Serverless |
|---|---:|---:|---:|
| Time to Market | Fast | Slow | Very Fast |
| Scaling Effort | High | Moderate | Automatic |
| Operational Cost | Low (small) | High | Variable |
| Team Flexibility | Low | High | Moderate |
| Reliability | Moderate | High | High |
| Latency (real-time) | Low | Moderate | Variable |
| Vendor Lock-in | Low | Low | High |
| Debugging Ease | Easy | Hard | Hard |

Scenario recommendations:
1. Startup (5 engineers, MVP 3 months): Serverless — minimize ops, fast delivery.
2. Large enterprise (100+ engineers, 10M+ users): Microservices — team scaling and isolation.
3. Medium company (20 engineers, predictable growth): Start monolith with a real-time edge; iterate to microservices as needed.

Hybrid approach suggestion:
- Use managed real-time (Pusher/Ably/SignalR) + microservices or monolith for business logic + serverless media handlers + CDN.

Evaluation checklist (what graders should verify):
- Three distinct architectures with clear trade-offs
- Component-level specs and tech suggestions
- Real-time handling and persistence strategies
- Cost, scaling, and failure scenarios considered
- Clear deliverables: diagrams, component specs, comparison, recommendations

Tips:
- Ensure each architecture addresses the 7-year retention and E2EE requirement explicitly
- Include failure modes and recovery strategies per design
- Keep diagrams focused on data and control flow

Bonus challenges (optional):
- Estimate monthly costs at 1M users for each architecture
- Draft migration path from monolith → microservices
- Design multi-region deployment and DR plan

Submission deliverables (required):
- Single Markdown or PDF with three architecture sections, diagrams, component specs, pros/cons, comparison table, and three scenario recommendations

Example component (short):
Presence Service (microservices):
- Tech: Elixir/Phoenix for concurrency
- Data: Redis cluster for ephemeral state (TTL + heartbeats), optional write-through to analytics store
- Scaling: Partition by user hash, auto-scale by connection count
- Failure: graceful reconnects, state rebuild from other nodes

Good luck. Follow the checklist and be explicit about assumptions.
