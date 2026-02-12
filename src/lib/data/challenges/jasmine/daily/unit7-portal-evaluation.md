---
title: "KCA Student Portal Heuristic Evaluation"
description: "Heuristic evaluation of the KCA student portal login page using Nielsen's 10 usability heuristics, with prioritized fixes and implementation guidance."
difficulty: "intermediate"
unit: "Unit 7: Human-Computer Interaction"
day: 3
technologies:
    - "Usability Evaluation"
    - "User Experience"
    - "Heuristic Analysis"
learningOutcomes:
    - "Apply Nielsen's 10 usability heuristics"
    - "Identify interface usability issues"
    - "Prioritize problems by severity"
    - "Provide actionable design recommendations"
estimatedTime: "75-90 minutes"
requirements:
    - "Understanding of usability principles"
    - "Familiarity with Nielsen's heuristics"
    - "Access to KCA student portal (hypothetical)"
deliverables:
    - "Heuristic violations matrix"
    - "Severity rating for each issue"
    - "Screenshots with annotations"
    - "Actionable redesign recommendations"
    - "Prioritized improvement roadmap"
resources:
    - name: "The Design of Everyday Things by Don Norman"
      url: "https://www.google.com/search?q=The+Design+of+Everyday+Things"
    - name: "Don't Make Me Think by Steve Krug"
      url: "https://www.google.com/search?q=Don%27t+Make+Me+Think+Revisited"
    - name: "Human-Computer Interaction by Alan Dix"
      url: "https://www.google.com/search?q=Human-Computer+Interaction+3rd+Edition"
    - name: "Interaction Design by Helen Sharp"
      url: "https://www.google.com/search?q=Interaction+Design+Beyond+HCI"
    - name: "100 Things Every Designer Needs to Know About People"
      url: "https://www.google.com/search?q=100+Things+Every+Designer+Needs+to+Know"

completed: false
completedDate: ""
watermarkStyle: "diagonal"
dateAdded: "2026-02-11"
unlockDate: "2026-02-11"
---

# KCA Student Portal Heuristic Evaluation

## Part 1: Nielsen's Heuristics Definitions

### 1. Visibility of System Status
- Definition: The system always keeps users informed about what's happening through timely feedback.
- Login Page Example: Showing a clear loading indicator and authentication status after login attempt.
- Good Practice: Show spinner + textual status ("Authenticating…") and success/failure feedback.

### 2. Match Between System and Real World
- Definition: Use familiar language, concepts, and metaphors that users expect.
- Login Page Example: Label fields "Username" and "Password" rather than jargon.
- Good Practice: Plain-language labels and conventional form layout.

### 3. User Control and Freedom
- Definition: Allow users to correct mistakes and back out of actions easily.
- Login Page Example: A visible "Cancel" or a functioning back button, clear recovery paths.
- Good Practice: Undoable actions and easy escape from error states.

### 4. Consistency and Standards
- Definition: Follow platform conventions and keep UI elements consistent.
- Login Page Example: Standard button placement, predictable keyboard behavior.
- Good Practice: Use native form controls and consistent terminology.

### 5. Error Prevention
- Definition: Design so errors are unlikely to occur in the first place.
- Login Page Example: Validate format (email/ID) before submission; warn about caps lock.
- Good Practice: Inline validation and explanatory placeholders.

### 6. Recognition Rather Than Recall
- Definition: Reduce memory load by making options, fields, and actions visible.
- Login Page Example: Autocomplete hints, persisted "Remember me" choices.
- Good Practice: Use placeholders, suggestions, and visible help links.

### 7. Flexibility and Efficiency of Use
- Definition: Support different user skill levels and allow accelerators for experts.
- Login Page Example: Keyboard shortcuts, "remember me", SSO options.
- Good Practice: Save preferences, support alternate login flows.

### 8. Aesthetic and Minimalist Design
- Definition: Keep interfaces simple and remove irrelevant information.
- Login Page Example: Simple page with high contrast; avoid heavy background imagery.
- Good Practice: Minimal layout, clear hierarchy, useful visual affordances.

### 9. Help Users Recognize, Diagnose, and Recover from Errors
- Definition: Use plain language for errors and provide actionable recovery steps.
- Login Page Example: "Invalid credentials" + hint "Forgot password?" and recovery link.
- Good Practice: Explain cause and show next steps (e.g., reset link, support contact).

### 10. Help and Documentation
- Definition: Provide concise help that is easy to find for uncommon tasks.
- Login Page Example: Easily accessible support link and password recovery instructions.
- Good Practice: Short help text, links to FAQ and contact channels.

## Part 2: Hypothetical Portal Description

