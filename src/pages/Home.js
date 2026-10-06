/* ==========================================================================
   PAGE: HOME ("THE PAST, REIMAGINED.")
   ========================================================================== */

import { collectionsData, exhibitionsData } from '../data/museumData.js';
import { renderRomeCarousel } from '../components/RomeCarousel.js';

export function renderHomePage() {
  const container = document.getElementById('app-main');
  if (!container) return;

  container.innerHTML = `
    <!-- HERO SECTION -->
    <section class="hero-section" id="hero">
      <!-- Layer 1: Background Cathedral & Mist -->
      <div class="hero-layer-environment">
        <img src="./assets/hero-cathedral.jpg" alt="Colossal Classical Museum Rotunda" class="hero-bg-image" id="hero-bg-parallax">
        <div class="hero-ambient-light"></div>
        <div class="hero-mist"></div>
        <canvas id="particles-canvas"></canvas>
      </div>

      <!-- Side Timeline Numbers (01..05 from Reference Image 3) -->
      <div class="hero-side-timeline">
        <div class="side-step active">
          <span>01</span>
          <div class="side-step-line"></div>
        </div>
        <div class="side-step">
          <span>02</span>
          <div class="side-step-line"></div>
        </div>
        <div class="side-step">
          <span>03</span>
          <div class="side-step-line"></div>
        </div>
        <div class="side-step">
          <span>04</span>
          <div class="side-step-line"></div>
        </div>
      </div>

      <!-- Hero Grid Content -->
      <div class="museum-container">
        <div class="hero-inner">
          
          <!-- Left Column: Typography & CTAs -->
          <div class="hero-typography-col">
            <div class="hero-eyebrow">
              <span class="museum-badge">ARTIFACTS × PEOPLE × IDEAS × TOMORROW</span>
            </div>

            <h1 class="hero-title">
              <span>THE PAST,</span>
              <span class="title-accent">REIMAGINED.</span>
            </h1>

            <p class="hero-desc">
              A futuristic museum experience where classical antiquities meet tomorrow's digital interaction. Preserving human consciousness through light, geometry, and sacred memory.
            </p>

            <div class="hero-cta-group">
              <a href="#/collections" class="btn-gold-3d" data-cursor="button">
                <span>EXPLORE THE MUSEUM</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </a>

              <a href="#story-modal" class="btn-watch-story watch-story-trigger" data-cursor="button">
                <div class="play-circle">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <polygon points="5 3 19 12 5 21 5 3"></polygon>
                  </svg>
                </div>
                <span>WATCH OUR STORY</span>
              </a>
            </div>
          </div>

          <!-- Right Column: Central Artifact Visual Arena & Glass Card -->
          <div class="hero-visual-arena" id="hero-visual-arena">
            
            <!-- Central David Bust Sculpture -->
            <div class="hero-statue-container" id="hero-statue-wrapper" data-cursor="artifact">
              <img src="./assets/hero-david.jpg" alt="Michelangelo's David marble bust" class="hero-statue-img" id="hero-statue-img">
              
              <!-- Multi-Plane Orbital Armillary Rings -->
              <div class="hero-orbital-system">
                <div class="orbital-ring orbital-ring-1">
                  <div class="orbital-node"></div>
                </div>
                <div class="orbital-ring orbital-ring-2">
                  <div class="orbital-node-2"></div>
                </div>
                <div class="orbital-ring orbital-ring-3"></div>
              </div>
            </div>

            <!-- Floating Glass Artifact Card (Matches Reference Image 2 & 3) -->
            <div class="hero-glass-card" data-cursor="card">
              <div class="glass-card-header">
                <span class="glass-card-era">RENAISSANCE</span>
                <span class="glass-card-index">01 / 08</span>
              </div>
              <h2 class="glass-card-title">David</h2>
              <div class="glass-card-artist">Michelangelo · 1501 — 1504</div>
              <p class="glass-card-desc">
                A timeless symbol of human potential, captured in Carrara marble and preserved through centuries.
              </p>
              <a href="#/artifacts/david" class="glass-card-cta" data-cursor="button">
                <span>DISCOVER ARTIFACT</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </a>
            </div>

          </div>
        </div>
      </div>

      <!-- Scroll Down Indicator -->
      <a href="#statement" class="hero-scroll-indicator" data-cursor="button">
        <span>SCROLL TO EXPLORE</span>
        <div class="scroll-circle-btn">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </div>
      </a>
    </section>

    <!-- SECTION 2: EDITORIAL MUSEUM STATEMENT -->
    <section class="statement-section" id="statement">
      <div class="museum-container">
        <div class="statement-inner">
          <div class="statement-catalog">ARCHIVE / 001 · CURATORIAL PROCLAMATION</div>
          <h2 class="statement-heading">
            WE PRESERVE WHAT<br>HUMANITY MUST NEVER FORGET.
          </h2>
          <p class="statement-sub">
            "History is not static. It evolves every time we look at it again through the prism of new technology, expanding empathy, and timeless reverence."
          </p>
        </div>
      </div>
    </section>

    <!-- SECTION 3: ROME EXPLORER ARTIFACT CAROUSEL -->
    <section class="collections-section" style="padding-bottom: 2rem;">
      <div class="museum-container">
        <div class="section-header-row">
          <div>
            <span class="section-label">THE MASTERPIECE ROTUNDA</span>
            <h2 class="section-title">Artifact Exploration</h2>
            <p class="section-desc">
              Interact with three-dimensional representations of human triumph. Select any relic to inspect its provenance, materials, and secret underdrawings.
            </p>
          </div>
          <div>
            <a href="#/timeline" class="btn-gold-3d" data-cursor="button" style="padding: 0.75rem 1.6rem; font-size: 0.75rem;">
              <span>VIEW CHRONOLOGY →</span>
            </a>
          </div>
        </div>

        <div id="rome-carousel-container"></div>
      </div>
    </section>

    <!-- SECTION 4: FEATURED COLLECTIONS GRID -->
    <section class="collections-section">
      <div class="museum-container">
        <div class="section-header-row">
          <div>
            <span class="section-label">PERMANENT GALLERIES</span>
            <h2 class="section-title">Curated Collections</h2>
            <p class="section-desc">
              Six permanent wings bridging archaic Mesopotamian clay, Hellenistic proportions, medieval armories, and the quantum archives of tomorrow.
            </p>
          </div>
          <div>
            <a href="#/collections" class="nav-cta-btn" data-cursor="button">
              <span>ALL GALLERIES</span>
              <span>→</span>
            </a>
          </div>
        </div>

        <div class="collections-grid">
          ${collectionsData.map(col => `
            <div class="collection-card" onclick="window.location.hash='#/collections/${col.id}'" data-cursor="card">
              <img src="${col.image}" alt="${col.title}" class="collection-card-img" loading="lazy">
              <div class="collection-card-gradient"></div>
              <div class="collection-card-content">
                <div class="collection-card-top">
                  <span class="collection-num">COLLECTION / ${col.number}</span>
                  <span class="museum-badge" style="font-size: 0.65rem;">${col.artifactsCount} RELICS</span>
                </div>
                <div class="collection-card-bottom">
                  <span style="font-size: 0.72rem; letter-spacing: 0.16em; color: var(--gold); text-transform: uppercase;">${col.era}</span>
                  <h3 class="collection-card-title">${col.title}</h3>
                  <p class="collection-card-desc">${col.description}</p>
                  <span class="collection-card-link">
                    <span>Explore Wing</span>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>

    <!-- SECTION 5: FUTURE GALLERY ("BEYOND THE PHYSICAL") -->
    <section class="future-gallery-section" id="future-gallery">
      <div class="museum-container">
        <div class="future-gallery-grid">
          
          <div>
            <span class="section-label">WING 06 · SPECULATIVE DIGITIZATION</span>
            <h2 class="section-title">Beyond The Physical</h2>
            <p class="section-desc" style="margin-bottom: 2rem;">
              When physical stone turns to dust, what preserves the memory of civilization? In this experimental wing, classical forms are reconstituted using levitating crystalline matrices and permanent 5D optical storage.
            </p>

            <div class="hud-glass-panel" style="margin-bottom: 2.4rem;">
              <div class="hud-item">
                <span class="hud-label">COHERENCE</span>
                <span class="hud-value">99.98%</span>
              </div>
              <div class="hud-item">
                <span class="hud-label">SUBSTRATE</span>
                <span class="hud-value">5D Quartz</span>
              </div>
              <div class="hud-item">
                <span class="hud-label">STORAGE LIFE</span>
                <span class="hud-value">13.8B Yrs</span>
              </div>
            </div>

            <a href="#/artifacts/celestial-codex" class="btn-gold-3d" data-cursor="button">
              <span>EXAMINE CELESTIAL CODEX →</span>
            </a>
          </div>

          <!-- Component 2 Adaptation: Animated SVG Holo Scanner -->
          <div class="holo-scanner-box" data-cursor="card">
            <div class="holo-scanner-header">
              <div class="holo-dots">
                <span></span>
                <span></span>
                <span></span>
              </div>
              <div class="holo-scanner-title">QUANTUM SCANNER // ARC-2088-CDX</div>
            </div>
            <div class="holo-scanner-body">
              <div class="holo-grid-bg"></div>
              <div class="holo-scanline"></div>
              <img src="./assets/celestial-codex-future.jpg" alt="Celestial Codex" style="width: 82%; height: 82%; object-fit: contain; filter: drop-shadow(0 0 20px rgba(184, 138, 69, 0.4));">
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- SECTION 6: EXHIBITION SPOTLIGHT -->
    <section class="collections-section" style="background: rgba(14, 10, 7, 0.6);">
      <div class="museum-container">
        <div class="section-header-row">
          <div>
            <span class="section-label">CURRENT CURATIONS</span>
            <h2 class="section-title">Featured Exhibitions</h2>
            <p class="section-desc">
              Immersive thematic pavilions curated with international antiquities councils and future research laboratories.
            </p>
          </div>
          <div>
            <a href="#/exhibitions" class="nav-cta-btn" data-cursor="button">
              <span>ALL EXHIBITIONS</span>
              <span>→</span>
            </a>
          </div>
        </div>

        <div class="exhibitions-grid">
          ${exhibitionsData.slice(0, 2).map(ex => `
            <div class="exhibition-card" onclick="window.location.hash='#/exhibitions/${ex.id}'" data-cursor="card">
              <img src="${ex.image}" alt="${ex.title}" class="exhibition-card-bg" loading="lazy">
              <div class="exhibition-gradient"></div>
              <div class="exhibition-content">
                <span class="museum-badge" style="margin-bottom: 1rem;">${ex.status}</span>
                <h3 style="font-family: var(--font-serif); font-size: 2.2rem; color: var(--ivory); margin-bottom: 0.5rem;">
                  ${ex.title}
                </h3>
                <div style="font-size: 0.82rem; color: var(--champagne); margin-bottom: 1rem; letter-spacing: 0.08em;">
                  ${ex.dates} · ${ex.galleryHall}
                </div>
                <p style="font-size: 0.92rem; color: var(--text-muted); line-height: 1.6; margin-bottom: 1.8rem; max-width: 520px;">
                  ${ex.description}
                </p>
                <span class="btn-gold-3d" style="padding: 0.65rem 1.4rem; font-size: 0.72rem;">
                  <span>ENTER EXHIBITION →</span>
                </span>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>

    <!-- SECTION 7: VISIT PREVIEW -->
    <section class="visit-section" style="padding-top: 5rem; padding-bottom: 6rem;">
      <div class="museum-container">
        <div class="visit-card-panel" style="background: linear-gradient(135deg, rgba(26, 18, 12, 0.8), rgba(14, 10, 7, 0.9));">
          <div class="section-header-row" style="margin-bottom: 2rem;">
            <div>
              <span class="section-label">EXPERIENCE IN PERSON</span>
              <h2 class="section-title" style="margin-bottom: 0.5rem;">Plan Your Visit</h2>
              <p class="section-desc">
                Located at the prestigious Smt. Indira Gandhi College of Engineering pavilion in Navi Mumbai.
              </p>
            </div>
            <div>
              <a href="#/visit" class="btn-gold-3d" data-cursor="button">
                <span>GET COMPLIMENTARY PASS →</span>
              </a>
            </div>
          </div>

          <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 2rem; border-top: 1px solid rgba(216, 192, 134, 0.12); padding-top: 2rem;">
            <div>
              <span style="font-size: 0.72rem; letter-spacing: 0.18em; text-transform: uppercase; color: var(--gold); display: block; margin-bottom: 0.4rem;">LOCATION</span>
              <div style="font-family: var(--font-serif); font-size: 1.15rem; color: var(--ivory);">Smt. Indira Gandhi College of Engineering</div>
              <p style="font-size: 0.82rem; color: var(--text-muted); margin-top: 0.2rem;">Navi Mumbai, Maharashtra</p>
            </div>
            <div>
              <span style="font-size: 0.72rem; letter-spacing: 0.18em; text-transform: uppercase; color: var(--gold); display: block; margin-bottom: 0.4rem;">OPENING HOURS</span>
              <div style="font-family: var(--font-serif); font-size: 1.15rem; color: var(--ivory);">Tue — Sun: 10:00 AM — 9:30 PM</div>
              <p style="font-size: 0.82rem; color: var(--text-muted); margin-top: 0.2rem;">Mondays Reserved for Conservation</p>
            </div>
            <div>
              <span style="font-size: 0.72rem; letter-spacing: 0.18em; text-transform: uppercase; color: var(--gold); display: block; margin-bottom: 0.4rem;">ADMISSION</span>
              <div style="font-family: var(--font-serif); font-size: 1.15rem; color: var(--ivory);">Complimentary Archive Access</div>
              <p style="font-size: 0.82rem; color: var(--text-muted); margin-top: 0.2rem;">Includes Full Interactive Digital Audio Guide</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;

  // Initialize interactive components on Home
  renderRomeCarousel('rome-carousel-container');

  // Parallax tracking on desktop
  const arena = document.getElementById('hero');
  const bgImg = document.getElementById('hero-bg-parallax');
  const statueImg = document.getElementById('hero-statue-img');

  if (arena && bgImg && statueImg && window.innerWidth > 768) {
    window.addEventListener('mousemove', (e) => {
      const xNorm = (e.clientX / window.innerWidth) - 0.5;
      const yNorm = (e.clientY / window.innerHeight) - 0.5;

      bgImg.style.transform = `translate3d(${xNorm * -15}px, ${yNorm * -15}px, 0)`;
      statueImg.style.transform = `translate3d(${xNorm * 18}px, ${yNorm * 18}px, 0)`;
    });
  }
}
