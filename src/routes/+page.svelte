<script lang="ts">
	import { onMount } from 'svelte';

	let mouseX = 0;
	let mouseY = 0;

	onMount(() => {
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
						Level up
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

				<!-- CTA Buttons -->
				<div class="flex flex-wrap gap-4 justify-center items-center pt-4 animate-fade-in-up animation-delay-600">
					
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