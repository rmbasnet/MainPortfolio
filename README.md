# Priya Anand Portfolio (React Version)

This is a React recreation of Priya Anand's portfolio website.

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Build for production:
   ```bash
   npm run build
   ```

## Technologies

- React 19
- Vite
- CSS (original styles preserved)

## Project Structure

- `src/components/` - Contains all UI components
- `src/index.css` - Global CSS (copied from original HTML)
- `src/main.jsx` - Entry point
- `src/App.jsx` - Main app component

## Components

- `CanvasBackground` - Animated background with particles and dot grid
- `Nav` - Sticky pill navigation
- `Hero` - Hero section
- `Now` - "Now" section
- `Projects` - Projects section with cards
- `Experience` - Experience section
- `OffScreen` - Off screen section
- `Contact` - Contact section
- `Footer` - Footer

## Notes

- The original HTML file is preserved in `./portfolio/Priya Anand — Portfolio.html`
- This React app aims to replicate the visual design and interactions as closely as possible.
- The background canvas effect is reproduced using React useEffect hooks.
- Safe area insets are handled via CSS env() variables as in the original.