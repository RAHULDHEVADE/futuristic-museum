/* ==========================================================================
   GLOBAL SEARCH MODAL
   Instant fuzzy filtering across museum collections, artifacts and exhibitions
   ========================================================================== */

import { artifactsData, collectionsData, exhibitionsData } from '../data/museumData.js';

export function initSearchModal() {
  const modal = document.getElementById('search-modal');
  const input = document.getElementById('search-input');
  const resultsContainer = document.getElementById('search-results');
  const closeBtn = document.getElementById('search-close-btn');

  if (!modal || !input || !resultsContainer) return;

  function openSearch() {
    modal.classList.add('open');
    input.value = '';
    renderResults('');
    setTimeout(() => input.focus(), 150);
  }

  function closeSearch() {
    modal.classList.remove('open');
  }

  // Bind to search buttons
  document.querySelectorAll('.search-trigger-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      openSearch();
    });
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', closeSearch);
  }

  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeSearch();
  });

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('open')) {
      closeSearch();
    }
    // Cmd+K or Ctrl+K shortcut
    if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
      e.preventDefault();
      openSearch();
    }
  });

  input.addEventListener('input', (e) => {
    renderResults(e.target.value.trim().toLowerCase());
  });

  function renderResults(query) {
    resultsContainer.innerHTML = '';

    const matchedArtifacts = artifactsData.filter(a => 
      !query || a.name.toLowerCase().includes(query) || a.creator.toLowerCase().includes(query) || a.material.toLowerCase().includes(query)
    );

    const matchedCollections = collectionsData.filter(c => 
      !query || c.title.toLowerCase().includes(query) || c.description.toLowerCase().includes(query)
    );

    const matchedExhibitions = exhibitionsData.filter(ex => 
      !query || ex.title.toLowerCase().includes(query) || ex.description.toLowerCase().includes(query)
    );

    if (matchedArtifacts.length === 0 && matchedCollections.length === 0 && matchedExhibitions.length === 0) {
      resultsContainer.innerHTML = `
        <div style="padding: 2rem; text-align: center; color: var(--text-muted); font-size: 0.9rem;">
          No archival records match "${query}".
        </div>
      `;
      return;
    }

    matchedArtifacts.slice(0, 4).forEach(item => {
      const el = document.createElement('a');
      el.href = `#/artifacts/${item.id}`;
      el.className = 'search-result-item';
      el.innerHTML = `
        <img src="${item.image}" alt="${item.name}" class="search-result-thumb">
        <div style="flex: 1;">
          <div style="font-family: var(--font-serif); font-size: 1.1rem; color: var(--ivory);">${item.name}</div>
          <div style="font-size: 0.76rem; color: var(--champagne);">${item.creator} · ${item.date}</div>
        </div>
        <span style="font-size: 0.68rem; letter-spacing: 0.15em; color: var(--gold); text-transform: uppercase;">Artifact →</span>
      `;
      el.addEventListener('click', closeSearch);
      resultsContainer.appendChild(el);
    });

    matchedCollections.slice(0, 3).forEach(item => {
      const el = document.createElement('a');
      el.href = `#/collections/${item.id}`;
      el.className = 'search-result-item';
      el.innerHTML = `
        <img src="${item.image}" alt="${item.title}" class="search-result-thumb">
        <div style="flex: 1;">
          <div style="font-family: var(--font-serif); font-size: 1.1rem; color: var(--ivory);">${item.title}</div>
          <div style="font-size: 0.76rem; color: var(--text-muted);">${item.era}</div>
        </div>
        <span style="font-size: 0.68rem; letter-spacing: 0.15em; color: var(--gold); text-transform: uppercase;">Collection →</span>
      `;
      el.addEventListener('click', closeSearch);
      resultsContainer.appendChild(el);
    });
  }
}
