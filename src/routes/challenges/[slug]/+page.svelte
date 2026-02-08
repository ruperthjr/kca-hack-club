<script lang="ts">
	import type { PageData } from './$types';
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import { challengeProgress } from '$lib/stores/challengeProgress';
	import { 
		getNextChallenge, 
		getPreviousChallenge, 
		isChallengeUnlocked,
		getDaysUntilUnlock 
	} from '$lib/utils/challengeUtils';
	import { Check, Lock, ChevronLeft, ChevronRight, Calendar, Trophy, ArrowLeft } from 'lucide-svelte';

	export let data: PageData & { allChallenges?: any[] };
	const ChallengeComponent = data.challenge.component;

	let isCompleted = false;
	let isUnlocked = true;
	let daysUntilUnlock = 0;
	let nextChallenge: any = null;
	let previousChallenge: any = null;

	const memberConfig = {
		jasmine: {
			name: 'Jasmine',
			gradient: 'from-purple-500 via-pink-500 to-rose-500',
			bgGradient: 'from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30',
			border: 'border-purple-200 dark:border-purple-800',
			accent: 'text-purple-600 dark:text-purple-400'
		},
		pauline: {
			name: 'Pauline',
			gradient: 'from-emerald-500 via-green-500 to-teal-500',
			bgGradient: 'from-emerald-50 to-green-50 dark:from-emerald-950/30 dark:to-green-950/30',
			border: 'border-emerald-200 dark:border-emerald-800',
			accent: 'text-emerald-600 dark:text-emerald-400'
		},
		daniel: {
			name: 'Daniel',
			gradient: 'from-blue-500 via-indigo-500 to-purple-500',
			bgGradient: 'from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30',
			border: 'border-blue-200 dark:border-blue-800',
			accent: 'text-blue-600 dark:text-blue-400'
		},
		ruperth: {
			name: 'Ruperth',
			gradient: 'from-orange-500 via-red-500 to-pink-500',
			bgGradient: 'from-orange-50 to-red-50 dark:from-orange-950/30 dark:to-red-950/30',
			border: 'border-orange-200 dark:border-orange-800',
			accent: 'text-orange-600 dark:text-orange-400'
		},
		maryphin: {
			name: 'Maryphin',
			gradient: 'from-yellow-500 via-amber-500 to-orange-500',
			bgGradient: 'from-yellow-50 to-amber-50 dark:from-yellow-950/30 dark:to-amber-950/30',
			border: 'border-yellow-200 dark:border-yellow-800',
			accent: 'text-yellow-600 dark:text-yellow-400'
		}
	};

	const difficultyColors = {
		beginner: 'bg-green-100 dark:bg-green-950/30 text-green-700 dark:text-green-400 border-green-200 dark:border-green-800',
		intermediate: 'bg-yellow-100 dark:bg-yellow-950/30 text-yellow-700 dark:text-yellow-400 border-yellow-200 dark:border-yellow-800',
		advanced: 'bg-red-100 dark:bg-red-950/30 text-red-700 dark:text-red-400 border-red-200 dark:border-red-800'
	};

	const member = data.challenge.member as keyof typeof memberConfig;
	const config = memberConfig[member] || {
		name: member,
		gradient: 'from-neutral-500 to-neutral-600',
		bgGradient: 'from-neutral-50 to-neutral-100 dark:from-neutral-950/30 dark:to-neutral-900/30',
		border: 'border-neutral-200 dark:border-neutral-800',
		accent: 'text-neutral-600 dark:text-neutral-400'
	};

	onMount(() => {
		isUnlocked = isChallengeUnlocked(data.challenge as any);
		daysUntilUnlock = getDaysUntilUnlock(data.challenge as any);
		const all = data.allChallenges ?? [];
		nextChallenge = getNextChallenge(data.challenge as any, all);
		previousChallenge = getPreviousChallenge(data.challenge as any, all);
		
		challengeProgress.updateLastVisited(data.challenge.slug);
	});

	$: {
		const progress = $challengeProgress[data.challenge.slug];
		isCompleted = progress ? progress.completed : false;
	}

	function toggleCompletion() {
		if (isCompleted) {
			challengeProgress.markIncomplete(data.challenge.slug);
		} else {
			challengeProgress.markComplete(data.challenge.slug);
		}
	}

	function handleNext() {
		if (nextChallenge) {
			const nextUnlocked = isChallengeUnlocked(nextChallenge);
			if (nextUnlocked || $challengeProgress[nextChallenge.slug]?.completed) {
				goto(`/challenges/${nextChallenge.slug}`);
			}
		} else {
			goto('/challenges');
		}
	}

	function handlePrevious() {
		if (previousChallenge) {
			goto(`/challenges/${previousChallenge.slug}`);
		}
	}
