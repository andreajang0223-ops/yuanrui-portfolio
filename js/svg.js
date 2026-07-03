/* ============================================================
   芫瑞造物誌 — Generative brand visuals (SVG string builders)
   Ported 1:1 from the design prototype. All colors are tokens.
   ============================================================ */

const YRSVG = (() => {
  const RM = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---- realm / method icons (24px grid, 1.5 stroke, round caps) ---- */
  const ICON_PATHS = {
    product: '<path d="M12 3 20 7.5 12 12 4 7.5 12 3Z"/><path d="M4 7.5V16.5L12 21"/><path d="M20 7.5V16.5L12 21"/><path d="M12 12V21"/>',
    art: '<circle cx="12" cy="12" r="9"/><path d="M12 3A9 9 0 0 1 12 21"/><circle cx="8.5" cy="12" r="1.6" fill="currentColor" stroke="none"/>',
    music: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="3.4"/><circle cx="12" cy="12" r="0.9" fill="currentColor" stroke="none"/>',
    invention: '<path d="M12 21V10"/><path d="M12 10C12 7 10 5.5 7 5.5"/><path d="M12 10C12 7 14 5.5 17 5.5"/><path d="M12 12.5C12 10.5 10.5 9.5 8.5 9.5"/><path d="M12 12.5C12 10.5 13.5 9.5 15.5 9.5"/><circle cx="12" cy="4.2" r="1.5" fill="currentColor" stroke="none"/><circle cx="6.4" cy="5" r="1.2" fill="currentColor" stroke="none"/><circle cx="17.6" cy="5" r="1.2" fill="currentColor" stroke="none"/><circle cx="7.7" cy="9" r="1.1" fill="currentColor" stroke="none"/><circle cx="16.3" cy="9" r="1.1" fill="currentColor" stroke="none"/>',
    writing: '<path d="M12 6.5C12 6.5 9.5 5 4.5 5V18C9.5 18 12 19.5 12 19.5"/><path d="M12 6.5C12 6.5 14.5 5 19.5 5V18C14.5 18 12 19.5 12 19.5"/><path d="M12 6.5V19.5"/>',
    culture: '<path d="M3 17C6 17 6.5 10 10 10C13.5 10 13 15 16 15"/><path d="M3 17L9 8.5L13.5 13.5L21 5"/><circle cx="18.5" cy="7" r="1.4" fill="currentColor" stroke="none"/>',
    ai: '<circle cx="6" cy="7" r="2"/><circle cx="18" cy="7" r="2"/><circle cx="12" cy="17" r="2"/><circle cx="12" cy="11" r="1.1" fill="currentColor" stroke="none"/><path d="M7.6 8.4 11 10.2M16.4 8.4 13 10.2M12 12.1V15"/>',
    about: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="10" r="3"/><path d="M6.5 18.5C7.5 15.5 9.5 14 12 14C14.5 14 16.5 15.5 17.5 18.5"/>',
  };

  function icon(id, size = 36) {
    return `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICON_PATHS[id] || ""}</svg>`;
  }

  /* ---- signature creation core: terra disk + rotating tick ring ---- */
  function creationCoreInner() {
    let ticks = "";
    const N = 48;
    for (let i = 0; i < N; i++) {
      const a = (i / N) * Math.PI * 2;
      const r1 = 120, r2 = i % 4 === 0 ? 132 : 127;
      ticks += `<line x1="${(Math.cos(a) * r1).toFixed(2)}" y1="${(Math.sin(a) * r1).toFixed(2)}" x2="${(Math.cos(a) * r2).toFixed(2)}" y2="${(Math.sin(a) * r2).toFixed(2)}" stroke="var(--ink-700)" stroke-opacity="0.32" stroke-width="1"/>`;
    }
    const anim = RM ? "" : `style="transform-box: fill-box; transform-origin: center; animation: yr-spin 70s linear infinite;"`;
    return `<circle r="150" fill="var(--jade-500)" fill-opacity="0.08"/>
      <g ${anim}><circle r="120" fill="none" stroke="var(--ink-700)" stroke-opacity="0.22" stroke-width="1"/>${ticks}</g>
      <circle r="78" fill="var(--terra-500)"/>
      <circle r="78" fill="none" stroke="var(--terra-600)" stroke-opacity="0.3" stroke-width="1"/>`;
  }

  function creationCore() {
    return `<svg viewBox="-160 -160 320 320" width="100%" style="display:block; overflow:visible;" aria-hidden="true">${creationCoreInner()}</svg>`;
  }

  /* ---- hero composition: contour lines + core + particles + jade hill ---- */
  function heroCore() {
    let contours = "";
    for (let i = 0; i < 5; i++) {
      contours += `<path d="M20 ${360 + i * 28}C150 ${300 + i * 30} ${250 + i * 6} ${360 + i * 32} 360 ${320 + i * 30}C470 ${282 + i * 26} 520 ${300 + i * 22} 556 ${250 + i * 24}"/>`;
    }
    let dots = "";
    for (let r = 0; r < 3; r++) for (let c = 0; c < 3; c++) {
      dots += `<circle cx="${470 + c * 18}" cy="${372 + r * 18}" r="2.6"/>`;
    }
    return `<svg viewBox="0 0 560 540" width="100%" style="display:block; overflow:visible;" role="img" aria-label="造物核心 — 品牌抽象圖形">
      <g stroke="var(--ink-700)" stroke-opacity="0.28" fill="none" stroke-width="1">${contours}</g>
      <g transform="translate(352,168)">${creationCoreInner()}</g>
      <circle cx="150" cy="392" r="10" fill="var(--ink-900)"/>
      <g fill="var(--ink-700)" fill-opacity="0.5">${dots}</g>
      <path d="M250 478C320 424 400 424 470 478Z" fill="var(--jade-500)" fill-opacity="0.45"/>
    </svg>`;
  }

  /* ---- abstract work covers (3 variants by seed) ---- */
  function workCover(accent, seed, big) {
    const ac = YR.ACC[accent], wash = YR.WASH[accent];
    const H = big ? 200 : 380;
    const v = seed % 3;
    let kids = `<rect width="320" height="${H}" fill="${wash}"/>`;
    if (v === 0) {
      kids += `<circle cx="196" cy="${big ? 96 : 150}" r="58" fill="${ac}"/>
        <circle cx="128" cy="${big ? 120 : 186}" r="38" fill="none" stroke="var(--ink-700)" stroke-opacity="0.4" stroke-width="1.4"/>
        <path d="${big ? "M30 168C110 140 210 150 290 120" : "M40 300C110 264 210 280 280 240"}" stroke="var(--ink-700)" stroke-opacity="0.3" stroke-width="1" fill="none"/>`;
    } else if (v === 1) {
      kids += `<path d="${big ? "M40 170C100 90 150 90 200 170Z" : "M40 300C100 200 150 200 200 300Z"}" fill="${ac}" fill-opacity="0.85"/>
        <circle cx="218" cy="${big ? 80 : 120}" r="42" fill="${ac}"/>
        <path d="${big ? "M30 178C120 158 200 178 290 158" : "M40 310C120 282 200 310 280 282"}" stroke="var(--ink-700)" stroke-opacity="0.3" stroke-width="1" fill="none"/>`;
    } else {
      const cy = big ? 100 : 180;
      kids += `<circle cx="160" cy="${cy}" r="${big ? 64 : 74}" fill="none" stroke="${ac}" stroke-width="2"/>
        <circle cx="160" cy="${cy}" r="28" fill="${ac}" fill-opacity="0.25"/>
        <circle cx="160" cy="${cy}" r="6" fill="${ac}"/>`;
    }
    return `<svg viewBox="0 0 320 ${H}" preserveAspectRatio="xMidYMid slice" aria-hidden="true">${kids}</svg>`;
  }

  /* ---- process figure for work detail ---- */
  function processFig(accent) {
    const ac = YR.ACC[accent];
    let cells = "";
    for (let r = 0; r < 3; r++) for (let c = 0; c < 6; c++) {
      cells += `<rect x="${30 + c * 90}" y="${30 + r * 70}" width="76" height="56" rx="4" fill="none" stroke="var(--ink-700)" stroke-opacity="0.16" stroke-width="1"/>`;
    }
    return `<svg viewBox="0 0 600 260" width="100%" style="display:block; background: var(--paper-100);" aria-hidden="true">${cells}
      <circle cx="116" cy="86" r="26" fill="${ac}" fill-opacity="0.9"/>
      <circle cx="296" cy="156" r="30" fill="none" stroke="${ac}" stroke-width="2"/>
      <path d="M40 200C160 160 320 210 470 150C520 130 540 140 560 120" stroke="var(--ink-700)" stroke-opacity="0.4" stroke-width="1.2" fill="none"/>
      <circle cx="476" cy="92" r="8" fill="var(--ink-900)"/>
    </svg>`;
  }

  /* ---- about page visual ---- */
  function aboutVisual() {
    let dots = "";
    for (let r = 0; r < 3; r++) for (let c = 0; c < 3; c++) {
      dots += `<circle cx="${44 + c * 12}" cy="${210 + r * 12}" r="2.2"/>`;
    }
    return `<svg viewBox="0 0 280 280" width="240" height="240" style="max-width:100%;" aria-hidden="true">
      <circle cx="140" cy="140" r="100" fill="var(--jade-500)" fill-opacity="0.16"/>
      <circle cx="140" cy="140" r="100" fill="none" stroke="var(--jade-500)" stroke-width="1.2"/>
      <circle cx="140" cy="140" r="60" fill="none" stroke="var(--ink-700)" stroke-opacity="0.3" stroke-width="1"/>
      <circle cx="140" cy="140" r="30" fill="var(--terra-500)"/>
      <circle cx="214" cy="70" r="12" fill="var(--ink-900)"/>
      <g fill="var(--ink-700)" fill-opacity="0.45">${dots}</g>
    </svg>`;
  }

  /* ---- category hover thumbnail ---- */
  function catThumb(tone) {
    const ac = YR.ACC[tone], wash = YR.WASH[tone];
    return `<svg viewBox="0 0 120 120" width="120" height="120" aria-hidden="true">
      <rect width="120" height="120" rx="6" fill="${wash}"/>
      <circle cx="74" cy="48" r="26" fill="${ac}"/>
      <circle cx="46" cy="64" r="16" fill="none" stroke="var(--ink-700)" stroke-opacity="0.35" stroke-width="1.2"/>
      <path d="M16 92C44 80 76 92 104 78" stroke="var(--ink-700)" stroke-opacity="0.3" stroke-width="1" fill="none"/>
    </svg>`;
  }

  /* ---- band motifs ---- */
  function cultureMotif() {
    return `<svg width="280" height="280" viewBox="0 0 280 280" aria-hidden="true">
      <circle cx="150" cy="130" r="100" fill="none" stroke="var(--jade-600)" stroke-opacity="0.5" stroke-width="1"/>
      <circle cx="150" cy="130" r="66" fill="none" stroke="var(--jade-600)" stroke-opacity="0.5" stroke-width="1"/>
      <circle cx="230" cy="220" r="30" fill="var(--gold-300)" fill-opacity="0.7"/>
    </svg>`;
  }

  function cultureHeroMotif() {
    let dots = "";
    for (let r = 0; r < 5; r++) for (let c = 0; c < 5; c++) {
      dots += `<circle cx="${60 + c * 16}" cy="${320 + r * 16}" r="2"/>`;
    }
    return `<svg width="420" height="420" viewBox="0 0 420 420" aria-hidden="true">
      <circle cx="250" cy="180" r="150" fill="none" stroke="var(--gold-500)" stroke-opacity="0.3" stroke-width="1"/>
      <circle cx="250" cy="180" r="100" fill="none" stroke="var(--gold-500)" stroke-opacity="0.3" stroke-width="1"/>
      <circle cx="250" cy="180" r="50" fill="none" stroke="var(--gold-500)" stroke-opacity="0.3" stroke-width="1"/>
      <g fill="var(--gold-500)" fill-opacity="0.28">${dots}</g>
    </svg>`;
  }

  function manifestoLines() {
    let paths = "";
    for (let i = 0; i < 6; i++) {
      paths += `<path d="M0 ${260 + i * 6}C300 ${200 - i * 8} 600 ${300 - i * 4} 900 ${230 - i * 6}C1140 ${180 - i * 4} 1320 ${250 - i * 6} 1440 ${200 - i * 6}"/>`;
    }
    return `<svg class="manifesto-lines" viewBox="0 0 1440 360" preserveAspectRatio="none" aria-hidden="true">
      <g stroke="var(--gold-500)" stroke-opacity="0.18" fill="none" stroke-width="1">${paths}</g>
    </svg>`;
  }

  /* ---- culture translation visuals ---- */
  function transVisual(type) {
    const paper = "var(--paper-100)";
    if (type === "oracle") {
      return `<svg viewBox="0 0 320 240" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
        <rect width="320" height="240" fill="${paper}"/>
        <g stroke="var(--ink-800)" stroke-width="2.4" fill="none" stroke-linecap="round">
          <path d="M120 50V150"/><path d="M90 80H200"/>
          <path d="M120 150L90 190"/><path d="M120 150L160 195"/>
          <path d="M200 70V120"/><path d="M178 100H236"/>
        </g>
        <circle cx="236" cy="60" r="7" fill="var(--terra-500)"/>
      </svg>`;
    }
    if (type === "jade") {
      return `<svg viewBox="0 0 320 240" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
        <rect width="320" height="240" fill="${paper}"/>
        <circle cx="130" cy="120" r="64" fill="var(--jade-500)" fill-opacity="0.4"/>
        <circle cx="190" cy="120" r="64" fill="var(--jade-500)" fill-opacity="0.4"/>
        <circle cx="160" cy="100" r="40" fill="var(--jade-500)" fill-opacity="0.45"/>
      </svg>`;
    }
    let lines = "";
    for (let i = 0; i < 5; i++) {
      lines += `<path d="M${60 + i * 50} 50V190M40 ${70 + i * 28}H280" stroke="var(--ink-700)" stroke-opacity="0.22" stroke-width="1"/>`;
    }
    return `<svg viewBox="0 0 320 240" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <rect width="320" height="240" fill="${paper}"/>${lines}
      <path d="M110 90H210V150H110Z M130 110H190V130H130Z" fill="none" stroke="#5E6E63" stroke-width="2"/>
    </svg>`;
  }

  /* ---- before/after pair visuals ---- */
  function pairVisual(type) {
    if (type === "seal") return `<svg viewBox="0 0 200 200" aria-hidden="true">
      <rect x="36" y="36" width="128" height="128" rx="4" fill="none" stroke="var(--ink-800)" stroke-width="3"/>
      <path d="M70 80H130M70 100H130M70 120H130" stroke="var(--ink-800)" stroke-width="3" stroke-linecap="round"/>
    </svg>`;
    if (type === "grid") {
      let rects = "";
      for (let r = 0; r < 3; r++) for (let c = 0; c < 3; c++) {
        const on = (r + c) % 2 === 0;
        rects += `<rect x="${44 + c * 40}" y="${44 + r * 40}" width="32" height="32" rx="3" fill="${on ? "var(--terra-500)" : "none"}" ${on ? 'fill-opacity="0.85"' : ""} stroke="var(--ink-700)" stroke-opacity="0.4" stroke-width="1"/>`;
      }
      return `<svg viewBox="0 0 200 200" aria-hidden="true">${rects}</svg>`;
    }
    if (type === "bi") return `<svg viewBox="0 0 200 200" aria-hidden="true">
      <circle cx="100" cy="100" r="64" fill="var(--jade-500)" fill-opacity="0.3"/>
      <circle cx="100" cy="100" r="64" fill="none" stroke="var(--jade-600)" stroke-width="2"/>
      <circle cx="100" cy="100" r="24" fill="var(--surface-card)" stroke="var(--jade-600)" stroke-width="2"/>
    </svg>`;
    let ticks = "";
    for (let i = 0; i < 24; i++) {
      const a = (i / 24) * Math.PI * 2;
      ticks += `<line x1="${(100 + Math.cos(a) * 64).toFixed(2)}" y1="${(100 + Math.sin(a) * 64).toFixed(2)}" x2="${(100 + Math.cos(a) * 70).toFixed(2)}" y2="${(100 + Math.sin(a) * 70).toFixed(2)}" stroke="var(--ink-700)" stroke-opacity="0.4" stroke-width="1"/>`;
    }
    return `<svg viewBox="0 0 200 200" aria-hidden="true">${ticks}<circle cx="100" cy="100" r="38" fill="var(--terra-500)"/></svg>`;
  }

  /* ---- brand marks ---- */
  function logoMark() {
    return `<svg width="40" height="40" viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <circle cx="24" cy="24" r="20" stroke="var(--ink-900)" stroke-width="1.4"/>
      <path d="M9 28C15 22 21 25 26 21C30 17.5 35 18 39 22" stroke="var(--ink-700)" stroke-width="1.4" stroke-linecap="round"/>
      <path d="M11 32C17 29 23 30 30 27" stroke="var(--jade-500)" stroke-width="1.3" stroke-linecap="round"/>
      <circle cx="30" cy="15.5" r="3.2" fill="var(--terra-500)"/>
    </svg>`;
  }

  function seal() {
    return `<svg width="44" height="44" viewBox="0 0 40 40" role="img" aria-label="印章 · 瑞">
      <rect x="1.5" y="1.5" width="37" height="37" rx="3" fill="#c65a3a"/>
      <text x="20" y="28" font-family="'Noto Serif TC', serif" font-size="22" font-weight="600" fill="#f7f5f1" text-anchor="middle">瑞</text>
    </svg>`;
  }

  function footerCore() {
    return `<svg width="40" height="40" viewBox="-26 -26 52 52" aria-hidden="true">
      <circle r="24" fill="none" stroke="var(--border-on-ink)" stroke-width="1"/>
      <circle r="11" fill="var(--terra-500)"/>
    </svg>`;
  }

  function footerCoreLight() {
    return `<svg width="40" height="40" viewBox="-26 -26 52 52" aria-hidden="true">
      <circle r="24" fill="none" stroke="var(--border-soft)" stroke-width="1"/>
      <circle r="11" fill="var(--terra-500)"/>
    </svg>`;
  }

  function successCore() {
    return `<div class="pop"><svg width="96" height="96" viewBox="0 0 96 96" aria-hidden="true">
      <circle cx="48" cy="48" r="40" fill="var(--terra-500)"/>
      <path class="check" d="M31 49L43 61L66 36" fill="none" stroke="var(--paper-000)" stroke-width="4.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg></div>`;
  }

  return { RM, icon, creationCore, heroCore, workCover, processFig, aboutVisual, catThumb, cultureMotif, cultureHeroMotif, manifestoLines, transVisual, pairVisual, logoMark, seal, footerCore, footerCoreLight, successCore };
})();
