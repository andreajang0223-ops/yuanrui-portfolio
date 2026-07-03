/* ============================================================
   芫瑞造物誌 — Content data
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

YR.ACC = { terra: "var(--terra-500)", jade: "var(--jade-500)", gold: "var(--gold-500)", ink: "var(--ink-900)", bronze: "#5E6E63", jadeDeep: "var(--jade-600)" };
YR.WASH = { terra: "var(--terra-100)", jade: "var(--jade-100)", gold: "var(--gold-100)", ink: "var(--paper-200)", bronze: "#E3E7E3", jadeDeep: "var(--jade-100)" };

YR.REALMS = [
  { id: "product", zh: "產品設計", en: "Product Design", tone: "terra" },
  { id: "art", zh: "藝術創作", en: "Artwork", tone: "jade" },
  { id: "music", zh: "音樂創作", en: "Music", tone: "bronze" },
  { id: "invention", zh: "發明研究", en: "Invention", tone: "gold" },
  { id: "writing", zh: "書籍文字", en: "Writing", tone: "ink" },
  { id: "culture", zh: "文化研究", en: "Culture", tone: "jadeDeep" },
];

YR.WORKS = [
  { id: 1, title: "共生 · 模組化家具", cat: "產品設計", group: "product", accent: "terra", year: "2025", desc: "可重組的生活方式，讓模組之間自由生長。" },
  { id: 2, title: "山海之間", cat: "藝術創作", group: "art", accent: "jade", year: "2025", desc: "以幾何重構自然的呼吸與尺度。" },
  { id: 3, title: "無界之聲", cat: "音樂創作", group: "music", accent: "bronze", year: "2024", desc: "讓聲音成為可被觸碰的空間。" },
  { id: 4, title: "流光計畫", cat: "發明研究", group: "invention", accent: "gold", year: "2024", desc: "實驗中的光機構與互動裝置。", soon: true },
  { id: 5, title: "設計思考筆記", cat: "書籍文字", group: "writing", accent: "ink", year: "2024", desc: "關於造物方法的長期書寫。", soon: true },
  { id: 6, title: "漢字之形", cat: "文化研究", group: "culture", accent: "jadeDeep", year: "2023", desc: "從篆刻結構生成的字體實驗。", soon: true },
];

YR.DETAILS = {
  1: {
    meta: [{ k: "Year", v: "2025" }, { k: "Category", v: "產品設計" }, { k: "Medium", v: "家具系統" }, { k: "Role", v: "設計 · 原型" }, { k: "Tools", v: "Fusion 360" }],
    sections: [
      { h: "概述", p: "「共生」是一套可重組的模組化家具系統，回應當代居住空間不斷變動的需求。以最少的基本單元，讓使用者依生活情境，自由生長出書桌、層架與座具。" },
      { h: "設計過程", fig: true, p: "從單一連接節點出發，研究模組之間的咬合邏輯與結構穩定性。歷經三輪原型與比例迭代，逐步收斂出兼具強度與輕盈感的接點。" },
      { h: "成果", p: "一組六件式基本模組，可組合出超過二十種佈局。材質選用淺色木皮與啞光金屬，呼應紙感與墨色的品牌語言。" },
      { h: "反思", p: "模組化的價值不在於變化的數量，而在於秩序中的自由 —— 這也是我對「造物」的理解：給出規則，讓使用者完成最後的創造。" },
    ],
  },
  2: {
    meta: [{ k: "Year", v: "2025" }, { k: "Category", v: "藝術創作" }, { k: "Medium", v: "幾何拼貼" }, { k: "Role", v: "創作" }, { k: "Tools", v: "數位繪圖" }],
    sections: [
      { h: "概述", p: "「山海之間」以最精簡的幾何語彙，重構東方山水的呼吸與尺度。沒有具象的峰巒，只有圓、弧與線之間的張力。" },
      { h: "設計過程", fig: true, p: "將傳統山水的留白與層次抽象為數值化的構圖規則，反覆測試形與形之間的距離，讓畫面在安靜中保有動勢。" },
      { h: "成果", p: "一系列六張的幾何構圖，以玉青與墨色為主調，探索「不言之美」如何透過減法被感知。" },
      { h: "反思", p: "真正的東方性不在符號，而在處理空間與留白的方式。我試著讓文化以結構的形式、而非裝飾的形式存在。" },
    ],
  },
  3: {
    meta: [{ k: "Year", v: "2024" }, { k: "Category", v: "音樂創作" }, { k: "Medium", v: "聲音 · 視覺" }, { k: "Role", v: "作曲 · 視覺" }, { k: "Tools", v: "Web Audio" }],
    sections: [
      { h: "概述", p: "「無界之聲」是一次聲音與空間的造物實驗，試圖讓聽覺成為可被觸碰、可被看見的場域。" },
      { h: "設計過程", fig: true, p: "以同心圓與粒子作為聲音的視覺對應，將頻率與節奏映射為環的擴張與收縮，建立聲與形之間的對話。" },
      { h: "成果", p: "一段可互動的生成式聲音裝置，聲音的密度與聽者的移動相互影響，沒有固定的開始與結束。" },
      { h: "反思", p: "聲音是最抽象的造物，卻最接近情感。它提醒我，設計的終點不是物件，而是體驗。" },
    ],
  },
};

YR.FILTERS = [
  { id: "all", label: "全部" },
  { id: "product", label: "產品設計" },
  { id: "art", label: "藝術創作" },
  { id: "music", label: "音樂創作" },
  { id: "invention", label: "發明研究" },
  { id: "writing", label: "書籍文字" },
  { id: "culture", label: "文化研究" },
];

YR.METHODS = [
  { id: "product", zh: "設計為方法", en: "Design as Method", p: "以結構與邏輯解決真實問題，讓形式服務於使用與意義。" },
  { id: "culture", zh: "文化為材料", en: "Culture as Material", p: "從甲骨、玉石、青銅中取意，轉譯為當代的設計語彙。" },
  { id: "invention", zh: "跨域為路徑", en: "Across Disciplines", p: "在產品、藝術、聲音與文字之間流動，不為自己設下邊界。" },
];

YR.SKILLS = [
  { label: "工業設計", v: 92, tone: "terra" }, { label: "產品開發", v: 84, tone: "terra" },
  { label: "AI 應用", v: 80, tone: "bronze" }, { label: "3D 建模", v: 76, tone: "jade" },
  { label: "前端開發", v: 72, tone: "bronze" }, { label: "排版設計", v: 86, tone: "gold" },
  { label: "音樂創作", v: 64, tone: "jadeDeep" }, { label: "書寫", v: 70, tone: "ink" },
];

YR.TIMELINE = [
  { year: "2021", title: "進入工業設計", desc: "開始系統性地學習設計、製造與材料。" },
  { year: "2023", title: "跨域創作啟程", desc: "將創作延伸至藝術、聲音與文字，尋找媒介之間的共通語言。" },
  { year: "2024", title: "Google Gemini 認證", desc: "投入 AI 與生成式工具的創作實驗，擴張造物的邊界。" },
  { year: "2025", title: "新一代設計獎入圍", desc: "以「共生 · 模組化家具」獲得肯定。" },
];

YR.CATS = [
  { id: "product", icon: "product", zh: "產品設計", en: "PRODUCT", tone: "terra", count: "01 件作品", desc: "以結構與使用情境，回應真實生活的需求。", to: "#/works/product" },
  { id: "art", icon: "art", zh: "藝術創作", en: "ARTWORK", tone: "jade", count: "01 件作品", desc: "讓材質、色彩與形式承載情緒與觀念。", to: "#/works/art" },
  { id: "music", icon: "music", zh: "音樂創作", en: "MUSIC", tone: "bronze", count: "01 件作品", desc: "以聲音建構空間與時間的造物。", to: "#/works/music" },
  { id: "invention", icon: "invention", zh: "發明研究", en: "INVENTION", tone: "gold", count: "實驗中", desc: "探索機構、原理與尚未存在的可能。", to: "#/works/invention" },
  { id: "writing", icon: "writing", zh: "書籍文字", en: "WRITING", tone: "ink", count: "實驗中", desc: "用文字整理思想，建立世界觀。", to: "#/works/writing" },
  { id: "culture", icon: "culture", zh: "文化研究", en: "CULTURE", tone: "jadeDeep", count: "01 件作品", desc: "把傳統的線條與器物，轉譯為今日語言。", to: "#/works/culture" },
  { id: "ai", icon: "ai", zh: "科技應用", en: "AI / TECH", tone: "bronze", count: "02 實驗", desc: "以 AI 與程式，擴張創作的邊界。", to: "#/lab" },
  { id: "about", icon: "about", zh: "關於我", en: "ABOUT", tone: "ink", count: "造物者", desc: "造物者本人 —— 方法、歷程與信念。", to: "#/about" },
];

YR.TRANSLATIONS = [
  { zh: "甲骨線條", to: "形態語言", en: "Oracle Lines → Form", type: "oracle", p: "甲骨文的刻畫是最早的造形語言。我擷取其轉折、比例與力度，化為產品的輪廓與線條。" },
  { zh: "玉石溫潤", to: "材質情感", en: "Jade → Emotion", type: "jade", p: "玉的半透與溫潤，是一種克制的奢侈。它教我如何讓材質本身說話，而非依賴裝飾。" },
  { zh: "青銅紋樣", to: "結構秩序", en: "Bronze → Order", type: "bronze", p: "青銅器的紋樣是秩序的結晶。我從中學習重複、對稱與留白之間的張力。" },
];

YR.PAIRS = [
  { beforeLabel: "篆刻方框", afterLabel: "模組化網格", before: "seal", after: "grid" },
  { beforeLabel: "玉璧 · 同心圓", afterLabel: "造物核心識別", before: "bi", after: "core" },
];

YR.KEYWORDS = ["留白", "器物", "線條", "模組", "秩序", "溫潤", "轉譯", "未來", "結構", "克制", "東方", "當代"];

YR.EXPERIMENTS = [
  { title: "參數化造物核心", tools: ["p5.js", "Canvas"], status: "live", note: "探索生命核心的生成式變體，讓參數決定造物的密度與節奏。", tone: "terra" },
  { title: "生成式紋樣", tools: ["Imagen", "Claude"], status: "live", note: "以 AI 生成低飽和的東方抽象紋樣，再人工篩選與重構。", tone: "bronze" },
  { title: "模組家具參數化", tools: ["Fusion 360"], status: "done", note: "用參數驅動家具的比例與接點，一次調整、全件更新。", tone: "jade" },
  { title: "文字排版引擎", tools: ["Flutter"], status: "done", note: "自動化中文長文排版，處理行寬、留白與標點的擠壓。", tone: "gold" },
  { title: "聲音可視化", tools: ["Web Audio"], status: "live", note: "讓頻率與節奏成為可見的環與粒子。", tone: "jadeDeep" },
  { title: "AI 草圖迭代", tools: ["Claude", "Imagen"], status: "done", note: "以對話加速概念草圖的收斂，把想法快速變成形。", tone: "ink" },
];

YR.TOOLBOX = ["Python", "Fusion 360", "Flutter", "Claude", "p5.js", "Figma", "Web Audio", "Imagen"];

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
