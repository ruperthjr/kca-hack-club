<script lang="ts">
	interface DayData {
		date: string;
		count: number;
	}
	
	export let data: DayData[] = [];
	export let username: string | undefined = undefined;
	
	function getIntensity(count: number): string {
		if (count === 0) return 'bg-gray-100 dark:bg-gray-800';
		if (count < 3) return 'bg-green-200 dark:bg-green-900/50';
		if (count < 6) return 'bg-green-400 dark:bg-green-700';
		if (count < 9) return 'bg-green-600 dark:bg-green-500';
		return 'bg-green-800 dark:bg-green-300';
	}
	
	function getWeeks(inputData: DayData[]): DayData[][] {
		const weeks: DayData[][] = [];
		let currentWeek: DayData[] = [];
		
		inputData.forEach((day, index) => {
			currentWeek.push(day);
			if ((index + 1) % 7 === 0) {
				weeks.push([...currentWeek]);
				currentWeek = [];
			}
		});
		
		if (currentWeek.length > 0) weeks.push(currentWeek);
		return weeks;
	}
	
	let weeks: DayData[][] = [];
	$: weeks = getWeeks(data);
</script>

<div class="card">
	<div class="p-6">
		<div class="flex items-center justify-between mb-4">
			<h3 class="font-display font-bold text-lg">Activity Heatmap</h3>
			{#if username}
				<a
					href="https://github.com/{username}"
					target="_blank"
					rel="noopener noreferrer"
					class="text-sm text-primary-600 dark:text-primary-400 hover:underline"
				>
					View on GitHub
				</a>
			{/if}
		</div>
		
		<div class="overflow-x-auto">
			<div class="inline-flex flex-col space-y-1 min-w-max">
				{#each weeks as week}
					<div class="flex space-x-1">
						{#each week as day}
							<div
								class="w-3 h-3 rounded-sm {getIntensity(day.count)} hover:ring-2 hover:ring-primary-500 transition-all cursor-pointer"
								title="{day.date}: {day.count} contributions"
							></div>
						{/each}
					</div>
				{/each}
			</div>
		</div>
		
		<div class="flex items-center justify-end space-x-2 mt-4 text-xs text-gray-600 dark:text-gray-400">
			<span>Less</span>
			<div class="flex space-x-1">
				<div class="w-3 h-3 rounded-sm bg-gray-100 dark:bg-gray-800"></div>
				<div class="w-3 h-3 rounded-sm bg-green-200 dark:bg-green-900/50"></div>
				<div class="w-3 h-3 rounded-sm bg-green-400 dark:bg-green-700"></div>
				<div class="w-3 h-3 rounded-sm bg-green-600 dark:bg-green-500"></div>
				<div class="w-3 h-3 rounded-sm bg-green-800 dark:bg-green-300"></div>
			</div>
			<span>More</span>
		</div>
	</div>
</div>