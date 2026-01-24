<script lang="ts">
	import { formatDate } from '$utils/date';
	import type { PageData } from './$types';

	export let data: PageData & { challenges: any[]; challenge: any };
</script>

<div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
	<div class="mb-8">
		<a href="/challenges/monthly" class="text-primary-600 dark:text-primary-400 hover:underline mb-4 inline-block">
			← Back to Monthly Challenges
		</a>
		
		<div class="card">
			<div class="p-8">
				<div class="flex items-center space-x-2 mb-4">
					<span class="badge badge-primary">{data.challenge.month} {data.challenge.year}</span>
					<span class="badge badge-danger">Advanced</span>
					<span class="badge badge-secondary">{data.challenge.points} pts</span>
				</div>
				
				<h1 class="font-display font-bold text-3xl md:text-4xl mb-4">
					{data.challenge.title}
				</h1>
				
				<div class="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-400 mb-6">
					<span> {formatDate(data.challenge.startDate)} - {formatDate(data.challenge.endDate)}</span>
					<span> {data.challenge.category}</span>
				</div>
				
				<div class="prose dark:prose-invert max-w-none">
					{@html data.challenge.content.replace(/\n/g, '<br>')}
				</div>
				
				<div class="mt-8 flex gap-4">
					<button class="btn btn-primary">
						Start Challenge
					</button>
					<button class="btn btn-secondary">
						View Submissions
					</button>
					<button class="btn btn-outline">
						Discussion Forum
					</button>
				</div>
			</div>
		</div>
	</div>
</div>