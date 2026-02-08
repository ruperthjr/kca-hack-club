<script lang="ts">
	import type { PageData } from './$types';
	import { fly } from 'svelte/transition';

	export let data: PageData;

	// Member configuration
	type MemberConfig = {
		name: string;
		program: string;
		gradient: string;
		bgGradient: string;
		border: string;
		hover: string;
		accent: string;
	};

	const memberConfig: { [key: string]: MemberConfig } = {
		jasmine: {
			name: 'Jasmine',
			program: 'BAC Software Engineering',
			gradient: 'from-purple-500 via-pink-500 to-rose-500',
			bgGradient: 'from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30',
			border: 'border-purple-200 dark:border-purple-800',
			hover: 'hover:border-purple-400 dark:hover:border-purple-600',
			accent: 'text-purple-600 dark:text-purple-400'
		},
		pauline: {
			name: 'Pauline',
			program: 'BIT Information Technology',
			gradient: 'from-emerald-500 via-green-500 to-teal-500',
			bgGradient: 'from-emerald-50 to-green-50 dark:from-emerald-950/30 dark:to-green-950/30',
			border: 'border-emerald-200 dark:border-emerald-800',
			hover: 'hover:border-emerald-400 dark:hover:border-emerald-600',
			accent: 'text-emerald-600 dark:text-emerald-400'
		},
		daniel: {
			name: 'Daniel',
			program: 'BSD Software Development',
			gradient: 'from-blue-500 via-indigo-500 to-purple-500',
			bgGradient: 'from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30',
			border: 'border-blue-200 dark:border-blue-800',
			hover: 'hover:border-blue-400 dark:hover:border-blue-600',
			accent: 'text-blue-600 dark:text-blue-400'
		},
		ruperth: {
			name: 'Ruperth',
			program: 'BSD Software Development',
			gradient: 'from-orange-500 via-red-500 to-pink-500',
			bgGradient: 'from-orange-50 to-red-50 dark:from-orange-950/30 dark:to-red-950/30',
			border: 'border-orange-200 dark:border-orange-800',
			hover: 'hover:border-orange-400 dark:hover:border-orange-600',
			accent: 'text-orange-600 dark:text-orange-400'
		},
		maryphin: {
			name: 'Maryphin',
			program: 'BSD Software Development',
			gradient: 'from-yellow-500 via-amber-500 to-orange-500',
			bgGradient: 'from-yellow-50 to-amber-50 dark:from-yellow-950/30 dark:to-amber-950/30',
			border: 'border-yellow-200 dark:border-yellow-800',
			hover: 'hover:border-yellow-400 dark:hover:border-yellow-600',
			accent: 'text-yellow-600 dark:text-yellow-400'
		}
	};

	const typeConfig = {
		daily: { label: 'Daily', icon: 'D' },
		weekly: { label: 'Weekly', icon: 'W' },
		monthly: { label: 'Monthly', icon: 'M' }
	};

	const difficultyColors = {
		beginner: 'bg-green-100 dark:bg-green-950/30 text-green-700 dark:text-green-400 border-green-200 dark:border-green-800',
		intermediate: 'bg-yellow-100 dark:bg-yellow-950/30 text-yellow-700 dark:text-yellow-400 border-yellow-200 dark:border-yellow-800',
		advanced: 'bg-red-100 dark:bg-red-950/30 text-red-700 dark:text-red-400 border-red-200 dark:border-red-800'
	};

	let selectedMember = 'all';
	let selectedType = 'all';
	let searchQuery = '';

	$: filteredChallenges = data.challenges.filter((challenge: any) => {
		const matchesMember = selectedMember === 'all' || challenge.member === selectedMember;
		const matchesType = selectedType === 'all' || challenge.type === selectedType;
		const matchesSearch = searchQuery === '' || 
			challenge.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
			challenge.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
			challenge.unit.toLowerCase().includes(searchQuery.toLowerCase());
		return matchesMember && matchesType && matchesSearch;
	});

	$: groupedByMember = filteredChallenges.reduce(
		(acc: Record<string, Record<string, any[]>>, challenge: any) => {
			if (!acc[challenge.member]) {
				acc[challenge.member] = {};
			}
			const memberGroup = acc[challenge.member]!;
			if (!memberGroup[challenge.type]) {
				memberGroup[challenge.type] = [];
			}
			memberGroup[challenge.type]!.push(challenge);
			return acc;
		},
		{} as Record<string, Record<string, any[]>>
	);

	$: totalChallenges = data.challenges.length;
