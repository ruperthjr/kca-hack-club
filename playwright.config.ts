import type { PlaywrightTestConfig } from '@playwright/test';
import { defineConfig, devices } from '@playwright/test';

const config: PlaywrightTestConfig = defineConfig({
	webServer: {
		command: 'pnpm build && pnpm preview',
		port: 4173,
		timeout: 120000,
		reuseExistingServer: !process.env.CI
	},

	testDir: 'e2e',
	testMatch: /(.+\.)?(test|spec)\.[jt]s/,

	timeout: 30000,
	expect: {
		timeout: 5000
	},

	fullyParallel: true,
	forbidOnly: !!process.env.CI,
	retries: process.env.CI ? 2 : 0,
	workers: process.env.CI ? 1 : undefined,

	reporter: [
		['html'],
		['list'],
		...(process.env.CI ? [['github'] as const] : [])
	],

	use: {
		baseURL: 'http://localhost:4173',
		trace: 'on-first-retry',
		screenshot: 'only-on-failure',
		video: 'retain-on-failure'
	},

	projects: [
		{
			name: 'chromium',
			use: { ...devices['Desktop Chrome'] }
		},
		{
			name: 'firefox',
			use: { ...devices['Desktop Firefox'] }
		},
		{
			name: 'webkit',
			use: { ...devices['Desktop Safari'] }
		},
		// Mobile viewports
		{
			name: 'Mobile Chrome',
			use: { ...devices['Pixel 5'] }
		},
		{
			name: 'Mobile Safari',
			use: { ...devices['iPhone 12'] }
		}
	]
});

export default config;
