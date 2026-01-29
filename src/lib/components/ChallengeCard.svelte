<script lang="ts">
  import type { Challenge } from '$lib/utils/challenge';

  export let challenge: Challenge;
  export let index: number = 0;
  export let category: 'daily' | 'weekly' | 'monthly';

  const categoryConfig = {
    daily: {
      icon: '📅',
      color: 'blue',
      gradient: 'from-blue-500 to-cyan-500',
      timeIcon: '⏱️'
    },
    weekly: {
      icon: '📝',
      color: 'purple',
      gradient: 'from-purple-500 to-pink-500',
      timeIcon: '📆'
    },
    monthly: {
      icon: '🚀',
      color: 'green',
      gradient: 'from-green-500 to-emerald-500',
      timeIcon: '🗓️'
    }
  };

  const difficultyConfig = {
    beginner: {
      icon: '🟢',
      color: 'green',
      text: 'text-green-600 dark:text-green-400',
      bg: 'bg-green-100 dark:bg-green-900/30',
      border: 'border-green-200 dark:border-green-800'
    },
    intermediate: {
      icon: '🟡',
      color: 'yellow',
      text: 'text-yellow-600 dark:text-yellow-400',
      bg: 'bg-yellow-100 dark:bg-yellow-900/30',
      border: 'border-yellow-200 dark:border-yellow-800'
    },
    advanced: {
      icon: '🔴',
      color: 'red',
      text: 'text-red-600 dark:text-red-400',
      bg: 'bg-red-100 dark:bg-red-900/30',
      border: 'border-red-200 dark:border-red-800'
    }
  };

  const config = categoryConfig[category];
  const diffConfig = difficultyConfig[challenge.difficulty as keyof typeof difficultyConfig];
</script>

<a
  href="/challenges/{category}/{challenge.slug}"
  class="group block h-full"
  style="animation-delay: {index * 50}ms"
>
  <div class="h-full bg-white dark:bg-neutral-900 rounded-xl border-2 border-neutral-200 dark:border-neutral-800 p-6 hover:shadow-xl hover:border-{config.color}-300 dark:hover:border-{config.color}-600 transition-all duration-300 hover:-translate-y-1">
    <!-- Header -->
    <div class="flex items-start justify-between mb-4">
      <div class="flex items-center gap-3">
        <div class={`w-10 h-10 rounded-lg bg-${config.color}-100 dark:bg-${config.color}-900/30 flex items-center justify-center text-xl`}>
          {config.icon}
        </div>
        <div>
          <h3 class="font-bold text-lg text-neutral-900 dark:text-white group-hover:text-{config.color}-600 dark:group-hover:text-{config.color}-400 transition-colors line-clamp-1">
            {challenge.title}
          </h3>
          <div class="flex items-center gap-2 mt-1">
            <span class={`inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-xs font-medium ${diffConfig.bg} ${diffConfig.text} border ${diffConfig.border}`}>
              <span>{diffConfig.icon}</span>
              <span class="capitalize">{challenge.difficulty}</span>
            </span>
            <span class="text-xs text-neutral-500 dark:text-neutral-400 flex items-center gap-1">
              <span>{config.timeIcon}</span>
              <span>{challenge.duration}</span>
            </span>
          </div>
        </div>
      </div>
    </div>

    <!-- Description -->
    <p class="text-sm text-neutral-600 dark:text-neutral-400 mb-4 line-clamp-2">
      {challenge.description}
    </p>

    <!-- Skills -->
    {#if challenge.skills && challenge.skills.length > 0}
      <div class="mb-4">
        <div class="flex flex-wrap gap-1">
          {#each challenge.skills.slice(0, 3) as skill}
            <span class="text-xs px-2 py-1 rounded-md bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300">
              {skill}
            </span>
          {/each}
          {#if challenge.skills.length > 3}
            <span class="text-xs px-2 py-1 rounded-md bg-neutral-200 dark:bg-neutral-700 text-neutral-600 dark:text-neutral-400">
              +{challenge.skills.length - 3}
            </span>
          {/if}
        </div>
      </div>
    {/if}

    <!-- Footer -->
    <div class="flex items-center justify-between pt-4 border-t border-neutral-200 dark:border-neutral-800">
      <div class="text-xs text-neutral-500 dark:text-neutral-400">
        Recommended for:
        <div class="flex flex-wrap gap-1 mt-1">
          {#each challenge.recommendedFor.slice(0, 2) as member, i}
            <span class="text-xs font-medium text-neutral-700 dark:text-neutral-300">
              {member}{i < Math.min(challenge.recommendedFor.length, 2) - 1 ? ',' : ''}
            </span>
          {/each}
          {#if challenge.recommendedFor.length > 2}
            <span class="text-xs text-neutral-500">
              +{challenge.recommendedFor.length - 2}
            </span>
          {/if}
        </div>
      </div>
      
      <div class="flex items-center gap-2">
        <span class="text-sm font-medium text-{config.color}-600 dark:text-{config.color}-400">
          View →
        </span>
      </div>
    </div>
  </div>
</a>