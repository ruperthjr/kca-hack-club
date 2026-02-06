---
title: "Pro Git"
category: "books"
subcategory: "Development Tools"
description: "Everything you need to know about Git version control - from basics to advanced workflows"
units:
  - "Version Control"
  - "Git"
  - "Collaboration"
  - "DevOps"
recommendedFor:
  - "All Developers"
  - "Team Leads"
  - "DevOps Engineers"
links:
  - name: "Access on Google Drive"
    url: "https://drive.google.com/file/d/1q2Pc0Ov6ALYnAfKcnZvJ5HG7mGmX_5Dz/view?usp=sharing"
  - name: "Read Online (Free)"
    url: "https://git-scm.com/book/en/v2"
lastUpdated: "2026-02-06"
---

# Pro Git

**Authors:** Scott Chacon, Ben Straub  
**Focus:** Complete guide to Git version control

## Overview

The definitive guide to Git, covering everything from basic concepts to advanced workflows. Available free online and essential reading for all developers.

## Getting Started

### What is Git?

**Distributed Version Control:**
- Track changes in files
- Collaborate with others
- Maintain project history
- Branching and merging
- Work offline

**Three States:**
1. **Modified** - Changed but not staged
2. **Staged** - Marked for commit
3. **Committed** - Saved in database

## Essential Git Commands

### Basic Workflow

**Initialize Repository:**
```bash
git init
git clone <url>
```

**Stage Changes:**
```bash
git add <file>
git add .
git add -p  # Interactive staging
```

**Commit Changes:**
```bash
git commit -m "commit message"
git commit -am "add and commit"
```

**View Status:**
```bash
git status
git status -s  # Short format
git diff       # Unstaged changes
git diff --staged  # Staged changes
```

### Branch Management

**Creating Branches:**
```bash
git branch <name>
git checkout -b <name>  # Create and switch
git switch -c <name>    # Modern syntax
```

**Switching Branches:**
```bash
git checkout <name>
git switch <name>  # Modern syntax
```

**Merging:**
```bash
git merge <branch>
git merge --no-ff <branch>  # Force merge commit
```

**Deleting Branches:**
```bash
git branch -d <name>   # Safe delete
git branch -D <name>   # Force delete
```

### Remote Operations

**Managing Remotes:**
```bash
git remote add origin <url>
git remote -v
git remote show origin
```

**Fetching & Pulling:**
```bash
git fetch origin
git pull origin main
git pull --rebase origin main
```

**Pushing:**
```bash
git push origin main
git push -u origin feature-branch
git push --force-with-lease  # Safer force push
```

## Git Workflows

### Feature Branch Workflow

```bash
# Create feature branch
git checkout -b feature/new-feature

# Make changes and commit
git add .
git commit -m "Add new feature"

# Push to remote
git push -u origin feature/new-feature

# Merge via Pull Request
# After PR approval, merge to main
```

### Gitflow Workflow

**Branches:**
- `main` - Production
- `develop` - Integration
- `feature/*` - New features
- `release/*` - Release prep
- `hotfix/*` - Emergency fixes

### Trunk-Based Development

- Short-lived branches
- Frequent merges to main
- Feature flags for WIP
- Continuous integration

## Advanced Git

### Rebasing

**Interactive Rebase:**
```bash
git rebase -i HEAD~3
```

**Rebase vs Merge:**
- **Rebase:** Linear history
- **Merge:** Preserves context

**Golden Rule:**  
Never rebase public commits!

### Cherry-Picking

```bash
git cherry-pick <commit-hash>
```

### Stashing

**Save Work Temporarily:**
```bash
git stash
git stash save "work in progress"
git stash list
git stash pop
git stash apply stash@{0}
git stash drop
```

### Resetting & Reverting

**Reset (rewrite history):**
```bash
git reset --soft HEAD~1   # Keep changes staged
git reset --mixed HEAD~1  # Keep changes unstaged
git reset --hard HEAD~1   # Discard changes
```

**Revert (new commit):**
```bash
git revert <commit-hash>
```

