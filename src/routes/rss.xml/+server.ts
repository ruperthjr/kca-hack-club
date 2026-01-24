import type { RequestHandler } from './$types';
import type { BlogPost, Challenge } from '$utils/blog';

const siteUrl = 'https://kcahackclub.vercel.app';
const siteTitle = 'KCA Hack Club';
const siteDescription = 'Build. Learn. Innovate.';

function escapeXml(unsafe: string): string {
	return unsafe
		.replace(/&/g, '&amp;')
		.replace(/</g, '&lt;')
		.replace(/>/g, '&gt;')
		.replace(/"/g, '&quot;')
		.replace(/'/g, '&apos;');
}

function generateRssItem(item: {
	title: string;
	link: string;
	description: string;
	pubDate: string;
	category?: string;
}): string {
	return `
		<item>
			<title>${escapeXml(item.title)}</title>
			<link>${escapeXml(item.link)}</link>
			<description>${escapeXml(item.description)}</description>
			<pubDate>${new Date(item.pubDate).toUTCString()}</pubDate>
			<guid>${escapeXml(item.link)}</guid>
			${item.category ? `<category>${escapeXml(item.category)}</category>` : ''}
		</item>
	`.trim();
}

export const GET: RequestHandler = async () => {
	const blogFiles = import.meta.glob('/src/lib/content/blog/*.md', { eager: true });
	const challengeFiles = import.meta.glob('/src/lib/content/challenges/*.md', { eager: true });
	
	const blogPosts: BlogPost[] = [];
	for (const path in blogFiles) {
		const file = blogFiles[path] as {
			metadata: BlogPost;
		};
		
		if (file.metadata.published !== false) {
			const slug = path.split('/').pop()?.replace('.md', '') || '';
			blogPosts.push({
				...file.metadata,
				slug
			});
		}
	}
	
	const challenges: Challenge[] = [];
	for (const path in challengeFiles) {
		const file = challengeFiles[path] as {
			metadata: Omit<Challenge, 'content'>;
		};
		
		const slug = path.split('/').pop()?.replace('.md', '') || '';
		challenges.push({
			...file.metadata,
			slug,
			content: ''
		});
	}
	
	const allItems = [
		...blogPosts.map(post => ({
			title: post.title,
			link: `${siteUrl}/blog/${post.slug}`,
			description: post.description,
			pubDate: post.date,
			category: post.category || 'Blog'
		})),
		...challenges.map(challenge => ({
			title: challenge.title,
			link: `${siteUrl}/challenges/${challenge.slug}`,
			description: `${challenge.difficulty} challenge - ${challenge.points || 0} points`,
			pubDate: challenge.startDate,
			category: 'Challenge'
		}))
	].sort((a, b) => new Date(b.pubDate).getTime() - new Date(a.pubDate).getTime());
	
	const rssItems = allItems.map(generateRssItem).join('\n');
	
	const rss = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
	<channel>
		<title>${escapeXml(siteTitle)}</title>
		<description>${escapeXml(siteDescription)}</description>
		<link>${siteUrl}</link>
		<atom:link href="${siteUrl}/rss.xml" rel="self" type="application/rss+xml" />
		<language>en-us</language>
		<lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
		<generator>SvelteKit</generator>
		<image>
			<url>${siteUrl}/og-image.png</url>
			<title>${escapeXml(siteTitle)}</title>
			<link>${siteUrl}</link>
		</image>
${rssItems}
	</channel>
</rss>`.trim();
	
	return new Response(rss, {
		headers: {
			'Content-Type': 'application/xml',
			'Cache-Control': 'max-age=0, s-maxage=3600'
		}
	});
};