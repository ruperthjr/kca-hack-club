export interface MetaData {
	title: string;
	description: string;
	keywords?: string[];
	author?: string;
	image?: string;
	url?: string;
	type?: 'website' | 'article' | 'profile';
	publishedTime?: string;
	modifiedTime?: string;
	section?: string;
	tags?: string[];
}

export function generateMetaTags(data: MetaData) {
	const baseUrl = 'https://kcahackclub.vercel.app';
	const defaultImage = `${baseUrl}/og-image.png`;

	return {
		title: data.title,
		description: data.description,
		keywords: data.keywords?.join(', ') || '',
		
		openGraph: {
			type: data.type || 'website',
			url: data.url || baseUrl,
			title: data.title,
			description: data.description,
			image: data.image || defaultImage,
			siteName: 'KCA Hack Club',
			...(data.publishedTime && { publishedTime: data.publishedTime }),
			...(data.modifiedTime && { modifiedTime: data.modifiedTime }),
			...(data.section && { section: data.section }),
			...(data.tags && { tags: data.tags })
		},
		
		twitter: {
			card: 'summary_large_image',
			title: data.title,
			description: data.description,
			image: data.image || defaultImage,
			creator: '@KCAHackClub'
		}
	};
}

export function generateJsonLd(type: string, data: Record<string, unknown>) {
	return {
		'@context': 'https://schema.org',
		'@type': type,
		...data
	};
}

export function createBreadcrumbs(path: string) {
	const segments = path.split('/').filter(Boolean);
	return segments.map((segment, index) => ({
		name: segment.charAt(0).toUpperCase() + segment.slice(1),
		path: '/' + segments.slice(0, index + 1).join('/')
	}));
}