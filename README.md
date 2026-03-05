# FPAC Exam Flashcards

An interactive flashcard app for studying finance formulas for the Financial Planning & Analysis Certification (FPAC) exam. Built with vanilla JavaScript — no frameworks, no build tools.

## Features

- **68 finance formulas** across Financial Analysis and Economics
- **LaTeX rendering** with KaTeX for clean mathematical notation
- **Progress tracking** — mark cards as "Got It" or "Review Again", persisted in localStorage
- **Smart sorting** — review cards surface first, mastered cards go to the back
- **Topic filtering** — filter by Liquidity Ratios, Leverage, Profitability, TVM, and more
- **Shuffle mode** — randomize card order
- **Keyboard shortcuts** — Space (flip), arrow keys (navigate), G (got it), R (review)
- **Responsive** — works on desktop and mobile
- **Dark theme** with gold accent

## Getting Started

No installation required. Open `index.html` directly in a browser, or serve with any static file server:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Project Structure

```
├── index.html          # Entry point
├── js/
│   ├── cards.js        # Flashcard data (68 cards)
│   └── app.js          # Application logic
├── css/
│   └── styles.css      # Styling and animations
└── docs/
    └── prd/            # Formula reference documents
```

## Adding New Cards

Add entries to the `CARDS` array in `js/cards.js`:

```javascript
{
  id: "fa-2-4",
  topic: "Liquidity Ratios",
  category: "Financial Analysis",
  question: "Cash Ratio",
  answer: "\\frac{\\text{Cash + Marketable Securities}}{\\text{Current Liabilities}}",
  hint: "Most conservative liquidity measure"
}
```

Topics and filter pills are generated automatically from card data.

## Keyboard Shortcuts

| Key | Action |
|-----|--------|
| `Space` | Flip card |
| `←` `→` | Previous / Next |
| `G` | Mark as Got It |
| `R` | Mark as Review Again |

## Tech Stack

- Vanilla JavaScript (ES6+)
- [KaTeX](https://katex.org/) for LaTeX rendering
- [Space Grotesk](https://fonts.google.com/specimen/Space+Grotesk) font
- CSS custom properties for theming
- localStorage for progress persistence
