<script lang="ts">
	import ChallengeCard from '$components/ChallengeCard.svelte';
	import type { PageData } from './$types';

	export let data: PageData & { challenges: any[] };
</script>

<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
	<div class="mb-8">
		<a href="/challenges" class="text-primary-600 dark:text-primary-400 hover:underline mb-4 inline-block">
			← Back to Challenges
		</a>
		<h1 class="font-display font-bold text-4xl md:text-5xl mb-4 gradient-text">
			Daily Challenges
		</h1>
		<p class="text-xl text-gray-600 dark:text-gray-400">
			Complete a new coding challenge every day to build consistency
		</p>
	</div>

	<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
		{#each data.challenges as challenge}
			<ChallengeCard {challenge} />
		{/each}
	</div>
</div>