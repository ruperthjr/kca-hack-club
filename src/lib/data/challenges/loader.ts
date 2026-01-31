export interface Challenge {
  slug: string;
  title: string;
  description: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  category: 'daily' | 'weekly' | 'monthly';
  estimatedTime: string;
  skills: string[];
  recommendedFor: string[];
  collaborators?: string[];
  points: number;
  content: string;
  solutions?: string[];
  hints?: string[];
  resources?: { name: string; url: string }[];
  prerequisites?: string[];
  learningObjectives?: string[];
  deliverables?: string[];
  tags?: string[];
}

const dailyChallenges = import.meta.glob('./daily/*.md', { 
  eager: true, 
  query: '?raw',
  import: 'default'
});

const weeklyChallenges = import.meta.glob('./weekly/*.md', { 
  eager: true, 
  query: '?raw',
  import: 'default'
});

const monthlyChallenges = import.meta.glob('./monthly/*.md', { 
  eager: true, 
  query: '?raw',
  import: 'default'
});

function parseChallenge(content: string, slug: string, category: 'daily' | 'weekly' | 'monthly'): Challenge {
  const frontmatterRegex = /^---\n([\s\S]*?)\n---/;
  const match = content.match(frontmatterRegex);
  
  if (!match) {
    throw new Error(`No frontmatter found in challenge: ${slug}`);
  }

  const frontmatter = match[1];
  const body = content.slice(match[0].length).trim();

  if (frontmatter === undefined) {
    throw new Error(`Invalid frontmatter in challenge: ${slug}`);
  }

  const metadata: any = {};
  frontmatter.split('\n').forEach(line => {
    const [key, ...valueParts] = line.split(':');
    if (key && valueParts.length) {
      const value = valueParts.join(':').trim();
      if (value.startsWith('[') && value.endsWith(']')) {
        metadata[key.trim()] = value.slice(1, -1).split(',').map(v => v.trim().replace(/['"]/g, ''));
      } else {
        metadata[key.trim()] = value.replace(/['"]/g, '');
      }
    }
  });

  return {
    slug,
    category,
    content: body,
    title: metadata.title || '',
    description: metadata.description || '',
    difficulty: metadata.difficulty || 'beginner',
    estimatedTime: metadata.estimatedTime || '1 hour',
    skills: metadata.skills || [],
    recommendedFor: metadata.recommendedFor || [],
    collaborators: metadata.collaborators || [],
    points: parseInt(metadata.points) || 0,
    solutions: metadata.solutions || [],
    hints: metadata.hints || [],
    resources: metadata.resources || [],
    prerequisites: metadata.prerequisites || [],
    learningObjectives: metadata.learningObjectives || [],
    deliverables: metadata.deliverables || [],
    tags: metadata.tags || []
  };
}

export function loadChallenges(category: 'daily' | 'weekly' | 'monthly'): Challenge[] {
  const challenges = category === 'daily' ? dailyChallenges : 
                     category === 'weekly' ? weeklyChallenges : 
                     monthlyChallenges;

  return Object.entries(challenges).map(([path, content]) => {
    const slug = path.split('/').pop()?.replace('.md', '') || '';
    return parseChallenge(content as string, slug, category);
  }).sort((a, b) => {
    const aNum = parseInt(a.slug.match(/\d+/)?.[0] || '0');
    const bNum = parseInt(b.slug.match(/\d+/)?.[0] || '0');
    return aNum - bNum;
  });
}

export function loadAllChallenges(): Challenge[] {
  return [
    ...loadChallenges('daily'),
    ...loadChallenges('weekly'),
    ...loadChallenges('monthly')
  ];
}

export function getChallengeBySlug(slug: string, category: 'daily' | 'weekly' | 'monthly'): Challenge | null {
  const challenges = loadChallenges(category);
  return challenges.find(c => c.slug === slug) || null;
}

export function getChallengesByDifficulty(difficulty: 'beginner' | 'intermediate' | 'advanced'): Challenge[] {
  return loadAllChallenges().filter(c => c.difficulty === difficulty);
}

export function getChallengesByRecommendedFor(member: string): Challenge[] {
  return loadAllChallenges().filter(c => 
    c.recommendedFor.some(rec => rec.toLowerCase().includes(member.toLowerCase()))
  );
}

export function getChallengesByMember(member: string): Challenge[] {
  return loadAllChallenges().filter(c => 
    c.recommendedFor.some(rec => rec.toLowerCase() === member.toLowerCase()) ||
    (c.collaborators && c.collaborators.some(collab => collab.toLowerCase() === member.toLowerCase()))
  );
}

export function getChallengeStats() {
  const all = loadAllChallenges();
  return {
    total: all.length,
    daily: all.filter(c => c.category === 'daily').length,
    weekly: all.filter(c => c.category === 'weekly').length,
    monthly: all.filter(c => c.category === 'monthly').length,
    beginner: all.filter(c => c.difficulty === 'beginner').length,
    intermediate: all.filter(c => c.difficulty === 'intermediate').length,
    advanced: all.filter(c => c.difficulty === 'advanced').length
  };
}