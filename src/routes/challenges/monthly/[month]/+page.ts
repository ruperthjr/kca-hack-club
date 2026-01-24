import type { Challenge } from '$utils/blog';

export const load = async ({ params }) => {
	const monthSlug = params.month;
	
	const challenge: Challenge = {
		slug: monthSlug,
		title: 'January 2026: Full-Stack E-Commerce Platform',
		month: 'January',
		year: 2026,
		startDate: '2026-01-26',
		endDate: '2026-01-31',
		difficulty: 'advanced',
		points: 500,
		category: 'full-stack',
		content: `# Monthly Challenge: Full-Stack E-Commerce Platform

## Overview
Build a complete e-commerce platform from scratch with modern technologies.

## Core Features
- User authentication and authorization
- Product catalog with search and filters
- Shopping cart functionality
- Payment integration
- Order management
- Admin dashboard

## Technical Requirements
- Frontend: React, Vue, or Svelte
- Backend: Node.js, Python, or Go
- Database: PostgreSQL or MongoDB
- Payment: Stripe or PayPal integration
- Deployment: Vercel, Netlify, or AWS

## Bonus Features
- Real-time notifications
- Email service integration
- Analytics dashboard
- Mobile responsive design

## Submission Guidelines
1. Push code to GitHub
2. Deploy application
3. Create demo video
4. Write comprehensive README
5. Submit by January 31, 2026

## Prizes
- First Place: 500 points + Featured on website
- Second Place: 300 points
- Third Place: 200 points
- All Participants: 100 points for completion`
	};

	return {
		monthSlug,
		challenge,
		meta: {
			title: `${challenge.month} ${challenge.year} Challenge - KCA Hack Club`,
			description: `Complete the ${challenge.month} monthly coding challenge`
		}
	};
};