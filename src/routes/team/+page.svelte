<script lang="ts">
	import MemberCard from '$components/MemberCard.svelte';
	import type { PageData } from './$types';

	export let data: PageData & { team: any[] };
</script>

<div class="relative min-h-screen overflow-hidden">
	<!-- Dynamic Floating Background Elements -->
	<div class="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
		<!-- Animated Gradient Orbs -->
		<div class="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-cyan-400 via-blue-500 to-indigo-600 rounded-full opacity-20 blur-3xl animate-float"></div>
		<div class="absolute top-1/4 right-1/3 w-80 h-80 bg-gradient-to-br from-purple-500 via-pink-500 to-rose-500 rounded-full opacity-20 blur-3xl animate-float-delayed"></div>
		<div class="absolute bottom-1/4 left-1/2 w-72 h-72 bg-gradient-to-br from-emerald-400 via-teal-500 to-cyan-500 rounded-full opacity-15 blur-3xl animate-float-slow"></div>
		<div class="absolute bottom-0 right-1/4 w-64 h-64 bg-gradient-to-br from-amber-400 via-orange-500 to-red-500 rounded-full opacity-15 blur-3xl animate-float-reverse"></div>
		
		<!-- Geometric Pattern Overlay -->
		<div class="absolute inset-0 opacity-5 dark:opacity-3">
			<svg class="w-full h-full">
				<defs>
					<pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
						<circle cx="30" cy="30" r="1.5" fill="currentColor" class="text-blue-600"/>
						<circle cx="0" cy="0" r="1" fill="currentColor" class="text-purple-600"/>
						<circle cx="60" cy="60" r="1" fill="currentColor" class="text-pink-600"/>
					</pattern>
				</defs>
				<rect width="100%" height="100%" fill="url(#grid)"/>
			</svg>
		</div>
	</div>

	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 relative">
		<!-- Hero Section with Enhanced Typography -->
		<div class="text-center mb-20 relative">
			<!-- Decorative Elements -->
			<div class="absolute -top-8 left-1/2 -translate-x-1/2 w-32 h-32 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-2xl animate-pulse-slow"></div>

			<!-- Main Title with Advanced Effects -->
			<div class="relative inline-block animate-fade-in-up">
				<!-- Glow Effect Behind Text -->
				<div class="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 blur-3xl opacity-30 animate-glow"></div>
				
				<h1 class="relative font-display font-black text-5xl sm:text-6xl md:text-7xl lg:text-8xl mb-6">
					<span class="inline-block bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent animate-gradient-shift">
						Our Team
					</span>
				</h1>
			</div>

			<!-- Description with Decorative Lines -->
			<div class="flex items-center justify-center gap-4 mb-4 animate-fade-in-up animation-delay-200">
				<div class="h-px w-12 md:w-24 bg-gradient-to-r from-transparent via-blue-500 to-purple-500"></div>
				<p class="text-lg md:text-xl lg:text-2xl text-neutral-600 dark:text-neutral-300 max-w-3xl font-medium">
					Meet the Team
				</p>
				<div class="h-px w-12 md:w-24 bg-gradient-to-r from-purple-500 via-pink-500 to-transparent"></div>
			</div>

			<!-- Floating Accent Elements -->
			<div class="absolute -left-4 top-1/2 w-16 h-16 border-2 border-blue-500/30 rounded-lg rotate-12 animate-float-gentle hidden lg:block"></div>
			<div class="absolute -right-8 top-1/3 w-12 h-12 border-2 border-purple-500/30 rounded-full animate-float-reverse hidden lg:block"></div>
		</div>

		<!-- Team Grid with Staggered Animations -->
		<div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 relative">
			<!-- Grid Background Highlights -->
			<div class="absolute inset-0 -z-10">
				<div class="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-blue-500/5 to-transparent rounded-3xl"></div>
				<div class="absolute bottom-0 right-0 w-full h-1/3 bg-gradient-to-t from-purple-500/5 to-transparent rounded-3xl"></div>
			</div>

			{#each data.team as member, index}
				<div 
					class="animate-fade-in-up-scale"
					style="animation-delay: {index * 100}ms"
				>
					<MemberCard {member} />
				</div>
			{/each}
		</div>

		<!-- Decorative Bottom Section -->
		<div class="mt-24 text-center animate-fade-in animation-delay-1000">
			<div class="relative inline-block">
				<div class="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 blur-2xl"></div>
				<div class="relative px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 border border-blue-500/20 dark:border-blue-400/30 backdrop-blur-sm">
					<p class="text-neutral-600 dark:text-neutral-400 font-medium">
						Together, we're building something extraordinary
					</p>
				</div>
			</div>
		</div>
	</div>

	<!-- Corner Accent Decorations -->
	<div class="fixed top-0 left-0 w-64 h-64 bg-gradient-to-br from-blue-500/10 to-transparent rounded-br-full pointer-events-none -z-10"></div>
	<div class="fixed bottom-0 right-0 w-64 h-64 bg-gradient-to-tl from-purple-500/10 to-transparent rounded-tl-full pointer-events-none -z-10"></div>
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
			transform: translateY(30px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}

	@keyframes fade-in-up-scale {
		from {
			opacity: 0;
			transform: translateY(40px) scale(0.95);
		}
		to {
			opacity: 1;
			transform: translateY(0) scale(1);
		}
	}

	@keyframes float {
		0%, 100% {
			transform: translate(0, 0) rotate(0deg);
		}
		25% {
			transform: translate(20px, -20px) rotate(5deg);
		}
		50% {
			transform: translate(40px, 10px) rotate(-5deg);
		}
		75% {
			transform: translate(10px, 30px) rotate(3deg);
		}
	}

	@keyframes float-slow {
		0%, 100% {
			transform: translate(0, 0) scale(1);
		}
		50% {
			transform: translate(-30px, -30px) scale(1.1);
		}
	}

	@keyframes float-gentle {
		0%, 100% {
			transform: translateY(0) rotate(12deg);
		}
		50% {
			transform: translateY(-20px) rotate(18deg);
		}
	}

	@keyframes float-reverse {
		0%, 100% {
			transform: translate(0, 0) rotate(0deg);
		}
		33% {
			transform: translate(-15px, 25px) rotate(-8deg);
		}
		66% {
			transform: translate(15px, -15px) rotate(8deg);
		}
	}

	@keyframes pulse-slow {
		0%, 100% {
			opacity: 0.3;
			transform: scale(1);
		}
		50% {
			opacity: 0.5;
			transform: scale(1.05);
		}
	}

	@keyframes glow {
		0%, 100% {
			opacity: 0.2;
		}
		50% {
			opacity: 0.4;
		}
	}

	@keyframes gradient-shift {
		0%, 100% {
			background-position: 0% 50%;
		}
		50% {
			background-position: 100% 50%;
		}
	}

	.animate-fade-in {
		animation: fade-in 0.8s ease-out forwards;
	}

	.animate-fade-in-up {
		animation: fade-in-up 1s ease-out forwards;
	}

	.animate-fade-in-up-scale {
		animation: fade-in-up-scale 0.8s ease-out forwards;
		opacity: 0;
	}

	.animate-float {
		animation: float 20s ease-in-out infinite;
	}

	.animate-float-delayed {
		animation: float 18s ease-in-out infinite 2s;
	}

	.animate-float-slow {
		animation: float-slow 25s ease-in-out infinite;
	}

	.animate-float-reverse {
		animation: float-reverse 22s ease-in-out infinite;
	}

	.animate-float-gentle {
		animation: float-gentle 6s ease-in-out infinite;
	}

	.animate-pulse-slow {
		animation: pulse-slow 4s ease-in-out infinite;
	}

	.animate-glow {
		animation: glow 3s ease-in-out infinite;
	}

	.animate-gradient-shift {
		background-size: 200% 200%;
		animation: gradient-shift 8s ease infinite;
	}

	.animation-delay-200 {
		animation-delay: 200ms;
	}

	.animation-delay-1000 {
		animation-delay: 1000ms;
	}
</style>