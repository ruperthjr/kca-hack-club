import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
	plugins: [
		sveltekit(),
		tailwindcss()
	],
	server: {
		port: 5173,
		strictPort: false,
		host: true,
		fs: {
			allow: ['..']
		}
	},
	preview: {
		port: 4173,
		strictPort: false,
		host: true
	},
	build: {
		minify: 'terser',
		cssMinify: true,
		target: 'esnext',
		reportCompressedSize: true,
		chunkSizeWarningLimit: 1000,
		rollupOptions: {
			output: {
				manualChunks: (id) => {
					// Don't manually chunk @sveltejs/kit or svelte - let SvelteKit handle it
					if (id.includes('node_modules')) {
						if (id.includes('three')) {
							return 'three';
						}
						if (id.includes('date-fns')) {
							return 'date-fns';
						}
						if (id.includes('fuse.js')) {
							return 'fuse';
						}
						if (id.includes('shiki')) {
							return 'shiki';
						}
					}
				}
			}
		}
	},
	optimizeDeps: {
		include: [
			'three',
			'date-fns',
			'fuse.js',
			'shiki'
		],
		exclude: [
			'@sveltejs/kit'
		]
	},
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}'],
		globals: true,
		environment: 'jsdom',
		setupFiles: ['./src/tests/setup.ts'],
		coverage: {
			provider: 'v8',
			reporter: ['text', 'json', 'html'],
			exclude: [
				'node_modules/',
				'src/tests/',
				'**/*.d.ts',
				'**/*.config.*',
				'**/mockData',
				'.svelte-kit/'
			]
		}
	},
	css: {
		devSourcemap: true
	},
	esbuild: {
		legalComments: 'none'
	}
});