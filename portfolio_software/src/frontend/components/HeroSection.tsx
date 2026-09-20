// HeroSection.tsx
// Full-height hero — name, subtitle, profile photo, and CTA buttons.
// Geometric decorative elements reference the "Berliner Ideenlabor" style.
// To change the intro text, edit HeroTitle, HeroSubtitle, or HeroDescription.

import ProfilePhoto from "@/assets/iniwFbPfp.jpg";

const HeroTitle = "Francis Rainier C. Cutamora";
const HeroSubtitle = "Computer Engineering Student";
const HeroDescription =
  "Crafting digital solutions one commit at a time. Passionate about software development, game design, and building tools that matter.";

export default function HeroSection() {
  const ScrollTo = (Href: string) =>
    document.querySelector(Href)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="Home"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: "var(--Color-Bg)" }}
    >
      {/* Decorative floating shapes */}
      <div
        className="absolute top-20 right-12 w-48 h-48 rounded-full opacity-20 animate-float"
        style={{ background: "var(--Color-Light)" }}
      />
      <div
        className="absolute top-32 right-40 w-24 h-24 opacity-10 rotate-12"
        style={{ background: "var(--Color-Primary)" }}
      />
      <div
        className="absolute bottom-20 left-8 w-32 h-32 rounded-full opacity-10"
        style={{ background: "var(--Color-Mid)" }}
      />

      {/* Plus cross decorations */}
      <PlusCross Style={{ top: "18%", left: "3%", color: "var(--Color-Primary)", opacity: 0.3 }} />
      <PlusCross Style={{ bottom: "22%", right: "4%", color: "var(--Color-Mid)", opacity: 0.25 }} />
      <PlusCross Style={{ top: "60%", left: "45%", color: "var(--Color-Light)", opacity: 0.2 }} />

      <div className="max-w-6xl mx-auto px-6 pt-24 pb-16 w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Left — text */}
          <div className="animate-slide-up">
            <p
              className="text-xs font-semibold tracking-widest uppercase mb-4"
              style={{ color: "var(--Color-Mid)" }}
            >
              Portfolio
            </p>

            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-4"
              style={{ color: "var(--Color-Dark)" }}
            >
              {HeroTitle}
            </h1>

            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-0.5" style={{ background: "var(--Color-Primary)" }} />
              <p className="text-base md:text-lg font-medium" style={{ color: "var(--Color-Primary)" }}>
                {HeroSubtitle}
              </p>
            </div>

            <p
              className="text-sm md:text-base leading-relaxed max-w-md mb-8"
              style={{ color: "var(--Color-Gray)" }}
            >
              {HeroDescription}
            </p>

            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => ScrollTo("#Contact")}
                className="px-7 py-3 text-sm font-semibold transition-all duration-200 hover:opacity-90 hover:-translate-y-0.5"
                style={{ background: "var(--Color-Primary)", color: "var(--Color-Bg)" }}
              >
                Get In Touch
              </button>
              <button
                onClick={() => ScrollTo("#Projects")}
                className="px-7 py-3 text-sm font-semibold border transition-all duration-200 hover:opacity-70 hover:-translate-y-0.5"
                style={{ borderColor: "var(--Color-Primary)", color: "var(--Color-Primary)" }}
              >
                View Projects
              </button>
            </div>
          </div>

          {/* Right — photo with geometric frame */}
          <div className="flex justify-center md:justify-end animate-slide-up-delay">
            <div className="relative">
              {/* Offset decorative border */}
              <div
                className="absolute -top-4 -left-4 w-full h-full border-2"
                style={{ borderColor: "var(--Color-Mid)" }}
              />
              {/* Soft color block */}
              <div
                className="absolute -bottom-4 -right-4 w-full h-full opacity-20"
                style={{ background: "var(--Color-Light)" }}
              />
              <img
                src={ProfilePhoto}
                alt="Francis Rainier C. Cutamora"
                className="relative z-10 w-64 h-64 md:w-80 md:h-80 object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function PlusCross({ Style }: { Style: React.CSSProperties }) {
  return (
    <div className="absolute text-3xl font-thin select-none pointer-events-none" style={Style}>
      +
    </div>
  );
}