### Page Overview
A single-screen login with university logo (top-left), "KCA Student Portal" header, User ID and Passcode fields, a blue "Login" button, "Forgot Password?" link, "Remember me" checkbox, campus background image, a bottom copyright footer, and a 5-second spinner after pressing Login. On failure the page shows "Invalid credentials".

### Key Elements Identified
1. University logo (top-left)
2. "KCA Student Portal" heading
3. Username field (labeled "User ID")
4. Password field (labeled "Passcode") — password visible when typing
5. "Login" button (blue)
6. "Forgot Password?" link (below button) — no "Forgot Username"
7. "Remember me" checkbox (unchecked)
8. Background campus image (partially obscures text)
9. Loading spinner (5s) — no descriptive status
10. Error message: "Invalid credentials"
11. No caps-lock warning, no show/hide toggle, no accessibility cues

## Part 3: Heuristic Violations Matrix

| # | Heuristic Violated | Interface Element | Problem Description | Severity (0-4) | Evidence |
|---|-------------------|-------------------|---------------------|----------------|----------|
| 1 | Error Prevention (5) | Password field | Password visible by default, increases typo/security risk | 4 | Field shows plain text while typing |
| 2 | Visibility of System Status (1) | Loading spinner | Spinner has no textual status or progress, ambiguous 5s delay | 4 | Spinner appears 5s with no message |
| 3 | Aesthetic & Minimalist (8) | Background image | Image reduces text contrast; readability suffers | 3 | Light text on busy background |
| 4 | Recognition vs Recall (6) | Login form | No autocomplete or username hint, increases memory load | 2 | No suggestions or "Remembered accounts" |
| 5 | Help & Documentation (10) | Forgot Password link | No "Forgot Username" or contact/support link | 2 | Only "Forgot Password?" present |
| 6 | Consistency & Standards (4) | Labels | "Passcode" term inconsistent with common "Password" label | 1 | Nonstandard label text |
| 7 | User Control (3) | Login button/flow | No cancel, no undo for stuck state on loading | 2 | Button disabled but no status |
| 8 | Error Recovery (9) | Error message | "Invalid credentials" is non-actionable and generic | 3 | No hint or link to recovery |
| 9 | Error Prevention (5) | Caps Lock | No caps-lock warning when password likely mistyped | 3 | No indicator when caps lock active |
| 10 | Flexibility & Efficiency (7) | Remember me | Checkbox unclear duration and not explained | 1 | Lack of detail on behavior |
| 11 | Accessibility (WCAG/8) | Contrast & focus | Poor contrast and missing visible focus styles | 3 | Light gray text on white and no focus ring |
| 12 | Recognition vs Recall (6) | Tab order | Nonlogical tab order; skips elements on keyboard | 3 | Tab navigation jumps unexpectedly |
| 13 | Visibility of System Status (1) | Spinner | No distinction between network delay and authentication failure | 3 | Users can't tell if stuck or working |
| 14 | Error Prevention (5) | Password field | No show/hide toggle to verify typed password | 3 | Users cannot confirm input |
| 15 | Consistency & Standards (4) | Login button color | Blue button not meeting contrast ratio for text in some states | 2 | Button text contrast borderline |
| 16 | Help & Documentation (10) | Session | No indication of session timeout or expiration | 2 | No warning about inactivity |
| 17 | Flexibility (7) | Mobile layout | Not responsive; small tap targets on mobile | 3 | Elements overlap on narrow screens |

(Severity scale: 0 none — 4 catastrophic)

## Part 4: Top 3 Issues Analysis

### Issue 1: Password Visible by Default (No Masking or Toggle)
#### Screenshot/Description
Password characters appear as plain text while typing; no "show/hide" toggle or mask by default. No caps-lock indicator.

#### Heuristics Violated
- Error Prevention (5): Exposes sensitive input and increases chance of shoulder-surfing and typos.
- User Control & Freedom (3): Users cannot hide or reveal input to verify before submit.
- Recognition Rather Than Recall (6): Lack of toggle prevents on-screen verification.

#### Impact
- Frequency: Every login attempt.
- Learnability: New users may not expect visible passwords and may be alarmed or make mistakes.
- Efficiency: Leads to corrections and repeated attempts.
- Error Rate: High chance of accidental exposure or typos; estimated increased failed logins by 15–25%.
- Satisfaction: Users concerned about security and frustrated by errors.
- Accessibility: Visual or motor-impaired users suffer without a toggle and verification option.

#### Root Cause Analysis
- Design Decision: Simplicity favored over secure defaults.
- Assumption: Visibility improves speed; overlooked privacy/security and accessibility.
- Technical Constraint: None — show/hide toggle is lightweight.

#### Current Consequences
- Support Calls: Higher password-reset related contacts.
- Security Risks: Increased risk of shoulder-surfing in public areas.

