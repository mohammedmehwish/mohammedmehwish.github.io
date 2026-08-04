import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Star, GitFork, Calendar, Search, Filter, ExternalLink, Code2, Users, FolderGit2, Activity, RefreshCw } from 'lucide-react';
import { fetchGitHubProfile, fetchGitHubRepos, computeGitHubStats } from '../../services/github';
import { GitHubUser, GitHubRepo, GitHubStats } from '../../types';
import { PERSONAL_INFO } from '../../data/portfolioData';

export const GitHubSection: React.FC = () => {
  const [profile, setProfile] = useState<GitHubUser | null>(null);
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [stats, setStats] = useState<GitHubStats | null>(null);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState<string>('all');
  const [sortBy, setSortBy] = useState<'stars' | 'updated' | 'name'>('stars');

  useEffect(() => {
    async function loadGitHubData() {
      setLoading(true);
      const profileData = await fetchGitHubProfile(PERSONAL_INFO.githubUsername);
      const reposData = await fetchGitHubRepos(PERSONAL_INFO.githubUsername);
      const computedStats = computeGitHubStats(reposData);

      setProfile(profileData);
      setRepos(reposData);
      setStats(computedStats);
      setLoading(false);
    }

    loadGitHubData();
  }, []);

  // Filter & Sort Repositories
  const languagesList = Array.from(new Set(repos.map(r => r.language).filter(Boolean))) as string[];

  const filteredRepos = repos.filter(repo => {
    const matchesSearch = repo.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (repo.description && repo.description.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesLang = selectedLanguage === 'all' || repo.language === selectedLanguage;
    return matchesSearch && matchesLang;
  }).sort((a, b) => {
    if (sortBy === 'stars') return b.stargazers_count - a.stargazers_count;
    if (sortBy === 'updated') return new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime();
    if (sortBy === 'name') return a.name.localeCompare(b.name);
    return 0;
  });

  return (
    <section id="github" className="relative py-24 bg-[#050814]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-3"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyber-cyan/10 border border-cyber-cyan/30 text-cyber-cyan font-mono text-xs uppercase tracking-widest">
            <span className="w-1.5 h-1.5 rounded-full bg-cyber-cyan" />
            OPEN SOURCE ACTIVITY
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            GitHub <span className="cyber-gradient-text">Ecosystem</span>
          </h2>
          <p className="text-slate-400 font-mono text-sm">
            Live repositories, metrics, top languages, and contribution analytics fetched from GitHub API.
          </p>
        </motion.div>

        {/* Profile Stats Summary Panel */}
        {profile && stats && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-panel p-6 sm:p-8 rounded-3xl border border-cyber-cyan/30 mb-12 shadow-glow-cyan"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Profile Bio */}
              <div className="lg:col-span-5 flex items-center gap-5">
                <img
                  src={profile.avatar_url}
                  alt={profile.name}
                  className="w-20 h-20 rounded-2xl border-2 border-cyber-cyan shadow-glow-cyan object-cover"
                />
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <h3 className="text-xl font-bold font-mono text-white">{profile.name || profile.login}</h3>
                    <a
                      href={profile.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-cyber-cyan hover:scale-110 transition-transform"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                  <p className="text-xs font-mono text-cyber-sky">@{profile.login}</p>
                  <p className="text-xs font-sans text-slate-300 line-clamp-2">{profile.bio}</p>
                </div>
              </div>

              {/* Stats Metrics Grid */}
              <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div className="bg-slate-900/80 p-3.5 rounded-xl border border-slate-800 text-center">
                  <FolderGit2 className="w-5 h-5 text-cyber-cyan mx-auto mb-1" />
                  <div className="text-xl font-bold font-mono text-white">{stats.totalRepos}</div>
                  <div className="text-[10px] font-mono text-slate-400 uppercase">Public Repos</div>
                </div>

                <div className="bg-slate-900/80 p-3.5 rounded-xl border border-slate-800 text-center">
                  <Star className="w-5 h-5 text-amber-400 mx-auto mb-1" />
                  <div className="text-xl font-bold font-mono text-white">{stats.totalStars}</div>
                  <div className="text-[10px] font-mono text-slate-400 uppercase">Total Stars</div>
                </div>

                <div className="bg-slate-900/80 p-3.5 rounded-xl border border-slate-800 text-center">
                  <GitFork className="w-5 h-5 text-cyber-sky mx-auto mb-1" />
                  <div className="text-xl font-bold font-mono text-white">{stats.totalForks}</div>
                  <div className="text-[10px] font-mono text-slate-400 uppercase">Forks</div>
                </div>

                <div className="bg-slate-900/80 p-3.5 rounded-xl border border-slate-800 text-center">
                  <Users className="w-5 h-5 text-emerald-400 mx-auto mb-1" />
                  <div className="text-xl font-bold font-mono text-white">{profile.followers}</div>
                  <div className="text-[10px] font-mono text-slate-400 uppercase">Followers</div>
                </div>
              </div>

            </div>

            {/* Top Languages Progress Bar */}
            <div className="mt-8 pt-6 border-t border-slate-800/80 space-y-3">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-cyber-cyan font-bold flex items-center gap-1.5">
                  <Code2 className="w-4 h-4" />
                  PRIMARY PROGRAMMING LANGUAGES
                </span>
                <span className="text-slate-400">COMPUTED FROM PUBLIC REPOSITORIES</span>
              </div>

              {/* Stacked Multi-color Bar */}
              <div className="h-3 w-full bg-slate-900 rounded-full overflow-hidden flex">
                {stats.topLanguages.map((lang) => (
                  <div
                    key={lang.name}
                    style={{ width: `${lang.percentage}%`, backgroundColor: lang.color }}
                    className="h-full first:rounded-l-full last:rounded-r-full transition-all"
                    title={`${lang.name}: ${lang.percentage}%`}
                  />
                ))}
              </div>

              {/* Legend Badges */}
              <div className="flex flex-wrap items-center gap-4 pt-1">
                {stats.topLanguages.map((lang) => (
                  <div key={lang.name} className="flex items-center gap-1.5 text-xs font-mono text-slate-300">
                    <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: lang.color }} />
                    <span className="font-semibold">{lang.name}</span>
                    <span className="text-slate-400 text-[11px]">{lang.percentage}%</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}

        {/* Contribution Graph Heatmap Widget */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-panel p-6 rounded-2xl border border-cyber-cyan/20 mb-12 space-y-4"
        >
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-bold font-mono text-cyber-cyan flex items-center gap-2">
              <Activity className="w-4 h-4 text-cyber-cyan" />
              CONTRIBUTION HEATMAP & ACTIVITY MATRIX
            </h3>
            <span className="text-[11px] font-mono text-slate-400">@mohammedmehwish</span>
          </div>

          <div className="overflow-x-auto pb-2">
            <img
              src={`https://ghchart.rshah.org/00f0ff/${PERSONAL_INFO.githubUsername}`}
              alt="GitHub Contribution Heatmap"
              className="w-full min-w-[700px] h-auto rounded-lg filter drop-shadow-[0_0_10px_rgba(0,240,255,0.2)]"
              onError={(e) => {
                // Fallback graphic if chart server is unreachable
                (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop";
              }}
            />
          </div>
        </motion.div>

        {/* Search, Filter & Sort Controls */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8 bg-cyber-card/60 p-4 rounded-2xl border border-cyber-cyan/20">
          
          {/* Search Box */}
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-cyber-cyan absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search repositories..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-900 border border-slate-700 rounded-xl pl-10 pr-4 py-2 text-xs font-mono text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyber-cyan focus:ring-1 focus:ring-cyber-cyan"
            />
          </div>

          {/* Language Filter Dropdown */}
          <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
            <div className="flex items-center gap-1.5 text-xs font-mono text-slate-300">
              <Filter className="w-3.5 h-3.5 text-cyber-cyan" />
              <span>Language:</span>
              <select
                value={selectedLanguage}
                onChange={(e) => setSelectedLanguage(e.target.value)}
                className="bg-slate-900 border border-slate-700 rounded-lg px-3 py-1.5 text-xs font-mono text-cyber-cyan focus:outline-none focus:border-cyber-cyan"
              >
                <option value="all">All Languages</option>
                {languagesList.map(lang => (
                  <option key={lang} value={lang}>{lang}</option>
                ))}
              </select>
            </div>

            {/* Sort Dropdown */}
            <div className="flex items-center gap-1.5 text-xs font-mono text-slate-300">
              <span>Sort by:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="bg-slate-900 border border-slate-700 rounded-lg px-3 py-1.5 text-xs font-mono text-cyber-cyan focus:outline-none focus:border-cyber-cyan"
              >
                <option value="stars">Most Stars</option>
                <option value="updated">Recently Updated</option>
                <option value="name">Name (A-Z)</option>
              </select>
            </div>
          </div>

        </div>

        {/* Repositories Card Grid */}
        {loading ? (
          <div className="text-center py-12 font-mono text-cyber-cyan flex items-center justify-center gap-2">
            <RefreshCw className="w-5 h-5 animate-spin" />
            <span>FETCHING LIVE GITHUB REPOSITORIES...</span>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredRepos.map((repo) => (
              <motion.div
                key={repo.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="glass-panel p-6 rounded-2xl border border-cyber-cyan/20 hover:border-cyber-cyan/60 hover:shadow-glow-cyan transition-all flex flex-col justify-between group"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <h3 className="text-base font-bold font-mono text-white group-hover:text-cyber-cyan transition-colors truncate max-w-[200px]">
                      {repo.name}
                    </h3>
                    <span className="px-2.5 py-1 rounded bg-cyber-cyan/15 border border-cyber-cyan/30 text-[10px] font-mono font-semibold text-cyber-cyan">
                      {repo.language || 'Embedded'}
                    </span>
                  </div>

                  <p className="text-xs font-sans text-slate-300 line-clamp-3 leading-relaxed">
                    {repo.description || 'Engineering & Mechatronics codebase repository.'}
                  </p>
                </div>

                <div className="space-y-4 pt-4 border-t border-slate-800/80 mt-4">
                  {/* Repo Metrics: Stars, Forks, Date */}
                  <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                    <div className="flex items-center gap-3">
                      <span className="flex items-center gap-1 text-amber-400 font-semibold">
                        <Star className="w-3.5 h-3.5 fill-amber-400" />
                        {repo.stargazers_count}
                      </span>
                      <span className="flex items-center gap-1 text-cyber-sky">
                        <GitFork className="w-3.5 h-3.5" />
                        {repo.forks_count}
                      </span>
                    </div>

                    <span className="flex items-center gap-1 text-[11px] text-slate-400">
                      <Calendar className="w-3 h-3" />
                      {new Date(repo.updated_at).toLocaleDateString(undefined, { month: 'short', year: 'numeric' })}
                    </span>
                  </div>

                  {/* View on GitHub CTA */}
                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-slate-200 hover:text-slate-950 hover:bg-cyber-cyan hover:border-cyber-cyan text-xs font-mono font-bold flex items-center justify-center gap-2 transition-all shadow-sm"
                  >
                    <Github className="w-4 h-4" />
                    <span>VIEW ON GITHUB</span>
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
