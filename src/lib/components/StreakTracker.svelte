<script lang="ts">
	interface Props {
		currentStreak: number;
		longestStreak: number;
		totalDays: number;
	}
	
	let { currentStreak, longestStreak, totalDays }: Props = $props();
	
	function getStreakMessage(streak: number): string {
		if (streak === 0) return "Start your streak today!";
		if (streak < 7) return "Keep it up!";
		if (streak < 30) return "You're on fire!";
		if (streak < 100) return "Incredible streak!";
		return "Legendary!";
	}
</script>

<div class="card">
	<div class="p-6">
		<div class="flex items-center space-x-2 mb-4">
			<h3 class="font-display font-bold text-xl">Challenge Streak</h3>
		</div>
		
		<div class="grid grid-cols-3 gap-4">
			<div class="text-center">
				<div class="text-3xl font-bold text-primary-600 dark:text-primary-400">
					{currentStreak}
				</div>
				<div class="text-xs text-gray-600 dark:text-gray-400 mt-1">Current</div>
			</div>
			<div class="text-center">
				<div class="text-3xl font-bold text-secondary-600 dark:text-secondary-400">
					{longestStreak}
				</div>
				<div class="text-xs text-gray-600 dark:text-gray-400 mt-1">Longest</div>
			</div>
			<div class="text-center">
				<div class="text-3xl font-bold text-accent-600 dark:text-accent-400">
					{totalDays}
				</div>
				<div class="text-xs text-gray-600 dark:text-gray-400 mt-1">Total</div>
			</div>
		</div>
		
		<div class="mt-4 p-3 rounded-lg bg-primary-50 dark:bg-primary-950/30">
			<p class="text-sm text-primary-800 dark:text-primary-200 text-center">
				{getStreakMessage(currentStreak)}
			</p>
		</div>
	</div>
</div>