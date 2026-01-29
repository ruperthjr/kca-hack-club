export interface Challenge {
  slug: string;
  title: string;
  description: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  duration: string;
  estimatedHours: number;
  prerequisites: string[];
  skills: string[];
  tags: string[];
  category: 'daily' | 'weekly' | 'monthly';
  recommendedFor: string[];
  teamMembers: string[];
  objectives: string[];
  requirements: string[];
  bonusPoints?: string[];
  resources?: Array<{
    title: string;
    url: string;
    type: 'article' | 'video' | 'documentation';
  }>;
  submission?: {
    type: 'code' | 'design' | 'documentation';
    instructions: string;
    checklist: string[];
  };
  createdAt: Date;
  updatedAt: Date;
}

export interface ChallengeCategory {
  name: string;
  icon: string;
  description: string;
  count: number;
  gradient: string;
  borderColor: string;
}

export interface TeamMember {
  id: string;
  name: string;
  course: string;
  skillLevel: 'beginner' | 'intermediate' | 'advanced' | 'expert';
  focusAreas: string[];
  recommendedChallenges: string[];
}