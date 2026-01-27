import type { PageLoad } from './$types';
import { error } from '@sveltejs/kit';

export const load: PageLoad = async ({ params }) => {
	const { slug } = params;

	try {
		// Use import.meta.glob to get all resource files
		const resourceFiles = import.meta.glob('$lib/data/resources/*.md', { eager: true });
		
		// Find the specific resource file
		let resourceModule: any = null;
		let ResourceComponent: any = null;
		
		for (const path in resourceFiles) {
			const fileName = path.split('/').pop()?.replace('.md', '');
			if (fileName === slug) {
				resourceModule = resourceFiles[path];
				ResourceComponent = resourceModule.default;
				break;
			}
		}
		
		if (!resourceModule) {
			throw error(404, `Resource "${slug}" not found`);
		}
		
		// Extract frontmatter metadata
		const metadata = resourceModule.metadata || {};
		
		// Build the resource object
		const resource = {
			slug,
			title: metadata.title || slug,
			category: metadata.category || 'general',
			subcategory: metadata.subcategory || 'Uncategorized',
			description: metadata.description || '',
			units: metadata.units || [],
			recommendedFor: metadata.recommendedFor || [],
			links: metadata.links || [],
			lastUpdated: metadata.lastUpdated || new Date().toISOString().split('T')[0],
			component: ResourceComponent
		};

		return {
			resource,
			meta: {
				title: `${resource.title} - KCA Hack Club Resources`,
				description: resource.description
			}
		};
	} catch (e) {
		console.error('Error loading resource:', e);
		throw error(404, `Resource "${slug}" not found`);
	}
};