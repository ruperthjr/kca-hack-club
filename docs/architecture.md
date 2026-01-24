# KCA Hack Club - Architecture

## Overview

KCA Hack Club is a learning and collaboration platform built with SvelteKit, designed to empower computer science students through structured challenges, resources, and community engagement.

## Technology Stack

### Frontend
- **SvelteKit 5** - Modern, fast, and reactive framework
- **Tailwind CSS 4** - Utility-first styling with custom design system
- **TypeScript** - Type-safe development
- **Three.js** - 3D visualizations and interactive elements

### Content Management
- **MDsveX** - Markdown with Svelte components
- **Shiki** - Syntax highlighting for code blocks
- **Fuse.js** - Fuzzy search for resources and challenges

### Build & Deploy
- **Vite 7** - Lightning-fast build tool
- **Vercel** - Serverless deployment platform
- **pnpm** - Efficient package management

### Testing
- **Vitest** - Unit testing framework
- **Playwright** - End-to-end testing

## Project Structure

### Content Organization

```
src/lib/data/
├── team/           # Team member profiles
├── units/          # Academic units/courses
├── resources/      # Learning resources
├── challenges/     # Daily, weekly, monthly challenges
├── wins/           # Monthly achievement logs
└── hackathons/     # Hackathon information
```

### Component Architecture

```
src/lib/components/
├── MemberCard.svelte         # Team member display
├── EnergyPulse.svelte        # Animated energy indicator
├── ResourceCard.svelte       # Resource link cards
├── UnitCard.svelte           # Academic unit cards
├── ChallengeCard.svelte      # Challenge display
├── ProgressRing.svelte       # Circular progress indicator
├── WinCard.svelte            # Achievement cards
├── HackathonCard.svelte      # Hackathon info cards
├── CommitHeatmap.svelte      # GitHub-style activity heatmap
├── StreakTracker.svelte      # Daily streak tracking
├── Navigation.svelte         # Main navigation
├── Footer.svelte             # Site footer
├── ThemeToggle.svelte        # Dark/light mode switcher
└── ReadingProgress.svelte    # Article reading progress
```

### Routing Strategy

SvelteKit's file-based routing:

- `/` - Landing page with overview
- `/team` - Team member grid
- `/team/[member]` - Individual member profile
- `/units` - Academic units listing
- `/units/[slug]` - Unit details
- `/resources` - Resource categories
- `/resources/[slug]` - Resource details
- `/challenges` - Challenge hub
- `/challenges/daily/[week]` - Daily challenges
- `/challenges/weekly/[week]` - Weekly challenges
- `/challenges/monthly/[month]` - Monthly challenges
- `/wins` - Achievement showcase
- `/hackathons` - Hackathon information
- `/manifesto` - Club manifesto
- `/rss.xml` - RSS feed

## Data Flow

### Content Loading

1. Markdown files in `src/lib/data/` contain frontmatter metadata
2. SvelteKit's `+page.ts` loaders import and parse markdown
3. Components receive parsed data as props
4. Content is rendered with MDsveX

### State Management

- **Local component state** - Using Svelte's reactive `$state()`
- **URL state** - SvelteKit's routing and page stores
- **Theme state** - localStorage with SSR-safe initialization
- **Progress tracking** - Browser localStorage for persistence

## Key Features

### 1. Challenge System
- Three difficulty levels: Daily, Weekly, Monthly
- Progress tracking and streak visualization
- Automated difficulty progression

### 2. Resource Library
- Categorized learning materials
- Fuzzy search functionality
- External link validation

### 3. Team Profiles
- Markdown-based member bios
- GitHub integration
- Social links

### 4. Achievement Tracking
- Monthly wins compilation
- Hackathon participation records
- Progress visualization

### 5. Content Management
- Git-based content workflow
- Markdown with custom components
- Automated RSS feed generation

## Performance Optimizations

- **Code splitting** - Route-based chunking
- **Image optimization** - Responsive images with modern formats
- **Lazy loading** - Components loaded on demand
- **Server-side rendering** - Fast initial page loads
- **Static generation** - Pre-rendered pages where possible

## Accessibility

- Semantic HTML structure
- ARIA labels and roles
- Keyboard navigation support
- Color contrast compliance
- Screen reader optimization

## Security

- Content Security Policy headers
- XSS protection through sanitization
- HTTPS enforcement
- Secure external links (`rel="noopener noreferrer"`)

## Future Enhancements

- [ ] Real-time collaboration features
- [ ] Authentication system for member-only content
- [ ] API integration for GitHub activity
- [ ] Interactive code playgrounds
- [ ] Community forum integration
- [ ] Email notification system
- [ ] Mobile native app (Capacitor)

## Development Workflow

1. Content updates via markdown files
2. Component development in isolation
3. Route testing with Playwright
4. Deployment via Vercel on merge to main

## Monitoring

- Vercel Analytics for page views
- Speed Insights for performance metrics
- Error tracking through Vercel logs
- RSS feed for content updates