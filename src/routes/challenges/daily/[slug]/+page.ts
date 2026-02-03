import type { PageLoad } from './$types';
import { 
	getChallengeBySlug, 
	getPreviousChallenge, 
	getNextChallenge, 
	getRelatedChallenges 
} from '$lib/data/challenges/loader';
import { error } from '@sveltejs/kit';

export const load: PageLoad = async ({ params }) => {
	const challenge = getChallengeBySlug(params.slug, 'daily');
	
	if (!challenge) {
		throw error(404, {
			message: 'Challenge not found'
		});
	}
	
	const previousChallenge = getPreviousChallenge(params.slug, 'daily');
	const nextChallenge = getNextChallenge(params.slug, 'daily');
	const relatedChallenges = getRelatedChallenges(params.slug, 'daily', 3);
	
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