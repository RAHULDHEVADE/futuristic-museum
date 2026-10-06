/* ==========================================================================
   AMBIENT LUXURY MUSEUM AUDIO (Web Audio API Synthesizer)
   Warm golden drone & serene museum chime without external sound files
   ========================================================================== */

class MuseumSoundSystem {
  constructor() {
    this.audioCtx = null;
    this.isPlaying = false;
    this.masterGain = null;
    this.oscillators = [];
    this.subscribers = [];
  }

  subscribe(callback) {
    this.subscribers.push(callback);
    callback(this.isPlaying);
  }

  notify() {
    this.subscribers.forEach(cb => {
      try { cb(this.isPlaying); } catch(e) {}
    });
  }

  init() {
    if (this.audioCtx) return;
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    this.audioCtx = new AudioContext();
    this.masterGain = this.audioCtx.createGain();
    this.masterGain.gain.setValueAtTime(0.0001, this.audioCtx.currentTime);
    this.masterGain.connect(this.audioCtx.destination);
  }

  toggle() {
    if (!this.audioCtx) this.init();
    if (this.audioCtx.state === 'suspended') {
      this.audioCtx.resume();
    }

    if (this.isPlaying) {
      this.stop();
    } else {
      this.start();
    }
    return this.isPlaying;
  }

  cleanOscillators() {
    this.oscillators.forEach(osc => {
      try {
        osc.stop();
        osc.disconnect();
      } catch (e) {}
    });
    this.oscillators = [];
  }

  start() {
    if (!this.audioCtx) this.init();
    if (this.audioCtx.state === 'suspended') {
      this.audioCtx.resume();
    }

    this.cleanOscillators();
    this.isPlaying = true;
    this.notify();

    const now = this.audioCtx.currentTime;
    this.masterGain.gain.cancelScheduledValues(now);
    this.masterGain.gain.setValueAtTime(this.masterGain.gain.value || 0.0001, now);
    this.masterGain.gain.linearRampToValueAtTime(0.12, now + 0.6);

    // Harmonic warm museum chord (C2, G2, C3, E3, B3)
    const freqs = [65.41, 98.00, 130.81, 164.81, 246.94];

    this.oscillators = freqs.map((f, i) => {
      const osc = this.audioCtx.createOscillator();
      const gain = this.audioCtx.createGain();
      
      osc.type = i % 2 === 0 ? 'sine' : 'triangle';
      osc.frequency.setValueAtTime(f, now);
      osc.detune.setValueAtTime((i - 2) * 4, now);

      gain.gain.setValueAtTime(0.18 / freqs.length, now);

      const filter = this.audioCtx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(420, now);

      osc.connect(gain);
      gain.connect(filter);
      filter.connect(this.masterGain);

      osc.start(now);
      return osc;
    });
  }

  stop() {
    this.isPlaying = false;
    this.notify();

    if (!this.audioCtx) return;
    const now = this.audioCtx.currentTime;
    this.masterGain.gain.cancelScheduledValues(now);
    this.masterGain.gain.setValueAtTime(this.masterGain.gain.value, now);
    this.masterGain.gain.linearRampToValueAtTime(0.0001, now + 0.15);

    setTimeout(() => {
      this.cleanOscillators();
    }, 200);
  }

  playChime() {
    if (!this.audioCtx) this.init();
    if (this.audioCtx && this.audioCtx.state === 'suspended') {
      this.audioCtx.resume();
    }

    try {
      const now = this.audioCtx.currentTime;
      const osc = this.audioCtx.createOscillator();
      const gain = this.audioCtx.createGain();
      
      osc.type = 'sine';
      osc.frequency.setValueAtTime(587.33, now); // D5 golden harmonic
      osc.frequency.exponentialRampToValueAtTime(880.00, now + 0.35); // A5

      gain.gain.setValueAtTime(0.05, now);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 1.2);

      osc.connect(gain);
      gain.connect(this.audioCtx.destination);
      osc.start(now);
      osc.stop(now + 1.2);
    } catch(e) {}
  }
}

export const museumSound = new MuseumSoundSystem();
