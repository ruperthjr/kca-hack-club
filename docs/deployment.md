# Deployment Guide - KCA Hack Club

## Deployment Strategy

The KCA Hack Club platform uses continuous deployment through Vercel with automatic builds on every push to the main branch.

## Vercel Configuration

### Project Settings

- **Framework Preset:** SvelteKit
- **Build Command:** `pnpm build`
- **Output Directory:** `.svelte-kit`
- **Install Command:** `pnpm install`
- **Node Version:** 22.x

### Environment Variables

Set these in the Vercel dashboard:

```bash
# Optional: Analytics
VITE_VERCEL_ANALYTICS_ID=your_analytics_id

# Optional: Custom domain
PUBLIC_SITE_URL=https://kcahackclub.vercel.app
```

## Deployment Process

### Automatic Deployment

1. **Push to main branch:**
   ```bash
   git add .
   git commit -m "Your changes"
   git push origin main
   ```

2. **Vercel automatically:**
   - Detects the push
   - Installs dependencies
   - Runs build
   - Deploys to production
   - Generates preview URL

### Manual Deployment

Using Vercel CLI:

```bash
# Install Vercel CLI
pnpm add -g vercel

# Deploy to preview
vercel

# Deploy to production
vercel --prod
```

## Build Optimization

### Production Build Settings

The project is configured for optimal production builds:

```javascript
// vite.config.ts
export default defineConfig({
  plugins: [sveltekit(), tailwindcss()],
  build: {
    minify: 'terser',
    cssMinify: true,
    rollupOptions: {
      output: {
        manualChunks: {
          'svelte-core': ['svelte'],
          'three': ['three']
        }
      }
    }
  }
});
```

### Performance Checklist

- [x] Code splitting enabled
- [x] Tree shaking configured
- [x] CSS purging active
- [x] Image optimization
- [x] Gzip compression
- [x] Cache headers set

## Vercel Adapter Configuration

```javascript
// svelte.config.js
import adapter from '@sveltejs/adapter-vercel';

const config = {
  kit: {
    adapter: adapter({
      runtime: 'nodejs22.x',
      regions: ['sin1'], // Singapore (closest to Kenya)
      maxDuration: 10,
      memory: 1024,
      isr: {
        expiration: 60,
        bypassToken: process.env.ISR_BYPASS_TOKEN
      }
    })
  }
};
```

## Domain Configuration

### Custom Domain Setup

1. **Add domain in Vercel:**
   - Go to Project Settings → Domains
   - Add your custom domain
   - Follow DNS configuration instructions

2. **DNS Records (Example):**
   ```
   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   
   Type: A
   Name: @
   Value: 76.76.21.21
   ```

3. **SSL Certificate:**
   - Automatically provisioned by Vercel
   - Renews automatically

### Recommended Setup

```
kcahackclub.com → Production
www.kcahackclub.com → Redirects to kcahackclub.com
staging.kcahackclub.com → Staging branch
```

## Preview Deployments

Every pull request gets a unique preview URL:

```
https://kca-hack-club-{hash}.vercel.app
```

### Preview Features

- Full production build
- Independent database (if applicable)
- Shareable URL for review
- Auto-deleted after merge

## Rollback Strategy

### Quick Rollback

From Vercel Dashboard:
1. Go to Deployments tab
2. Find previous working deployment
3. Click "..." → Promote to Production

### Using CLI

```bash
# List deployments
vercel ls

# Rollback to specific deployment
vercel rollback [deployment-url]
```

## Monitoring

### Analytics

Integrated Vercel Analytics tracks:
- Page views
- Unique visitors
- Top pages
- Referrers
- Performance metrics

### Speed Insights

Real User Monitoring (RUM):
- First Contentful Paint (FCP)
- Largest Contentful Paint (LCP)
- Cumulative Layout Shift (CLS)
- Time to First Byte (TTFB)

### Log Access

```bash
# View production logs
vercel logs [deployment-url]

# Follow logs in real-time
vercel logs --follow
```

## Performance Targets

### Core Web Vitals

- **LCP:** < 2.5s
- **FID:** < 100ms
- **CLS:** < 0.1

### Lighthouse Scores

Target scores (Production):
- **Performance:** 95+
- **Accessibility:** 100
- **Best Practices:** 100
- **SEO:** 100

