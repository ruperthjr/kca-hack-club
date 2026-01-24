export interface ReadingTime {
	text: string;
	minutes: number;
	words: number;
	time: number;
}

export function calculateReadingTime(content: string, wpm: number = 200): ReadingTime {
	const words = content.trim().split(/\s+/).length;
	const minutes = Math.ceil(words / wpm);
	const time = (words / wpm) * 60 * 1000;

	return {
		text: `${minutes} min read`,
		minutes,
		words,
		time
	};
}

export function getReadingProgress(scrollTop: number, scrollHeight: number, clientHeight: number): number {
	const windowHeight = scrollHeight - clientHeight;
	const progress = (scrollTop / windowHeight) * 100;
	return Math.min(Math.max(progress, 0), 100);
}

export function estimateReadingTime(wordCount: number, wpm: number = 200): string {
	const minutes = Math.ceil(wordCount / wpm);
	if (minutes < 1) return 'Less than a minute';
	if (minutes === 1) return '1 minute';
	return `${minutes} minutes`;
}