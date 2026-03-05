# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

A vanilla JavaScript flashcard web app for finance formulas. Zero-build static site — no package manager, no bundler, no framework. Served directly from `index.html`.

## Architecture

**Data flow:** `cards.js` (data) → `app.js` (state & rendering) → `index.html` (DOM) → `styles.css` (presentation)

- **js/cards.js** — `CARDS` array of 68 flashcard objects. Each card has `id`, `topic`, `category`, `question`, `answer` (LaTeX string), and optional `hint`.
- **js/app.js** — IIFE containing all app logic: state management, card rendering, filtering, sorting (review → unseen → mastered), progress tracking via localStorage (`flashcards-progress` key), keyboard shortcuts, and KaTeX rendering.
- **css/styles.css** — Dark theme with CSS custom properties in `:root`. Card flip uses 3D CSS transforms (`rotateY(180deg)` with `perspective`). Responsive breakpoint at 480px.
- **docs/prd/** — Source reference documents for formula content.

## External Dependencies (CDN)

- **KaTeX 0.16.11** — LaTeX formula rendering. Used with `displayMode: true` and `trust: true`. Errors fall back to plain text.
- **Google Fonts** — Space Grotesk (400, 500, 600).

## Development

No build step. Open `index.html` in a browser or use any static file server:

```bash
python3 -m http.server 8000
```

## Card Data Format

```javascript
{
  id: "fa-2-1",
  topic: "Liquidity Ratios",
  category: "Financial Analysis",
  question: "Current Ratio",
  answer: "\\frac{\\text{Current Assets}}{\\text{Current Liabilities}}",
  hint: "Most inclusive liquidity measure"  // optional
}
```

Card IDs follow the pattern `{category-prefix}-{topic#}-{card#}`. Topics and categories are derived dynamically from card data for filter generation.

## Key Implementation Details

- All JS is scoped inside an IIFE to avoid global pollution.
- Progress state: `null` (unseen), `"review"`, or `"got_it"` — persisted in localStorage.
- `applyFilter()` sorts cards by priority: review → unseen → got_it.
- LaTeX answers are rendered with `katex.render()` into `.card-answer` elements.
- Keyboard shortcuts: Space (flip), ←/→ (navigate), G (got it), R (review).

## Design Tokens

Dark theme palette defined in CSS `:root`: background `#0a0a0a`, surface `#171717`, accent gold `#D4AF37`, success green `#22c55e`, warning amber `#f59e0b`.

## Git Remote

`https://github.com/gahoccode/fpac.git` (main branch)
