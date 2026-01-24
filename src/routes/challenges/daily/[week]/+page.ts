import type { Challenge } from '$utils/blog';

export const load = async ({ params }) => {
	const weekNumber = params.week;
	
	const challenges: Challenge[] = [
		{
			slug: `week-${weekNumber}-day-1`,
			title: `Week ${weekNumber} - Day 1: Array Manipulation`,
			startDate: '2026-01-26',
			endDate: '2026-01-26',
			difficulty: 'beginner',
			points: 10,
			category: 'arrays',
			content: 'Learn array manipulation techniques'
		}
	];

	return {
		weekNumber,
		challenges,
		meta: {
			title: `Week ${weekNumber} Daily Challenges - KCA Hack Club`,
			description: `Complete daily challenges for week ${weekNumber}`
		}
	};
};