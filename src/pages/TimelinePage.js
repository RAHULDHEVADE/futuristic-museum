/* ==========================================================================
   PAGE: TIMELINE
   Cinematic vertical timeline: Ancient → Classical → Medieval → Renaissance → Industrial → Digital → Future
   ========================================================================== */

import { timelineData } from '../data/museumData.js';

export function renderTimelinePage() {
  const container = document.getElementById('app-main');
  if (!container) return;

  container.innerHTML = `
    <div class="timeline-section" style="padding-top: calc(var(--header-height) + 4rem);">
      <div class="museum-container">
        
        <div style="text-align: center; max-width: 760px; margin: 0 auto 5rem auto;">
          <span class="section-label">CHRONOLOGY OF CONSCIOUSNESS</span>
          <h1 class="section-title">The Grand Timeline</h1>
          <p class="section-desc" style="margin: 0 auto;">
            Traverse 5,000 years of human creativity. As you scroll, follow the golden continuum linking archaic clay inscriptions with the crystalline photon codices of tomorrow.
          </p>
        </div>

        <div class="timeline-spine-wrapper">
          <div class="timeline-spine-line"></div>

          ${timelineData.map((node, i) => `
            <div class="timeline-node">
              <div class="timeline-dot"></div>

              <div class="timeline-meta-col">
                <div class="timeline-era-date">${node.dates}</div>
                <h2 class="timeline-era-title">${node.title}</h2>
                <p class="timeline-era-desc" style="margin-bottom: 1.2rem;">${node.shortDesc}</p>
                <div style="display: flex; gap: 0.5rem; flex-wrap: wrap; ${i % 2 === 1 ? 'justify-content: flex-end;' : ''}">
                  ${node.highlights.map(h => `
                    <span class="museum-badge" style="font-size: 0.65rem;">${h}</span>
                  `).join('')}
                </div>
              </div>

              <div class="timeline-card-col">
                <div class="museum-action-card" data-cursor="card" style="margin: 0;">
                  <div class="action-card-img-wrap" style="height: 240px;">
                    <img src="${node.image}" alt="${node.title}" loading="lazy">
                  </div>
                  <div class="action-card-body" style="padding: 1.4rem;">
                    <span style="font-size: 0.68rem; letter-spacing: 0.16em; text-transform: uppercase; color: var(--gold); display: block; margin-bottom: 0.3rem;">
                      REPRESENTATIVE MASTERWORK
                    </span>
                    <h3 style="font-family: var(--font-serif); font-size: 1.35rem; color: var(--ivory); margin-bottom: 0.4rem;">
                      ${node.representativeArtifact}
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          `).join('')}
        </div>

      </div>
    </div>
  `;
}
