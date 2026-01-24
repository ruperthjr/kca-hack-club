export function slugify(text: string): string {
	return text
		.toString()
		.toLowerCase()
		.trim()
		.replace(/\s+/g, '-')
		.replace(/[^\w\-]+/g, '')
		.replace(/\-\-+/g, '-')
		.replace(/^-+/, '')
		.replace(/-+$/, '');
}

export function deslugify(slug: string): string {
	return slug
		.replace(/-/g, ' ')
		.replace(/\b\w/g, (char) => char.toUpperCase());
}

export function createSlug(title: string, date?: Date): string {
	const slug = slugify(title);
	if (date) {
		const dateStr = date.toISOString().split('T')[0];
		return `${dateStr}-${slug}`;
	}
	return slug;
}