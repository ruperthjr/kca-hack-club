<script lang="ts">
	import ResourceCard from '$components/ResourceCard.svelte';
	import { groupByCategory } from '$utils/blog';
	import type { PageData } from './$types';

	export let data: PageData & { resources: any[] };
	
	const grouped = groupByCategory(data.resources);
	const categories = Object.keys(grouped);
</script>

<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
	<div class="text-center mb-12">
		<h1 class="font-display font-bold text-4xl md:text-5xl mb-4 gradient-text">
			Resources
		</h1>
		<p class="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
			Curated collection of books, tools, courses, and more to accelerate your learning
		</p>
	</div>

	<div class="space-y-12">
		{#each categories as category}
			<section>
				<h2 class="font-display font-bold text-2xl mb-6 capitalize">
					{category.replace('-', ' ')}
				</h2>
				<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
					{#each grouped[category] as resource}
						<ResourceCard {resource} />
					{/each}
				</div>
			</section>
		{/each}
	</div>
</div>