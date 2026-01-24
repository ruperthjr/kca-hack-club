import type { Resource } from '$utils/blog';

export const load = async () => {
	const resources: Resource[] = [
		{
			slug: 'programming-books',
			title: 'Programming Books Collection',
			category: 'books',
			subcategory: 'Programming',
			lastUpdated: '2026-01-15',
			content: 'Essential programming books for every developer'
		},
		{
			slug: 'web-dev-tools',
			title: 'Web Development Tools',
			category: 'tools',
			subcategory: 'Development',
			lastUpdated: '2026-01-20',
			content: 'Must-have tools for web developers'
		},
		{
			slug: 'online-courses',
			title: 'Free Online Courses',
			category: 'courses',
			subcategory: 'Learning',
			lastUpdated: '2026-01-10',
			content: 'Top free courses to enhance your skills'
		},
		{
			slug: 'google-drive-resources',
			title: 'Shared Drive Resources',
			category: 'drive',
			subcategory: 'Files',
			lastUpdated: '2026-01-22',
			content: 'Access our shared learning materials'
		},
		{
			slug: 'youtube-channels',
			title: 'Programming YouTube Channels',
			category: 'youtube',
			subcategory: 'Video',
			lastUpdated: '2026-01-18',
			content: 'Best YouTube channels for learning to code'
		}
	];

	return {
		resources,
		meta: {
			title: 'Resources - KCA Hack Club',
			description: 'Access our curated collection of learning resources'
		}
	};
};