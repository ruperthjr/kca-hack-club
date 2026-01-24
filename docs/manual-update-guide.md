# Manual Update Guide - KCA Hack Club

This guide explains how to update various content types in the KCA Hack Club platform.

## Table of Contents

1. [Adding Team Members](#adding-team-members)
2. [Creating Challenges](#creating-challenges)
3. [Adding Resources](#adding-resources)
4. [Adding Academic Units](#adding-academic-units)
5. [Recording Wins](#recording-wins)
6. [Managing Hackathons](#managing-hackathons)
7. [Updating Content](#updating-content)

---

## Adding Team Members

### 1. Create Member Profile

Create a new file in `src/lib/data/team/` named `firstname.md`:

```markdown
---
name: "FirstName LastName"
role: "Role Title"
year: 1
github: "githubusername"
linkedin: "linkedinusername"
email: "email@example.com"
avatar: "/images/team/firstname.jpg"
bio: "Short one-line bio"
joinedDate: "2026-01-20"
skills: ["JavaScript", "Python", "Design"]
---

## About Me

Extended bio goes here. You can use **markdown** formatting.

## Projects

- Project 1
- Project 2

## Goals

What I want to achieve in the hack club.
```

### 2. Add Avatar Image

Place the avatar image in `static/images/team/firstname.jpg` (recommended size: 400x400px).

### 3. Deploy

Commit and push to trigger deployment.

---

## Creating Challenges

### Daily Challenges

Create or edit files in `src/lib/data/challenges/daily/`:

**Format:** `month-weekN.md`

```markdown
---
title: "January Week 1 - Daily Challenges"
week: 1
month: "january"
year: 2026
startDate: "2026-01-20"
endDate: "2026-01-26"
difficulty: "beginner"
---

## Monday - Day 1
**Challenge:** Print "Hello, Hack Club!" in 3 different programming languages.

**Skills:** Programming basics, syntax familiarity

**Resources:**
- [Python Tutorial](https://...)
- [JavaScript Guide](https://...)

---

## Tuesday - Day 2
**Challenge:** Create a function that reverses a string.

...
```

### Weekly Challenges

Create files in `src/lib/data/challenges/weekly/`:

**Format:** `weekNN-datestart.md`

```markdown
---
title: "Week 1 Challenge - Build a Portfolio"
week: 1
startDate: "2026-01-20"
endDate: "2026-01-26"
difficulty: "intermediate"
points: 100
category: "web-development"
---

## Challenge Description

Build a personal portfolio website using HTML, CSS, and JavaScript.

## Requirements

- [ ] Responsive design
- [ ] At least 3 sections
- [ ] Contact form
- [ ] Deployed live

## Bonus Points

- [ ] Dark mode toggle (+20 points)
- [ ] Custom animations (+15 points)
- [ ] Performance score >90 (+25 points)

## Submission

Submit your GitHub repo link and live URL by Sunday 11:59 PM.

## Resources

- [MDN Web Docs](https://...)
- [CSS Tricks](https://...)
```

### Monthly Challenges

Create files in `src/lib/data/challenges/monthly/`:

**Format:** `month-year.md`

```markdown
---
title: "January 2026 - Full-Stack App Challenge"
month: "january"
year: 2026
startDate: "2026-01-01"
endDate: "2026-01-31"
difficulty: "advanced"
points: 500
category: "full-stack"
---

## Challenge

Build a complete full-stack application with authentication.

## Tech Stack (Your Choice)

- Frontend: React, Vue, Svelte, etc.
- Backend: Node.js, Python, Go, etc.
- Database: PostgreSQL, MongoDB, etc.

## Minimum Features

1. User authentication
2. CRUD operations
3. Database integration
4. Responsive design
5. Deployed live

## Evaluation Criteria

- **Code Quality** (30%)
- **Functionality** (30%)
- **Design** (20%)
- **Innovation** (20%)

## Submission Deadline

January 31, 2026 at 11:59 PM EAT
```

---

## Adding Resources

Create files in `src/lib/data/resources/`:

**Format:** `category-type.md`

### Books

```markdown
---
title: "Programming Books"
category: "books"
subcategory: "programming"
icon: "📚"
lastUpdated: "2026-01-20"
---

## Beginner Level

### Clean Code by Robert C. Martin
**Link:** [Amazon](https://...)
**Description:** Essential practices for writing maintainable code.
**Why it's great:** Industry standard reference.

---

## Intermediate Level

### The Pragmatic Programmer
**Link:** [Amazon](https://...)
**Description:** From journeyman to master.
```

### Tools

```markdown
---
title: "Visual Studio Code Setup"
category: "tools"
subcategory: "editors"
icon: "🛠️"
lastUpdated: "2026-01-20"
---

## Installation

[Download VS Code](https://code.visualstudio.com/)

## Essential Extensions

1. **Svelte for VS Code**
   - Syntax highlighting
   - IntelliSense
   
2. **Prettier**
   - Code formatting
   
3. **ESLint**
   - Linting

## Recommended Settings

```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode"
}
```
```

### Drive Links

```markdown
---
title: "Google Drive Resources"
category: "drive"
icon: "📁"
lastUpdated: "2026-01-20"
---

## Course Materials

[Semester 1 Notes](https://drive.google.com/...)
- Web Technologies
- Discrete Mathematics
- Computing Mathematics

[Past Papers](https://drive.google.com/...)
- 2023-2025 Archives
- Solutions included

## Project Templates

[Starter Templates](https://drive.google.com/...)
- React boilerplate
- Node.js API
- Database schemas
```

---

## Adding Academic Units

Create files in `src/lib/data/units/`:

**Format:** `unit-name.md`

```markdown
---
title: "Web Technologies"
code: "BBIT 101"
semester: 1
year: 1
credits: 3
lecturer: "Dr. Example"
description: "Introduction to modern web development"
topics: ["HTML", "CSS", "JavaScript", "Responsive Design"]
icon: "🌐"
---

## Course Overview

This unit covers the fundamentals of web development...

## Learning Outcomes

By the end of this unit, you will:

1. Build responsive websites
2. Understand modern JavaScript
3. Work with APIs
4. Deploy web applications

## Topics Covered

### Week 1-2: HTML & CSS Fundamentals
- Semantic HTML
- CSS Grid & Flexbox
- Responsive design principles

### Week 3-4: JavaScript Basics
- Variables and data types
- Functions and scope
- DOM manipulation

...

## Recommended Resources

- [MDN Web Docs](https://...)
- [freeCodeCamp](https://...)

## Assessment

- Continuous Assessment: 40%
- Final Exam: 60%

## Study Tips

1. Practice daily
2. Build projects
3. Join study groups
```

---

## Recording Wins

Update files in `src/lib/data/wins/`:

**Format:** `month.md`

```markdown
---
title: "January 2026 Wins"
month: "january"
year: 2026
totalWins: 15
categories: ["projects", "challenges", "hackathons", "certifications"]
---

## Projects Completed

### Ruperthh - Portfolio Website v2.0
Redesigned portfolio with dark mode and 3D animations.
**Tech:** SvelteKit, Three.js, Tailwind
**Link:** [GitHub](https://...)

### Maryphin - Task Manager App
Full-stack task management with real-time updates.
**Tech:** React, Node.js, Socket.io

---

## Challenges Won

- **Week 1 Challenge:** Ruperth (Best Design)
- **Week 2 Challenge:** Daniel (Most Creative)
- **Daily Challenge Streak:** Jasmine (15 days)

---

## Hackathons

### KCA Innovate 2026
**Winner:** Team (Ruperthh, Maryphin, Pauline)
**Project:** Campus Connect App
**Prize:** KES 20,000

---

## Certifications

- **Pauline:** AWS Cloud Practitioner
- **Javan:** Google UX Design Certificate
- **Jasmine:** Meta Front-End Developer

---

## Club Growth

- New members: 12
- GitHub contributions: 347
- Projects deployed: 8
```

---

## Managing Hackathons

### Upcoming Hackathons

Edit `src/lib/data/hackathons/upcoming.md`:

```markdown
---
title: "Upcoming Hackathons"
lastUpdated: "2026-01-20"
---

## February 2026

### Hack the Valley 2026
**Date:** February 15-17, 2026
**Location:** Online
**Prize Pool:** KES 10,000
**Registration:** [Link](https://...)
**Themes:** AI, Sustainability, Health Tech

**Team Status:** Forming teams (contact Ruperth)

---

### KCA Tech Challenge
**Date:** February 28, 2026
**Location:** KCA Main Campus
**Prize Pool:** KES 10,000
**Registration:** [Link](https://...)

**Prep Sessions:** Every Friday 4-6 PM
```
---

## 2026

### January - MLH Local Hack Day
**Team:** Ruperth, Maryphin
**Project:** StudyBuddy AI
**Prize:** 1st Place - KES 70,000
**Tech:** Python, TensorFlow, React

---


## Updating Content

### Best Practices

1. **Always include frontmatter** - Required for parsing
2. **Use descriptive titles** - Helps with SEO
3. **Add dates** - Keep content timestamps
4. **Link related content** - Internal navigation
5. **Test locally first** - Run `pnpm dev`
6. **Commit meaningful messages** - Clear git history

### Workflow

```bash
# 1. Create/edit content file
vim src/lib/data/team/newmember.md

# 2. Test locally
pnpm dev

# 3. Format code
pnpm format

# 4. Commit changes
git add .
git commit -m "Add new team member: Name"

# 5. Push to deploy
git push origin main
```

### Content Checklist

- [ ] Frontmatter is complete
- [ ] All links work
- [ ] Images are optimized
- [ ] Markdown syntax is valid
- [ ] No spelling errors
- [ ] Related content is linked
- [ ] Dates are accurate
- [ ] Preview looks good locally

---

## Common Issues

### Images Not Loading
- Check file path is correct
- Ensure image is in `static/` folder
- Verify file extension matches

### Frontmatter Errors
- Must use valid YAML syntax
- Dates in format: "YYYY-MM-DD"
- Arrays use square brackets: `["item1", "item2"]`

### Build Failures
- Run `pnpm check` to find TypeScript errors
- Check console for error messages
- Ensure all imports are correct

---

## Need Help?

Contact the tech team:
- **Ruperth:** Technical lead
- **Maryphin:** Content coordinator
- **Pauline:** Design lead

Or create an issue on GitHub.