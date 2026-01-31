<script lang="ts">
	import type { PageData } from './$types';
	import { fly } from 'svelte/transition';

	export let data: PageData;

	type CategoryType = 'daily' | 'weekly' | 'monthly';

	const categoryConfig: Record<CategoryType, {
		icon: string;
		gradient: string;
		bgGradient: string;
		border: string;
		description: string;
	}> = {
		daily: {
			icon: '',
			gradient: 'from-yellow-500 via-orange-500 to-red-500',
			bgGradient: 'from-yellow-50 to-orange-50 dark:from-yellow-950/30 dark:to-orange-950/30',
			border: 'border-yellow-200 dark:border-yellow-800',
			description: 'Quick daily challenges to build consistency'
		},
		weekly: {
			icon: '',
			gradient: 'from-blue-500 via-cyan-500 to-teal-500',
			bgGradient: 'from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30',
			border: 'border-blue-200 dark:border-blue-800',
			description: 'Complete projects to master new skills'
		},
		monthly: {
			icon: '',
			gradient: 'from-purple-500 via-pink-500 to-rose-500',
			bgGradient: 'from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30',
			border: 'border-purple-200 dark:border-purple-800',
			description: 'Full-stack applications for advanced learners'
		}
	};

</script>

<svelte:head>
	<title>Coding Challenges</title>
	<meta name="description" content={data.meta.description} />
</svelte:head>

