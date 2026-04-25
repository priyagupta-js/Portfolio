import { Github, Linkedin, Mail, Heart, ArrowUp } from 'lucide-react';
import { socialLinks } from '../data/index.js';

export default function Footer({ isDark }) {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className={`py-8 border-t ${isDark ? 'bg-dark-bg border-dark-border' : 'bg-light-bg border-light-border'}`}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => { e.preventDefault(); scrollTop(); }}
            className="font-mono text-lg font-bold text-neon-blue hover:text-blue-400 transition-colors"
          >
            &lt;PG /&gt;
          </a>

          {/* Copyright */}
          <p className={`font-mono text-xs flex items-center gap-1.5 ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>
            Designed & built with <Heart size={11} className="text-red-400 fill-red-400" /> by{' '}
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={`hover:text-neon-blue transition-colors ${isDark ? 'text-gray-300' : 'text-gray-600'}`}
            >
              Priya Gupta
            </a>
            {' '}· {new Date().getFullYear()}
          </p>

          {/* Social + Back to top */}
          <div className="flex items-center gap-3">
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
                className={`p-2 rounded-lg transition-colors ${
                  isDark
                    ? 'text-gray-500 hover:text-neon-blue'
                    : 'text-gray-400 hover:text-blue-600'
                }`}
              >
                <Icon size={15} />
              </a>
            ))}

            <button
              onClick={scrollTop}
              aria-label="Back to top"
              className={`p-2 rounded-lg border transition-all duration-200 hover:-translate-y-0.5 ${
                isDark
                  ? 'border-dark-border text-gray-500 hover:border-neon-blue hover:text-neon-blue'
                  : 'border-light-border text-gray-400 hover:border-blue-400 hover:text-blue-600'
              }`}
            >
              <ArrowUp size={15} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
