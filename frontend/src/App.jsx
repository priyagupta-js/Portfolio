import { useTheme } from './hooks/useTheme.js';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Skills from './components/Skills.jsx';
import Projects from './components/Projects.jsx';
import Experience from './components/Experience.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <div className={isDark ? 'dark' : ''}>
      <div className={`min-h-screen transition-colors duration-300 ${isDark ? 'bg-dark-bg text-white' : 'bg-light-bg text-gray-900'}`}>
        <Navbar isDark={isDark} toggleTheme={toggleTheme} />
        <main>
          <Hero isDark={isDark} />
          <About isDark={isDark} />
          <Skills isDark={isDark} />
          <Projects isDark={isDark} />
          <Experience isDark={isDark} />
          <Contact isDark={isDark} />
        </main>
        <Footer isDark={isDark} />
      </div>
    </div>
  );
}
