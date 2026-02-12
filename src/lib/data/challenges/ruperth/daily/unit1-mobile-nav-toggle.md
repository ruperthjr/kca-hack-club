---
title: "JavaScript Mobile Navigation Toggle"
description: "Build an accessible, performant hamburger menu with vanilla JavaScript."
difficulty: "intermediate"
unit: "Unit 1: Web Technologies and Internet Applications"
day: 1
week: 1
month: 1
technologies:
    - "JavaScript (ES6+)"
    - "DOM Manipulation"
    - "Event Handling"
    - "ARIA Accessibility"
    - "CSS Animations"
learningOutcomes:
    - "Manipulate the DOM with vanilla JavaScript"
    - "Implement accessible interactive components"
    - "Manage focus and keyboard interactions"
    - "Add smooth, performant animations"
    - "Apply ARIA best practices for screen readers"
estimatedTime: "2–3 hours"
requirements:
    - "Completed HTML portfolio from Day 1"
    - "Completed CSS from Day 2"
    - "Modern web browser with DevTools"
    - "Understanding of JavaScript basics"
deliverables:
    - "script.js implementing the features"
    - "Working, accessible hamburger menu on mobile"
    - "Accessibility test notes"
    - "Inline code documentation and README"
resources:
  - name: "MDN: Introduction to Events"
    url: "https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events"
  - name: "MDN: Document Object Model (DOM)"
    url: "https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model"
  - name: "WAI-ARIA: Menu Button Pattern"
    url: "https://www.w3.org/WAI/ARIA/apg/patterns/menu-button/"
  - name: "JavaScript.info: Browser Events"
    url: "https://javascript.info/introduction-browser-events"
  - name: "web.dev: Accessible Navigation"
    url: "https://web.dev/accessible/"
completed: false
completedDate: ""
watermarkStyle: "diagonal"
dateAdded: "2026-02-09"
unlockDate: "2026-02-09"
---

# JavaScript Mobile Navigation Toggle

## Overview

Create a responsive, accessible mobile hamburger menu using plain JavaScript. This challenge focuses on building a navigation toggle that works seamlessly across devices, supports keyboard and screen reader accessibility, and includes smooth animations, scroll behavior, and basic form validation.

## Objective

By completing this challenge, you will implement a mobile navigation toggle that is accessible, performant, and progressively enhanced, supporting keyboard navigation, ARIA best practices, smooth scrolling, active link highlighting, and client-side form validation.

## Prerequisites

- Completed HTML and CSS portfolio from previous days
- Basic understanding of JavaScript (ES6+)
- Access to a modern web browser with DevTools

## Instructions

### Part 1: Setup and Initialization

- Link `script.js` at the end of your HTML body:
    ```html
    <script src="script.js"></script>
    </body>
    </html>
    ```
- Start your script with:
    ```javascript
    'use strict';
    document.addEventListener('DOMContentLoaded', init);
    ```
- In `init()`, select the toggle button, navigation, and links. Initialize navigation and supporting features.

### Part 2: Navigation Toggle & Accessibility

- Implement toggle logic to open/close the menu, update ARIA attributes, and lock body scroll.
- Focus the first nav link when opened; restore focus to the toggle when closed.
- Support keyboard controls: Enter/Space to toggle, Escape to close, Arrow keys and Home/End to navigate links.
- Close menu on link click, outside click, or when resizing to desktop width.

### Part 3: Smooth Scrolling, Scroll Spy, and Form Validation

- Intercept anchor link clicks to enable smooth scrolling with header offset and update the URL.
- Implement scroll spy to highlight the active nav link based on scroll position.
- Add basic client-side form validation with inline error messages and accessible feedback.

## Deliverables

1. `script.js` implementing all required features
2. Working, accessible hamburger menu on mobile
3. Accessibility test notes and inline code documentation
4. README summarizing structure and accessibility considerations

## Evaluation Criteria

| Criteria                        | Weight | Description                                      |
|----------------------------------|--------|--------------------------------------------------|
| Accessibility & ARIA             | 35%    | Proper ARIA roles, focus management, keyboard support |
| Functionality & UX               | 35%    | Menu toggle, smooth scroll, scroll spy, validation |
| Code Quality & Documentation     | 20%    | Modular code, comments, no global leaks           |
| Testing & Progressive Enhancement| 10%    | Works without JS, tested on devices, accessibility notes |

## Tips & Common Mistakes

- Use closures or modules to avoid global variables.
- Ensure all interactive elements are keyboard accessible.
- Test with screen readers and on real devices.
- Don’t forget to lock body scroll when the menu is open.
- Avoid hardcoding selectors; use semantic HTML and ARIA.

## Bonus Challenges (Optional)

1. Add animated SVG hamburger icon transitions.
2. Implement persistent active link state using localStorage.

## Submission

Submit your `script.js`, accessibility notes, and README as instructed.