// ============================================================
// projects.js — Edit this file to update your project cards
// ============================================================

export const projects = [
  {
    id: 1,
    title: "Portfolio Website",
    description:
      "A personal portfolio showcasing my skills, projects, and experience. Built with clean HTML/CSS/JS with smooth scroll and responsive layout.",
    techStack: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],
    github: "https://github.com/priyagupta-js/Portfolio",
    live: "https://priyagupta-js.github.io/Portfolio/",
    featured: true,
    color: "blue",
  },
  {
    id: 2,
    title: "Expense Tracker",
    description:
      "A React-based expense tracker app to manage daily spending. Features include category filters, real-time balance updates, and persistent state.",
    techStack: ["ReactJS", "CSS3", "Bootstrap", "LocalStorage"],
    github: "https://github.com/priyagupta-js",
    live: "#",
    featured: true,
    color: "purple",
  },
  {
    id: 3,
    title: "Landing Page",
    description:
      "A pixel-perfect, fully responsive landing page built for a digital product. Includes hero section, feature highlights, and a CTA section.",
    techStack: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],
    github: "https://github.com/priyagupta-js",
    live: "#",
    featured: false,
    color: "cyan",
  },
];

// ============================================================
// skills.js — Edit this file to update your skills section
// ============================================================

export const skillCategories = [
  {
    id: "frontend",
    label: "Frontend",
    icon: "🎨",
    color: "blue",
    skills: [
      { name: "HTML5", level: 95 },
      { name: "CSS3", level: 90 },
      { name: "JavaScript", level: 85 },
      { name: "ReactJS", level: 82 },
      { name: "Tailwind CSS", level: 80 },
      { name: "Bootstrap", level: 88 },
    ],
  },
  {
    id: "backend",
    label: "Backend & DB",
    icon: "⚙️",
    color: "purple",
    skills: [
      { name: "Node.js", level: 70 },
      { name: "Express.js", level: 68 },
      { name: "MongoDB", level: 65 },
      { name: "MySQL", level: 72 },
      { name: "REST APIs", level: 75 },
    ],
  },
  {
    id: "tools",
    label: "Tools & Design",
    icon: "🛠️",
    color: "green",
    skills: [
      { name: "Git & GitHub", level: 85 },
      { name: "VS Code", level: 90 },
      { name: "Figma", level: 65 },
      { name: "Photoshop", level: 70 },
      { name: "Illustrator", level: 65 },
    ],
  },
];

// ============================================================
// experience.js — Edit this file to update your timeline
// ============================================================

export const experience = [
  {
    id: 1,
    year: "2024 – Present",
    role: "Freelance Web Developer",
    company: "Self-Employed",
    description:
      "Building responsive websites and web apps for clients. Specializing in React frontends and full-stack MERN projects.",
    type: "work",
  },
  {
    id: 2,
    year: "2023",
    role: "Frontend Developer Intern",
    company: "Tech Startup (Remote)",
    description:
      "Developed and maintained UI components using React and Bootstrap. Collaborated with design team to translate Figma mockups into production-ready code.",
    type: "work",
  },
  {
    id: 3,
    year: "2020 – 2024",
    role: "B.Tech – Computer Science",
    company: "University",
    description:
      "Graduated with strong foundations in Data Structures, Algorithms, DBMS, and Software Engineering.",
    type: "education",
  },
];

// ============================================================
// socialLinks — Update with your real URLs
// ============================================================

export const socialLinks = {
  github: "https://github.com/priyagupta-js",
  linkedin: "https://www.linkedin.com/in/priyagupta-js/",
  email: "mailto:priya@example.com",
  resumeUrl: "#", // Replace with your Google Drive or hosted PDF link
};
