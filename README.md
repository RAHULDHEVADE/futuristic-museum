# Future Museum — The Past, Reimagined

> *"Ancient Objects. Modern Interface. Future Interaction."*

A luxury digital museum experience blending classical antiquities, cinematic lighting, glassmorphism, and futuristic interaction.

## Features

- **Global Typewriter Loading Screen**: Vintage mechanical typewriter animation with museum gold palette.
- **Cinematic 100vh Multi-Layer Hero**: Michelangelo's David Carrara marble bust, rotating 3D orbital armillary rings, floating glass artifact card, and illuminated museum dust particles.
- **Custom Desktop Cursor**: Champagne-gold faceted diamond pointer with contextual reticles (`DISCOVER`, `EXPLORE`).
- **Web Audio Spatial Ambient Drone**: Procedurally synthesized warm harmonic drone with zero external sound files.
- **Rome Explorer 3D Carousel**: Dominant central artifact with angled, interactive side relics and keyboard navigation.
- **Interactive Curatorial Day Pass**: Real high-resolution scannable QR code generator for campus visits at **Smt. Indira Gandhi College of Engineering**.
- **Full Client-Side Routing**:
  - `#/` — Home
  - `#/collections` & `#/collections/:id` — Permanent Departments & Galleries
  - `#/artifacts/:id` — Artifact Detail with Holo-Spectral X-Ray view & 3D Flip Card
  - `#/timeline` — 5,000-Year Vertical Chronology
  - `#/exhibitions` & `#/exhibitions/:id` — Curatorial Walkthroughs
  - `#/visit` — Campus Location & Pass Generator

## Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## GitHub Pages Deployment

This repository includes a GitHub Actions workflow in `.github/workflows/deploy.yml` that automatically builds and deploys to GitHub Pages upon pushing to `main`.
