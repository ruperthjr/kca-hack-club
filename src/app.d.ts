declare global {
	namespace App {
		interface Error {
			message: string;
			code?: string;
		}
		interface Locals {
			userid?: string;
		}
		interface PageData {
			flash?: { type: 'success' | 'error' | 'info'; message: string };
		}
		interface PageState {}
		interface Platform {}
	}

	interface Window {
		fs?: {
			readFile: (path: string, options?: { encoding?: string }) => Promise<Uint8Array | string>;
		};
		storage?: {
			get: (key: string, shared?: boolean) => Promise<{ key: string; value: string; shared: boolean } | null>;
			set: (key: string, value: string, shared?: boolean) => Promise<{ key: string; value: string; shared: boolean } | null>;
			delete: (key: string, shared?: boolean) => Promise<{ key: string; deleted: boolean; shared: boolean } | null>;
			list: (prefix?: string, shared?: boolean) => Promise<{ keys: string[]; prefix?: string; shared: boolean } | null>;
		};
	}
}

export {};