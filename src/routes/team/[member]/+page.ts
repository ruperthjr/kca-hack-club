import type { PageLoad } from './$types';
import type { TeamMember } from '$utils/blog';
import { error } from '@sveltejs/kit';

export const load: PageLoad = async ({ params }) => {
	const { member: memberSlug } = params;

	try {
		// Use import.meta.glob to get all team member files
		const memberFiles = import.meta.glob('$lib/data/team/*.md', { eager: true });
		
		// Debug: log available files
		console.log('Available files:', Object.keys(memberFiles));
		console.log('Looking for:', memberSlug);
		
		// Find the specific member file - try different path formats
		let memberModule: any = null;
		
		// Try to find the file with different path patterns
		for (const path in memberFiles) {
			const fileName = path.split('/').pop()?.replace('.md', '');
			console.log('Checking file:', fileName, 'against', memberSlug);
			
			if (fileName === memberSlug) {
				memberModule = memberFiles[path];
				console.log('Found match!', path);
				break;
			}
		}
		
		if (!memberModule) {
			console.error(`No module found for ${memberSlug}`);
			console.log('Available modules:', Object.keys(memberFiles));
			throw error(404, `Team member "${memberSlug}" not found`);
		}
		
		// Extract frontmatter metadata
		const metadata = memberModule.metadata || {};
		console.log('Metadata:', metadata);
		
		// Build the TeamMember object from the markdown frontmatter and content
		const member: TeamMember = {
			slug: memberSlug,
			name: metadata.name || memberSlug,
			role: metadata.role || 'Team Member',
			year: metadata.year || 1,
			github: metadata.github || '',
			linkedin: metadata.linkedin || '',
			email: metadata.email || '',
			avatar: metadata.avatar || '',
			bio: metadata.bio || '',
			joinedDate: metadata.joinedDate || new Date().toISOString().split('T')[0],
			skills: metadata.skills || [],
			content: memberModule.default?.render ? memberModule.default.render().html : ''
		};

		console.log('Final member object:', member);

		return {
			member,
			meta: {
				title: `${member.name} - KCA Hack Club Team`,
				description: member.bio
			}
		};
	} catch (e) {
		console.error('Error loading member:', e);
		throw error(404, `Team member "${memberSlug}" not found - ${e}`);
	}
};