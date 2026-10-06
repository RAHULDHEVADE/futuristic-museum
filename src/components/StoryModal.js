/* ==========================================================================
   STORY MODAL: CINEMATIC TRAILER & BRAND MANIFESTO OVERLAY
   ========================================================================== */

import { museumSound } from './SoundAmbience.js';

export function initStoryModal() {
  let modal = document.getElementById('story-modal-overlay');

  if (!modal) {
    modal = document.createElement('div');
    modal.id = 'story-modal-overlay';
    modal.className = 'search-modal-backdrop';
    modal.innerHTML = `
      <div class="search-modal-box" style="max-width: 820px; padding: 2.2rem; background: rgba(14, 10, 7, 0.98);">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.5rem; border-bottom: 1px solid rgba(216, 192, 134, 0.15); padding-bottom: 1rem;">
          <div>
            <span class="museum-badge" style="margin-bottom: 0.3rem;">ARCHIVAL CINEMA</span>
            <h2 style="font-family: var(--font-serif); font-size: 1.8rem; color: var(--ivory);">The Past, Reimagined</h2>
          </div>
          <button id="close-story-modal" class="audio-toggle-btn" style="width: 34px; height: 34px;" data-cursor="button">✕</button>
        </div>

        <div style="position: relative; width: 100%; height: 380px; border-radius: var(--radius-md); overflow: hidden; border: 1px solid var(--border-glass); margin-bottom: 1.5rem; background: black;">
          <img src="./assets/hero-cathedral.jpg" alt="Museum Hall" style="width: 100%; height: 100%; object-fit: cover; opacity: 0.85; filter: contrast(1.1);">
          <div style="position: absolute; inset: 0; background: radial-gradient(circle at center, transparent 30%, rgba(11,9,7,0.85) 100%);"></div>
          
          <div style="position: absolute; inset: 0; display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; padding: 2rem;">
            <div class="brand-infinity" style="font-size: 3rem; margin-bottom: 1rem; color: var(--gold-bright);">∞</div>
            <p style="font-family: var(--font-serif); font-size: 1.5rem; color: var(--ivory); max-width: 540px; line-height: 1.4; font-style: italic;">
              "We do not merely store relics of the past. We illuminate the immortal consciousness of human genius."
            </p>
            <div style="margin-top: 1.5rem; font-size: 0.74rem; letter-spacing: 0.24em; color: var(--champagne); text-transform: uppercase;">
              Smt. Indira Gandhi College of Engineering Archival Initiative
            </div>
          </div>
        </div>

        <div style="display: flex; justify-content: space-between; align-items: center; font-size: 0.82rem; color: var(--text-muted); flex-wrap: wrap; gap: 1rem;">
          <span>Original Curatorial Score (Spatial Audio Synthesized)</span>
          <button class="btn-gold-3d" id="story-audio-play" style="padding: 0.5rem 1.4rem; font-size: 0.72rem;" data-cursor="button">
            Play Archival Drone
          </button>
        </div>
      </div>
    `;
    document.body.appendChild(modal);
  }

  const closeBtn = document.getElementById('close-story-modal');
  const playBtn = document.getElementById('story-audio-play');

  function updateButton(isPlaying) {
    if (playBtn) {
      playBtn.textContent = isPlaying ? 'Pause Archival Drone' : 'Play Archival Drone';
    }
  }

  // Sync with sound system state
  museumSound.subscribe(updateButton);

  function openStory() {
    modal.classList.add('open');
    museumSound.playChime();
    updateButton(museumSound.isPlaying);
  }

  function closeStory() {
    modal.classList.remove('open');
  }

  document.addEventListener('click', (e) => {
    if (e.target.closest('.watch-story-trigger')) {
      e.preventDefault();
      openStory();
    }
  });

  if (closeBtn) closeBtn.addEventListener('click', closeStory);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeStory();
  });

  if (playBtn) {
    playBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      museumSound.toggle();
    });
  }
}
