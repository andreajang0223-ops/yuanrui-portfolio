/* ============================================================
   芫瑞造物誌 — Content data (real works)
   ============================================================ */

const YR = {};

YR.NAV = [
  { id: "home", hash: "#/", label: "首頁" },
  { id: "about", hash: "#/about", label: "關於我" },
  { id: "works", hash: "#/works", label: "作品集" },
  { id: "creation", hash: "#/creation", label: "創作分類" },
  { id: "culture", hash: "#/culture", label: "文化觀" },
  { id: "lab", hash: "#/lab", label: "實驗室" },
  { id: "contact", hash: "#/contact", label: "聯繫我" },
];

YR.SUNO = "https://suno.com/@andrejangcreator223";

YR.ACC = { terra: "var(--terra-500)", jade: "var(--jade-500)", gold: "var(--gold-500)", ink: "var(--ink-900)", bronze: "#5E6E63", jadeDeep: "var(--jade-600)" };
YR.WASH = { terra: "var(--terra-100)", jade: "var(--jade-100)", gold: "var(--gold-100)", ink: "var(--paper-200)", bronze: "#E3E7E3", jadeDeep: "var(--jade-100)" };

YR.REALMS = [
  { id: "product", zh: "產品設計", en: "Product Design", tone: "terra" },
  { id: "art", zh: "平面設計", en: "Graphic Design", tone: "jade" },
  { id: "music", zh: "音樂創作", en: "Music", tone: "bronze" },
  { id: "invention", zh: "早期作品", en: "Early Works", tone: "gold" },
  { id: "writing", zh: "作品輯", en: "Portfolio", tone: "ink" },
  { id: "culture", zh: "文化研究", en: "Culture", tone: "jadeDeep" },
];

YR.WORKS = [
  { id: 1, title: "掌中乾坤 · 客製化戲偶 App", cat: "介面設計 · 畢業製作", group: "product", accent: "terra", year: "2026", cover: "assets/works/puppet-app.jpg", desc: "結合布袋戲文化與現代介面的客製化戲偶 App。" },
  { id: 2, title: "個人品牌識別系統", cat: "平面設計 · 品牌識別", group: "art", accent: "jade", year: "2025", cover: "assets/works/cis.jpg", desc: "為自己建立的標準字、標誌與視覺語言。" },
  { id: 3, title: "色彩博物館", cat: "文化研究 · 色彩教育", group: "culture", accent: "jadeDeep", year: "2024", cover: "assets/works/color-museum.jpg", desc: "把色彩展開成跨越藝術、工藝與文化的知識場域。" },
  { id: 4, title: "芫瑞作品輯", cat: "平面編排 · 作品集", group: "writing", accent: "ink", year: "2025", cover: "assets/works/grad-portfolio.jpg", desc: "把跨域創作收攏成一條可被閱讀的脈絡。" },
  { id: 5, title: "產品設計作品集", cat: "產品設計 · 課程作品", group: "product", accent: "terra", year: "2023", cover: "assets/works/product-portfolio.jpg", desc: "大學階段的產品提案與造形練習。" },
  { id: 6, title: "設計啟蒙 · 高中作品集", cat: "早期作品 · 工程設計", group: "invention", accent: "gold", year: "2021", cover: "assets/works/highschool.jpg", desc: "工程設計專題與數位創意，走上設計的起點。" },
  { id: 7, title: "音樂創作 · Suno", cat: "音樂創作 · Suno", group: "music", accent: "bronze", year: "2024", link: "https://suno.com/@andrejangcreator223", desc: "在 Suno 上的 AI 音樂創作，點擊前往主頁聆聽。" },
];

