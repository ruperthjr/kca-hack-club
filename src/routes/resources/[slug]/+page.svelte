<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
	const ResourceComponent = data.resource.component;

	// Enhanced category configuration matching the main page
	const categoryConfig = {
		books: {
			icon: '',
			gradient: 'from-purple-500 via-pink-500 to-rose-500',
			bgGradient: 'from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30',
			border: 'border-purple-200 dark:border-purple-800',
			accent: 'text-purple-600 dark:text-purple-400'
		},
		courses: {
			icon: '',
			gradient: 'from-emerald-500 via-green-500 to-teal-500',
			bgGradient: 'from-emerald-50 to-green-50 dark:from-emerald-950/30 dark:to-green-950/30',
			border: 'border-emerald-200 dark:border-emerald-800',
			accent: 'text-emerald-600 dark:text-emerald-400'
		},
		youtube: {
			icon: '',
			gradient: 'from-red-500 via-orange-500 to-amber-500',
			bgGradient: 'from-red-50 to-orange-50 dark:from-red-950/30 dark:to-orange-950/30',
			border: 'border-red-200 dark:border-red-800',
			accent: 'text-red-600 dark:text-red-400'
		},
		practice: {
			icon: '',
			gradient: 'from-indigo-500 via-purple-500 to-blue-500',
			bgGradient: 'from-indigo-50 to-purple-50 dark:from-indigo-950/30 dark:to-purple-950/30',
			border: 'border-indigo-200 dark:border-indigo-800',
			accent: 'text-indigo-600 dark:text-indigo-400'
		},
		tools: {
			icon: '',
			gradient: 'from-yellow-500 via-amber-500 to-orange-500',
			bgGradient: 'from-yellow-50 to-amber-50 dark:from-yellow-950/30 dark:to-amber-950/30',
			border: 'border-yellow-200 dark:border-yellow-800',
			accent: 'text-yellow-600 dark:text-yellow-400'
		}
	};

	const category = data.resource.category as keyof typeof categoryConfig;
	const config = categoryConfig[category] || {
		icon: '',
		gradient: 'from-neutral-500 to-neutral-600',
		bgGradient: 'from-neutral-50 to-neutral-100 dark:from-neutral-950/30 dark:to-neutral-900/30',
		border: 'border-neutral-200 dark:border-neutral-800',
		accent: 'text-neutral-600 dark:text-neutral-400'
	};
</script>

<svelte:head>
	<title>{data.meta.title}</title>
	<meta name="description" content={data.meta.description} />
</svelte:head>

