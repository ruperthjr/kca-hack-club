import type { PageLoad } from './$types';

export const load: PageLoad = async () => {
	try {
		const resourceFiles = import.meta.glob('$lib/data/resources/*.md', { eager: true });
		
		const resources: any[] = [];
		
		for (const path in resourceFiles) {
			const resourceModule: any = resourceFiles[path];
			const fileName = path.split('/').pop()?.replace('.md', '');
			const metadata = resourceModule.metadata || {};
			
			resources.push({
				slug: fileName,
				title: metadata.title || fileName,
				category: metadata.category || 'general',
				subcategory: metadata.subcategory || 'Uncategorized',
				description: metadata.description || '',
				units: metadata.units || [],
				recommendedFor: metadata.recommendedFor || [],
				links: metadata.links || [],
				lastUpdated: metadata.lastUpdated || new Date().toISOString().split('T')[0]
			});
		}

		const groupedResources = resources.reduce((acc: Record<string, any[]>, resource) => {
			(acc[resource.category] ||= []).push(resource);
			return acc;
		}, {} as Record<string, any[]>);

		return {
			resources,
			groupedResources,
			meta: {
				title: 'Learning Resources - KCA Hack Club',
				description: 'Collection of books, courses, tools, and resources for mastering computer science and programming'
			}
		};
	} catch (e) {
		console.error('Error loading resources:', e);
		return {
			resources: [],
			groupedResources: {},
			meta: {
				title: 'Learning Resources - KCA Hack Club',
				description: 'Collection of resources'
			}
		};
	}
};