### Issue 2: Ambiguous Loading Spinner (No Status)
#### Screenshot/Description
After clicking Login a spinner appears for ~5 seconds with no text; users are unsure if authentication is progressing or stuck.

#### Heuristics Violated
- Visibility of System Status (1): No textual feedback about authentication or network delays.
- User Control & Freedom (3): Users cannot cancel or retry easily.
- Recognition Rather Than Recall (6): Users cannot tell whether to wait or retry.

#### Impact
- Frequency: Every login where network latency occurs (often).
- Learnability: New users may refresh or retry, causing double submissions.
- Efficiency: Wasted time and duplicate requests.
- Error Rate: Users may assume failure and attempt multiple retries, causing lockouts.

#### Root Cause Analysis
- Design Decision: Minimal feedback (spinner only).
- Assumption: Spinner sufficient to communicate activity.
- Technical Constraint: None — adding status text and cancel is trivial.

#### Current Consequences
- Support Calls: Confusion leads to unnecessary help tickets.
- Failed Logins: Timeout-related repeated attempts increase failures.

### Issue 3: Low Contrast / Background Image Obscures Text
#### Screenshot/Description
Campus background image interferes with form text; light gray labels and placeholder text on bright areas reduce readability.

#### Heuristics Violated
- Aesthetic & Minimalist Design (8): Visual clutter reduces clarity.
- Accessibility (WCAG): Fails contrast requirements for text and controls.
- Consistency & Standards (4): Inconsistent visual emphasis across elements.

#### Impact
- Frequency: All page views, worst on small screens.
- Learnability: New users struggle to read fields and links.
- Efficiency: Increased time to locate and complete fields.
- Error Rate: Typing mistakes due to misread labels.
- Accessibility: Significant barrier for users with low vision.

#### Root Cause Analysis
- Design Decision: Visual branding prioritized over legibility.
- Assumption: Background imagery improves aesthetics without harming readability.
- Technical Constraint: None — overlays or contrast adjustments are straightforward.

#### Current Consequences
- Support Calls: Increased for users reporting inability to login.
- Compliance: Potential WCAG conformance issues.

## Part 5: Redesign Recommendations

### Recommendation 1: Password Security and Input Controls (Issue 1)
#### Current Implementation
Password shown as plain text; no show/hide toggle; no caps-lock warning.

#### Proposed Redesign
- Mask password by default (• characters).
- Add a "show/hide" toggle icon to reveal typed password temporarily.
- Display a caps-lock indicator when active.
- Add an inline password-strength hint if creating password in signup flow.

#### Mockup/Sketch
[Passcode field] [• • • • •] [eye icon toggle] — Caps Lock: ON (if detected)

#### Heuristic Compliance
- Error Prevention: Masks and toggle reduce accidental exposure and typos.
- User Control & Freedom: Toggle gives control to users to verify input.
- Recognition Rather Than Recall: Visual feedback reduces memory load.

#### Implementation Steps
1. Switch input type to password; add toggle to change type to text temporarily.
2. Use JavaScript to detect caps lock and show indicator.
3. Add automated tests and keyboard focus handling.
4. Update privacy/security notes and test on mobile.

#### Expected Benefits
- Usability Improvement: Fewer failed logins due to typos.
- Error Reduction: Estimated 15–25% fewer password-related errors.
- Satisfaction: Increased trust and confidence.
- Support Cost: Reduced password-related support calls.

#### Potential Challenges
- Technical: Ensure toggle accessible and does not expose password in logs.
- Organizational: Minor policy update for password visibility features.

Estimated timeline: 1 sprint (1–2 weeks).

---

### Recommendation 2: Improve Loading Feedback and Flow Control (Issue 2)
#### Current Implementation
Spinner only for ~5s with no status or cancel option.

#### Proposed Redesign
- Replace spinner with combined spinner + message: "Authenticating…"
- Show progress or elapsed time if available; set a sensible timeout with a message: "Taking longer than usual — retry or contact support."
- Disable login button while showing a cancel/retry option; prevent duplicate submissions.

#### Heuristic Compliance
- Visibility of System Status: Clear textual updates.
- User Control: Allow cancel/retry.
- Error Recovery: Provide next steps on failure.

#### Implementation Steps
1. Add status text and timeout handling in front-end logic.
2. Prevent double submits by disabling form while pending.
3. Add telemetry to capture auth latency patterns.
4. QA across slow networks and mobile.

Expected timeline: 1 sprint.

---

### Recommendation 3: Fix Contrast and Background Legibility (Issue 3)
#### Current Implementation
Background image partially obscures form; light gray text.