<div class="min-h-screen bg-gradient-to-br from-neutral-50 via-white to-neutral-100 dark:from-neutral-950 dark:via-neutral-900 dark:to-neutral-950">
	<div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
		<!-- Back Button -->
		<div class="mb-8">
			<a 
				href="/resources" 
				class="group inline-flex items-center gap-2 px-4 py-2 rounded-xl text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-50 hover:bg-white dark:hover:bg-neutral-900 transition-all border border-transparent hover:border-neutral-200 dark:hover:border-neutral-800"
			>
				<svg class="w-5 h-5 transition-transform group-hover:-translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
				</svg>
				<span class="font-medium">Back to Resources</span>
			</a>
		</div>

		<!-- Resource Header -->
		<div class="mb-12 p-8 md:p-10 rounded-3xl bg-white dark:bg-neutral-900 border-2 {config.border} shadow-2xl relative overflow-hidden">
			<!-- Decorative gradient background -->
			<div class="absolute inset-0 bg-gradient-to-br {config.bgGradient} opacity-50"></div>
			
			<div class="relative">
				<!-- Badges -->
				<div class="flex flex-wrap items-center gap-3 mb-6">
					<span class="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold bg-gradient-to-r {config.gradient} text-white shadow-lg">
						<span class="text-xl">{config.icon}</span>
						<span class="capitalize">{data.resource.category}</span>
					</span>
					{#if data.resource.subcategory}
						<span class="px-4 py-2 rounded-xl text-sm font-semibold bg-gradient-to-r {config.bgGradient} {config.accent} border {config.border}">
							{data.resource.subcategory}
						</span>
					{/if}
				</div>
				
				<!-- Title -->
				<h1 class="font-display font-bold text-4xl md:text-5xl lg:text-6xl mb-6 text-neutral-900 dark:text-neutral-50 leading-tight">
					{data.resource.title}
				</h1>
				
				<!-- Description -->
				{#if data.resource.description}
					<p class="text-xl md:text-2xl text-neutral-600 dark:text-neutral-400 mb-6 leading-relaxed">
						{data.resource.description}
					</p>
				{/if}
				
				<!-- Last Updated -->
				<div class="flex items-center gap-2 text-sm text-neutral-500 dark:text-neutral-500">
					<svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
					</svg>
					<span>Last updated {new Date(data.resource.lastUpdated).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
				</div>
			</div>
		</div>

		<!-- Related Units & Recommended For -->
		<div class="grid md:grid-cols-2 gap-6 mb-8">
			{#if data.resource.units && data.resource.units.length > 0}
				<div class="p-6 rounded-2xl bg-white dark:bg-neutral-900 border-2 border-neutral-200 dark:border-neutral-800 hover:border-blue-300 dark:hover:border-blue-700 transition-colors">
					<h3 class="font-bold text-lg mb-4 text-neutral-900 dark:text-neutral-50 flex items-center gap-2">
						<div class="p-2 rounded-lg bg-blue-100 dark:bg-blue-950/30">
							<svg class="w-5 h-5 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
							</svg>
						</div>
						Related Units
					</h3>
					<ul class="space-y-2">
						{#each data.resource.units as unit}
							<li class="flex items-start gap-3 text-sm text-neutral-700 dark:text-neutral-300 p-2 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-950/20 transition-colors">
								<span class="text-blue-500 mt-0.5 font-bold">→</span>
								<span class="flex-1">{unit}</span>
							</li>
						{/each}
					</ul>
				</div>
			{/if}

			{#if data.resource.recommendedFor && data.resource.recommendedFor.length > 0}
				<div class="p-6 rounded-2xl bg-white dark:bg-neutral-900 border-2 border-neutral-200 dark:border-neutral-800 hover:border-purple-300 dark:hover:border-purple-700 transition-colors">
					<h3 class="font-bold text-lg mb-4 text-neutral-900 dark:text-neutral-50 flex items-center gap-2">
						<div class="p-2 rounded-lg bg-purple-100 dark:bg-purple-950/30">
							<svg class="w-5 h-5 text-purple-600 dark:text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
							</svg>
						</div>
						Recommended For
					</h3>
					<div class="flex flex-wrap gap-2">
						{#each data.resource.recommendedFor as person}
							<span class="px-4 py-2 rounded-xl text-sm font-semibold bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 text-purple-700 dark:text-purple-300 border-2 border-purple-200 dark:border-purple-800 hover:scale-105 transition-transform">
								{person}
							</span>
						{/each}
					</div>
				</div>
			{/if}
		</div>

		<!-- Quick Links -->
		{#if data.resource.links && data.resource.links.length > 0}
			<div class="mb-8 p-8 rounded-2xl bg-gradient-to-br {config.bgGradient} border-2 {config.border}">
				<h3 class="font-bold text-xl mb-6 text-neutral-900 dark:text-neutral-50 flex items-center gap-3">
					<div class="p-2 rounded-lg bg-white dark:bg-neutral-900 shadow-md">
						<svg class="w-6 h-6 {config.accent}" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
						</svg>
					</div>
					Quick Access Links
				</h3>
				<div class="grid md:grid-cols-2 gap-4">
					{#each data.resource.links as link}
						<a 
							href={link.url}
							target="_blank"
							rel="noopener noreferrer"
							class="group flex items-center justify-between p-5 rounded-xl bg-white dark:bg-neutral-900 hover:shadow-xl transition-all border-2 border-neutral-200 dark:border-neutral-800 hover:{config.border} hover:scale-105"
						>
							<span class="text-neutral-900 dark:text-neutral-50 font-semibold">{link.name}</span>
							<svg class="w-5 h-5 text-neutral-400 group-hover:{config.accent} transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
							</svg>
						</a>
					{/each}
				</div>
			</div>
		{/if}

		<!-- Main Content -->
		<div class="prose prose-lg prose-neutral dark:prose-invert max-w-none
			prose-headings:font-display prose-headings:font-bold
			prose-h1:text-4xl prose-h2:text-3xl prose-h3:text-2xl
			prose-h1:border-b-2 prose-h1:border-neutral-200 dark:prose-h1:border-neutral-800 prose-h1:pb-4 prose-h1:mb-8
			prose-h2:mt-12 prose-h2:mb-6
			prose-h3:mt-8 prose-h3:mb-4
			prose-p:text-neutral-700 dark:prose-p:text-neutral-300 prose-p:leading-relaxed
			prose-a:text-blue-600 dark:prose-a:text-blue-400 prose-a:font-medium prose-a:no-underline hover:prose-a:underline
			prose-code:text-blue-600 dark:prose-code:text-blue-400 prose-code:bg-blue-50 dark:prose-code:bg-blue-950/30 prose-code:px-2 prose-code:py-1 prose-code:rounded-md prose-code:font-mono prose-code:text-sm
			prose-pre:bg-neutral-100 dark:prose-pre:bg-neutral-900 prose-pre:border-2 prose-pre:border-neutral-200 dark:prose-pre:border-neutral-800 prose-pre:rounded-xl
			prose-strong:text-neutral-900 dark:prose-strong:text-neutral-50 prose-strong:font-bold
			prose-ul:list-disc prose-ol:list-decimal prose-ul:my-6 prose-ol:my-6
			prose-li:text-neutral-700 dark:prose-li:text-neutral-300 prose-li:my-2
			prose-blockquote:border-l-4 prose-blockquote:border-blue-500 prose-blockquote:bg-blue-50 dark:prose-blockquote:bg-blue-950/30 prose-blockquote:p-6 prose-blockquote:rounded-r-xl prose-blockquote:not-italic
			prose-table:border-2 prose-table:border-neutral-200 dark:prose-table:border-neutral-800 prose-table:rounded-lg
			prose-th:bg-neutral-100 dark:prose-th:bg-neutral-800 prose-th:font-bold
			prose-td:border prose-td:border-neutral-200 dark:prose-td:border-neutral-800
			prose-img:rounded-xl prose-img:shadow-lg
			mb-12 p-8 rounded-2xl bg-white dark:bg-neutral-900 border-2 border-neutral-200 dark:border-neutral-800">
			<ResourceComponent />
		</div>
	</div>
</div>

<style>
	.bg-grid-white\/5 {
		background-image: linear-gradient(rgb(255 255 255 / 0.05) 1px, transparent 1px),
			linear-gradient(90deg, rgb(255 255 255 / 0.05) 1px, transparent 1px);
		background-size: 30px 30px;
	}
</style>