import type { Challenge } from '$utils/blog';

export const load = async ({ params }) => {
	const weekNumber = params.week;
	
	const challenge: Challenge = {
		slug: `week-${weekNumber}-challenge`,
		title: `Week ${weekNumber}: Advanced Web Application`,
		week: parseInt(weekNumber),
		startDate: '2026-01-20',
		endDate: '2026-01-26',
		difficulty: 'intermediate',
		points: 200,
		category: 'web-development',
		content: `# Week ${weekNumber} Challenge

## Objective
Build a complete web application with the following features:

- User authentication
- CRUD operations
- Responsive design
- API integration

## Requirements
1. Use modern web technologies
2. Implement proper error handling
3. Write clean, maintainable code
4. Deploy your application

## Submission
Submit your project via GitHub and include a live demo link.

## Evaluation Criteria
- Functionality (40%)
- Code Quality (30%)
- Design (20%)
- Documentation (10%)`
	};

	return {
		weekNumber,
		challenge,
		meta: {
			title: `Week ${weekNumber} Challenge - KCA Hack Club`,
			description: `Complete the week ${weekNumber} coding challenge`
		}
	};
};