#### Proposed Redesign
- Add a semi-opaque dark overlay behind the form or a solid card with sufficient contrast.
- Use WCAG AA/AAA compliant color palette for text and buttons.
- Ensure focus styles and large tap targets.

#### Heuristic Compliance
- Aesthetic & Minimalist: Removes visual noise and clarifies hierarchy.
- Accessibility: Meets contrast requirements.

#### Implementation Steps
1. Implement card container with accessible colors.
2. Test contrast ratios and focus states with automated tools.
3. Adjust responsive styles for mobile.

Expected timeline: 1 sprint.

---

### Recommendation 4: Improve Error Messages and Recovery Paths (Issue 8)
#### Current Implementation
Generic "Invalid credentials" message with no actionable guidance.

#### Proposed Redesign
- Provide specific, helpful messages: "Incorrect user ID or password. Try again or reset your password."
- Add a "Forgot username?" link and a short step-by-step recovery flow.
- Offer contact info or a timed lockout explanation if applicable.

#### Heuristic Compliance
- Help Users Recognize, Diagnose, and Recover from Errors.
- Help and Documentation.

#### Implementation Steps
1. Replace generic messages with descriptive ones and inline links to recovery.
2. Implement "forgot username" flow with email or verified identifier.
3. Add analytics to track error rates and common failures.

Expected timeline: 1–2 sprints.

---

### Recommendation 5: Accessibility and Keyboard Navigation Improvements (Issues 11,12,17)
#### Current Implementation
Poor tab order, missing focus styles, nonresponsive layout on small screens.

#### Proposed Redesign
- Fix tab-index and logical DOM order.
- Add visible focus states and ARIA labels.
- Make layout responsive; ensure tappable targets >= 44px, adjust spacing.

#### Heuristic Compliance
- Consistency & Standards; Recognition Rather Than Recall; Flexibility.

#### Implementation Steps
1. Audit and fix DOM order and tabindex usage.
2. Add ARIA attributes, labels and focus styles.
3. Test on screen readers and mobile devices.

Expected timeline: 2 sprints (including accessibility testing).

## Part 6: Improvement Roadmap

### Phase 1: Critical Fixes (Week 1-2)
Priority: Critical (Severity 4 issues)
Issues:
- Password visibility & lack of toggle (Issue 1)
- Ambiguous loading spinner/status (Issue 2)

Objectives:
- Secure and clear password input behavior
- Clear feedback during authentication

Resources Needed:
- 1 frontend engineer, 1 UX designer, QA, accessibility reviewer

Success Metrics:
- Reduced failed login attempts (target -20%)
- Reduced support contacts for password and login status

Risks:
- Slight rollout coordination for security policy updates

### Phase 2: Major Improvements (Week 3-6)
Priority: High (Severity 3 issues)
Issues:
- Contrast/background readability (Issue 3)
- Error messages and recovery flow (Issue 8)
- Caps-lock indicator and show/hide (complement to issue 1)

Objectives:
- Improve readability and accessibility
- Make recovery actionable and user-friendly

Resources Needed:
- 1 frontend, 1 UX, backend for recovery flows, QA

Success Metrics:
- WCAG contrast compliance
- Lowered password reset calls

Risks:
- Design approvals and platform variations

### Phase 3: Enhancements (Month 2)
Priority: Medium (Severity 2 issues)
Issues:
- Autocomplete/hints, remember-me clarification, session timeout messaging
- Implement analytics for auth flows

Objectives:
- Improve efficiency and trust
- Gather data for further prioritization

Resources Needed:
- 1 frontend, 1 product analyst

Success Metrics:
- Increased successful login conversion

Risks:
- Data privacy considerations for storing hints

### Phase 4: Polish (Month 3)
Priority: Low (Severity 1 issues)
Issues:
- Label wording consistency ("Passcode" -> "Password")
- Button contrast refinements and microcopy polish

Objectives:
- Final UX polish and consistency

Resources Needed:
- Designer, frontend QA

Success Metrics:
- Improved SUS scores, fewer minor complaints

Risks:
- Low; aesthetic changes only

Evaluation Criteria
- Heuristic Application: Correct mapping and justified severity ratings
- Analysis Depth: Focused analyses on top issues with user impact and root causes
- Recommendations Quality: Actionable fixes with clear steps and benefits
- Presentation: Structured report, clear tables, and prioritized roadmap

Tips for Submission
- Include screenshots and annotated evidence for each matrix item
- Provide a compact executive summary for stakeholders
- Use A/B testing for major changes (e.g., toggles, messages) to confirm impact

Bonus Next Steps
- Run a small usability test with 8–12 students to validate hypotheses
- Perform an automated accessibility scan and manual WCAG checks
- Create a metrics dashboard to track login success rate, reset requests, and auth latency

