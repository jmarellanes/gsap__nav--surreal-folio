# GSAP Navigation - Surreal Folio

A bold, high-impact navigation concept featuring a fluid typographic menu. The reveal sequence is orchestrated with a reversible GSAP Timeline, complete with directional line animations and snappy playback control.

## Overview

This project showcases a modern navigation system with advanced animations powered by **GSAP** (GreenSock Animation Platform). The menu system includes:

- **Reversible GSAP Timeline**: Play and reverse menu animations with smooth controls
- **Directional Line Animations**: Animated underlines and accent lines that respond to menu state
- **Fluid Typographic Menu**: Staggered text reveals with elegant transitions
- **Scroll-Lock Integration**: Prevents body scroll when menu is open
- **Responsive Design**: Adapts typography and layout to all screen sizes

## Features

✨ **Advanced Animations**

- GSAP timeline-based orchestration
- Reversible animations with play/pause control
- Smooth staggered transitions
- Power easing curves for natural motion

🎨 **Modern Design**

- Custom typography (Flaviotte & Superduper fonts)
- Dark, elegant color palette
- Fluid menu overlay
- Responsive navigation layout

⚡ **Performance Optimized**

- Vite build tool with Rolldown bundler
- Font preloading for faster rendering
- Minimal JavaScript footprint
- Efficient DOM manipulation

🛠️ **Developer Experience**

- ESLint with modern config (Antfu preset)
- Hot Module Replacement (HMR)
- Module-based architecture
- Clean, maintainable code

## Tech Stack

- **Animation**: [GSAP](https://gsap.com/) v3.14.2
- **Build Tool**: [Vite](https://vitejs.dev/) with Rolldown
- **Linting**: ESLint 9.x with @antfu/eslint-config
- **Package Manager**: pnpm
- **Module System**: ES Modules

## Project Structure

```
.
├── index.html              # Main HTML entry point
├── src/
│   ├── scripts/
│   │   └── main.js        # GSAP timeline and event handlers
│   ├── styles/
│   │   ├── style.css      # Main stylesheet
│   │   └── fonts.css      # Font imports
│   └── assets/
│       ├── fonts/         # Custom font files (Flaviotte, Superduper)
│       └── images/        # Project images
├── public/                # Static assets (favicons, etc)
├── docs/                  # Documentation
├── package.json           # Project dependencies
├── eslint.config.mjs      # ESLint configuration
└── pnpm-lock.yaml         # Dependency lock file
```

## Getting Started

### Prerequisites

- Node.js 18+ (or latest LTS)
- pnpm 8+ (or npm/yarn)

### Installation

1. Clone the repository:

```bash
git clone https://github.com/jmarellanes/gsap__nav--surreal-folio.git
cd gsap__nav--surreal-folio
```

2. Install dependencies:

```bash
pnpm install
```

### Development

Start the development server with hot reload:

```bash
pnpm dev
```

The site will be available at `http://localhost:5173`

### Build

Create an optimized production build:

```bash
pnpm build
```

Preview the production build locally:

```bash
pnpm preview
```

## Scripts

| Script          | Purpose                           |
| --------------- | --------------------------------- |
| `pnpm dev`      | Start development server with HMR |
| `pnpm build`    | Create production-optimized build |
| `pnpm preview`  | Preview production build locally  |
| `pnpm lint`     | Run ESLint to check code quality  |
| `pnpm lint:fix` | Auto-fix ESLint issues            |

## How It Works

### Animation Flow

The project uses a single, reversible GSAP timeline to orchestrate the menu reveal sequence:

1. **Menu Overlay Appears**
   - Clip-path animation creates a wipe effect
   - Full-screen overlay fades into view

2. **Navigation Scale Down**
   - Top navigation bar scales down as menu opens
   - Maintains visual hierarchy

3. **Menu Items Reveal**
   - Menu links stagger in from bottom
   - Each item follows with a consistent delay

4. **Active Line Animation**
   - Animated underline reveals on the active menu item
   - Uses CSS custom properties for smooth animation

5. **Sub-Navigation Slide Up**
   - Additional navigation links appear at the bottom
   - Final sequence completes the reveal

### Key Components

**HTML**

- Navbar with logo, site info, and burger menu toggle
- Full-screen overlay with menu items
- Active menu item with animated underline
- Semantic HTML structure

**CSS**

- CSS custom properties for dynamic animations
- Clip-path for smooth menu reveal
- Responsive navigation layout
- Font preloading for optimal performance

**JavaScript**

- GSAP timeline for orchestrated animations
- Event listeners for burger menu toggle
- Class management for active states
- Reversible timeline using `reversed()` method

## Customization

### Menu Items

Edit the menu items in `index.html`:

```html
<div class="overlay">
  <div class="menu-item"><a href="#" class="active">Home</a></div>
  <div class="menu-item"><a href="#">About</a></div>
  <!-- Add more items as needed -->
</div>
```

### Colors

Edit CSS variables in `src/styles/style.css`:

```css
:root {
  --primary-color: /* your color */;
  --text-color: /* your color */;
  --nav-scale: 1;
  --line-width: 0%;
}
```

### Animations

Modify animation timing and easing in `src/scripts/main.js`:

- Duration values (in seconds)
- Stagger values
- Easing functions (e.g., `power4.inOut`, `power2.out`)
- Clip-path timing

## Browser Support

- Chrome/Edge: Latest 2 versions
- Firefox: Latest 2 versions
- Safari: Latest 2 versions
- Mobile: iOS Safari 12+, Chrome Android

## Performance Tips

- Fonts are preloaded in the `<head>` for faster rendering
- GSAP uses GPU acceleration for smooth animations
- Vite's code splitting minimizes initial bundle size
- Timeline is paused by default to avoid unnecessary animation runs

## Troubleshooting

**Menu not animating?**

- Check browser console for JavaScript errors
- Ensure GSAP is properly imported
- Verify DOM element selectors match the HTML structure

**Animations feel sluggish?**

- Check if animations are overlapping
- Adjust easing functions for better feel
- Monitor performance in DevTools

**Build failing?**

- Clear node_modules: `rm -rf node_modules && pnpm install`
- Check pnpm version: `pnpm --version`
- Review ESLint errors: `pnpm lint`

**Fonts not loading?**

- Verify font files exist in `src/assets/fonts/`
- Check preload links in `index.html`
- Ensure font-face declarations are correct in `src/styles/fonts.css`

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

Copyright (c) 2026 José Manuel Díaz

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Contact

For questions or feedback about this project, please reach out to the author.

---

**Last Updated**: February 2026
