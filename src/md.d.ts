declare module '*.md' {
	import type { SvelteComponent } from 'svelte';
	
	export default class MarkdownComponent extends SvelteComponent {}
	
	export const metadata: {
		name?: string;
		role?: string;
		year?: number;
		github?: string;
		linkedin?: string;
		email?: string;
		avatar?: string;
		bio?: string;
		joinedDate?: string;
		skills?: string[];
		[key: string]: any;
	};
}