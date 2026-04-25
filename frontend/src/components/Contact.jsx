import { useState } from 'react';
import { Send, Github, Linkedin, Mail, MapPin, CheckCircle } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal.js';
import { socialLinks } from '../data/index.js';

const socials = [
  { icon: Github, label: 'GitHub', value: 'priyagupta-js', href: socialLinks.github, color: 'hover:text-white hover:border-gray-400' },
  { icon: Linkedin, label: 'LinkedIn', value: 'priyagupta-js', href: socialLinks.linkedin, color: 'hover:text-blue-400 hover:border-blue-400/50' },
  { icon: Mail, label: 'Email', value: 'Open to discuss', href: socialLinks.email, color: 'hover:text-neon-blue hover:border-neon-blue/50' },
];

export default function Contact({ isDark }) {
  const headerRef = useScrollReveal();
  const contentRef = useScrollReveal();
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    // Simulate async (no backend — opens mailto fallback)
    setTimeout(() => {
      const mailto = `mailto:${socialLinks.email.replace('mailto:', '')}?subject=${encodeURIComponent(form.subject || 'Portfolio Inquiry')}&body=${encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`)}`;
      window.open(mailto, '_blank');
      setSubmitted(true);
      setLoading(false);
    }, 800);
  };

  return (
    <section
      id="contact"
      className={`py-24 ${isDark ? 'bg-dark-surface' : 'bg-white'}`}
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div ref={headerRef} className="reveal text-center mb-16">
          <p className="section-subtitle">// let's talk</p>
          <h2 className={`section-title ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className={`mt-4 max-w-xl mx-auto text-sm leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            Have a project in mind or want to collaborate? I'd love to hear from you.
            Drop a message and I'll get back within 24 hours.
          </p>
        </div>

        <div ref={contentRef} className="reveal grid lg:grid-cols-5 gap-12">
          {/* Left — Contact Info */}
          <div className="lg:col-span-2 space-y-6">
            <div className={`p-6 rounded-2xl border ${isDark ? 'bg-dark-card border-dark-border' : 'bg-light-card border-light-border'}`}>
              <div className="flex items-center gap-3 mb-4">
                <MapPin size={16} className={isDark ? 'text-neon-blue' : 'text-blue-500'} />
                <div>
                  <p className={`font-mono text-xs ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>Based in</p>
                  <p className={`font-mono text-sm font-semibold ${isDark ? 'text-white' : 'text-gray-800'}`}>India · Remote Worldwide</p>
                </div>
              </div>
              <div className={`font-mono text-xs px-3 py-2 rounded-lg ${isDark ? 'bg-neon-green/10 text-neon-green border border-neon-green/20' : 'bg-green-50 text-green-600 border border-green-200'}`}>
                🟢 Currently available for new projects
              </div>
            </div>

            <div className="space-y-3">
              {socials.map(({ icon: Icon, label, value, href, color }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-4 p-4 rounded-xl border transition-all duration-300 card-hover ${
                    isDark
                      ? `bg-dark-card border-dark-border text-gray-400 ${color}`
                      : `bg-white border-light-border text-gray-500 hover:border-gray-300`
                  }`}
                >
                  <Icon size={18} />
                  <div>
                    <p className={`font-mono text-xs ${isDark ? 'text-gray-600' : 'text-gray-400'}`}>{label}</p>
                    <p className="font-mono text-sm font-medium">{value}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Right — Form */}
          <div className="lg:col-span-3">
            <div className={`p-8 rounded-2xl border ${isDark ? 'bg-dark-card border-dark-border' : 'bg-white border-light-border shadow-lg'}`}>
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-12 gap-4">
                  <CheckCircle size={48} className="text-neon-green" />
                  <h3 className={`font-mono text-xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>Message Sent!</h3>
                  <p className={`font-mono text-sm text-center ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                    Your mail client has opened. I'll get back to you shortly.
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setForm({ name: '', email: '', subject: '', message: '' }); }}
                    className="btn-primary mt-2"
                  >
                    Send Another
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    {[
                      { name: 'name', label: 'Your Name', placeholder: 'Priya Gupta', type: 'text' },
                      { name: 'email', label: 'Email Address', placeholder: 'you@example.com', type: 'email' },
                    ].map(({ name, label, placeholder, type }) => (
                      <div key={name}>
                        <label className={`block font-mono text-xs mb-2 ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>
                          {label} *
                        </label>
                        <input
                          type={type}
                          name={name}
                          value={form[name]}
                          onChange={handleChange}
                          placeholder={placeholder}
                          required
                          className={`w-full px-4 py-3 rounded-lg border font-mono text-sm outline-none transition-all duration-200 focus:ring-2 focus:ring-neon-blue/30 focus:border-neon-blue ${
                            isDark
                              ? 'bg-dark-bg border-dark-border text-white placeholder-gray-600'
                              : 'bg-light-bg border-light-border text-gray-900 placeholder-gray-400'
                          }`}
                        />
                      </div>
                    ))}
                  </div>

                  <div>
                    <label className={`block font-mono text-xs mb-2 ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      placeholder="Project inquiry, Collaboration..."
                      className={`w-full px-4 py-3 rounded-lg border font-mono text-sm outline-none transition-all duration-200 focus:ring-2 focus:ring-neon-blue/30 focus:border-neon-blue ${
                        isDark
                          ? 'bg-dark-bg border-dark-border text-white placeholder-gray-600'
                          : 'bg-light-bg border-light-border text-gray-900 placeholder-gray-400'
                      }`}
                    />
                  </div>

                  <div>
                    <label className={`block font-mono text-xs mb-2 ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project..."
                      rows={5}
                      required
                      className={`w-full px-4 py-3 rounded-lg border font-mono text-sm outline-none transition-all duration-200 focus:ring-2 focus:ring-neon-blue/30 focus:border-neon-blue resize-none ${
                        isDark
                          ? 'bg-dark-bg border-dark-border text-white placeholder-gray-600'
                          : 'bg-light-bg border-light-border text-gray-900 placeholder-gray-400'
                      }`}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-secondary w-full flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {loading ? (
                      <>
                        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={15} />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
