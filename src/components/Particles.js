/* ==========================================================================
   ILLUMINATED MUSEUM DUST PARTICLES SIMULATION
   Golden microscopic particles drifting through warm architectural light rays
   ========================================================================== */

export function initParticlesCanvas(canvasId = 'particles-canvas') {
  const canvas = document.getElementById(canvasId);
  if (!canvas) return;

  // Honor prefers-reduced-motion
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    canvas.style.display = 'none';
    return;
  }

  const ctx = canvas.getContext('2d');
  let animationId = null;
  let particles = [];
  const isMobile = window.innerWidth < 768;
  const count = isMobile ? 25 : 65;

  function resize() {
    canvas.width = canvas.parentElement.offsetWidth || window.innerWidth;
    canvas.height = canvas.parentElement.offsetHeight || window.innerHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  class DustParticle {
    constructor() {
      this.reset(true);
    }

    reset(initial = false) {
      this.x = Math.random() * canvas.width;
      this.y = initial ? Math.random() * canvas.height : canvas.height + 10;
      this.size = Math.random() * 1.8 + 0.6;
      this.speedY = -(Math.random() * 0.35 + 0.12);
      this.speedX = (Math.random() - 0.5) * 0.25;
      this.baseAlpha = Math.random() * 0.45 + 0.15;
      this.alpha = this.baseAlpha;
      this.pulseSpeed = Math.random() * 0.02 + 0.008;
      this.pulseAngle = Math.random() * Math.PI * 2;
    }

    update() {
      this.y += this.speedY;
      this.x += this.speedX;

      this.pulseAngle += this.pulseSpeed;
      this.alpha = this.baseAlpha + Math.sin(this.pulseAngle) * 0.15;

      if (this.y < -10 || this.x < -10 || this.x > canvas.width + 10) {
        this.reset();
      }
    }

    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(216, 192, 134, ${Math.max(0, this.alpha)})`;
      ctx.shadowBlur = 8;
      ctx.shadowColor = 'rgba(216, 192, 134, 0.4)';
      ctx.fill();
    }
  }

  for (let i = 0; i < count; i++) {
    particles.push(new DustParticle());
  }

  function loop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => {
      p.update();
      p.draw();
    });
    animationId = requestAnimationFrame(loop);
  }

  loop();

  return () => {
    cancelAnimationFrame(animationId);
    window.removeEventListener('resize', resize);
  };
}
