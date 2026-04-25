import { useState } from 'react';
import { Github, ExternalLink, Star } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal.js';
import { projects } from '../data/index.js';

const colorMap = {
  blue: {
    accent: 'text-neon-blue',
    border: 'hover:border-neon-blue/50',
    glow: 'hover:shadow-neon-blue/10',
    tag: 'border-blue-400/30 bg-blue-500/10 text-blue-400',
    badge: 'bg-neon-blue/10 text-neon-blue border border-neon-blue/30',
  },
  purple: {
    accent: 'text-neon-purple',
    border: 'hover:border-neon-purple/50',
    glow: 'hover:shadow-neon-purple/10',
    tag: 'border-purple-400/30 bg-purple-500/10 text-purple-400',
    badge: 'bg-neon-purple/10 text-neon-purple border border-neon-purple/30',
  },
  cyan: {
    accent: 'text-neon-cyan',
    border: 'hover:border-cyan-500/50',
    glow: 'hover:shadow-cyan-500/10',
    tag: 'border-cyan-400/30 bg-cyan-500/10 text-cyan-400',
    badge: 'bg-neon-cyan/10 text-neon-cyan border border-neon-500/30',
  },
};

function ProjectCard({ project, isDark, delay }) {
  const colors = colorMap[project.color] || colorMap.blue;

  return (
    <div
      className={`group relative p-6 rounded-2xl border transition-all duration-300 card-hover shadow-xl ${
        isDark
          ? `bg-dark-card border-dark-border ${colors.border} hover:shadow-2xl ${colors.glow}`
          : `bg-white border-light-border ${colors.border} hover:shadow-2xl ${colors.glow}`
      }`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Featured badge */}
      {project.featured && (
        <div className={`absolute top-4 right-4 flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-mono ${colors.badge}`}>
          <Star size={10} fill="currentColor" /> Featured
        </div>
      )}

      {/* Project number */}
      <p className={`font-mono text-xs mb-4 ${isDark ? 'text-gray-600' : 'text-gray-400'}`}>
        {String(project.id).padStart(2, '0')}
      </p>

      {/* Title */}
      <h3 className={`font-mono text-xl font-bold mb-3 group-hover:${colors.accent.replace('text-', '')} transition-colors ${
        isDark ? 'text-white' : 'text-gray-900'
      } ${colors.accent} group-hover:opacity-80`}>
        {project.title}
      </h3>

      {/* Description */}
      <p className={`text-sm leading-relaxed mb-5 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
        {project.description}
      </p>

      {/* Tech stack tags */}
      <div className="flex flex-wrap gap-2 mb-6">
        {project.techStack.map((tech) => (
          <span
            key={tech}
            className={`font-mono text-xs px-2.5 py-1 rounded-full border ${colors.tag}`}
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Links */}
      <div className="flex items-center gap-3 pt-4 border-t border-current/5">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className={`flex items-center gap-2 font-mono text-xs transition-colors ${
            isDark ? 'text-gray-400 hover:text-white' : 'text-gray-500 hover:text-gray-900'
          }`}
        >
          <Github size={14} />
          Code
        </a>
        {project.live && project.live !== '#' && (
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center gap-2 font-mono text-xs transition-colors ${colors.accent}`}
          >
            <ExternalLink size={14} />
            Live Demo
          </a>
        )}
      </div>
    </div>
  );
}

export default function Projects({ isDark }) {
  const [showAll, setShowAll] = useState(false);
  const headerRef = useScrollReveal();
  const gridRef = useScrollReveal();

  const displayed = showAll ? projects : projects.slice(0, 3);

  return (
    <section
      id="projects"
      className={`py-24 ${isDark ? 'bg-dark-surface' : 'bg-white'}`}
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div ref={headerRef} className="reveal text-center mb-16">
          <p className="section-subtitle">// what I've built</p>
          <h2 className={`section-title ${isDark ? 'text-white' : 'text-gray-900'}`}>
            My <span className="gradient-text">Projects</span>
          </h2>
          <p className={`mt-4 max-w-xl mx-auto text-sm leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            A selection of projects I've built — ranging from frontend UIs to full-stack web apps.
          </p>
        </div>

        {/* Grid */}
        <div ref={gridRef} className="reveal grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayed.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              isDark={isDark}
              delay={i * 120}
            />
          ))}
        </div>

        {/* View all button */}
        {projects.length > 3 && (
          <div className="flex justify-center mt-12">
            <button
              onClick={() => setShowAll(!showAll)}
              className="btn-primary"
            >
              {showAll ? 'Show Less' : `View All Projects (${projects.length})`}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
