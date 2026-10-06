/* ==========================================================================
   ROME EXPLORER: ARTIFACT CAROUSEL COMPONENT
   Dominant central artifact with angled, lower opacity side artifacts
   ========================================================================== */

import { artifactsData } from '../data/museumData.js';
import { museumSound } from './SoundAmbience.js';

export function renderRomeCarousel(containerId = 'rome-carousel-container') {
  const container = document.getElementById(containerId);
  if (!container) return;

  const items = artifactsData.slice(0, 6);
  let currentIndex = 0;

  function update() {
    container.innerHTML = `
      <div class="rome-carousel-wrapper">
        <div class="rome-carousel-viewport">
          ${items.map((item, idx) => {
            let posClass = 'hidden';
            if (idx === currentIndex) posClass = 'center';
            else if (idx === (currentIndex - 1 + items.length) % items.length) posClass = 'prev';
            else if (idx === (currentIndex + 1) % items.length) posClass = 'next';

            return `
              <div class="rome-artifact-item ${posClass}" data-index="${idx}" data-cursor="artifact">
                <img src="${item.image}" alt="${item.name}" loading="lazy">
                ${idx === currentIndex ? `
                  <div class="rome-caption-card">
                    <span style="font-size: 0.68rem; letter-spacing: 0.2em; text-transform: uppercase; color: var(--gold); display: block; margin-bottom: 0.3rem;">
                      ${item.period} · ${item.date}
                    </span>
                    <h3 style="font-family: var(--font-serif); font-size: 1.5rem; color: var(--ivory); margin-bottom: 0.3rem;">
                      ${item.name}
                    </h3>
                    <p style="font-size: 0.8rem; color: var(--text-muted); margin-bottom: 0.8rem; line-height: 1.4;">
                      ${item.creator} — ${item.material}
                    </p>
                    <a href="#/artifacts/${item.id}" class="action-card-btn" style="padding: 0.5rem 1rem; font-size: 0.7rem;" data-cursor="button">
                      <span>Examine Artifact</span>
                      <span>→</span>
                    </a>
                  </div>
                ` : ''}
              </div>
            `;
          }).join('')}
        </div>

        <div class="rome-nav-controls">
          <button class="rome-ctrl-btn prev-btn" aria-label="Previous Artifact" data-cursor="button">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>
          
          <div style="font-size: 0.78rem; letter-spacing: 0.22em; color: var(--champagne); text-transform: uppercase; font-weight: 500;">
            ${String(currentIndex + 1).padStart(2, '0')} / ${String(items.length).padStart(2, '0')}
          </div>

          <button class="rome-ctrl-btn next-btn" aria-label="Next Artifact" data-cursor="button">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>
        </div>
      </div>
    `;

    // Event listeners
    container.querySelector('.prev-btn').addEventListener('click', () => {
      currentIndex = (currentIndex - 1 + items.length) % items.length;
      museumSound.playChime();
      update();
    });

    container.querySelector('.next-btn').addEventListener('click', () => {
      currentIndex = (currentIndex + 1) % items.length;
      museumSound.playChime();
      update();
    });

    container.querySelectorAll('.rome-artifact-item').forEach(el => {
      el.addEventListener('click', () => {
        const idx = parseInt(el.dataset.index, 10);
        if (idx !== currentIndex) {
          currentIndex = idx;
          museumSound.playChime();
          update();
        }
      });
    });
  }

  update();
}
