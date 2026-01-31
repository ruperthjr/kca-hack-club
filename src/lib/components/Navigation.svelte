<script lang="ts">
	import { page } from '$app/stores';
	import ThemeToggle from './ThemeToggle.svelte';
	
	let mobileMenuOpen = $state(false);
	
	const navigation = [
		{ name: 'Home', href: '/' },
		{ name: 'Resources', href: '/resources' },
		{ name: 'Challenges', href: '/challenges' },
	];
	
	function isActive(href: string, pathname: string): boolean {
		if (href === '/') return pathname === '/';
		return pathname.startsWith(href);
	}
	
	function toggleMenu() {
		mobileMenuOpen = !mobileMenuOpen;
	}
	
	function closeMenu() {
		mobileMenuOpen = false;
	}
</script>

<nav class="sticky top-0 z-50 bg-white/80 dark:bg-neutral-950/80 backdrop-blur-xl border-b border-neutral-200 dark:border-neutral-800 shadow-sm">
	<!-- Gradient Line at Top -->
	<div class="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>

	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="flex justify-between items-center h-16">
			<!-- Logo Section -->
			<a href="/" class="flex items-center space-x-3 group relative">
				<!-- Hover Glow Effect -->
				<div class="absolute -inset-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-300"></div>
				
				<div class="relative flex items-center space-x-3">
					<div class="relative">
						<!-- Rotating border on hover -->
						<div class="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl opacity-0 group-hover:opacity-100 blur transition-opacity duration-300"></div>
						<img 
							src="/hackclub.jpg" 
							alt="Hack Club Logo" 
							class="relative w-10 h-10 rounded-lg transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3"
						/>
					</div>
					
					<div class="hidden sm:block">
						<div class="font-display font-black text-xl bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent">
							KCA Hack Club
						</div>
						<div class="text-xs font-semibold text-neutral-500 dark:text-neutral-500 flex items-center gap-1.5">
							<span class="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
							Build. Learn. Innovate.
						</div>
					</div>
				</div>
			</a>
			
			<!-- Desktop Navigation -->
			<div class="hidden lg:flex items-center space-x-2">
				{#each navigation as item}
					<a
						href={item.href}
						class="relative px-4 py-2 rounded-xl text-sm font-bold transition-all duration-300 group/nav {isActive(item.href, $page.url.pathname) 
							? 'text-white' 
							: 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-50'}"
					>
						{#if isActive(item.href, $page.url.pathname)}
							<!-- Active State Background -->
							<div class="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-xl shadow-lg shadow-blue-500/30"></div>
							<span class="relative">{item.name}</span>
						{:else}
							<!-- Hover State Background -->
							<div class="absolute inset-0 bg-neutral-100 dark:bg-neutral-800 rounded-xl opacity-0 group-hover/nav:opacity-100 transition-opacity duration-300"></div>
							<div class="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl opacity-0 group-hover/nav:opacity-100 transition-opacity duration-300"></div>
							<span class="relative">{item.name}</span>
						{/if}
					</a>
				{/each}
			</div>
			
			<!-- Right Section -->
			<div class="flex items-center space-x-3">
				<ThemeToggle />
				
				<!-- Mobile Menu Button -->
				<button
					onclick={toggleMenu}
					class="lg:hidden relative p-2.5 rounded-xl text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-50 transition-all duration-300 group/menu"
					aria-label="Toggle menu"
				>
					<!-- Hover Background -->
					<div class="absolute inset-0 bg-neutral-100 dark:bg-neutral-800 rounded-xl opacity-0 group-hover/menu:opacity-100 transition-opacity duration-300"></div>
					
					<div class="relative w-6 h-6 flex items-center justify-center">
						{#if mobileMenuOpen}
							<svg class="w-6 h-6 animate-spin-in" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M6 18L18 6M6 6l12 12" />
							</svg>
						{:else}
							<svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M4 6h16M4 12h16M4 18h16" />
							</svg>
						{/if}
					</div>
				</button>
			</div>
		</div>
	</div>
	
	<!-- Mobile Menu -->
	{#if mobileMenuOpen}
		<div class="lg:hidden border-t border-neutral-200 dark:border-neutral-800 bg-white/95 dark:bg-neutral-950/95 backdrop-blur-xl">
			<div class="px-3 pt-3 pb-4 space-y-2">
				{#each navigation as item, i}
					<a
						href={item.href}
						onclick={closeMenu}
						class="relative block px-4 py-3 rounded-xl text-base font-bold transition-all duration-300 group/mobile animate-slide-in"
						style="animation-delay: {i * 50}ms"
					>
						{#if isActive(item.href, $page.url.pathname)}
							<!-- Active State -->
							<div class="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-xl shadow-lg"></div>
							<div class="relative flex items-center justify-between text-white">
								<span>{item.name}</span>
								<svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7" />
								</svg>
							</div>
						{:else}
							<!-- Inactive State -->
							<div class="absolute inset-0 bg-neutral-100 dark:bg-neutral-800 rounded-xl opacity-0 group-hover/mobile:opacity-100 transition-opacity duration-300"></div>
							<div class="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl opacity-0 group-hover/mobile:opacity-100 transition-opacity duration-300"></div>
							<div class="relative flex items-center justify-between text-neutral-600 dark:text-neutral-400 group-hover/mobile:text-neutral-900 dark:group-hover/mobile:text-neutral-50">
								<span>{item.name}</span>
								<svg class="w-5 h-5 opacity-0 group-hover/mobile:opacity-100 transition-opacity duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7" />
								</svg>
							</div>
						{/if}
					</a>
				{/each}
			</div>
		</div>
	{/if}
</nav>

<style>
	@keyframes spin-in {
		from {
			opacity: 0;
			transform: rotate(-90deg);
		}
		to {
			opacity: 1;
			transform: rotate(0deg);
		}
	}

	@keyframes slide-in {
		from {
			opacity: 0;
			transform: translateX(-20px);
		}
		to {
			opacity: 1;
			transform: translateX(0);
		}
	}

	.animate-spin-in {
		animation: spin-in 0.3s ease-out;
	}

	.animate-slide-in {
		animation: slide-in 0.3s ease-out forwards;
		opacity: 0;
	}
</style>