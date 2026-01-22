# KCA Hack Club - Architecture

## Data Flow

```
Member Input → Browser Storage → Real-time Updates → Visual Display
     ↓              ↓                    ↓                ↓
  Manual      Check-ins           Notifications      Analytics
  Resources    Goals                Wins             Insights
  Projects    Struggles            Support          Patterns
```

## Tech Decisions

- **SvelteKit**: For reactivity and simplicity
- **Tailwind**: For rapid, consistent UI
- **Browser Storage**: For persistence without backend
- **MDSvex**: For content as code
- **Three.js/D3**: For immersive visualizations

---
