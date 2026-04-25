import { Github, Linkedin, Mail, ArrowDown } from 'lucide-react';
import { useTypingEffect } from '../hooks/useTypingEffect.js';
import { socialLinks } from '../data/index.js';

const roles = ['Full Stack Developer', 'Frontend Engineer', 'MERN Stack Dev', 'UI Craftsperson'];

export default function Hero({ isDark }) {
  const typed = useTypingEffect(roles, 65, 40, 2000);

  return (
    <section
      id="home"
      className={`relative min-h-screen flex items-center justify-center overflow-hidden ${
        isDark ? 'bg-dark-bg' : 'bg-light-bg'
      }`}
    >
      {/* Animated background grid */}
      <div
        className={`absolute inset-0 ${isDark ? 'bg-grid-dark' : 'bg-grid-light'} bg-grid opacity-60`}
      />

      {/* Glowing blobs */}
      <div
        className="blob w-96 h-96 bg-blue-500/20 dark:bg-blue-500/15 top-1/4 -left-24 animate-glow-pulse"
        style={{ animationDelay: '0s' }}
      />
      <div
        className="blob w-80 h-80 bg-purple-500/15 dark:bg-purple-500/10 bottom-1/4 -right-16 animate-glow-pulse"
        style={{ animationDelay: '1.5s' }}
      />
      <div
        className="blob w-64 h-64 bg-cyan-500/10 top-1/2 left-1/2 -translate-x-1/2 animate-glow-pulse"
        style={{ animationDelay: '3s' }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-24 pb-16 flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-16">
        
        {/* Text */}
        <div className="flex-1 text-center lg:text-left">
          {/* Greeting badge */}
          <div className="inline-flex items-center gap-2 mb-6 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <span
              className={`px-3 py-1 rounded-full font-mono text-xs border ${
                isDark
                  ? 'border-neon-blue/40 bg-neon-blue/10 text-neon-blue'
                  : 'border-blue-400/50 bg-blue-50 text-blue-600'
              }`}
            >
              👋 Available for work
            </span>
          </div>

          {/* Name */}
          <h1
            className={`font-mono text-5xl sm:text-6xl lg:text-7xl font-bold mb-4 leading-tight animate-fade-up ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}
            style={{ animationDelay: '0.2s' }}
          >
            Priya{' '}
            <span className="gradient-text">Gupta</span>
          </h1>

          {/* Typed role */}
          <div
            className="font-mono text-xl sm:text-2xl mb-6 h-8 animate-fade-up"
            style={{ animationDelay: '0.35s' }}
          >
            <span className={isDark ? 'text-gray-400' : 'text-gray-500'}>$ </span>
            <span className={isDark ? 'text-neon-cyan' : 'text-blue-600'}>
              {typed}
            </span>
            <span className="cursor inline-block w-0" />
          </div>

          {/* Tagline */}
          <p
            className={`text-base sm:text-lg max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed animate-fade-up ${
              isDark ? 'text-gray-400' : 'text-gray-600'
            }`}
            style={{ animationDelay: '0.5s' }}
          >
            India-based freelance developer passionate about crafting{' '}
            <span className={isDark ? 'text-white' : 'text-gray-900'}>fast, beautiful,</span>{' '}
            and{' '}
            <span className={isDark ? 'text-white' : 'text-gray-900'}>accessible</span>{' '}
            web experiences — from pixel-perfect UI to scalable full-stack apps.
          </p>

          {/* CTA Buttons */}
          <div
            className="flex flex-wrap gap-4 justify-center lg:justify-start mb-10 animate-fade-up"
            style={{ animationDelay: '0.65s' }}
          >
            <a
              href="#projects"
              onClick={(e) => { e.preventDefault(); document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' }); }}
              className="btn-secondary"
            >
              View Projects
            </a>
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }}
              className="btn-primary"
            >
              Contact Me
            </a>
          </div>

          {/* Social Icons */}
          <div
            className="flex items-center gap-4 justify-center lg:justify-start animate-fade-up"
            style={{ animationDelay: '0.8s' }}
          >
            {[
              { icon: Github, href: socialLinks.github, label: 'GitHub' },
              { icon: Linkedin, href: socialLinks.linkedin, label: 'LinkedIn' },
              { icon: Mail, href: socialLinks.email, label: 'Email' },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className={`p-2.5 rounded-lg border transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg ${
                  isDark
                    ? 'border-dark-border text-gray-400 hover:border-neon-blue hover:text-neon-blue hover:shadow-neon-blue/20'
                    : 'border-light-border text-gray-500 hover:border-blue-400 hover:text-blue-600 hover:shadow-blue-200'
                }`}
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        {/* Avatar / Visual */}
        <div className="flex-shrink-0 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <div className="relative">
            {/* Outer glow ring */}
            <div className="absolute -inset-4 rounded-full bg-gradient-to-br from-neon-blue/30 via-purple-500/20 to-cyan-500/30 blur-xl animate-glow-pulse" />
            {/* Ring */}
            <div className="relative w-56 h-56 sm:w-64 sm:h-64 lg:w-72 lg:h-72 rounded-full p-1 bg-gradient-to-br from-neon-blue via-purple-500 to-neon-cyan">
              <div className={`w-full h-full rounded-full overflow-hidden ${isDark ? 'bg-dark-card' : 'bg-gray-100'} flex items-center justify-center`}>
                {/* Profile image — replace src with your actual image */}
                <img
                  src="https://priyagupta-js.github.io/Portfolio/Assests/PriyaGupta_DP.png"
                  alt="Priya Gupta"
                  className="w-full h-full object-cover rounded-full"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                {/* Fallback avatar */}
                <div
                  className="hidden w-full h-full items-center justify-center font-mono text-6xl font-bold gradient-text"
                >
                  PG
                </div>
              </div>
            </div>

            {/* Floating badges */}
            <div
              className={`absolute -bottom-2 -left-4 px-3 py-1.5 rounded-lg font-mono text-xs border shadow-lg animate-float ${
                isDark
                  ? 'bg-dark-card border-dark-border text-neon-green'
                  : 'bg-white border-light-border text-green-600'
              }`}
              style={{ animationDelay: '0s' }}
            >
              🟢 Open to work
            </div>
            <div
              className={`absolute -top-2 -right-4 px-3 py-1.5 rounded-lg font-mono text-xs border shadow-lg animate-float ${
                isDark
                  ? 'bg-dark-card border-dark-border text-neon-blue'
                  : 'bg-white border-light-border text-blue-600'
              }`}
              style={{ animationDelay: '2s' }}
            >
              ⚡ React + MERN
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className={`font-mono text-xs ${isDark ? 'text-gray-600' : 'text-gray-400'}`}>scroll</span>
        <ArrowDown size={14} className={isDark ? 'text-gray-600' : 'text-gray-400'} />
      </div>
    </section>
  );
}
