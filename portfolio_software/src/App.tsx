// App.tsx
// Root application component — manages dark mode state, wipe animation, and
// assembles all page sections.
//
// Dark mode wipe mechanic:
//   1. User clicks the moon/sun button in the NavBar.
//   2. ToggleDarkMode() fires: a colored overlay (#091540 or #ffffff) animates
//      sliding UP from below the screen (WipeUp CSS keyframe).
//   3. At the midpoint of the animation (375ms), data-theme on the root div
//      flips — so the page beneath the overlay already matches the new theme.
//   4. The overlay continues upward and exits off the top of the screen.
//   5. The overlay loses its .is-animating class so it hides again.

import { useState, useEffect, useRef, useCallback } from "react";
import { ThemeContext } from "./frontend/ThemeContext";
import NavBar from "@/frontend/components/NavBar";
import HeroSection from "@/frontend/components/HeroSection";
import AboutSection from "@/frontend/components/AboutSection";
import ProjectsSection from "@/frontend/components/ProjectsSection";
import AwardsSection from "@/frontend/components/AwardsSection";
import ContactSection from "@/frontend/components/ContactSection";
import FooterSection from "@/frontend/components/FooterSection";

// Duration must match the WipeUp animation in index.css (0.75s = 750ms)
const WipeDuration = 750;

export default function App() {
  const [IsDarkMode, SetIsDarkMode] = useState(false);
  const [IsWiping, SetIsWiping] = useState(false);
  const OverlayRef = useRef<HTMLDivElement>(null);
  const ThemeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const CleanupTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Re-run IntersectionObserver after every render so newly-visible elements
  // that were hidden during a theme swap get their .is-visible class back.
  useEffect(() => {
    const Observer = new IntersectionObserver(
      (Entries) => {
        Entries.forEach((Entry) => {
          if (Entry.isIntersecting) Entry.target.classList.add("is-visible");
        });
      },
      { threshold: 0.12 }
    );
    document.querySelectorAll(".animate-on-scroll").forEach((El) => Observer.observe(El));
    return () => Observer.disconnect();
  }, [IsDarkMode]);

  // ToggleDarkMode — triggers the wipe-up sweep animation and flips the theme
  const ToggleDarkMode = useCallback(() => {
    if (IsWiping) return; // block double-clicks during animation

    SetIsWiping(true);

    const Overlay = OverlayRef.current;
    if (!Overlay) return;

    // Set the overlay to the incoming color:
    // going dark → overlay is the dark navy sweeping up
    // going light → overlay is white sweeping up
    Overlay.style.background = IsDarkMode ? "#ffffff" : "#091540";
    Overlay.classList.add("is-animating");

    // Flip the theme at the midpoint — while the overlay fully covers the screen
    ThemeTimeoutRef.current = setTimeout(() => {
      SetIsDarkMode((Prev) => !Prev);
    }, WipeDuration * 0.5);

    // Remove animation class after it completes
    CleanupTimeoutRef.current = setTimeout(() => {
      Overlay.classList.remove("is-animating");
      SetIsWiping(false);
    }, WipeDuration);
  }, [IsDarkMode, IsWiping]);

  // Cleanup timeouts on unmount
  useEffect(() => {
    return () => {
      if (ThemeTimeoutRef.current) clearTimeout(ThemeTimeoutRef.current);
      if (CleanupTimeoutRef.current) clearTimeout(CleanupTimeoutRef.current);
    };
  }, []);

  return (
    // data-theme attribute is read by the CSS [data-theme="dark"] selector
    <ThemeContext.Provider value={{ IsDarkMode, ToggleDarkMode }}>
      <div data-theme={IsDarkMode ? "dark" : "light"} style={{ background: "var(--Color-Bg)" }}>
        {/* Wipe overlay — sits in front of everything during the transition */}
        <div id="WipeOverlay" ref={OverlayRef} aria-hidden="true" />

        <NavBar />

        <main>
          <HeroSection />
          <AboutSection />
          <ProjectsSection />
          <AwardsSection />
          <ContactSection />
        </main>

        <FooterSection />
      </div>
    </ThemeContext.Provider>
  );
}
