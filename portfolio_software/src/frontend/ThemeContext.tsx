// ThemeContext.tsx
// Provides dark mode state and the toggle function to any component that needs it.
// Import UseTheme() in any component to read IsDarkMode or call ToggleDarkMode().

import { createContext, useContext } from "react";

interface ThemeContextType {
  IsDarkMode: boolean;
  ToggleDarkMode: () => void;
}

export const ThemeContext = createContext<ThemeContextType>({
  IsDarkMode: false,
  ToggleDarkMode: () => {},
});

export function UseTheme() {
  return useContext(ThemeContext);
}
