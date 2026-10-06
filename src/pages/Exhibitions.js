/* ==========================================================================
   PAGE: EXHIBITIONS & EXHIBITION DETAIL
   Immersive landing pages, curatorial statements & gallery walk-throughs
   ========================================================================== */

import { exhibitionsData, artifactsData } from '../data/museumData.js';

export function renderExhibitionsPage() {
  const container = document.getElementById('app-main');
  if (!container) return;

  container.innerHTML = `
    <div class="collections-section" style="padding-top: calc(var(--header-height) + 4rem);">
      <div class="museum-container">
        
        <div style="max-width: 760px; margin-bottom: 4rem;">
          <span class="section-label">SPECIAL CURATIONS & INSTALLATIONS</span>
          <h1 class="section-title">Current Exhibitions</h1>
          <p class="section-desc">
            Thematic dialogues between antiquities and contemporary speculation. Experience multi-sensory gallery walk-throughs in our central rotunda and experimental wings.
          </p>
        </div>

        <div class="exhibitions-grid">
          ${exhibitionsData.map(ex => `
            <div class="exhibition-card" onclick="window.location.hash='#/exhibitions/${ex.id}'" data-cursor="card">
              <img src="${ex.image}" alt="${ex.title}" class="exhibition-card-bg" loading="lazy">
              <div class="exhibition-gradient"></div>
              <div class="exhibition-content">
                <span class="museum-badge" style="margin-bottom: 1rem;">${ex.status}</span>
                <h2 style="font-family: var(--font-serif); font-size: 2.4rem; color: var(--ivory); margin-bottom: 0.4rem;">
                  ${ex.title}
                </h2>
                <div style="font-size: 0.85rem; color: var(--champagne); margin-bottom: 1rem; letter-spacing: 0.08em;">
                  ${ex.dates} · ${ex.galleryHall}
                </div>
                <p style="font-size: 0.95rem; color: var(--text-muted); line-height: 1.6; margin-bottom: 1.8rem; max-width: 520px;">
                  ${ex.description}
                </p>
                <span class="btn-gold-3d" style="padding: 0.65rem 1.4rem; font-size: 0.72rem;">
                  <span>EXPLORE EXHIBITION →</span>
                </span>
              </div>
            </div>
          `).join('')}
        </div>

      </div>
    </div>
  `;
}

export function renderExhibitionDetailPage(exhibitionId) {
  const container = document.getElementById('app-main');
  if (!container) return;

  const exhibition = exhibitionsData.find(e => e.id === exhibitionId) || exhibitionsData[0];
  const featured = exhibition.featuredArtifacts
    .map(id => artifactsData.find(a => a.id === id))
    .filter(Boolean);

  container.innerHTML = `
    <!-- Exhibition Hero -->
    <div class="collection-hero" style="min-height: 65vh;">
      <img src="${exhibition.image}" alt="${exhibition.title}" class="collection-hero-bg">
      <div class="collection-hero-gradient"></div>

      <div class="museum-container" style="position: relative; z-index: 5;">
        <a href="#/exhibitions" class="museum-badge" style="margin-bottom: 1.5rem;" data-cursor="button">
          ← BACK TO ALL EXHIBITIONS
        </a>
        <span class="section-label">${exhibition.status} · ${exhibition.galleryHall}</span>
        <h1 class="section-title" style="font-size: clamp(2.8rem, 5.5vw, 4.8rem); margin-bottom: 0.8rem;">
          ${exhibition.title}
        </h1>
        <div style="font-family: var(--font-serif); font-size: 1.5rem; color: var(--champagne); font-style: italic; margin-bottom: 1.2rem;">
          ${exhibition.subtitle}
        </div>
        <p class="section-desc" style="max-width: 680px; font-size: 1.15rem; color: var(--ivory);">
          ${exhibition.description}
        </p>
      </div>
    </div>

    <!-- Curatorial Statement & Featured Gallery Items -->
    <div class="museum-container" style="padding-top: 5rem; padding-bottom: 8rem;">
      
      <div style="max-width: 820px; margin-bottom: 6rem;">
        <span class="section-label">CURATORIAL PROSPECTUS</span>
        <h2 style="font-family: var(--font-serif); font-size: 2.2rem; color: var(--ivory); margin-bottom: 1.5rem;">
          Synthesizing Millennia of Memory
        </h2>
        <p style="font-size: 1.05rem; line-height: 1.85; color: var(--text-muted); margin-bottom: 1.5rem;">
          This exhibition unites artifacts across disparate centuries into an unbroken ontological sequence. In bringing together classical Carrara marbles, Hellenistic bronze armatures, and futuristic quantum lattices, we invite visitors to perceive art not as an artifact of a bygone period, but as an eternal conversation across time.
        </p>
        <p style="font-size: 1.05rem; line-height: 1.85; color: var(--text-muted);">
          Each vitrine is calibrated with ambient directional light and holographic resonance, highlighting the mathematical harmony shared by all masterpieces of human civilization.
        </p>
      </div>

      <!-- Featured Artifacts in Exhibition -->
      <div>
        <div class="section-header-row" style="margin-bottom: 2.5rem;">
          <div>
            <span class="section-label">CURATED MASTERPIECES</span>
            <h2 class="section-title">Key Pieces on View</h2>
          </div>
        </div>

        <div class="artifacts-subgrid">
          ${featured.map(art => `
            <div class="museum-action-card" onclick="window.location.hash='#/artifacts/${art.id}'" data-cursor="card">
              <div class="action-card-img-wrap">
                <img src="${art.image}" alt="${art.name}" loading="lazy">
                <span class="action-card-badge">${art.period}</span>
              </div>
              <div class="action-card-body">
                <span style="font-size: 0.72rem; letter-spacing: 0.16em; color: var(--gold); text-transform: uppercase; margin-bottom: 0.3rem;">
                  ${art.archiveCode}
                </span>
                <h3 class="action-card-title">${art.name}</h3>
                <p class="action-card-desc">${art.creator} (${art.date}). ${art.description.slice(0, 100)}...</p>
                <div class="action-card-btn">
                  <span>View in Detail</span>
                  <span>→</span>
                </div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- Plan Visit Callout -->
      <div style="margin-top: 6rem; padding: 3rem; background: rgba(26, 18, 12, 0.6); border: 1px solid var(--border-glass); border-radius: var(--radius-lg); display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 2rem;">
        <div>
          <span class="section-label">EXPERIENCE IN ROTUNDA</span>
          <div style="font-family: var(--font-serif); font-size: 1.8rem; color: var(--ivory);">Reserve Your Curated Gallery Walkthrough</div>
          <p style="font-size: 0.88rem; color: var(--text-muted); margin-top: 0.3rem;">Daily guided curatorial walkthroughs at 11:30 AM and 4:30 PM.</p>
        </div>
        <a href="#/visit" class="btn-gold-3d" data-cursor="button">
          <span>PLAN YOUR VISIT →</span>
        </a>
      </div>

    </div>
  `;
}
