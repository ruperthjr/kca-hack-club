import { format, formatDistanceToNow, isAfter, isBefore, parseISO } from 'date-fns';

export function formatDate(date: string | Date, formatStr: string = 'MMM dd, yyyy'): string {
	const dateObj = typeof date === 'string' ? parseISO(date) : date;
	return format(dateObj, formatStr);
}

export function formatDateTime(date: string | Date): string {
	return formatDate(date, 'MMM dd, yyyy HH:mm');
}

export function relativeTime(date: string | Date): string {
	const dateObj = typeof date === 'string' ? parseISO(date) : date;
	return formatDistanceToNow(dateObj, { addSuffix: true });
}

export function isUpcoming(date: string | Date): boolean {
	const dateObj = typeof date === 'string' ? parseISO(date) : date;
	return isAfter(dateObj, new Date());
}

export function isPast(date: string | Date): boolean {
	const dateObj = typeof date === 'string' ? parseISO(date) : date;
	return isBefore(dateObj, new Date());
}

export function getDaysDifference(date1: string | Date, date2: string | Date = new Date()): number {
	const d1 = typeof date1 === 'string' ? parseISO(date1) : date1;
	const d2 = typeof date2 === 'string' ? parseISO(date2) : date2;
	const diffTime = Math.abs(d2.getTime() - d1.getTime());
	return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
}

export function getWeekNumber(date: Date = new Date()): number {
	const d = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
	const dayNum = d.getUTCDay() || 7;
	d.setUTCDate(d.getUTCDate() + 4 - dayNum);
	const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
	return Math.ceil(((d.getTime() - yearStart.getTime()) / 86400000 + 1) / 7);
}

export function getMonthName(month: number): string {
	const months = [
		'January', 'February', 'March', 'April', 'May', 'June',
		'July', 'August', 'September', 'October', 'November', 'December'
	];
	if (month >= 0 && month < 12) {
		return months[month]!;
	} else {
		return 'Invalid Month';
	}
}

export function getDateRange(start: string | Date, end: string | Date): string {
	const startDate = typeof start === 'string' ? parseISO(start) : start;
	const endDate = typeof end === 'string' ? parseISO(end) : end;
	
	if (startDate.getMonth() === endDate.getMonth()) {
		return `${format(startDate, 'MMM dd')} - ${format(endDate, 'dd, yyyy')}`;
	}
	return `${format(startDate, 'MMM dd')} - ${format(endDate, 'MMM dd, yyyy')}`;
}