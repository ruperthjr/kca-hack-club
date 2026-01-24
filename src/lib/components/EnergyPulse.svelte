<script lang="ts">
	interface Props {
		level: 'low' | 'medium' | 'high';
		size?: number;
	}
	
	let { level, size = 40 }: Props = $props();
	
	const config = {
		low: { color: 'bg-gray-400', glow: 'shadow-gray-400/50', ring: 'ring-gray-400/20' },
		medium: { color: 'bg-yellow-400', glow: 'shadow-yellow-400/50', ring: 'ring-yellow-400/20' },
		high: { color: 'bg-green-400', glow: 'shadow-green-400/50', ring: 'ring-green-400/20' }
	};
	
	const color = $derived(config[level].color);
	const glow = $derived(config[level].glow);
	const ring = $derived(config[level].ring);
	
	const outerSize = $derived(size);
	const middleSize = $derived((size * 3) / 4);
	const innerSize = $derived(size / 2);
</script>

<div 
	class="relative inline-flex items-center justify-center" 
	style="width: {outerSize}px; height: {outerSize}px;"
>
	<div 
		class="absolute rounded-full {color} opacity-20 animate-ping" 
		style="width: {outerSize}px; height: {outerSize}px;"
	></div>
	<div 
		class="absolute rounded-full {color} opacity-40 animate-pulse" 
		style="width: {middleSize}px; height: {middleSize}px;"
	></div>
	<div 
		class="rounded-full {color} {glow} shadow-lg ring-4 {ring}" 
		style="width: {innerSize}px; height: {innerSize}px;"
	></div>
</div>