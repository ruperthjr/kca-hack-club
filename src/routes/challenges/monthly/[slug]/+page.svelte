<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;

	const isWeekly = data.challenge.category === 'weekly';

	const categoryConfig = {
		weekly: {
			icon: '',
			gradient: 'from-blue-500 via-cyan-500 to-teal-500',
			bg: 'bg-blue-50 dark:bg-blue-950/30',
			border: 'border-blue-200 dark:border-blue-800',
			backLink: '/challenges/weekly',
			backText: 'Back to Weekly Challenges'
		},
		monthly: {
			icon: '',
			gradient: 'from-purple-500 via-pink-500 to-rose-500',
			bg: 'bg-purple-50 dark:bg-purple-950/30',
			border: 'border-purple-200 dark:border-purple-800',
			backLink: '/challenges/monthly',
			backText: 'Back to Monthly Challenges'
		},
		daily: {
			icon: '',
			gradient: 'from-yellow-500 via-amber-500 to-orange-500',
			bg: 'bg-yellow-50 dark:bg-yellow-950/30',
			border: 'border-yellow-200 dark:border-yellow-800',
			backLink: '/challenges/daily',
			backText: 'Back to Daily Challenges'
		}
	};

	const difficultyConfig = {
		beginner: {
			icon: '',
			gradient: 'from-green-500 to-emerald-500',
			bg: 'bg-green-50 dark:bg-green-950/30',
			border: 'border-green-200 dark:border-green-800',
			text: 'text-green-600 dark:text-green-400'
		},
		intermediate: {
			icon: '',
			gradient: 'from-yellow-500 to-orange-500',
			bg: 'bg-yellow-50 dark:bg-yellow-950/30',
			border: 'border-yellow-200 dark:border-yellow-800',
			text: 'text-yellow-600 dark:text-yellow-400'
		},
		advanced: {
			icon: '',
			gradient: 'from-red-500 to-pink-500',
			bg: 'bg-red-50 dark:bg-red-950/30',
			border: 'border-red-200 dark:border-red-800',
			text: 'text-red-600 dark:text-red-400'
		}
	};

	const catConfig = categoryConfig[data.challenge.category];
	const diffConfig = difficultyConfig[data.challenge.difficulty];
</script>

<svelte:head>
	<title>{data.meta.title}</title>
	<meta name="description" content={data.meta.description} />
</svelte:head>

