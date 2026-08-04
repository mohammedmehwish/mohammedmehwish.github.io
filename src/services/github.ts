import { GitHubUser, GitHubRepo, GitHubStats } from '../types';
import { PERSONAL_INFO } from '../data/portfolioData';

const CACHE_EXPIRATION_MS = 1000 * 60 * 30; // 30 minutes cache

// Mock fallback profile if GitHub API rate limit is exceeded
const FALLBACK_PROFILE: GitHubUser = {
  login: PERSONAL_INFO.githubUsername,
  name: PERSONAL_INFO.name,
  avatar_url: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop",
  html_url: PERSONAL_INFO.github,
  bio: "Robotics & Mechatronics Engineer | Embedded Systems | Computer Vision | Automation",
  location: PERSONAL_INFO.location,
  public_repos: 12,
  followers: 45,
  following: 28,
  created_at: "2022-01-15T00:00:00Z",
};

const FALLBACK_REPOS: GitHubRepo[] = [
  {
    id: 101,
    name: "helmet-detection-deep-learning",
    description: "Real-time helmet detection system for road safety using YOLO and OpenCV.",
    html_url: `https://github.com/${PERSONAL_INFO.githubUsername}/helmet-detection-deep-learning`,
    homepage: null,
    stargazers_count: 18,
    forks_count: 7,
    language: "Python",
    updated_at: "2024-11-10T14:30:00Z",
    topics: ["computer-vision", "yolo", "opencv", "deep-learning", "python"]
  },
  {
    id: 102,
    name: "fire-rescue-autonomous-robot",
    description: "Autonomous robot capable of detecting fire and assisting rescue operations using embedded sensors.",
    html_url: `https://github.com/${PERSONAL_INFO.githubUsername}/fire-rescue-autonomous-robot`,
    homepage: null,
    stargazers_count: 24,
    forks_count: 9,
    language: "C++",
    updated_at: "2024-10-25T11:15:00Z",
    topics: ["robotics", "embedded-c", "arduino", "esp32", "sensors"]
  },
  {
    id: 103,
    name: "fire-surveillance-drone-system",
    description: "Aerial surveillance drone system with multi-sensor telemetry integration and real-time monitoring.",
    html_url: `https://github.com/${PERSONAL_INFO.githubUsername}/fire-surveillance-drone-system`,
    homepage: null,
    stargazers_count: 15,
    forks_count: 4,
    language: "Python",
    updated_at: "2024-09-18T16:00:00Z",
    topics: ["drone", "esp32", "telemetry", "sensors", "opencv"]
  },
  {
    id: 104,
    name: "industrial-plc-scada-automation",
    description: "SCADA HMI dashboard and PLC ladder logic programs for industrial water treatment and motor control.",
    html_url: `https://github.com/${PERSONAL_INFO.githubUsername}/industrial-plc-scada-automation`,
    homepage: null,
    stargazers_count: 12,
    forks_count: 3,
    language: "Structured Text",
    updated_at: "2024-08-12T09:45:00Z",
    topics: ["plc", "scada", "hmi", "vfd", "automation"]
  },
  {
    id: 105,
    name: "esp32-embedded-sensor-hub",
    description: "Multi-sensor telemetry node using ESP32 with Wi-Fi/Bluetooth web interface and MQTT data streaming.",
    html_url: `https://github.com/${PERSONAL_INFO.githubUsername}/esp32-embedded-sensor-hub`,
    homepage: null,
    stargazers_count: 19,
    forks_count: 6,
    language: "C++",
    updated_at: "2024-07-29T18:20:00Z",
    topics: ["esp32", "mqtt", "embedded-systems", "sensors", "cplusplus"]
  },
  {
    id: 106,
    name: "solidworks-robot-arm-kinematics",
    description: "SolidWorks 3D CAD design models and forward/inverse kinematics scripts for 6-DOF robotic manipulator.",
    html_url: `https://github.com/${PERSONAL_INFO.githubUsername}/solidworks-robot-arm-kinematics`,
    homepage: null,
    stargazers_count: 14,
    forks_count: 5,
    language: "Python",
    updated_at: "2024-06-04T12:00:00Z",
    topics: ["solidworks", "robotics", "kinematics", "cad", "python"]
  }
];