YR.DETAILS = {
  1: {
    meta: [{ k: "Year", v: "2026" }, { k: "Category", v: "介面設計 · 畢業製作" }, { k: "Medium", v: "Flutter App" }, { k: "Role", v: "組長 · 前端 · AI 生圖" }, { k: "Tools", v: "Flutter · Firebase · Imagen" }],
    gallery: ["assets/works/gallery/puppet-1.jpg", "assets/works/gallery/puppet-2.jpg", "assets/works/gallery/puppet-3.jpg", "assets/works/gallery/puppet-4.jpg", "assets/works/gallery/puppet-5.jpg", "assets/works/gallery/puppet-6.jpg"],
    sections: [
      { h: "概述", p: "「掌中乾坤」是一款結合台灣布袋戲文化與現代行動介面的客製化戲偶 App。使用者可以像捏一尊自己的戲偶一樣，客製妝容、髮型、布料與工藝技法，讓傳統掌中戲的角色美學，在手機上被重新理解與延續。" },
      { h: "文化為基礎", fig: true, p: "專案第一階段以布袋戲的文化考據為根，整理生、旦、淨、末、丑各類角色的視覺特徵與服裝規制，並參考傳統神明彩與布幔的紋飾細節，確立「靛藍、霧金、朱紅」的主色系 —— 讓介面的文化語彙來自真實的工藝，而非表面的復古。" },
      { h: "從研究到實作", p: "我擔任組長並負責前端與後端開發：以 Flutter 建構 App 的頁面骨架與狀態管理，串接 Firebase 處理資料與帳號，並整合 Google Imagen API，讓使用者的客製選擇能即時生成專屬的戲偶圖像。跨域協作中，我在設計稿確認前預留彈性的介面規格，讓技術與視覺能同步推進。" },
      { h: "成果", p: "一套可實際操作的客製化戲偶 App，涵蓋角色選擇、妝容 / 髮型 / 布料 / 工藝技法客製與訂單追蹤流程，並以此參加新一代設計展。團隊成員：張芫瑞、游量鈞、陳宥緯；指導老師：張鴻兪。" },
      { h: "反思", p: "這個專案讓我體會到，讓文化「活著」的方式，不是把它放進玻璃櫃，而是讓它能被今天的人重新使用、重新創造。掌中乾坤是一次把研究、程式與設計縫合在一起的練習。" },
    ],
  },
  2: {
    meta: [{ k: "Year", v: "2025" }, { k: "Category", v: "平面設計" }, { k: "Medium", v: "品牌識別 · CIS" }, { k: "Role", v: "設計" }, { k: "Tools", v: "Illustrator" }],
    gallery: ["assets/works/gallery/cis-2.jpg", "assets/works/gallery/cis-3.jpg"],
    sections: [
      { h: "概述", p: "一套為自己建立的個人品牌識別系統，從標準字、標誌到色彩與應用，確立「芫瑞造物」的視覺語言。" },
      { h: "標準字與標誌", fig: true, p: "以字體結構的比例與筆畫關係為出發，反覆推敲標準字的重心與留白，讓標誌在放大與縮小時都能保有辨識度與氣質。" },
      { h: "應用", p: "將識別延伸到名片、印章與各類版面，測試同一套語言在不同載體上的一致性。" },
      { h: "反思", p: "為自己做識別，是一種把「我是誰、我相信什麼」翻譯成形狀的過程。" },
    ],
  },
  3: {
    meta: [{ k: "Year", v: "2024" }, { k: "Category", v: "文化研究 · 色彩教育" }, { k: "Medium", v: "教材 · 展示設計" }, { k: "Role", v: "研究 · 企劃 · 設計" }, { k: "Tools", v: "Illustrator" }],
    gallery: ["assets/works/gallery/color-2.jpg", "assets/works/gallery/color-3.jpg", "assets/works/gallery/color-4.jpg", "assets/works/gallery/color-5.jpg"],
    sections: [
      { h: "概述", p: "「色彩博物館」是一個關於色彩的文化與教育專案，把色彩從單純的視覺現象，展開成跨越藝術、工藝與文化的知識場域。" },
      { h: "蒐集與策展", fig: true, p: "從膠彩畫、藍染、西陣織、臉譜，到 Pantone 年度色、草間彌生與 Neil Harbisson 的色彩實踐，蒐集不同文化脈絡下人們如何理解與使用色彩，並轉化為可閱讀的教材與展示介面。" },
      { h: "成果", p: "一套色彩主題的展示 / 教材內容與介面線稿，讓色彩知識能被系統地瀏覽與學習。" },
      { h: "反思", p: "色彩不只是好不好看，而是一整個民族看世界的方式。" },
    ],
  },
  4: {
    meta: [{ k: "Year", v: "2025" }, { k: "Category", v: "平面編排 · 作品集" }, { k: "Medium", v: "平面 · 排版" }, { k: "Role", v: "設計 · 編排" }, { k: "Tools", v: "InDesign · Illustrator" }],
    sections: [
      { h: "概述", p: "一本整理自己跨域創作的作品輯，把產品、平面與研究的成果，收攏成一條可被閱讀的脈絡。" },
      { h: "編排", fig: true, p: "以一致的網格與留白節奏，處理二十餘頁的圖文關係，讓不同性質的作品在同一本書裡仍能各自呼吸。" },
      { h: "反思", p: "作品集本身也是一件作品 —— 它決定了別人用什麼順序、什麼節奏認識你。" },
    ],
  },
  5: {
    meta: [{ k: "Year", v: "2023" }, { k: "Category", v: "產品設計" }, { k: "Medium", v: "產品 · 簡報" }, { k: "Role", v: "設計" }, { k: "Tools", v: "Fusion 360 · Illustrator" }],
    sections: [
      { h: "概述", p: "大學階段的產品設計作品集，收錄課程中的產品提案與造形練習，是我建立設計方法的起點。" },
      { h: "造形與提案", fig: true, p: "從使用情境出發，練習把問題收斂成造形，並以簡報的方式清楚地傳達概念。" },
      { h: "反思", p: "這些早期作品讓我學會，好的設計不只是好看，而是能被說清楚、被理解。" },
    ],
  },
  6: {
    meta: [{ k: "Year", v: "2021" }, { k: "Category", v: "早期作品 · 工程設計" }, { k: "Medium", v: "綜合" }, { k: "Role", v: "創作" }, { k: "Tools", v: "手繪 · 3D 建模" }],
    sections: [
      { h: "概述", p: "高中時期的作品集，涵蓋工程設計專題、數位創意設計與早期的手作與繪畫，是我走上設計這條路的起點。" },
      { h: "摸索", fig: true, p: "在還沒有太多方法與工具的時候，靠著好奇心去嘗試建模、製圖與各種媒材，累積對「動手把想法做出來」的熱情。" },
      { h: "反思", p: "回頭看這些不成熟的作品，反而最能提醒我，創作最初的動力是什麼。" },
    ],
  },
};

