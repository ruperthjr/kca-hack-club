# Contributing to KCA Hack Club

First off, thank you for considering contributing to KCA Hack Club! 🎉

## Code of Conduct

By participating in this project, you agree to:

- Be respectful and inclusive
- Welcome newcomers
- Give and gracefully accept constructive feedback
- Focus on what is best for the community

## How Can I Contribute?

### Reporting Bugs

Before creating bug reports, please check existing issues. When creating a bug report, include:

- Clear title and description
- Steps to reproduce
- Expected vs actual behavior
- Screenshots (if applicable)
- Your environment (OS, browser, Node version)

### Suggesting Enhancements

Enhancement suggestions are tracked as GitHub issues. When creating an enhancement suggestion:

- Use a clear and descriptive title
- Provide detailed description of the suggested enhancement
- Explain why this enhancement would be useful
- List examples of how it would be used

### Adding Content

#### Team Members

1. Create `src/lib/data/team/yourname.md`
2. Add your profile photo to `static/images/team/`
3. Follow the template in the manual update guide

#### Challenges

1. Create challenge file in appropriate directory
2. Include clear instructions
3. Add resources and hints
4. Test the challenge yourself

#### Resources

1. Verify links are working
2. Add clear descriptions
3. Categorize appropriately

### Pull Requests

1. Fork the repo and create your branch from `main`
2. If you've added code, add tests
3. Ensure the test suite passes
4. Format your code with Prettier
5. Issue the pull request!

## Development Setup

```bash
# Clone your fork
git clone https://github.com/ruperthjr/kca-hack-club.git

# Install dependencies
pnpm install

# Create a branch
git checkout -b feature/my-feature

# Make changes and test
pnpm dev

# Format code
pnpm format

# Run tests
pnpm test

# Commit with clear message
git commit -m "Add: feature description"

# Push to your fork
git push origin feature/my-feature
```

## Commit Message Guidelines

Use clear commit messages:

- `Add: new feature or content`
- `Fix: bug fix`
- `Update: changes to existing content`
- `Remove: deletion of code or content`
- `Refactor: code improvement without changing functionality`
- `Docs: documentation changes`

## Style Guidelines

### JavaScript/TypeScript

- Use tabs for indentation
- Use single quotes
- No semicolons
- Use meaningful variable names

### Svelte

- Follow the component structure
- Use TypeScript for props
- Keep components focused and small

### CSS/Tailwind

- Use Tailwind utility classes
- Follow mobile-first approach
- Maintain design system consistency

### Markdown

- Use proper headings hierarchy
- Include frontmatter metadata
- Test all links

## Questions?

Feel free to reach out:

- Open a discussion on GitHub
- Email:
- Discord:

Thank you for contributing!
