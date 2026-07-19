/* ============================================================
   芫瑞造物誌 — Content data (real works + flip-through books)
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
  { id: "ui", zh: "介面設計", en: "UI / App", tone: "bronze" },
  { id: "graphic", zh: "平面設計", en: "Graphic Design", tone: "jade" },
  { id: "portfolio", zh: "作品輯", en: "Portfolio", tone: "ink" },
  { id: "early", zh: "設計啟蒙", en: "Early Works", tone: "gold" },
  { id: "music", zh: "音樂創作", en: "Music", tone: "jadeDeep" },
];

YR.WORKS = [
  { id: 1, title: "掌中乾坤 · 客製化戲偶 App", cat: "介面設計 · 畢業製作", group: "ui", accent: "terra", year: "2026", cover: "assets/works/puppet-app.jpg", desc: "結合布袋戲文化與現代介面的客製化戲偶 App。" },
  { id: 2, title: "掌中乾坤 · 製作全紀錄", cat: "介面設計 · 製作過程", group: "ui", accent: "terra", year: "2026", cover: "assets/books/puppet-making/p001.jpg", book: { dir: "assets/books/puppet-making", pages: 21 }, desc: "從戲偶製作、素材到展板的畢業製作全紀錄，一頁一頁翻閱。" },
  { id: 3, title: "個人品牌識別系統", cat: "平面設計 · 品牌識別", group: "graphic", accent: "jade", year: "2025", cover: "assets/works/cis.jpg", desc: "為自己建立的標準字、標誌與視覺語言。" },
  { id: 4, title: "企業識別 CIS", cat: "平面設計 · 企業識別", group: "graphic", accent: "jade", year: "2023", cover: "assets/books/cis/p001.jpg", book: { dir: "assets/books/cis", pages: 20 }, desc: "課程中的企業識別設計專案，可翻閱的提案內頁。" },
  { id: 5, title: "研究所作品集 · 關身照（綠）", cat: "作品輯 · 高齡照護設計", group: "portfolio", accent: "jadeDeep", year: "2025", cover: "assets/books/grad-green/p001.jpg", book: { dir: "assets/books/grad-green", pages: 30 }, pdf: "assets/pdf/portfolio-green.pdf", desc: "以高齡照護為題的作品集，綠色極簡版本，共 30 頁可翻閱。" },
  { id: 6, title: "研究所作品集 · 關身照（藍）", cat: "作品輯 · DESIGN 版", group: "portfolio", accent: "ink", year: "2025", cover: "assets/books/grad-blue/p001.jpg", book: { dir: "assets/books/grad-blue", pages: 17 }, pdf: "assets/pdf/portfolio-blue.pdf", desc: "同一主題、完全不同的藍色幾何版面，共 17 頁可翻閱。" },
  { id: 7, title: "產品設計作品集", cat: "產品設計 · 課程作品", group: "product", accent: "terra", year: "2023", cover: "assets/books/product/p001.jpg", book: { dir: "assets/books/product", pages: 30 }, pdf: "assets/yuanrui-portfolio.pdf", desc: "大學階段的產品提案與造形練習，共 30 頁可翻閱。" },
  { id: 8, title: "共生 · 家具設計", cat: "產品設計 · 家具", group: "product", accent: "terra", year: "2024", cover: "assets/books/furniture/p001.jpg", book: { dir: "assets/books/furniture", pages: 20 }, desc: "家具設計專題的草模、原型與成果照片。" },
  { id: 9, title: "明石 · 產品專題", cat: "產品設計 · 專題", group: "product", accent: "terra", year: "2024", cover: "assets/books/akashi/p001.jpg", book: { dir: "assets/books/akashi", pages: 20 }, desc: "明石產品設計專題的發展與成果。" },
  { id: 10, title: "人因工程", cat: "產品設計 · 人因研究", group: "product", accent: "terra", year: "2023", cover: "assets/books/ergonomics/p001.jpg", book: { dir: "assets/books/ergonomics", pages: 18 }, desc: "以人因為出發的量測、分析與設計成果。" },
  { id: 11, title: "情感設計", cat: "介面設計 · 情感研究", group: "ui", accent: "bronze", year: "2025", cover: "assets/books/emotion/p001.jpg", book: { dir: "assets/books/emotion", pages: 9 }, desc: "情感設計課程中的觀察、概念與介面成果。" },
  { id: 12, title: "設計習作 · 表現技法", cat: "設計啟蒙 · 手繪與建模", group: "early", accent: "gold", year: "2022", cover: "assets/books/sketch/p001.jpg", book: { dir: "assets/books/sketch", pages: 24 }, desc: "表現技法、Rhino 建模與 XR 的早期練習合輯。" },
  { id: 13, title: "設計啟蒙 · 高中作品集", cat: "設計啟蒙 · 早期作品", group: "early", accent: "gold", year: "2021", cover: "assets/books/highschool/p001.jpg", book: { dir: "assets/books/highschool", pages: 8 }, pdf: "assets/pdf/highschool.pdf", desc: "高中時期的作品集，走上設計的起點，共 8 頁可翻閱。" },
  { id: 14, title: "高中專題作品", cat: "設計啟蒙 · 工程與創意", group: "early", accent: "gold", year: "2020", cover: "assets/books/hs-project/p001.jpg", book: { dir: "assets/books/hs-project", pages: 14 }, desc: "工程設計專題、數位創意設計、探究與實作與美術的早期作品。" },
  { id: 15, title: "音樂創作 · Suno", cat: "音樂創作 · Suno", group: "music", accent: "jadeDeep", year: "2024", link: "https://suno.com/@andrejangcreator223", desc: "在 Suno 上的 AI 音樂創作，點擊前往主頁聆聽。" },
];

YR.DETAILS = {
  1: {
    meta: [{ k: "Year", v: "2026" }, { k: "Category", v: "介面設計 · 畢業製作" }, { k: "Medium", v: "Flutter App" }, { k: "Role", v: "組長 · 前端 · AI 生圖" }, { k: "Tools", v: "Flutter · Firebase · Imagen" }],
    gallery: ["assets/works/gallery/puppet-1.jpg", "assets/works/gallery/puppet-2.jpg", "assets/works/gallery/puppet-3.jpg", "assets/works/gallery/puppet-4.jpg", "assets/works/gallery/puppet-5.jpg", "assets/works/gallery/puppet-6.jpg"],
    sections: [
      { h: "概述", p: "「掌中乾坤」是一款結合台灣布袋戲文化與現代行動介面的客製化戲偶 App。使用者可以像捏一尊自己的戲偶一樣，客製妝容、髮型、布料與工藝技法，讓傳統掌中戲的角色美學，在手機上被重新理解與延續。" },
      { h: "文化為基礎", fig: true, p: "專案第一階段以布袋戲的文化考據為根，整理生、旦、淨、末、丑各類角色的視覺特徵與服裝規制，並參考傳統神明彩與布幔的紋飾細節，確立「靛藍、霧金、朱紅」的主色系 —— 讓介面的文化語彙來自真實的工藝，而非表面的復古。" },
      { h: "從研究到實作", p: "我擔任組長並負責前端與後端開發：以 Flutter 建構 App 的頁面骨架與狀態管理，串接 Firebase 處理資料與帳號，並整合 Google Imagen API，讓使用者的客製選擇能即時生成專屬的戲偶圖像。跨域協作中，我在設計稿確認前預留彈性的介面規格，讓技術與視覺能同步推進。" },
      { h: "成果", p: "一套可實際操作的客製化戲偶 App，涵蓋角色選擇、妝容 / 髮型 / 布料 / 工藝技法客製與訂單追蹤流程，並以此參加新一代設計展。團隊成員：張芫瑞、游量鈞、陳宥緯；指導老師：張鴻兪。完整製作過程可在「掌中乾坤 · 製作全紀錄」翻閱。" },
      { h: "反思", p: "這個專案讓我體會到，讓文化「活著」的方式，不是把它放進玻璃櫃，而是讓它能被今天的人重新使用、重新創造。掌中乾坤是一次把研究、程式與設計縫合在一起的練習。" },
    ],
  },
  3: {
    meta: [{ k: "Year", v: "2025" }, { k: "Category", v: "平面設計" }, { k: "Medium", v: "品牌識別 · CIS" }, { k: "Role", v: "設計" }, { k: "Tools", v: "Illustrator" }],
    gallery: ["assets/works/gallery/cis-2.jpg", "assets/works/gallery/cis-3.jpg"],
    sections: [
      { h: "概述", p: "一套為自己建立的個人品牌識別系統，從標準字、標誌到色彩與應用，確立「芫瑞造物」的視覺語言。" },
      { h: "標準字與標誌", fig: true, p: "以字體結構的比例與筆畫關係為出發，反覆推敲標準字的重心與留白，讓標誌在放大與縮小時都能保有辨識度與氣質。" },
      { h: "應用", p: "將識別延伸到名片、印章與各類版面，測試同一套語言在不同載體上的一致性。" },
      { h: "反思", p: "為自己做識別，是一種把「我是誰、我相信什麼」翻譯成形狀的過程。" },
    ],
  },
};

YR.FILTERS = [
  { id: "all", label: "全部" },
  { id: "product", label: "產品設計" },
  { id: "ui", label: "介面設計" },
  { id: "graphic", label: "平面設計" },
  { id: "portfolio", label: "作品輯" },
  { id: "early", label: "設計啟蒙" },
  { id: "music", label: "音樂創作" },
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
  { label: "人因工程", v: 74, tone: "jadeDeep" }, { label: "文化轉譯", v: 76, tone: "ink" },
];

YR.TIMELINE = [
  { year: "2021", title: "設計啟蒙", desc: "高中以工程設計專題與數位創意設計，開啟對設計的興趣。" },
  { year: "2022", title: "進入工業設計", desc: "進入大學工業設計系，系統性地學習設計、製造與材料。" },
  { year: "2024", title: "AI 與跨域創作", desc: "投入 AI 與生成式工具的創作實驗，延伸至介面、聲音與文化。" },
  { year: "2026", title: "掌中乾坤 · 畢業製作", desc: "以「客製化戲偶 App」整合文化研究、程式與設計，參加新一代設計展。" },
];

YR.CATS = [
  { id: "product", icon: "product", zh: "產品設計", en: "PRODUCT", tone: "terra", count: "04 件作品", desc: "以結構與使用情境，回應真實生活的需求。", to: "#/works/product" },
  { id: "ui", icon: "ai", zh: "介面設計", en: "UI / APP", tone: "bronze", count: "03 件作品", desc: "把文化與情感，收攏進可操作的介面。", to: "#/works/ui" },
  { id: "graphic", icon: "art", zh: "平面設計", en: "GRAPHIC", tone: "jade", count: "02 件作品", desc: "以標準字、標誌與版面，建立視覺語言。", to: "#/works/graphic" },
  { id: "portfolio", icon: "writing", zh: "作品輯", en: "PORTFOLIO", tone: "ink", count: "02 本作品集", desc: "兩本完全不同的作品集，可像書一樣翻閱。", to: "#/works/portfolio" },
  { id: "early", icon: "invention", zh: "設計啟蒙", en: "EARLY", tone: "gold", count: "03 件作品", desc: "習作、高中專題與最初的動手實驗。", to: "#/works/early" },
  { id: "music", icon: "music", zh: "音樂創作", en: "MUSIC", tone: "jadeDeep", count: "前往 Suno →", desc: "在 Suno 上的 AI 音樂創作，點擊聆聽。", to: "https://suno.com/@andrejangcreator223" },
  { id: "ai", icon: "ai", zh: "科技應用", en: "AI / TECH", tone: "bronze", count: "實驗室", desc: "以 AI 與程式，擴張創作的邊界。", to: "#/lab" },
  { id: "about", icon: "about", zh: "關於我", en: "ABOUT", tone: "ink", count: "造物者", desc: "造物者本人 —— 方法、歷程與信念。", to: "#/about" },
];

YR.TRANSLATIONS = [
  { zh: "布袋戲偶", to: "介面角色", en: "Puppet → Interface", type: "oracle", p: "布袋戲偶的生旦淨末丑，是最成熟的角色造形語言。我擷取其妝容、髮式與服飾規制，化為 App 中可被客製的角色系統。" },
  { zh: "神明彩布幔", to: "色彩紋樣", en: "Textile → Palette", type: "jade", p: "傳統神明彩與布幔的靛藍、霧金與朱紅，是廟埕文化的色彩記憶。我把它轉為介面的主色與紋樣。" },
  { zh: "傳統工藝", to: "當代設計", en: "Craft → Design", type: "bronze", p: "從布料、髮式到工藝技法，傳統承載著各自的秩序。我把它整理成可被選擇與組合的當代設計語言。" },
];

YR.PAIRS = [
  { beforeLabel: "篆刻方框", afterLabel: "模組化網格", before: "seal", after: "grid" },
  { beforeLabel: "玉璧 · 同心圓", afterLabel: "造物核心識別", before: "bi", after: "core" },
];

YR.KEYWORDS = ["留白", "器物", "線條", "客製", "秩序", "溫潤", "轉譯", "未來", "結構", "克制", "東方", "當代"];

YR.EXPERIMENTS = [
  { title: "AI 戲偶生成", tools: ["Google Imagen", "Flutter"], status: "live", note: "以 Imagen API 讓使用者的客製選擇即時生成專屬的戲偶圖像。", tone: "terra" },
  { title: "布袋戲文化紋樣", tools: ["Illustrator"], status: "done", note: "從神明彩與布幔紋飾，提取靛藍、霧金、朱紅的色彩與紋樣語言。", tone: "bronze" },
  { title: "翻書式作品閱讀器", tools: ["Vanilla JS", "Canvas"], status: "live", note: "自製零依賴的翻書元件，讓作品集能像實體書一樣被翻閱。", tone: "jadeDeep" },
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