YR.FILTERS = [
  { id: "all", label: "全部" },
  { id: "product", label: "產品設計" },
  { id: "art", label: "平面設計" },
  { id: "music", label: "音樂創作" },
  { id: "invention", label: "早期作品" },
  { id: "writing", label: "作品輯" },
  { id: "culture", label: "文化研究" },
];

YR.METHODS = [
  { id: "product", zh: "設計為方法", en: "Design as Method", p: "以結構與邏輯解決真實問題，讓形式服務於使用與意義。" },
  { id: "culture", zh: "文化為材料", en: "Culture as Material", p: "從布袋戲、色彩與傳統工藝中取意，轉譯為當代的設計語彙。" },
  { id: "invention", zh: "跨域為路徑", en: "Across Disciplines", p: "在產品、介面、平面與程式之間流動，不為自己設下邊界。" },
];

YR.SKILLS = [
  { label: "工業設計", v: 90, tone: "terra" }, { label: "介面 / App 設計", v: 84, tone: "terra" },
  { label: "Flutter 前端", v: 78, tone: "bronze" }, { label: "3D 建模", v: 80, tone: "jade" },
  { label: "平面設計", v: 86, tone: "gold" }, { label: "AI 生成應用", v: 82, tone: "bronze" },
  { label: "色彩學", v: 74, tone: "jadeDeep" }, { label: "文化轉譯", v: 76, tone: "ink" },
];

YR.TIMELINE = [
  { year: "2021", title: "設計啟蒙", desc: "高中以工程設計專題與數位創意設計，開啟對設計的興趣。" },
  { year: "2022", title: "進入工業設計", desc: "進入大學工業設計系，系統性地學習設計、製造與材料。" },
  { year: "2024", title: "AI 與跨域創作", desc: "投入 AI 與生成式工具的創作實驗，延伸至介面、色彩與文化。" },
  { year: "2026", title: "掌中乾坤 · 畢業製作", desc: "以「客製化戲偶 App」整合文化研究、程式與設計，參加新一代設計展。" },
];

