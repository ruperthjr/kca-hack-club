<script lang="ts">
	const currentYear = new Date().getFullYear();
	
	const links = {
		connect: [
			{ name: 'GitHub', href: 'https://github.com/kcahackclub', icon: 'github' },
			{ name: 'Discord', href: 'https://discord.gg/kcahackclub', icon: 'discord' }
		],
		resources: [
			{ name: 'Challenges', href: '/challenges' },
			{ name: 'Resources', href: '/resources' }
		],
		about: [
			{ name: 'Team', href: '/team' },
			{ name: 'RSS Feed', href: '/rss.xml' }
		]
	};
</script>

<footer class="relative bg-gradient-to-b from-neutral-50 to-neutral-100 dark:from-neutral-950 dark:to-black border-t border-neutral-200 dark:border-neutral-800 overflow-hidden">
	<!-- Decorative Background Elements -->
	<div class="absolute inset-0 overflow-hidden pointer-events-none">
		<!-- Gradient Orbs -->
		<div class="absolute -top-24 -left-24 w-96 h-96 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
		<div class="absolute -bottom-24 -right-24 w-96 h-96 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"></div>
		
		<!-- Grid Pattern -->
		<div class="absolute inset-0 opacity-5 dark:opacity-3">
			<div class="absolute inset-0" style="background-image: radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0); background-size: 40px 40px;"></div>
		</div>
	</div>

	<!-- Top Accent Line -->
	<div class="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>

	<div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
		<div class="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
			<!-- Brand Section -->
			<div class="space-y-6 md:col-span-1">
				<div class="group">
					<!-- Logo with Glow Effect -->
					<div class="flex items-center space-x-3 mb-4">
						<div class="relative">
							<div class="absolute -inset-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl opacity-0 group-hover:opacity-20 blur-lg transition-opacity duration-300"></div>
							<img 
								src="/hackclub.jpg" 
								alt="Hack Club Logo" 
								class="relative w-12 h-12 rounded-xl transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3 shadow-lg"
							/>
						</div>
						<div class="font-display font-black text-xl bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent">
							KCA Hack Club
						</div>
					</div>

					<!-- Tagline -->
					<div class="relative inline-block">
						<div class="absolute -inset-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg blur"></div>
						<p class="relative text-sm font-bold bg-gradient-to-r from-neutral-700 to-neutral-600 dark:from-neutral-300 dark:to-neutral-400 bg-clip-text text-transparent leading-relaxed px-2">
							Build. Learn. Innovate.
						</p>
					</div>
				</div>

				<!-- Social Icons -->
				<div class="flex space-x-3">
					{#each links.connect as link}
						<a
							href={link.href}
							target="_blank"
							rel="noopener noreferrer"
							class="group/social relative flex items-center justify-center w-11 h-11 rounded-xl text-neutral-600 dark:text-neutral-400 transition-all duration-300 hover:scale-110"
							aria-label={link.name}
						>
							<!-- Background -->
							<div class="absolute inset-0 bg-neutral-200 dark:bg-neutral-800 rounded-xl transition-all duration-300 group-hover/social:bg-gradient-to-br {link.icon === 'github' ? 'group-hover/social:from-neutral-900 group-hover/social:to-neutral-700' : 'group-hover/social:from-indigo-600 group-hover/social:to-blue-600'}"></div>
							
							<!-- Glow Effect -->
							<div class="absolute -inset-1 bg-gradient-to-r {link.icon === 'github' ? 'from-neutral-600 to-neutral-800' : 'from-indigo-500 to-blue-500'} rounded-xl opacity-0 group-hover/social:opacity-30 blur transition-opacity duration-300"></div>
							
							<!-- Icon -->
							<div class="relative group-hover/social:text-white transition-colors duration-300">
								{#if link.icon === 'github'}
									<svg class="w-5 h-5 group-hover/social:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
										<path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
									</svg>
								{:else if link.icon === 'discord'}
									<svg class="w-5 h-5 group-hover/social:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
										<path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
									</svg>
								{/if}
							</div>
						</a>
					{/each}
				</div>
			</div>
			
			<!-- Resources Section -->
			<div class="group">
				<h3 class="font-display font-black text-lg text-neutral-900 dark:text-neutral-50 mb-5 flex items-center gap-2">
					<span class="w-1 h-6 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"></span>
					Resources
				</h3>
				<ul class="space-y-3">
					{#each links.resources as link}
						<li>
							<a 
								href={link.href} 
								class="group/link inline-flex items-center gap-2 text-sm font-semibold text-neutral-600 dark:text-neutral-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300"
							>
								<span class="w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 group-hover/link:w-4 transition-all duration-300 rounded-full"></span>
								{link.name}
							</a>
						</li>
					{/each}
				</ul>
			</div>
			
			<!-- About Section -->
			<div class="group">
				<h3 class="font-display font-black text-lg text-neutral-900 dark:text-neutral-50 mb-5 flex items-center gap-2">
					<span class="w-1 h-6 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full"></span>
					About
				</h3>
				<ul class="space-y-3">
					{#each links.about as link}
						<li>
							<a 
								href={link.href} 
								class="group/link inline-flex items-center gap-2 text-sm font-semibold text-neutral-600 dark:text-neutral-400 hover:text-purple-600 dark:hover:text-purple-400 transition-all duration-300"
							>
								<span class="w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 group-hover/link:w-4 transition-all duration-300 rounded-full"></span>
								{link.name}
							</a>
						</li>
					{/each}
				</ul>
			</div>

			<!-- Newsletter/CTA Section -->
			<div class="space-y-4">
				<h3 class="font-display font-black text-lg text-neutral-900 dark:text-neutral-50 mb-5 flex items-center gap-2">
					<span class="w-1 h-6 bg-gradient-to-b from-pink-500 to-orange-500 rounded-full"></span>
					Stay Connected
				</h3>
				<p class="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
					Join our community of builders and innovators.
				</p>
				<div class="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 dark:border-blue-400/30">
					<div class="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
					<span class="text-xs font-bold text-neutral-700 dark:text-neutral-300">Active Community</span>
				</div>
			</div>
		</div>
		
		<!-- Bottom Section -->
		<div class="mt-16 pt-8 border-t border-neutral-200 dark:border-neutral-800">
			<div class="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
				<!-- Copyright -->
				<div class="flex items-center gap-3">
					<p class="text-sm font-medium text-neutral-600 dark:text-neutral-400">
						© {currentYear} KCA Hack Club
					</p>
					<span class="hidden md:block w-1 h-1 bg-neutral-400 rounded-full"></span>
					<p class="hidden md:block text-sm font-medium text-neutral-500 dark:text-neutral-500">
						All rights reserved
					</p>
				</div>

				<!-- Made with Love -->
				<div class="flex items-center gap-2 text-sm font-semibold text-neutral-600 dark:text-neutral-400 group/love">
					<span>Made with</span>
					<svg class="w-4 h-4 text-red-500 group-hover/love:scale-125 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
						<path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
					</svg>
					<span>by the team</span>
				</div>
			</div>
		</div>
	</div>
</footer>