## Caching Strategy

### Static Assets

```javascript
// vercel.json
{
  "headers": [
    {
      "source": "/fonts/(.*)",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "public, max-age=31536000, immutable"
        }
      ]
    },
    {
      "source": "/images/(.*)",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "public, max-age=31536000, immutable"
        }
      ]
    }
  ]
}
```

### Page Caching

```javascript
// src/routes/+page.server.ts
export async function load({ setHeaders }) {
  setHeaders({
    'cache-control': 'public, max-age=3600' // 1 hour
  });
  
  return {
    // page data
  };
}
```

## Edge Functions

For global performance, deploy to Vercel Edge Network:

```javascript
// src/routes/api/[...path]/+server.ts
export const config = {
  runtime: 'edge'
};

export async function GET() {
  // Ultra-low latency API
}
```

## Deployment Checklist

Before pushing to production:

- [ ] All tests pass (`pnpm test`)
- [ ] Type checking passes (`pnpm check`)
- [ ] Linting passes (`pnpm lint`)
- [ ] Build succeeds locally (`pnpm build`)
- [ ] Preview works correctly
- [ ] No console errors
- [ ] Images optimized
- [ ] Links verified
- [ ] Meta tags updated
- [ ] RSS feed valid

## Troubleshooting

### Build Fails

**Check build logs:**
```bash
vercel logs [deployment-url]
```

**Common issues:**
- Missing environment variables
- TypeScript errors
- Import path issues
- Dependency conflicts

**Solutions:**
```bash
# Clear cache and rebuild
rm -rf .svelte-kit node_modules
pnpm install
pnpm build
```

### Slow Build Times

**Optimization:**
```bash
# Use pnpm for faster installs
# Limit dev dependencies
# Use selective imports
import { specificFunction } from 'library';
// instead of
import * as Library from 'library';
```

### 404 Errors

**Ensure proper routing:**
- Check file names match routes
- Verify dynamic routes: `[slug]` not `{slug}`
- Add fallback pages

### API Rate Limits

**Implement caching:**
```javascript
// Cache API responses
const cache = new Map();

export async function load({ fetch }) {
  const cacheKey = 'data-key';
  
  if (cache.has(cacheKey)) {
    return cache.get(cacheKey);
  }
  
  const data = await fetch('/api/data');
  cache.set(cacheKey, data);
  
  return data;
}
```

## Security

### Environment Secrets

Never commit:
- API keys
- Database credentials
- OAuth secrets
- Private tokens

**Use Vercel Environment Variables:**
```bash
vercel env add SECRET_KEY production
```

### Content Security Policy

```javascript
// svelte.config.js
export default {
  kit: {
    csp: {
      directives: {
        'default-src': ['self'],
        'script-src': ['self', 'unsafe-inline'],
        'style-src': ['self', 'unsafe-inline'],
        'img-src': ['self', 'data:', 'https:'],
        'font-src': ['self'],
        'connect-src': ['self']
      }
    }
  }
};
```

## Continuous Integration

### GitHub Actions (Optional)

```yaml
# .github/workflows/ci.yml
name: CI

on: [push, pull_request]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: pnpm/action-setup@v2
      - run: pnpm install
      - run: pnpm check
      - run: pnpm test
      - run: pnpm build
```

## Post-Deployment

### Verification Steps

1. **Check live site:**
   - Visit production URL
   - Test all major routes
   - Verify forms work
   - Check mobile responsive

2. **Performance audit:**
   ```bash
   # Run Lighthouse
   npx lighthouse https://kcahackclub.vercel.app
   ```

3. **Monitor analytics:**
   - Check Vercel Analytics
   - Review error logs
   - Monitor speed insights

### Update DNS

After successful deployment:

1. Update DNS records if needed
2. Verify SSL certificate
3. Test all subdomains
4. Update documentation

## Support

For deployment issues:

- **Vercel Docs:** https://vercel.com/docs
- **SvelteKit Docs:** https://kit.svelte.dev
- **Community Discord:** Join KCA Hack Club server
- **GitHub Issues:** Open issue in repo

---

**Last Updated:** January 23, 2026  
**Maintained By:** Rupert Hnyagesoa (Tech Lead)