<script lang="ts">
	interface Props {
		progress: number;
		size?: number;
		strokeWidth?: number;
		color?: string;
		label?: string;
	}
	
	let { progress, size = 120, strokeWidth = 8, color = 'text-primary-500', label }: Props = $props();
	
	const radius = $derived((size - strokeWidth) / 2);
	const circumference = $derived(2 * Math.PI * radius);
	const offset = $derived(circumference - (progress / 100) * circumference);
	const centerX = $derived(size / 2);
	const centerY = $derived(size / 2);
</script>

<div class="relative inline-flex items-center justify-center" style="width: {size}px; height: {size}px;">
	<svg class="transform -rotate-90" width={size} height={size}>
		<circle
			class="text-gray-200 dark:text-gray-700"
			stroke="currentColor"
			fill="none"
			stroke-width={strokeWidth}
			cx={centerX}
			cy={centerY}
			r={radius}
		/>
		<circle
			class="{color}"
			stroke="currentColor"
			fill="none"
			stroke-width={strokeWidth}
			stroke-linecap="round"
			stroke-dasharray={circumference}
			stroke-dashoffset={offset}
			cx={centerX}
			cy={centerY}
			r={radius}
			style="transition: stroke-dashoffset 0.5s ease"
		/>
	</svg>
	<div class="absolute flex flex-col items-center">
		<span class="text-2xl font-bold">{Math.round(progress)}%</span>
		{#if label}
			<span class="text-xs text-gray-600 dark:text-gray-400 mt-1">{label}</span>
		{/if}
	</div>
</div>