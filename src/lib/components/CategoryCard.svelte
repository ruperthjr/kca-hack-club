<script lang="ts">
  export let category: string;
  export let title: string;
  export let description: string;
  export let count: number;
  export let icon: string;
  export let color: string;
  export let link: string;

  const colorClasses = {
    blue: {
      gradient: 'from-blue-500 to-cyan-500',
      hover: 'hover:shadow-blue-500/20',
      bg: 'bg-blue-50 dark:bg-blue-950/20',
      border: 'border-blue-200 dark:border-blue-800',
      text: 'text-blue-600 dark:text-blue-400'
    },
    purple: {
      gradient: 'from-purple-500 to-pink-500',
      hover: 'hover:shadow-purple-500/20',
      bg: 'bg-purple-50 dark:bg-purple-950/20',
      border: 'border-purple-200 dark:border-purple-800',
      text: 'text-purple-600 dark:text-purple-400'
    },
    green: {
      gradient: 'from-green-500 to-emerald-500',
      hover: 'hover:shadow-green-500/20',
      bg: 'bg-green-50 dark:bg-green-950/20',
      border: 'border-green-200 dark:border-green-800',
      text: 'text-green-600 dark:text-green-400'
    },
    yellow: {
      gradient: 'from-yellow-500 to-amber-500',
      hover: 'hover:shadow-yellow-500/20',
      bg: 'bg-yellow-50 dark:bg-yellow-950/20',
      border: 'border-yellow-200 dark:border-yellow-800',
      text: 'text-yellow-600 dark:text-yellow-400'
    },
    red: {
      gradient: 'from-red-500 to-orange-500',
      hover: 'hover:shadow-red-500/20',
      bg: 'bg-red-50 dark:bg-red-950/20',
      border: 'border-red-200 dark:border-red-800',
      text: 'text-red-600 dark:text-red-400'
    }
  };

  const config = colorClasses[color as keyof typeof colorClasses] || colorClasses.blue;
</script>

<a
  href={link}
  class="group relative block h-full"
>
  <!-- Background Glow -->
  <div class="absolute -inset-1 bg-gradient-to-r {config.gradient} rounded-2xl opacity-0 group-hover:opacity-10 blur-xl transition-all duration-500 group-hover:duration-300"></div>
  
  <!-- Main Card -->
  <div class="relative h-full bg-white dark:bg-neutral-900 rounded-2xl border-2 {config.border} overflow-hidden transition-all duration-300 group-hover:scale-[1.02] group-hover:shadow-2xl {config.hover}">
    <!-- Header -->
    <div class="relative h-40 overflow-hidden">
      <!-- Gradient Background -->
      <div class="absolute inset-0 bg-gradient-to-r {config.gradient}">
        <div class="absolute inset-0 opacity-20 bg-grid-white/20"></div>
      </div>
      
      <!-- Icon and Count -->
      <div class="relative h-full flex flex-col items-center justify-center p-6">
        <div class="flex items-center gap-4">
          <div class="text-5xl drop-shadow-lg">
            {icon}
          </div>
          <div class="text-right">
            <div class="text-6xl font-bold text-white drop-shadow-lg">
              {count}
            </div>
            <div class="text-white/80 text-sm font-medium mt-1">
              Challenges
            </div>
          </div>
        </div>
      </div>
      
      <!-- Corner Decoration -->
      <div class="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-bl-full"></div>
    </div>
    
    <!-- Content -->
    <div class="p-6">
      <div class="mb-4">
        <h3 class="font-bold text-2xl text-neutral-900 dark:text-white mb-2 group-hover:{config.text} transition-colors duration-300">
          {title}
        </h3>
        <p class="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed">
          {description}
        </p>
      </div>
      
      <!-- Tags -->
      <div class="flex flex-wrap gap-2 mb-6">
        <span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-white dark:bg-neutral-800 border {config.border} {config.text}">
          #{category}
        </span>
        {#if category === 'daily'}
          <span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-50 dark:bg-blue-950/30 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-800">
            30 min - 2 hours
          </span>
        {:else if category === 'weekly'}
          <span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-purple-50 dark:bg-purple-950/30 text-purple-600 dark:text-purple-400 border border-purple-200 dark:border-purple-800">
            6-15 hours
          </span>
        {:else if category === 'monthly'}
          <span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-50 dark:bg-green-950/30 text-green-600 dark:text-green-400 border border-green-200 dark:border-green-800">
            40-60 hours
          </span>
        {/if}
      </div>
      
      <!-- CTA -->
      <div class="flex items-center justify-between">
        <span class="text-sm font-medium text-neutral-500 dark:text-neutral-500">
          Browse challenges →
        </span>
        <div class="w-8 h-8 rounded-full {config.bg} flex items-center justify-center group-hover:bg-gradient-to-r {config.gradient} transition-all duration-300">
          <svg class="w-4 h-4 text-neutral-400 group-hover:text-white transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </div>
    
    <!-- Bottom Accent -->
    <div class="h-1 bg-gradient-to-r {config.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
  </div>
</a>

<style>
  .bg-grid-white\/20 {
    background-image: linear-gradient(rgba(255, 255, 255, 0.2) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255, 255, 255, 0.2) 1px, transparent 1px);
    background-size: 30px 30px;
  }
</style>