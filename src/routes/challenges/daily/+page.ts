import type { Challenge } from '$utils/blog';

export const load = async () => {
	const dailyChallenges: Challenge[] = [
		{
			slug: 'day-1-reverse-string',
			title: 'Day 1: Reverse a String',
			startDate: '2026-01-01',
			endDate: '2026-01-01',
			difficulty: 'beginner',
			points: 10,
			category: 'strings',
			content: 'Write a function to reverse a string'
		}
	];

	return {
		challenges: dailyChallenges,
		meta: {
			title: 'Daily Challenges - KCA Hack Club',
			description: 'Complete a new coding challenge every day'
		}
	};
};