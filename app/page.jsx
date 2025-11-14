"use client";

import { useState, useEffect } from "react";
import Header from "../components/Header";
import QuoteCard from "../components/QuoteCard";
import CategorySelector from "../components/CategorySelector";
import HistoryList from "../components/HistoryList";
import { shareOnFarcaster } from "../utils/farcasterShare";

const JSON_PATH = "/data/blockchain_quotes_500.json";

export default function Home() {
  const [quotes, setQuotes] = useState([]);
  const [categories, setCategories] = useState([]);
  const [currentQuote, setCurrentQuote] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("random");
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(true);

  // Load saved history from localStorage on mount
  useEffect(() => {
    const savedHistory = localStorage.getItem("quoteHistory");
    if (savedHistory) setHistory(JSON.parse(savedHistory));
  }, []);

  // Persist history to localStorage when it changes
  useEffect(() => {
    localStorage.setItem("quoteHistory", JSON.stringify(history));
  }, [history]);

  // Load Quotes JSON
  useEffect(() => {
    async function loadQuotes() {
      setLoading(true);
      try {
        const res = await fetch(JSON_PATH);
        const data = await res.json();

        setQuotes(data);

        // extract unique categories
        const uniqueCats = [...new Set(data.map((q) => q.category))];
        setCategories(uniqueCats);
      } catch (err) {
        console.error("Error loading quotes JSON:", err);
      } finally {
        setLoading(false);
      }
    }

    loadQuotes();
  }, []);

  // Generate Quote
  const generateQuote = () => {
    if (!quotes.length) return;

    let pool = quotes;

    if (selectedCategory !== "random") {
      pool = quotes.filter((q) => q.category === selectedCategory);
    }

    if (pool.length === 0) {
      alert("No quotes available for this category.");
      return;
    }

    const random = pool[Math.floor(Math.random() * pool.length)];
    const { text, category } = random;
    setCurrentQuote(text);

    setHistory((prev) => [
      {
        id: typeof crypto !== "undefined" && crypto.randomUUID ? crypto.randomUUID() : Date.now() + Math.random(),
        text,
        cat: category,
      },
      ...prev,
    ]);
  };

  // Share on X (Twitter)
  const shareOnX = (text) => {
    const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  };

  return (
    <main className="container">
      <Header subtitle="Blockchain Quotes - Mini App" />

      {/* MAIN QUOTE CARD */}
      <section className="card mb-6">
        <div className="quote-box" aria-live="polite">
          {loading ? (
            <p className="text-slate-400 text-sm">Loading quotes…</p>
          ) : currentQuote ? (
            <QuoteCard text={currentQuote} />
          ) : (
            <p className="text-slate-400 text-sm">Tap Generate to get a quote…</p>
          )}
        </div>

        {/* Category Picker */}
        <div className="mt-5">
          <CategorySelector
            categories={categories}
            value={selectedCategory}
            onChange={setSelectedCategory}
          />
        </div>

        {/* Buttons */}
        <div className="mt-6 flex flex-wrap gap-3">
          <button
            onClick={generateQuote}
            className="btn btn-primary"
            aria-label="Generate a new blockchain quote"
            disabled={loading}
          >
            Generate Quote
          </button>

          {currentQuote && (
            <>
              <button
                onClick={() => shareOnFarcaster(currentQuote)}
                className="btn btn-ghost"
                aria-label="Share quote on Farcaster"
              >
                Share on Farcaster
              </button>

              <button
                onClick={() => shareOnX(currentQuote)}
                className="btn btn-ghost"
                aria-label="Share quote on X (Twitter)"
              >
                Share on X
              </button>
            </>
          )}
        </div>
      </section>

      {/* HISTORY */}
      <section className="card">
        <h2 className="text-lg font-semibold mb-3">History</h2>

        <HistoryList
          items={history}
          onShareFarcaster={shareOnFarcaster}
          onShareX={shareOnX}
        />
      </section>
    </main>
  );
}