</script>

<svelte:head>
	<title>{data.meta.title}</title>
	<meta name="description" content={data.meta.description} />
</svelte:head>

<div class="min-h-screen bg-gradient-to-br from-neutral-50 via-white to-neutral-100 dark:from-neutral-950 dark:via-neutral-900 dark:to-neutral-950">
	<div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
		<div class="mb-8 flex items-center justify-between gap-4">
			<a 
				href="/challenges" 
				class="group inline-flex items-center gap-2 px-4 py-2 rounded-xl text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-50 hover:bg-white dark:hover:bg-neutral-900 transition-all border border-transparent hover:border-neutral-200 dark:hover:border-neutral-800"
			>
				<ArrowLeft class="w-5 h-5 transition-transform group-hover:-translate-x-1" />
				<span class="font-medium">Back to Challenges</span>
			</a>

			<div class="flex items-center gap-2">
				{#if previousChallenge}
					<button
						on:click={handlePrevious}
						class="p-2 rounded-lg bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors"
						title="Previous Challenge"
					>
						<ChevronLeft class="w-5 h-5" />
					</button>
				{/if}

				{#if nextChallenge}
					{@const nextUnlocked = isChallengeUnlocked(nextChallenge)}
					{@const nextCompleted = $challengeProgress[nextChallenge.slug]?.completed}
					<button
						on:click={handleNext}
						disabled={!nextUnlocked && !nextCompleted}
						class="p-2 rounded-lg bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
						title={nextUnlocked || nextCompleted ? 'Next Challenge' : `Unlocks in ${getDaysUntilUnlock(nextChallenge)} days`}
					>
						{#if !nextUnlocked && !nextCompleted}
							<Lock class="w-5 h-5" />
						{:else}
							<ChevronRight class="w-5 h-5" />
						{/if}
					</button>
				{/if}
			</div>
		</div>

		{#if !isUnlocked && !isCompleted}
			<div class="mb-8 p-8 rounded-3xl bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-950/30 dark:to-red-950/30 border-2 border-orange-200 dark:border-orange-800 text-center">
				<div class="inline-flex items-center justify-center w-20 h-20 rounded-full bg-orange-100 dark:bg-orange-900/50 mb-4">
					<Lock class="w-10 h-10 text-orange-600 dark:text-orange-400" />
				</div>
				<h2 class="text-2xl font-bold text-neutral-900 dark:text-neutral-50 mb-2">Challenge Locked</h2>
				<p class="text-lg text-neutral-700 dark:text-neutral-300 mb-4">
					This challenge will unlock in <span class="font-bold text-orange-600 dark:text-orange-400">{daysUntilUnlock} {daysUntilUnlock === 1 ? 'day' : 'days'}</span>
				</p>
				<div class="flex items-center justify-center gap-2 text-sm text-neutral-600 dark:text-neutral-400">
					<Calendar class="w-4 h-4" />
					{#if (data.challenge as any).unlockDate}
						<span>Unlocks on {new Date((data.challenge as any).unlockDate).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
					{:else}
						<span>Unlocks soon</span>
					{/if}
				</div>
			</div>
		{/if}

		<div class="mb-12 p-8 md:p-10 rounded-3xl bg-white dark:bg-neutral-900 border-2 {config.border} shadow-2xl relative overflow-hidden">
			<div class="absolute inset-0 bg-gradient-to-br {config.bgGradient} opacity-50"></div>
			
			<div class="relative">
				<div class="flex flex-wrap items-center gap-3 mb-6">
					<span class="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold bg-gradient-to-r {config.gradient} text-white shadow-lg">
						<span class="capitalize">{config.name}</span>
					</span>
					<span class="px-4 py-2 rounded-xl text-sm font-semibold bg-gradient-to-r {config.bgGradient} {config.accent} border {config.border} capitalize">
						{data.challenge.type} Challenge
					</span>
					<span class="px-4 py-2 rounded-xl text-sm font-semibold border {difficultyColors[data.challenge.difficulty as keyof typeof difficultyColors]} capitalize">
						{data.challenge.difficulty}
					</span>
					{#if data.challenge.day}
						<span class="px-4 py-2 rounded-xl text-sm font-semibold bg-blue-100 dark:bg-blue-950/30 text-blue-700 dark:text-blue-400 border border-blue-200 dark:border-blue-800">
							Day {data.challenge.day}
						</span>
					{/if}
					{#if data.challenge.week}
						<span class="px-4 py-2 rounded-xl text-sm font-semibold bg-purple-100 dark:bg-purple-950/30 text-purple-700 dark:text-purple-400 border border-purple-200 dark:border-purple-800">
							Week {data.challenge.week}
						</span>
					{/if}
					{#if data.challenge.month}
						<span class="px-4 py-2 rounded-xl text-sm font-semibold bg-orange-100 dark:bg-orange-950/30 text-orange-700 dark:text-orange-400 border border-orange-200 dark:border-orange-800">
							Month {data.challenge.month}
						</span>
					{/if}
					
					{#if isCompleted}
						<span class="px-4 py-2 rounded-xl text-sm font-semibold bg-green-100 dark:bg-green-950/30 text-green-700 dark:text-green-400 border border-green-200 dark:border-green-800 flex items-center gap-2">
							<Trophy class="w-4 h-4" />
							Completed
						</span>
					{/if}
				</div>
				
				<h1 class="font-display font-bold text-4xl md:text-5xl lg:text-6xl mb-6 text-neutral-900 dark:text-neutral-50 leading-tight">
					{data.challenge.title}
				</h1>
				
				{#if data.challenge.description}
					<p class="text-xl md:text-2xl text-neutral-600 dark:text-neutral-400 mb-6 leading-relaxed">
						{data.challenge.description}
					</p>
				{/if}
				
				<div class="flex flex-wrap items-center justify-between gap-4">
					<div class="flex flex-wrap items-center gap-4 text-sm text-neutral-500 dark:text-neutral-500">
						{#if data.challenge.unit}
							<div class="flex items-center gap-2">
								<svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
								</svg>
								<span>{data.challenge.unit}</span>
							</div>
						{/if}
						{#if data.challenge.estimatedTime}
							<div class="flex items-center gap-2">
								<svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
								</svg>
								<span>{data.challenge.estimatedTime}</span>
							</div>
						{/if}
						<div class="flex items-center gap-2">
							<Calendar class="w-5 h-5" />
							<span>Added {new Date(data.challenge.dateAdded).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
						</div>
					</div>

					{#if isUnlocked || isCompleted}
						<button
							on:click={toggleCompletion}
							class="px-6 py-3 rounded-xl font-bold text-white transition-all transform hover:scale-105 shadow-lg {isCompleted ? 'bg-gradient-to-r from-green-500 to-emerald-600' : 'bg-gradient-to-r ' + config.gradient}"
						>
							<span class="flex items-center gap-2">
								{#if isCompleted}
									<Check class="w-5 h-5" />
									Mark as Incomplete
								{:else}
									<Trophy class="w-5 h-5" />
									Mark as Complete
								{/if}
							</span>
						</button>
					{/if}
				</div>
			</div>
		</div>

		{#if isUnlocked || isCompleted}
			<div class="grid md:grid-cols-2 gap-6 mb-8">
				{#if data.challenge.technologies && data.challenge.technologies.length > 0}
					<div class="p-6 rounded-2xl bg-white dark:bg-neutral-900 border-2 border-neutral-200 dark:border-neutral-800 hover:border-blue-300 dark:hover:border-blue-700 transition-colors">
						<h3 class="font-bold text-lg mb-4 text-neutral-900 dark:text-neutral-50 flex items-center gap-2">
							<div class="p-2 rounded-lg bg-blue-100 dark:bg-blue-950/30">
								<svg class="w-5 h-5 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
								</svg>
							</div>
							Technologies
						</h3>
						<div class="flex flex-wrap gap-2">
							{#each data.challenge.technologies as tech}
								<span class="px-3 py-1.5 rounded-lg text-sm font-medium bg-blue-50 dark:bg-blue-950/30 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800">
									{tech}
								</span>
							{/each}
						</div>
					</div>
				{/if}

				{#if data.challenge.learningOutcomes && data.challenge.learningOutcomes.length > 0}
					<div class="p-6 rounded-2xl bg-white dark:bg-neutral-900 border-2 border-neutral-200 dark:border-neutral-800 hover:border-purple-300 dark:hover:border-purple-700 transition-colors">
						<h3 class="font-bold text-lg mb-4 text-neutral-900 dark:text-neutral-50 flex items-center gap-2">
							<div class="p-2 rounded-lg bg-purple-100 dark:bg-purple-950/30">
								<svg class="w-5 h-5 text-purple-600 dark:text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
								</svg>
							</div>
							Learning Outcomes
						</h3>
						<ul class="space-y-2">
							{#each data.challenge.learningOutcomes as outcome}
								<li class="flex items-start gap-3 text-sm text-neutral-700 dark:text-neutral-300">
									<span class="text-purple-500 mt-0.5 font-bold">→</span>
									<span class="flex-1">{outcome}</span>
								</li>
							{/each}
						</ul>
					</div>
				{/if}

				{#if data.challenge.requirements && data.challenge.requirements.length > 0}
					<div class="p-6 rounded-2xl bg-white dark:bg-neutral-900 border-2 border-neutral-200 dark:border-neutral-800 hover:border-green-300 dark:hover:border-green-700 transition-colors">
						<h3 class="font-bold text-lg mb-4 text-neutral-900 dark:text-neutral-50 flex items-center gap-2">
							<div class="p-2 rounded-lg bg-green-100 dark:bg-green-950/30">
								<svg class="w-5 h-5 text-green-600 dark:text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
								</svg>
							</div>
							Requirements
						</h3>
						<ul class="space-y-2">
							{#each data.challenge.requirements as req}
								<li class="flex items-start gap-3 text-sm text-neutral-700 dark:text-neutral-300">
									<span class="text-green-500 mt-0.5 font-bold">✓</span>
									<span class="flex-1">{req}</span>
								</li>
							{/each}
						</ul>
					</div>
				{/if}

				{#if data.challenge.deliverables && data.challenge.deliverables.length > 0}
					<div class="p-6 rounded-2xl bg-white dark:bg-neutral-900 border-2 border-neutral-200 dark:border-neutral-800 hover:border-orange-300 dark:hover:border-orange-700 transition-colors">
						<h3 class="font-bold text-lg mb-4 text-neutral-900 dark:text-neutral-50 flex items-center gap-2">
							<div class="p-2 rounded-lg bg-orange-100 dark:bg-orange-950/30">
								<svg class="w-5 h-5 text-orange-600 dark:text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
								</svg>
							</div>
							Deliverables
						</h3>
						<ul class="space-y-2">
							{#each data.challenge.deliverables as del}
								<li class="flex items-start gap-3 text-sm text-neutral-700 dark:text-neutral-300">
									<span class="text-orange-500 mt-0.5 font-bold">→</span>
									<span class="flex-1">{del}</span>
								</li>
							{/each}
						</ul>
					</div>
				{/if}
			</div>

			{#if data.challenge.resources && data.challenge.resources.length > 0}
				<div class="mb-8 p-6 rounded-2xl bg-gradient-to-br {config.bgGradient} border-2 {config.border}">
					<h3 class="font-bold text-xl mb-4 text-neutral-900 dark:text-neutral-50 flex items-center gap-3">
						<div class="p-2 rounded-lg bg-white dark:bg-neutral-900 shadow-md">
							<svg class="w-6 h-6 {config.accent}" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
							</svg>
						</div>
						Helpful Resources
					</h3>
					<ul class="space-y-2">
						{#each data.challenge.resources as resource}
							<li>
								<a 
									href={resource.url}
									target="_blank"
									rel="noopener noreferrer"
									class="group flex items-center gap-3 p-3 rounded-xl bg-white dark:bg-neutral-900 hover:shadow-md transition-all border border-neutral-200 dark:border-neutral-800 hover:{config.border}"
								>
									<span class="flex-1 text-neutral-900 dark:text-neutral-50 font-medium">{resource.name}</span>
									<svg class="w-5 h-5 text-neutral-400 group-hover:{config.accent} transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
										<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
									</svg>
								</a>
							</li>
						{/each}
					</ul>
				</div>
			{/if}

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
				<ChallengeComponent />
			</div>
		{/if}
	</div>
</div>