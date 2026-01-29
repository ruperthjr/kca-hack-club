<script lang="ts">
  export let name: string;
  export let course: string;
  export let skillLevel: 'beginner' | 'intermediate' | 'advanced' | 'expert';
  export let focusAreas: string[];
  export let challengeCount: number;
  export let color: string;
  
  const colorClasses = {
    blue: {
      gradient: 'from-blue-500 to-cyan-500',
      bg: 'bg-blue-50 dark:bg-blue-950/20',
      border: 'border-blue-200 dark:border-blue-800',
      text: 'text-blue-600 dark:text-blue-400'
    },
    purple: {
      gradient: 'from-purple-500 to-pink-500',
      bg: 'bg-purple-50 dark:bg-purple-950/20',
      border: 'border-purple-200 dark:border-purple-800',
      text: 'text-purple-600 dark:text-purple-400'
    },
    green: {
      gradient: 'from-green-500 to-emerald-500',
      bg: 'bg-green-50 dark:bg-green-950/20',
      border: 'border-green-200 dark:border-green-800',
      text: 'text-green-600 dark:text-green-400'
    },
    yellow: {
      gradient: 'from-yellow-500 to-amber-500',
      bg: 'bg-yellow-50 dark:bg-yellow-950/20',
      border: 'border-yellow-200 dark:border-yellow-800',
      text: 'text-yellow-600 dark:text-yellow-400'
    },
    pink: {
      gradient: 'from-pink-500 to-rose-500',
      bg: 'bg-pink-50 dark:bg-pink-950/20',
      border: 'border-pink-200 dark:border-pink-800',
      text: 'text-pink-600 dark:text-pink-400'
    }
  };

  const config = colorClasses[color as keyof typeof colorClasses] || colorClasses.blue;
  
  const skillLevelConfig = {
    beginner: {
      icon: '🟢',
      label: 'Getting Started',
      description: 'Perfect for fundamentals'
    },
    intermediate: {
      icon: '🟡',
      label: 'Getting Comfortable',
      description: 'Building real projects'
    },
    advanced: {
      icon: '🔴',
      label: 'Pretty Confident',
      description: 'Mastering concepts'
    },
    expert: {
      icon: '🟣',
      label: 'Advanced',
      description: 'Leading complex projects'
    }
  };
  
  const skillConfig = skillLevelConfig[skillLevel] || skillLevelConfig.beginner;
  
  // Generate avatar initials
  const initials = name.split(' ').map(n => n[0]).join('').toUpperCase();
</script>

<div class="group relative h-full">
  <!-- Background Glow -->
  <div class="absolute -inset-1 bg-gradient-to-r {config.gradient} rounded-2xl opacity-0 group-hover:opacity-10 blur-xl transition-all duration-500 group-hover:duration-300"></div>
  
  <!-- Main Card -->
  <div class="relative h-full bg-white dark:bg-neutral-900 rounded-2xl border-2 {config.border} overflow-hidden transition-all duration-300 group-hover:scale-[1.02] group-hover:shadow-xl">
    <!-- Header with Avatar -->
    <div class="relative h-40 overflow-hidden">
      <!-- Gradient Background -->
      <div class="absolute inset-0 bg-gradient-to-br {config.gradient}">
        <div class="absolute inset-0 opacity-20 bg-grid-white/20"></div>
      </div>
      
      <!-- Avatar -->
      <div class="absolute bottom-0 left-6 transform translate-y-1/2">
        <div class="relative">
          <!-- Glow Effect -->
          <div class="absolute inset-0 {config.bg} rounded-full blur-lg"></div>
          <!-- Avatar Circle -->
          <div class="relative w-20 h-20 rounded-full {config.bg} border-4 border-white dark:border-neutral-900 flex items-center justify-center text-2xl font-bold text-white shadow-xl">
            <div class="bg-gradient-to-r {config.gradient} bg-clip-text text-transparent">
              {initials}
            </div>
          </div>
        </div>
      </div>
      
      <!-- Skill Level Badge -->
      <div class="absolute top-4 right-4">
        <div class="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
          <span class="text-lg">{skillConfig.icon}</span>
          <span class="text-sm font-medium text-white">{skillConfig.label}</span>
        </div>
      </div>
      
      <!-- Background Pattern -->
      <div class="absolute inset-0 opacity-10">
        <div class="absolute inset-0" style="background-image: radial-gradient(circle at 2px 2px, rgba(255,255,255,0.3) 1px, transparent 0); background-size: 30px 30px;"></div>
      </div>
    </div>
    
    <!-- Content -->
    <div class="pt-12 pb-6 px-6">
      <!-- Name and Course -->
      <div class="mb-4">
        <h3 class="font-bold text-xl text-neutral-900 dark:text-white mb-1">
          {name}
        </h3>
        <div class="flex items-center gap-2">
          <span class="text-sm font-medium px-2 py-1 rounded-md {config.bg} {config.text} border {config.border}">
            {course}
          </span>
          <span class="text-sm text-neutral-500 dark:text-neutral-400">
            • {challengeCount} challenges
          </span>
        </div>
      </div>
      
      <!-- Skill Description -->
      <p class="text-sm text-neutral-600 dark:text-neutral-400 mb-4">
        {skillConfig.description}
      </p>
      
      <!-- Focus Areas -->
      <div class="mb-6">
        <h4 class="text-xs font-semibold text-neutral-500 dark:text-neutral-400 uppercase tracking-wider mb-2">
          Focus Areas
        </h4>
        <div class="flex flex-wrap gap-2">
          {#each focusAreas as area}
            <span class="text-xs px-2 py-1 rounded-md {config.bg} {config.text} border {config.border}">
              {area}
            </span>
          {/each}
        </div>
      </div>
      
      <!-- Challenge Progress -->
      <div class="space-y-3">
        <div class="flex items-center justify-between text-sm">
          <span class="text-neutral-700 dark:text-neutral-300 font-medium">
            Assigned Challenges
          </span>
          <span class="font-bold {config.text}">
            {challengeCount}
          </span>
        </div>
        
        <!-- Progress Bar -->
        <div class="relative">
          <div class="h-2 bg-neutral-200 dark:bg-neutral-800 rounded-full overflow-hidden">
            <div 
              class="h-full bg-gradient-to-r {config.gradient} rounded-full transition-all duration-1000"
              style="width: {Math.min((challengeCount / 10) * 100, 100)}%"
            ></div>
          </div>
          <div class="flex justify-between text-xs text-neutral-500 dark:text-neutral-400 mt-1">
            <span>0</span>
            <span>10+</span>
          </div>
        </div>
      </div>
      
      <!-- View Challenges Link -->
      <div class="mt-6 pt-4 border-t border-neutral-200 dark:border-neutral-800">
        <a 
          href={`/challenges?filter=${name}`}
          class="inline-flex items-center gap-2 text-sm font-medium {config.text} hover:underline"
        >
          <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
          View {name}'s challenges
        </a>
      </div>
    </div>
    
    <!-- Bottom Accent -->
    <div class="h-1 bg-gradient-to-r {config.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
  </div>
</div>

<style>
  .bg-grid-white\/20 {
    background-image: linear-gradient(rgba(255, 255, 255, 0.2) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255, 255, 255, 0.2) 1px, transparent 1px);
    background-size: 30px 30px;
  }
</style>