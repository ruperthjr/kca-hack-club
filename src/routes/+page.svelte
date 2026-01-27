<script lang="ts">
	import { onMount } from 'svelte';

	const stats = [
		{ label: 'Active Members', value: '5', icon: '', color: 'from-blue-500 to-cyan-500' },
		{ label: 'Projects Completed', value: '0', icon: '', color: 'from-purple-500 to-pink-500' },
		{ label: 'Hackathons Won', value: '0', icon: '', color: 'from-amber-500 to-orange-500' },
		{ label: 'Learning Hours', value: '0', icon: '', color: 'from-green-500 to-emerald-500' }
	];

	let mounted = false;
	let mouseX = 0;
	let mouseY = 0;

	onMount(() => {
		mounted = true;
		
		const handleMouseMove = (e: MouseEvent) => {
			mouseX = e.clientX;
			mouseY = e.clientY;
		};

		window.addEventListener('mousemove', handleMouseMove);
		
		return () => {
			window.removeEventListener('mousemove', handleMouseMove);
		};
	});
</script>

<div class="relative overflow-hidden">
	<!-- Animated Background Gradient -->
	<div class="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
		<div class="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] opacity-20 dark:opacity-10">
			<div class="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full blur-3xl animate-blob"></div>
			<div class="absolute top-1/3 right-1/4 w-96 h-96 bg-gradient-to-br from-pink-500 to-orange-500 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
			<div class="absolute bottom-1/4 left-1/3 w-96 h-96 bg-gradient-to-br from-green-500 to-cyan-500 rounded-full blur-3xl animate-blob animation-delay-4000"></div>
		</div>
	</div>

	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<!-- Hero Section -->
		<section class="relative py-24 md:py-32">
			<div class="text-center space-y-8">
				<!-- Animated Badge -->
				<div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 dark:from-blue-500/20 dark:to-purple-500/20 border border-blue-500/20 dark:border-blue-500/30 backdrop-blur-sm animate-fade-in">
					<span class="relative flex h-2 w-2">
						<span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
						<span class="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
					</span>
					<span class="text-sm font-medium text-neutral-700 dark:text-neutral-300">
						Not accepting new members at the moment
					</span>
				</div>

				<!-- Main Heading with Gradient -->
				<div class="space-y-4">
					<h1 class="font-display font-black text-6xl md:text-8xl lg:text-9xl tracking-tight animate-fade-in-up">
						<span class="inline-block bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent animate-gradient-x">
							KCA Hack Club
						</span>
					</h1>
					
					<p class="text-2xl md:text-3xl lg:text-4xl font-bold text-neutral-700 dark:text-neutral-300 animate-fade-in-up animation-delay-200">
						Build. Learn. Innovate.
					</p>
				</div>

				<!-- Description -->
				<p class="text-lg md:text-xl text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto leading-relaxed animate-fade-in-up animation-delay-400">
					Join a community of passionate builders, creators, and innovators. 
					Let's shape the future of technology together.
				</p>

				<!-- CTA Buttons -->
				<div class="flex flex-wrap gap-4 justify-center items-center pt-4 animate-fade-in-up animation-delay-600">
					<a 
						href="/team" 
						class="group relative inline-flex items-center justify-center px-8 py-4 rounded-xl font-semibold text-lg overflow-hidden bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 transition-all duration-300 hover:scale-105"
					>
						<span class="relative z-10">Meet the Team</span>
						<svg class="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
						</svg>
						<div class="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
					</a>
					
					<a 
						href="/resources" 
						class="inline-flex items-center justify-center px-8 py-4 rounded-xl font-semibold text-lg border-2 border-neutral-300 dark:border-neutral-700 text-neutral-900 dark:text-neutral-100 hover:bg-neutral-100 dark:hover:bg-neutral-900 hover:border-neutral-400 dark:hover:border-neutral-600 transition-all duration-300 hover:scale-105"
					>
						Explore Resources
					</a>
				</div>
			</div>

			<!-- Floating Elements -->
			<div class="absolute top-20 left-10 animate-float hidden lg:block">
				<div class="text-6xl opacity-20 dark:opacity-10"></div>
			</div>
			<div class="absolute bottom-20 right-10 animate-float animation-delay-2000 hidden lg:block">
				<div class="text-6xl opacity-20 dark:opacity-10"></div>
			</div>
		</section>

		<!-- Stats Section -->
		<section class="py-16">
			<div class="grid grid-cols-2 md:grid-cols-4 gap-6">
				{#each stats as stat, i}
					<div 
						class="group relative bg-white dark:bg-neutral-900 rounded-2xl shadow-lg border border-neutral-200 dark:border-neutral-800 overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 animate-fade-in-up"
						style="animation-delay: {(i + 1) * 100}ms"
					>
						<!-- Gradient Background on Hover -->
						<div class="absolute inset-0 bg-gradient-to-br {stat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
						
						<div class="relative p-6 text-center">
							<!-- Icon -->
							<div class="text-4xl mb-3 transform group-hover:scale-110 transition-transform duration-300">
								{stat.icon}
							</div>
							
							<!-- Value -->
							<div class="text-5xl font-black bg-gradient-to-br {stat.color} bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
								{stat.value}
							</div>
							
							<!-- Label -->
							<div class="text-sm font-medium text-neutral-600 dark:text-neutral-400">
								{stat.label}
							</div>
						</div>

						<!-- Decorative Corner -->
						<div class="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br {stat.color} opacity-10 rounded-bl-full"></div>
					</div>
				{/each}
			</div>
		</section>
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

	@keyframes float {
		0%, 100% {
			transform: translateY(0);
		}
		50% {
			transform: translateY(-20px);
		}
	}

	@keyframes gradient-x {
		0%, 100% {
			background-position: 0% 50%;
		}
		50% {
			background-position: 100% 50%;
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

	.animate-float {
		animation: float 3s ease-in-out infinite;
	}

	.animate-gradient-x {
		background-size: 200% 200%;
		animation: gradient-x 3s ease infinite;
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

	.animation-delay-2000 {
		animation-delay: 2s;
	}

	.animation-delay-4000 {
		animation-delay: 4s;
	}
</style>