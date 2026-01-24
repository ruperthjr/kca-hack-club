export function capitalize(str: string): string {
	return str.charAt(0).toUpperCase() + str.slice(1);
}

export function capitalizeWords(str: string): string {
	return str.replace(/\b\w/g, (char) => char.toUpperCase());
}

export function truncate(str: string, length: number, suffix = '...'): string {
	if (str.length <= length) return str;
	return str.slice(0, length).trim() + suffix;
}

export function excerpt(content: string, length: number = 160): string {
	const stripped = content.replace(/<[^>]*>/g, '').replace(/\n/g, ' ');
	return truncate(stripped, length);
}

export function pluralize(count: number, singular: string, plural?: string): string {
	if (count === 1) return singular;
	return plural || `${singular}s`;
}

export function formatNumber(num: number): string {
	if (num >= 1000000) return `${(num / 1000000).toFixed(1)}M`;
	if (num >= 1000) return `${(num / 1000).toFixed(1)}K`;
	return num.toString();
}

export function randomString(length: number = 8): string {
	const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
	let result = '';
	for (let i = 0; i < length; i++) {
		result += chars.charAt(Math.floor(Math.random() * chars.length));
	}
	return result;
}

export function kebabCase(str: string): string {
	return str
		.replace(/([a-z])([A-Z])/g, '$1-$2')
		.replace(/[\s_]+/g, '-')
		.toLowerCase();
}

export function camelCase(str: string): string {
	return str
		.toLowerCase()
		.replace(/[^a-zA-Z0-9]+(.)/g, (_, chr) => chr.toUpperCase());
}

export function snakeCase(str: string): string {
	return str
		.replace(/([a-z])([A-Z])/g, '$1_$2')
		.replace(/[\s-]+/g, '_')
		.toLowerCase();
}