/* ============================================================
   芫瑞造物誌 — SPA router & renderers (vanilla JS, no build)
   Routes: #/  #/about  #/works  #/works/:filter  #/work/:id
           #/creation  #/culture  #/lab  #/contact
   ============================================================ */

(() => {
  const app = document.getElementById("app");
  const S = YRSVG;
  let readerCtl = null;
  const bookPages = (b) => Array.from({ length: b.pages }, (_, i) => `${b.dir}/p${String(i + 1).padStart(3, "0")}.jpg`);

  /* ================= header / footer chrome ================= */
  document.getElementById("logoMark").innerHTML = S.logoMark();
  document.getElementById("footerCore").innerHTML = S.footerCore();

  const deskNav = document.getElementById("deskNav");
  deskNav.innerHTML =
    YR.NAV.map((n) =>
      `<a class="nav-link" data-nav="${n.id}" href="${n.hash}">${n.label}<span class="under"></span><span class="dot"></span></a>`
    ).join("") +
    `<span class="nav-sep"></span><button class="lang-toggle" id="langToggle" aria-label="切換語言">EN</button>`;

  document.getElementById("footerNav").innerHTML =
    YR.NAV.map((n) => `<a href="${n.hash}">${n.label}</a>`).join("");

  const mobileMenu = document.getElementById("mobileMenu");
  const mobileNav = document.getElementById("mobileNav");
  mobileNav.innerHTML = YR.NAV.map((n) => `<a class="nav-link-m" href="${n.hash}">${n.label}</a>`).join("");

  const burger = document.getElementById("burgerBtn");
  const closeMenu = () => { mobileMenu.hidden = true; burger.setAttribute("aria-expanded", "false"); document.body.style.overflow = ""; };
  burger.addEventListener("click", () => { mobileMenu.hidden = false; burger.setAttribute("aria-expanded", "true"); document.body.style.overflow = "hidden"; });
  document.getElementById("mobileClose").addEventListener("click", closeMenu);
  mobileNav.addEventListener("click", (e) => { if (e.target.closest("a")) closeMenu(); });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape" && !mobileMenu.hidden) closeMenu(); });

  document.getElementById("langToggle").addEventListener("click", (e) => {
    e.target.textContent = e.target.textContent === "EN" ? "中" : "EN";
  });

  function setActiveNav(id) {
    deskNav.querySelectorAll(".nav-link").forEach((a) => {
      a.classList.toggle("is-active", a.dataset.nav === id);
    });
  }

  /* ================= reveal-on-scroll ================= */
  let revealObserver = null;
  function armReveals() {
    if (revealObserver) revealObserver.disconnect();
    const els = app.querySelectorAll("[data-reveal]");
    if (S.RM || !("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("is-shown"));
      return;
    }
    revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((en) => {
        if (en.isIntersecting) {
          en.target.classList.add("is-shown");
          revealObserver.unobserve(en.target);
        }
      });
    }, { threshold: 0.08, rootMargin: "0px 0px -8% 0px" });
    els.forEach((el) => {
      const r = el.getBoundingClientRect();
      if (r.top < window.innerHeight * 0.85) el.classList.add("is-shown");
      else revealObserver.observe(el);
    });
  }

  /* ================= shared fragments ================= */
  const btn = (label, href, variant = "primary", arrow = true) =>
    `<a class="btn btn-${variant}" href="${href}">${label}${arrow ? '<svg class="arr" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 12H20M20 12L14 6M20 12L14 18"/></svg>' : ""}</a>`;

  const sectionHeading = (title, eyebrow, action, actionHref) => `
    <div class="section-heading">
      <div>
        <div class="sh-title">${title}</div>
        ${eyebrow ? `<div class="eyebrow sh-eyebrow">${eyebrow}</div>` : ""}
      </div>
      ${action ? `<a class="sh-action" href="${actionHref}">${action}<svg class="arr" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 12H20M20 12L14 6M20 12L14 18"/></svg></a>` : ""}
    </div>`;

  const workCard = (w, big = false) => {
    const soon = !!w.soon;
    const coverInner = w.cover
      ? `<img class="cover-img" src="${w.cover}" alt="${w.title}" loading="lazy">`
      : S.workCover(w.accent, w.id, false);
    const inner = `
      <div class="cover">${coverInner}${soon ? '<div class="soon-overlay">實驗中 · Coming soon</div>' : ""}</div>
      <div>
        <div class="w-cat" style="color:${YR.ACC[w.accent]}">${w.cat}</div>
        <div class="w-title">${w.title}</div>
        <div class="w-desc">${w.desc}</div>
        <div class="w-meta">${String(w.id).padStart(2, "0")} · ${w.year}</div>
      </div>`;
    if (soon) return `<div class="work-card is-soon" data-reveal>${inner}</div>`;
    if (w.book) return `<a class="work-card" href="#/read/${w.id}" data-reveal aria-label="${w.title} — ${w.cat}">${inner}</a>`;
    if (w.link) return `<a class="work-card" href="${w.link}" target="_blank" rel="noopener" data-reveal aria-label="${w.title} — ${w.cat}">${inner}</a>`;
    return `<a class="work-card" href="#/work/${w.id}" data-reveal aria-label="${w.title} — ${w.cat}">${inner}</a>`;
  };

  const contactCTA = () => `
    <section class="contact-cta container" data-reveal>
      <div class="eyebrow">Get in touch · 聯繫我</div>
      <h2>讓我們一起，造一個新的世界。</h2>
      <p>無論是合作、委託，或只是想聊聊設計與文化，都歡迎與我聯繫。</p>
      <div class="cta-row">
        ${btn("寄信給我", "#/contact", "primary")}
        ${btn("下載作品集", "assets/yuanrui-portfolio.pdf", "secondary", false)}
      </div>
    </section>`;

  /* ================= pages ================= */
  function pageHome() {
    return `<div class="page">
      <section class="hero container">
        <div class="hero-grid">
          <div data-reveal>
            <div class="eyebrow">Eastern Creation Archive · 造物者檔案</div>
            <h1>造物 · 創世 · 文化<br>設計，無界而生</h1>
            <div class="hero-latin">We design. We create. We cultivate.</div>
            <p class="hero-intro">以設計為方法，以文化為材料，創造產品、聲音、圖像與未來生活的想像。如女媧造人，我相信造物是一種理解世界的方式。</p>
            <div class="hero-cta">
              ${btn("瀏覽作品", "#/works", "primary")}
              ${btn("關於造物者", "#/about", "secondary")}
            </div>
          </div>
          <div class="hero-visual" data-reveal>${S.heroCore()}</div>
        </div>
      </section>

      <section class="intro-band container">
        <div class="intro-grid" data-reveal>
          <p class="intro-lede">張芫瑞，工業設計學生、跨域創作者。我相信設計的本質是解決問題，更是創造價值與意義。</p>
          <div>
            <p class="intro-sub">從產品到藝術，從聲音到文字，我在不同媒介之間探索造物的可能 —— 在理性與感性、東方與未來之間，尋找有靈魂的形式。</p>
            <div class="intro-tags">
              <span class="tag terra"><span class="tdot"></span>工業設計</span>
              <span class="tag jade"><span class="tdot"></span>文化轉譯</span>
              <span class="tag gold"><span class="tdot"></span>跨域創作</span>
            </div>
          </div>
        </div>
      </section>

      <section class="realms-section container" data-reveal>
        ${sectionHeading("探索我的創造領域", "Explore My Creative Realms", "查看全部", "#/creation")}
        <div class="realms-grid">
          ${YR.REALMS.map((r) => `
            <a class="realm-btn" style="--r-accent:${YR.ACC[r.tone]}" href="${r.id === "music" ? YR.SUNO : "#/creation"}"${r.id === "music" ? ' target="_blank" rel="noopener"' : ""} aria-label="${r.zh}">
              <span class="r-icon">${S.icon(r.id, 38)}</span>
              <span style="text-align:center;">
                <span class="r-zh" style="display:block;">${r.zh}</span>
                <span class="r-en" style="display:block;">${r.en}</span>
              </span>
              <span class="under"></span>
            </a>`).join("")}
        </div>
      </section>

      <section class="ink-band">
        ${S.manifestoLines()}
        <div class="band-inner container manifesto" data-reveal>
          <div class="eyebrow gold">Design Philosophy · 設計理念</div>
          <p>我希望成為一位全能的設計師、藝術家與創造者，<br>融合工程與藝術、東方與未來、理性與感性，<br>創造<span class="soul">有靈魂的設計</span>，傳遞屬於中華文化的美學與力量。</p>
          <div class="seal-wrap">${S.seal()}</div>
        </div>
      </section>

      <section class="about-teaser container" data-reveal>
        <div class="about-teaser-grid">
          <div class="about-teaser-left">
            ${sectionHeading("關於我", "About Me")}
            <div class="about-visual-wrap">${S.aboutVisual()}</div>
          </div>
          <div>
            <p class="lead">我相信設計的本質是解決問題，更是創造價值與意義。期許自己如女媧般，創造有溫度、有文化根基的未來。</p>
            <p class="sub">融合工程的理性與藝術的感性，在產品、藝術、聲音與文字之間，建立一套屬於自己的造物語言。</p>
            <div class="cta">${btn("了解更多", "#/about", "secondary")}</div>
          </div>
        </div>
      </section>

      <section class="works-preview container" data-reveal>
        ${sectionHeading("精選作品", "Selected Works", "查看全部", "#/works")}
        <div class="works-preview-grid">
          ${YR.WORKS.slice(0, 3).map((w) => workCard(w)).join("")}
        </div>
      </section>

      <section class="jade-band">
        <div class="motif">${S.cultureMotif()}</div>
        <div class="container">
          <div class="band-inner" data-reveal>
            <div class="eyebrow jade" style="margin-bottom:24px;">Culture Research · 文化觀</div>
            <p class="quote">「天地有大美而不言，<br>設計亦然。」</p>
            <div class="cite">—— 莊子</div>
            <p class="body">我將甲骨文的線條、玉石的溫潤、青銅器的紋樣，轉譯為當代的設計語言 —— 不是復刻過去，而是讓文化在今日重新生長。</p>
            ${btn("閱讀文化觀", "#/culture", "ghost")}
          </div>
        </div>
      </section>

      ${contactCTA()}
    </div>`;
  }

  function pageWorks(filter = "all") {
    const list = filter === "all" ? YR.WORKS : YR.WORKS.filter((w) => w.group === filter);
    return `<div class="page">
      <section class="page-head container" data-reveal>
        <div class="eyebrow">Selected Works · 作品集</div>
        <h1>作品集</h1>
        <p class="lede">跨越產品、藝術、聲音與文字的造物紀錄。每一件作品都是一次文化與形式的轉譯實驗。</p>
        <div class="count">共 ${YR.WORKS.length} 件作品 · SINCE 2021</div>
      </section>
      <div class="filter-bar">
        <div class="container inner" role="tablist" aria-label="作品分類篩選">
          ${YR.FILTERS.map((f) => `
            <button class="filter-tab${f.id === filter ? " is-active" : ""}" data-filter="${f.id}" role="tab" aria-selected="${f.id === filter}">${f.label}<span class="under"></span></button>`).join("")}
        </div>
      </div>
      <section class="works-grid-section container">
        <div class="works-grid" id="worksGrid">
          ${list.map((w) => workCard(w)).join("")}
        </div>
      </section>
    </div>`;
  }

  function pageDetail(id) {
    const w = YR.WORKS.find((x) => x.id === id && !x.soon);
    if (!w) return pageWorks();
    const dd = YR.DETAILS[w.id];
    const reals = YR.WORKS.filter((x) => !x.soon).map((x) => x.id);
    const idx = reals.indexOf(w.id);
    const prevW = YR.WORKS.find((x) => x.id === reals[(idx - 1 + reals.length) % reals.length]);
    const nextW = YR.WORKS.find((x) => x.id === reals[(idx + 1) % reals.length]);
    return `<div class="page">
      <section class="detail-head container" data-reveal>
        <div class="breadcrumb">
          <a href="#/works">作品集</a><span>/</span><span>${w.cat}</span><span>/</span><span class="here">${w.title}</span>
        </div>
        <div class="w-cat" style="color:${YR.ACC[w.accent]}">${w.cat}</div>
        <h1>${w.title}</h1>
        <div class="detail-meta">
          ${dd.meta.map((m) => `<div><div class="k">${m.k}</div><div class="v">${m.v}</div></div>`).join("")}
        </div>
      </section>
      <section class="detail-hero container" data-reveal>
        <div class="frame">${w.cover ? `<img class="cover-img" src="${w.cover}" alt="${w.title}">` : S.workCover(w.accent, w.id, true)}</div>
      </section>
      <section class="detail-body container">
        ${dd.sections.map((sec, i) => `
          <div class="detail-sec" data-reveal>
            <div class="sec-head">
              <span class="no">${String(i + 1).padStart(2, "0")}</span>
              <h2>${sec.h}</h2>
            </div>
            <p>${sec.p}</p>
            ${sec.fig ? `<div class="fig">${S.processFig(w.accent)}</div>` : ""}
          </div>`).join("")}
      </section>
      ${dd.gallery && dd.gallery.length ? `<section class="detail-gallery container" data-reveal>${dd.gallery.map((g) => `<figure class="g-item"><img src="${g}" alt="${w.title}" loading="lazy"></figure>`).join("")}</section>` : ""}
      <section class="detail-nav container">
        <div class="row">
          <a href="#/work/${prevW.id}"><div class="lbl">← 上一件</div><div class="ttl">${prevW.title}</div></a>
          <a class="next" href="#/work/${nextW.id}"><div class="lbl">下一件 →</div><div class="ttl">${nextW.title}</div></a>
        </div>
      </section>
    </div>`;
  }

  function pageAbout() {
    return `<div class="page">
      <section class="page-head container" data-reveal>
        <div class="eyebrow">About · 關於造物者</div>
        <h1>關於我</h1>
        <p class="lede-serif">工業設計學生，跨域創作者。期許自己如女媧般，創造有溫度、有文化根基的未來。</p>
      </section>

      <section class="container" style="padding-bottom: clamp(64px, 8vw, 110px); margin-top: clamp(40px, 5vw, 64px);" data-reveal>
        <div class="about-hero-grid" style="padding-top:0; border-top:none;">
          <div style="display:flex; justify-content:center;">${S.aboutVisual()}</div>
          <div>
            <p class="lead">我相信設計的本質是解決問題，更是創造價值與意義。從產品到藝術，從聲音到文字，我在不同媒介之間探索造物的可能。</p>
            <p class="sub">融合工程的理性與藝術的感性，東方的厚度與未來的想像 —— 我希望建立一套屬於自己的造物語言，讓每一件作品都帶著文化的根，又面向尚未發生的未來。</p>
          </div>
        </div>
      </section>

      <section class="method-section">
        <div class="container" data-reveal>
          <div class="eyebrow" style="margin-bottom:12px;">My Methodology</div>
          <h2 class="section-title-lg">我的方法論</h2>
          <div class="method-grid">
            ${YR.METHODS.map((m) => `
              <div class="method-card">
                <div class="m-icon">${S.icon(m.id, 36)}</div>
                <div class="m-zh">${m.zh}</div>
                <div class="m-en">${m.en}</div>
                <p>${m.p}</p>
              </div>`).join("")}
          </div>
        </div>
      </section>

      <section class="skills-section container" data-reveal>
        <div class="eyebrow" style="margin-bottom:12px;">Capabilities</div>
        <h2 class="section-title-lg">能力光譜</h2>
        <div class="skills-grid" id="skillsGrid">
          ${YR.SKILLS.map((sk) => `
            <div class="skill" style="--pct:${sk.v}%">
              <div class="row"><span class="label">${sk.label}</span><span class="pct">${sk.v}%</span></div>
              <div class="track"><div class="bar" style="background:${YR.ACC[sk.tone]}"></div></div>
            </div>`).join("")}
        </div>
      </section>

      <section class="timeline-section container">
        <div class="eyebrow" style="margin-bottom:12px;" data-reveal>Timeline</div>
        <h2 class="section-title-lg" data-reveal>歷程</h2>
        <div class="timeline">
          ${YR.TIMELINE.map((t) => `
            <div class="t-item" data-reveal>
              <div class="t-year">${t.year}</div>
              <div class="t-title">${t.title}</div>
              <p class="t-desc">${t.desc}</p>
            </div>`).join("")}
        </div>
      </section>

      <section class="ink-band">
        ${S.manifestoLines()}
        <div class="band-inner container about-manifesto" data-reveal>
          <div class="rule"></div>
          <p>我希望成為一位全能的設計師、藝術家與創造者，創造<span style="color:var(--terra-500)">有靈魂的設計</span>，傳遞屬於中華文化的美學與力量。</p>
        </div>
      </section>

      <section class="about-cta container" data-reveal>
        <div class="cta-row">
          ${btn("查看作品", "#/works", "primary")}
          ${btn("與我聯絡", "#/contact", "secondary")}
        </div>
      </section>
    </div>`;
  }

  function pageCreation() {
    return `<div class="page">
      <section class="page-head container" data-reveal>
        <div class="eyebrow">Creation Realms · 創作分類</div>
        <h1>創作分類</h1>
        <p class="lede-serif" style="color:var(--text-muted); font-size:clamp(19px,2.2vw,24px); max-width:640px;">八個領域，一種造物精神。</p>
      </section>
      <section class="cats-section container" style="margin-top: clamp(40px, 5vw, 56px);">
        <div class="cats-grid">
          ${YR.CATS.map((c) => `
            <a class="cat-card" style="--c-accent:${YR.ACC[c.tone]}" href="${c.to}"${c.to.startsWith("http") ? ' target="_blank" rel="noopener"' : ""} data-reveal>
              <div class="inner">
                <div class="c-icon">${S.icon(c.icon, 36)}</div>
                <div class="c-main">
                  <div class="c-title-row"><span class="c-zh">${c.zh}</span><span class="c-en">${c.en}</span></div>
                  <p class="c-desc">${c.desc}</p>
                  <div class="c-foot"><span class="c-count">${c.count}</span><span class="c-arrow">進入 →</span></div>
                </div>
                <div class="c-thumb">${S.catThumb(c.tone)}</div>
              </div>
            </a>`).join("")}
        </div>
      </section>
      <section class="creation-statement">
        <div class="container inner" data-reveal>
          <p>設計、藝術、聲音與文字本是一體。<br>我不以學科分隔創作，而以「造物」貫穿其間 —— 因為它們回應的，都是同一個關於人與世界的問題。</p>
          <div class="cta">${btn("瀏覽全部作品", "#/works", "primary")}</div>
        </div>
      </section>
    </div>`;
  }

  function pageCulture() {
    return `<div class="page">
      <section class="culture-hero">
        <div class="motif">${S.cultureHeroMotif()}</div>
        <div class="band-inner container" data-reveal>
          <div class="eyebrow gold">Culture Research · 文化觀</div>
          <div class="quote-row">
            <div class="rule"></div>
            <div>
              <p class="quote">天地有大美而不言，<br>設計亦然。</p>
              <div class="cite">—— 莊子</div>
            </div>
          </div>
        </div>
      </section>

      <section class="culture-statement container" data-reveal>
        <p>我將甲骨文的線條、玉石的溫潤、青銅器的紋樣，轉譯為當代的設計語言 —— 不是<span class="dim">復刻過去</span>，而是讓<span class="grow">文化在今日重新生長</span>。</p>
      </section>

      <section class="translations-section container">
        <div class="translations-grid">
          ${YR.TRANSLATIONS.map((tr) => `
            <div class="trans-card" data-reveal>
              <div class="visual">${S.transVisual(tr.type)}</div>
              <div class="title-row"><span>${tr.zh}</span><span class="arr">→</span><span>${tr.to}</span></div>
              <div class="t-en">${tr.en}</div>
              <p>${tr.p}</p>
            </div>`).join("")}
        </div>
      </section>

      <section class="pairs-section">
        <div class="container inner">
          <div class="eyebrow" style="margin-bottom:12px;" data-reveal>Translation</div>
          <h2 class="section-title-lg" data-reveal>傳統 → 當代 · 轉譯對照</h2>
          <div class="pairs-list">
            ${YR.PAIRS.map((p) => `
              <div class="pair-row" data-reveal>
                <div class="pair-cell"><div class="box">${S.pairVisual(p.before)}</div><div class="lbl">${p.beforeLabel}</div></div>
                <div class="pair-arrow">→</div>
                <div class="pair-cell"><div class="box">${S.pairVisual(p.after)}</div><div class="lbl">${p.afterLabel}</div></div>
              </div>`).join("")}
          </div>
        </div>
      </section>

      <section class="keywords-section container" data-reveal>
        <div class="eyebrow">Keywords · 文化關鍵詞</div>
        <div class="keywords">
          ${YR.KEYWORDS.map((k) => `<span class="keyword">${k}</span>`).join("")}
        </div>
        <div class="cta">${btn("看這些觀點如何落在作品上", "#/works", "ghost")}</div>
      </section>
    </div>`;
  }

  function pageLab() {
    return `<div class="page">
      <section class="page-head container" data-reveal>
        <div class="eyebrow">Creation Lab · 實驗室</div>
        <h1>實驗室</h1>
        <p class="lede" style="max-width:600px;">在這裡，工具也是創作的一部分。這是把設計過程攤開來看的地方 —— AI、程式、3D 與互動的試驗場。</p>
      </section>

      <section class="lab-demo-section container" data-reveal>
        <div class="lab-demo">
          <div class="demo-head">
            <div class="demo-title">
              <span class="live-dot"></span>
              <span class="demo-name">參數化造物核心</span>
            </div>
            <span class="demo-tag">LIVE DEMO · Canvas</span>
          </div>
          <div class="demo-body">
            <div class="canvas-wrap"><canvas id="labCanvas" aria-label="參數化生成圖形" role="img"></canvas></div>
            <div class="controls">
              <p class="hint">調整參數，生成屬於你的造物核心。每一次改變，都是一次微型的造物。</p>
              <div>
                <div class="ctrl-label"><span>環數 Rings</span><span class="val" id="valRings">5</span></div>
                <input type="range" id="ctlRings" min="3" max="9" step="1" value="5" aria-label="環數">
              </div>
              <div>
                <div class="ctrl-label"><span>粒子 Particles</span><span class="val" id="valParticles">64</span></div>
                <input type="range" id="ctlParticles" min="0" max="180" step="4" value="64" aria-label="粒子數">
              </div>
              <div>
                <div class="ctrl-label"><span>轉速 Speed</span><span class="val" id="valSpeed">40</span></div>
                <input type="range" id="ctlSpeed" min="0" max="100" step="1" value="40" aria-label="轉速">
              </div>
              <div>
                <div class="ctrl-label"><span>色彩 Hue</span></div>
                <div class="hue-row" id="hueRow">
                  <button class="hue-btn is-active" data-hue="terra" style="background:var(--terra-500)" aria-label="陶土"></button>
                  <button class="hue-btn" data-hue="jade" style="background:var(--jade-500)" aria-label="青瓷"></button>
                  <button class="hue-btn" data-hue="bronze" style="background:#5E6E63" aria-label="青銅"></button>
                  <button class="hue-btn" data-hue="gold" style="background:var(--gold-500)" aria-label="古金"></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="experiments-section container">
        <div class="eyebrow" style="margin-bottom:12px;" data-reveal>Experiments</div>
        <h2 class="section-title-lg" data-reveal style="font-size:clamp(24px,3vw,32px);">實驗紀錄</h2>
        <div class="experiments-grid">
          ${YR.EXPERIMENTS.map((e) => `
            <div class="exp-card" data-reveal>
              <div class="top">
                <div class="thumb">${S.catThumb(e.tone)}</div>
                <div class="status ${e.status}"><span class="dot"></span>${e.status === "live" ? "進行中" : "完成"}</div>
              </div>
              <div class="e-title">${e.title}</div>
              <p class="e-note">${e.note}</p>
              <div class="tools">${e.tools.map((t) => `<span class="tool">${t}</span>`).join("")}</div>
            </div>`).join("")}
        </div>
      </section>

      <section class="toolbox-section">
        <div class="container" data-reveal>
          <div class="eyebrow">Toolbox · 工具棧</div>
          <div class="toolbox">${YR.TOOLBOX.map((t) => `<span class="chip">${t}</span>`).join("")}</div>
        </div>
      </section>

      <section class="lab-closing container" data-reveal>
        <p>我把設計過程攤開來看 —— 因為失敗的草稿、未完成的程式與半成形的想法，本身就是造物的一部分。</p>
      </section>
    </div>`;
  }

  function pageContact() {
    return `<div class="page">
      <section class="contact-hero">
        ${S.manifestoLines()}
        <div class="band-inner container" data-reveal>
          <div>
            <div class="eyebrow gold">Get in touch · 聯繫我</div>
            <h1>讓我們一起，<br>造一個新的世界。</h1>
            <p>無論是合作、委託，或只是想聊聊設計與文化，都歡迎與我聯繫。</p>
          </div>
          <div class="core-wrap"><div>${S.creationCore()}</div></div>
        </div>
      </section>

      <section class="contact-cards container" data-reveal>
        <div class="grid">
          <a class="info-card" href="mailto:zhangyanrui96@gmail.com">
            <div class="k">Email</div>
            <div class="v">zhangyanrui96@gmail.com</div>
          </a>
          <a class="info-card" href="https://suno.com/@andrejangcreator223" target="_blank" rel="noopener">
            <div class="k">Music · Suno</div>
            <div class="v">@andrejangcreator223</div>
          </a>
          <a class="info-card center btn-ghost-card" href="assets/yuanrui-portfolio.pdf" download>
            <span class="btn btn-ghost">下載作品集 PDF<svg class="arr" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 12H20M20 12L14 6M20 12L14 18"/></svg></span>
          </a>
        </div>
      </section>

      <section class="contact-form-section container">
        <div id="formWrap">
          <form class="form-card" id="contactForm" novalidate>
            <div class="fields">
              <div>
                <label for="fName">姓名</label>
                <input class="field-input" id="fName" name="name" type="text" placeholder="你的名字" autocomplete="name">
                <div class="field-err" id="errName"></div>
              </div>
              <div>
                <label for="fEmail">Email</label>
                <input class="field-input" id="fEmail" name="email" type="email" placeholder="you@example.com" autocomplete="email">
                <div class="field-err" id="errEmail"></div>
              </div>
              <div>
                <label for="fType">合作類型</label>
                <select class="field-input" id="fType" name="type">
                  <option value="">請選擇…</option>
                  <option value="產品設計">產品設計</option>
                  <option value="藝術合作">藝術合作</option>
                  <option value="委託創作">委託創作</option>
                  <option value="其他">其他</option>
                </select>
                <div class="field-err" id="errType"></div>
              </div>
              <div>
                <label for="fMsg">訊息</label>
                <textarea class="field-input" id="fMsg" name="message" rows="4" placeholder="想聊些什麼？"></textarea>
                <div class="field-err" id="errMsg"></div>
              </div>
              <div style="margin-top:6px;">
                <button class="form-submit" type="submit" id="submitBtn">寄信給我</button>
              </div>
            </div>
          </form>
        </div>
      </section>

      <section class="contact-footer-band" data-reveal>
        <div class="core">${S.footerCoreLight()}</div>
        <div class="line">芫瑞造物誌 · 造一個新的世界</div>
      </section>
    </div>`;
  }

  function pageRead(id) {
    const w = YR.WORKS.find((x) => x.id === id && x.book);
    if (!w) return pageWorks();
    return `<div class="page">
      <section class="detail-head read-head container" data-reveal>
        <div class="breadcrumb"><a href="#/works">作品集</a><span>/</span><span>${w.cat}</span><span>/</span><span class="here">${w.title}</span></div>
        <div class="w-cat" style="color:${YR.ACC[w.accent]}">${w.cat}</div>
        <h1>${w.title}</h1>
        ${w.desc ? `<p class="lede" style="max-width:640px;">${w.desc}</p>` : ""}
        <div class="read-actions">
          ${btn("← 回作品集", "#/works", "secondary")}
          ${w.pdf ? btn("下載 PDF", w.pdf, "ghost", false) : ""}
        </div>
      </section>
      <section class="reader-wrap container"><div id="flipMount"></div></section>
    </div>`;
  }

  function initReader(id) {
    const w = YR.WORKS.find((x) => x.id === id && x.book);
    const mountEl = document.getElementById("flipMount");
    if (!w || !mountEl) return;
    readerCtl = YRFlip.mount(mountEl, bookPages(w.book), {});
  }

  /* ================= lab canvas demo ================= */
  let labRAF = null;
  function stopLab() { if (labRAF) { cancelAnimationFrame(labRAF); labRAF = null; } }

  function initLab() {
    const c = document.getElementById("labCanvas");
    if (!c) return;
    const state = { rings: 5, particles: 64, speed: 40, hue: "terra" };
    const HUE = { terra: "#c65a3a", jade: "#6ca7a0", bronze: "#5E6E63", gold: "#d8b36a" };
    const t0 = performance.now();

    const bind = (id, valId, key) => {
      const el = document.getElementById(id);
      el.addEventListener("input", () => {
        state[key] = +el.value;
        document.getElementById(valId).textContent = el.value;
      });
    };
    bind("ctlRings", "valRings", "rings");
    bind("ctlParticles", "valParticles", "particles");
    bind("ctlSpeed", "valSpeed", "speed");
    document.getElementById("hueRow").addEventListener("click", (e) => {
      const b = e.target.closest(".hue-btn");
      if (!b) return;
      state.hue = b.dataset.hue;
      document.querySelectorAll(".hue-btn").forEach((x) => x.classList.toggle("is-active", x === b));
    });

    function draw() {
      const dpr = Math.min(2, window.devicePixelRatio || 1);
      const rect = c.getBoundingClientRect();
      const w = rect.width, h = rect.height;
      if (w < 2 || h < 2) { labRAF = requestAnimationFrame(draw); return; }
      if (c.width !== Math.round(w * dpr) || c.height !== Math.round(h * dpr)) {
        c.width = Math.round(w * dpr); c.height = Math.round(h * dpr);
      }
      const ctx = c.getContext("2d");
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, w, h);
      const cx = w / 2, cy = h / 2;
      const hue = HUE[state.hue];
      const t = (performance.now() - t0) / 1000;
      const rot = S.RM ? 0 : t * (state.speed / 100) * 0.7;
      const maxR = Math.min(w, h) * 0.42;
      for (let i = 0; i < state.rings; i++) {
        const rr = maxR * (0.34 + 0.66 * (i + 1) / state.rings);
        ctx.beginPath(); ctx.arc(cx, cy, rr, 0, Math.PI * 2);
        ctx.strokeStyle = "rgba(54,51,47,0.14)"; ctx.lineWidth = 1; ctx.stroke();
        const ticks = 24 + i * 4;
        for (let k = 0; k < ticks; k++) {
          const a = rot * (i % 2 ? -1 : 1) + (k / ticks) * Math.PI * 2;
          const r2 = rr + (k % 4 === 0 ? 7 : 4);
          ctx.beginPath();
          ctx.moveTo(cx + Math.cos(a) * rr, cy + Math.sin(a) * rr);
          ctx.lineTo(cx + Math.cos(a) * r2, cy + Math.sin(a) * r2);
          ctx.strokeStyle = "rgba(54,51,47,0.28)"; ctx.lineWidth = 1; ctx.stroke();
        }
      }
      for (let p = 0; p < state.particles; p++) {
        const ring = 0.32 + ((p % state.rings) + 1) / (state.rings + 1) * 0.68;
        const rr = maxR * ring;
        const a = p * 2.39996 + rot * (0.4 + (p % 5) * 0.12);
        ctx.beginPath();
        ctx.arc(cx + Math.cos(a) * rr, cy + Math.sin(a) * rr, 1.4 + (p % 3) * 0.7, 0, Math.PI * 2);
        ctx.fillStyle = p % 7 === 0 ? hue : "rgba(54,51,47,0.42)"; ctx.fill();
      }
      ctx.beginPath(); ctx.arc(cx, cy, maxR * 0.26, 0, Math.PI * 2);
      ctx.fillStyle = hue; ctx.fill();
      labRAF = requestAnimationFrame(draw);
    }
    labRAF = requestAnimationFrame(draw);
  }

  /* ================= skills bars ================= */
  function initSkills() {
    const grid = document.getElementById("skillsGrid");
    if (!grid) return;
    const fire = () => grid.querySelectorAll(".skill").forEach((el, i) => {
      setTimeout(() => el.classList.add("is-in"), 120 + i * 60);
    });
    if (S.RM || !("IntersectionObserver" in window)) { fire(); return; }
    const io = new IntersectionObserver((entries) => {
      if (entries.some((e) => e.isIntersecting)) { fire(); io.disconnect(); }
    }, { threshold: 0.2 });
    io.observe(grid);
  }

  /* ================= works filter (in-page, no rerender) ================= */
  function initWorksFilter(current) {
    const tabs = app.querySelectorAll(".filter-tab");
    tabs.forEach((tab) => {
      tab.addEventListener("click", () => {
        const f = tab.dataset.filter;
        // update hash without full re-render scroll jump
        history.replaceState(null, "", f === "all" ? "#/works" : `#/works/${f}`);
        tabs.forEach((t) => {
          t.classList.toggle("is-active", t === tab);
          t.setAttribute("aria-selected", String(t === tab));
        });
        const list = f === "all" ? YR.WORKS : YR.WORKS.filter((w) => w.group === f);
        const grid = document.getElementById("worksGrid");
        grid.innerHTML = list.map((w) => workCard(w)).join("");
        grid.querySelectorAll("[data-reveal]").forEach((el) => el.classList.add("is-shown"));
      });
    });
  }

  /* ================= contact form ================= */
  function initContactForm() {
    const form = document.getElementById("contactForm");
    if (!form) return;
    const fields = {
      name: { el: document.getElementById("fName"), err: document.getElementById("errName"), test: (v) => (v.trim() ? "" : "請輸入姓名") },
      email: { el: document.getElementById("fEmail"), err: document.getElementById("errEmail"), test: (v) => (!v.trim() ? "請輸入 Email" : /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(v.trim()) ? "" : "Email 格式不正確") },
      type: { el: document.getElementById("fType"), err: document.getElementById("errType"), test: (v) => (v ? "" : "請選擇合作類型") },
      msg: { el: document.getElementById("fMsg"), err: document.getElementById("errMsg"), test: (v) => (v.trim() ? "" : "請輸入訊息") },
    };
    Object.values(fields).forEach((f) => {
      f.el.addEventListener("input", () => {
        f.el.classList.remove("has-error");
        f.err.classList.remove("is-on");
      });
    });
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      let ok = true;
      Object.values(fields).forEach((f) => {
        const msg = f.test(f.el.value);
        f.el.classList.toggle("has-error", !!msg);
        f.err.textContent = msg;
        f.err.classList.toggle("is-on", !!msg);
        if (msg) ok = false;
      });
      if (!ok) return;
      const btnEl = document.getElementById("submitBtn");
      btnEl.disabled = true;
      btnEl.textContent = "送出中…";
      const subject = encodeURIComponent(`[作品集網站] ${fields.type.el.value} — ${fields.name.el.value}`);
      const body = encodeURIComponent(`姓名：${fields.name.el.value}\nEmail：${fields.email.el.value}\n合作類型：${fields.type.el.value}\n\n${fields.msg.el.value}`);
      window.location.href = `mailto:zhangyanrui96@gmail.com?subject=${subject}&body=${body}`;
      setTimeout(() => {
        document.getElementById("formWrap").innerHTML = `
          <div class="form-success">
            <div class="core">${S.successCore()}</div>
            <div class="ttl">訊息已備妥</div>
            <p>已為你開啟郵件程式，送出即可。<br>謝謝你的來信，我會盡快回覆。</p>
            <button class="btn btn-secondary" id="resetFormBtn">再寄一封</button>
          </div>`;
        document.getElementById("resetFormBtn").addEventListener("click", () => render());
      }, 900);
    });
  }

  /* ================= router ================= */
  function parseHash() {
    const h = (location.hash || "#/").replace(/^#\/?/, "");
    const parts = h.split("/").filter(Boolean);
    if (parts.length === 0) return { page: "home" };
    if (parts[0] === "works") return { page: "works", filter: parts[1] || "all" };
    if (parts[0] === "work") return { page: "detail", id: parseInt(parts[1], 10) || 1 };
    if (parts[0] === "read") return { page: "read", id: parseInt(parts[1], 10) || 1 };
    if (["about", "creation", "culture", "lab", "contact"].includes(parts[0])) return { page: parts[0] };
    return { page: "home" };
  }

  function render() {
    stopLab();
    if (readerCtl) { if (readerCtl.destroy) readerCtl.destroy(); readerCtl = null; }
    const r = parseHash();
    let html = "";
    switch (r.page) {
      case "works": html = pageWorks(r.filter); break;
      case "detail": html = pageDetail(r.id); break;
      case "read": html = pageRead(r.id); break;
      case "about": html = pageAbout(); break;
      case "creation": html = pageCreation(); break;
      case "culture": html = pageCulture(); break;
      case "lab": html = pageLab(); break;
      case "contact": html = pageContact(); break;
      default: html = pageHome();
    }
    app.innerHTML = html;
    window.scrollTo({ top: 0, behavior: "auto" });

    const navId = (r.page === "detail" || r.page === "read") ? "works" : r.page;
    setActiveNav(navId);
    const w = (r.page === "detail" || r.page === "read") ? YR.WORKS.find((x) => x.id === r.id) : null;
    document.title = w ? `${w.title} · 芫瑞造物誌` : (YR.TITLES[r.page] || YR.TITLES.home);

    armReveals();
    if (r.page === "read") initReader(r.id);
    if (r.page === "lab") initLab();
    if (r.page === "about") initSkills();
    if (r.page === "works") initWorksFilter(r.filter);
    if (r.page === "contact") initContactForm();
  }

  window.addEventListener("hashchange", render);
  render();
})();
