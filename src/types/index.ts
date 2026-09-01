export interface Project {
  id: string;
  order: string;
  title: string;
  subtitle: string;
  badge?: string;
  description: string;
  longDescription?: string;
  tags: string[];
  features: string[];
  metrics?: {
    label: string;
    value: string;
  }[];
  githubUrl?: string;
  liveUrl?: string;
  apiUrl?: string;
  featured?: boolean;
  architectureDetails?: {
    summary: string;
    servicesCount?: number;
    kafkaTopics?: number;
    databaseSchemas?: number;
    patterns: {
      name: string;
      description: string;
    }[];
  };
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  type: string;
  location?: string;
  responsibilities: string[];
  techStack: string[];
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
  grade: string;
  gradeLabel: string;
  coursework: string[];
}

export interface Certification {
  title: string;
  issuer: string;
  year?: string;
  credentialUrl?: string;
  topics?: string[];
}

export interface SkillCategory {
  title: string;
  iconName: string;
  skills: string[];
}

export interface StatMetric {
  value: string;
  label: string;
  context: string;
}
