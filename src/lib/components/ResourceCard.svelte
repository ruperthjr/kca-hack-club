<script lang="ts">
	import type { Resource } from '$utils/blog';
	
	interface Props {
		resource: Resource;
	}
	
	let { resource }: Props = $props();
	
	const categoryColors: Record<string, string> = {
		books: 'from-amber-500 to-orange-500',
		tools: 'from-blue-500 to-cyan-500',
		courses: 'from-green-500 to-emerald-500',
		drive: 'from-purple-500 to-pink-500',
		youtube: 'from-red-500 to-rose-500'
	};
	
	const categoryIcons: Record<string, string> = {
		books: '',
		tools: '',
		courses: '',
		drive: '',
		youtube: ''
	};
</script>

<a
	href="/resources/{resource.slug}"
	class="card card-hover group block"
>
	<div class="p-6">
		<div class="flex items-start justify-between mb-4">
			<div class="flex items-center space-x-3">
				<div class="w-12 h-12 rounded-lg bg-gradient-to-br {categoryColors[resource.category] || 'from-gray-500 to-gray-600'} flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-200">
					{resource.icon || categoryIcons[resource.category] || ''}
				</div>
				<div>
					<span class="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wide">
						{resource.category}
					</span>
					<h3 class="font-display font-bold text-lg group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
						{resource.title}
					</h3>
				</div>
			</div>
		</div>
		
		{#if resource.subcategory}
			<span class="badge badge-secondary mb-3">{resource.subcategory}</span>
		{/if}
		
		<div class="flex items-center text-xs text-gray-500 dark:text-gray-400">
			<svg class="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
			</svg>
			Updated {new Date(resource.lastUpdated).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
		</div>
	</div>
</a>