<script lang="ts">
	import { formatDate } from '$utils/date';
	
	interface Hackathon {
		slug: string;
		title: string;
		date: string;
		endDate?: string;
		location: string;
		prize?: string;
		description: string;
		status: 'upcoming' | 'past' | 'ongoing';
	}
	
	interface Props {
		hackathon: Hackathon;
	}
	
	let { hackathon }: Props = $props();
	
	const statusConfig = {
		upcoming: {
			badge: 'bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300',
			label: 'Upcoming'
		},
		ongoing: {
			badge: 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 animate-pulse',
			label: 'Live Now'
		},
		past: {
			badge: 'badge-secondary',
			label: 'Past'
		}
	};
	
	let config = $derived(statusConfig[hackathon.status]);
</script>

<a href="/hackathons/{hackathon.slug}" class="card card-hover group block">
	<div class="p-6">
		<div class="flex items-start justify-between mb-4">
			<div class="flex-1">
				<div class="flex items-center space-x-2 mb-2">
					<span class="badge {config.badge}">{config.label}</span>
				</div>
				<h3 class="font-display font-bold text-xl mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
					{hackathon.title}
				</h3>
				<p class="text-sm text-gray-600 dark:text-gray-400 mb-4">{hackathon.description}</p>
			</div>
			<span class="text-3xl"></span>
		</div>
		
		<div class="space-y-2 text-sm text-gray-600 dark:text-gray-400">
			<div class="flex items-center">
				<svg class="w-4 h-4 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
				</svg>
				<span>
					{#if hackathon.endDate}
						{formatDate(hackathon.date)} - {formatDate(hackathon.endDate)}
					{:else}
						{formatDate(hackathon.date)}
					{/if}
				</span>
			</div>
			<div class="flex items-center">
				<svg class="w-4 h-4 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
				</svg>
				<span>{hackathon.location}</span>
			</div>
			{#if hackathon.prize}
				<div class="flex items-center">
					<svg class="w-4 h-4 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
					</svg>
					<span>{hackathon.prize}</span>
				</div>
			{/if}
		</div>
	</div>
</a>