/** @typedef {"got_it" | "review" | null} CardStatus */

(function () {
  "use strict";

  const STORAGE_KEY = "flashcards-progress";

  /** @type {number} */
  let currentIndex = 0;

  /** @type {typeof CARDS} */
  let filteredCards = [];

  /** @type {string} */
  let activeTopic = "All";

  /** @type {Record<string, CardStatus>} */
  let progress = {};

  // DOM refs
  const cardEl = /** @type {HTMLElement} */ (document.getElementById("card"));
  const cardContainer = /** @type {HTMLElement} */ (document.getElementById("card-container"));
  const questionEl = /** @type {HTMLElement} */ (document.getElementById("card-question"));
  const hintEl = /** @type {HTMLElement} */ (document.getElementById("card-hint"));
  const categoryEl = /** @type {HTMLElement} */ (document.getElementById("card-category"));
  const topicEl = /** @type {HTMLElement} */ (document.getElementById("card-topic"));
  const categoryBackEl = /** @type {HTMLElement} */ (document.getElementById("card-category-back"));
  const topicBackEl = /** @type {HTMLElement} */ (document.getElementById("card-topic-back"));
  const answerEl = /** @type {HTMLElement} */ (document.getElementById("card-answer"));
  const counterEl = /** @type {HTMLElement} */ (document.getElementById("card-counter"));
  const progressBar = /** @type {HTMLElement} */ (document.getElementById("progress-bar"));
  const progressText = /** @type {HTMLElement} */ (document.getElementById("progress-text"));
  const filterPills = /** @type {HTMLElement} */ (document.getElementById("filter-pills"));

  // ───────────────────────────────────────────
  // Progress persistence
  // ───────────────────────────────────────────

  /** Load progress from localStorage */
  function loadProgress() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      progress = raw ? JSON.parse(raw) : {};
    } catch {
      progress = {};
    }
  }

  /** Save progress to localStorage */
  function saveProgress() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  }

  /** Reset all progress */
  function resetProgress() {
    progress = {};
    localStorage.removeItem(STORAGE_KEY);
    updateProgress();
    renderCard();
  }

  /** Update progress bar and text */
  function updateProgress() {
    const total = CARDS.length;
    const mastered = Object.values(progress).filter(
      (s) => s === "got_it"
    ).length;
    const pct = total > 0 ? (mastered / total) * 100 : 0;
    progressBar.style.width = pct + "%";
    progressText.textContent = mastered + " / " + total + " mastered";
  }

  // ───────────────────────────────────────────
  // Filtering
  // ───────────────────────────────────────────

  /** Get unique topics from all cards */
  function getTopics() {
    /** @type {string[]} */
    const seen = [];
    for (const card of CARDS) {
      if (!seen.includes(card.topic)) {
        seen.push(card.topic);
      }
    }
    return seen;
  }

  /** Build filter pills */
  function buildFilters() {
    const topics = getTopics();
    filterPills.innerHTML = "";

    const allPill = createPill("All", activeTopic === "All");
    filterPills.appendChild(allPill);

    for (const topic of topics) {
      const pill = createPill(topic, activeTopic === topic);
      filterPills.appendChild(pill);
    }
  }

  /**
   * @param {string} label
   * @param {boolean} isActive
   * @returns {HTMLButtonElement}
   */
  function createPill(label, isActive) {
    const btn = document.createElement("button");
    btn.className = "pill" + (isActive ? " active" : "");
    btn.type = "button";
    btn.textContent = label;
    btn.addEventListener("click", () => filterByTopic(label));
    return btn;
  }

  /**
   * Filter cards by topic
   * @param {string} topic
   */
  function filterByTopic(topic) {
    activeTopic = topic;
    applyFilter();
    currentIndex = 0;
    unflip();
    renderCard();
    buildFilters();
  }

  /** Apply current filter, prioritizing review cards */
  function applyFilter() {
    let base =
      activeTopic === "All"
        ? [...CARDS]
        : CARDS.filter((c) => c.topic === activeTopic);

    // Sort: review cards first, then unseen, then got_it
    base.sort((a, b) => {
      const sa = progress[a.id] || null;
      const sb = progress[b.id] || null;
      const order = /** @param {CardStatus} s */ (s) =>
        s === "review" ? 0 : s === null ? 1 : 2;
      return order(sa) - order(sb);
    });

    filteredCards = base;
  }

  // ───────────────────────────────────────────
  // Card rendering
  // ───────────────────────────────────────────

  /** Render the current card */
  function renderCard() {
    if (filteredCards.length === 0) {
      showEmpty();
      return;
    }

    const card = filteredCards[currentIndex];

    categoryEl.textContent = card.category;
    topicEl.textContent = card.topic;
    questionEl.textContent = card.question;
    hintEl.textContent = card.hint || "";
    hintEl.style.display = card.hint ? "block" : "none";

    categoryBackEl.textContent = card.category;
    topicBackEl.textContent = card.topic;

    // Render LaTeX
    answerEl.innerHTML = "";
    try {
      katex.render(card.answer, answerEl, {
        throwOnError: false,
        displayMode: true,
        trust: true,
      });
    } catch {
      answerEl.textContent = card.answer;
    }

    counterEl.textContent =
      currentIndex + 1 + " / " + filteredCards.length;

    updateProgress();
  }

  /** Show empty state when no cards match filter */
  function showEmpty() {
    questionEl.textContent = "No cards found";
    hintEl.textContent = "Try a different filter";
    hintEl.style.display = "block";
    answerEl.innerHTML = "";
    counterEl.textContent = "0 / 0";
  }

  // ───────────────────────────────────────────
  // Card flip
  // ───────────────────────────────────────────

  /** Flip the card */
  function flipCard() {
    if (filteredCards.length === 0) return;
    cardEl.classList.toggle("flipped");
  }

  /** Unflip the card (no animation if already unflipped) */
  function unflip() {
    cardEl.classList.remove("flipped");
  }

  // ───────────────────────────────────────────
  // Mark card
  // ───────────────────────────────────────────

  /**
   * Mark current card and advance
   * @param {"got_it" | "review"} status
   */
  function markCard(status) {
    if (filteredCards.length === 0) return;

    const card = filteredCards[currentIndex];
    progress[card.id] = status;
    saveProgress();
    unflip();

    // Small delay to let unflip settle before rendering next card
    setTimeout(() => {
      if (currentIndex < filteredCards.length - 1) {
        currentIndex++;
      } else {
        // Re-sort and go back to start
        applyFilter();
        currentIndex = 0;
      }
      renderCard();
    }, 200);
  }

  // ───────────────────────────────────────────
  // Navigation
  // ───────────────────────────────────────────

  /** Go to previous card */
  function prevCard() {
    if (filteredCards.length === 0) return;
    unflip();
    currentIndex =
      currentIndex > 0 ? currentIndex - 1 : filteredCards.length - 1;
    renderCard();
  }

  /** Go to next card */
  function nextCard() {
    if (filteredCards.length === 0) return;
    unflip();
    currentIndex =
      currentIndex < filteredCards.length - 1 ? currentIndex + 1 : 0;
    renderCard();
  }

  // ───────────────────────────────────────────
  // Shuffle (Fisher-Yates)
  // ───────────────────────────────────────────

  /** Shuffle current filtered cards */
  function shuffle() {
    for (let i = filteredCards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [filteredCards[i], filteredCards[j]] = [filteredCards[j], filteredCards[i]];
    }
    currentIndex = 0;
    unflip();
    renderCard();
  }

  // ───────────────────────────────────────────
  // Event Listeners
  // ───────────────────────────────────────────

  function bindEvents() {
    cardContainer.addEventListener("click", flipCard);

    document
      .getElementById("btn-got-it")
      ?.addEventListener("click", () => markCard("got_it"));

    document
      .getElementById("btn-review")
      ?.addEventListener("click", () => markCard("review"));

    document.getElementById("btn-prev")?.addEventListener("click", prevCard);
    document.getElementById("btn-next")?.addEventListener("click", nextCard);
    document.getElementById("btn-shuffle")?.addEventListener("click", shuffle);
    document
      .getElementById("btn-reset")
      ?.addEventListener("click", resetProgress);

    // Keyboard shortcuts
    document.addEventListener("keydown", (e) => {
      // Ignore if user is typing in an input
      if (
        e.target instanceof HTMLInputElement ||
        e.target instanceof HTMLTextAreaElement
      ) {
        return;
      }

      switch (e.key) {
        case " ":
          e.preventDefault();
          flipCard();
          break;
        case "ArrowLeft":
          e.preventDefault();
          prevCard();
          break;
        case "ArrowRight":
          e.preventDefault();
          nextCard();
          break;
        case "g":
        case "G":
          markCard("got_it");
          break;
        case "r":
        case "R":
          markCard("review");
          break;
      }
    });
  }

  // ───────────────────────────────────────────
  // Init
  // ───────────────────────────────────────────

  function initApp() {
    loadProgress();
    applyFilter();
    buildFilters();
    renderCard();
    bindEvents();
  }

  // Wait for KaTeX to load before init
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initApp);
  } else {
    initApp();
  }
})();
