<script lang="ts">
	import ChallengeCard from '$components/ChallengeCard.svelte';
	import type { PageData } from './$types';

	export let data: PageData & { challenges: any[] };
</script>

<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
	<div class="text-center mb-12">
		<h1 class="font-display font-bold text-4xl md:text-5xl mb-4 gradient-text">
			Coding Challenges
		</h1>
		<p class="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
			Take on challenges to sharpen your skills and compete with the community
		</p>
	</div>

	<div class="grid md:grid-cols-3 gap-6 mb-12">
		<a href="/challenges/daily" class="card card-hover text-center">
			<div class="p-8">
				<h2 class="font-display font-bold text-2xl mb-2">Daily Challenges</h2>
				<p class="text-gray-600 dark:text-gray-400">New challenge every day</p>
			</div>
		</a>
		<a href="/challenges/weekly" class="card card-hover text-center">
			<div class="p-8">
				<h2 class="font-display font-bold text-2xl mb-2">Weekly Challenges</h2>
				<p class="text-gray-600 dark:text-gray-400">Deeper weekly projects</p>
			</div>
		</a>
		<a href="/challenges/monthly" class="card card-hover text-center">
			<div class="p-8">
				<h2 class="font-display font-bold text-2xl mb-2">Monthly Challenges</h2>
				<p class="text-gray-600 dark:text-gray-400">Big monthly projects</p>
			</div>
		</a>
	</div>

	<div class="mb-8">
		<h2 class="font-display font-bold text-2xl mb-6">All Challenges</h2>
		<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
			{#each data.challenges as challenge}
				<ChallengeCard {challenge} />
			{/each}
		</div>
	</div>
</div>