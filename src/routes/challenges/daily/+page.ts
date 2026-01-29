// src/routes/challenges/daily/+page.ts
import type { PageLoad } from './$types';
import { loadChallenges } from '$lib/data/challenges/loader';

export const load: PageLoad = async () => {
	const challenges = loadChallenges('daily');
	
	const byDifficulty = {
		beginner: challenges.filter(c => c.difficulty === 'beginner'),
		intermediate: challenges.filter(c => c.difficulty === 'intermediate'),
		advanced: challenges.filter(c => c.difficulty === 'advanced')
	};
	
	const skillCategories = challenges.reduce((acc, challenge) => {
		challenge.skills.forEach(skill => {
			if (!acc[skill]) {
				acc[skill] = [];
			}
			acc[skill].push(challenge);
		});
		return acc;
	}, {} as Record<string, typeof challenges>);
	
	return {
		challenges,
		byDifficulty,
		skillCategories,
		meta: {
			title: 'Daily Challenges - KCA Hack Club',
			description: '31 daily coding challenges to build your skills one day at a time'
		}
	};
};