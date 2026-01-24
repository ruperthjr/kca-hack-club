<script lang="ts">
	import type { Challenge } from '$utils/blog';
	import { formatDate, isUpcoming } from '$utils/date';
	
	interface Props {
		challenge: Challenge;
	}
	
	let { challenge }: Props = $props();
	
	const difficultyConfig = {
		beginner: {
			color: 'from-green-500 to-emerald-500',
			badge: 'badge-success',
			label: 'Beginner'
		},
		intermediate: {
			color: 'from-yellow-500 to-orange-500',
			badge: 'badge-warning',
			label: 'Intermediate'
		},
		advanced: {
			color: 'from-red-500 to-rose-500',
			badge: 'badge-danger',
			label: 'Advanced'
		}
	};
	
	let config = $derived(difficultyConfig[challenge.difficulty]);
	let upcoming = $derived(isUpcoming(challenge.startDate));
</script>

<a
	href="/challenges/{challenge.slug}"
	class="card card-hover group block"
>
	<div class="h-2 bg-gradient-to-r {config.color}"></div>
	
	<div class="p-6">
		<div class="flex items-start justify-between mb-4">
			<div class="flex-1">
				<div class="flex items-center space-x-2 mb-2">
					<span class="badge {config.badge}">{config.label}</span>
					{#if challenge.points}
						<span class="badge badge-primary">{challenge.points} pts</span>
					{/if}
					{#if upcoming}
						<span class="badge bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300">
							Upcoming
						</span>
					{/if}
				</div>
				<h3 class="font-display font-bold text-xl mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
					{challenge.title}
				</h3>
			</div>
		</div>
		
		<div class="space-y-2 text-sm text-gray-600 dark:text-gray-400">
			<div class="flex items-center">
				<svg class="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
				</svg>
				<span>{formatDate(challenge.startDate)} - {formatDate(challenge.endDate)}</span>
			</div>
			
			{#if challenge.category}
				<div class="flex items-center">
					<svg class="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
					</svg>
					<span class="capitalize">{challenge.category.replace('-', ' ')}</span>
				</div>
			{/if}
		</div>
	</div>
</a>