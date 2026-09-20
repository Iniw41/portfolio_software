# Francis Rainier C. Cutamora — Portfolio Website


---

## Color Scheme

All colors are defined as CSS custom properties in `src/index.css`.
To change the color scheme, update the `:root` block in that file.

| Variable            | Hex       | Used For                                  |
|---------------------|-----------|-------------------------------------------|
| `--Color-Dark`      | `#091540` | Headings, navbar text, footer background  |
| `--Color-Primary`   | `#1B2CC1` | Buttons, accents, links                   |
| `--Color-Mid`       | `#7692FF` | Tags, secondary elements, decorations     |
| `--Color-Light`     | `#ABD2FA` | Badges, borders, soft backgrounds         |
| `--Color-White`     | `#ffffff` | Page background                           |
| `--Color-Gray`      | `#c4c4c4` | Body text, subtle labels                  |

---x

## Animations

Animations are defined in `src/index.css`:

| Class                   | Effect                                         |
|-------------------------|------------------------------------------------|
| `.animate-float`        | Gentle floating up/down (decorative shapes)    |
| `.animate-slide-up`     | Slide in from below on page load (hero text)   |
| `.animate-slide-up-delay` | Same, but with a 0.2s delay (hero photo)     |
| `.animate-on-scroll`    | Fade in from below when scrolled into view     |

Scroll animations are activated in `src/App.tsx` using the `IntersectionObserver` API.
Add the class `animate-on-scroll` to any element you want to animate on scroll.


## Tech Stack

- **React 19** — UI component library
- **TypeScript 5.7** — Type-safe JavaScript
- **Vite 8** — Build tool and dev server
- **Tailwind CSS v4** — Utility-first CSS framework
- **HTML5 / CSS3** — Underlying web standards

---

## Naming Convention

This project uses **PascalCase** for all component names, variables, constants, and function names inside component files, as per the project's coding style.

---

*Portfolio of Francis Rainier C. Cutamora — Computer Engineering Student, CIT-U Cebu*


# React + TypeScript + Vite

---

# This part is automated when the project was created i ain't gonaa remove this rn

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
