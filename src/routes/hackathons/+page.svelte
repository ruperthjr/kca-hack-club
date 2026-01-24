<script lang="ts">
	import HackathonCard from '$components/HackathonCard.svelte';
	import type { PageData } from './$types';

	export let data: PageData & { hackathons: any[] };
	
	const upcoming = data.hackathons.filter(h => h.status === 'upcoming');
	const past = data.hackathons.filter(h => h.status === 'past');
</script>

<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
	<div class="text-center mb-12">
		<h1 class="font-display font-bold text-4xl md:text-5xl mb-4 gradient-text">
			Hackathons
		</h1>
		<p class="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
			Compete in exciting hackathons and build amazing projects
		</p>
	</div>

	{#if upcoming.length > 0}
		<div class="mb-12">
			<h2 class="font-display font-bold text-2xl mb-6">Upcoming Hackathons</h2>
			<div class="grid md:grid-cols-2 gap-6">
				{#each upcoming as hackathon}
					<HackathonCard {hackathon} />
				{/each}
			</div>
		</div>
	{/if}

	{#if past.length > 0}
		<div>
			<h2 class="font-display font-bold text-2xl mb-6">Past Hackathons</h2>
			<div class="grid md:grid-cols-2 gap-6">
				{#each past as hackathon}
					<HackathonCard {hackathon} />
				{/each}
			</div>
		</div>
	{/if}
</div>