## Git Best Practices

### Commit Messages

**Good Format:**
```
<type>(<scope>): <subject>

<body>

<footer>
```

**Example:**
```
feat(auth): add OAuth2 login

Implement OAuth2 authentication using Google provider.
Includes login, logout, and token refresh.

Closes #123
```

**Types:**
- feat: New feature
- fix: Bug fix
- docs: Documentation
- style: Formatting
- refactor: Code restructuring
- test: Adding tests
- chore: Maintenance

### Branching Strategy

**Naming Conventions:**
```
feature/user-authentication
bugfix/fix-login-error
hotfix/critical-security-patch
release/v1.2.0
```

**Branch Lifetime:**
- Keep branches short-lived
- Merge or delete quickly
- Regular cleanup

### Collaboration Tips

✅ **Pull before push**  
✅ **Commit often, push once working**  
✅ **Write descriptive commits**  
✅ **Review before committing**  
✅ **Use .gitignore properly**

## Common Scenarios

### Undo Last Commit (Not Pushed)
```bash
git reset --soft HEAD~1
```

### Amend Last Commit
```bash
git commit --amend -m "new message"
git commit --amend --no-edit
```

### Discard Local Changes
```bash
git checkout -- <file>
git restore <file>  # Modern syntax
```

### View History
```bash
git log
git log --oneline
git log --graph --all
git log --author="John"
git log --since="2 weeks ago"
```

### Find Bugs with Bisect
```bash
git bisect start
git bisect bad
git bisect good <commit>
# Test each commit
git bisect reset
```

### Recover Deleted Branch
```bash
git reflog
git checkout -b <branch-name> <commit-hash>
```

## .gitignore Patterns

```gitignore
# Dependencies
node_modules/
vendor/

# Build output
dist/
build/
*.o
*.exe

# Environment
.env
.env.local

# IDE
.vscode/
.idea/
*.swp

# OS
.DS_Store
Thumbs.db

# Logs
*.log
logs/
```

## Git Hooks

**Common Hooks:**
- `pre-commit` - Run tests before commit
- `commit-msg` - Validate commit message
- `pre-push` - Run tests before push
- `post-merge` - Update dependencies

**Example pre-commit:**
```bash
#!/bin/sh
npm test
```

## Git Configuration

**User Settings:**
```bash
git config --global user.name "Your Name"
git config --global user.email "your@email.com"
```

**Useful Aliases:**
```bash
git config --global alias.co checkout
git config --global alias.br branch
git config --global alias.ci commit
git config --global alias.st status
git config --global alias.unstage 'reset HEAD --'
git config --global alias.last 'log -1 HEAD'
git config --global alias.lg "log --graph --pretty=format:'%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cr) %C(bold blue)<%an>%Creset' --abbrev-commit"
```

## Troubleshooting

**Merge Conflicts:**
```bash
# View conflicts
git status

# Resolve manually in files
# Then mark as resolved
git add <file>
git commit
```

**Detached HEAD:**
```bash
git checkout -b temp-branch
git checkout main
git merge temp-branch
```

**Large File Issues:**
- Use Git LFS (Large File Storage)
- Add to .gitignore
- Remove from history if needed

## GitHub/GitLab Workflows

### Pull Requests

1. Fork repository
2. Create feature branch
3. Make changes
4. Push to your fork
5. Create PR
6. Address reviews
7. Merge when approved

### Code Review Tips

✅ Small, focused PRs  
✅ Clear descriptions  
✅ Link to issues  
✅ Respond to feedback  
✅ Keep discussions productive

## Quick Reference

**Daily Commands:**
```bash
git status
git add .
git commit -m "message"
git push
git pull
git log --oneline
```

**Branch Commands:**
```bash
git branch
git checkout <branch>
git merge <branch>
git branch -d <branch>
```

**Sync Commands:**
```bash
git fetch
git pull
git push
git rebase
```

---

**Remember:** Git is a tool that gets better with practice. Don't be afraid of making mistakes—you can almost always recover!