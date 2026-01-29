<script lang="ts">
  import type { Challenge } from '$lib/utils/challenge';

  export let challenge: Challenge;

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

  const diffConfig = difficultyConfig[challenge.difficulty];
</script>

<div class="p-8">
  <!-- Challenge Header -->
  <div class="flex items-start justify-between mb-8">
    <div class="flex-1">
      <div class="flex items-center gap-3 mb-4">
        <span class={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium ${diffConfig.bg} ${diffConfig.text} border ${diffConfig.border}`}>
          <span class="text-lg">{diffConfig.icon}</span>
          <span class="capitalize">{challenge.difficulty}</span>
        </span>
        <span class="text-sm text-neutral-500 dark:text-neutral-400">
          {challenge.category} Challenge
        </span>
      </div>
      
      <h1 class="text-3xl font-bold text-neutral-900 dark:text-white mb-4">
        {challenge.title}
      </h1>
      
      <p class="text-lg text-neutral-600 dark:text-neutral-400">
        {challenge.description}
      </p>
    </div>
  </div>

  <!-- Stats Grid -->
  <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
    <div class="bg-neutral-50 dark:bg-neutral-900 rounded-xl p-4">
      <div class="text-sm text-neutral-500 dark:text-neutral-400 mb-1">Duration</div>
      <div class="text-xl font-bold text-neutral-900 dark:text-white">{challenge.duration}</div>
    </div>
    <div class="bg-neutral-50 dark:bg-neutral-900 rounded-xl p-4">
      <div class="text-sm text-neutral-500 dark:text-neutral-400 mb-1">Estimated Hours</div>
      <div class="text-xl font-bold text-neutral-900 dark:text-white">{challenge.estimatedHours}</div>
    </div>
    <div class="bg-neutral-50 dark:bg-neutral-900 rounded-xl p-4">
      <div class="text-sm text-neutral-500 dark:text-neutral-400 mb-1">Skills Required</div>
      <div class="text-xl font-bold text-neutral-900 dark:text-white">{challenge.skills.length}</div>
    </div>
    <div class="bg-neutral-50 dark:bg-neutral-900 rounded-xl p-4">
      <div class="text-sm text-neutral-500 dark:text-neutral-400 mb-1">Team Members</div>
      <div class="text-xl font-bold text-neutral-900 dark:text-white">{challenge.recommendedFor.length}</div>
    </div>
  </div>

  <!-- Main Content Grid -->
  <div class="space-y-8">
    <!-- Objectives & Requirements -->
    <div class="grid md:grid-cols-2 gap-8">
      <!-- Objectives -->
      <div>
        <div class="flex items-center gap-3 mb-4">
          <div class="w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400">
            <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h2 class="text-2xl font-bold text-neutral-900 dark:text-white">Objectives</h2>
        </div>
        <ul class="space-y-3">
          {#each challenge.objectives as objective}
            <li class="flex items-start gap-3 p-3 rounded-xl bg-blue-50/50 dark:bg-blue-950/20">
              <svg class="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              <span class="text-neutral-700 dark:text-neutral-300">{objective}</span>
            </li>
          {/each}
        </ul>
      </div>

      <!-- Requirements -->
      <div>
        <div class="flex items-center gap-3 mb-4">
          <div class="w-10 h-10 rounded-xl bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-purple-600 dark:text-purple-400">
            <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
          </div>
          <h2 class="text-2xl font-bold text-neutral-900 dark:text-white">Requirements</h2>
        </div>
        <ul class="space-y-3">
          {#each challenge.requirements as requirement}
            <li class="flex items-start gap-3 p-3 rounded-xl bg-purple-50/50 dark:bg-purple-950/20">
              <svg class="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              <span class="text-neutral-700 dark:text-neutral-300">{requirement}</span>
            </li>
          {/each}
        </ul>
      </div>
    </div>

    <!-- Skills & Prerequisites -->
    <div class="grid md:grid-cols-2 gap-8">
      <!-- Skills -->
      <div>
        <h2 class="text-xl font-bold text-neutral-900 dark:text-white mb-4">Skills Required</h2>
        <div class="flex flex-wrap gap-2">
          {#each challenge.skills as skill}
            <span class="px-3 py-2 rounded-lg bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800">
              {skill}
            </span>
          {/each}
        </div>
      </div>

      <!-- Prerequisites -->
      {#if challenge.prerequisites && challenge.prerequisites.length > 0}
        <div>
          <h2 class="text-xl font-bold text-neutral-900 dark:text-white mb-4">Prerequisites</h2>
          <ul class="space-y-2">
            {#each challenge.prerequisites as prereq}
              <li class="flex items-start gap-3 p-3 rounded-xl bg-yellow-50/50 dark:bg-yellow-950/20">
                <svg class="w-5 h-5 text-yellow-500 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span class="text-neutral-700 dark:text-neutral-300">{prereq}</span>
              </li>
            {/each}
          </ul>
        </div>
      {/if}
    </div>

    <!-- Bonus Points -->
    {#if challenge.bonusPoints && challenge.bonusPoints.length > 0}
      <div>
        <div class="flex items-center gap-3 mb-4">
          <div class="w-10 h-10 rounded-xl bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center text-amber-600 dark:text-amber-400">
            <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
            </svg>
          </div>
          <h2 class="text-2xl font-bold text-neutral-900 dark:text-white">Bonus Points</h2>
        </div>
        <div class="grid md:grid-cols-2 gap-4">
          {#each challenge.bonusPoints as bonus}
            <div class="p-4 rounded-xl bg-gradient-to-r from-amber-50 to-yellow-50 dark:from-amber-950/20 dark:to-yellow-950/20 border border-amber-200 dark:border-amber-800">
              <div class="flex items-center gap-2">
                <span class="text-lg">⭐</span>
                <span class="text-neutral-700 dark:text-neutral-300">{bonus}</span>
              </div>
            </div>
          {/each}
        </div>
      </div>
    {/if}

    <!-- Resources -->
    {#if challenge.resources && challenge.resources.length > 0}
      <div>
        <div class="flex items-center gap-3 mb-4">
          <div class="w-10 h-10 rounded-xl bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
            <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
            </svg>
          </div>
          <h2 class="text-2xl font-bold text-neutral-900 dark:text-white">Resources</h2>
        </div>
        <div class="grid md:grid-cols-2 gap-4">
          {#each challenge.resources as resource}
            <a
              href={resource.url}
              target="_blank"
              rel="noopener noreferrer"
              class="group flex items-center justify-between p-4 rounded-xl bg-white dark:bg-neutral-900 border-2 border-neutral-200 dark:border-neutral-800 hover:border-emerald-300 dark:hover:border-emerald-600 hover:shadow-lg transition-all"
            >
              <div class="flex items-center gap-3">
                {#if resource.type === 'article'}
                  <div class="w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400">
                    <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                {:else if resource.type === 'video'}
                  <div class="w-10 h-10 rounded-lg bg-red-100 dark:bg-red-900/30 flex items-center justify-center text-red-600 dark:text-red-400">
                    <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                {:else}
                  <div class="w-10 h-10 rounded-lg bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600 dark:text-green-400">
                    <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                {/if}
                <div>
                  <h4 class="font-medium text-neutral-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400">
                    {resource.title}
                  </h4>
                  <div class="text-xs text-neutral-500 dark:text-neutral-400 capitalize">
                    {resource.type}
                  </div>
                </div>
              </div>
              <svg class="w-5 h-5 text-neutral-400 group-hover:text-emerald-600 dark:group-hover:text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          {/each}
        </div>
      </div>
    {/if}

    <!-- Submission Guidelines -->
    {#if challenge.submission}
      <div id="submit">
        <div class="flex items-center gap-3 mb-4">
          <div class="w-10 h-10 rounded-xl bg-rose-100 dark:bg-rose-900/30 flex items-center justify-center text-rose-600 dark:text-rose-400">
            <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
            </svg>
          </div>
          <h2 class="text-2xl font-bold text-neutral-900 dark:text-white">Submission Guidelines</h2>
        </div>
        
        <div class="bg-gradient-to-r from-rose-50 to-pink-50 dark:from-rose-950/20 dark:to-pink-950/20 rounded-2xl border-2 border-rose-200 dark:border-rose-800 p-6">
          <div class="mb-6">
            <div class="text-sm text-rose-600 dark:text-rose-400 mb-2">Submission Type</div>
            <div class="flex items-center gap-2">
              {#if challenge.submission.type === 'code'}
                <span class="px-4 py-2 rounded-lg bg-rose-100 dark:bg-rose-900/30 text-rose-700 dark:text-rose-300 border border-rose-200 dark:border-rose-800">
                  Code Submission
                </span>
              {:else if challenge.submission.type === 'design'}
                <span class="px-4 py-2 rounded-lg bg-pink-100 dark:bg-pink-900/30 text-pink-700 dark:text-pink-300 border border-pink-200 dark:border-pink-800">
                  Design Submission
                </span>
              {:else}
                <span class="px-4 py-2 rounded-lg bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-800">
                  Documentation Submission
                </span>
              {/if}
            </div>
          </div>

          <div class="mb-6">
            <div class="text-sm text-rose-600 dark:text-rose-400 mb-2">Instructions</div>
            <p class="text-neutral-700 dark:text-neutral-300">
              {challenge.submission.instructions}
            </p>
          </div>

          {#if challenge.submission.checklist && challenge.submission.checklist.length > 0}
            <div>
              <div class="text-sm text-rose-600 dark:text-rose-400 mb-3">Checklist</div>
              <ul class="space-y-2">
                {#each challenge.submission.checklist as item, i}
                  <li class="flex items-start gap-3 p-3 rounded-xl bg-white/50 dark:bg-neutral-900/50">
                    <div class="w-6 h-6 rounded-full bg-rose-100 dark:bg-rose-900/30 flex items-center justify-center text-rose-600 dark:text-rose-400 text-sm font-bold">
                      {i + 1}
                    </div>
                    <span class="text-neutral-700 dark:text-neutral-300">{item}</span>
                  </li>
                {/each}
              </ul>
            </div>
          {/if}
        </div>
      </div>
    {/if}
  </div>
</div>