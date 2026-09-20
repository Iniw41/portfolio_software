// AboutSection.tsx
// Bio, education, and skills.
// Edit AboutText, EducationList, or SkillsList to update content.

const AboutText =
  "I'm Francis Rainier C. Cutamora, a Computer Engineering student currently enrolled at Cebu Institute of Technology – University (CIT-U). I started my academic journey at Southern Leyte State University (SLSU) before transferring to CIT-U to further pursue my passion in computing and software development.";

const AboutText2 =
  "I enjoy building practical projects ranging from medical systems and chat apps to game jam entries and assembly-level games. I'm always looking for opportunities to grow, compete, and collaborate with like-minded developers.";

const SkillsList = [
  "C / C++", "Python", "JavaScript", "HTML & CSS",
  "React", "Assembly (ASM)", "Git & GitHub",
  "Tailwind CSS", "Game Development",
];

const EducationList = [
  {
    School: "Cebu Institute of Technology – University (CIT-U)",
    Degree: "Bachelor of Science in Computer Engineering",
    Status: "Current",
  },
  {
    School: "Southern Leyte State University (SLSU)",
    Degree: "Bachelor of Science in Computer Engineering",
    Status: "Transferred",
  },
];

export default function AboutSection() {
  return (
    <section id="About" className="py-24" style={{ background: "var(--Color-Bg)" }}>
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading Label="About Me" />

        <div className="grid md:grid-cols-2 gap-16 mt-12">
          {/* Bio + Education */}
          <div className="animate-on-scroll">
            <p className="text-sm md:text-base leading-relaxed mb-4" style={{ color: "var(--Color-Dark)" }}>
              {AboutText}
            </p>
            <p className="text-sm md:text-base leading-relaxed" style={{ color: "var(--Color-Gray)" }}>
              {AboutText2}
            </p>

            <div className="mt-8">
              <h3
                className="text-sm font-semibold uppercase tracking-widest mb-4"
                style={{ color: "var(--Color-Primary)" }}
              >
                Education
              </h3>
              <div className="flex flex-col gap-4">
                {EducationList.map((Edu) => (
                  <div key={Edu.School} className="border-l-2 pl-4" style={{ borderColor: "var(--Color-Light)" }}>
                    <p className="text-sm font-semibold" style={{ color: "var(--Color-Dark)" }}>
                      {Edu.School}
                    </p>
                    <p className="text-xs mt-0.5" style={{ color: "var(--Color-Gray)" }}>
                      {Edu.Degree}
                    </p>
                    <span
                      className="inline-block text-xs px-2 py-0.5 mt-1 font-medium"
                      style={{
                        background: Edu.Status === "Current" ? "var(--Color-Light)" : "var(--Color-Border)",
                        color: "var(--Color-Dark)",
                      }}
                    >
                      {Edu.Status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Skills */}
          <div className="animate-on-scroll" style={{ transitionDelay: "80ms" }}>
            <h3
              className="text-sm font-semibold uppercase tracking-widest mb-6"
              style={{ color: "var(--Color-Primary)" }}
            >
              Skills & Technologies
            </h3>
            <div className="flex flex-wrap gap-3">
              {SkillsList.map((Skill) => (
                <span
                  key={Skill}
                  className="px-4 py-2 text-xs font-medium border transition-all duration-200 hover:-translate-y-0.5 cursor-default"
                  style={{ borderColor: "var(--Color-Mid)", color: "var(--Color-Primary)", background: "var(--Color-CardBg)" }}
                >
                  {Skill}
                </span>
              ))}
            </div>

            <div className="mt-10">
              <a
                href="https://github.com/Iniw41"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium transition-opacity duration-200 hover:opacity-70"
                style={{ color: "var(--Color-Dark)" }}
              >
                <GitHubIcon />
                github.com/Iniw41
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Reusable section heading — imported by other section components
export function SectionHeading({ Label }: { Label: string }) {
  return (
    <div className="flex items-center gap-4">
      <div className="w-8 h-0.5" style={{ background: "var(--Color-Primary)" }} />
      <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight" style={{ color: "var(--Color-Dark)" }}>
        {Label}
      </h2>
    </div>
  );
}

function GitHubIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
  );
}