YR.CATS = [
  { id: "product", icon: "product", zh: "產品設計", en: "PRODUCT", tone: "terra", count: "02 件作品", desc: "以結構與使用情境，回應真實生活的需求。", to: "#/works/product" },
  { id: "art", icon: "art", zh: "平面設計", en: "GRAPHIC", tone: "jade", count: "01 件作品", desc: "以標準字、標誌與版面，建立視覺語言。", to: "#/works/art" },
  { id: "music", icon: "music", zh: "音樂創作", en: "MUSIC", tone: "bronze", count: "前往 Suno →", desc: "在 Suno 上的 AI 音樂創作，點擊聆聽。", to: "https://suno.com/@andrejangcreator223" },
  { id: "invention", icon: "invention", zh: "早期作品", en: "EARLY", tone: "gold", count: "01 件作品", desc: "工程設計專題與最初的動手實驗。", to: "#/works/invention" },
  { id: "writing", icon: "writing", zh: "作品輯", en: "PORTFOLIO", tone: "ink", count: "01 件作品", desc: "把跨域創作收攏成可被閱讀的脈絡。", to: "#/works/writing" },
  { id: "culture", icon: "culture", zh: "文化研究", en: "CULTURE", tone: "jadeDeep", count: "01 件作品", desc: "把色彩與傳統工藝，轉譯為今日語言。", to: "#/works/culture" },
  { id: "ai", icon: "ai", zh: "科技應用", en: "AI / TECH", tone: "bronze", count: "實驗室", desc: "以 AI 與程式，擴張創作的邊界。", to: "#/lab" },
  { id: "about", icon: "about", zh: "關於我", en: "ABOUT", tone: "ink", count: "造物者", desc: "造物者本人 —— 方法、歷程與信念。", to: "#/about" },
];

YR.TRANSLATIONS = [
  { zh: "布袋戲偶", to: "介面角色", en: "Puppet → Interface", type: "oracle", p: "布袋戲偶的生旦淨末丑，是最成熟的角色造形語言。我擷取其妝容、髮式與服飾規制，化為 App 中可被客製的角色系統。" },
  { zh: "神明彩布幔", to: "色彩紋樣", en: "Textile → Palette", type: "jade", p: "傳統神明彩與布幔的靛藍、霧金與朱紅，是廟埕文化的色彩記憶。我把它轉為介面的主色與紋樣。" },
  { zh: "傳統色彩", to: "當代教材", en: "Colour → Education", type: "bronze", p: "從膠彩、藍染到西陣織，色彩承載著各自的文化秩序。我把它整理成可被瀏覽與學習的知識。" },
];

YR.PAIRS = [
  { beforeLabel: "篆刻方框", afterLabel: "模組化網格", before: "seal", after: "grid" },
  { beforeLabel: "玉璧 · 同心圓", afterLabel: "造物核心識別", before: "bi", after: "core" },
];

YR.KEYWORDS = ["留白", "器物", "線條", "客製", "秩序", "溫潤", "轉譯", "未來", "結構", "克制", "東方", "當代"];

YR.EXPERIMENTS = [
  { title: "AI 戲偶生成", tools: ["Google Imagen", "Flutter"], status: "live", note: "以 Imagen API 讓使用者的客製選擇即時生成專屬的戲偶圖像。", tone: "terra" },
  { title: "布袋戲文化紋樣", tools: ["Illustrator"], status: "done", note: "從神明彩與布幔紋飾，提取靛藍、霧金、朱紅的色彩與紋樣語言。", tone: "bronze" },
  { title: "色彩博物館策展", tools: ["Illustrator"], status: "done", note: "蒐集跨文化的色彩實踐，轉化為可瀏覽的教材與介面。", tone: "jadeDeep" },
  { title: "Firebase 後端整合", tools: ["Flutter", "Firebase"], status: "done", note: "為 App 建立帳號、資料與訂單流程的後端骨架。", tone: "jade" },
  { title: "參數化造物核心", tools: ["p5.js", "Canvas"], status: "live", note: "探索生成式圖形，讓參數決定造物的密度與節奏。", tone: "gold" },
  { title: "產品造形迭代", tools: ["Fusion 360"], status: "done", note: "用參數驅動造形比例與接點，一次調整、全件更新。", tone: "ink" },
];

YR.TOOLBOX = ["Flutter", "Firebase", "Google Imagen", "Fusion 360", "Rhino", "Illustrator", "InDesign", "p5.js"];

YR.TITLES = {
  home: "芫瑞造物誌 · YUANRUI ZHANG — 造物 · 創世 · 文化",
  about: "關於我 · 芫瑞造物誌",
  works: "作品集 · 芫瑞造物誌",
  detail: "作品 · 芫瑞造物誌",
  creation: "創作分類 · 芫瑞造物誌",
  culture: "文化觀 · 芫瑞造物誌",
  lab: "實驗室 · 芫瑞造物誌",
  contact: "聯繫我 · 芫瑞造物誌",
};
