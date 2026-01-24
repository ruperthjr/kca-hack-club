<script lang="ts">
	import Navbar from '$components/Navigation.svelte';
	import Footer from '$components/Footer.svelte';
	import ReadingProgress from '$components/ReadingProgress.svelte';
	import { onMount } from 'svelte';
    import '../app.css';

	let { children } = $props();

	onMount(() => {
		const theme = localStorage.getItem('theme');
		if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
			document.documentElement.classList.add('dark');
		}
	});
</script>

<svelte:head>
	<title>KCA Hack Club</title>
	<meta name="description" content="Build. Learn. Innovate." />
</svelte:head>

<div class="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100">
	<ReadingProgress />
	<Navbar />
	<main>
		{@render children()}
	</main>
	<Footer />
</div>

<style>
	:global(body) {
		margin: 0;
		padding: 0;
	}
</style>