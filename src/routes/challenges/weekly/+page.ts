import type { Challenge } from '$utils/blog';

export const load = async () => {
	const weeklyChallenges: Challenge[] = [
		{
			slug: 'week-1-todo-app',
			title: 'Week 1: Build a Todo App',
			week: 1,
			startDate: '2026-01-06',
			endDate: '2026-01-12',
			difficulty: 'beginner',
			points: 100,
			category: 'web-development',
			content: 'Create a fully functional todo application'
		}
	];

	return {
		challenges: weeklyChallenges,
		meta: {
			title: 'Weekly Challenges - KCA Hack Club',
			description: 'Take on weekly coding projects and build real applications'
		}
	};
};