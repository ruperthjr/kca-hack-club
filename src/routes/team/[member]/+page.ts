import type { TeamMember } from '$utils/blog';

export const load = async () => {
	const member: TeamMember = {
		slug: 'ruperth',
		name: 'Ruperth',
		role: 'Full-Stack Developer',
		year: 1,
		github: 'ruperthjr',
		linkedin: 'ruperth-nyagesoa',
		email: 'iamnyagesoa@gmail.com',
		avatar: '',
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
		content: `# About Ruperth

## Background
First-year Software Development student at KCA University, passionate about building web and mobile solutions that make a difference.

## Role at Hack Club
As a Full-Stack Developer, I focus on:
- Developing cross-platform mobile apps with Flutter and Dart
- Building scalable backend APIs using FastAPI, Django, and Ruby on Rails
- Integrating AI/ML workflows, including LLM fine-tuning and RAG pipelines
- Leading workshops on modern web and mobile development


## Tech Stack
- **Frontend**: Flutter, React, SvelteKit, Next.js, Tailwind CSS
- **Backend**: FastAPI, Django, Flask, Ruby on Rails, Express
- **AI/ML**: TensorFlow, Scikit-learn, LLM fine-tuning, RAG, Vector Stores
- **DevOps**: Docker, GitHub Actions, Vercel, Railway
- **Data**: Pandas, NumPy, Matplotlib

## Get in Touch
Let's collaborate on innovative projects or chat about tech! Reach out via GitHub or email.`
	};

	return {
		member,
		meta: {
			title: `${member.name} - KCA Hack Club Team`,
			description: member.bio
		}
	};
};