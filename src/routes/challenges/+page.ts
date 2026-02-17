import type { PageLoad } from './$types';
import type { Challenge } from '$lib/utils/challengeUtils';

export const load: PageLoad = async () => {
	try {
		const challengeFiles = import.meta.glob('$lib/data/challenges/**/*.md', { eager: true });

		const challenges: Challenge[] = [];

		for (const path in challengeFiles) {
			const mod: any = challengeFiles[path];
			const pathParts = path.split('/');
			const fileName = pathParts.pop()?.replace('.md', '') || '';
			const type = pathParts[pathParts.length - 1] || 'daily';
			const member = pathParts[pathParts.length - 2] || 'unknown';
			const metadata = mod.metadata || {};

			// Parse date properly, handling YYYY-MM-DD format
			let unlockDate: string =
				metadata.unlockDate || metadata.dateAdded || new Date().toISOString().split('T')[0];

			if (/^\d{4}-\d{2}-\d{2}$/.test(unlockDate)) {
				const [year, month, day] = unlockDate.split('-').map(Number);
				const dateObj = new Date(year!, month! - 1, day!);
				unlockDate = dateObj.toISOString();
			}

			challenges.push({
				slug: fileName,
				title: metadata.title || fileName,
				member,
				type: type as 'daily' | 'weekly' | 'monthly',
				description: metadata.description || '',
				difficulty: metadata.difficulty || 'intermediate',
				unit: metadata.unit || '',
				week: metadata.week || null,
				day: metadata.day || null,
				month: metadata.month || null,
				unlockDate,
				technologies: metadata.technologies || [],
				learningOutcomes: metadata.learningOutcomes || [],
				estimatedTime: metadata.estimatedTime || '',
				dateAdded: metadata.dateAdded || new Date().toISOString().split('T')[0],
				// ✅ Completion state comes entirely from markdown frontmatter
				completed: metadata.completed === true,
				completedDate: metadata.completedDate || null
			});
		}

		const groupedChallenges = challenges.reduce(
			(acc: Record<string, Record<string, Challenge[]>>, challenge) => {
				if (!acc[challenge.member]) acc[challenge.member] = {};
				const mg = acc[challenge.member]!;
				if (!mg[challenge.type]) mg[challenge.type] = [];
				mg[challenge.type]!.push(challenge);
				return acc;
			},
			{}
		);

		// Sort each group
		for (const member of Object.keys(groupedChallenges)) {
			const memberChallenges = groupedChallenges[member]!;
			for (const type of Object.keys(memberChallenges)) {
				const arr = memberChallenges[type];
				if (arr) {
					arr.sort((a, b) => {
						if (type === 'daily') return (a.day || 0) - (b.day || 0);
						if (type === 'weekly') return (a.week || 0) - (b.week || 0);
						if (type === 'monthly') return (a.month || 0) - (b.month || 0);
						return 0;
					});
				}
			}
		}

		return {
			challenges,
			groupedChallenges,
			meta: {
				title: 'KCA Hack Club Challenges – Feb 9 to Apr 10, 2026',
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