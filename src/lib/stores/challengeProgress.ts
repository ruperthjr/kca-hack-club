import { writable, derived } from 'svelte/store';
import { browser } from '$app/environment';

export interface ChallengeProgress {
  [challengeSlug: string]: {
    completed: boolean;
    completedAt?: string;
    lastVisited?: string;
  };
}

function createChallengeProgressStore() {
  const storedProgress = browser 
    ? localStorage.getItem('challengeProgress') 
    : null;
  
  const initialProgress: ChallengeProgress = storedProgress 
    ? JSON.parse(storedProgress) 
    : {};

  const { subscribe, set, update } = writable<ChallengeProgress>(initialProgress);

  return {
    subscribe,
    markComplete: (slug: string) => {
      update(progress => {
        const newProgress = {
          ...progress,
          [slug]: {
            completed: true,
            completedAt: new Date().toISOString(),
            lastVisited: new Date().toISOString()
          }
        };
        if (browser) {
          localStorage.setItem('challengeProgress', JSON.stringify(newProgress));
        }
        return newProgress;
      });
    },
    markIncomplete: (slug: string) => {
      update(progress => {
        const newProgress = { ...progress };
        if (newProgress[slug]) {
          newProgress[slug].completed = false;
          delete newProgress[slug].completedAt;
        }
        if (browser) {
          localStorage.setItem('challengeProgress', JSON.stringify(newProgress));
        }
        return newProgress;
      });
    },
    updateLastVisited: (slug: string) => {
      update(progress => {
        const newProgress = {
          ...progress,
          [slug]: {
            ...(progress[slug] || { completed: false }),
            lastVisited: new Date().toISOString()
          }
        };
        if (browser) {
          localStorage.setItem('challengeProgress', JSON.stringify(newProgress));
        }
        return newProgress;
      });
    },
    reset: () => {
      set({});
      if (browser) {
        localStorage.removeItem('challengeProgress');
      }
    }
  };
}

export const challengeProgress = createChallengeProgressStore();

export const completionStats = derived(challengeProgress, ($progress) => {
  const total = Object.keys($progress).length;
  const completed = Object.values($progress).filter(p => p.completed).length;
  return {
    total,
    completed,
    percentage: total > 0 ? Math.round((completed / total) * 100) : 0
  };
});