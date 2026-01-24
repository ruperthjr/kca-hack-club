import type { TeamMember } from '$utils/blog';

export const load = async () => {
	const team: TeamMember[] = [
		{
			slug: 'ruperth',
			name: 'Ruperth',
			role: 'Full-Stack Developer',
			year: 1,
			github: 'ruperth',
			bio: 'Passionate about building scalable web and mobile applications',
			joinedDate: '2026-01-15',
			skills: [
				'Mobile & Flutter',
				'Flutter',
				'Dart',
				'Riverpod',
				'Cross-platform Development',
				'Backend & Frameworks',
				'FastAPI',
				'Flask',
				'Django',
				'Ruby on Rails',
				'RESTful APIs',
				'GraphQL',
				'AI & ML',
				'LLM Fine-tuning (GPT, BERT, Gemma)',
				'RAG Workflows',
				'Vector Stores',
				'TensorFlow',
				'Scikit-learn',
				'Web Development',
				'React',
				'Next.js',
				'SvelteKit',
				'Tailwind CSS',
				'Redux',
				'Express',
				'JavaScript',
				'TypeScript',
				'Data Analysis',
				'Pandas',
				'NumPy',
				'Matplotlib',
				'Data Visualization',
				'Statistical Analysis',
				'DevOps & Tools',
				'GitHub Actions',
				'Docker',
				'Git',
				'CI/CD Pipelines',
				'Vercel',
				'Railway',
				'Programming Languages',
				'JavaScript',
				'Python',
				'Dart',
				'TypeScript',
				'Ruby',
				'Soft Skills',
				'Clear Communication',
				'Creative Problem-Solving',
				'Team Collaboration',
				'Technical Writing'
			],
			content: ''
		},
		{
			slug: 'maryphin',
			name: 'Maryphin',
			role: '',
			year: 1,
			github: '',
			bio: '',
			joinedDate: '2026-01-16',
			skills: [''],
			content: ''
		},
		{
			slug: 'daniel',
			name: 'Daniel',
			role: '',
			year: 1,
			github: '',
			bio: '',
			joinedDate: '2026-01-16',
			skills: [''],
			content: ''
		},
		{
			slug: 'pauline',
			name: 'Pauline',
			role: '',
			year: 1,
			github: '',
			bio: '',
			joinedDate: '2026-01-14',
			skills: [''],
			content: ''
		},
		{
			slug: 'javan',
			name: 'Javan',
			role: '',
			year: 1,
			github: '',
			bio: '',
			joinedDate: '2026-01-16',
			skills: [''],
			content: ''
		},
		{
			slug: 'jasmine',
			name: 'Jasmine',
			role: '',
			year: 1,
			github: '',
			bio: '',
			joinedDate: '2026-01-16',
			skills: [''],
			content: ''
		}
	];

	return {
		team,
		meta: {
			title: 'Team - KCA Hack Club',
			description: 'Meet the amazing people behind KCA Hack Club'
		}
	};
};