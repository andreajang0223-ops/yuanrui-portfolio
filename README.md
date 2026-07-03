# 芫瑞造物誌 · YUANRUI Creation Archive

張芫瑞（YUANRUI ZHANG）的個人作品集網站 — 工業設計學生、跨域創作者。

> 以設計為方法，以文化為材料，創造產品、聲音、圖像與未來生活的想像。

## 技術

- 純 HTML / CSS / vanilla JS，零建置、零依賴，直接部署於 GitHub Pages
- Hash 路由 SPA（`#/works`、`#/work/1`、`#/lab` …），支援深連結與返回鍵
- 完整沿用 **YUANRUI Creation System** 設計系統：紙墨底色、陶土／青瓷／古金低飽和文化色、Noto Serif TC + Noto Sans TC、8pt 間距、克制的動效曲線
- 生成式品牌圖形（造物核心、作品封面、文化紋樣）全部以 SVG 依 tokens 即時繪製
- 實驗室頁內建可互動的參數化 Canvas 造物核心（環數／粒子／轉速／色彩）
- IntersectionObserver 捲動顯現、`prefers-reduced-motion` 支援、鍵盤可達性

## 結構

```
index.html        入口（SPA 外殼：header / footer）
404.html          GitHub Pages 路徑轉址
css/              設計系統 tokens（colors / typography / spacing / effects / base）+ site.css
js/data.js        內容資料
js/svg.js         生成式品牌圖形
js/app.js         路由與頁面渲染
assets/           圖示、印章、紋樣、作品集 PDF
```

© 2026 YUANRUI ZHANG. All Rights Reserved.
