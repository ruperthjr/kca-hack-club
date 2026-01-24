<script lang="ts">
	import { formatDate } from '$utils/date';
	import type { PageData } from './$types';

	export let data: PageData & { hackathon: any };
</script>

<div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
	<div class="mb-8">
		<a href="/hackathons" class="text-primary-600 dark:text-primary-400 hover:underline mb-4 inline-block">
			← Back to Hackathons
		</a>
		
		<div class="card">
			<div class="p-8">
				<span class="badge badge-primary mb-4">Upcoming</span>
				
				<h1 class="font-display font-bold text-3xl md:text-4xl mb-4">
					{data.hackathon.title}
				</h1>
				
				<p class="text-lg text-gray-600 dark:text-gray-400 mb-6">
					{data.hackathon.description}
				</p>
				
				<div class="grid md:grid-cols-3 gap-4 mb-8">
					<div class="card bg-gray-50 dark:bg-gray-900">
						<div class="p-4">
							<div class="text-sm text-gray-600 dark:text-gray-400 mb-1">Date</div>
							<div class="font-semibold">{formatDate(data.hackathon.date)} - {formatDate(data.hackathon.endDate)}</div>
						</div>
					</div>
					<div class="card bg-gray-50 dark:bg-gray-900">
						<div class="p-4">
							<div class="text-sm text-gray-600 dark:text-gray-400 mb-1">Location</div>
							<div class="font-semibold">{data.hackathon.location}</div>
						</div>
					</div>
					<div class="card bg-gray-50 dark:bg-gray-900">
						<div class="p-4">
							<div class="text-sm text-gray-600 dark:text-gray-400 mb-1">Prize Pool</div>
							<div class="font-semibold">{data.hackathon.prize}</div>
						</div>
					</div>
				</div>
				
				<div class="prose dark:prose-invert max-w-none mb-8">
					{@html data.hackathon.content.replace(/\n/g, '<br>')}
				</div>
				
				<div class="flex gap-4">
					<button class="btn btn-primary">
						Register Now
					</button>
					<button class="btn btn-secondary">
						View Schedule
					</button>
				</div>
			</div>
		</div>
	</div>
</div>