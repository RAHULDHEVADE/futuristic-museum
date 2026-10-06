/* ==========================================================================
   PAGE: COLLECTIONS & COLLECTION DETAIL
   Editorial layouts with layered 3D depth and curatorial essays
   ========================================================================== */

import { collectionsData, artifactsData } from '../data/museumData.js';

export function renderCollectionsPage() {
  const container = document.getElementById('app-main');
  if (!container) return;

  container.innerHTML = `
    <div class="collections-section" style="padding-top: calc(var(--header-height) + 4rem);">
      <div class="museum-container">
        
        <div style="max-width: 760px; margin-bottom: 4rem;">
          <span class="section-label">PERMANENT DEPARTMENTS</span>
          <h1 class="section-title">The Curated Collections</h1>
          <p class="section-desc">
            Explore our permanent wings spanning five millennia of human civilization. Each department preserves rare physical masterworks alongside high-density multi-spectral archives.
          </p>
        </div>

        <!-- Filter Tags -->
        <div style="display: flex; gap: 0.8rem; margin-bottom: 3.5rem; flex-wrap: wrap;">
          <button class="museum-badge col-filter-btn active" data-filter="all" data-cursor="button">All Wings</button>
          <button class="museum-badge col-filter-btn" data-filter="Ancient" data-cursor="button">Ancient</button>
          <button class="museum-badge col-filter-btn" data-filter="Classical" data-cursor="button">Classical</button>
          <button class="museum-badge col-filter-btn" data-filter="Medieval" data-cursor="button">Medieval</button>
          <button class="museum-badge col-filter-btn" data-filter="Invention" data-cursor="button">Invention</button>
          <button class="museum-badge col-filter-btn" data-filter="Future" data-cursor="button">Future</button>
        </div>

        <!-- Collections Grid -->
        <div class="collections-grid" id="collections-list-grid">
          ${collectionsData.map(col => `
            <div class="collection-card" onclick="window.location.hash='#/collections/${col.id}'" data-cursor="card" data-era="${col.era}">
              <img src="${col.image}" alt="${col.title}" class="collection-card-img" loading="lazy">
              <div class="collection-card-gradient"></div>
              <div class="collection-card-content">
                <div class="collection-card-top">
                  <span class="collection-num">COLLECTION / ${col.number}</span>
                  <span class="museum-badge" style="font-size: 0.65rem;">${col.artifactsCount} ARCHIVED</span>
                </div>
                <div class="collection-card-bottom">
                  <span style="font-size: 0.72rem; letter-spacing: 0.16em; color: var(--gold); text-transform: uppercase;">${col.era}</span>
                  <h2 class="collection-card-title">${col.title}</h2>
                  <p class="collection-card-desc">${col.description}</p>
                  <span class="collection-card-link">
                    <span>Inspect Department</span>
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
    </div>
  `;

  // Filter interaction
  document.querySelectorAll('.col-filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.col-filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.dataset.filter.toLowerCase();
      
      document.querySelectorAll('#collections-list-grid .collection-card').forEach(card => {
        if (filter === 'all' || card.dataset.era.toLowerCase().includes(filter)) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

export function renderCollectionDetailPage(collectionId) {
  const container = document.getElementById('app-main');
  if (!container) return;

  const collection = collectionsData.find(c => c.id === collectionId) || collectionsData[0];
  const relatedArtifacts = artifactsData.filter(a => a.collectionId === collection.id);

  // Next collection loop
  const currentIndex = collectionsData.findIndex(c => c.id === collection.id);
  const nextCollection = collectionsData[(currentIndex + 1) % collectionsData.length];

  container.innerHTML = `
    <!-- Large Collection Hero -->
    <div class="collection-hero">
      <img src="${collection.image}" alt="${collection.title}" class="collection-hero-bg">
      <div class="collection-hero-gradient"></div>

      <div class="museum-container" style="position: relative; z-index: 5;">
        <a href="#/collections" class="museum-badge" style="margin-bottom: 1.5rem;" data-cursor="button">
          ← BACK TO ALL COLLECTIONS
        </a>
        <span class="section-label">COLLECTION / ${collection.number} · ${collection.era}</span>
        <h1 class="section-title" style="font-size: clamp(2.8rem, 5.5vw, 4.8rem); margin-bottom: 1.2rem;">
          ${collection.title}
        </h1>
        <p class="section-desc" style="max-width: 680px; font-size: 1.15rem; color: var(--ivory);">
          ${collection.description}
        </p>
      </div>
    </div>

    <!-- Curatorial Essay & Artifacts Subgrid -->
    <div class="museum-container" style="padding-top: 5rem; padding-bottom: 8rem;">
      
      <div style="display: grid; grid-template-columns: 1.3fr 0.7fr; gap: 4rem; align-items: start; margin-bottom: 6rem; border-bottom: 1px solid rgba(216, 192, 134, 0.12); padding-bottom: 4rem;">
        <div>
          <span class="section-label">CURATORIAL ESSAY</span>
          <h2 style="font-family: var(--font-serif); font-size: 2.2rem; color: var(--ivory); margin-bottom: 1.5rem;">
            Aesthetic Essence & Historical Matrix
          </h2>
          <p style="font-size: 1.05rem; line-height: 1.85; color: var(--text-muted); margin-bottom: 1.5rem;">
            ${collection.curatorialEssay}
          </p>
          <div style="display: flex; gap: 0.6rem; flex-wrap: wrap;">
            ${collection.tags.map(t => `<span class="museum-badge"># ${t}</span>`).join('')}
          </div>
        </div>

        <div class="archival-dossier-card">
          <div class="dossier-header">
            <span class="dossier-stamp">ARCHIVAL INDEX</span>
            <span style="font-size: 0.72rem; color: var(--champagne);">STATUS: STABILIZED</span>
          </div>
          <div class="dossier-row">
            <span class="dossier-label">Department</span>
            <span class="dossier-val">${collection.title}</span>
          </div>
          <div class="dossier-row">
            <span class="dossier-label">Chronology</span>
            <span class="dossier-val">${collection.era}</span>
          </div>
          <div class="dossier-row">
            <span class="dossier-label">Holdings</span>
            <span class="dossier-val">${collection.artifactsCount} Masterpieces</span>
          </div>
          <div class="dossier-row">
            <span class="dossier-label">Atmosphere</span>
            <span class="dossier-val">Nitrogen Enriched / 19.5°C</span>
          </div>
        </div>
      </div>

      <!-- Artifacts in this Collection -->
      <div>
        <div class="section-header-row" style="margin-bottom: 2.5rem;">
          <div>
            <span class="section-label">FEATURED RELICS</span>
            <h2 class="section-title">Exhibited in this Wing</h2>
          </div>
        </div>

        <div class="artifacts-subgrid">
          ${relatedArtifacts.map(art => `
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
                <p class="action-card-desc">${art.creator} (${art.date}). ${art.description.slice(0, 110)}...</p>
                <div class="action-card-btn">
                  <span>Inspect Relic</span>
                  <span>→</span>
                </div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- Next Collection Gateway -->
      <div style="margin-top: 6rem; padding-top: 3rem; border-top: 1px solid rgba(216, 192, 134, 0.15); display: flex; justify-content: space-between; align-items: center; flex-wrap: gap: 2rem;">
        <div>
          <span class="section-label">PROCEED THROUGH GALLERIES</span>
          <div style="font-family: var(--font-serif); font-size: 1.8rem; color: var(--ivory);">Next: ${nextCollection.title}</div>
        </div>
        <a href="#/collections/${nextCollection.id}" class="btn-gold-3d" data-cursor="button">
          <span>ENTER NEXT WING →</span>
        </a>
      </div>

    </div>
  `;
}
