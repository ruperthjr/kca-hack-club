<script lang="ts">
	import { onMount } from 'svelte';
	
	let progress = $state(0);
	
	function updateProgress() {
		const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
		const scrolled = (window.scrollY / windowHeight) * 100;
		progress = Math.min(Math.max(scrolled, 0), 100);
	}
	
	onMount(() => {
		updateProgress();
		window.addEventListener('scroll', updateProgress, { passive: true });
		
		return () => {
			window.removeEventListener('scroll', updateProgress);
		};
	});
</script>

<div class="fixed top-0 left-0 right-0 z-50 h-1 bg-gray-200 dark:bg-gray-800">
	<div
		class="h-full bg-gradient-to-r from-primary-500 to-secondary-500 transition-all duration-150 ease-out"
		style="width: {progress}%"
	></div>
</div>