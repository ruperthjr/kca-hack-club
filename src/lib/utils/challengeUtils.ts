export interface Challenge {
  slug: string;
  title: string;
  member: string;
  type: 'daily' | 'weekly' | 'monthly';
  day?: number | null;
  week?: number | null;
  month?: number | null;
  unlockDate: string;
  difficulty: string;
  unit: string;
  description?: string;
  technologies?: string[];
  learningOutcomes?: string[];
  estimatedTime?: string;
  dateAdded?: string;
  // Completion is sourced from markdown frontmatter — no localStorage
  completed?: boolean;
  completedDate?: string | null;
  [key: string]: any;
}

export function isChallengeUnlocked(challenge: Challenge, currentDate: Date = new Date()): boolean {
  let unlockDate: Date;

  if (/^\d{4}-\d{2}-\d{2}$/.test(challenge.unlockDate)) {
    const parts = challenge.unlockDate.split('-').map(Number);
    unlockDate = new Date(parts[0]!, parts[1]! - 1, parts[2]!);
  } else {
    unlockDate = new Date(challenge.unlockDate);
    if (isNaN(unlockDate.getTime())) unlockDate = new Date();
  }

  unlockDate.setHours(0, 0, 0, 0);
  // Clone so we don't mutate the argument
  const today = new Date(currentDate);
  today.setHours(0, 0, 0, 0);
  return today >= unlockDate;
}

export function getDaysUntilUnlock(challenge: Challenge, currentDate: Date = new Date()): number {
  let unlockDate: Date;

  if (/^\d{4}-\d{2}-\d{2}$/.test(challenge.unlockDate)) {
    const parts = challenge.unlockDate.split('-').map(Number);
    unlockDate = new Date(parts[0]!, parts[1]! - 1, parts[2]!);
  } else {
    unlockDate = new Date(challenge.unlockDate);
    if (isNaN(unlockDate.getTime())) unlockDate = new Date();
  }

  unlockDate.setHours(0, 0, 0, 0);
  const today = new Date(currentDate);
  today.setHours(0, 0, 0, 0);
  const diffMs = unlockDate.getTime() - today.getTime();
  const diffDays = Math.ceil(diffMs / (1000 * 60 * 60 * 24));
  return diffDays > 0 ? diffDays : 0;
}

export function getNextChallenge(
  currentChallenge: Challenge,
  allChallenges: Challenge[]
): Challenge | null {
  const siblings = allChallenges
    .filter(c => c.member === currentChallenge.member && c.type === currentChallenge.type)
    .sort((a, b) => {
      if (currentChallenge.type === 'daily') return (a.day || 0) - (b.day || 0);
      if (currentChallenge.type === 'weekly') return (a.week || 0) - (b.week || 0);
      return (a.month || 0) - (b.month || 0);
    });

  const idx = siblings.findIndex(c => c.slug === currentChallenge.slug);
  return idx >= 0 && idx < siblings.length - 1 ? siblings[idx + 1]! : null;
}

export function getPreviousChallenge(
  currentChallenge: Challenge,
  allChallenges: Challenge[]
): Challenge | null {
  const siblings = allChallenges
    .filter(c => c.member === currentChallenge.member && c.type === currentChallenge.type)
    .sort((a, b) => {
      if (currentChallenge.type === 'daily') return (a.day || 0) - (b.day || 0);
      if (currentChallenge.type === 'weekly') return (a.week || 0) - (b.week || 0);
      return (a.month || 0) - (b.month || 0);
    });

  const idx = siblings.findIndex(c => c.slug === currentChallenge.slug);
  return idx > 0 ? siblings[idx - 1]! : null;
}

export function getChallengeStatus(
  challenge: Challenge,
  isCompleted: boolean,
  currentDate: Date = new Date()
): 'locked' | 'unlocked' | 'completed' {
  if (isCompleted) return 'completed';
  if (isChallengeUnlocked(challenge, currentDate)) return 'unlocked';
  return 'locked';
}

// Kept for any components that still import it, but streak display is removed from the UI
export function getChallengeStreak(
  challenges: Challenge[],
  completedChallenges: { [slug: string]: { completed: boolean; completedAt?: string } }
): number {
  const sorted = [...challenges]
    .filter(c => completedChallenges[c.slug]?.completed)
    .sort((a, b) => {
      const dA = new Date(completedChallenges[a.slug]?.completedAt || 0).getTime();
      const dB = new Date(completedChallenges[b.slug]?.completedAt || 0).getTime();
      return dB - dA;
    });

  if (sorted.length === 0) return 0;

  let streak = 1;
  for (let i = 1; i < sorted.length; i++) {
    const prev = completedChallenges[sorted[i - 1]!.slug];
    const curr = completedChallenges[sorted[i]!.slug];
    if (!prev?.completedAt || !curr?.completedAt) break;

    const prevDate = new Date(prev.completedAt);
    const currDate = new Date(curr.completedAt);
    prevDate.setHours(0, 0, 0, 0);
    currDate.setHours(0, 0, 0, 0);

    if (Math.floor((prevDate.getTime() - currDate.getTime()) / 86400000) === 1) {
      streak++;
    } else {
      break;
    }
  }
  return streak;
}