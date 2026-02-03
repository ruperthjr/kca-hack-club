<script lang="ts">
	import type { PageData } from './$types';
	import { fly } from 'svelte/transition';
	import ChallengeCard from '$lib/components/ChallengeCard.svelte';

	export let data: PageData;

	let selectedDifficulty = 'all';
	let selectedMember = 'all';
	let searchQuery = '';

	const teamMembers = ['Maryphin', 'Pauline', 'Ruperth', 'Daniel', 'Jasmine'];

	$: filteredChallenges = data.challenges.filter(challenge => {
		const matchesDifficulty = selectedDifficulty === 'all' || challenge.difficulty === selectedDifficulty;
		const matchesMember = selectedMember === 'all' || 
			challenge.recommendedFor.some(member => member.toLowerCase() === selectedMember.toLowerCase());
		const matchesSearch = searchQuery === '' || 
			challenge.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
			challenge.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
			challenge.skills.some(skill => skill.toLowerCase().includes(searchQuery.toLowerCase()));
		return matchesDifficulty && matchesMember && matchesSearch;
	});

	$: memberCounts = teamMembers.reduce((acc, member) => {
		acc[member] = data.challenges.filter(c => 
			c.recommendedFor.some(m => m.toLowerCase() === member.toLowerCase())
		).length;
		return acc;
	}, {} as Record<string, number>);
</script>

<svelte:head>
	<title>{data.meta.title}</title>
	<meta name="description" content={data.meta.description} />
</svelte:head>

<div class="min-h-screen bg-gradient-to-br from-neutral-50 via-white to-neutral-100 dark:from-neutral-950 dark:via-neutral-900 dark:to-neutral-950">
	<div class="relative overflow-hidden border-b border-neutral-200 dark:border-neutral-800 bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-950/30 dark:to-orange-950/30">
		<div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
			<a href="/challenges" class="inline-flex items-center gap-2 text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-50 mb-6 transition-colors">
				<svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
				</svg>
				<span class="font-medium">Back to Challenges</span>
			</a>

			<div class="text-center max-w-3xl mx-auto">
				<div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-neutral-900 border border-orange-200 dark:border-orange-800 mb-6">
					<span class="text-sm font-medium text-neutral-700 dark:text-neutral-300">Daily Challenges</span>
				</div>
				
				<h1 class="font-display font-bold text-5xl md:text-6xl mb-6 text-neutral-900 dark:text-neutral-50">
					Build Daily <span class="bg-gradient-to-r from-yellow-600 via-orange-600 to-red-600 bg-clip-text text-transparent">Coding Habits</span>
				</h1>
				
				<p class="text-xl text-neutral-600 dark:text-neutral-400 mb-8">
					{data.challenges.length} challenges designed for consistent skill building. Spend 30 minutes to 2 hours each day mastering new concepts.
				</p>

				<div class="relative max-w-2xl mx-auto">
					<div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
						<svg class="h-5 w-5 text-neutral-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
						</svg>
					</div>
					<input
						type="text"
						bind:value={searchQuery}
						placeholder="Search challenges..."
						class="w-full pl-12 pr-4 py-4 text-lg rounded-2xl bg-white dark:bg-neutral-900 border-2 border-neutral-200 dark:border-neutral-800 focus:border-orange-500 dark:focus:border-orange-500 focus:ring-4 focus:ring-orange-500/20 transition-all outline-none text-neutral-900 dark:text-neutral-50 placeholder-neutral-400"
					/>
				</div>
			</div>
		</div>
	</div>

	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
		<div class="mb-8">
			<h3 class="text-sm font-semibold text-neutral-700 dark:text-neutral-300 mb-3">Filter by Difficulty</h3>
			<div class="flex flex-wrap gap-3">
				<button
					on:click={() => selectedDifficulty = 'all'}
					class="px-6 py-3 rounded-xl font-medium transition-all duration-200 {selectedDifficulty === 'all' 
						? 'bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 shadow-lg scale-105' 
						: 'bg-white dark:bg-neutral-900 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-50 dark:hover:bg-neutral-800 border border-neutral-200 dark:border-neutral-800'}"
				>
					All ({data.challenges.length})
				</button>
				{#each ['beginner', 'intermediate', 'advanced'] as difficulty}
					<button
						on:click={() => selectedDifficulty = difficulty}
						class="px-6 py-3 rounded-xl font-medium transition-all duration-200 {selectedDifficulty === difficulty 
							? 'bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 shadow-lg scale-105' 
							: 'bg-white dark:bg-neutral-900 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-50 dark:hover:bg-neutral-800 border border-neutral-200 dark:border-neutral-800'}"
					>
						<span class="flex items-center gap-2">
							<span class="capitalize">{difficulty}</span>
							<span class="text-sm opacity-75">({data.byDifficulty[difficulty as keyof typeof data.byDifficulty].length})</span>
						</span>
					</button>
				{/each}
			</div>
		</div>

		<div class="mb-12">
			<h3 class="text-sm font-semibold text-neutral-700 dark:text-neutral-300 mb-3">Filter by Team Member</h3>
			<div class="flex flex-wrap gap-3">
				<button
					on:click={() => selectedMember = 'all'}
					class="px-6 py-3 rounded-xl font-medium transition-all duration-200 {selectedMember === 'all' 
						? 'bg-purple-600 text-white shadow-lg scale-105' 
						: 'bg-white dark:bg-neutral-900 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-50 dark:hover:bg-neutral-800 border border-neutral-200 dark:border-neutral-800'}"
				>
					All Members ({data.challenges.length})
				</button>
				{#each teamMembers as member}
					<button
						on:click={() => selectedMember = member}
						class="px-6 py-3 rounded-xl font-medium transition-all duration-200 {selectedMember === member 
							? 'bg-purple-600 text-white shadow-lg scale-105' 
							: 'bg-white dark:bg-neutral-900 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-50 dark:hover:bg-neutral-800 border border-neutral-200 dark:border-neutral-800'}"
					>
						<span class="flex items-center gap-2">
							<span>{member}</span>
							<span class="text-sm opacity-75">({memberCounts[member]})</span>
						</span>
					</button>
				{/each}
			</div>
		</div>

		{#if filteredChallenges.length === 0}
			<div class="text-center py-16">
				<div class="inline-flex items-center justify-center w-20 h-20 rounded-full bg-neutral-100 dark:bg-neutral-800 mb-4">
					<svg class="w-10 h-10 text-neutral-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
					</svg>
				</div>
				<h3 class="text-2xl font-bold text-neutral-900 dark:text-neutral-50 mb-2">No challenges found</h3>
				<p class="text-neutral-600 dark:text-neutral-400">Try adjusting your search or filters</p>
			</div>
		{:else}
			<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
				{#each filteredChallenges as challenge, i (challenge.slug)}
					<div in:fly={{ y: 20, duration: 400, delay: i * 50 }}>
						<ChallengeCard {challenge} index={i} category="daily" />
					</div>
				{/each}
			</div>
		{/if}
	</div>
</div>