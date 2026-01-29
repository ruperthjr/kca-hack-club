<script lang="ts">
  import type { Challenge } from '$lib/utils/challenge';
  import ChallengeCard from './ChallengeCard.svelte';

  export let challenges: Challenge[];
  export let category: "daily" | "weekly" | "monthly";
</script>

<div class="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-6">
  <h3 class="font-bold text-xl text-gray-900 dark:text-white mb-4">
    Related Challenges
  </h3>
  
  {#if challenges.length === 0}
    <p class="text-gray-500 dark:text-gray-400 text-center py-4">
      No related challenges found.
    </p>
  {:else}
    <div class="space-y-4">
      {#each challenges as challenge}
        <div class="border-b border-gray-200 dark:border-gray-800 last:border-0 pb-4 last:pb-0">
          <ChallengeCard
            {challenge}
            {category}
          />
        </div>
      {/each}
    </div>
  {/if}
</div>