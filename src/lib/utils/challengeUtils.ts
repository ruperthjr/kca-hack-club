export interface Challenge {
  slug: string;
  title: string;
  member: string;
  type: 'daily' | 'weekly' | 'monthly';
  day?: number;
  week?: number;
  month?: number;
  unlockDate: string;
  difficulty: string;
  unit: string;
  [key: string]: any;
}

export function isChallengeUnlocked(challenge: Challenge, currentDate: Date = new Date()): boolean {
  // Try to parse the date string with timezone handling
  let unlockDate: Date;
  
  // Check if the date string is in YYYY-MM-DD format
  if (/^\d{4}-\d{2}-\d{2}$/.test(challenge.unlockDate)) {
    // Parse as local date (not UTC)
    const parts = challenge.unlockDate.split('-').map(Number);
    const [year, month, day] = [parts[0] || 0, parts[1] || 1, parts[2] || 1];
    unlockDate = new Date(year, month - 1, day);
  } else {
    // Try parsing as ISO or other format
    unlockDate = new Date(challenge.unlockDate);
    
    // If still invalid, fall back to current date
    if (isNaN(unlockDate.getTime())) {
      unlockDate = new Date();
    }
  }
  
  unlockDate.setHours(0, 0, 0, 0);
  currentDate.setHours(0, 0, 0, 0);
  return currentDate >= unlockDate;
}

export function getNextChallenge(
  currentChallenge: Challenge,
  allChallenges: Challenge[]
): Challenge | null {
  const sameMemberTypeChallenges = allChallenges
    .filter(c => c.member === currentChallenge.member && c.type === currentChallenge.type)
    .sort((a, b) => {
      if (currentChallenge.type === 'daily') {
        return (a.day || 0) - (b.day || 0);
      } else if (currentChallenge.type === 'weekly') {
        return (a.week || 0) - (b.week || 0);
      } else {
        return (a.month || 0) - (b.month || 0);
      }
    });

  const currentIndex = sameMemberTypeChallenges.findIndex(c => c.slug === currentChallenge.slug);
  
  if (currentIndex >= 0 && currentIndex < sameMemberTypeChallenges.length - 1) {
    return sameMemberTypeChallenges[currentIndex + 1] || null;
  }
  
  return null;
}

export function getPreviousChallenge(
  currentChallenge: Challenge,
  allChallenges: Challenge[]
): Challenge | null {
  const sameMemberTypeChallenges = allChallenges
    .filter(c => c.member === currentChallenge.member && c.type === currentChallenge.type)
    .sort((a, b) => {
      if (currentChallenge.type === 'daily') {
        return (a.day || 0) - (b.day || 0);
      } else if (currentChallenge.type === 'weekly') {
        return (a.week || 0) - (b.week || 0);
      } else {
        return (a.month || 0) - (b.month || 0);
      }
    });

  const currentIndex = sameMemberTypeChallenges.findIndex(c => c.slug === currentChallenge.slug);
  
  if (currentIndex > 0) {
    return sameMemberTypeChallenges[currentIndex - 1] || null;
  }
  
  return null;
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

export function getDaysUntilUnlock(challenge: Challenge, currentDate: Date = new Date()): number {
  // Try to parse the date string with timezone handling
  let unlockDate: Date;
  
  // Check if the date string is in YYYY-MM-DD format
  if (/^\d{4}-\d{2}-\d{2}$/.test(challenge.unlockDate)) {
    // Parse as local date (not UTC)
    const [year, month, day] = challenge.unlockDate.split('-').map(Number);
    unlockDate = new Date(year ?? 0, (month ?? 1) - 1, day ?? 1);
  } else {
    // Try parsing as ISO or other format
    unlockDate = new Date(challenge.unlockDate);
    
    // If still invalid, fall back to current date
    if (isNaN(unlockDate.getTime())) {
      unlockDate = new Date();
    }
  }
  
  unlockDate.setHours(0, 0, 0, 0);
  currentDate.setHours(0, 0, 0, 0);
  const diffTime = unlockDate.getTime() - currentDate.getTime();
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return diffDays > 0 ? diffDays : 0;
}

export function getChallengeStreak(
  challenges: Challenge[],
  completedChallenges: { [slug: string]: { completed: boolean; completedAt?: string } }
): number {
  const sortedChallenges = [...challenges]
    .filter(c => completedChallenges[c.slug]?.completed)
    .sort((a, b) => {
      const dateA = new Date(completedChallenges[a.slug]?.completedAt || 0);
      const dateB = new Date(completedChallenges[b.slug]?.completedAt || 0);
      return dateB.getTime() - dateA.getTime();
    });

  if (sortedChallenges.length === 0) return 0;

  let streak = 1;
  for (let i = 1; i < sortedChallenges.length; i++) {
    const prevSorted = sortedChallenges[i - 1];
    const currSorted = sortedChallenges[i];

    if (!prevSorted || !currSorted) continue;

    const prevChallenge = completedChallenges[prevSorted.slug];
    const currChallenge = completedChallenges[currSorted.slug];

    if (!prevChallenge || !currChallenge || !prevChallenge.completedAt || !currChallenge.completedAt) continue;

    const prevDate = new Date(prevChallenge.completedAt);
    const currDate = new Date(currChallenge.completedAt);

    prevDate.setHours(0, 0, 0, 0);
    currDate.setHours(0, 0, 0, 0);

    const diffDays = Math.floor((prevDate.getTime() - currDate.getTime()) / (1000 * 60 * 60 * 24));

    if (diffDays === 1) {
      streak++;
    } else {
      break;
    }
  }
  
  return streak;
}