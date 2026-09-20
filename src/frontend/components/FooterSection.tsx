// FooterSection.tsx
// Page footer — logo, quick nav links, social icons, copyright.

const CurrentYear = new Date().getFullYear();

const FooterNavLinks = [
  { Label: "Home", Href: "#Home" },
  { Label: "About", Href: "#About" },
  { Label: "Projects", Href: "#Projects" },
  { Label: "Awards", Href: "#Awards" },
  { Label: "Contact", Href: "#Contact" },
];

const FooterSocials = [
  { Label: "Facebook", Url: "https://www.facebook.com/Yukki.kiriyame/", Type: "fb" },
  { Label: "LinkedIn", Url: "https://www.linkedin.com/in/francis-rainier-cutamora-1a3849342/", Type: "li" },
  { Label: "Instagram", Url: "https://www.instagram.com/furahsi/", Type: "ig" },
  { Label: "GitHub", Url: "https://github.com/Iniw41", Type: "gh" },
];

export default function FooterSection() {
  const ScrollTo = (Href: string) =>
    document.querySelector(Href)?.scrollIntoView({ behavior: "smooth" });

  return (
    <footer className="py-12 border-t" style={{ background: "#091540", borderColor: "#1B2CC1" }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Branding */}
          <div>
            <p className="text-xl font-extrabold" style={{ color: "#ffffff" }}>
              FRC<span style={{ color: "#7692FF" }}>.</span>
            </p>
            <p className="text-xs mt-1" style={{ color: "#ABD2FA" }}>
              Francis Rainier C. Cutamora
            </p>
          </div>

          {/* Quick links */}
          <ul className="flex flex-wrap justify-center gap-6">
            {FooterNavLinks.map((Link) => (
              <li key={Link.Label}>
                <button
                  onClick={() => ScrollTo(Link.Href)}
                  className="text-xs transition-opacity duration-200 hover:opacity-60"
                  style={{ color: "#ABD2FA" }}
                >
                  {Link.Label}
                </button>
              </li>
            ))}
          </ul>

          {/* Social icons */}
          <div className="flex gap-3">
            {FooterSocials.map((Social) => (
              <a
                key={Social.Label}
                href={Social.Url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={Social.Label}
                className="w-8 h-8 flex items-center justify-center border transition-all duration-200 hover:opacity-60 hover:-translate-y-0.5"
                style={{ borderColor: "#7692FF" }}
              >
                <MiniIcon Type={Social.Type} />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-6 border-t text-center" style={{ borderColor: "#1B2CC1" }}>
          <p className="text-xs" style={{ color: "#7692FF" }}>
            © {CurrentYear} Francis Rainier C. Cutamora. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

// Footer always stays dark navy regardless of theme — it's the anchor of the page
function MiniIcon({ Type }: { Type: string }) {
  const Fill = "#ABD2FA";
  if (Type === "fb") return <svg width="14" height="14" viewBox="0 0 24 24" fill={Fill}><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>;
  if (Type === "li") return <svg width="14" height="14" viewBox="0 0 24 24" fill={Fill}><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>;
  if (Type === "ig") return <svg width="14" height="14" viewBox="0 0 24 24" fill={Fill}><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg>;
  return <svg width="14" height="14" viewBox="0 0 24 24" fill={Fill}><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" /></svg>;
}
