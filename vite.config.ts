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
				manualChunks: {
					'svelte-core': ['svelte', '@sveltejs/kit'],
					'three': ['three'],
					'utils': ['date-fns', 'fuse.js']
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