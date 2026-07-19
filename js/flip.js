/* ============================================================
   芫瑞造物誌 — 翻書閱讀器 (zero-dependency flipbook)
   YRFlip.mount(el, pages[], {start}) -> controls
   ============================================================ */
const YRFlip = (() => {
  const RM = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function preload(src) { if (!src) return; const i = new Image(); i.src = src; }

  function mount(el, pages, opts = {}) {
    const total = pages.length;
    let cur = Math.min(Math.max(opts.start || 0, 0), total - 1);
    let busy = false;

    el.innerHTML = `
      <div class="flip-stage">
        <button class="flip-nav prev" aria-label="上一頁">
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M15 5 8 12l7 7"/></svg>
        </button>
        <div class="flip-book">
          <div class="flip-page current"><img alt="第 1 頁"></div>
          <div class="flip-page turning"><img alt=""></div>
          <div class="flip-spine" aria-hidden="true"></div>
        </div>
        <button class="flip-nav next" aria-label="下一頁">
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="m9 5 7 7-7 7"/></svg>
        </button>
      </div>
      <div class="flip-foot">
        <input class="flip-range" type="range" min="1" max="${total}" value="${cur + 1}" aria-label="頁碼">
        <div class="flip-count"><span class="fc-cur">${cur + 1}</span> / ${total}</div>
      </div>`;

    const book = el.querySelector(".flip-book");
    const curPage = el.querySelector(".flip-page.current");
    const curImg = curPage.querySelector("img");
    const turn = el.querySelector(".flip-page.turning");
    const turnImg = turn.querySelector("img");
    const range = el.querySelector(".flip-range");
    const fcCur = el.querySelector(".fc-cur");
    const prevBtn = el.querySelector(".flip-nav.prev");
    const nextBtn = el.querySelector(".flip-nav.next");

    function paint() {
      curImg.src = pages[cur];
      curImg.alt = `第 ${cur + 1} 頁`;
      range.value = cur + 1;
      fcCur.textContent = cur + 1;
      prevBtn.disabled = cur === 0;
      nextBtn.disabled = cur === total - 1;
      preload(pages[cur + 1]); preload(pages[cur - 1]);
    }
    paint();

    function jump(n) {
      n = Math.min(Math.max(n, 0), total - 1);
      if (n === cur) return; cur = n; paint();
    }

    function flip(dir) {
      const nxt = cur + dir;
      if (busy || nxt < 0 || nxt >= total) return;
      if (RM) { cur = nxt; paint(); return; }
      busy = true;
      turnImg.src = pages[cur];             // outgoing page on the turning leaf
      turn.className = "flip-page turning " + (dir > 0 ? "from-right" : "from-left");
      turn.style.display = "block";
      curImg.src = pages[nxt];              // reveal incoming underneath
      curImg.alt = `第 ${nxt + 1} 頁`;
      requestAnimationFrame(() => requestAnimationFrame(() => turn.classList.add("go")));
      const done = () => {
        turn.style.display = "none";
        turn.className = "flip-page turning";
        cur = nxt; paint(); busy = false;
        turn.removeEventListener("transitionend", done);
      };
      turn.addEventListener("transitionend", done);
      setTimeout(() => { if (busy) done(); }, 900);
    }

    prevBtn.addEventListener("click", () => flip(-1));
    nextBtn.addEventListener("click", () => flip(1));
    range.addEventListener("input", () => jump(+range.value - 1));

    // click halves
    book.addEventListener("click", (e) => {
      const r = book.getBoundingClientRect();
      (e.clientX - r.left) / r.width > 0.5 ? flip(1) : flip(-1);
    });

    // keyboard
    const onKey = (e) => {
      if (e.key === "ArrowRight") flip(1);
      else if (e.key === "ArrowLeft") flip(-1);
    };
    document.addEventListener("keydown", onKey);

    // swipe
    let sx = 0, sy = 0;
    book.addEventListener("touchstart", (e) => { sx = e.touches[0].clientX; sy = e.touches[0].clientY; }, { passive: true });
    book.addEventListener("touchend", (e) => {
      const dx = e.changedTouches[0].clientX - sx, dy = e.changedTouches[0].clientY - sy;
      if (Math.abs(dx) > 40 && Math.abs(dx) > Math.abs(dy)) flip(dx < 0 ? 1 : -1);
    }, { passive: true });

    return { destroy() { document.removeEventListener("keydown", onKey); } };
  }

  return { mount };
})();
