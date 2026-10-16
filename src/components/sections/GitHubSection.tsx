import React, { useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import {
  Github,
  Star,
  GitFork,
  ExternalLink,
  Search,
  Loader2,
  BookOpen,
  Users,
  Code,
  Calendar,
} from 'lucide-react';
import { fetchGitHubProfile, fetchGitHubRepos, computeGitHubStats } from '../../services/github';
import { GitHubUser, GitHubRepo, GitHubStats } from '../../types';
import { PERSONAL_INFO } from '../../data/portfolioData';

export const GitHubSection: React.FC = () => {
  const [profile, setProfile] = useState<GitHubUser | null>(null);
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [stats, setStats] = useState<GitHubStats | null>(null);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState('all');
  const [sortBy, setSortBy] = useState<'stars' | 'updated' | 'name'>('stars');

  useEffect(() => {
    let isMounted = true;
    async function loadData() {
      try {
        setLoading(true);
        const [profileData, reposData] = await Promise.all([
          fetchGitHubProfile(PERSONAL_INFO.githubUsername),
          fetchGitHubRepos(PERSONAL_INFO.githubUsername),
        ]);

        if (isMounted) {
          setProfile(profileData);
          setRepos(reposData);
          setStats(computeGitHubStats(reposData));
        }
      } catch (err) {
        console.error('Failed to load GitHub activity', err);
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    }

    loadData();
    return () => {
      isMounted = false;
    };
  }, []);

  const languages = useMemo(() => {
    const set = new Set<string>();
    repos.forEach((r) => {
      if (r.language) set.add(r.language);
    });
    return Array.from(set).sort();
  }, [repos]);

  const filteredRepos = useMemo(() => {
    return repos
      .filter((repo) => {
        const matchesSearch =
          repo.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          (repo.description &&
            repo.description.toLowerCase().includes(searchQuery.toLowerCase()));
        const matchesLang =
          selectedLanguage === 'all' || repo.language === selectedLanguage;
        return matchesSearch && matchesLang;
      })
      .sort((a, b) => {
        if (sortBy === 'stars') return b.stargazers_count - a.stargazers_count;
        if (sortBy === 'updated') {
          return new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime();
        }
        if (sortBy === 'name') return a.name.localeCompare(b.name);
        return 0;
      });
  }, [repos, searchQuery, selectedLanguage, sortBy]);

  return (
    <section id="github" className="section-padding bg-slate-50 dark:bg-slate-900">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="section-label">Open Source & Code</p>
          <h2 className="section-title">GitHub Activity</h2>
          <p className="section-subtitle">
            Real-time repository metrics, top programming languages, and recent contributions powered by the GitHub API.
          </p>
        </div>

        {/* Profile Summary & Stats */}
        {profile && stats && (
          <div className="space-y-6 mb-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
              {/* Profile Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="lg:col-span-6 pro-card p-6 flex flex-col sm:flex-row items-center sm:items-start gap-5"
              >
                <img
                  src={profile.avatar_url}
                  alt={profile.name || profile.login}
                  className="w-20 h-20 rounded-full border-2 border-blue-600/30 object-cover shadow-sm shrink-0"
                />
                <div className="flex-1 text-center sm:text-left">
                  <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                      {profile.name || profile.login}
                    </h3>
                    <span className="text-xs text-slate-500 dark:text-slate-400">
                      @{profile.login}
                    </span>
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-300 mt-1 leading-relaxed">
                    {profile.bio || PERSONAL_INFO.aboutSummary}
                  </p>
                  <div className="mt-4">
                    <a
                      href={profile.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary py-2 px-4 text-xs inline-flex items-center gap-1.5"
                    >
                      <Github className="w-3.5 h-3.5" />
                      <span>View GitHub Profile</span>
                      <ExternalLink className="w-3 h-3 ml-0.5" />
                    </a>
                  </div>
                </div>
              </motion.div>

              {/* 4 Stats Cards */}
              <div className="lg:col-span-6 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 gap-4">
                {[
                  {
                    label: 'Public Repos',
                    value: profile.public_repos ?? stats.totalRepos,
                    icon: BookOpen,
                  },
                  {
                    label: 'Total Stars',
                    value: stats.totalStars,
                    icon: Star,
                  },
                  {
                    label: 'Total Forks',
                    value: stats.totalForks,
                    icon: GitFork,
                  },
                  {
                    label: 'Followers',
                    value: profile.followers ?? 0,
                    icon: Users,
                  },
                ].map((stat, idx) => {
                  const Icon = stat.icon;
                  return (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: idx * 0.05 }}
                      className="pro-card p-5 flex items-center gap-4"
                    >
                      <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0">
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <p className="text-2xl font-bold text-slate-900 dark:text-white">
                          {stat.value}
                        </p>
                        <p className="text-xs font-medium text-slate-500 dark:text-slate-400">
                          {stat.label}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Top Languages Bar */}
            {stats.topLanguages.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="pro-card p-6"
              >
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-sm font-semibold text-slate-900 dark:text-white uppercase tracking-wider flex items-center gap-2">
                    <Code className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                    <span>Top Languages</span>
                  </h4>
                  <span className="text-xs text-slate-500 dark:text-slate-400">
                    Based on public repositories
                  </span>
                </div>

                {/* Stacked Horizontal Bar */}
                <div className="h-3 w-full bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden flex">
                  {stats.topLanguages.map((lang) => (
                    <div
                      key={lang.name}
                      style={{
                        width: `${lang.percentage}%`,
                        backgroundColor: lang.color || '#2563eb',
                      }}
                      title={`${lang.name}: ${lang.percentage}%`}
                      className="h-full transition-all duration-500"
                    />
                  ))}
                </div>

                {/* Legend */}
                <div className="flex flex-wrap items-center gap-x-5 gap-y-2 mt-4 pt-2">
                  {stats.topLanguages.map((lang) => (
                    <div key={lang.name} className="flex items-center gap-2 text-xs">
                      <span
                        className="w-2.5 h-2.5 rounded-full"
                        style={{ backgroundColor: lang.color || '#2563eb' }}
                      />
                      <span className="font-medium text-slate-700 dark:text-slate-300">
                        {lang.name}
                      </span>
                      <span className="text-slate-400 dark:text-slate-500">
                        {lang.percentage}%
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Contribution Heatmap */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="pro-card p-6"
            >
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-sm font-semibold text-slate-900 dark:text-white uppercase tracking-wider">
                  Contribution Heatmap
                </h4>
                <span className="text-xs text-slate-500 dark:text-slate-400">
                  Annual contribution graph
                </span>
              </div>
              <div className="overflow-x-auto pb-2">
                <img
                  src={`https://ghchart.rshah.org/2563eb/${PERSONAL_INFO.githubUsername}`}
                  alt={`${PERSONAL_INFO.githubUsername}'s GitHub Contributions`}
                  className="min-w-[680px] w-full max-w-full rounded"
                  loading="lazy"
                />
              </div>
            </motion.div>
          </div>
        )}

        {/* Filter and Search Bar */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mb-8">
          {/* Search box */}
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search repositories..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-600 rounded-lg pl-9 pr-4 py-2.5 text-sm text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
            />
          </div>

          {/* Filter Dropdowns */}
          <div className="flex items-center gap-3">
            <select
              value={selectedLanguage}
              onChange={(e) => setSelectedLanguage(e.target.value)}
              className="bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-600 rounded-lg px-3 py-2.5 text-sm text-slate-700 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="all">All Languages</option>
              {languages.map((lang) => (
                <option key={lang} value={lang}>
                  {lang}
                </option>
              ))}
            </select>

            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as 'stars' | 'updated' | 'name')}
              className="bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-600 rounded-lg px-3 py-2.5 text-sm text-slate-700 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="stars">Most Stars</option>
              <option value="updated">Recently Updated</option>
              <option value="name">Repository Name</option>
            </select>
          </div>
        </div>

        {/* Repos Grid */}
        {loading ? (
          <div className="py-20 flex flex-col items-center justify-center gap-3">
            <Loader2 className="w-8 h-8 text-blue-600 dark:text-blue-400 animate-spin" />
            <p className="text-sm text-slate-500 dark:text-slate-400">Loading GitHub repositories...</p>
          </div>
        ) : filteredRepos.length === 0 ? (
          <div className="pro-card p-12 text-center max-w-md mx-auto">
            <BookOpen className="w-10 h-10 text-slate-400 mx-auto mb-3" />
            <h4 className="text-base font-semibold text-slate-900 dark:text-white">
              No repositories found
            </h4>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
              Try adjusting your search query or language filter.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredRepos.map((repo, idx) => (
              <motion.div
                key={repo.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="pro-card p-6 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h4 className="font-semibold text-slate-900 dark:text-white text-base hover:text-blue-600 dark:hover:text-blue-400 transition-colors line-clamp-1">
                      <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                        {repo.name}
                      </a>
                    </h4>
                    {repo.language && (
                      <span className="badge text-xs px-2.5 py-0.5 shrink-0">
                        {repo.language}
                      </span>
                    )}
                  </div>

                  <p className="text-sm text-slate-600 dark:text-slate-300 line-clamp-2 my-2 leading-relaxed">
                    {repo.description || 'No description provided.'}
                  </p>
                </div>

                <div className="pt-4 mt-3 border-t border-slate-100 dark:border-slate-700/60 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                  <div className="flex items-center gap-3">
                    <span className="flex items-center gap-1" title="Stars">
                      <Star className="w-3.5 h-3.5 text-amber-500" />
                      <span>{repo.stargazers_count}</span>
                    </span>
                    <span className="flex items-center gap-1" title="Forks">
                      <GitFork className="w-3.5 h-3.5 text-slate-400" />
                      <span>{repo.forks_count}</span>
                    </span>
                    <span className="flex items-center gap-1" title="Updated date">
                      <Calendar className="w-3.5 h-3.5 text-slate-400" />
                      <span>
                        {new Date(repo.updated_at).toLocaleDateString(undefined, {
                          month: 'short',
                          year: 'numeric',
                        })}
                      </span>
                    </span>
                  </div>

                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium inline-flex items-center gap-1 transition-colors"
                  >
                    <span>View</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
