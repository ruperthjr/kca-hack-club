<script lang="ts">
	import type { PageData } from './$types';
	import { fly } from 'svelte/transition';

	export let data: PageData;

	type Difficulty = 'beginner' | 'intermediate' | 'advanced';
	type DifficultyOrAll = Difficulty | 'all';

	let selectedDifficulty: DifficultyOrAll = 'all';
	let selectedMember = 'all';
	let searchQuery = '';

	const teamMembers = ['Maryphin', 'Pauline', 'Ruperth', 'Daniel', 'Jasmine'];
	
	const difficultyConfig: Record<Difficulty, { color: string; bg: string; border: string }> = {
		beginner: { color: 'text-green-600 dark:text-green-400', bg: 'bg-green-50 dark:bg-green-950/30', border: 'border-green-200 dark:border-green-800' },
		intermediate: { color: 'text-yellow-600 dark:text-yellow-400', bg: 'bg-yellow-50 dark:bg-yellow-950/30', border: 'border-yellow-200 dark:border-yellow-800' },
		advanced: { color: 'text-red-600 dark:text-red-400', bg: 'bg-red-50 dark:bg-red-950/30', border: 'border-red-200 dark:border-red-800' }
	};

	$: filteredChallenges = data.challenges.filter(challenge => {
		const matchesDifficulty = selectedDifficulty === 'all' || challenge.difficulty === selectedDifficulty;
		const matchesMember = selectedMember === 'all' || 
			challenge.recommendedFor.some(member => member.toLowerCase() === selectedMember.toLowerCase()) ||
			(challenge.collaborators && challenge.collaborators.some(member => member.toLowerCase() === selectedMember.toLowerCase()));
		const matchesSearch = searchQuery === '' || 
			challenge.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
			challenge.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
			challenge.skills.some(skill => skill.toLowerCase().includes(searchQuery.toLowerCase()));
		return matchesDifficulty && matchesMember && matchesSearch;
	});

	$: memberCounts = teamMembers.reduce((acc, member) => {
		acc[member] = data.challenges.filter(c => 
			c.recommendedFor.some(m => m.toLowerCase() === member.toLowerCase()) ||
			(c.collaborators && c.collaborators.some(m => m.toLowerCase() === member.toLowerCase()))
		).length;
		return acc;
	}, {} as Record<string, number>);
</script>

<svelte:head>
	<title>{data.meta.title}</title>
	<meta name="description" content={data.meta.description} />
</svelte:head>

