// ProjectsSection.tsx
// GitHub project cards.
// To add/remove projects: edit ProjectsList below.

import { SectionHeading } from "./AboutSection";

const ProjectsList = [
  {
    Title: "Medical Appointment System",
    Description: "A web-based medical appointment management system for scheduling and tracking patient appointments with healthcare providers.",
    RepoUrl: "https://github.com/Iniw41/Medicalappointmentsystem",
    Tags: ["Healthcare", "Web App", "Database"],
    Status: "In Progress",
  },
  {
    Title: "Game Jam Competition",
    Description: "A game created for a game jam competition. Fast-paced development showcasing creative game design under time constraints.",
    RepoUrl: "https://github.com/Iniw41/GameJamComp",
    Tags: ["Game Dev", "Game Jam", "Creative"],
    Status: "Semi-Complete",
  },
  {
    Title: "Student Help",
    Description: "A student assistance platform designed to help students access resources, connect with peers, and find academic support tools.",
    RepoUrl: "https://github.com/Iniw41/Student_Help",
    Tags: ["Education", "Platform", "Web"],
    Status: "In Progress",
  },
  {
    Title: "Project Sof",
    Description: "A software engineering project exploring various development methodologies and building practical applications.",
    RepoUrl: "https://github.com/Iniw41/Project_Sof",
    Tags: ["Software Eng.", "Academic"],
    Status: "Semi-Complete",
  },
  {
    Title: "SrEgg Portfolio",
    Description: "A creative personal portfolio project with a unique egg-inspired theme — experimenting with design and frontend development.",
    RepoUrl: "https://github.com/Iniw41/SrEgg-Portfolio",
    Tags: ["Portfolio", "Frontend", "Design"],
    Status: "Semi-Complete",
  },
  {
    Title: "ASM Game",
    Description: "A game built in Assembly language — a low-level programming challenge demonstrating deep understanding of computer architecture.",
    RepoUrl: "https://github.com/Iniw41/ASM_GAME",
    Tags: ["Assembly", "Low-Level", "Game"],
    Status: "Semi-Complete",
  },
  {
    Title: "Biniw Chat",
    Description: "A real-time chat application with a clean interface, enabling users to communicate instantly in a lightweight environment.",
    RepoUrl: "https://github.com/Iniw41/Biniw-Chat",
    Tags: ["Chat App", "Real-time", "Web"],
    Status: "In Progress",
  },
  {
    Title: "Iniw Game Project",
    Description: "An original game project exploring mechanics, level design, and interactive storytelling using modern game development tools.",
    RepoUrl: "https://github.com/Iniw41/iniw-game-project",
    Tags: ["Game Dev", "Original IP", "Design"],
    Status: "In Progress",
  },
];

export default function ProjectsSection() {
  return (
    <section id="Projects" className="py-24" style={{ background: "var(--Color-Surface)" }}>
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading Label="Projects" />
        <p className="mt-3 text-sm" style={{ color: "var(--Color-Gray)" }}>
          A collection of semi-completed and in-progress repositories from my GitHub.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mt-12">
          {ProjectsList.map((Project, Index) => (
            <ProjectCard key={Project.Title} Project={Project} Index={Index} />
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href="https://github.com/Iniw41"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium border px-6 py-2.5 transition-all duration-200 hover:opacity-80"
            style={{ borderColor: "var(--Color-Primary)", color: "var(--Color-Primary)" }}
          >
            View All on GitHub →
          </a>
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ Project, Index }: { Project: (typeof ProjectsList)[0]; Index: number }) {
  return (
    <a
      href={Project.RepoUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group block border p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg animate-on-scroll"
      style={{
        borderColor: "var(--Color-Border)",
        background: "var(--Color-CardBg)",
        animationDelay: `${Index * 60}ms`,
        transitionDelay: `${Index * 40}ms`,
      }}
    >
      <div className="flex items-start justify-between mb-3">
        <div className="p-2" style={{ background: "var(--Color-Surface)" }}>
          <RepoIcon />
        </div>
        <span
          className="text-xs px-2 py-0.5 font-medium"
          style={{
            background: Project.Status === "In Progress" ? "var(--Color-Light)" : "var(--Color-Border)",
            color: Project.Status === "In Progress" ? "var(--Color-Dark)" : "var(--Color-Mid)",
          }}
        >
          {Project.Status}
        </span>
      </div>

      <h3 className="text-sm font-bold mb-2 transition-colors duration-200" style={{ color: "var(--Color-Dark)" }}>
        {Project.Title}
      </h3>

      <p className="text-xs leading-relaxed mb-4 line-clamp-3" style={{ color: "var(--Color-Gray)" }}>
        {Project.Description}
      </p>

      <div className="flex flex-wrap gap-1.5">
        {Project.Tags.map((Tag) => (
          <span
            key={Tag}
            className="text-xs px-2 py-0.5 border"
            style={{ borderColor: "var(--Color-Light)", color: "var(--Color-Mid)" }}
          >
            {Tag}
          </span>
        ))}
      </div>
    </a>
  );
}

function RepoIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="var(--Color-Mid)">
      <path d="M3 3h18v18H3V3zm2 2v14h14V5H5zm2 2h10v2H7V7zm0 4h10v2H7v-2zm0 4h7v2H7v-2z" />
    </svg>
  );
}