export async function fetchGitHubProfile(username: string = PERSONAL_INFO.githubUsername): Promise<GitHubUser> {
  const cacheKey = `github_profile_${username}`;
  const cached = localStorage.getItem(cacheKey);

  if (cached) {
    try {
      const { data, timestamp } = JSON.parse(cached);
      if (Date.now() - timestamp < CACHE_EXPIRATION_MS) {
        return data;
      }
    } catch {
      // cache read failed, fall through to fetch
    }
  }

  try {
    const res = await fetch(`https://api.github.com/users/${username}`, {
      headers: {
        'Accept': 'application/vnd.github.v3+json'
      }
    });

    if (!res.ok) {
      throw new Error(`GitHub API profile returned ${res.status}`);
    }

    const data: GitHubUser = await res.json();
    localStorage.setItem(cacheKey, JSON.stringify({ data, timestamp: Date.now() }));
    return data;
  } catch (err) {
    console.warn("GitHub API profile fetch failed, using fallback profile:", err);
    return FALLBACK_PROFILE;
  }
}

export async function fetchGitHubRepos(username: string = PERSONAL_INFO.githubUsername): Promise<GitHubRepo[]> {
  const cacheKey = `github_repos_${username}`;
  const cached = localStorage.getItem(cacheKey);

  if (cached) {
    try {
      const { data, timestamp } = JSON.parse(cached);
      if (Date.now() - timestamp < CACHE_EXPIRATION_MS) {
        return data;
      }
    } catch {
      // cache read failed
    }
  }

  try {
    const res = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=100`, {
      headers: {
        'Accept': 'application/vnd.github.v3+json'
      }
    });

    if (!res.ok) {
      throw new Error(`GitHub API repos returned ${res.status}`);
    }

    const repos: GitHubRepo[] = await res.json();
    
    // Filter out forks if desired, or sort by stars
    const cleanedRepos = repos.map(repo => ({
      id: repo.id,
      name: repo.name,
      description: repo.description || 'Robotics & Mechatronics project repository.',
      html_url: repo.html_url,
      homepage: repo.homepage,
      stargazers_count: repo.stargazers_count || 0,
      forks_count: repo.forks_count || 0,
      language: repo.language || 'Embedded C',
      updated_at: repo.updated_at,
      topics: repo.topics && repo.topics.length > 0 ? repo.topics : ['robotics', 'engineering']
    }));

    const finalRepos = cleanedRepos.length > 0 ? cleanedRepos : FALLBACK_REPOS;

    localStorage.setItem(cacheKey, JSON.stringify({ data: finalRepos, timestamp: Date.now() }));
    return finalRepos;
  } catch (err) {
    console.warn("GitHub API repos fetch failed, using fallback repos:", err);
    return FALLBACK_REPOS;
  }
}

export function computeGitHubStats(repos: GitHubRepo[]): GitHubStats {
  let totalStars = 0;
  let totalForks = 0;
  const langCount: Record<string, number> = {};

  repos.forEach(repo => {
    totalStars += repo.stargazers_count;
    totalForks += repo.forks_count;
    if (repo.language) {
      langCount[repo.language] = (langCount[repo.language] || 0) + 1;
    }
  });

  const colorMap: Record<string, string> = {
    'Python': '#3572A5',
    'C++': '#f34b7d',
    'C': '#555555',
    'Embedded C': '#00f0ff',
    'TypeScript': '#3178c6',
    'JavaScript': '#f1e05a',
    'Structured Text': '#0070f3',
    'HTML': '#e34c26'
  };

  const totalLangRepos = Object.values(langCount).reduce((a, b) => a + b, 0) || 1;

  const topLanguages = Object.entries(langCount)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5)
    .map(([name, count]) => ({
      name,
      percentage: Math.round((count / totalLangRepos) * 100),
      color: colorMap[name] || '#38bdf8'
    }));

  return {
    totalStars,
    totalForks,
    totalRepos: repos.length,
    topLanguages
  };
}
