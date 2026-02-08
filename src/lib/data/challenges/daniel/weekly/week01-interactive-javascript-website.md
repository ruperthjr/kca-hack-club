---
title: "Interactive Website with JavaScript Features"
description: "Build a dynamic website with form validation, interactive elements, and DOM manipulation"
difficulty: "intermediate"
unit: "Week 1 Challenge - Interactive"
week: 1
technologies:
  - "HTML5"
  - "CSS3"
  - "JavaScript"
  - "DOM Manipulation"
  - "Form Validation"
learningOutcomes:
  - "Manipulate the DOM with JavaScript"
  - "Validate forms with custom JavaScript logic"
  - "Create interactive user experiences"
  - "Handle events and user input"
estimatedTime: "5-7 hours"
requirements:
  - "Completed static website from previous challenge"
  - "Understanding of JavaScript basics"
  - "Text editor and browser developer tools"
deliverables:
  - "Enhanced website with at least 3 interactive features"
  - "Working form with validation (contact or newsletter)"
  - "Dynamic content generation"
  - "Deployed website with JavaScript functionality"
resources:
  - name: "JavaScript and JQuery by Jon Duckett"
    url: "https://javascriptbook.com/"
  - name: "MDN JavaScript Guide"
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide"
  - name: "Form Validation Tutorial"
    url: "https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation"
dateAdded: "2026-02-09"
unlockDate: "2026-02-09"
---

# Interactive JavaScript Website Challenge

## Project Overview

Transform your static portfolio website into an interactive experience using JavaScript. Add form validation, dynamic content, and user interactions that make your site feel alive and professional.

## Core Requirements

### Required Interactive Features (Choose at least 3)

1. **Contact Form Validation**
   - Check email format
   - Require minimum input lengths
   - Display error messages inline
   - Success message on valid submission
   - Prevent submission if validation fails

2. **Theme Switcher**
   - Toggle between light and dark mode
   - Save preference in localStorage
   - Smooth color transitions

3. **Dynamic Project Gallery**
   - Load projects from JavaScript array
   - Filter projects by technology
   - Modal/lightbox for project details

4. **Interactive Skills Section**
   - Progress bars that animate on scroll
   - Skill cards that flip on hover
   - Filterable skill categories

5. **Live Clock or Countdown**
   - Display current time or time zone
   - Countdown to a goal date
   - Update every second

### Technical Requirements

- All JavaScript in external .js file
- Use modern ES6+ syntax (let/const, arrow functions)
- Proper event listeners (no onclick in HTML)
- Form must have actual validation logic
- At least one use of localStorage
- Mobile-friendly interactions

## Implementation Guide

### Feature 1: Contact Form Validation

**HTML Structure:**

```html

    
        Name
        
        
    
    
    
        Email
        
        
    
    
    
        Message
        
        
    
    
    Send Message
    Message sent successfully!

```

**JavaScript (script.js):**

```javascript
// Form Validation
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        if (validateForm()) {
            showSuccessMessage();
            form.reset();
        }
    });
    
    function validateForm() {
        let isValid = true;
        
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();
        
        clearErrors();
        
        if (name.length < 2) {
            showError('nameError', 'Name must be at least 2 characters');
            isValid = false;
        }
        
        if (!isValidEmail(email)) {
            showError('emailError', 'Please enter a valid email address');
            isValid = false;
        }
        
        if (message.length < 10) {
            showError('messageError', 'Message must be at least 10 characters');
            isValid = false;
        }
        
        return isValid;
    }
    
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    
    function showError(elementId, message) {
        const errorElement = document.getElementById(elementId);
        errorElement.textContent = message;
        errorElement.style.display = 'block';
    }
    
    function clearErrors() {
        const errors = document.querySelectorAll('.error-message');
        errors.forEach(error => {
            error.textContent = '';
            error.style.display = 'none';
        });
    }
    
    function showSuccessMessage() {
        const successMsg = document.getElementById('successMessage');
        successMsg.classList.remove('hidden');
        
        setTimeout(() => {
            successMsg.classList.add('hidden');
        }, 3000);
    }
});
```

**CSS for Form:**

```css
.form-group {
    margin-bottom: 1.5rem;
}

.form-group label {
    display: block;
    margin-bottom: 0.5rem;
    font-weight: 600;
}

.form-group input,
.form-group textarea {
    width: 100%;
    padding: 0.75rem;
    border: 2px solid #ddd;
    border-radius: 5px;
    font-size: 1rem;
    transition: border-color 0.3s;
}

.form-group input:focus,
.form-group textarea:focus {
    outline: none;
    border-color: #18BC9C;
}

.error-message {
    display: none;
    color: #e74c3c;
    font-size: 0.875rem;
    margin-top: 0.25rem;
}

.success {
    padding: 1rem;
    background-color: #2ecc71;
    color: white;
    border-radius: 5px;
    margin-top: 1rem;
    text-align: center;
}

.hidden {
    display: none;
}
```

