import { useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal.js';
import { skillCategories } from '../data/index.js';

const colorMap = {
  blue: {
    tab: 'text-neon-blue border-neon-blue bg-neon-blue/10',
    bar: 'from-neon-blue to-neon-cyan',
    badge: 'border-blue-400/30 bg-blue-500/10 text-blue-400',
    glow: 'shadow-neon-blue/20',
  },
  purple: {
    tab: 'text-neon-purple border-neon-purple bg-neon-purple/10',
    bar: 'from-neon-purple to-purple-400',
    badge: 'border-purple-400/30 bg-purple-500/10 text-purple-400',
    glow: 'shadow-neon-purple/20',
  },
  green: {
    tab: 'text-neon-green border-neon-green bg-neon-green/10',
    bar: 'from-neon-green to-emerald-400',
    badge: 'border-green-400/30 bg-green-500/10 text-green-400',
    glow: 'shadow-neon-green/20',
  },
};

function SkillBar({ name, level, color, isDark, delay }) {
  const colors = colorMap[color];
  return (
    <div className="mb-5" style={{ animationDelay: `${delay}ms` }}>
      <div className="flex justify-between items-center mb-2">
        <span className={`font-mono text-sm ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>{name}</span>
        <span className={`font-mono text-xs ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>{level}%</span>
      </div>
      <div className={`h-1.5 rounded-full overflow-hidden ${isDark ? 'bg-dark-border' : 'bg-gray-200'}`}>
        <div
          className={`h-full rounded-full bg-gradient-to-r ${colors.bar} transition-all duration-1000 ease-out`}
          style={{ width: `${level}%` }}
        />
      </div>
    </div>
  );
}

// Tech logos (SVG icons as text for simplicity — swap for real SVG icons)
const techIcons = {
  'HTML5': '🌐', 'CSS3': '🎨', 'JavaScript': '⚡', 'ReactJS': '⚛️',
  'Tailwind CSS': '💨', 'Bootstrap': '🅱️', 'Node.js': '🟢', 'Express.js': '🚂',
  'MongoDB': '🍃', 'MySQL': '🐬', 'REST APIs': '🔌', 'Git & GitHub': '🐙',
  'VS Code': '💙', 'Figma': '🎭', 'Photoshop': '🖼️', 'Illustrator': '✏️',
};

export default function Skills({ isDark }) {
  const [activeTab, setActiveTab] = useState('frontend');
  const headerRef = useScrollReveal();
  const contentRef = useScrollReveal();

  const active = skillCategories.find((c) => c.id === activeTab);
  const colors = colorMap[active?.color || 'blue'];

  return (
    <section
      id="skills"
      className={`py-24 ${isDark ? 'bg-dark-bg' : 'bg-light-bg'}`}
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div ref={headerRef} className="reveal text-center mb-16">
          <p className="section-subtitle">// what I work with</p>
          <h2 className={`section-title ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Tech <span className="gradient-text">Stack</span>
          </h2>
        </div>

        {/* Tab switcher */}
        <div className="flex justify-center gap-3 mb-12 flex-wrap">
          {skillCategories.map((cat) => {
            const c = colorMap[cat.color];
            const isActive = activeTab === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`font-mono text-sm px-5 py-2 rounded-lg border transition-all duration-200 ${
                  isActive
                    ? c.tab
                    : isDark
                    ? 'border-dark-border text-gray-400 hover:border-gray-600'
                    : 'border-light-border text-gray-500 hover:border-gray-300'
                }`}
              >
                {cat.icon} {cat.label}
              </button>
            );
          })}
        </div>

        {/* Skills grid */}
        <div ref={contentRef} className="reveal grid md:grid-cols-2 gap-12 items-start">
          {/* Skill bars */}
          <div
            className={`p-8 rounded-2xl border ${
              isDark ? 'bg-dark-card border-dark-border' : 'bg-white border-light-border'
            } shadow-xl`}
          >
            <h3 className={`font-mono text-sm mb-6 ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>
              // proficiency levels
            </h3>
            {active?.skills.map((skill, i) => (
              <SkillBar
                key={skill.name}
                name={skill.name}
                level={skill.level}
                color={active.color}
                isDark={isDark}
                delay={i * 80}
              />
            ))}
          </div>

          {/* Skill badges + summary */}
          <div>
            <div
              className={`p-8 rounded-2xl border mb-6 ${
                isDark ? 'bg-dark-card border-dark-border' : 'bg-white border-light-border'
              } shadow-xl`}
            >
              <h3 className={`font-mono text-sm mb-5 ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>
                // all {active?.label} tools
              </h3>
              <div className="flex flex-wrap gap-2">
                {active?.skills.map((skill) => (
                  <span
                    key={skill.name}
                    className={`skill-tag font-mono text-xs px-3 py-1.5 rounded-full border ${colors.badge}`}
                  >
                    {techIcons[skill.name] || '•'} {skill.name}
                  </span>
                ))}
              </div>
            </div>

            {/* All categories overview */}
            <div className="grid grid-cols-3 gap-3">
              {skillCategories.map((cat) => {
                const c = colorMap[cat.color];
                return (
                  <button
                    key={cat.id}
                    onClick={() => setActiveTab(cat.id)}
                    className={`p-4 rounded-xl border text-center transition-all duration-200 card-hover ${
                      activeTab === cat.id
                        ? `${c.tab} shadow-lg ${c.glow}`
                        : isDark
                        ? 'border-dark-border bg-dark-card/50 hover:border-gray-600'
                        : 'border-light-border bg-light-card hover:border-gray-300'
                    }`}
                  >
                    <div className="text-2xl mb-1">{cat.icon}</div>
                    <p className={`font-mono text-xs ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                      {cat.label}
                    </p>
                    <p className={`font-mono text-xs mt-0.5 ${isDark ? 'text-gray-600' : 'text-gray-400'}`}>
                      {cat.skills.length} skills
                    </p>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
