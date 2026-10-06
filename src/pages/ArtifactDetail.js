/* ==========================================================================
   PAGE: ARTIFACT DETAIL VIEW
   Visual-first layout, Holo-mode toggle, 3D Flip Card, Archival Dossier
   ========================================================================== */

import { artifactsData, collectionsData } from '../data/museumData.js';
import { museumSound } from '../components/SoundAmbience.js';

export function renderArtifactDetailPage(artifactId) {
  const container = document.getElementById('app-main');
  if (!container) return;

  const artifact = artifactsData.find(a => a.id === artifactId) || artifactsData[0];
  const collection = collectionsData.find(c => c.id === artifact.collectionId) || collectionsData[0];
  const relatedArtifacts = artifactsData.filter(a => a.collectionId === artifact.collectionId && a.id !== artifact.id).slice(0, 3);

  // Play discovery chime
  museumSound.playChime();

  container.innerHTML = `
    <div class="artifact-detail-view">
      <div class="museum-container">

        <!-- Top Breadcrumbs & Holo-Toggle -->
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 2.5rem; flex-wrap: wrap; gap: 1.5rem;">
          <div style="display: flex; align-items: center; gap: 0.75rem;">
            <a href="#/collections/${collection.id}" class="museum-badge" data-cursor="button">
              ← ${collection.title}
            </a>
            <span style="color: var(--text-dim); font-size: 0.8rem;">/</span>
            <span style="font-size: 0.75rem; letter-spacing: 0.2em; color: var(--gold); text-transform: uppercase;">
              ${artifact.archiveCode}
            </span>
          </div>

          <!-- Uiverse Component 1: Vertical Toggle Switch (Gallery vs Holo Mode) -->
          <div class="museum-mode-toggle" data-cursor="button">
            <span class="mode-toggle-label active" id="label-natural">Natural Gallery</span>
            <label class="vertical-switch">
              <input type="checkbox" id="holo-mode-toggle">
              <span class="vertical-slider"></span>
            </label>
            <span class="mode-toggle-label" id="label-holo">Holo-Spectral</span>
          </div>
        </div>

        <!-- Main Grid: Media Showcase vs Metadata & Curatorial Information -->
        <div class="artifact-detail-grid">
          
          <!-- Left: Hero Media Showcase -->
          <div class="artifact-media-showcase" id="artifact-showcase-box" data-cursor="artifact">
            <img src="${artifact.image}" alt="${artifact.name}" class="artifact-hero-image" id="artifact-main-img">
            <div class="artifact-holo-overlay"></div>
            
            <!-- Bottom HUD overlay -->
            <div style="position: absolute; bottom: 1.5rem; left: 1.5rem; right: 1.5rem; display: flex; justify-content: space-between; align-items: flex-end; z-index: 5;">
              <div class="museum-badge" style="background: rgba(11, 9, 7, 0.85); backdrop-filter: blur(12px);">
                ${artifact.dimensions}
              </div>
              <div class="museum-badge" style="background: rgba(11, 9, 7, 0.85); backdrop-filter: blur(12px);">
                ORIGIN: ${artifact.origin}
              </div>
            </div>
          </div>

          <!-- Right: Typography, Curatorial Notes & Dossier -->
          <div class="artifact-info-stack">
            <div>
              <span class="section-label">${artifact.period} · ${artifact.date}</span>
              <h1 class="artifact-headline">${artifact.name}</h1>
            </div>

            <div class="artifact-provenance">
              <span class="provenance-artist">${artifact.creator}</span>
              <span class="provenance-date">${artifact.material} · ${artifact.origin}</span>
            </div>

            <p class="artifact-description-body">
              ${artifact.description}
            </p>

            <div style="background: rgba(216, 192, 134, 0.04); border-left: 3px solid var(--champagne); padding: 1.2rem 1.4rem; border-radius: 0 var(--radius-sm) var(--radius-sm) 0;">
              <span style="font-size: 0.68rem; letter-spacing: 0.22em; text-transform: uppercase; color: var(--gold); display: block; margin-bottom: 0.4rem;">
                CURATORIAL SIGNIFICANCE
              </span>
              <p style="font-size: 0.94rem; color: var(--ivory); line-height: 1.6;">
                ${artifact.significance}
              </p>
            </div>

            <!-- Uiverse Component 4 Adaptation: Archival Clearance Dossier -->
            <div class="archival-dossier-card">
              <div class="dossier-header">
                <span class="dossier-stamp">ARCHIVAL DOSSIER // DEPT. OF ANTIQUITIES</span>
                <span style="font-size: 0.72rem; color: var(--champagne);">${artifact.dossier.catalogNumber}</span>
              </div>
              <div class="dossier-row">
                <span class="dossier-label">Provenance</span>
                <span class="dossier-val">${artifact.dossier.provenance}</span>
              </div>
              <div class="dossier-row">
                <span class="dossier-label">Condition Index</span>
                <span class="dossier-val">${artifact.dossier.condition}</span>
              </div>
              <div class="dossier-row">
                <span class="dossier-label">Conservation</span>
                <span class="dossier-val">${artifact.dossier.restorationYear}</span>
              </div>
              <div class="dossier-row">
                <span class="dossier-label">Chief Curator</span>
                <span class="dossier-val">${artifact.dossier.curator}</span>
              </div>
              <button class="dossier-expand-btn" id="dossier-cert-btn" data-cursor="button">
                VERIFY QUANTUM CRYPTOGRAPHIC PROVENANCE
              </button>
            </div>

          </div>
        </div>

        <!-- Uiverse Component 3: 3D Flip Card (Archival Fact / Mystery) -->
        <div style="margin-top: 8rem; display: flex; flex-direction: column; align-items: center; text-align: center;">
          <span class="section-label">UNVEILING THE ARCHIVES</span>
          <h2 class="section-title">Archival Revelation</h2>
          <p class="section-desc" style="margin-bottom: 3rem;">
            Hover or tap to reveal the hidden truth discovered through modern spectral analysis.
          </p>

          <div class="archival-flip-card" id="flip-card-instance" data-cursor="card">
            <div class="archival-flip-inner">
              <div class="archival-flip-front">
                <div>
                  <span class="museum-badge" style="margin-bottom: 0.8rem;">INSPECT REVERSE</span>
                  <h3 style="font-family: var(--font-serif); font-size: 1.8rem; color: var(--ivory);">${artifact.name}</h3>
                </div>
                <img src="${artifact.image}" alt="${artifact.name}">
                <div style="font-size: 0.76rem; letter-spacing: 0.18em; color: var(--champagne); text-transform: uppercase;">
                  HOVER TO FLIP ARCHIVAL RECORD →
                </div>
              </div>
              <div class="archival-flip-back">
                <span class="fact-tag">${artifact.flipFact.tag}</span>
                <h3 class="fact-title">${artifact.flipFact.title}</h3>
                <p class="fact-desc">${artifact.flipFact.desc}</p>
                <div style="margin-top: 1.5rem; font-size: 0.72rem; letter-spacing: 0.16em; color: var(--gold); text-transform: uppercase;">
                  VERIFIED BY FUTURE MUSEUM ARCHIVES
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Related Artifacts in this Wing -->
        ${relatedArtifacts.length > 0 ? `
          <div style="margin-top: 8rem;">
            <div class="section-header-row" style="margin-bottom: 2.5rem;">
              <div>
                <span class="section-label">CONTINUE YOUR JOURNEY</span>
                <h2 class="section-title">Related Antiquities</h2>
              </div>
            </div>

            <div class="artifacts-subgrid">
              ${relatedArtifacts.map(rel => `
                <div class="museum-action-card" onclick="window.location.hash='#/artifacts/${rel.id}'" data-cursor="card">
                  <div class="action-card-img-wrap">
                    <img src="${rel.image}" alt="${rel.name}" loading="lazy">
                    <span class="action-card-badge">${rel.period}</span>
                  </div>
                  <div class="action-card-body">
                    <span style="font-size: 0.72rem; letter-spacing: 0.16em; color: var(--gold); text-transform: uppercase; margin-bottom: 0.3rem;">
                      ${rel.archiveCode}
                    </span>
                    <h3 class="action-card-title">${rel.name}</h3>
                    <p class="action-card-desc">${rel.creator} (${rel.date})</p>
                    <div class="action-card-btn">
                      <span>Examine</span>
                      <span>→</span>
                    </div>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>
        ` : ''}

      </div>
    </div>
  `;

  // Holo Toggle listener
  const toggle = document.getElementById('holo-mode-toggle');
  const showcase = document.getElementById('artifact-showcase-box');
  const labelNat = document.getElementById('label-natural');
  const labelHolo = document.getElementById('label-holo');

  if (toggle && showcase) {
    toggle.addEventListener('change', () => {
      museumSound.playChime();
      if (toggle.checked) {
        showcase.classList.add('holo-mode');
        labelNat.classList.remove('active');
        labelHolo.classList.add('active');
      } else {
        showcase.classList.remove('holo-mode');
        labelNat.classList.add('active');
        labelHolo.classList.remove('active');
      }
    });
  }

  // Cert button
  const certBtn = document.getElementById('dossier-cert-btn');
  if (certBtn) {
    certBtn.addEventListener('click', () => {
      museumSound.playChime();
      certBtn.textContent = '✓ QUANTUM CERTIFIED: HASH VERIFIED';
      certBtn.style.background = 'rgba(184, 138, 69, 0.3)';
      certBtn.style.color = 'var(--gold-bright)';
    });
  }

  // Tap-to-flip on mobile
  const flipCard = document.getElementById('flip-card-instance');
  if (flipCard) {
    flipCard.addEventListener('click', () => {
      flipCard.classList.toggle('flipped');
    });
  }
}
