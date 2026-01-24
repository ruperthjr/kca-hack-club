<script lang="ts">
	import type { TeamMember } from '$utils/blog';
	
	interface Props {
		member: TeamMember;
	}
	
	let { member }: Props = $props();
	
	function handleGithubClick(e: MouseEvent) {
		e.stopPropagation();
	}
</script>

{#if member}
<div class="card card-hover group block overflow-hidden">
	<div class="relative h-48 bg-gradient-to-br from-primary-500 to-secondary-500 overflow-hidden">
		{#if member.avatar}
			<img
				src={member.avatar}
				alt={member.name}
				class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
			/>
		{:else}
			<div class="w-full h-full flex items-center justify-center">
				<span class="text-6xl font-bold text-white opacity-50">
					{member.name.charAt(0)}
				</span>
			</div>
		{/if}
		<div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
		<div class="absolute bottom-4 left-4 right-4">
			<h3 class="font-display font-bold text-xl text-white">
				<a href="/team/{member.slug}" class="hover:underline">{member.name}</a>
			</h3>
			<p class="text-sm text-gray-200">{member.role}</p>
		</div>
	</div>
	
	<div class="p-6">
		<p class="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
			{member.bio}
		</p>
		
		{#if member.skills && member.skills.length > 0}
			<div class="flex flex-wrap gap-2 mb-4">
				{#each member.skills.slice(0, 3) as skill}
					<span class="badge badge-primary text-xs">{skill}</span>
				{/each}
				{#if member.skills.length > 3}
					<span class="badge badge-secondary text-xs">+{member.skills.length - 3}</span>
				{/if}
			</div>
		{/if}
		<div class="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
			<span class="flex items-center">
				<svg class="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
				</svg>
				Year {member.year}
			</span>
			{#if member.github}
				<a
					href="https://github.com/{member.github}"
					target="_blank"
					rel="noopener noreferrer"
					class="hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
					onclick={handleGithubClick}
					aria-label="GitHub Profile"
				>
					<svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
						<path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
					</svg>
				</a>
			{/if}
		</div>
	</div>
</div>
{/if}