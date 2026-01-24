import type { Challenge } from '$utils/blog';

export const load = async () => {
	const challenges: Challenge[] = [
		{
			slug: 'daily-code-jan-2026',
			title: 'Daily Coding Challenge',
			startDate: '2026-01-01',
			endDate: '2026-01-31',
			difficulty: 'beginner',
			points: 100,
			category: 'algorithms',
			content: 'Complete a new coding challenge every day'
		}
	];

	return {
		challenges,
		meta: {
			title: 'Challenges - KCA Hack Club',
			description: 'Take on coding challenges and level up your skills'
		}
	};
};