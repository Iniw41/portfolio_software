// NavBar.tsx
// Fixed top navigation bar — nav links + dark mode toggle button.
// The toggle fires the wipe-up animation defined in App.tsx.
// To add nav items: add an object to NavLinks below.

import { useState, useEffect } from "react";
import { UseTheme } from "../ThemeContext";

const NavLinks = [
  { Label: "Home", Href: "#Home" },
  { Label: "About", Href: "#About" },
  { Label: "Projects", Href: "#Projects" },
  { Label: "Awards", Href: "#Awards" },
  { Label: "Contact", Href: "#Contact" },
];

export default function NavBar() {
  const [IsScrolled, SetIsScrolled] = useState(false);
  const [IsMenuOpen, SetIsMenuOpen] = useState(false);
  const { IsDarkMode, ToggleDarkMode } = UseTheme();

  useEffect(() => {
    const HandleScroll = () => SetIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", HandleScroll);
    return () => window.removeEventListener("scroll", HandleScroll);
  }, []);

  const HandleNavClick = (Href: string) => {
    SetIsMenuOpen(false);
    document.querySelector(Href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-sm"
      style={{
        background: IsScrolled ? "var(--Color-NavBg)" : "var(--Color-NavBgAlt)",
        boxShadow: IsScrolled ? "0 2px 12px rgba(9,21,64,0.08)" : "none",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => HandleNavClick("#Home")}
          className="text-xl font-bold tracking-tight"
          style={{ color: "var(--Color-Dark)" }}
        >
          FRC<span style={{ color: "var(--Color-Primary)" }}>.</span>
        </button>

        {/* Desktop nav links */}
        <ul className="hidden md:flex gap-8 items-center">
          {NavLinks.map((Link) => (
            <li key={Link.Label}>
              <button
                onClick={() => HandleNavClick(Link.Href)}
                className="text-sm font-medium transition-opacity duration-200 hover:opacity-60"
                style={{ color: "var(--Color-Dark)" }}
              >
                {Link.Label}
              </button>
            </li>
          ))}

          {/* Dark mode toggle — desktop */}
          <li>
            <DarkModeButton IsDarkMode={IsDarkMode} OnClick={ToggleDarkMode} />
          </li>
        </ul>

        {/* Mobile: dark mode toggle + hamburger */}
        <div className="md:hidden flex items-center gap-3">
          <DarkModeButton IsDarkMode={IsDarkMode} OnClick={ToggleDarkMode} />
          <button
            className="flex flex-col gap-1.5 p-1"
            onClick={() => SetIsMenuOpen(!IsMenuOpen)}
            aria-label="Toggle menu"
          >
            <span
              className={`block w-6 h-0.5 transition-all duration-300 ${IsMenuOpen ? "rotate-45 translate-y-2" : ""}`}
              style={{ background: "var(--Color-Dark)" }}
            />
            <span
              className={`block w-6 h-0.5 transition-all duration-300 ${IsMenuOpen ? "opacity-0" : ""}`}
              style={{ background: "var(--Color-Dark)" }}
            />
            <span
              className={`block w-6 h-0.5 transition-all duration-300 ${IsMenuOpen ? "-rotate-45 -translate-y-2" : ""}`}
              style={{ background: "var(--Color-Dark)" }}
            />
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${IsMenuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"}`}
        style={{ background: "var(--Color-Bg)" }}
      >
        <ul className="px-6 pb-4 flex flex-col gap-4">
          {NavLinks.map((Link) => (
            <li key={Link.Label}>
              <button
                onClick={() => HandleNavClick(Link.Href)}
                className="text-sm font-medium w-full text-left"
                style={{ color: "var(--Color-Dark)" }}
              >
                {Link.Label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

// Dark mode toggle button — shows a sun icon in dark mode, moon in light mode.
// Clicking it calls ToggleDarkMode which triggers the wipe animation.
function DarkModeButton({ IsDarkMode, OnClick }: { IsDarkMode: boolean; OnClick: () => void }) {
  return (
    <button
      onClick={OnClick}
      aria-label={IsDarkMode ? "Switch to light mode" : "Switch to dark mode"}
      title={IsDarkMode ? "Light mode" : "Dark mode"}
      className="relative w-10 h-6 rounded-full border-2 transition-all duration-500 flex items-center"
      style={{
        background: IsDarkMode ? "var(--Color-Primary)" : "transparent",
        borderColor: "var(--Color-Primary)",
      }}
    >
      {/* Sliding knob with icon */}
      <span
        className="absolute w-4 h-4 rounded-full flex items-center justify-center transition-all duration-500 text-xs"
        style={{
          left: IsDarkMode ? "calc(100% - 18px)" : "2px",
          background: IsDarkMode ? "#ffffff" : "var(--Color-Primary)",
        }}
      >
        {IsDarkMode ? "☀" : "🌙"}
      </span>
    </button>
  );
}
