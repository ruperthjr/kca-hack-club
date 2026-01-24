<script lang="ts">
	import { formatDate } from '$utils/date';
	import type { PageData } from './$types';

	export let data: PageData & { member: any };
</script>

<div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
	<div class="mb-8">
		<a href="/team" class="text-primary-600 dark:text-primary-400 hover:underline mb-4 inline-block">
			← Back to Team
		</a>
	</div>

	<div class="card">
		<div class="relative h-64 bg-gradient-to-br from-primary-500 to-secondary-500">
			{#if data.member.avatar}
				<img
					src={data.member.avatar}
					alt={data.member.name}
					class="w-full h-full object-cover"
				/>
			{:else}
				<div class="w-full h-full flex items-center justify-center">
					<span class="text-9xl font-bold text-white opacity-50">
						{data.member.name.charAt(0)}
					</span>
				</div>
			{/if}
		</div>

		<div class="p-8">
			<h1 class="font-display font-bold text-3xl md:text-4xl mb-2">
				{data.member.name}
			</h1>
			<p class="text-xl text-gray-600 dark:text-gray-400 mb-6">
				{data.member.role}
			</p>

			<div class="flex flex-wrap gap-2 mb-6">
				{#if data.member.skills}
					{#each data.member.skills as skill}
						<span class="badge badge-primary">{skill}</span>
					{/each}
				{/if}
			</div>

			<div class="flex items-center space-x-4 mb-8 text-gray-600 dark:text-gray-400">
				<span>Year {data.member.year}</span>
				<span>•</span>
				<span>Joined {formatDate(data.member.joinedDate, 'MMMM yyyy')}</span>
			</div>

			<div class="prose dark:prose-invert max-w-none mb-8">
				{@html data.member.content?.replace(/\n/g, '<br>') || data.member.bio}
			</div>

						<div class="flex gap-4">
							{#if data.member.github}
								<a
									href="https://github.com/{data.member.github}"
									target="_blank"
									rel="noopener noreferrer"
									class="btn btn-secondary"
								>
									GitHub
								</a>
							{/if}
							{#if data.member.linkedin}
								<a
									href="https://linkedin.com/in/{data.member.linkedin}"
									target="_blank"
									rel="noopener noreferrer"
									class="btn btn-secondary"
								>
									LinkedIn
								</a>
							{/if}
						</div>
					</div>
				</div>
			</div>