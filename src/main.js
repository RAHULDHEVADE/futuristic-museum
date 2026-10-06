/* ==========================================================================
   FUTURE MUSEUM - CORE APPLICATION ENTRY POINT
   ========================================================================== */

import { initCustomCursor } from './components/CustomCursor.js';
import { museumSound } from './components/SoundAmbience.js';
import { initSearchModal } from './components/SearchModal.js';
import { initStoryModal } from './components/StoryModal.js';
import { initRouter } from './router.js';

// Global Loading Screen Controller
function initLoadingScreen() {
  const loader = document.getElementById('loading-screen');
  if (!loader) return;

  // Graceful fade after realistic typewriter demonstration (approx 1.8s)
  setTimeout(() => {
    loader.classList.add('loaded');
  }, 1800);
}

// Navbar Scroll & Glass Shield Controller
function initNavbar() {
  const navbar = document.getElementById('museum-navbar');
  const mobileBtn = document.getElementById('mobile-menu-btn');
  const drawer = document.getElementById('mobile-drawer');
  const audioBtn = document.getElementById('audio-toggle-btn');

  if (navbar) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 40) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    }, { passive: true });
  }

  // Mobile menu toggle
  if (mobileBtn && drawer) {
    mobileBtn.addEventListener('click', () => {
      const isOpen = drawer.classList.toggle('open');
      mobileBtn.classList.toggle('active', isOpen);
    });

    // Close on clicking links inside drawer
    drawer.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        drawer.classList.remove('open');
        mobileBtn.classList.remove('active');
      });
    });
  }

  // Audio drone toggle & subscription
  if (audioBtn) {
    museumSound.subscribe((isPlaying) => {
      audioBtn.classList.toggle('playing', isPlaying);
      audioBtn.setAttribute('title', isPlaying ? 'Pause Spatial Audio Drone' : 'Play Spatial Audio Drone');
    });

    audioBtn.addEventListener('click', () => {
      museumSound.toggle();
    });
  }
}

// Master Initialization
document.addEventListener('DOMContentLoaded', () => {
  initLoadingScreen();
  initCustomCursor();
  initNavbar();
  initSearchModal();
  initStoryModal();
  initRouter();
});
