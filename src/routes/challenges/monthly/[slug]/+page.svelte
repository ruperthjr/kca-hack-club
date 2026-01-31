<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;

	const difficultyConfig = {
		beginner: {
			gradient: 'from-emerald-400 to-teal-500',
			bg: 'bg-emerald-50 dark:bg-emerald-950/30',
			border: 'border-emerald-200 dark:border-emerald-800',
			text: 'text-emerald-700 dark:text-emerald-400'
		},
		intermediate: {
			gradient: 'from-amber-400 to-orange-500',
			bg: 'bg-amber-50 dark:bg-amber-950/30',
			border: 'border-amber-200 dark:border-amber-800',
			text: 'text-amber-700 dark:text-amber-400'
		},
		advanced: {
			gradient: 'from-rose-400 to-pink-500',
			bg: 'bg-rose-50 dark:bg-rose-950/30',
			border: 'border-rose-200 dark:border-rose-800',
			text: 'text-rose-700 dark:text-rose-400'
		}
	};

	const categoryConfig = {
		daily: {
			gradient: 'from-blue-400 to-cyan-500',
			bg: 'bg-blue-50 dark:bg-blue-950/30',
			border: 'border-blue-200 dark:border-blue-800',
			backLink: '/challenges/daily',
			backText: 'Back to Daily Challenges'
		},
		weekly: {
			gradient: 'from-purple-400 to-fuchsia-500',
			bg: 'bg-purple-50 dark:bg-purple-950/30',
			border: 'border-purple-200 dark:border-purple-800',
			backLink: '/challenges/weekly',
			backText: 'Back to Weekly Challenges'
		},
		monthly: {
			gradient: 'from-green-400 to-emerald-500',
			bg: 'bg-green-50 dark:bg-green-950/30',
			border: 'border-green-200 dark:border-green-800',
			backLink: '/challenges/monthly',
			backText: 'Back to Monthly Challenges'
		}
	};

	const diffConfig = difficultyConfig[data.challenge.difficulty as keyof typeof difficultyConfig];
	const catConfig = categoryConfig[data.challenge.category as keyof typeof categoryConfig];
</script>

<svelte:head>
	<title>{data.meta.title}</title>
	<meta name="description" content={data.meta.description} />
</svelte:head>

