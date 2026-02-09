---
title: "JavaScript Mobile Navigation Toggle"
description: "Build an accessible, performant hamburger menu with vanilla JavaScript"
difficulty: "intermediate"
unit: "Unit 1: Web Technologies and Internet Applications"
day: 1
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
dateAdded: "2026-02-09"
unlockDate: "2026-02-09"
---

# JavaScript Mobile Navigation Toggle

## Overview
Implement a responsive, accessible mobile hamburger menu using plain JavaScript: toggle logic, animations, focus management, keyboard navigation, smooth scrolling, active-section highlighting, basic form validation, and performance optimizations. The navigation should work without JavaScript and be progressively enhanced.

## Objective
Create a mobile navigation toggle that:
- Is keyboard- and screen-reader-accessible (correct ARIA + focus management)
- Supports smooth open/close animations and body scroll locking
- Allows keyboard navigation (Enter/Space, Escape, Arrow, Home/End)
- Smoothly scrolls to anchors and updates active link state
- Has basic client-side form validation

## Setup
Link `script.js` at the end of your HTML body:
```html
<script src="script.js"></script>
</body>
</html>
```

Start script with:
```javascript
'use strict';
document.addEventListener('DOMContentLoaded', init);
```

## Implementation (summary)

1. DOM selection and initialization
```javascript
function init() {
    const toggle = document.getElementById('mobile-menu-toggle');
    const nav = document.querySelector('nav[aria-label="Main navigation"]');
    const links = nav ? nav.querySelectorAll('a') : [];
    if (!toggle || !nav) return;
    setupNavigation(toggle, nav, links);
    setupSmoothScroll();
    setupScrollSpy();
    setupFormValidation();
    setupOptimizedHandlers();
}
```

2. Toggle logic & ARIA
- Track state locally (avoid globals).
- Update `aria-expanded`, `aria-label`, button icon, and `nav` classes.
- Lock body scrolling when open.
- Focus first link when opened; restore focus to toggle when closed.

3. Keyboard support
- Toggle on Enter/Space.
- Close on Escape and return focus to toggle.
- Arrow Up/Down, Home/End navigate links.
- Ensure Tab order remains natural.

4. Click behaviors
- Close on link click.
- Close on outside clicks (check with `contains()`).
- Close automatically when viewport becomes desktop width.

5. Smooth scroll
- Intercept anchor clicks to compute header offset and call `window.scrollTo({ behavior: 'smooth' })`.
- Update URL with `history.pushState` and focus target for accessibility.

6. Scroll spy (active link)
- Use throttled or requestAnimationFrame-backed handler to toggle `.active` on nav links based on scroll position.

7. Form validation (basic)
- Validate name, email, subject, message, and checkbox on submit.
- Provide inline error messages and accessible roles/aria-invalid flags.
- Show a success alert (role="alert") and reset form on success.

8. Performance utilities
- Debounce resize handlers
- Throttle or passive listeners for scroll
- Use `requestAnimationFrame` for scroll-intensive updates

## Minimal code examples

Toggle (open/close)
```javascript
function toggleMenu(toggle, nav, isOpen) {
    if (isOpen) openMenu(toggle, nav);
    else closeMenu(toggle, nav);
}
function openMenu(toggle, nav) {
    nav.classList.add('active');
    toggle.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
    // update icon, focus first item
}
function closeMenu(toggle, nav) {
    nav.classList.remove('active');
    toggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
    // restore icon, return focus
}
```

Smooth scroll (anchor)
```javascript
document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
        const id = a.getAttribute('href').slice(1);
        const target = document.getElementById(id);
        if (target) {
            e.preventDefault();
            const offset = document.querySelector('header')?.offsetHeight || 0;
            window.scrollTo({ top: target.offsetTop - offset - 20, behavior: 'smooth' });
            history.pushState(null, '', `#${id}`);
            target.setAttribute('tabindex','-1'); target.focus();
            setTimeout(()=>target.removeAttribute('tabindex'), 1000);
        }
    });
});
```

## Styles to add
- `.active` class for visible menu (transitions)
- `.menu-open` on body to manage overlay/scroll
- `nav a.active` styles for scroll-spy
- Error styles and `.success-message` for form states

## Testing checklist
- Hamburger toggles open/closed
- Menu closes on link click, outside click, and on resize
- Body scroll locked when menu open
- Keyboard interactions: Enter/Space, Escape, Arrow keys, Home/End
- Anchor links smooth-scroll with header offset and URL update
- Active nav link updates while scrolling
- Form validation shows errors and success message
- No console errors; animations are smooth on mobile

## Documentation & Deliverables
- script.js with clear functions and comments
- `javascript-documentation.md` summarizing structure, accessibility notes, and known limitations
- Accessibility testing notes (keyboard-only, screen reader checks)

## Evaluation tips
- Keep functions small and focused
- Avoid leaking globals (use closures/modules)
- Use passive listeners where appropriate
- Test on real devices and with assistive tech

Good luck — implement incrementally, test frequently, and document assumptions and accessibility decisions.