### Feature 2: Dark Mode Toggle

**HTML:**

```html

    
        Your Name
        
            ☀️
            🌙
        
    

```

**JavaScript:**

```javascript
// Dark Mode Toggle
const themeToggle = document.getElementById('themeToggle');
const body = document.body;

// Check for saved theme preference
const currentTheme = localStorage.getItem('theme') || 'light';
body.classList.add(currentTheme + '-theme');

themeToggle.addEventListener('click', () => {
    if (body.classList.contains('light-theme')) {
        body.classList.remove('light-theme');
        body.classList.add('dark-theme');
        localStorage.setItem('theme', 'dark');
        updateThemeIcon('dark');
    } else {
        body.classList.remove('dark-theme');
        body.classList.add('light-theme');
        localStorage.setItem('theme', 'light');
        updateThemeIcon('light');
    }
});

function updateThemeIcon(theme) {
    const sun = document.querySelector('.sun');
    const moon = document.querySelector('.moon');
    
    if (theme === 'dark') {
        sun.classList.add('hidden');
        moon.classList.remove('hidden');
    } else {
        sun.classList.remove('hidden');
        moon.classList.add('hidden');
    }
}

// Set initial icon
updateThemeIcon(currentTheme);
```

**CSS:**

```css
/* Light Theme (default) */
.light-theme {
    --bg-color: #ffffff;
    --text-color: #333333;
    --header-bg: #2C3E50;
    --accent-color: #18BC9C;
}

/* Dark Theme */
.dark-theme {
    --bg-color: #1a1a1a;
    --text-color: #e0e0e0;
    --header-bg: #0a0a0a;
    --accent-color: #18BC9C;
}

body {
    background-color: var(--bg-color);
    color: var(--text-color);
    transition: background-color 0.3s, color 0.3s;
}

header {
    background-color: var(--header-bg);
}

.theme-toggle {
    background: none;
    border: none;
    font-size: 1.5rem;
    cursor: pointer;
    padding: 0.5rem;
}
```

### Feature 3: Dynamic Content Loading

**JavaScript:**

```javascript
// Dynamic Projects Gallery
const projects = [
    {
        title: "Personal Portfolio",
        description: "My first website built with HTML, CSS, and JavaScript",
        tech: ["HTML", "CSS", "JavaScript"],
        link: "#"
    },
    {
        title: "Calculator App",
        description: "A functional calculator with basic operations",
        tech: ["JavaScript", "CSS"],
        link: "#"
    },
    {
        title: "Todo List",
        description: "Task management app with local storage",
        tech: ["JavaScript", "HTML", "LocalStorage"],
        link: "#"
    }
];

function displayProjects() {
    const projectsContainer = document.getElementById('projectsContainer');
    
    projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        
        projectCard.innerHTML = `
            ${project.title}
            ${project.description}
            
                ${project.tech.map(tech => `${tech}`).join('')}
            
            View Project →
        `;
        
        projectsContainer.appendChild(projectCard);
    });
}

// Call on page load
document.addEventListener('DOMContentLoaded', displayProjects);
```

## Deliverables

1. **Enhanced Website**
   - At least 3 interactive JavaScript features
   - Validated contact form
   - Dynamic content generation
   - Theme persistence (localStorage)

2. **Code Quality**
   - External JavaScript file(s)
   - Well-commented code
   - Proper event handling
   - No console errors

3. **Documentation**
   - README update with new features
   - Brief explanation of each feature
   - Screenshots showing interactivity

## Evaluation Criteria

1. **Functionality** (40%)
   - All features work without errors
   - Form validation is thorough
   - Dynamic content loads correctly
   - localStorage persists data

2. **Code Quality** (30%)
   - Clean, readable JavaScript
   - Proper separation of concerns
   - Modern ES6+ syntax
   - No inline JavaScript in HTML

3. **User Experience** (20%)
   - Smooth interactions
   - Clear feedback to user
   - Error messages are helpful
   - Loading states where appropriate

4. **Creativity** (10%)
   - Original feature implementation
   - Thoughtful user interactions
   - Personal touches

## Submission Checklist

- [ ] Contact form with validation
- [ ] At least 2 additional interactive features
- [ ] External JavaScript file(s)
- [ ] No console errors
- [ ] LocalStorage implementation
- [ ] Updated and deployed website
- [ ] Updated README with feature list
- [ ] Screenshots or GIF demonstrating interactivity

## Tips for Success

1. Test each feature individually before combining
2. Use console.log() to debug issues
3. Check browser developer tools for errors
4. Test form with invalid and valid inputs
5. Verify localStorage works across browser sessions
6. Test on mobile devices
7. Commit code after each working feature

Good luck making your website interactive!

---