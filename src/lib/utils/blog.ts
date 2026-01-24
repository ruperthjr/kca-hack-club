export interface BlogPost {
	slug: string;
	title: string;
	description: string;
	date: string;
	author: string;
	tags: string[];
	featured?: boolean;
	published?: boolean;
	content?: string;
	readingTime?: string;
	category?: string;
}

export interface Challenge {
	slug: string;
	title: string;
	week?: number;
	month?: string;
	year?: number;
	startDate: string;
	endDate: string;
	difficulty: 'beginner' | 'intermediate' | 'advanced';
	points?: number;
	category?: string;
	content: string;
}

export interface Resource {
	slug: string;
	title: string;
	category: string;
	subcategory?: string;
	icon?: string;
	lastUpdated: string;
	content: string;
}

export interface TeamMember {
	slug: string;
	name: string;
	role: string;
	year: number;
	github?: string;
	linkedin?: string;
	twitter?: string;
	email?: string;
	avatar?: string;
	bio: string;
	joinedDate: string;
	skills?: string[];
	content?: string;
}

export interface Unit {
	slug: string;
	title: string;
	code: string;
	semester: number;
	year: number;
	credits: number;
	lecturer?: string;
	description: string;
	topics: string[];
	icon?: string;
	content: string;
}

export function sortByDate<T extends { date?: string; startDate?: string }>(items: T[]): T[] {
	return items.sort((a, b) => {
		const dateA = new Date(a.date || a.startDate || 0);
		const dateB = new Date(b.date || b.startDate || 0);
		return dateB.getTime() - dateA.getTime();
	});
}

export function filterByTag<T extends { tags?: string[] }>(items: T[], tag: string): T[] {
	return items.filter((item) => item.tags?.includes(tag));
}

export function filterByCategory<T extends { category?: string }>(items: T[], category: string): T[] {
	return items.filter((item) => item.category === category);
}

export function groupByCategory<T extends { category?: string }>(items: T[]): Record<string, T[]> {
	return items.reduce((acc, item) => {
		const category = item.category || 'uncategorized';
		if (!acc[category]) acc[category] = [];
		acc[category].push(item);
		return acc;
	}, {} as Record<string, T[]>);
}

export function groupByMonth<T extends { date?: string; startDate?: string }>(items: T[]): Record<string, T[]> {
	return items.reduce((acc, item) => {
		const date = new Date(item.date || item.startDate || 0);
		const monthYear = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}`;
		if (!acc[monthYear]) acc[monthYear] = [];
		acc[monthYear].push(item);
		return acc;
	}, {} as Record<string, T[]>);
}

export function getFeatured<T extends { featured?: boolean }>(items: T[]): T[] {
	return items.filter((item) => item.featured);
}

export function getPublished<T extends { published?: boolean }>(items: T[]): T[] {
	return items.filter((item) => item.published !== false);
}

export function searchItems<T extends Record<string, unknown>>(
	items: T[],
	query: string,
	fields: (keyof T)[]
): T[] {
	const lowerQuery = query.toLowerCase();
	return items.filter((item) =>
		fields.some((field) => {
			const value = item[field];
			if (typeof value === 'string') {
				return value.toLowerCase().includes(lowerQuery);
			}
			if (Array.isArray(value)) {
				return value.some((v) =>
					typeof v === 'string' && v.toLowerCase().includes(lowerQuery)
				);
			}
			return false;
		})
	);
}

export function paginateItems<T>(items: T[], page: number = 1, perPage: number = 10) {
	const start = (page - 1) * perPage;
	const end = start + perPage;
	
	return {
		items: items.slice(start, end),
		currentPage: page,
		totalPages: Math.ceil(items.length / perPage),
		totalItems: items.length,
		hasMore: end < items.length,
		hasPrevious: page > 1
	};
}