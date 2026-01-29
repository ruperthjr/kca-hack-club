import type { PageLoad } from './$types';
import { loadChallenges } from '$lib/data/challenges/loader';

export const load: PageLoad = async () => {
	const challenges = loadChallenges('monthly');
	
	const byDifficulty = {
		beginner: challenges.filter(c => c.difficulty === 'beginner'),
		intermediate: challenges.filter(c => c.difficulty === 'intermediate'),
		advanced: challenges.filter(c => c.difficulty === 'advanced')
	};
	
	return {
		challenges,
		byDifficulty,
		meta: {
			title: 'Monthly Challenges - KCA Hack Club',
			description: 'Full-stack application challenges for advanced learning'
		}
	};
};
