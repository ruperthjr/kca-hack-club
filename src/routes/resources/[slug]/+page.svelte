<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData & { resource: any };
</script>

<div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
	<div class="mb-8">
		<a href="/resources" class="text-primary-600 dark:text-primary-400 hover:underline mb-4 inline-block">
			← Back to Resources
		</a>
		
		<div class="card">
			<div class="p-8">
				<div class="flex items-center space-x-2 mb-4">
					<span class="badge badge-primary">{data.resource.category}</span>
					{#if data.resource.subcategory}
						<span class="badge badge-secondary">{data.resource.subcategory}</span>
					{/if}
				</div>
				
				<h1 class="font-display font-bold text-3xl md:text-4xl mb-4">
					{data.resource.title}
				</h1>
				
				<div class="text-sm text-gray-600 dark:text-gray-400 mb-8">
					Last updated: {new Date(data.resource.lastUpdated).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
				</div>
				
				<div class="prose dark:prose-invert max-w-none">
					{@html data.resource.content.replace(/\n/g, '<br>')}
				</div>
				
				<div class="mt-8 flex gap-4">
					<button class="btn btn-primary">
						Access Resources
					</button>
					<button class="btn btn-secondary">
						Request Addition
					</button>
				</div>
			</div>
		</div>
	</div>
</div>