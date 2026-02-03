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
  studyGroup?: string[];
  points: number;
  content: string;
  solutions?: string[];
  hints?: string[];
  resources?: { name: string; url: string }[];
  prerequisites?: string[];
  learningObjectives?: string[];
  deliverables?: string[];
  tags?: string[];
  unlockDate: Date;
  deadline?: Date;
  isLocked: boolean;
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

function parseDate(dateString: string): Date {
  return new Date(dateString);
}

function isChallengeLocked(unlockDate: Date): boolean {
  const now = new Date();
  return now < unlockDate;
}

function parseChallenge(content: string, slug: string, category: 'daily' | 'weekly' | 'monthly'): Challenge {
  const frontmatterRegex = /^---\s*\n([\s\S]*?)\n---\s*$/m;
  const match = content.match(frontmatterRegex);
  
  if (!match) {
    throw new Error(`No frontmatter found in challenge: ${slug}`);
  }

  const frontmatter = match[1];
  const bodyStartIndex = match[0].length;
  const body = content.slice(bodyStartIndex).trim();

  const metadata: any = {};
  
  if (frontmatter) {
    frontmatter.split('\n').forEach(line => {
      const colonIndex = line.indexOf(':');
      if (colonIndex === -1) return;
      
      const key = line.slice(0, colonIndex).trim();
      const value = line.slice(colonIndex + 1).trim();
      
      if (!key || !value) return;
      
      if (value.startsWith('[') && value.endsWith(']')) {
        metadata[key] = value
          .slice(1, -1)
          .split(',')
          .map(v => v.trim().replace(/^['"]|['"]$/g, ''))
          .filter(v => v.length > 0);
      } else {
        metadata[key] = value.replace(/^['"]|['"]$/g, '');
      }
    });
  }

  const unlockDate = metadata.unlockDate ? parseDate(metadata.unlockDate) : new Date();
  const deadline = metadata.deadline ? parseDate(metadata.deadline) : undefined;

  return {
    slug,
    category,
    content: body || '',
    title: metadata.title || '',
    description: metadata.description || '',
    difficulty: metadata.difficulty || 'beginner',
    estimatedTime: metadata.estimatedTime || '1 hour',
    skills: metadata.skills || [],
    recommendedFor: metadata.recommendedFor || [],
    collaborators: metadata.collaborators || [],
    studyGroup: metadata.studyGroup || [],
    points: parseInt(metadata.points) || 0,
    solutions: metadata.solutions || [],
    hints: metadata.hints || [],
    resources: metadata.resources || [],
    prerequisites: metadata.prerequisites || [],
    learningObjectives: metadata.learningObjectives || [],
    deliverables: metadata.deliverables || [],
    tags: metadata.tags || [],
    unlockDate,
    deadline,
    isLocked: isChallengeLocked(unlockDate)
  };
}

export function loadChallenges(category: 'daily' | 'weekly' | 'monthly'): Challenge[] {
  const challenges = category === 'daily' ? dailyChallenges : 
                     category === 'weekly' ? weeklyChallenges : 
                     monthlyChallenges;

  return Object.entries(challenges).map(([path, content]) => {
    const slug = path.split('/').pop()?.replace('.md', '') || '';
    return parseChallenge(content as string, slug, category);
  }).sort((a, b) => a.unlockDate.getTime() - b.unlockDate.getTime());
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
  return loadAllChallenges().filter(c => c.difficulty === difficulty && !c.isLocked);
}

export function getChallengesByRecommendedFor(member: string): Challenge[] {
  return loadAllChallenges().filter(c => 
    !c.isLocked && c.recommendedFor.some(rec => rec.toLowerCase().includes(member.toLowerCase()))
  );
}

export function getChallengesByMember(member: string): Challenge[] {
  return loadAllChallenges().filter(c => 
    !c.isLocked && (
      c.recommendedFor.some(rec => rec.toLowerCase() === member.toLowerCase()) ||
      (c.collaborators && c.collaborators.some(collab => collab.toLowerCase() === member.toLowerCase())) ||
      (c.studyGroup && c.studyGroup.some(sg => sg.toLowerCase() === member.toLowerCase()))
    )
  );
}

export function getChallengeStats() {
  const all = loadAllChallenges();
  const unlocked = all.filter(c => !c.isLocked);
  
  return {
    total: all.length,
    unlocked: unlocked.length,
    locked: all.length - unlocked.length,
    daily: unlocked.filter(c => c.category === 'daily').length,
    weekly: unlocked.filter(c => c.category === 'weekly').length,
    monthly: unlocked.filter(c => c.category === 'monthly').length,
    beginner: unlocked.filter(c => c.difficulty === 'beginner').length,
    intermediate: unlocked.filter(c => c.difficulty === 'intermediate').length,
    advanced: unlocked.filter(c => c.difficulty === 'advanced').length
  };
}

export function getTimeUntilUnlock(challenge: Challenge): string {
  if (!challenge.isLocked) return 'Available now';
  
  const now = new Date();
  const diff = challenge.unlockDate.getTime() - now.getTime();
  
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  
  if (days > 0) return `Unlocks in ${days}d ${hours}h`;
  if (hours > 0) return `Unlocks in ${hours}h ${minutes}m`;
  return `Unlocks in ${minutes}m`;
}