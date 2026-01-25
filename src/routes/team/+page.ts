import type { Load } from '@sveltejs/kit';
import type { TeamMember } from '$utils/blog';

export const load: Load = async () => {
	// Import all markdown files from the team directory using the $lib alias
	const memberFiles = import.meta.glob('$lib/data/team/*.md', { eager: true });
	
	console.log('Team page - Available files:', Object.keys(memberFiles));
	
	const team: TeamMember[] = [];

	// Load each member file
	for (const path in memberFiles) {
		const memberModule = memberFiles[path] as any;
		const metadata = memberModule.metadata || {};
		
		// Extract slug from file path (e.g., '$lib/data/team/ruperth.md' -> 'ruperth')
		const slug = path.split('/').pop()?.replace('.md', '') || '';
		
		console.log(`Processing ${slug}:`, metadata);
		
		const member: TeamMember = {
			slug,
			name: metadata.name || slug,
			role: metadata.role || 'Team Member',
			year: metadata.year || 1,
			github: metadata.github || '',
			linkedin: metadata.linkedin || '',
			email: metadata.email || '',
			avatar: metadata.avatar || '',
			bio: metadata.bio || '',
			joinedDate: metadata.joinedDate || new Date().toISOString().split('T')[0],
			skills: metadata.skills || [],
			content: '' // We don't need full content for the listing page
		};

		team.push(member);
	}

	// Sort team members by joined date (newest first)
	team.sort((a, b) => new Date(b.joinedDate).getTime() - new Date(a.joinedDate).getTime());

	console.log('Final team array:', team);

	return {
		team,
		meta: {
			title: 'Team - KCA Hack Club',
			description: 'Meet the amazing people behind KCA Hack Club'
		}
	};
};