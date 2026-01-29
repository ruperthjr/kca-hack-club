// src/routes/challenges/+page.ts
import type { PageLoad } from './$types';
import { loadAllChallenges } from '$lib/data/challenges/loader';

export const load: PageLoad = async () => {
	const challenges = await loadAllChallenges();
	
	const daily = challenges.filter(c => c.category === 'daily');
	const weekly = challenges.filter(c => c.category === 'weekly');
	const monthly = challenges.filter(c => c.category === 'monthly');
	
	const difficultyBreakdown = {
		beginner: challenges.filter(c => c.difficulty === 'beginner').length,
		intermediate: challenges.filter(c => c.difficulty === 'intermediate').length,
		advanced: challenges.filter(c => c.difficulty === 'advanced').length
	};
	
	const teamRecommendations = {
		maryphin: challenges.filter(c => c.recommendedFor.includes('Maryphin')).length,
		pauline: challenges.filter(c => c.recommendedFor.includes('Pauline')).length,
		ruperth: challenges.filter(c => c.recommendedFor.includes('Ruperth')).length,
		daniel: challenges.filter(c => c.recommendedFor.includes('Daniel')).length,
		jasmine: challenges.filter(c => c.recommendedFor.includes('Jasmine')).length
	};
	
	return {
		challenges,
		daily,
		weekly,
		monthly,
		difficultyBreakdown,
		teamRecommendations,
		meta: {
			description: 'Daily, weekly, and monthly coding challenges to level up your programming skills'
		}
	};
};