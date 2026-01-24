<script lang="ts">
	import ThemeToggle from './ThemeToggle.svelte';
	
	let mobileMenuOpen = false;
	
	const navigation = [
		{ name: 'Home', href: '/' },
		{ name: 'Team', href: '/team' },
		{ name: 'Resources', href: '/resources' },
		{ name: 'Challenges', href: '/challenges' },
		{ name: 'Hackathons', href: '/hackathons' },
	];
	
	function isActive(href: string): boolean {
		const pathname = typeof window !== 'undefined' ? window.location.pathname : '/';
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

<nav class="sticky top-0 z-50 bg-white/80 dark:bg-gray-950/80 backdrop-blur-lg border-b border-gray-200 dark:border-gray-800">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="flex justify-between items-center h-16">
			<a href="/" class="flex items-center space-x-3 group">
				<div class="flex items-center space-x-3">
					<img 
						src="/hackclub.jpg" 
						alt="Hack Club Logo" 
						class="w-10 h-10 rounded-lg"
				/>
				</div>
				<div class="hidden sm:block">
					<div class="font-display font-bold text-xl gradient-text">KCA Hack Club</div>
					<div class="text-xs text-gray-600 dark:text-gray-400">Build. Learn. Innovate.</div>
				</div>
			</a>
			
			<div class="hidden lg:flex items-center space-x-1">
				{#each navigation as item}
					<a
						href={item.href}
						class="px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-200 {isActive(item.href) ? 'bg-primary-100 dark:bg-primary-900/30 text-primary-900 dark:text-primary-100' : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'}"
					>
						{item.name}
					</a>
				{/each}
			</div>
			
			<div class="flex items-center space-x-4">
				<ThemeToggle />
				<button
					on:click={toggleMenu}
					class="lg:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
					aria-label="Toggle menu"
				>
					{#if mobileMenuOpen}
						<svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
						</svg>
					{:else}
						<svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
						</svg>
					{/if}
				</button>
			</div>
		</div>
	</div>
	
	{#if mobileMenuOpen}
		<div class="lg:hidden border-t border-gray-200 dark:border-gray-800 animate-fade-in">
			<div class="px-2 pt-2 pb-3 space-y-1">
				{#each navigation as item}
					<a
						href={item.href}
						on:click={closeMenu}
						class="block px-3 py-2 rounded-lg text-base font-medium transition-colors duration-200 {isActive(item.href) ? 'bg-primary-100 dark:bg-primary-900/30 text-primary-900 dark:text-primary-100' : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'}"
					>
						{item.name}
					</a>
				{/each}
			</div>
		</div>
	{/if}
</nav>