<div class="min-h-screen bg-gradient-to-br from-neutral-50 via-white to-neutral-100 dark:from-neutral-950 dark:via-neutral-900 dark:to-neutral-950">
	<div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
		<div class="mb-8">
			<a 
				href={catConfig.backLink}
				class="group inline-flex items-center gap-2 px-4 py-2 rounded-xl text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-50 hover:bg-white dark:hover:bg-neutral-900 transition-all border border-transparent hover:border-neutral-200 dark:hover:border-neutral-800"
			>
				<svg class="w-5 h-5 transition-transform group-hover:-translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
				</svg>
				<span class="font-medium">{catConfig.backText}</span>
			</a>
		</div>

		<div class="mb-12 p-8 md:p-10 rounded-3xl bg-white dark:bg-neutral-900 border-2 {catConfig.border} shadow-2xl relative overflow-hidden">
			<div class="absolute inset-0 bg-gradient-to-br {catConfig.bg} opacity-50"></div>
			
			<div class="relative">
				<div class="flex flex-wrap items-center gap-3 mb-6">
					<span class="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold bg-gradient-to-r {diffConfig.gradient} text-white shadow-lg">
						<span class="text-xl">{diffConfig.icon}</span>
						<span class="capitalize">{data.challenge.difficulty}</span>
					</span>
					<span class="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold bg-gradient-to-r {catConfig.gradient} text-white shadow-lg">
						<span class="text-xl">{catConfig.icon}</span>
						<span class="capitalize">{data.challenge.category} Challenge</span>
					</span>
					<span class="px-4 py-2 rounded-xl text-sm font-semibold bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300">
						 {data.challenge.estimatedTime}
					</span>
				</div>
				
				<h1 class="font-display font-bold text-4xl md:text-5xl lg:text-6xl mb-6 text-neutral-900 dark:text-neutral-50 leading-tight">
					{data.challenge.title}
				</h1>
				
				<p class="text-xl md:text-2xl text-neutral-600 dark:text-neutral-400 mb-6 leading-relaxed">
					{data.challenge.description}
				</p>
				
				<div class="flex items-center gap-4 text-sm flex-wrap">
					<span class="font-semibold {isWeekly ? 'text-blue-600 dark:text-blue-400' : 'text-purple-600 dark:text-purple-400'}">
						 {data.challenge.points} points
					</span>
					<span class="text-neutral-500 dark:text-neutral-500">•</span>
					<div class="flex flex-wrap gap-2">
						{#each data.challenge.skills as skill}
							<span class="px-3 py-1 rounded-md bg-{isWeekly ? 'blue' : 'purple'}-50 dark:bg-{isWeekly ? 'blue' : 'purple'}-950/30 text-{isWeekly ? 'blue' : 'purple'}-700 dark:text-{isWeekly ? 'blue' : 'purple'}-400 border border-{isWeekly ? 'blue' : 'purple'}-200 dark:border-{isWeekly ? 'blue' : 'purple'}-800 font-medium">
								{skill}
							</span>
						{/each}
					</div>
				</div>
			</div>
		</div>

		<div class="grid md:grid-cols-3 gap-6 mb-8">
			{#if data.challenge.learningObjectives && data.challenge.learningObjectives.length > 0}
				<div class="p-6 rounded-2xl bg-white dark:bg-neutral-900 border-2 border-neutral-200 dark:border-neutral-800">
					<h3 class="font-bold text-lg mb-4 text-neutral-900 dark:text-neutral-50 flex items-center gap-2">
						<div class="p-2 rounded-lg {catConfig.bg}">
							<svg class="w-5 h-5 {isWeekly ? 'text-blue-600 dark:text-blue-400' : 'text-purple-600 dark:text-purple-400'}" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
							</svg>
						</div>
						Learning Objectives
					</h3>
					<ul class="space-y-2">
						{#each data.challenge.learningObjectives as objective}
							<li class="flex items-start gap-2 text-sm text-neutral-700 dark:text-neutral-300">
								<span class="{isWeekly ? 'text-blue-500' : 'text-purple-500'} mt-0.5">→</span>
								<span class="flex-1">{objective}</span>
							</li>
						{/each}
					</ul>
				</div>
			{/if}

			{#if data.challenge.deliverables && data.challenge.deliverables.length > 0}
				<div class="p-6 rounded-2xl bg-white dark:bg-neutral-900 border-2 border-neutral-200 dark:border-neutral-800">
					<h3 class="font-bold text-lg mb-4 text-neutral-900 dark:text-neutral-50 flex items-center gap-2">
						<div class="p-2 rounded-lg bg-green-100 dark:bg-green-950/30">
							<svg class="w-5 h-5 text-green-600 dark:text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
							</svg>
						</div>
						Deliverables
					</h3>
					<ul class="space-y-2">
						{#each data.challenge.deliverables as deliverable}
							<li class="flex items-start gap-2 text-sm text-neutral-700 dark:text-neutral-300">
								<span class="text-green-500 mt-0.5">✓</span>
								<span class="flex-1">{deliverable}</span>
							</li>
						{/each}
					</ul>
				</div>
			{/if}

			{#if data.challenge.recommendedFor && data.challenge.recommendedFor.length > 0}
				<div class="p-6 rounded-2xl bg-white dark:bg-neutral-900 border-2 border-neutral-200 dark:border-neutral-800">
					<h3 class="font-bold text-lg mb-4 text-neutral-900 dark:text-neutral-50 flex items-center gap-2">
						<div class="p-2 rounded-lg bg-purple-100 dark:bg-purple-950/30">
							<svg class="w-5 h-5 text-purple-600 dark:text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
							</svg>
						</div>
						Recommended For
					</h3>
					<div class="flex flex-wrap gap-2">
						{#each data.challenge.recommendedFor as person}
							<span class="px-3 py-1.5 rounded-lg text-sm font-semibold bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-800">
								{person}
							</span>
						{/each}
					</div>
				</div>
			{/if}
		</div>

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
			prose-ul:list-disc prose-ol:list-decimal
			prose-li:text-neutral-700 dark:prose-li:text-neutral-300
			prose-blockquote:border-l-4 prose-blockquote:border-blue-500 prose-blockquote:bg-blue-50 dark:prose-blockquote:bg-blue-950/30 prose-blockquote:p-6 prose-blockquote:rounded-r-xl
			mb-12 p-8 rounded-2xl bg-white dark:bg-neutral-900 border-2 border-neutral-200 dark:border-neutral-800">
			{@html data.challenge.content}
		</div>

		{#if data.previousChallenge || data.nextChallenge}
			<div class="flex gap-4 mb-12">
				{#if data.previousChallenge}
					<a 
						href="{catConfig.backLink.replace('/challenges/', '/challenges/')}/{data.previousChallenge.slug}"
						class="flex-1 p-6 rounded-2xl bg-white dark:bg-neutral-900 border-2 border-neutral-200 dark:border-neutral-800 hover:{catConfig.border} transition-all hover:shadow-lg group"
					>
						<div class="flex items-center gap-3 text-sm text-neutral-500 dark:text-neutral-500 mb-2">
							<svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
							</svg>
							<span>Previous Challenge</span>
						</div>
						<div class="font-bold text-neutral-900 dark:text-neutral-50 group-hover:{isWeekly ? 'text-blue-600 dark:text-blue-400' : 'text-purple-600 dark:text-purple-400'} transition-colors">
							{data.previousChallenge.title}
						</div>
					</a>
				{/if}
				{#if data.nextChallenge}
					<a 
						href="{catConfig.backLink.replace('/challenges/', '/challenges/')}/{data.nextChallenge.slug}"
						class="flex-1 p-6 rounded-2xl bg-white dark:bg-neutral-900 border-2 border-neutral-200 dark:border-neutral-800 hover:{catConfig.border} transition-all hover:shadow-lg group text-right"
					>
						<div class="flex items-center justify-end gap-3 text-sm text-neutral-500 dark:text-neutral-500 mb-2">
							<span>Next Challenge</span>
							<svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
							</svg>
						</div>
						<div class="font-bold text-neutral-900 dark:text-neutral-50 group-hover:{isWeekly ? 'text-blue-600 dark:text-blue-400' : 'text-purple-600 dark:text-purple-400'} transition-colors">
							{data.nextChallenge.title}
						</div>
					</a>
				{/if}
			</div>
		{/if}

		{#if data.relatedChallenges.length > 0}
			<div>
				<h2 class="font-bold text-2xl mb-6 text-neutral-900 dark:text-neutral-50">Related Challenges</h2>
				<div class="grid md:grid-cols-3 gap-6">
					{#each data.relatedChallenges as related}
						<a
							href="{catConfig.backLink.replace('/challenges/', '/challenges/')}/{related.slug}"
							class="group p-6 rounded-2xl bg-white dark:bg-neutral-900 border-2 border-neutral-200 dark:border-neutral-800 hover:{catConfig.border} transition-all hover:shadow-lg"
						>
							<div class="text-sm font-semibold mb-2 {difficultyConfig[related.difficulty].text}">
								{difficultyConfig[related.difficulty].icon} {related.difficulty}
							</div>
							<h3 class="font-bold text-lg mb-2 text-neutral-900 dark:text-neutral-50 group-hover:{isWeekly ? 'text-blue-600 dark:text-blue-400' : 'text-purple-600 dark:text-purple-400'} transition-colors">
								{related.title}
							</h3>
							<p class="text-sm text-neutral-600 dark:text-neutral-400 line-clamp-2">
								{related.description}
							</p>
						</a>
					{/each}
				</div>
			</div>
		{/if}
	</div>
</div>