import type { PageLoad } from './$types';
import { loadChallenges } from '$lib/data/challenges/loader';
import { error } from '@sveltejs/kit';

export const load: PageLoad = async ({ params }) => {
	const allWeeklyChallenges = await loadChallenges('weekly');
	const challenge = allWeeklyChallenges.find(c => c.slug === params.slug);
	
	if (!challenge) {
		throw error(404, { message: 'Challenge not found' });
	}
	
	const currentIndex = allWeeklyChallenges.findIndex(c => c.slug === params.slug);
	
	const relatedChallenges = allWeeklyChallenges
		.filter(c => 
			c.slug !== params.slug && (
				c.difficulty === challenge.difficulty ||
				c.skills.some(skill => challenge.skills.includes(skill))
			)
		)
		.slice(0, 3);
	
	const previousChallenge = currentIndex > 0 ? allWeeklyChallenges[currentIndex - 1] : null;
	const nextChallenge = currentIndex < allWeeklyChallenges.length - 1 ? allWeeklyChallenges[currentIndex + 1] : null;
	
	return {
		challenge,
		relatedChallenges,
		previousChallenge,
		nextChallenge,
		meta: {
			title: `${challenge.title} - Weekly Challenge`,
			description: challenge.description
		}
	};
};
