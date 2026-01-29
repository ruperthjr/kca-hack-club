<script lang="ts">
	import type { PageData } from './$types';
	import { fly } from 'svelte/transition';

	export let data: PageData;

	let selectedDifficulty = 'all';
	let searchQuery = '';

	type Difficulty = 'beginner' | 'intermediate' | 'advanced';
	const difficultyKeys: Difficulty[] = ['beginner', 'intermediate', 'advanced'];

	const difficultyConfig: Record<Difficulty, { icon: string; color: string; bg: string; border: string }> = {
		beginner: { icon: '', color: 'text-green-600 dark:text-green-400', bg: 'bg-green-50 dark:bg-green-950/30', border: 'border-green-200 dark:border-green-800' },
		intermediate: { icon: '', color: 'text-yellow-600 dark:text-yellow-400', bg: 'bg-yellow-50 dark:bg-yellow-950/30', border: 'border-yellow-200 dark:border-yellow-800' },
		advanced: { icon: '', color: 'text-red-600 dark:text-red-400', bg: 'bg-red-50 dark:bg-red-950/30', border: 'border-red-200 dark:border-red-800' }
	};

	$: filteredChallenges = data.challenges.filter(challenge => {
		const matchesDifficulty = selectedDifficulty === 'all' || challenge.difficulty === selectedDifficulty;
		const matchesSearch = searchQuery === '' || 
			challenge.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
			challenge.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
			challenge.skills.some(skill => skill.toLowerCase().includes(searchQuery.toLowerCase()));
		return matchesDifficulty && matchesSearch;
	});
</script>

<svelte:head>
	<title>{data.meta.title}</title>
	<meta name="description" content={data.meta.description} />
</svelte:head>

<div class="min-h-screen bg-gradient-to-br from-neutral-50 via-white to-neutral-100 dark:from-neutral-950 dark:via-neutral-900 dark:to-neutral-950">
	<div class="relative overflow-hidden border-b border-neutral-200 dark:border-neutral-800 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30">
		<div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
			<a href="/challenges" class="inline-flex items-center gap-2 text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-50 mb-6 transition-colors">
				<svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
				</svg>
				<span class="font-medium">Back to Challenges</span>
			</a>

			<div class="text-center max-w-3xl mx-auto">
				<div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-neutral-900 border border-purple-200 dark:border-purple-800 mb-6">
					<span class="text-2xl"></span>
					<span class="text-sm font-medium text-neutral-700 dark:text-neutral-300">Monthly Challenges</span>
				</div>
				
				<h1 class="font-display font-bold text-5xl md:text-6xl mb-6 text-neutral-900 dark:text-neutral-50">
					Master Full-Stack <span class="bg-gradient-to-r from-purple-600 via-pink-600 to-rose-600 bg-clip-text text-transparent">Development</span>
				</h1>
				
				<p class="text-xl text-neutral-600 dark:text-neutral-400 mb-8">
					{data.challenges.length} comprehensive full-stack projects. Spend 40-60 hours building production-ready applications.
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
						placeholder="Search applications..."
						class="w-full pl-12 pr-4 py-4 text-lg rounded-2xl bg-white dark:bg-neutral-900 border-2 border-neutral-200 dark:border-neutral-800 focus:border-purple-500 dark:focus:border-purple-500 focus:ring-4 focus:ring-purple-500/20 transition-all outline-none text-neutral-900 dark:text-neutral-50 placeholder-neutral-400"
					/>
				</div>
			</div>
		</div>
	</div>
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
		<div class="flex flex-wrap gap-3 justify-center mb-12">
			<button on:click={() => selectedDifficulty = 'all'} class="px-6 py-3 rounded-xl font-medium transition-all duration-200 {selectedDifficulty === 'all' ? 'bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 shadow-lg scale-105' : 'bg-white dark:bg-neutral-900 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-50 dark:hover:bg-neutral-800 border border-neutral-200 dark:border-neutral-800'}">All ({data.challenges.length})</button>
			{#each difficultyKeys as difficulty}
				<button on:click={() => selectedDifficulty = difficulty} class="px-6 py-3 rounded-xl font-medium transition-all duration-200 {selectedDifficulty === difficulty ? 'bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 shadow-lg scale-105' : 'bg-white dark:bg-neutral-900 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-50 dark:hover:bg-neutral-800 border border-neutral-200 dark:border-neutral-800'}">
					<span class="flex items-center gap-2">
						<span>{difficultyConfig[difficulty].icon}</span>
						<span class="capitalize">{difficulty}</span>
						<span class="text-sm opacity-75">({data.byDifficulty[difficulty].length})</span>
					</span>
				</button>
			{/each}
		</div>

		{#if filteredChallenges.length === 0}
			<div class="text-center py-16">
				<div class="inline-flex items-center justify-center w-20 h-20 rounded-full bg-neutral-100 dark:bg-neutral-800 mb-4">
					<svg class="w-10 h-10 text-neutral-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
					</svg>
				</div>
				<h3 class="text-2xl font-bold text-neutral-900 dark:text-neutral-50 mb-2">No applications found</h3>
				<p class="text-neutral-600 dark:text-neutral-400">Try adjusting your search or filter</p>
			</div>
		{:else}
			<div class="space-y-6">
				{#each filteredChallenges as challenge, i (challenge.slug)}
					<a href="/challenges/monthly/{challenge.slug}" class="group block" in:fly={{ y: 20, duration: 400, delay: i * 50 }}>
						<div class="p-8 rounded-2xl bg-white dark:bg-neutral-900 border-2 border-neutral-200 dark:border-neutral-800 hover:border-purple-300 dark:hover:border-purple-700 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
							<div class="flex flex-col md:flex-row gap-6">
								<div class="flex-1">
									<div class="flex items-center gap-3 mb-4">
										<span class="px-3 py-1 rounded-lg text-sm font-semibold {difficultyConfig[challenge.difficulty].bg} {difficultyConfig[challenge.difficulty].color}">
											{difficultyConfig[challenge.difficulty].icon} {challenge.difficulty}
										</span>
										<span class="text-sm text-neutral-500 dark:text-neutral-500">{challenge.estimatedTime}</span>
										<span class="text-sm font-semibold text-purple-600 dark:text-purple-400">
											{challenge.points} points
										</span>
									</div>

									<h3 class="font-bold text-3xl mb-3 text-neutral-900 dark:text-neutral-50 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:via-pink-600 group-hover:to-rose-600 group-hover:bg-clip-text transition-all">
										{challenge.title}
									</h3>

									<p class="text-neutral-600 dark:text-neutral-400 mb-4 text-lg">
										{challenge.description}
									</p>

									<div class="flex flex-wrap gap-2 mb-4">
										{#each challenge.skills as skill}
											<span class="px-3 py-1 rounded-md text-sm font-medium bg-purple-50 dark:bg-purple-950/30 text-purple-700 dark:text-purple-400 border border-purple-200 dark:border-purple-800">
												{skill}
											</span>
										{/each}
									</div>

									{#if challenge.recommendedFor && challenge.recommendedFor.length > 0}
										<div class="flex items-center gap-2 text-sm text-neutral-500 dark:text-neutral-500">
											<svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
												<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
											</svg>
											<span>Recommended for: {challenge.recommendedFor.join(', ')}</span>
										</div>
									{/if}
								</div>

								<div class="flex items-center">
									<svg class="w-12 h-12 text-neutral-300 dark:text-neutral-700 group-hover:text-purple-500 dark:group-hover:text-purple-400 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
										<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
									</svg>
								</div>
							</div>
						</div>
					</a>
				{/each}
			</div>
		{/if}
	</div>
</div>