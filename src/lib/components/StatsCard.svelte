<script lang="ts">
  export let title: string;
  export let value: number;
  export let icon: string;
  export let color: string;
  export let description: string;
  export let locked: number = 0;
  
  let counter = 0;
  let duration = 1000;
  let startTime: number;
  let animationFrame: number;
  
  const colorClasses = {
    green: {
      gradient: 'from-green-400 to-emerald-500',
      bg: 'bg-green-100 dark:bg-green-900/30',
      border: 'border-green-200 dark:border-green-800',
      text: 'text-green-700 dark:text-green-300',
      iconBg: 'bg-green-500'
    },
    yellow: {
      gradient: 'from-yellow-400 to-amber-500',
      bg: 'bg-yellow-100 dark:bg-yellow-900/30',
      border: 'border-yellow-200 dark:border-yellow-800',
      text: 'text-yellow-700 dark:text-yellow-300',
      iconBg: 'bg-yellow-500'
    },
    red: {
      gradient: 'from-red-400 to-orange-500',
      bg: 'bg-red-100 dark:bg-red-900/30',
      border: 'border-red-200 dark:border-red-800',
      text: 'text-red-700 dark:text-red-300',
      iconBg: 'bg-red-500'
    },
    blue: {
      gradient: 'from-blue-400 to-cyan-500',
      bg: 'bg-blue-100 dark:bg-blue-900/30',
      border: 'border-blue-200 dark:border-blue-800',
      text: 'text-blue-700 dark:text-blue-300',
      iconBg: 'bg-blue-500'
    },
    purple: {
      gradient: 'from-purple-400 to-pink-500',
      bg: 'bg-purple-100 dark:bg-purple-900/30',
      border: 'border-purple-200 dark:border-purple-800',
      text: 'text-purple-700 dark:text-purple-300',
      iconBg: 'bg-purple-500'
    }
  };

  const config = colorClasses[color as keyof typeof colorClasses] || colorClasses.blue;
  
  import { onMount } from 'svelte';
  
  onMount(() => {
    startTime = performance.now();
    
    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeOut = 1 - Math.pow(1 - progress, 3);
      counter = Math.floor(easeOut * value);
      
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        counter = value;
      }
    };
    
    animationFrame = requestAnimationFrame(animate);
    
    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  });
</script>

<div class="group relative h-full">
  <div class="absolute -inset-1 bg-gradient-to-r {config.gradient} rounded-2xl opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-500"></div>
  
  <div class="relative h-full bg-white dark:bg-neutral-900 rounded-2xl border-2 {config.border} p-6 transition-all duration-300 group-hover:scale-[1.02] group-hover:shadow-xl overflow-hidden">
    <div class="absolute inset-0 opacity-[0.02]">
      <div class="absolute inset-0" style="background-image: radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0); background-size: 20px 20px; color: {color};"></div>
    </div>
    
    <div class="relative">
      <div class="flex items-start justify-between mb-6">
        <div>
          <h3 class="font-bold text-lg text-neutral-900 dark:text-white mb-2">
            {title}
          </h3>
          <p class="text-sm text-neutral-500 dark:text-neutral-400">
            {description}
          </p>
        </div>
        
        <div class="relative">
          <div class="absolute inset-0 {config.iconBg} rounded-full blur-lg opacity-30"></div>
          <div class="relative w-12 h-12 rounded-full {config.bg} border-2 {config.border} flex items-center justify-center text-2xl">
            {icon}
          </div>
        </div>
      </div>
      
      <div class="mb-4">
        <div class="flex items-baseline gap-2">
          <span class="font-bold text-5xl text-neutral-900 dark:text-white">
            {counter}
          </span>
          <span class="text-sm font-medium {config.text}">
            Available
          </span>
        </div>
        
        {#if locked > 0}
          <p class="text-sm text-neutral-500 dark:text-neutral-400 mt-2">
            🔒 {locked} locked, unlocking soon
          </p>
        {/if}
        
        <div class="mt-4">
          <div class="h-2 bg-neutral-200 dark:bg-neutral-800 rounded-full overflow-hidden">
            <div 
              class="h-full bg-gradient-to-r {config.gradient} rounded-full transition-all duration-1000 ease-out"
              style="width: {counter / (value + locked) * 100}%"
            ></div>
          </div>
          <div class="flex justify-between text-xs text-neutral-500 dark:text-neutral-400 mt-1">
            <span>0</span>
            <span>{value + locked} total</span>
          </div>
        </div>
      </div>
      
      <div class="flex items-center justify-between text-sm">
        <span class={config.text}>
          View all →
        </span>
        <div class="flex items-center gap-2">
          <div class="flex items-center gap-1">
            <div class="w-2 h-2 rounded-full bg-gradient-to-r {config.gradient}"></div>
            <span class="text-xs font-medium text-neutral-500 dark:text-neutral-400">
              {title}
            </span>
          </div>
        </div>
      </div>
    </div>
    
    <div class="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br {config.gradient} rounded-bl-full opacity-5"></div>
    <div class="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr {config.gradient} rounded-tr-full opacity-5"></div>
  </div>
</div>