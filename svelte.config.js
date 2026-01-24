import { mdsvex } from 'mdsvex';
import adapter from '@sveltejs/adapter-vercel';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: [
		vitePreprocess(),
		mdsvex({
			extensions: ['.md']
		})
	],

	extensions: ['.svelte', '.md'],

	kit: {
		adapter: adapter({
			runtime: 'nodejs22.x',
			regions: ['sin1'],
			maxDuration: 10,
			memory: 1024,
			isr: {
				expiration: 60
			}
		}),
		
		alias: {
			$components: './src/lib/components',
			$data: './src/lib/data',
			$utils: './src/lib/utils',
			$content: './src/lib/content'
		}
	}
};

export default config;