</script>

<svelte:head>
	<title>{data.meta.title}</title>
	<meta name="description" content={data.meta.description} />
</svelte:head>

<div class="min-h-screen bg-gradient-to-br from-neutral-50 via-white to-neutral-100 dark:from-neutral-950 dark:via-neutral-900 dark:to-neutral-950">
	<!-- Hero Section -->
	<div class="relative overflow-hidden border-b border-neutral-200 dark:border-neutral-800 bg-gradient-to-br from-white to-neutral-50 dark:from-neutral-900 dark:to-neutral-950">
		<div class="absolute inset-0 bg-grid-neutral-200/50 dark:bg-grid-neutral-800/50 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
		<div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
			<div class="text-center max-w-3xl mx-auto">
				<div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 mb-6">
					<span class="relative flex h-2 w-2">
						<span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
						<span class="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
					</span>
					<span class="text-sm font-medium text-neutral-700 dark:text-neutral-300">Feb 9 - Apr 10, 2026</span>
				</div>
				
				<h1 class="font-display font-bold text-5xl md:text-6xl lg:text-7xl mb-6 text-neutral-900 dark:text-neutral-50">
					Coding <span class="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">Challenges</span>
				</h1>
				
				<p class="text-xl md:text-2xl text-neutral-600 dark:text-neutral-400 mb-8 leading-relaxed">
					Daily, weekly, and monthly challenges designed to sharpen your programming skills
				</p>

				<!-- Search Bar -->
				<div class="relative max-w-2xl mx-auto mb-8">
					<div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
						<svg class="h-5 w-5 text-neutral-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
						</svg>
					</div>
					<input
						type="text"
						bind:value={searchQuery}
						placeholder="Search challenges, units, or technologies..."
						class="w-full pl-12 pr-4 py-4 text-lg rounded-2xl bg-white dark:bg-neutral-900 border-2 border-neutral-200 dark:border-neutral-800 focus:border-blue-500 dark:focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 transition-all outline-none text-neutral-900 dark:text-neutral-50 placeholder-neutral-400"
					/>
				</div>

				<!-- Stats -->
				<div class="flex flex-wrap justify-center gap-6 text-sm">
					<div class="flex items-center gap-2 text-neutral-600 dark:text-neutral-400">
						<svg class="w-5 h-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
						</svg>
						<span>{totalChallenges} Total Challenges</span>
					</div>
					<div class="flex items-center gap-2 text-neutral-600 dark:text-neutral-400">
						<svg class="w-5 h-5 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
						</svg>
						<span>5 Team Members</span>
					</div>
					<div class="flex items-center gap-2 text-neutral-600 dark:text-neutral-400">
						<svg class="w-5 h-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
						</svg>
						<span>9 Weeks Duration</span>
					</div>
				</div>
			</div>
		</div>
	</div>

	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
		<!-- Filters -->
		<div class="mb-12 space-y-6">
			<!-- Member Filter -->
			<div>
				<h3 class="text-sm font-semibold text-neutral-700 dark:text-neutral-300 mb-3">Filter by Member</h3>
				<div class="flex flex-wrap gap-3">
					<button
						on:click={() => selectedMember = 'all'}
						class="px-4 py-2 rounded-xl font-medium transition-all duration-200 {selectedMember === 'all' 
							? 'bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 shadow-lg scale-105' 
							: 'bg-white dark:bg-neutral-900 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-50 dark:hover:bg-neutral-800 border border-neutral-200 dark:border-neutral-800'}"
					>
						All Members
					</button>
					{#each Object.keys(data.groupedChallenges) as member}
						{@const memberData = data.groupedChallenges[member]}
						<button
							on:click={() => selectedMember = member}
							class="group relative px-4 py-2 rounded-xl font-medium transition-all duration-200 {selectedMember === member 
								? 'bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 shadow-lg scale-105' 
								: 'bg-white dark:bg-neutral-900 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-50 dark:hover:bg-neutral-800 border border-neutral-200 dark:border-neutral-800'}"
						>
							<span class="capitalize">{memberConfig[member]?.name || member}</span>
							{#if memberData}
								<span class="text-xs opacity-75 ml-1">({Object.values(memberData).flat().length})</span>
							{/if}
						</button>
					{/each}
				</div>
			</div>

			<!-- Type Filter -->
			<div>
				<h3 class="text-sm font-semibold text-neutral-700 dark:text-neutral-300 mb-3">Filter by Type</h3>
				<div class="flex flex-wrap gap-3">
					{#each ['all', 'daily', 'weekly', 'monthly'] as type}
						<button
							on:click={() => selectedType = type}
							class="px-4 py-2 rounded-xl font-medium transition-all duration-200 {selectedType === type 
								? 'bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 shadow-lg scale-105' 
								: 'bg-white dark:bg-neutral-900 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-50 dark:hover:bg-neutral-800 border border-neutral-200 dark:border-neutral-800'}"
						>
							<span class="capitalize">{type}</span>
						</button>
					{/each}
				</div>
			</div>
		</div>

		<!-- Challenges Grid by Member -->
		{#if Object.keys(groupedByMember).length === 0}
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
			{#each Object.entries(groupedByMember) as [member, types], i}
				<div 
					class="mb-16"
					in:fly={{ y: 20, duration: 400, delay: i * 100 }}
				>
					<!-- Member Header -->
					<div class="flex items-center gap-4 mb-8">
						<div class="flex items-center gap-3 px-6 py-3 rounded-2xl bg-gradient-to-r {memberConfig[member]?.gradient ?? 'from-neutral-500 to-neutral-600'} text-white shadow-xl">
							<div>
								<h2 class="font-display font-bold text-2xl">{memberConfig[member]?.name ?? member}</h2>
								<p class="text-sm opacity-90">{memberConfig[member]?.program ?? ''}</p>
							</div>
						</div>
						<div class="h-px flex-1 bg-gradient-to-r from-neutral-200 dark:from-neutral-800 to-transparent"></div>
					</div>

					<!-- Challenge Types -->
					{#each Object.entries(types) as [type, challenges]}
						<div class="mb-10">
							<!-- Type Header -->
							<div class="flex items-center gap-3 mb-6">
								<div class="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r {memberConfig[member]?.bgGradient ?? 'from-neutral-50 to-neutral-100 dark:from-neutral-950/30 dark:to-neutral-900/30'} border {memberConfig[member]?.border ?? 'border-neutral-200 dark:border-neutral-800'}">
									<div class="w-6 h-6 rounded-md bg-white dark:bg-neutral-900 flex items-center justify-center text-xs font-bold {memberConfig[member]?.accent ?? 'text-neutral-600 dark:text-neutral-400'}">
										{typeConfig[type as keyof typeof typeConfig]?.icon}
									</div>
									<h3 class="font-semibold text-lg text-neutral-900 dark:text-neutral-50 capitalize">{type} Challenges</h3>
									<span class="text-sm text-neutral-600 dark:text-neutral-400">({challenges.length})</span>
								</div>
							</div>

							<!-- Challenge Cards -->
							<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
								{#each challenges as challenge}
									<a
										href="/challenges/{challenge.slug}"
										class="group relative p-6 rounded-2xl bg-white dark:bg-neutral-900 border-2 {memberConfig[member]?.border ?? 'border-neutral-200 dark:border-neutral-800'} {memberConfig[member]?.hover ?? 'hover:border-neutral-400 dark:hover:border-neutral-600'} transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
									>
										<!-- Challenge Header -->
										<div class="mb-4">
											<div class="flex items-start justify-between mb-3">
												<div class="flex-1">
													<h4 class="font-bold text-xl mb-2 text-neutral-900 dark:text-neutral-50 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:{memberConfig[member]?.gradient ?? 'from-neutral-500 to-neutral-600'} group-hover:bg-clip-text transition-all">
														{challenge.title}
													</h4>
													{#if challenge.description}
														<p class="text-sm text-neutral-600 dark:text-neutral-400 line-clamp-2 leading-relaxed">
															{challenge.description}
														</p>
													{/if}
												</div>
												<svg class="w-6 h-6 text-neutral-400 group-hover:text-neutral-600 dark:group-hover:text-neutral-300 transition-colors flex-shrink-0 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
													<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
												</svg>
											</div>

											<!-- Badges -->
											<div class="flex flex-wrap gap-2 mb-3">
												{#if challenge.difficulty}
													<span class="text-xs px-2 py-1 rounded-md font-semibold border {difficultyColors[challenge.difficulty as keyof typeof difficultyColors]}">
														{challenge.difficulty}
													</span>
												{/if}
												{#if challenge.day}
													<span class="text-xs px-2 py-1 rounded-md bg-blue-50 dark:bg-blue-950/30 text-blue-700 dark:text-blue-400 border border-blue-200 dark:border-blue-800 font-semibold">
														Day {challenge.day}
													</span>
												{/if}
												{#if challenge.week}
													<span class="text-xs px-2 py-1 rounded-md bg-purple-50 dark:bg-purple-950/30 text-purple-700 dark:text-purple-400 border border-purple-200 dark:border-purple-800 font-semibold">
														Week {challenge.week}
													</span>
												{/if}
												{#if challenge.month}
													<span class="text-xs px-2 py-1 rounded-md bg-orange-50 dark:bg-orange-950/30 text-orange-700 dark:text-orange-400 border border-orange-200 dark:border-orange-800 font-semibold">
														Month {challenge.month}
													</span>
												{/if}
											</div>
										</div>

										<!-- Challenge Meta -->
										<div class="space-y-2 text-xs text-neutral-500 dark:text-neutral-500">
											{#if challenge.unit}
												<div class="flex items-center gap-2">
													<svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
														<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
													</svg>
													<span>{challenge.unit}</span>
												</div>
											{/if}
											{#if challenge.estimatedTime}
												<div class="flex items-center gap-2">
													<svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
														<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
													</svg>
													<span>{challenge.estimatedTime}</span>
												</div>
											{/if}
										</div>

										<!-- Hover Effect -->
										<div class="absolute inset-0 rounded-2xl bg-gradient-to-r {memberConfig[member]?.gradient ?? 'from-neutral-500 to-neutral-600'} opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
									</a>
								{/each}
							</div>
						</div>
					{/each}
				</div>
			{/each}
		{/if}
	</div>
</div>

<style>
	.bg-grid-neutral-200\/50 {
		background-image: linear-gradient(rgb(229 229 229 / 0.5) 1px, transparent 1px),
			linear-gradient(90deg, rgb(229 229 229 / 0.5) 1px, transparent 1px);
		background-size: 50px 50px;
	}

	:global(.dark) .bg-grid-neutral-800\/50 {
		background-image: linear-gradient(rgb(38 38 38 / 0.5) 1px, transparent 1px),
			linear-gradient(90deg, rgb(38 38 38 / 0.5) 1px, transparent 1px);
		background-size: 50px 50px;
	}
</style>