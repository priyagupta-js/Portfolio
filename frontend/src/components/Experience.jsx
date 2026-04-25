import { Briefcase, GraduationCap } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal.js';
import { experience } from '../data/index.js';

export default function Experience({ isDark }) {
  const headerRef = useScrollReveal();
  const timelineRef = useScrollReveal();

  return (
    <section
      id="experience"
      className={`py-24 ${isDark ? 'bg-dark-bg' : 'bg-light-bg'}`}
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div ref={headerRef} className="reveal text-center mb-16">
          <p className="section-subtitle">// my journey</p>
          <h2 className={`section-title ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Experience &{' '}
            <span className="gradient-text">Education</span>
          </h2>
        </div>

        {/* Timeline */}
        <div ref={timelineRef} className="reveal max-w-3xl mx-auto">
          <div className="relative">
            {/* Vertical line */}
            <div
              className={`absolute left-6 top-0 bottom-0 w-px ${
                isDark ? 'bg-dark-border' : 'bg-light-border'
              }`}
            />

            <div className="space-y-8">
              {experience.map((item, i) => (
                <div key={item.id} className="relative pl-16" style={{ animationDelay: `${i * 150}ms` }}>
                  {/* Icon dot */}
                  <div
                    className={`absolute left-3 top-1 w-6 h-6 rounded-full flex items-center justify-center border-2 ${
                      item.type === 'work'
                        ? isDark
                          ? 'border-neon-blue bg-dark-bg text-neon-blue'
                          : 'border-blue-500 bg-white text-blue-500'
                        : isDark
                        ? 'border-neon-purple bg-dark-bg text-neon-purple'
                        : 'border-purple-500 bg-white text-purple-500'
                    }`}
                  >
                    {item.type === 'work' ? (
                      <Briefcase size={11} />
                    ) : (
                      <GraduationCap size={11} />
                    )}
                  </div>

                  {/* Card */}
                  <div
                    className={`p-5 rounded-xl border transition-all duration-300 hover:-translate-y-0.5 ${
                      isDark
                        ? 'bg-dark-card border-dark-border hover:border-gray-700'
                        : 'bg-white border-light-border hover:border-gray-300 shadow-sm'
                    }`}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
                      <div>
                        <h3
                          className={`font-mono text-base font-bold ${
                            isDark ? 'text-white' : 'text-gray-900'
                          }`}
                        >
                          {item.role}
                        </h3>
                        <p
                          className={`font-mono text-sm ${
                            item.type === 'work'
                              ? isDark ? 'text-neon-blue' : 'text-blue-600'
                              : isDark ? 'text-neon-purple' : 'text-purple-600'
                          }`}
                        >
                          {item.company}
                        </p>
                      </div>
                      <span
                        className={`font-mono text-xs px-3 py-1 rounded-full flex-shrink-0 ${
                          isDark
                            ? 'bg-dark-border text-gray-400'
                            : 'bg-gray-100 text-gray-500'
                        }`}
                      >
                        {item.year}
                      </span>
                    </div>
                    <p
                      className={`text-sm leading-relaxed ${
                        isDark ? 'text-gray-400' : 'text-gray-600'
                      }`}
                    >
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
