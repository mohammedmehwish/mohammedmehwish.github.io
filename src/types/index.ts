export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  techStack: string[];
  githubUrl: string;
  liveDemoUrl?: string;
  category: 'robotics' | 'embedded' | 'vision' | 'automation';
  featured: boolean;
  image: string;
  highlights?: string[];
}

export interface SkillCategory {
  title: string;
  skills: {
    name: string;
    level: number; // 0 to 100
    icon?: string;
    highlight?: boolean;
  }[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  description: string;
  achievements: string[];
  skills: string[];
}

export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialId?: string;
  skillsCovered: string[];
  pdfUrl?: string;
  image: string;
  description: string;
}

export interface Education {
  degree: string;
  major: string;
  institution: string;
  location: string;
  period: string;
  grade?: string;
  highlights: string[];
}

export interface GitHubUser {
  login: string;
  avatar_url: string;
  html_url: string;
  name: string;
  bio: string;
  location: string;
  public_repos: number;
  followers: number;
  following: number;
  created_at: string;
  blog?: string;
}

export interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  updated_at: string;
  topics?: string[];
  pushed_at?: string;
}

export interface GitHubStats {
  totalStars: number;
  totalForks: number;
  totalRepos: number;
  topLanguages: { name: string; percentage: number; color: string }[];
}
