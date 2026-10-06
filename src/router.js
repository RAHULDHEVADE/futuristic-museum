/* ==========================================================================
   CLIENT-SIDE ROUTER FOR FUTURE MUSEUM SPA
   ========================================================================== */

import { renderHomePage } from './pages/Home.js';
import { renderCollectionsPage, renderCollectionDetailPage } from './pages/Collections.js';
import { renderArtifactDetailPage } from './pages/ArtifactDetail.js';
import { renderTimelinePage } from './pages/TimelinePage.js';
import { renderExhibitionsPage, renderExhibitionDetailPage } from './pages/Exhibitions.js';
import { renderVisitPage } from './pages/Visit.js';
import { initParticlesCanvas } from './components/Particles.js';

let cleanupParticles = null;

export function handleRoute() {
  const hash = window.location.hash || '#/';
  window.scrollTo({ top: 0, behavior: 'smooth' });

  // Cleanup old canvas animation loops
  if (cleanupParticles) {
    cleanupParticles();
    cleanupParticles = null;
  }

  // Update active navbar links
  document.querySelectorAll('.nav-link, .mobile-nav-links a').forEach(link => {
    link.classList.remove('active');
    const href = link.getAttribute('href');
    if (href === hash || (hash.startsWith(href) && href !== '#/')) {
      link.classList.add('active');
    }
  });

  // Close mobile drawer if open
  const drawer = document.getElementById('mobile-drawer');
  const trigger = document.getElementById('mobile-menu-btn');
  if (drawer && trigger) {
    drawer.classList.remove('open');
    trigger.classList.remove('active');
  }

  // Route dispatch
  if (hash === '#/' || hash === '#' || hash === '') {
    renderHomePage();
    cleanupParticles = initParticlesCanvas('particles-canvas');
  } else if (hash === '#/collections') {
    renderCollectionsPage();
  } else if (hash.startsWith('#/collections/')) {
    const id = hash.replace('#/collections/', '');
    renderCollectionDetailPage(id);
  } else if (hash.startsWith('#/artifacts/')) {
    const id = hash.replace('#/artifacts/', '');
    renderArtifactDetailPage(id);
  } else if (hash === '#/timeline') {
    renderTimelinePage();
  } else if (hash === '#/exhibitions') {
    renderExhibitionsPage();
  } else if (hash.startsWith('#/exhibitions/')) {
    const id = hash.replace('#/exhibitions/', '');
    renderExhibitionDetailPage(id);
  } else if (hash === '#/visit') {
    renderVisitPage();
  } else {
    renderHomePage();
    cleanupParticles = initParticlesCanvas('particles-canvas');
  }
}

export function initRouter() {
  window.addEventListener('hashchange', handleRoute);
  handleRoute();
}
