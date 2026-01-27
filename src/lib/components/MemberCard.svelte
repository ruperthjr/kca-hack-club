<script lang="ts">
	import type { TeamMember } from '$utils/blog';
	
	interface Props {
		member: TeamMember;
	}
	
	let { member }: Props = $props();
	
	function handleGithubClick(e: MouseEvent) {
		e.stopPropagation();
	}
</script>

{#if member}
<div class="group relative">
	<!-- Glow Effect on Hover -->
	<div class="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-3xl opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500"></div>
	
	<div class="relative bg-white dark:bg-neutral-900 rounded-2xl overflow-hidden border border-neutral-200 dark:border-neutral-800 hover:border-blue-500/50 dark:hover:border-blue-400/50 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-2">
		<!-- Image/Avatar Section -->
		<div class="relative h-56 overflow-hidden">
			<!-- Gradient Background -->
			<div class="absolute inset-0 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500">
				<!-- Animated Pattern -->
				<div class="absolute inset-0 opacity-30">
					<div class="absolute inset-0" style="background-image: radial-gradient(circle at 2px 2px, rgba(255,255,255,0.3) 1px, transparent 0); background-size: 30px 30px;"></div>
				</div>
			</div>

			{#if member.avatar}
				<img
					src={member.avatar}
					alt={member.name}
					class="relative w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
				/>
			{:else}
				<div class="relative w-full h-full flex items-center justify-center">
					<div class="relative">
						<!-- Pulsing glow behind initial -->
						<div class="absolute inset-0 bg-white/30 rounded-full blur-3xl animate-pulse-gentle"></div>
						<span class="relative text-7xl font-black text-white drop-shadow-2xl">
							{member.name.charAt(0)}
						</span>
					</div>
				</div>
			{/if}

			<!-- Gradient Overlay -->
			<div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
			
			<!-- Name & Role Overlay -->
			<div class="absolute bottom-0 left-0 right-0 p-5">
				<h3 class="font-display font-black text-2xl text-white mb-1 group-hover:text-blue-200 transition-colors duration-300">
					<a href="/team/{member.slug}" class="hover:underline decoration-2 underline-offset-4">
						{member.name}
					</a>
				</h3>
				<p class="text-sm font-semibold text-blue-200 flex items-center gap-2">
					<span class="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></span>
					{member.role}
				</p>
			</div>

			<!-- Corner Accent -->
			<div class="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
		</div>
		
		<!-- Content Section -->
		<div class="p-6 space-y-4">
			<!-- Bio -->
			<p class="text-sm text-neutral-600 dark:text-neutral-400 line-clamp-2 leading-relaxed">
				{member.bio}
			</p>
			
			<!-- Skills -->
			{#if member.skills && member.skills.length > 0}
				<div class="flex flex-wrap gap-2">
					{#each member.skills.slice(0, 3) as skill, i}
						<span 
							class="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-bold bg-gradient-to-r from-blue-500/10 to-purple-500/10 dark:from-blue-500/20 dark:to-purple-500/20 border border-blue-500/20 dark:border-blue-400/30 text-blue-700 dark:text-blue-300 hover:scale-105 transition-transform duration-200"
							style="animation-delay: {i * 50}ms"
						>
							{skill}
						</span>
					{/each}
					{#if member.skills.length > 3}
						<span class="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-bold bg-gradient-to-r from-pink-500/10 to-orange-500/10 dark:from-pink-500/20 dark:to-orange-500/20 border border-pink-500/20 dark:border-pink-400/30 text-pink-700 dark:text-pink-300">
							+{member.skills.length - 3}
						</span>
					{/if}
				</div>
			{/if}

			<!-- Meta Info & Social -->
			<div class="flex items-center justify-between pt-2 border-t border-neutral-200 dark:border-neutral-800">
				<div class="flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-400">
					<div class="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-neutral-100 dark:bg-neutral-800">
						<svg class="w-4 h-4 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
						</svg>
						<span class="font-bold">Year {member.year}</span>
					</div>
				</div>

				{#if member.github}
					<a
						href="https://github.com/{member.github}"
						target="_blank"
						rel="noopener noreferrer"
						class="group/github flex items-center justify-center w-9 h-9 rounded-lg bg-neutral-900 dark:bg-neutral-800 text-white hover:bg-blue-600 dark:hover:bg-blue-500 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/30"
						onclick={handleGithubClick}
						aria-label="GitHub Profile"
					>
						<svg class="w-4 h-4 group-hover/github:scale-110 transition-transform duration-200" fill="currentColor" viewBox="0 0 24 24">
							<path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
						</svg>
					</a>
				{/if}
			</div>
		</div>

		<!-- Bottom Accent Line -->
		<div class="h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
	</div>
</div>
{/if}

<style>
	@keyframes pulse-gentle {
		0%, 100% {
			opacity: 0.3;
			transform: scale(1);
		}
		50% {
			opacity: 0.5;
			transform: scale(1.05);
		}
	}

	.animate-pulse-gentle {
		animation: pulse-gentle 3s ease-in-out infinite;
	}
</style>