<div class="min-h-screen bg-gradient-to-br from-neutral-50 via-white to-neutral-100 dark:from-neutral-950 dark:via-neutral-900 dark:to-neutral-950">
	<div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    
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

		<div class="relative overflow-hidden rounded-3xl bg-white dark:bg-neutral-900 shadow-2xl border-2 {catConfig.border} mb-8">
			<div class="absolute inset-0 bg-gradient-to-br {catConfig.bg} opacity-60"></div>
			<div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-purple-200/30 to-cyan-200/30 dark:from-purple-900/20 dark:to-cyan-900/20 rounded-full blur-3xl"></div>
			<div class="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-blue-200/30 to-fuchsia-200/30 dark:from-blue-900/20 dark:to-fuchsia-900/20 rounded-full blur-3xl"></div>
      
			<div class="relative p-10">
				<div class="flex flex-wrap gap-3 mb-6">
					<div class="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r {diffConfig.gradient} text-white font-bold text-sm shadow-lg">
						<span class="capitalize">{data.challenge.difficulty}</span>
					</div>
					<div class="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r {catConfig.gradient} text-white font-bold text-sm shadow-lg">
						<span class="capitalize">{data.challenge.category} Challenge</span>
					</div>
					<div class="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 font-semibold text-sm">
						<svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
						</svg>
						<span>{data.challenge.estimatedTime}</span>
					</div>
				</div>

				<h1 class="text-5xl font-black mb-6 text-neutral-900 dark:text-neutral-50 leading-tight">
					{data.challenge.title}
				</h1>
        
				<p class="text-2xl text-neutral-600 dark:text-neutral-400 mb-8 leading-relaxed max-w-4xl">
					{data.challenge.description}
				</p>
        
				<div class="flex items-center gap-6 flex-wrap">
					<div class="flex items-center gap-2 text-purple-600 dark:text-purple-400 font-bold">
						<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
							<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
						</svg>
						<span>{data.challenge.points} points</span>
					</div>
					<div class="flex flex-wrap gap-2">
						{#each data.challenge.skills.slice(0, 4) as skill}
							<span class="px-3 py-1 rounded-lg bg-white dark:bg-neutral-800 border-2 border-purple-200 dark:border-purple-800 text-purple-700 dark:text-purple-300 font-medium text-sm">
								{skill}
							</span>
						{/each}
						{#if data.challenge.skills.length > 4}
							<span class="px-3 py-1 rounded-lg bg-white dark:bg-neutral-800 border-2 border-neutral-200 dark:border-neutral-700 text-neutral-600 dark:text-neutral-400 font-medium text-sm">
								+{data.challenge.skills.length - 4} more
							</span>
						{/if}
					</div>
				</div>
			</div>
		</div>

		<div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
			{#if data.challenge.learningObjectives && data.challenge.learningObjectives.length > 0}
				<div class="bg-white dark:bg-neutral-900 rounded-2xl border-2 border-blue-200 dark:border-blue-800 p-6 hover:shadow-xl transition-shadow">
					<div class="flex items-center gap-3 mb-4">
						<div class="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-400 to-cyan-500 flex items-center justify-center shadow-lg">
							<svg class="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
							</svg>
						</div>
						<h3 class="font-bold text-lg text-neutral-900 dark:text-neutral-50">Learning Objectives</h3>
					</div>
					<ul class="space-y-3">
						{#each data.challenge.learningObjectives as objective}
							<li class="flex items-start gap-3 p-3 rounded-lg bg-blue-50 dark:bg-blue-950/30 border border-blue-100 dark:border-blue-900">
								<span class="text-blue-500 font-bold mt-0.5 flex-shrink-0">→</span>
								<span class="text-neutral-700 dark:text-neutral-300 text-sm leading-relaxed">{objective}</span>
							</li>
						{/each}
					</ul>
				</div>
			{/if}

			{#if data.challenge.deliverables && data.challenge.deliverables.length > 0}
				<div class="bg-white dark:bg-neutral-900 rounded-2xl border-2 border-emerald-200 dark:border-emerald-800 p-6 hover:shadow-xl transition-shadow">
					<div class="flex items-center gap-3 mb-4">
						<div class="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center shadow-lg">
							<svg class="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
							</svg>
						</div>
						<h3 class="font-bold text-lg text-neutral-900 dark:text-neutral-50">Deliverables</h3>
					</div>
					<ul class="space-y-3">
						{#each data.challenge.deliverables as deliverable}
							<li class="flex items-start gap-3 p-3 rounded-lg bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-100 dark:border-emerald-900">
								<span class="text-emerald-500 font-bold mt-0.5 flex-shrink-0">✓</span>
								<span class="text-neutral-700 dark:text-neutral-300 text-sm leading-relaxed">{deliverable}</span>
							</li>
						{/each}
					</ul>
				</div>
			{/if}

			<div class="bg-white dark:bg-neutral-900 rounded-2xl border-2 border-purple-200 dark:border-purple-800 p-6 hover:shadow-xl transition-shadow">
				<div class="flex items-center gap-3 mb-4">
					<div class="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-400 to-fuchsia-500 flex items-center justify-center shadow-lg">
						<svg class="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
						</svg>
					</div>
					<h3 class="font-bold text-lg text-neutral-900 dark:text-neutral-50">Team Information</h3>
				</div>
				<div class="space-y-4">
					{#if data.challenge.recommendedFor && data.challenge.recommendedFor.length > 0}
						<div>
							<h4 class="text-xs font-semibold text-neutral-500 dark:text-neutral-400 uppercase tracking-wider mb-2">
								Recommended For
							</h4>
							<div class="space-y-2">
								{#each data.challenge.recommendedFor as person}
									<div class="flex items-center gap-3 p-2 rounded-lg bg-gradient-to-r from-purple-50 to-fuchsia-50 dark:from-purple-950/30 dark:to-fuchsia-950/30 border border-purple-100 dark:border-purple-900">
										<div class="w-8 h-8 rounded-full bg-gradient-to-br from-purple-400 to-fuchsia-500 flex items-center justify-center text-white font-bold shadow-lg text-sm">
											{person.charAt(0)}
										</div>
										<span class="text-neutral-900 dark:text-neutral-50 font-semibold text-sm">{person}</span>
									</div>
								{/each}
							</div>
						</div>
					{/if}

					{#if data.challenge.collaborators && data.challenge.collaborators.length > 0}
						<div>
							<h4 class="text-xs font-semibold text-neutral-500 dark:text-neutral-400 uppercase tracking-wider mb-2">
								Study Group / Collaborators
							</h4>
							<div class="space-y-2">
								{#each data.challenge.collaborators as collaborator}
									<div class="flex items-center gap-3 p-2 rounded-lg bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30 border border-blue-100 dark:border-blue-900">
										<div class="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-cyan-500 flex items-center justify-center text-white font-bold shadow-lg text-sm">
											{collaborator.charAt(0)}
										</div>
										<span class="text-neutral-900 dark:text-neutral-50 font-semibold text-sm">{collaborator}</span>
									</div>
								{/each}
							</div>
						</div>
					{/if}
				</div>
			</div>

			{#if data.challenge.prerequisites && data.challenge.prerequisites.length > 0}
				<div class="bg-white dark:bg-neutral-900 rounded-2xl border-2 border-amber-200 dark:border-amber-800 p-6 hover:shadow-xl transition-shadow">
					<div class="flex items-center gap-3 mb-4">
						<div class="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center shadow-lg">
							<svg class="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
							</svg>
						</div>
						<h3 class="font-bold text-lg text-neutral-900 dark:text-neutral-50">Prerequisites</h3>
					</div>
					<ul class="space-y-3">
						{#each data.challenge.prerequisites as prereq}
							<li class="flex items-start gap-3 p-3 rounded-lg bg-amber-50 dark:bg-amber-950/30 border border-amber-100 dark:border-amber-900">
								<span class="text-amber-500 font-bold mt-0.5 flex-shrink-0">!</span>
								<span class="text-neutral-700 dark:text-neutral-300 text-sm leading-relaxed">{prereq}</span>
							</li>
						{/each}
					</ul>
				</div>
			{/if}
		</div>

		<div class="prose prose-lg prose-neutral dark:prose-invert max-w-none
			prose-headings:font-bold
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
						href="{catConfig.backLink}/{data.previousChallenge.slug}"
						class="flex-1 p-6 rounded-2xl bg-white dark:bg-neutral-900 border-2 border-neutral-200 dark:border-neutral-800 hover:{catConfig.border} transition-all hover:shadow-lg group"
					>
						<div class="flex items-center gap-3 text-sm text-neutral-500 dark:text-neutral-400 mb-2">
							<svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
							</svg>
							<span>Previous Challenge</span>
						</div>
						<div class="font-bold text-neutral-900 dark:text-neutral-50 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
							{data.previousChallenge.title}
						</div>
					</a>
				{/if}
				{#if data.nextChallenge}
					<a 
						href="{catConfig.backLink}/{data.nextChallenge.slug}"
						class="flex-1 p-6 rounded-2xl bg-white dark:bg-neutral-900 border-2 border-neutral-200 dark:border-neutral-800 hover:{catConfig.border} transition-all hover:shadow-lg group text-right"
					>
						<div class="flex items-center justify-end gap-3 text-sm text-neutral-500 dark:text-neutral-400 mb-2">
							<span>Next Challenge</span>
							<svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
							</svg>
						</div>
						<div class="font-bold text-neutral-900 dark:text-neutral-50 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
							{data.nextChallenge.title}
						</div>
					</a>
				{/if}
			</div>
		{/if}

		{#if data.relatedChallenges && data.relatedChallenges.length > 0}
			<div>
				<h2 class="font-bold text-2xl mb-6 text-neutral-900 dark:text-neutral-50">Related Challenges</h2>
				<div class="grid md:grid-cols-3 gap-6">
					{#each data.relatedChallenges as related}
						<a
							href="{catConfig.backLink}/{related.slug}"
							class="group p-6 rounded-2xl bg-white dark:bg-neutral-900 border-2 border-neutral-200 dark:border-neutral-800 hover:{catConfig.border} transition-all hover:shadow-lg"
						>
							<div class="text-sm font-semibold mb-2 {difficultyConfig[related.difficulty as keyof typeof difficultyConfig].text}">
								{related.difficulty}
							</div>
							<h3 class="font-bold text-lg mb-2 text-neutral-900 dark:text-neutral-50 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
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