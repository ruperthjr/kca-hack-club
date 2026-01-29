import type { PageLoad } from './$types';
import { getChallengeBySlug, loadChallenges } from '$lib/data/challenges/loader';
import { error } from '@sveltejs/kit';

export const load: PageLoad = async ({ params }) => {
	const challenge = getChallengeBySlug(params.slug, 'daily');
	
	if (!challenge) {
		throw error(404, {
			message: 'Challenge not found'
		});
	}
	
	const allDailyChallenges = loadChallenges('daily');
	const currentIndex = allDailyChallenges.findIndex(c => c.slug === params.slug);
	
	const relatedChallenges = allDailyChallenges
		.filter(c => 
			c.slug !== params.slug && (
				c.difficulty === challenge.difficulty ||
				c.skills.some(skill => challenge.skills.includes(skill))
			)
		)
		.slice(0, 3);
	
	const previousChallenge = currentIndex > 0 ? allDailyChallenges[currentIndex - 1] : null;
	const nextChallenge = currentIndex < allDailyChallenges.length - 1 ? allDailyChallenges[currentIndex + 1] : null;
	
	return {
		challenge,
		relatedChallenges,
		previousChallenge,
		nextChallenge,
		meta: {
			title: `${challenge.title} - Daily Challenge`,
			description: challenge.description
		}
	};
};