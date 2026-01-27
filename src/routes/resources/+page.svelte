<script lang="ts">
	import type { PageData } from './$types';
	import { fly } from 'svelte/transition';

	export let data: PageData;

	// Category configuration
	type CategoryConfig = {
		icon: string;
		gradient: string;
		bgGradient: string;
		border: string;
		hover: string;
		description: string;
	};
	const categoryConfig: { [key: string]: CategoryConfig } = {
		books: {
			icon: '',
			gradient: 'from-purple-500 via-pink-500 to-rose-500',
			bgGradient: 'from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30',
			border: 'border-purple-200 dark:border-purple-800',
			hover: 'hover:border-purple-400 dark:hover:border-purple-600',
			description: 'Essential books for computer science and programming mastery'
		},
		courses: {
			icon: '',
			gradient: 'from-emerald-500 via-green-500 to-teal-500',
			bgGradient: 'from-emerald-50 to-green-50 dark:from-emerald-950/30 dark:to-green-950/30',
			border: 'border-emerald-200 dark:border-emerald-800',
			hover: 'hover:border-emerald-400 dark:hover:border-emerald-600',
			description: 'Structured online courses and certifications from top platforms'
		},
		youtube: {
			icon: '',
			gradient: 'from-red-500 via-orange-500 to-amber-500',
			bgGradient: 'from-red-50 to-orange-50 dark:from-red-950/30 dark:to-orange-950/30',
			border: 'border-red-200 dark:border-red-800',
			hover: 'hover:border-red-400 dark:hover:border-red-600',
			description: 'YouTube channels and playlists for visual learning'
		},
		practice: {
			icon: '',
			gradient: 'from-indigo-500 via-purple-500 to-blue-500',
			bgGradient: 'from-indigo-50 to-purple-50 dark:from-indigo-950/30 dark:to-purple-950/30',
			border: 'border-indigo-200 dark:border-indigo-800',
			hover: 'hover:border-indigo-400 dark:hover:border-indigo-600',
			description: 'Coding platforms for hands-on practice and challenges'
		},
		tools: {
			icon: '',
			gradient: 'from-yellow-500 via-amber-500 to-orange-500',
			bgGradient: 'from-yellow-50 to-amber-50 dark:from-yellow-950/30 dark:to-amber-950/30',
			border: 'border-yellow-200 dark:border-yellow-800',
			hover: 'hover:border-yellow-400 dark:hover:border-yellow-600',
			description: 'Development tools, IDEs, and productivity software'
		}
	};

	let selectedCategory = 'all';
	let searchQuery = '';

	$: filteredResources = data.resources.filter((resource: any) => {
		const matchesCategory = selectedCategory === 'all' || resource.category === selectedCategory;
		const matchesSearch = searchQuery === '' || 
			resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
			resource.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
			resource.subcategory.toLowerCase().includes(searchQuery.toLowerCase());
		return matchesCategory && matchesSearch;
	});

	// Group by category and subcategory
	$: groupedByCategory = filteredResources.reduce(
		(acc: Record<string, Record<string, any[]>>, resource: any) => {
			const cat = acc[resource.category] || (acc[resource.category] = {});
			const sub = String(resource.subcategory ?? 'uncategorized');
			const list = (cat[sub] as any[]) || (cat[sub] = []);
			list.push(resource);
			return acc;
		},
		{} as Record<string, Record<string, any[]>>
	);

	$: categories = ['all', ...Object.keys(data.groupedResources)];

	// Stats
	$: totalResources = data.resources.length;
	$: totalCategories = Object.keys(data.groupedResources).length;
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
					<span class="text-sm font-medium text-neutral-700 dark:text-neutral-300">{totalResources} Resources Available</span>
				</div>
				
				<h1 class="font-display font-bold text-5xl md:text-6xl lg:text-7xl mb-6 text-neutral-900 dark:text-neutral-50">
					Learning <span class="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">Resources</span>
				</h1>
				
				<p class="text-xl md:text-2xl text-neutral-600 dark:text-neutral-400 mb-8 leading-relaxed">
					{data.meta.description}
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
						placeholder="Search resources, topics, or technologies..."
						class="w-full pl-12 pr-4 py-4 text-lg rounded-2xl bg-white dark:bg-neutral-900 border-2 border-neutral-200 dark:border-neutral-800 focus:border-blue-500 dark:focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 transition-all outline-none text-neutral-900 dark:text-neutral-50 placeholder-neutral-400"
					/>
				</div>

				<!-- Stats -->
				<div class="flex flex-wrap justify-center gap-6 text-sm">
					<div class="flex items-center gap-2 text-neutral-600 dark:text-neutral-400">
						<svg class="w-5 h-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
						</svg>
						<span>{totalCategories} Categories</span>
					</div>
					<div class="flex items-center gap-2 text-neutral-600 dark:text-neutral-400">
						<svg class="w-5 h-5 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
						</svg>
						<span>All Skill Levels</span>
					</div>
					<div class="flex items-center gap-2 text-neutral-600 dark:text-neutral-400">
						<svg class="w-5 h-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
						</svg>
						<span>Updated</span>
					</div>
				</div>
			</div>
		</div>
	</div>

	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
		<!-- Category Filter -->
		<div class="mb-12">
			<div class="flex flex-wrap gap-3 justify-center">
				{#each categories as category}
					<button
						on:click={() => selectedCategory = category}
						class="group relative px-6 py-3 rounded-xl font-medium transition-all duration-200 {selectedCategory === category 
							? 'bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 shadow-lg scale-105' 
							: 'bg-white dark:bg-neutral-900 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-50 dark:hover:bg-neutral-800 border border-neutral-200 dark:border-neutral-800'}"
					>
						<span class="flex items-center gap-2">
							{#if category !== 'all'}
								<span class="text-xl">{categoryConfig[category]?.icon || ''}</span>
							{/if}
							<span class="capitalize">{category}</span>
							{#if category !== 'all'}
								<span class="text-sm opacity-75">({data.groupedResources[category]?.length || 0})</span>
							{/if}
						</span>
					</button>
				{/each}
			</div>
		</div>

		<!-- Resources Grid by Category -->
		{#if Object.keys(groupedByCategory).length === 0}
			<div class="text-center py-16">
				<div class="inline-flex items-center justify-center w-20 h-20 rounded-full bg-neutral-100 dark:bg-neutral-800 mb-4">
					<svg class="w-10 h-10 text-neutral-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
					</svg>
				</div>
				<h3 class="text-2xl font-bold text-neutral-900 dark:text-neutral-50 mb-2">No resources found</h3>
				<p class="text-neutral-600 dark:text-neutral-400">Try adjusting your search or filter</p>
			</div>
		{:else}
			{#each Object.entries(groupedByCategory) as [category, subcategories], i}
				<div 
					class="mb-16"
					in:fly={{ y: 20, duration: 400, delay: i * 100 }}
				>
					<!-- Category Header -->
					<div class="flex items-center gap-4 mb-8">
						<div class="flex items-center gap-3 px-6 py-3 rounded-2xl bg-gradient-to-r {categoryConfig[category]?.gradient ?? 'from-neutral-500 to-neutral-600'} text-white shadow-xl">
							<span class="text-3xl">{categoryConfig[category]?.icon ?? ''}</span>
							<div>
								<h2 class="font-display font-bold text-2xl capitalize">{category}</h2>
								<p class="text-sm opacity-90">{categoryConfig[category]?.description ?? ''}</p>
							</div>
						</div>
						<div class="h-px flex-1 bg-gradient-to-r from-neutral-200 dark:from-neutral-800 to-transparent"></div>
					</div>

					<!-- Subcategories -->
					{#each Object.entries(subcategories as Record<string, any[]>) as [subcategory, resources]}
						<div class="mb-10">
							<!-- Subcategory Header -->
							<div class="flex items-center gap-3 mb-6">
								<div class="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r {categoryConfig[category]?.bgGradient ?? 'from-neutral-50 to-neutral-100 dark:from-neutral-950/30 dark:to-neutral-900/30'} border {categoryConfig[category]?.border ?? 'border-neutral-200 dark:border-neutral-800'}">
									<svg class="w-5 h-5 text-neutral-600 dark:text-neutral-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
										<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
									</svg>
									<h3 class="font-semibold text-lg text-neutral-900 dark:text-neutral-50">{subcategory}</h3>
									<span class="text-sm text-neutral-600 dark:text-neutral-400">({resources.length})</span>
								</div>
							</div>

							<!-- Resource Cards -->
							<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
								{#each resources as resource}
									<a
										href="/resources/{resource.slug}"
										class="group relative p-6 rounded-2xl bg-white dark:bg-neutral-900 border-2 {categoryConfig[category]?.border ?? 'border-neutral-200 dark:border-neutral-800'} {categoryConfig[category]?.hover ?? 'hover:border-neutral-400 dark:hover:border-neutral-600'} transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
									>
										<!-- Resource Header -->
										<div class="flex items-start justify-between mb-4">
											<div class="flex-1">
												<h4 class="font-bold text-xl mb-2 text-neutral-900 dark:text-neutral-50 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:{categoryConfig[category]?.gradient ?? 'from-neutral-500 to-neutral-600'} group-hover:bg-clip-text transition-all">
													{resource.title}
												</h4>
												<p class="text-sm text-neutral-600 dark:text-neutral-400 line-clamp-2 leading-relaxed">
													{resource.description}
												</p>
											</div>
											<svg class="w-6 h-6 text-neutral-400 group-hover:text-neutral-600 dark:group-hover:text-neutral-300 transition-colors flex-shrink-0 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
												<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
											</svg>
										</div>

										<!-- Resource Meta -->
										<div class="space-y-3">
											<!-- Units -->
											{#if resource.units && resource.units.length > 0}
												<div class="flex items-start gap-2">
													<svg class="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
														<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
													</svg>
													<div class="flex-1">
														<span class="text-xs font-medium text-neutral-500 dark:text-neutral-500">Related Units:</span>
														<div class="flex flex-wrap gap-1 mt-1">
															{#each resource.units.slice(0, 2) as unit}
																<span class="text-xs px-2 py-0.5 rounded-md bg-blue-50 dark:bg-blue-950/30 text-blue-700 dark:text-blue-400 border border-blue-200 dark:border-blue-800">
																	{unit}
																</span>
															{/each}
															{#if resource.units.length > 2}
																<span class="text-xs px-2 py-0.5 rounded-md bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400">
																	+{resource.units.length - 2} more
																</span>
															{/if}
														</div>
													</div>
												</div>
											{/if}

											<!-- Last Updated -->
											<div class="flex items-center gap-2 text-xs text-neutral-500 dark:text-neutral-500">
												<svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
													<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
												</svg>
												<span>Updated {new Date(resource.lastUpdated).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}</span>
											</div>
										</div>

										<!-- Hover Effect -->
										<div class="absolute inset-0 rounded-2xl bg-gradient-to-r {categoryConfig[category]?.gradient ?? 'from-neutral-500 to-neutral-600'} opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
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

	.bg-grid-white\/5 {
		background-image: linear-gradient(rgb(255 255 255 / 0.05) 1px, transparent 1px),
			linear-gradient(90deg, rgb(255 255 255 / 0.05) 1px, transparent 1px);
		background-size: 30px 30px;
	}
</style>