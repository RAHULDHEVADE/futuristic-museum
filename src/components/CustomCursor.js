/* ==========================================================================
   CUSTOM CURSOR CONTROLLER
   Matches Reference Image 2 & Section 9 specifications
   ========================================================================== */

export function initCustomCursor() {
  if (!window.matchMedia('(pointer: fine) and (min-width: 769px)').matches) {
    return;
  }

  // Create cursor DOM elements if not already present
  let pointer = document.querySelector('.custom-cursor-pointer');
  let follower = document.querySelector('.custom-cursor-follower');

  if (!pointer) {
    pointer = document.createElement('div');
    pointer.className = 'custom-cursor-pointer';
    pointer.innerHTML = '<div class="cursor-diamond"></div>';
    document.body.appendChild(pointer);
  }

  if (!follower) {
    follower = document.createElement('div');
    follower.className = 'custom-cursor-follower';
    follower.innerHTML = '<span class="cursor-badge-text"></span>';
    document.body.appendChild(follower);
  }

  const badgeText = follower.querySelector('.cursor-badge-text');

  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  let followerX = mouseX;
  let followerY = mouseY;

  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;

    pointer.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;

    // Update global CSS variables for radial reveal cards
    document.documentElement.style.setProperty('--mouse-x', `${mouseX}px`);
    document.documentElement.style.setProperty('--mouse-y', `${mouseY}px`);
  });

  // Smooth lerp follower loop
  function renderCursor() {
    followerX += (mouseX - followerX) * 0.16;
    followerY += (mouseY - followerY) * 0.16;

    follower.style.transform = `translate3d(${followerX}px, ${followerY}px, 0)`;
    requestAnimationFrame(renderCursor);
  }
  requestAnimationFrame(renderCursor);

  // Contextual hover listener using event delegation
  document.addEventListener('mouseover', (e) => {
    const target = e.target;

    // Artifact hover
    const artifactEl = target.closest('[data-cursor="artifact"], .rome-artifact-item, .hero-statue-container');
    if (artifactEl) {
      document.body.classList.remove('cursor-hover-text', 'cursor-hover-button', 'cursor-hover-card');
      document.body.classList.add('cursor-hover-artifact');
      badgeText.textContent = 'DISCOVER';
      return;
    }

    // Card hover
    const cardEl = target.closest('[data-cursor="card"], .collection-card, .exhibition-card, .gold-reveal-card, .archival-flip-card');
    if (cardEl) {
      document.body.classList.remove('cursor-hover-text', 'cursor-hover-button', 'cursor-hover-artifact');
      document.body.classList.add('cursor-hover-card');
      badgeText.textContent = 'EXPLORE';
      return;
    }

    // Button hover
    const btnEl = target.closest('[data-cursor="button"], button, .btn-gold-3d, .nav-cta-btn, .action-card-btn, .rome-ctrl-btn, a[role="button"]');
    if (btnEl) {
      document.body.classList.remove('cursor-hover-text', 'cursor-hover-artifact', 'cursor-hover-card');
      document.body.classList.add('cursor-hover-button');
      return;
    }

    // Interactive text hover
    const textEl = target.closest('[data-cursor="text"], .nav-link, h1, h2, .statement-heading, a');
    if (textEl) {
      document.body.classList.remove('cursor-hover-button', 'cursor-hover-artifact', 'cursor-hover-card');
      document.body.classList.add('cursor-hover-text');
      return;
    }

    // Default reset
    document.body.classList.remove('cursor-hover-text', 'cursor-hover-button', 'cursor-hover-artifact', 'cursor-hover-card');
  });

  document.addEventListener('mouseleave', () => {
    pointer.style.opacity = '0';
    follower.style.opacity = '0';
  });

  document.addEventListener('mouseenter', () => {
    pointer.style.opacity = '1';
    follower.style.opacity = '1';
  });
}
