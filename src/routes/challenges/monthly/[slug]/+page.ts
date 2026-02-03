import type { PageLoad } from './$types';
import { 
	getChallengeBySlug, 
	getPreviousChallenge, 
	getNextChallenge, 
	getRelatedChallenges 
} from '$lib/data/challenges/loader';
import { error } from '@sveltejs/kit';

export const load: PageLoad = async ({ params }) => {
	const challenge = getChallengeBySlug(params.slug, 'monthly');
	
	if (!challenge) {
		throw error(404, { message: 'Challenge not found' });
	}
	
	const previousChallenge = getPreviousChallenge(params.slug, 'monthly');
	const nextChallenge = getNextChallenge(params.slug, 'monthly');
	const relatedChallenges = getRelatedChallenges(params.slug, 'monthly', 3);
	
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