<div class="min-h-screen bg-gradient-to-br from-neutral-50 via-white to-neutral-100 dark:from-neutral-950 dark:via-neutral-900 dark:to-neutral-950">
	<div class="relative overflow-hidden border-b border-neutral-200 dark:border-neutral-800 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30">
		<div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
			<a href="/challenges" class="inline-flex items-center gap-2 text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-50 mb-6 transition-colors">
				<svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
				</svg>
				<span class="font-medium">Back to Challenges</span>
			</a>

			<div class="text-center max-w-3xl mx-auto">
				<div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-neutral-900 border border-blue-200 dark:border-blue-800 mb-6">
					<span class="text-sm font-medium text-neutral-700 dark:text-neutral-300">Weekly Challenges</span>
				</div>
				
				<h1 class="font-display font-bold text-5xl md:text-6xl mb-6 text-neutral-900 dark:text-neutral-50">
					Build Real <span class="bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 bg-clip-text text-transparent">Projects</span>
				</h1>
				
				<p class="text-xl text-neutral-600 dark:text-neutral-400 mb-8">
					{data.challenges.length} project-based challenges. Spend 6-15 hours building complete, functional applications.
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
						placeholder="Search projects..."
						class="w-full pl-12 pr-4 py-4 text-lg rounded-2xl bg-white dark:bg-neutral-900 border-2 border-neutral-200 dark:border-neutral-800 focus:border-blue-500 dark:focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 transition-all outline-none text-neutral-900 dark:text-neutral-50 placeholder-neutral-400"
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
					class="px-6 py-3 rounded-xl font-medium transition-all duration-200 {selectedDifficulty === 'all' ? 'bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 shadow-lg scale-105' : 'bg-white dark:bg-neutral-900 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-50 dark:hover:bg-neutral-800 border border-neutral-200 dark:border-neutral-800'}"
				>
					All ({data.challenges.length})
				</button>
				{#each ['beginner', 'intermediate', 'advanced'] as difficultyTyped (difficultyTyped)}
					<button
						on:click={() => selectedDifficulty = difficultyTyped as Difficulty}
						class="px-6 py-3 rounded-xl font-medium transition-all duration-200 {selectedDifficulty === difficultyTyped ? 'bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 shadow-lg scale-105' : 'bg-white dark:bg-neutral-900 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-50 dark:hover:bg-neutral-800 border border-neutral-200 dark:border-neutral-800'}"
					>
						<span class="flex items-center gap-2">
							<span class="capitalize">{difficultyTyped}</span>
							<span class="text-sm opacity-75">({data.byDifficulty[difficultyTyped as Difficulty].length})</span>
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
					class="px-6 py-3 rounded-xl font-medium transition-all duration-200 {selectedMember === 'all' ? 'bg-blue-600 text-white shadow-lg scale-105' : 'bg-white dark:bg-neutral-900 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-50 dark:hover:bg-neutral-800 border border-neutral-200 dark:border-neutral-800'}"
				>
					All Members ({data.challenges.length})
				</button>
				{#each teamMembers as member}
					<button
						on:click={() => selectedMember = member}
						class="px-6 py-3 rounded-xl font-medium transition-all duration-200 {selectedMember === member ? 'bg-blue-600 text-white shadow-lg scale-105' : 'bg-white dark:bg-neutral-900 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-50 dark:hover:bg-neutral-800 border border-neutral-200 dark:border-neutral-800'}"
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
				<h3 class="text-2xl font-bold text-neutral-900 dark:text-neutral-50 mb-2">No projects found</h3>
				<p class="text-neutral-600 dark:text-neutral-400">Try adjusting your search or filters</p>
			</div>
		{:else}
			<div class="grid md:grid-cols-2 gap-8">
				{#each filteredChallenges as challenge, i (challenge.slug)}
					<a href="/challenges/weekly/{challenge.slug}" class="group block" in:fly={{ y: 20, duration: 400, delay: i * 50 }}>
						<div class="h-full p-8 rounded-2xl bg-white dark:bg-neutral-900 border-2 border-neutral-200 dark:border-neutral-800 hover:border-blue-300 dark:hover:border-blue-700 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
							<div class="flex items-start justify-between mb-4">
								<span class="px-3 py-1 rounded-lg text-sm font-semibold {difficultyConfig[challenge.difficulty].bg} {difficultyConfig[challenge.difficulty].color}">
									{challenge.difficulty}
								</span>
							</div>

							<h3 class="font-bold text-2xl mb-3 text-neutral-900 dark:text-neutral-50 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:via-cyan-600 group-hover:to-teal-600 group-hover:bg-clip-text transition-all">
								{challenge.title}
							</h3>

							<p class="text-neutral-600 dark:text-neutral-400 mb-4 line-clamp-3">
								{challenge.description}
							</p>

							<div class="flex flex-wrap gap-2 mb-4">
								{#each challenge.skills.slice(0, 4) as skill}
									<span class="px-2 py-1 rounded-md text-xs font-medium bg-blue-50 dark:bg-blue-950/30 text-blue-700 dark:text-blue-400 border border-blue-200 dark:border-blue-800">
										{skill}
									</span>
								{/each}
								{#if challenge.skills.length > 4}
									<span class="px-2 py-1 rounded-md text-xs font-medium bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400">
										+{challenge.skills.length - 4}
									</span>
								{/if}
							</div>

							<div class="space-y-2 mb-4">
								{#if challenge.recommendedFor && challenge.recommendedFor.length > 0}
									<div class="flex items-center gap-2 text-xs text-neutral-500 dark:text-neutral-500">
										<svg class="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
											<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
										</svg>
										<span>For: {challenge.recommendedFor.join(', ')}</span>
									</div>
								{/if}

								{#if challenge.collaborators && challenge.collaborators.length > 0}
									<div class="flex items-center gap-2 text-xs text-blue-600 dark:text-blue-400">
										<svg class="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
											<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
										</svg>
										<span>With: {challenge.collaborators.join(', ')}</span>
									</div>
								{/if}
							</div>

							<div class="flex items-center justify-end">
								<svg class="w-5 h-5 text-neutral-400 group-hover:text-neutral-600 dark:group-hover:text-neutral-300 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
								</svg>
							</div>
						</div>
					</a>
				{/each}
			</div>
		{/if}
	</div>
</div>