<div class="min-h-screen bg-gradient-to-br from-neutral-50 via-white to-neutral-100 dark:from-neutral-950 dark:via-neutral-900 dark:to-neutral-950">
	<div class="relative overflow-hidden border-b border-neutral-200 dark:border-neutral-800 bg-gradient-to-br from-white to-neutral-50 dark:from-neutral-900 dark:to-neutral-950">
		<div class="absolute inset-0 bg-grid-neutral-200/50 dark:bg-grid-neutral-800/50 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
		<div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
			<div class="text-center max-w-3xl mx-auto">
				<div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 mb-6">
					<span class="relative flex h-2 w-2">
						<span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
						<span class="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
					</span>
					<span class="text-sm font-medium text-neutral-700 dark:text-neutral-300">{data.challenges.length} Challenges Available</span>
				</div>
				
				<h1 class="font-display font-bold text-5xl md:text-6xl lg:text-7xl mb-6 text-neutral-900 dark:text-neutral-50">
					Team <span class="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">Challenges</span>
				</h1>
				
				<p class="text-xl md:text-2xl text-neutral-600 dark:text-neutral-400 mb-8 leading-relaxed">
					Level up your programming skills.
				</p>

				<div class="flex flex-wrap justify-center gap-6 text-sm">
					<div class="flex items-center gap-2 text-neutral-600 dark:text-neutral-400">
						<span>{data.daily.length} Daily</span>
					</div>
					<div class="flex items-center gap-2 text-neutral-600 dark:text-neutral-400">
						<span>{data.weekly.length} Weekly</span>
					</div>
					<div class="flex items-center gap-2 text-neutral-600 dark:text-neutral-400">
						<span>{data.monthly.length} Monthly</span>
					</div>
				</div>
				<div class="flex flex-wrap justify-center gap-6 mt-8">
					{#each [
						{ type: 'daily', count: data.daily.length, href: '/challenges/daily' },
						{ type: 'weekly', count: data.weekly.length, href: '/challenges/weekly' },
						{ type: 'monthly', count: data.monthly.length, href: '/challenges/monthly' }
					] as category}
						<a href={category.href} class="group block" in:fly={{ y: 20, duration: 400, delay: 100 }}>
							<!-- Type assertion for category.type -->
							<div class="relative p-8 rounded-3xl bg-white dark:bg-neutral-900 border-2 {categoryConfig[category.type as CategoryType].border} hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden">
								<div class="absolute inset-0 bg-gradient-to-br {categoryConfig[category.type as CategoryType].bgGradient} opacity-50"></div>
								
								<div class="relative">
									<div class="text-6xl mb-4">{categoryConfig[category.type as CategoryType].icon}</div>
									<h2 class="font-display font-bold text-3xl mb-2 text-neutral-900 dark:text-neutral-50 capitalize">
										{category.type}
									</h2>
									<p class="text-neutral-600 dark:text-neutral-400 mb-4">
										{categoryConfig[category.type as CategoryType].description}
									</p>
									<div class="flex items-center justify-between">
										<span class="text-4xl font-bold bg-gradient-to-r {categoryConfig[category.type as CategoryType].gradient} bg-clip-text text-transparent">
											{category.count}
										</span>
										<svg class="w-6 h-6 text-neutral-400 group-hover:text-neutral-600 dark:group-hover:text-neutral-300 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
											<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
										</svg>
									</div>
								</div>
							</div>
						</a>
					{/each}
				</div>
		</div>

		<div class="grid md:grid-cols-2 gap-8 mb-12">
			<div class="p-8 rounded-2xl bg-white dark:bg-neutral-900 border-2 border-neutral-200 dark:border-neutral-800">
				<h3 class="font-bold text-2xl mb-6 text-neutral-900 dark:text-neutral-50 flex items-center gap-3">
					<div class="p-2 rounded-lg bg-blue-100 dark:bg-blue-950/30">
						<svg class="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
						</svg>
					</div>
					Difficulty Breakdown
				</h3>
				<div class="space-y-4">
					{#each [
						{ level: 'beginner', count: data.difficultyBreakdown.beginner, label: 'Beginner' },
						{ level: 'intermediate', count: data.difficultyBreakdown.intermediate, label: 'Intermediate' },
						{ level: 'advanced', count: data.difficultyBreakdown.advanced, label: 'Advanced' }
					] as difficulty}
						<div>
							<div class="flex justify-between mb-2">
								<span class="font-semibold text-neutral-700 dark:text-neutral-300">{difficulty.label}</span>
								<span class="text-neutral-600 dark:text-neutral-400">{difficulty.count} challenges</span>
							</div>
							<div class="h-3 bg-neutral-100 dark:bg-neutral-800 rounded-full overflow-hidden">
								<div 
									class="h-full bg-gradient-to-r {difficulty.level === 'beginner' ? 'from-green-400 to-green-600' : difficulty.level === 'intermediate' ? 'from-yellow-400 to-yellow-600' : 'from-red-400 to-red-600'} transition-all duration-500"
									style="width: {(difficulty.count / data.challenges.length) * 100}%"
								></div>
							</div>
						</div>
					{/each}
				</div>
			</div>

			<div class="p-8 rounded-2xl bg-white dark:bg-neutral-900 border-2 border-neutral-200 dark:border-neutral-800">
				<h3 class="font-bold text-2xl mb-6 text-neutral-900 dark:text-neutral-50 flex items-center gap-3">
					<div class="p-2 rounded-lg bg-purple-100 dark:bg-purple-950/30">
						<svg class="w-6 h-6 text-purple-600 dark:text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
						</svg>
					</div>
					Team Recommendations
				</h3>
				<div class="space-y-3">
					{#each [
						{ name: 'Maryphin', count: data.teamRecommendations.maryphin },
						{ name: 'Pauline', count: data.teamRecommendations.pauline },
						{ name: 'Ruperth', count: data.teamRecommendations.ruperth },
						{ name: 'Daniel', count: data.teamRecommendations.daniel },
						{ name: 'Jasmine', count: data.teamRecommendations.jasmine }
					] as member}
						<div class="flex items-center justify-between p-3 rounded-lg bg-neutral-50 dark:bg-neutral-800 hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-colors">
							<span class="font-medium text-neutral-700 dark:text-neutral-300">{member.name}</span>
							<span class="px-3 py-1 rounded-full bg-purple-100 dark:bg-purple-950/30 text-purple-700 dark:text-purple-300 text-sm font-semibold">
								{member.count} challenges
							</span>
						</div>
					{/each}
				</div>
			</div>
		</div>
		</div>
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