# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- Install dependencies: `npm install`
- Start development server: `npm run dev` (runs Vite dev server at http://localhost:5173)
- Build for production: `npm run build` (outputs to `dist/` directory)
- Preview production build: `npm run preview` (serves the built app locally)

Note: This project does not have configured linting or testing scripts. If needed, you can add ESLint, Prettier, or Vitest configurations.

## Project Architecture

### Entry Point
- `src/main.jsx`: Bootstrap React application using `ReactDOM.createRoot` with `<App />` wrapped in `React.StrictMode`.

### Main Application
- `src/App.jsx`: Assembles the complete page by importing and rendering layout components in sequence:
  1. `CanvasBackground` - Animated particle background
  2. `Nav` - Sticky pill navigation
  3. `Hero` - Introduction section
  4. `Now` - Current status/activities section
  5. `Projects` - Portfolio items display
  6. `Experience` - Work history section
  7. `OffScreen` - Additional information section
  8. `Contact` - Contact form and details
  9. `Footer` - Page footer

### Component Structure
All UI components reside in `src/components/` and follow these patterns:
- Each component is a React functional component exporting as default
- Components receive no props (static content) and manage their own internal state if needed (e.g., animations)
- Styling is primarily handled through global CSS in `src/index.css` with CSS custom properties

### Styling
- Global stylesheet: `src/index.css` contains:
  - CSS custom properties (--bg, --ink, etc.) for theming
  - Base reset and typography
  - Layout rules for sections and components
  - Specific class styles for experience-section (`.exp-header`, `.exp-item`, etc.)
  - Responsive design adaptations
- The design follows the original Priya Anand portfolio visual specification

### Key Files
- `src/index.css`: Global styles and design tokens
- `src/App.jsx`: Main application layout
- `src/main.jsx`: Application bootstrap
- `./portfolio/Priya Anand — Portfolio.html`: Original reference design (for comparison)

### Development Notes
- The project uses Vite with React plugin for fast development
- Components are designed to be self-contained with minimal prop drilling
- Animations (particularly in CanvasBackground) use React `useEffect` and `useState` for canvas manipulation
- Safe area handling is implemented via CSS `env()` variables as in the original