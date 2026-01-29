import type { PageLoad } from './$types';
import { getChallengeBySlug, loadChallenges } from '$lib/data/challenges/loader';
import { error } from '@sveltejs/kit';

export const load: PageLoad = async ({ params }) => {
	const challenge = getChallengeBySlug(params.slug, 'monthly');
	
	if (!challenge) {
		throw error(404, { message: 'Challenge not found' });
	}
	
	const allMonthlyChallenges = loadChallenges('monthly');
	const currentIndex = allMonthlyChallenges.findIndex(c => c.slug === params.slug);
	
	const relatedChallenges = allMonthlyChallenges
		.filter(c => 
			c.slug !== params.slug && (
				c.difficulty === challenge.difficulty ||
				c.skills.some(skill => challenge.skills.includes(skill))
			)
		)
		.slice(0, 3);
	
	const previousChallenge = currentIndex > 0 ? allMonthlyChallenges[currentIndex - 1] : null;
	const nextChallenge = currentIndex < allMonthlyChallenges.length - 1 ? allMonthlyChallenges[currentIndex + 1] : null;
	
	return {
		challenge,
		relatedChallenges,
		previousChallenge,
		nextChallenge,
		meta: {
			title: `${challenge.title} - Monthly Challenge`,
			description: challenge.description
		}
	};
};