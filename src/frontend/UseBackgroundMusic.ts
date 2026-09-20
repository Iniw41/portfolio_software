// UseBackgroundMusic.ts
// Owns the single Audio object for the site's background music.
// Returns IsMusicOn (for the button icon) and ToggleMusic (for the click).

import { useState, useEffect, useRef, useCallback } from "react";
import BgmFile from "@/assets/Music/bgm.mp3"; // Import the background music file

export function UseBackgroundMusic() {
  const AudioRef = useRef<HTMLAudioElement | null>(null);
  const [IsMusicOn, SetIsMusicOn] = useState(false);

  useEffect(() => {
    const AudioEl = new Audio(BgmFile);
    AudioEl.loop = true;
    AudioEl.volume = 0.4; // 0.0 (silent) to 1.0 (full)
    AudioRef.current = AudioEl;

    // Browsers block sound until the visitor interacts with the page,
    // so start on the first click or key press anywhere.
    const StartMusic = () => {
      window.removeEventListener("click", StartMusic);
      window.removeEventListener("keydown", StartMusic);
      AudioEl.play().then(() => SetIsMusicOn(true)).catch(() => {});
    };
    window.addEventListener("click", StartMusic);
    window.addEventListener("keydown", StartMusic);

    return () => {
      window.removeEventListener("click", StartMusic);
      window.removeEventListener("keydown", StartMusic);
      AudioEl.pause();
    };
  }, []);

  const ToggleMusic = useCallback(() => {
    const AudioEl = AudioRef.current;
    if (!AudioEl) return;
    if (AudioEl.paused) {
      AudioEl.play().then(() => SetIsMusicOn(true)).catch(() => {});
    } else {
      AudioEl.pause();
      SetIsMusicOn(false);
    }
  }, []);

  return { IsMusicOn, ToggleMusic };
}