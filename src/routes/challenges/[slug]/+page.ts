import type { PageLoad } from './$types';
import { error } from '@sveltejs/kit';

export const load: PageLoad = async ({ params }) => {
	const { slug } = params;

	try {
		const challengeFiles = import.meta.glob('$lib/data/challenges/**/*.md', { eager: true });
		
		let challengeModule: any = null;
		let ChallengeComponent: any = null;
		let member = '';
		let type = '';
		
		for (const path in challengeFiles) {
			const fileName = path.split('/').pop()?.replace('.md', '') || '';
			if (fileName === slug) {
				challengeModule = challengeFiles[path];
				ChallengeComponent = challengeModule.default;
				const pathParts = path.split('/');
				type = pathParts[pathParts.length - 2] || 'daily';
				member = pathParts[pathParts.length - 3] || 'unknown';
				break;
			}
		}
		
		if (!challengeModule) {
			throw error(404, `Challenge "${slug}" not found`);
		}
		
		const metadata = challengeModule.metadata || {};
		
		const challenge = {
			slug,
			title: metadata.title || slug,
			member: member,
			type: type,
			description: metadata.description || '',
			difficulty: metadata.difficulty || 'intermediate',
			unit: metadata.unit || '',
			week: metadata.week || null,
			day: metadata.day || null,
			month: metadata.month || null,
			technologies: metadata.technologies || [],
			learningOutcomes: metadata.learningOutcomes || [],
			estimatedTime: metadata.estimatedTime || '',
			requirements: metadata.requirements || [],
			deliverables: metadata.deliverables || [],
			resources: metadata.resources || [],
			dateAdded: metadata.dateAdded || new Date().toISOString().split('T')[0],
			component: ChallengeComponent
		};

		return {
			challenge,
			meta: {
				title: `${challenge.title} - KCA Hack Club Challenges`,
				description: challenge.description
			}
		};
	} catch (e) {
		console.error('Error loading challenge:', e);
		throw error(404, `Challenge "${slug}" not found`);
	}
};