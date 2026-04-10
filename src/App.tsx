import { BrowserRouter, Routes, Route } from 'react-router-dom'
import About from './components/pages/About.tsx';
import Experience from './components/pages/Experience.tsx';
import LandingPage from './components/pages/LandingPage.tsx';
import Skills from './components/pages/Skills';
import Projects from './components/pages/Projects';
import Denouement from './components/pages/Denouement.tsx';
import './App.css';
import { MysteryContentProvider } from './components/context/MysteryContext.tsx';
import { TransitionProvider } from "./components/context/TransitionContext.tsx";
import CircleTransition from "./components/context/CircleTransition";

const data = {
  about: "Front-end focused full-stack developer with a B.S. degree in computer science and experience building React/NodeJs applications including real-time multiplayer games, interactive visualizations,and full-stack CRUD apps. I combine technical execution with strong communication skills developed through teaching coding and robotics - mentoring students through debugging workflows and iterative development cycles. Passionate about creating engaging user experiences and contributing to collaborative engineering teams.",
  skills: [
    "React",
    "Node.js",
    "TypeScript",
    "Python",
    "Javascript",
    "Postgresql",
    "HTML + CSS",
    "Figma",
    "Git",
  ],
  experience: [
    {
      title: "Coding and Robotics Instructor/Technology Support Specialist",
      company: "New Design High School",
      period: "2023 - Present",
      bullets: [
        "Designed and delivered project-based robotics curriculum teaching core programming concepts (loops, conditionals, event-driven programming) through Sphero BOLT platforms",
        "Mentored students through systematic debugging workflows and iterative development cycles, applying Agile-inspired methodologies to reinforce problem-solving frameworks used in professional software development",
        "Developed automated absence tracking system syncing staff schedules to centralized calendars, eliminating manual data entry for 50+ staff members",
        "Engineered Google Apps Script automation consolidating data from 10+ spreadsheets to generate 400+ individualized progress reports with conditional formatting, custom templates, and automated email distribution - eliminating 13+ hours of manual work per reporting cycle",
      ],
    },
  ],
  projects: [
    {
      name: "numBRR",
      description: "Browser-Based Multiplayer Auto-Battler Game",
      period: "2025",
      bullets: [
        "Developed real-time client-server synchronization using Socket.IO’s event-driven architecture, with React (TypeScript) for state management via custom hooks and Context API to reduce latency",
        "Implemented scalable matchmaking on Node.js/Socket.IO (Render) using room partitioning and targeted event broadcasting to support 200+ concurrent users",
        "Formulated a template-driven item system using weighted randomness and parametric inheritance, reducing new feature prototyping time by 60% while driving a 30% improvement in user engagement via level-based drop rates",
        "Optimized UI with React hooks and prioritized visual hierarchy, cutting first-time user errors by 50%",
      ],
      stack: [
        "React",
        "TypeScript",
        "Node.js",
        "Render",
        "Socket.IO",
        "Sass",
      ],
      links: {
        github: "https://github.com/git-richardwu/num-brrr",
        demo: "https://num-brrr.onrender.com/",
      },
    },
    {
      name: "feed the cat.",
      description:
        "Fast-paced browser game that involves accurately preparing and delivering dishes to feline patrons",
      period: "2023",
      bullets: [
        "Wrote the game's logic in React and TypeScript to efficiently update components and assets, optimizing overall responsiveness and fluidity of gameplay loop",
        "Configured random sequence and position generation along with a retentive scoring system to increase player engagement",
        "Incorporated minimalist interface with animations to provide visual feedback and readability",
        "Leveraged the benefits of TypeScript's static typing to allow for smooth integration with React, improving code reliability and maintainability",
      ],
      stack: ["React", "TypeScript", "Sass"],
      links: {
        github: "https://github.com/git-richardwu/feed-the-cats",
        demo: "https://git-richardwu.github.io/feed-the-cats/",
      },
    },
    {
      name: "Collaj",
      description:
        "MERN-based web application of a dynamic art gallery that sorts entries by hue",
      period: "2022",
      bullets: [
        "Deployed a RESTful API using Express/Node.js for seamless CRUD operations, leveraging MongoDB for efficient data storage and retrieval",
        "Automated artwork data collection using Puppeteer to scrape and parse dynamic web content (titles, artist names, URLs) via DOM traversal",
        "Secured user sessions via JWT (JSON Web Tokens)/BCrypt authentication and encrypted data storage",
        "Validated API reliability with Mocha/Chai test suites for performance and edge-case handling",
      ],
      stack: [
        "MongoDB",
        "Express",
        "Node.js",
        "React",
        "Render",
        "Javascript",
      ],
      links: {
        github: "https://github.com/git-richardwu/Collaj",
        demo: "https://collaj.onrender.com/",
      },
    },
  ],
  education: [
    {
      degree: "B.S. in Computer Science",
      school: "University at Buffalo",
    },
  ],
  contact: {
    contact: {
      email: "",
      github: "",
      linkedin: "",
    },
  },
};

function App() {
  return (
    <MysteryContentProvider>
      <TransitionProvider>
      <CircleTransition />
      <BrowserRouter basename="/personal-website/">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<About data={data.about} />} />
          <Route path="/experience" element={<Experience data={data.experience}/>} />
          <Route path="/skills" element={<Skills data={data.skills}/>} />
          <Route path="/projects" element={<Projects data={data.projects}/>} />
          <Route path="/denouement" element={<Denouement />} />
        </Routes>
      </BrowserRouter>
      </TransitionProvider>
    </MysteryContentProvider>
  );
}

export default App
