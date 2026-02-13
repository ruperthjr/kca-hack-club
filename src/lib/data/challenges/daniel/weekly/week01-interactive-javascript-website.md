---
title: "Interactive Website with JavaScript Features"
description: "Build a dynamic and interactive website by adding form validation, DOM manipulation, and user-driven features like a theme switcher or dynamic gallery."
difficulty: "intermediate"
unit: "Week 1 Challenge - Interactive"
week: 1
month: 1
technologies:
   - "HTML5"
   - "CSS3"
   - "JavaScript (ES6+)"
   - "DOM Manipulation"
   - "Event Handling"
   - "Local Storage"
learningOutcomes:
   - "Master DOM manipulation to dynamically alter web page content and structure."
   - "Implement robust client-side form validation using modern JavaScript."
   - "Utilize browser localStorage to persist user preferences across sessions."
   - "Create engaging user experiences with interactive elements and event handling."
   - "Structure and manage JavaScript code for a multi-featured web application."
estimatedTime: "5-7 hours"
requirements:
   - "A complete static website (HTML/CSS)."
   - "Solid understanding of JavaScript fundamentals (variables, functions, loops, objects)."
   - "Familiarity with browser developer tools for debugging."
   - "A code editor (e.g., VS Code) and a modern web browser."
deliverables:
   - "A deployed website enhanced with at least three distinct interactive JavaScript features."
   - "A fully functional contact form with client-side validation for all fields."
   - "Demonstrable use of localStorage to persist at least one feature's state (e.g., theme)."
   - "Clean, well-commented, and externalized JavaScript code."
   - "An updated README.md detailing the new interactive features and how to use them."
resources:
  - name: "MDN: Introduction to web APIs"
    url: "https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Introduction"
  - name: "JavaScript Info: Events"
    url: "https://javascript.info/introduction-browser-events"
  - name: "Smashing Magazine: A Guide To Form Validation"
    url: "https://www.smashingmagazine.com/2022/09/guide-forms-validation-ux/"
  - name: "DigitalOcean: How To Use localStorage with JavaScript"
    url: "https://www.digitalocean.com/community/tutorials/how-to-use-the-localstorage-api-in-javascript"
  - name: "freeCodeCamp: JavaScript DOM Manipulation in Practice"
    url: "https://www.freecodecamp.org/news/javascript-dom-manipulation-in-practice/"
completed: false
completedDate: ""
watermarkStyle: "diagonal"
dateAdded: "2026-02-09"
unlockDate: "2026-02-09"
---

# Interactive JavaScript Website

## Overview

This challenge focuses on transforming a static website into a dynamic, interactive user experience. You will leverage JavaScript to manipulate the DOM, validate user input, and create engaging features that respond to user actions, making your site feel more professional and alive.

## Objective

The goal is to implement at least three significant interactive features on your existing static website. This includes creating a contact form with robust client-side validation and using browser storage to persist user preferences.

## Prerequisites

-   A completed static website project (HTML/CSS).
-   Proficiency in JavaScript basics (ES6+ syntax is recommended).
-   A GitHub account for version control.
-   Familiarity with using browser developer tools for debugging.

## Instructions

### Part 1: Setup and Form Validation

1.  Link an external JavaScript file (`.js`) to your HTML document.
2.  Identify or create a contact form in your HTML.
3.  Write JavaScript to select the form and its input elements.
4.  Add a `submit` event listener to the form that prevents the default submission.
5.  Implement validation logic: check for empty fields, valid email format, and minimum message length. Display clear, user-friendly error messages next to invalid fields.
6.  If the form is valid, display a success message.

### Part 2: Implement Two Additional Interactive Features

Choose at least two features from the list below and implement them.

1.  **Theme Switcher**: Create a button that toggles between a light and dark theme. Use CSS variables for colors and a JavaScript function to switch a class on the `<body>` element.
2.  **Dynamic Project Gallery**: Store your project data in a JavaScript array of objects. Write a function to dynamically generate and display project cards in the DOM.
3.  **Interactive Skills Section**: Create skill bars that animate their width when they become visible in the viewport (use the Intersection Observer API).
4.  **Modal/Lightbox**: Create a modal window that appears when a user clicks on a project or image, displaying more details. The modal should be closable.

### Part 3: Persist State with LocalStorage

1.  Select one of your new features (the Theme Switcher is a great candidate).
2.  Use `localStorage.setItem()` to save the user's choice (e.g., 'dark' or 'light').
3.  On page load, use `localStorage.getItem()` to check for a saved preference and apply the corresponding state, so the choice persists across browser sessions.

## Deliverables

1.  A live, deployed website URL showcasing the new interactive features.
2.  A link to the GitHub repository containing the project's source code.
3.  The repository must include an updated `README.md` file that describes the interactive features you added.
4.  All JavaScript must be in one or more external `.js` files, not inline in the HTML.

## Evaluation Criteria

| Criteria                 | Weight | Description                                                              |
| ------------------------ | ------ | ------------------------------------------------------------------------ |
| Functionality            | 40%    | All features work as expected without console errors. Form validation is robust. |
| Code Quality             | 30%    | JavaScript is clean, well-structured, commented, and uses modern ES6+ syntax. |
| User Experience (UX)     | 20%    | Interactions are smooth, intuitive, and provide clear feedback to the user. |
| State Persistence        | 10%    | `localStorage` is correctly used to persist a feature's state.           |

## Tips & Common Mistakes

-   **Use `preventDefault()`**: Always use `event.preventDefault()` inside a form's submit event handler to stop the page from reloading.
-   **Debug with `console.log()`**: Liberally use `console.log()` to inspect variables and understand the flow of your code.
-   **Separate Concerns**: Keep your HTML (structure), CSS (styling), and JavaScript (logic) in separate files. Avoid inline `onclick` attributes.
-   **Test Edge Cases**: Test your form with various invalid inputs (e.g., no "@" in email, short messages) to ensure your validation logic is solid.

## Bonus Challenges (Optional)

1.  **Filterable Gallery**: If you created a dynamic gallery, add buttons to filter the projects by technology or category.
2.  **API Integration**: Fetch data for a feature from a public API (e.g., display your latest GitHub repos using the GitHub API).
3.  **Custom Animations**: Add custom CSS transitions or animations to make your interactive elements (like modals or theme switches) feel smoother.

## Submission

Submit the URL to your live, deployed website and the URL to your GitHub repository. Ensure the repository is public and the `README.md` is up-to-date.
