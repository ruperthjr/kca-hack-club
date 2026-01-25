<script lang="ts">
	const stats = [
		{ label: 'Active Members', value: '6' },
		{ label: 'Projects Completed', value: '0' },
		{ label: 'Hackathons Won', value: '0' },
		{ label: 'Learning Hours', value: '0' }
	];
</script>

<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
	<section class="py-20 text-center">
		<h1 class="font-display font-bold text-5xl md:text-7xl mb-6 text-neutral-900 dark:text-neutral-50">
			KCA Hack Club
		</h1>
		<p class="text-xl md:text-2xl text-neutral-600 dark:text-neutral-400 mb-8 max-w-3xl mx-auto">
			Build. Learn. Innovate.
		</p>
		<div class="flex flex-wrap gap-4 justify-center">
			<a 
				href="/team" 
				class="inline-flex items-center justify-center px-6 py-3 rounded-lg font-medium bg-neutral-900 text-neutral-50 hover:bg-neutral-800 dark:bg-neutral-50 dark:text-neutral-900 dark:hover:bg-neutral-200 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-neutral-500 focus:ring-offset-2"
			>
				Meet the Team
			</a>
		</div>
	</section>

	<section class="py-16">
		<div class="grid grid-cols-2 md:grid-cols-4 gap-6">
			{#each stats as stat}
				<div class="bg-white dark:bg-neutral-900 rounded-xl shadow-lg border border-neutral-200 dark:border-neutral-800 transition-all duration-200 hover:shadow-xl hover:-translate-y-1">
					<div class="p-6 text-center">
						<div class="text-4xl font-bold text-neutral-900 dark:text-neutral-50 mb-2">
							{stat.value}
						</div>
						<div class="text-sm text-neutral-600 dark:text-neutral-400">
							{stat.label}
						</div>
					</div>
				</div>
			{/each}
		</div>
	</section>
</div>