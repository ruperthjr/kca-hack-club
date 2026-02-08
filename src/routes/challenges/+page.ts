// src/routes/challenges/+page.ts
import type { PageLoad } from './$types';
import type { Challenge } from '$lib/utils/challengeUtils';

export const load: PageLoad = async () => {
	try {
		const challengeFiles = import.meta.glob('$lib/data/challenges/**/*.md', { eager: true });
		
		const challenges: Challenge[] = [];
		
		for (const path in challengeFiles) {
			const challengeModule: any = challengeFiles[path];
			const pathParts = path.split('/');
			const fileName = pathParts.pop()?.replace('.md', '') || '';
			const type = pathParts[pathParts.length - 1] || 'daily';
			const member = pathParts[pathParts.length - 2] || 'unknown';
			const metadata = challengeModule.metadata || {};
			
			challenges.push({
				slug: fileName,
				title: metadata.title || fileName,
				member: member,
				type: type as 'daily' | 'weekly' | 'monthly',
				description: metadata.description || '',
				difficulty: metadata.difficulty || 'intermediate',
				unit: metadata.unit || '',
				week: metadata.week || null,
				day: metadata.day || null,
				month: metadata.month || null,
				unlockDate: metadata.unlockDate || metadata.dateAdded || new Date().toISOString().split('T')[0],
				technologies: metadata.technologies || [],
				learningOutcomes: metadata.learningOutcomes || [],
				estimatedTime: metadata.estimatedTime || '',
				dateAdded: metadata.dateAdded || new Date().toISOString().split('T')[0]
			});
		}

		const groupedChallenges = challenges.reduce((acc: Record<string, Record<string, Challenge[]>>, challenge) => {
			if (!acc[challenge.member]) {
				acc[challenge.member] = {};
			}
			const memberGroup = acc[challenge.member]!;
			if (!memberGroup[challenge.type]) {
				memberGroup[challenge.type] = [];
			}
			memberGroup[challenge.type]!.push(challenge);
			return acc;
		}, {} as Record<string, Record<string, Challenge[]>>);

		Object.keys(groupedChallenges).forEach(member => {
			const memberChallenges = groupedChallenges[member];
			if (memberChallenges) {
				Object.keys(memberChallenges).forEach(type => {
					const typeChallenges = memberChallenges[type];
					if (typeChallenges) {
						typeChallenges.sort((a, b) => {
							if (type === 'daily') return (a.day || 0) - (b.day || 0);
							if (type === 'weekly') return (a.week || 0) - (b.week || 0);
							if (type === 'monthly') return (a.month || 0) - (b.month || 0);
							return 0;
						});
					}
				});
			}
		});

		return {
			challenges,
			groupedChallenges,
			meta: {
				title: 'KCA Hack Club Challenges - Feb 9 to Apr 10, 2026',
				description: 'Daily, weekly, and monthly coding challenges for all team members'
			}
		};
	} catch (e) {
		console.error('Error loading challenges:', e);
		return {
			challenges: [],
			groupedChallenges: {},
			meta: {
				title: 'KCA Hack Club Challenges',
				description: 'Coding challenges for team members'
			}
		};
	}
};