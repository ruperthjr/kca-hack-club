import type { Challenge } from '$utils/blog';

export const load = async () => {
	const monthlyChallenges: Challenge[] = [
		{
			slug: 'january-2026-fullstack',
			title: 'January: Full-Stack Application',
			month: 'January',
			year: 2026,
			startDate: '2026-01-01',
			endDate: '2026-01-31',
			difficulty: 'advanced',
			points: 500,
			category: 'full-stack',
			content: 'Build a complete full-stack application from scratch'
		},
		{
			slug: 'february-2026-mobile',
			title: 'February: Mobile App Development',
			month: 'February',
			year: 2026,
			startDate: '2026-02-01',
			endDate: '2026-02-28',
			difficulty: 'advanced',
			points: 500,
			category: 'mobile',
			content: 'Create a cross-platform mobile application'
		}
	];

	return {
		challenges: monthlyChallenges,
		meta: {
			title: 'Monthly Challenges - KCA Hack Club',
			description: 'Take on month-long projects and build impressive portfolios'
		}
	};
};