<script lang="ts">
	import { formatDate } from '$utils/date';
	import type { PageData } from './$types';

	export let data: PageData & { member: any };
</script>

<div class="relative overflow-hidden">
	<!-- Animated Background Gradient -->
	<div class="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
		<div class="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] opacity-10 dark:opacity-5">
			<div class="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full blur-3xl animate-blob"></div>
			<div class="absolute top-1/3 right-1/4 w-96 h-96 bg-gradient-to-br from-pink-500 to-orange-500 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
		</div>
	</div>

	<div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
		<!-- Back Button -->
		<div class="mb-8 animate-fade-in">
			<a 
				href="/team" 
				class="group inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium transition-colors duration-200"
			>
				<svg class="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
				</svg>
				Back to Team
			</a>
		</div>

		<!-- Member Card -->
		<div class="bg-white dark:bg-neutral-900 rounded-3xl shadow-2xl border border-neutral-200 dark:border-neutral-800 overflow-hidden animate-fade-in-up">
			<!-- Header/Avatar Section -->
			<div class="relative h-64 md:h-80 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 overflow-hidden group">
				<!-- Animated Pattern Overlay -->
				<div class="absolute inset-0 opacity-10">
					<div class="absolute inset-0" style="background-image: radial-gradient(circle at 2px 2px, white 1px, transparent 0); background-size: 40px 40px;"></div>
				</div>

				{#if data.member.avatar}
					<img
						src={data.member.avatar}
						alt={data.member.name}
						class="w-full h-full object-cover relative z-10 group-hover:scale-105 transition-transform duration-500"
					/>
				{:else}
					<div class="w-full h-full flex items-center justify-center relative z-10">
						<div class="relative">
							<div class="absolute inset-0 bg-white/20 rounded-full blur-2xl animate-pulse"></div>
							<span class="relative text-9xl font-black text-white drop-shadow-2xl">
								{data.member.name.charAt(0)}
							</span>
						</div>
					</div>
				{/if}

				<!-- Decorative Corner Elements -->
				<div class="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-bl-full"></div>
				<div class="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-tr-full"></div>
			</div>

			<!-- Content Section -->
			<div class="p-8 md:p-12 space-y-8">
				<!-- Name & Role -->
				<div class="space-y-3 animate-fade-in-up animation-delay-200">
					<h1 class="font-display font-black text-4xl md:text-5xl bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent">
						{data.member.name}
					</h1>
					<p class="text-xl md:text-2xl font-semibold text-neutral-600 dark:text-neutral-400">
						{data.member.role}
					</p>
				</div>

				<!-- Skills -->
				{#if data.member.skills}
					<div class="flex flex-wrap gap-3 animate-fade-in-up animation-delay-400">
						{#each data.member.skills as skill, i}
							<span 
								class="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 dark:from-blue-500/20 dark:to-purple-500/20 border border-blue-500/20 dark:border-blue-500/30 text-sm font-semibold text-blue-700 dark:text-blue-300 hover:scale-105 hover:shadow-lg transition-all duration-200 cursor-default"
								style="animation-delay: {400 + (i * 50)}ms"
							>
								{skill}
							</span>
						{/each}
					</div>
				{/if}

				<!-- Meta Info -->
				<div class="flex flex-wrap items-center gap-x-4 gap-y-2 text-neutral-600 dark:text-neutral-400 animate-fade-in-up animation-delay-600">
					<div class="flex items-center gap-2">
						<svg class="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
						</svg>
						<span class="font-medium">Year {data.member.year}</span>
					</div>
					<span class="text-neutral-400 dark:text-neutral-600">•</span>
					<div class="flex items-center gap-2">
						<svg class="w-5 h-5 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
						</svg>
						<span class="font-medium">Joined {formatDate(data.member.joinedDate, 'MMMM yyyy')}</span>
					</div>
				</div>

				<!-- Bio/Content -->
				<div class="prose prose-lg dark:prose-invert max-w-none animate-fade-in-up animation-delay-800">
					<div class="text-neutral-700 dark:text-neutral-300 leading-relaxed">
						{@html data.member.content?.replace(/\n/g, '<br>') || data.member.bio}
					</div>
				</div>

				<!-- Social Links -->
				<div class="flex flex-wrap gap-4 pt-4 animate-fade-in-up animation-delay-1000">
					{#if data.member.github}
						<a
							href="https://github.com/{data.member.github}"
							target="_blank"
							rel="noopener noreferrer"
							class="group inline-flex items-center gap-3 px-6 py-3 rounded-xl font-semibold bg-neutral-900 dark:bg-neutral-800 text-white hover:bg-neutral-800 dark:hover:bg-neutral-700 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
						>
							<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
								<path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd"></path>
							</svg>
							<span>GitHub</span>
							<svg class="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
							</svg>
						</a>
					{/if}
					{#if data.member.linkedin}
						<a
							href="https://linkedin.com/in/{data.member.linkedin}"
							target="_blank"
							rel="noopener noreferrer"
							class="group inline-flex items-center gap-3 px-6 py-3 rounded-xl font-semibold bg-blue-600 text-white hover:bg-blue-700 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
						>
							<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
								<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path>
							</svg>
							<span>LinkedIn</span>
							<svg class="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
							</svg>
						</a>
					{/if}
				</div>
			</div>

			<!-- Decorative Footer Border -->
			<div class="h-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>
		</div>
	</div>
</div>

<style>
	@keyframes fade-in {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}

	@keyframes fade-in-up {
		from {
			opacity: 0;
			transform: translateY(20px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}

	@keyframes blob {
		0%, 100% {
			transform: translate(0, 0) scale(1);
		}
		33% {
			transform: translate(30px, -50px) scale(1.1);
		}
		66% {
			transform: translate(-20px, 20px) scale(0.9);
		}
	}

	.animate-fade-in {
		animation: fade-in 0.6s ease-out forwards;
	}

	.animate-fade-in-up {
		animation: fade-in-up 0.8s ease-out forwards;
	}

	.animate-blob {
		animation: blob 7s infinite;
	}

	.animation-delay-200 {
		animation-delay: 200ms;
	}

	.animation-delay-400 {
		animation-delay: 400ms;
	}

	.animation-delay-600 {
		animation-delay: 600ms;
	}

	.animation-delay-800 {
		animation-delay: 800ms;
	}

	.animation-delay-1000 {
		animation-delay: 1000ms;
	}

	.animation-delay-2000 {
		animation-delay: 2s;
	}
</style>