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
		<h1 class="font-display font-bold text-5xl md:text-7xl mb-6 gradient-text">
			KCA Hack Club
		</h1>
		<p class="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-8 max-w-3xl mx-auto">
			Build. Learn. Innovate.
		</p>
		<div class="flex flex-wrap gap-4 justify-center">
			<a href="/team" class="btn btn-secondary btn-lg">
				Meet the Team
			</a>
		</div>
	</section>

	<section class="py-16">
		<div class="grid grid-cols-2 md:grid-cols-4 gap-6">
			{#each stats as stat}
				<div class="card text-center">
					<div class="p-6">
						<div class="text-4xl font-bold gradient-text mb-2">{stat.value}</div>
						<div class="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
					</div>
				</div>
			{/each}
		</div>
	</section>
</div>