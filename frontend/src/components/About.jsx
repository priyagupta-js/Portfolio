import { MapPin, Calendar, Briefcase, Code2, ExternalLink } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal.js';
import { socialLinks } from '../data/index.js';

const details = [
  { icon: MapPin, label: 'Location', value: 'India (Remote Ready)' },
  { icon: Briefcase, label: 'Role', value: 'Full Stack Developer' },
  { icon: Code2, label: 'Stack', value: 'MERN + Tailwind' },
  { icon: Calendar, label: 'Experience', value: '2+ Years' },
];

export default function About({ isDark }) {
  const ref1 = useScrollReveal();
  const ref2 = useScrollReveal();

  return (
    <section
      id="about"
      className={`py-24 ${isDark ? 'bg-dark-surface' : 'bg-white'}`}
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div ref={ref1} className="reveal text-center mb-16">
          <p className="section-subtitle text-neon-blue">// who am I</p>
          <h2 className={`section-title ${isDark ? 'text-white' : 'text-gray-900'}`}>
            About <span className="gradient-text">Me</span>
          </h2>
        </div>

        {/* Content */}
        <div ref={ref2} className="reveal grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — Image + Badges */}
          <div className="relative flex justify-center">
            <div className="relative">
              {/* Decorative border */}
              <div className="absolute -inset-3 rounded-2xl bg-gradient-to-br from-neon-blue/20 via-transparent to-purple-500/20 blur-lg" />
              <div
                className={`relative w-72 h-80 sm:w-80 sm:h-96 rounded-2xl overflow-hidden border ${
                  isDark ? 'border-dark-border' : 'border-light-border'
                }`}
              >
                <img
                  src="https://priyagupta-js.github.io/Portfolio/Assests/PriyaGupta-Picture.png"
                  alt="Priya Gupta"
                  className="w-full h-full object-cover object-top"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentElement.classList.add('flex', 'items-center', 'justify-center');
                    const fb = document.createElement('span');
                    fb.className = 'font-mono text-7xl font-bold gradient-text';
                    fb.textContent = 'PG';
                    e.target.parentElement.appendChild(fb);
                  }}
                />
              </div>

              {/* Stats badge */}
              <div
                className={`absolute -bottom-5 -right-5 px-5 py-4 rounded-xl border shadow-xl ${
                  isDark ? 'bg-dark-card border-dark-border' : 'bg-white border-light-border'
                }`}
              >
                <p className={`font-mono text-xs mb-1 ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>Projects Done</p>
                <p className="font-mono text-3xl font-bold gradient-text">10+</p>
              </div>
            </div>
          </div>

          {/* Right — Text */}
          <div>
            <h3 className={`font-mono text-2xl font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Priya Gupta
            </h3>
            <p className={`font-mono text-sm mb-6 ${isDark ? 'text-neon-blue' : 'text-blue-600'}`}>
              Freelancer · Full Stack Developer
            </p>

            <p className={`text-base leading-relaxed mb-4 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
              An India-based freelance Web Developer with a passion for crafting exceptional
              online experiences. Skilled in{' '}
              <span className={isDark ? 'text-neon-cyan font-medium' : 'text-blue-600 font-medium'}>
                Frontend and Full Stack (MERN) Development
              </span>
              , building responsive, user-friendly websites and powerful web applications.
            </p>
            <p className={`text-base leading-relaxed mb-8 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
              Proficient in translating design concepts into seamless, interactive interfaces,
              combining clean code with creative design. With a keen understanding of modern
              web trends, every project is crafted with innovation, precision, and quality.
            </p>

            {/* Detail grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {details.map(({ icon: Icon, label, value }) => (
                <div
                  key={label}
                  className={`flex items-start gap-3 p-3 rounded-lg border ${
                    isDark
                      ? 'border-dark-border bg-dark-card/50'
                      : 'border-light-border bg-light-card/60'
                  }`}
                >
                  <Icon
                    size={16}
                    className={`mt-0.5 flex-shrink-0 ${isDark ? 'text-neon-blue' : 'text-blue-500'}`}
                  />
                  <div>
                    <p className={`font-mono text-xs mb-0.5 ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>
                      {label}
                    </p>
                    <p className={`font-mono text-xs font-semibold ${isDark ? 'text-white' : 'text-gray-800'}`}>
                      {value}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="flex flex-wrap gap-3">
              <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="btn-secondary text-sm flex items-center gap-2">
                Connect on LinkedIn <ExternalLink size={13} />
              </a>
              <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" className="btn-primary text-sm flex items-center gap-2">
                View GitHub <ExternalLink size={13} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
