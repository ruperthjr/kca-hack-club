export const load = async () => {
	const hackathons = [
		{
			slug: 'web3-hackathon',
			title: 'Web3 Innovation Hackathon',
			date: '2026-02-20',
			endDate: '2026-02-22',
			location: 'Virtual',
			prize: 'KSh 50,000',
			description: 'Build decentralized applications and explore blockchain technology',
			status: 'upcoming' as const
		},
		{
			slug: 'ai-challenge-2025',
			title: 'AI Challenge 2025',
			date: '2026-01-10',
			endDate: '2026-01-12',
			location: 'Innovation Hub Nairobi',
			prize: 'KSh 75,000',
			description: 'Competed in AI/ML projects with industry mentors',
			status: 'past' as const
		}
	];

	return {
		hackathons,
		meta: {
			title: 'Hackathons - KCA Hack Club',
			description: 'Join exciting hackathons and compete with the best developers'
		}
	};
};