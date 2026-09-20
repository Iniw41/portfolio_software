// AwardsSection.tsx
// Awards and certificate display.
// To add new items: add an entry to AwardsList and import the image.

import DevconCertificate from "@/assets/certificates/DevconCertificate.png";
import CprogrammingAward from "@/assets/awards/CprogrammingAward.jpg";
import { SectionHeading } from "./AboutSection";

const AwardsList = [
  {
    Type: "Award",
    Title: "1st Runner Up — C Programming Competition",
    Event: "5th Regional Convention & CPE Challenge",
    Organization: "ICPEP-SE Southern Leyte State University Student Chapter",
    Date: "2024",
    Image: CprogrammingAward,
  },
  {
    Type: "Certificate",
    Title: "Certificate of Attendance",
    Event: "Chain of Thought: An AI and Blockchain Code Camp",
    Organization: "DEVCON Iloilo × DEVCON Cebu × GDG University of San Carlos",
    Date: "November 29, 2025",
    Image: DevconCertificate,
  },
];

export default function AwardsSection() {
  return (
    <section id="Awards" className="py-24" style={{ background: "var(--Color-Bg)" }}>
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading Label="Awards & Certificates" />
        <p className="mt-3 text-sm" style={{ color: "var(--Color-Gray)" }}>
          Recognitions and learning milestones along the journey.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mt-12">
          {AwardsList.map((Award, Index) => (
            <AwardCard key={Award.Title} Award={Award} Index={Index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function AwardCard({ Award, Index }: { Award: (typeof AwardsList)[0]; Index: number }) {
  return (
    <div
      className="border overflow-hidden animate-on-scroll transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
      style={{
        borderColor: "var(--Color-Border)",
        background: "var(--Color-CardBg)",
        transitionDelay: `${Index * 100}ms`,
      }}
    >
      <div className="relative overflow-hidden" style={{ height: "220px" }}>
        <img
          src={Award.Image}
          alt={Award.Title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
        <div className="absolute top-3 left-3">
          <span
            className="text-xs font-semibold px-3 py-1 uppercase tracking-widest"
            style={{
              background: Award.Type === "Award" ? "var(--Color-Primary)" : "var(--Color-Mid)",
              color: "#ffffff",
            }}
          >
            {Award.Type}
          </span>
        </div>
      </div>

      <div className="p-5">
        <h3 className="text-sm font-bold mb-1" style={{ color: "var(--Color-Dark)" }}>
          {Award.Title}
        </h3>
        <p className="text-xs font-medium mb-2" style={{ color: "var(--Color-Primary)" }}>
          {Award.Event}
        </p>
        <p className="text-xs" style={{ color: "var(--Color-Gray)" }}>
          {Award.Organization}
        </p>
        <p className="text-xs mt-2 font-medium" style={{ color: "var(--Color-Mid)" }}>
          {Award.Date}
        </p>
      </div>
    </div>
  );
}
