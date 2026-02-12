<script lang="ts">
	import { onMount } from 'svelte';
	import { scale, fade } from 'svelte/transition';
	import { Trophy } from 'lucide-svelte';
	
	export const memberGradient = 'from-blue-500 via-indigo-500 to-purple-500';
	export let completedDate: string | undefined = undefined;
	export let style: 'diagonal' | 'corner' | 'stamp' | 'minimal' = 'diagonal';
	
	let mounted = false;
	
	onMount(() => {
		mounted = true;
	});
	
	$: formattedDate = completedDate 
		? new Date(completedDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
		: '';
</script>

{#if mounted}
	<!-- Diagonal Stamp Watermark -->
	{#if style === 'diagonal'}
		<div class="absolute inset-0 pointer-events-none z-10 overflow-hidden flex items-center justify-center">
			<div class="transform rotate-[-35deg] scale-150 opacity-[0.07] dark:opacity-[0.04]" transition:scale={{ duration: 800, delay: 200 }}>
				<div class="text-[10rem] md:text-[14rem] lg:text-[18rem] font-black text-green-600 dark:text-green-400 tracking-wider select-none whitespace-nowrap">
					COMPLETED
				</div>
			</div>
			
			<div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rotate-[-35deg]" transition:scale={{ duration: 600, delay: 400 }}>
				<div class="border-[12px] border-green-500/20 dark:border-green-400/10 rounded-[3rem] px-24 md:px-32 lg:px-48 py-12 md:py-16 lg:py-24">
					<Trophy class="w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 text-green-500/20 dark:text-green-400/10" />
				</div>
			</div>
		</div>
	{/if}

	<!-- Corner Ribbon Badge -->
	{#if style === 'corner'}
		<div class="absolute top-0 right-0 z-10 overflow-hidden" transition:scale={{ duration: 600, start: 0.8 }}>
			<div class="relative w-40 h-40 md:w-56 md:h-56">
				<div class="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-green-500 to-emerald-600 transform rotate-45 translate-x-20 md:translate-x-28 -translate-y-20 md:-translate-y-28 shadow-2xl">
					<div class="absolute bottom-5 md:bottom-7 left-1/2 transform -translate-x-1/2 -rotate-45 text-white font-black text-base md:text-lg whitespace-nowrap">
						COMPLETED
					</div>
				</div>
			</div>
		</div>
		
		<div class="absolute top-3 right-3 md:top-4 md:right-4 z-20" transition:scale={{ duration: 400, delay: 300 }}>
			<div class="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-3 py-1.5 md:px-4 md:py-2 rounded-full font-bold text-xs md:text-sm shadow-xl flex items-center gap-1.5 md:gap-2">
				<Trophy class="w-3 h-3 md:w-4 md:h-4" />
				<span>Done</span>
			</div>
		</div>
	{/if}

	<!-- Official Stamp Style -->
	{#if style === 'stamp'}
		<div class="absolute top-8 md:top-16 right-6 md:right-10 z-10 transform rotate-12" transition:scale={{ duration: 600, start: 0.3 }}>
			<div class="relative">
				<div class="absolute inset-0 bg-green-600 blur-xl opacity-50 rounded-full animate-pulse"></div>
				
				<div class="relative border-4 md:border-[6px] border-green-600 dark:border-green-500 rounded-full p-4 md:p-6 bg-white/95 dark:bg-neutral-900/95 shadow-2xl">
					<div class="text-center">
						<Trophy class="w-10 h-10 md:w-14 md:h-14 text-green-600 dark:text-green-500 mx-auto mb-1.5 md:mb-2" />
						<div class="text-xl md:text-2xl font-black text-green-600 dark:text-green-500">COMPLETED</div>
						{#if completedDate}
							<div class="text-[10px] md:text-xs font-bold text-green-700 dark:text-green-400 mt-0.5 md:mt-1">
								{formattedDate}
							</div>
						{/if}
					</div>
				</div>
			</div>
		</div>
	{/if}

	<!-- Minimal Pattern Background -->
	{#if style === 'minimal'}
		<div class="absolute inset-0 pointer-events-none z-10 overflow-hidden opacity-[0.03] dark:opacity-[0.015]" transition:fade={{ duration: 800 }}>
			<div class="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-6 md:gap-8 p-6 md:p-8 transform rotate-12">
				{#each Array(64) as _}
					<Trophy class="w-10 h-10 md:w-14 md:h-14 text-green-600" />
				{/each}
			</div>
		</div>
		
		<!-- Small corner badge for minimal style -->
		<div class="absolute top-3 right-3 z-20" transition:scale={{ duration: 400 }}>
			<div class="bg-green-500 p-1.5 md:p-2 rounded-full shadow-lg">
				<Trophy class="w-3 h-3 md:w-4 md:h-4 text-white" />
			</div>
		</div>
	{/if}
{/if}