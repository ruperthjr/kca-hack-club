<script lang="ts">
  export let selectedDifficulty: string;
  export let stats: {
    beginner: number;
    intermediate: number;
    advanced: number;
  };

  type DifficultyColor = 'neutral' | 'green' | 'yellow' | 'red';

  const difficulties: {
    id: string;
    label: string;
    color: DifficultyColor;
    count?: number;
  }[] = [
    { id: 'all', label: 'All Difficulties', color: 'neutral' },
    { id: 'beginner', label: 'Beginner', color: 'green', count: stats.beginner },
    { id: 'intermediate', label: 'Intermediate', color: 'yellow', count: stats.intermediate },
    { id: 'advanced', label: 'Advanced', color: 'red', count: stats.advanced }
  ];

  const colorClasses: Record<DifficultyColor, { active: string; inactive: string }> = {
    neutral: {
      active: 'bg-neutral-800 text-white dark:bg-white dark:text-neutral-900',
      inactive: 'bg-white dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 border-neutral-300 dark:border-neutral-700'
    },
    green: {
      active: 'bg-green-600 text-white',
      inactive: 'bg-white dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 border-neutral-300 dark:border-neutral-700'
    },
    yellow: {
      active: 'bg-yellow-500 text-white',
      inactive: 'bg-white dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 border-neutral-300 dark:border-neutral-700'
    },
    red: {
      active: 'bg-red-600 text-white',
      inactive: 'bg-white dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 border-neutral-300 dark:border-neutral-700'
    }
  };
</script>

<div class="space-y-3">
  <label
    class="text-sm font-medium text-gray-700 dark:text-gray-300"
    for="difficulty-filter-btn-all"
  >
    Filter by Difficulty
  </label>
  <div class="flex flex-wrap gap-2">
    {#each difficulties as difficulty}
      <button
        id={difficulty.id === 'all' ? 'difficulty-filter-btn-all' : undefined}
        on:click={() => selectedDifficulty = difficulty.id}
        class={`inline-flex items-center gap-2 px-4 py-2.5 rounded-lg font-medium transition-all duration-200 border ${
          selectedDifficulty === difficulty.id
            ? `${colorClasses[difficulty.color].active} shadow-lg scale-105`
            : `${colorClasses[difficulty.color].inactive} hover:scale-105 hover:shadow`
        }`}
      >
        {#if difficulty.id !== 'all'}
          <span class="text-lg">
            {#if difficulty.id === 'beginner'}🟢{/if}
            {#if difficulty.id === 'intermediate'}🟡{/if}
            {#if difficulty.id === 'advanced'}🔴{/if}
          </span>
        {/if}
        <span>{difficulty.label}</span>
        {#if difficulty.count !== undefined}
          <span class={`text-xs px-1.5 py-0.5 rounded-full ${
            selectedDifficulty === difficulty.id
              ? 'bg-white/20'
              : 'bg-gray-100 dark:bg-gray-700'
          }`}>
            {difficulty.count}
          </span>
        {/if}
      </button>
    {/each}
  </div>
</div>