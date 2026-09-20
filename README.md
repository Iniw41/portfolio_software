Francis Rainier C. Cutamora — Portfolio Website
Personal portfolio for Francis Rainier C. Cutamora, a Computer Engineering student at Cebu Institute of Technology – University (CIT-U).

Built with React + Vite + TypeScript + Tailwind CSS v4.

Project Structure
/
├── backend/                    ← Reserved for future backend services (currently empty)
│   └── README.md               ← Notes on what goes here when a backend is needed
│
├── src/                        ← All application source code
│   ├── assets/                 ← Static images used in the site
│   │   ├── ProfilePhoto.png    ← Francis's profile photo (displayed in the Hero section)
│   │   ├── certificates/
│   │   │   └── DevconCertificate.png   ← DEVCON AI & Blockchain Code Camp certificate
│   │   └── awards/
│   │       └── CprogrammingAward.png   ← 1st Runner Up, C Programming Competition
│   │
│   ├── frontend/               ← All UI components (one file per section)
│   │   └── components/
│   │       ├── NavBar.tsx          ← Fixed top navigation bar with smooth-scroll links
│   │       ├── HeroSection.tsx     ← Full-height hero with name, title, photo, and CTAs
│   │       ├── AboutSection.tsx    ← Bio text, education timeline, and skills grid
│   │       ├── ProjectsSection.tsx ← GitHub project cards (edit ProjectsList to update)
│   │       ├── AwardsSection.tsx   ← Award and certificate cards (edit AwardsList to update)
│   │       ├── ContactSection.tsx  ← Social media links with icons (edit SocialLinks to update)
│   │       └── FooterSection.tsx   ← Footer with quick nav, social icons, and copyright
│   │
│   ├── App.tsx         ← Root component — imports and arranges all sections
│   ├── index.css       ← Global CSS: Tailwind import, design tokens, animation keyframes
│   └── main.tsx        ← React entry point — mounts App into #root
│
├── index.html          ← Vite HTML shell containing the #root div
├── vite.config.ts      ← Vite build configuration (React plugin, Tailwind, path aliases)
├── package.json        ← Project dependencies and npm scripts
└── README.md           ← This file
Color Scheme
All colors are defined as CSS custom properties in src/index.css. To change the color scheme, update the :root block in that file.

Variable	Hex	Used For
--Color-Dark	#091540	Headings, navbar text, footer background
--Color-Primary	#1B2CC1	Buttons, accents, links
--Color-Mid	#7692FF	Tags, secondary elements, decorations
--Color-Light	#ABD2FA	Badges, borders, soft backgrounds
--Color-White	#ffffff	Page background
--Color-Gray	#c4c4c4	Body text, subtle labels
How to Edit Common Things
Change your name or intro text
Open src/frontend/components/HeroSection.tsx and edit:

const HeroTitle = "Francis Rainier C. Cutamora";
const HeroSubtitle = "Computer Engineering Student";
const HeroDescription = "...";
Add or remove a project
Open src/frontend/components/ProjectsSection.tsx and add/remove entries in ProjectsList:

{
  Title: "My New Project",
  Description: "What it does.",
  RepoUrl: "https://github.com/Iniw41/my-new-repo",
  Tags: ["Web", "React"],
  Status: "In Progress",  // or "Semi-Complete"
}
Add a new award or certificate
Open src/frontend/components/AwardsSection.tsx:

Copy your image into src/assets/certificates/ or src/assets/awards/
Import it at the top of the file
Add an entry to AwardsList
Update social links
Open src/frontend/components/ContactSection.tsx and edit the Url in SocialLinks.

Add or remove nav items
Open src/frontend/components/NavBar.tsx and edit NavLinks.

Change the profile photo
Replace src/assets/ProfilePhoto.png with your new photo (keep the same filename), or:

Add a new image to src/assets/
Update the import in src/frontend/components/HeroSection.tsx
Animations
Animations are defined in src/index.css:

Class	Effect
.animate-float	Gentle floating up/down (decorative shapes)
.animate-slide-up	Slide in from below on page load (hero text)
.animate-slide-up-delay	Same, but with a 0.2s delay (hero photo)
.animate-on-scroll	Fade in from below when scrolled into view
Scroll animations are activated in src/App.tsx using the IntersectionObserver API. Add the class animate-on-scroll to any element you want to animate on scroll.

Development
A Vite dev server is already running. Changes to any .tsx or .css file are reflected instantly in the preview.

# Install dependencies (if needed)
pnpm install

# The dev server is already running — no need to start it manually.
# If for some reason you need to start it:
pnpm dev
Tech Stack
React 19 — UI component library
TypeScript 5.7 — Type-safe JavaScript
Vite 8 — Build tool and dev server
Tailwind CSS v4 — Utility-first CSS framework
HTML5 / CSS3 — Underlying web standards
Naming Convention
This project uses PascalCase for all component names, variables, constants, and function names inside component files, as per the project's coding style.

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])

```

You can also install [eslint-plugin-react-x](https://npmx.dev/package/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://npmx.dev/package/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])

```
