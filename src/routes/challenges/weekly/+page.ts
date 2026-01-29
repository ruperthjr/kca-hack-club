import type { PageLoad } from './$types';
import { loadChallenges } from '$lib/data/challenges/loader';

export const load: PageLoad = async () => {
	const challenges = await loadChallenges('weekly');
	
	const byDifficulty = {
		beginner: challenges.filter(c => c.difficulty === 'beginner'),
		intermediate: challenges.filter(c => c.difficulty === 'intermediate'),
		advanced: challenges.filter(c => c.difficulty === 'advanced')
	};
	
	return {
		challenges,
		byDifficulty,
		meta: {
			title: 'Weekly Challenges - KCA Hack Club',
			description: 'Complete project challenges to build real-world applications'
		}
	};
};