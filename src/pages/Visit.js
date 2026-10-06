/* ==========================================================================
   PAGE: VISIT THE MUSEUM
   Location: Smt. Indira Gandhi College of Engineering
   Hours, Admission, Directions, Accessibility & Real QR Code Generator
   ========================================================================== */

import QRCode from 'qrcode';
import { visitInfoData } from '../data/museumData.js';
import { museumSound } from '../components/SoundAmbience.js';

export function renderVisitPage() {
  const container = document.getElementById('app-main');
  if (!container) return;

  const today = new Date().toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  });

  container.innerHTML = `
    <div class="visit-section">
      <div class="museum-container">
        
        <div style="max-width: 780px; margin-bottom: 3.5rem;">
          <span class="section-label">EXPERIENCE IN PERSON</span>
          <h1 class="section-title">Visit The Future Museum</h1>
          <p class="section-desc">
            Enter our monumental pavilion where classical marble galleries meet futuristic glass vitrines. Plan your journey to our campus in Navi Mumbai.
          </p>
        </div>

        <!-- Architectural Pavilion Image Banner -->
        <div style="width: 100%; height: 380px; border-radius: var(--radius-lg); overflow: hidden; border: 1px solid var(--border-glass); margin-bottom: 4rem; position: relative;">
          <img src="./assets/museum-exterior.jpg" alt="Future Museum Architectural Exterior" style="width: 100%; height: 100%; object-fit: cover; filter: brightness(0.85);">
          <div style="position: absolute; inset: 0; background: linear-gradient(to top, rgba(11, 9, 7, 0.9) 0%, transparent 60%);"></div>
          <div style="position: absolute; bottom: 2rem; left: 2rem; right: 2rem; display: flex; justify-content: space-between; align-items: flex-end; flex-wrap: wrap; gap: 1rem;">
            <div>
              <span class="museum-badge" style="margin-bottom: 0.5rem;">CULTURAL LANDMARK</span>
              <div style="font-family: var(--font-serif); font-size: 1.8rem; color: var(--ivory);">The Monumental Glass & Stone Pavilion</div>
            </div>
            <div style="font-size: 0.82rem; letter-spacing: 0.15em; color: var(--champagne); text-transform: uppercase;">
              COORDINATES: 19.1245° N, 73.0033° E
            </div>
          </div>
        </div>

        <!-- Visit Info Grid: Details vs Interactive Ticket Pass -->
        <div class="visit-info-grid">
          
          <!-- Left Column: Location, Hours, Directions -->
          <div class="visit-card-panel">
            
            <div class="visit-meta-row">
              <div class="visit-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
              </div>
              <div>
                <h3 class="visit-meta-title">Campus Location</h3>
                <p class="visit-meta-desc">
                  <strong>${visitInfoData.campus}</strong><br>
                  ${visitInfoData.address}
                </p>
                <div style="margin-top: 0.75rem;">
                  <a href="https://maps.google.com/?q=Smt.+Indira+Gandhi+College+of+Engineering+Navi+Mumbai" target="_blank" rel="noopener" class="collection-card-link" style="font-size: 0.74rem;" data-cursor="button">
                    <span>Open in Navigation Satellite</span>
                    <span>↗</span>
                  </a>
                </div>
              </div>
            </div>

            <div class="visit-meta-row">
              <div class="visit-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
              </div>
              <div>
                <h3 class="visit-meta-title">Museum Hours</h3>
                <div style="display: flex; flex-direction: column; gap: 0.4rem; margin-top: 0.5rem;">
                  ${visitInfoData.hours.map(h => `
                    <div style="display: flex; justify-content: space-between; font-size: 0.88rem; border-bottom: 1px solid rgba(216, 192, 134, 0.08); padding-bottom: 0.35rem;">
                      <span style="color: var(--champagne);">${h.days}</span>
                      <span style="color: var(--ivory); font-family: var(--font-serif);">${h.time}</span>
                    </div>
                  `).join('')}
                </div>
              </div>
            </div>

            <div class="visit-meta-row">
              <div class="visit-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                  <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                </svg>
              </div>
              <div>
                <h3 class="visit-meta-title">Transit & Parking</h3>
                <p class="visit-meta-desc">
                  <strong>By Train:</strong> 5-minute transit from Ghansoli Railway Station (Trans-Harbour Line).<br>
                  <strong>By Road:</strong> Direct approach via Thane-Belapur Expressway.<br>
                  <strong>Valet Parking:</strong> Complimentary subterranean parking for all visitors.
                </p>
              </div>
            </div>

            <div class="visit-meta-row">
              <div class="visit-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
              </div>
              <div>
                <h3 class="visit-meta-title">Accessibility & Guidelines</h3>
                <ul style="list-style: none; display: flex; flex-direction: column; gap: 0.4rem; font-size: 0.85rem; color: var(--text-muted); margin-top: 0.5rem;">
                  ${visitInfoData.accessibility.map(a => `
                    <li style="display: flex; align-items: center; gap: 0.5rem;">
                      <span style="color: var(--gold);">◈</span>
                      <span>${a}</span>
                    </li>
                  `).join('')}
                </ul>
              </div>
            </div>

          </div>

          <!-- Right Column: Interactive Digital Admission Pass with Real QR Generator -->
          <div class="ticket-pass-generator">
            <div>
              <span class="section-label">INSTANT DIGITAL REGISTRATION</span>
              <h2 style="font-family: var(--font-serif); font-size: 1.8rem; color: var(--ivory); margin-bottom: 0.4rem;">
                Curatorial Day Pass
              </h2>
              <p style="font-size: 0.85rem; color: var(--text-muted);">
                Generate a live scannable cryptographic entry token with personalized QR code for priority admission.
              </p>
            </div>

            <!-- Pass Preview Card -->
            <div class="ticket-pass-preview" id="ticket-pass-card">
              <div class="ticket-pass-brand">
                <div style="font-family: var(--font-serif); font-size: 1.1rem; letter-spacing: 0.15em; color: var(--ivory); text-transform: uppercase;">
                  FUTURE MUSEUM ∞
                </div>
                <span class="museum-badge" id="pass-status-badge" style="font-size: 0.62rem;">VALID ENTRY</span>
              </div>

              <div style="display: grid; grid-template-columns: 1fr auto; gap: 1.2rem; align-items: center;">
                <div>
                  <div style="font-size: 0.68rem; letter-spacing: 0.18em; text-transform: uppercase; color: var(--gold); margin-bottom: 0.2rem;">
                    VISITOR DESIGNATION
                  </div>
                  <div style="font-family: var(--font-serif); font-size: 1.35rem; color: var(--ivory); font-weight: 500;" id="pass-visitor-name">
                    Distinguished Guest
                  </div>
                  <div style="font-size: 0.78rem; color: var(--champagne); margin-top: 0.25rem;" id="pass-visitor-tier">
                    Full Gallery & Audio Access
                  </div>
                  <div style="font-size: 0.72rem; color: var(--text-muted); margin-top: 0.35rem;">
                    Date: <span id="pass-date" style="color: var(--ivory);">${today}</span>
                  </div>
                </div>

                <!-- REAL SCANNER QR CODE CANVAS -->
                <div class="ticket-qr" id="ticket-qr-container" title="Scan with your phone to verify pass">
                  <canvas id="ticket-qr-canvas"></canvas>
                </div>
              </div>

              <div style="display: flex; justify-content: space-between; border-top: 1px dashed rgba(216, 192, 134, 0.2); padding-top: 0.8rem; font-size: 0.72rem; color: var(--text-dim); flex-wrap: wrap; gap: 0.5rem;">
                <span id="pass-token-label">TOKEN: FM-701664</span>
                <span>SIGCE ROTUNDA · NAVI MUMBAI</span>
              </div>
            </div>

            <!-- Interactive Pass Generator Controls -->
            <div style="display: flex; flex-direction: column; gap: 1rem;">
              <div>
                <label style="font-size: 0.7rem; letter-spacing: 0.15em; text-transform: uppercase; color: var(--gold); display: block; margin-bottom: 0.4rem;">
                  Visitor Full Name
                </label>
                <input type="text" id="visitor-name-input" placeholder="Enter Your Name (e.g. Rahul Sharma)" style="width: 100%; background: rgba(11, 9, 7, 0.8); border: 1px solid var(--border-glass); border-radius: var(--radius-sm); padding: 0.85rem 1rem; color: var(--ivory); font-family: var(--font-sans); outline: none;">
              </div>

              <div>
                <label style="font-size: 0.7rem; letter-spacing: 0.15em; text-transform: uppercase; color: var(--gold); display: block; margin-bottom: 0.4rem;">
                  Access Tier
                </label>
                <select id="visitor-tier-select" style="width: 100%; background: rgba(18, 12, 8, 0.9); border: 1px solid var(--border-glass); border-radius: var(--radius-sm); padding: 0.85rem 1rem; color: var(--ivory); font-family: var(--font-sans); outline: none; cursor: pointer;">
                  <option value="General Admission · Full Gallery & Audio Access">General Admission — Full Gallery & Audio Access</option>
                  <option value="Curatorial Fellow · VIP Rotunda & Private Vaults">Curatorial Fellow — VIP Rotunda & Private Vaults</option>
                  <option value="Academic Scholar · Archival Library & Research Studio">Academic Scholar — Archival Library & Research Studio</option>
                  <option value="Student Pass · All Pavilions Complimentary">Student Pass — Smt. Indira Gandhi College of Engineering</option>
                </select>
              </div>

              <button class="btn-gold-3d" id="generate-pass-btn" data-cursor="button" style="justify-content: center; width: 100%;">
                <span>GENERATE PERSONAL ENTRY TOKEN →</span>
              </button>

              <!-- Download / Print Pass Row -->
              <div style="display: flex; gap: 0.75rem;">
                <button id="download-pass-btn" class="action-card-btn" style="flex: 1; justify-content: center; padding: 0.75rem; font-size: 0.72rem;" data-cursor="button">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="margin-right: 0.4rem;">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                    <polyline points="7 10 12 15 17 10"></polyline>
                    <line x1="12" y1="15" x2="12" y2="3"></line>
                  </svg>
                  <span>Download Pass</span>
                </button>
                <button id="print-pass-btn" class="action-card-btn" style="flex: 1; justify-content: center; padding: 0.75rem; font-size: 0.72rem;" data-cursor="button">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="margin-right: 0.4rem;">
                    <polyline points="6 9 6 2 18 2 18 9"></polyline>
                    <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path>
                    <rect x="6" y="14" width="12" height="8"></rect>
                  </svg>
                  <span>Print Pass</span>
                </button>
              </div>

              <div id="qr-scan-feedback" style="display: none; padding: 0.75rem; background: rgba(216, 192, 134, 0.08); border: 1px solid var(--border-glass); border-radius: var(--radius-sm); font-size: 0.76rem; color: var(--champagne); text-align: center;">
                ✓ Real Scannable QR Generated. Point any camera to verify entry token.
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  `;

  // Real QR Code Generator Logic
  const canvas = document.getElementById('ticket-qr-canvas');
  const nameInput = document.getElementById('visitor-name-input');
  const tierSelect = document.getElementById('visitor-tier-select');
  const passName = document.getElementById('pass-visitor-name');
  const passTier = document.getElementById('pass-visitor-tier');
  const passToken = document.getElementById('pass-token-label');
  const genBtn = document.getElementById('generate-pass-btn');
  const feedback = document.getElementById('qr-scan-feedback');
  const passCard = document.getElementById('ticket-pass-card');
  const downloadBtn = document.getElementById('download-pass-btn');
  const printBtn = document.getElementById('print-pass-btn');

  let currentToken = 'FM-' + Math.floor(100000 + Math.random() * 900000);

  // Generate QR onto canvas
  function renderQR(name, tier, token) {
    if (!canvas) return;

    // Authentic verification payload with deep link
    const verificationPayload = `https://futuremuseum.org/verify?token=${token}&visitor=${encodeURIComponent(name)}&tier=${encodeURIComponent(tier)}&date=${encodeURIComponent(today)}&campus=SIGCE`;

    QRCode.toCanvas(canvas, verificationPayload, {
      width: 82,
      margin: 1,
      color: {
        dark: '#0B0907',
        light: '#FFFFFF'
      },
      errorCorrectionLevel: 'M'
    }, (err) => {
      if (err) console.error('QR generation error:', err);
    });
  }

  // Initial QR code generation
  renderQR('Distinguished Guest', 'General Admission', currentToken);

  // Handle generation action
  function handleGenerate() {
    const rawName = nameInput.value.trim();
    const name = rawName || 'Distinguished Guest';
    const tier = tierSelect.value;
    currentToken = 'FM-' + Math.floor(100000 + Math.random() * 900000);

    passName.textContent = name;
    passTier.textContent = tier.split('·')[0].trim() + ' Access';
    passToken.textContent = `TOKEN: ${currentToken}`;

    // Re-render real scannable QR
    renderQR(name, tier, currentToken);
    museumSound.playChime();

    // Visual feedback
    if (feedback) {
      feedback.style.display = 'block';
      feedback.innerHTML = `✓ Active Pass: <strong>${currentToken}</strong> for <strong>${name}</strong> (${tier.split('·')[0].trim()}). Scannable with any mobile phone.`;
    }

    genBtn.innerHTML = `<span>✓ ENTRY TOKEN ACTIVATED (${currentToken})</span>`;
    genBtn.style.background = 'linear-gradient(135deg, #FFF0CC 0%, #E5CC92 40%, #C99B52 100%)';

    // Highlight pass card with glowing border
    if (passCard) {
      passCard.style.borderColor = 'var(--gold-bright)';
      passCard.style.boxShadow = '0 0 30px rgba(216, 192, 134, 0.4)';
      setTimeout(() => {
        passCard.style.borderColor = 'rgba(216, 192, 134, 0.35)';
        passCard.style.boxShadow = 'none';
      }, 1500);
    }
  }

  if (genBtn) {
    genBtn.addEventListener('click', handleGenerate);
  }

  if (nameInput) {
    nameInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') handleGenerate();
    });
  }

  if (tierSelect) {
    tierSelect.addEventListener('change', () => {
      if (nameInput.value.trim()) handleGenerate();
    });
  }

  // Download pass as QR image or print
  if (downloadBtn && canvas) {
    downloadBtn.addEventListener('click', () => {
      try {
        const link = document.createElement('a');
        link.download = `FutureMuseum-Pass-${currentToken}.png`;
        link.href = canvas.toDataURL('image/png');
        link.click();
        museumSound.playChime();
      } catch (err) {
        console.error('Download error:', err);
      }
    });
  }

  if (printBtn) {
    printBtn.addEventListener('click', () => {
      window.print();
    });
  }
}
