import type { PageLoad } from './$types';
import { 
	getChallengeBySlug, 
	getPreviousChallenge, 
	getNextChallenge, 
	getRelatedChallenges 
} from '$lib/data/challenges/loader';
import { error } from '@sveltejs/kit';

export const load: PageLoad = async ({ params }) => {
	const challenge = getChallengeBySlug(params.slug, 'weekly');
	
	if (!challenge) {
		throw error(404, { message: 'Challenge not found' });
	}
	
	const previousChallenge = getPreviousChallenge(params.slug, 'weekly');
	const nextChallenge = getNextChallenge(params.slug, 'weekly');
	const relatedChallenges = getRelatedChallenges(params.slug, 'weekly', 3);
	
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