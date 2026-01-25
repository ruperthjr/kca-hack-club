<script lang="ts">
	import MemberCard from '$components/MemberCard.svelte';
	import type { PageData } from './$types';

	export let data: PageData & { team: any[] };
</script>

<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
	<div class="text-center mb-12">
		<h1 class="font-display font-bold text-4xl md:text-5xl mb-4 gradient-text">
			Our Team
		</h1>
		<p class="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
			Meet the Team
		</p>
	</div>

	<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
		{#each data.team as member}
			<MemberCard {member} />
		{/each}
	</div>
</div>