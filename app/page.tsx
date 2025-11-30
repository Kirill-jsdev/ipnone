"use client";

import { useState, useEffect } from "react";

const themes = [
  { id: "natural-titanium", name: "Natural Titanium" },
  { id: "blue-titanium", name: "Blue Titanium" },
  { id: "white-titanium", name: "White Titanium" },
  { id: "black-titanium", name: "Black Titanium" },
  { id: "desert-titanium", name: "Desert Titanium" },
  { id: "rose-gold", name: "Rose Gold" },
];

const models = [
  { name: "iPhone 17 Pro Max 256GB", price: "42 000 000 сум" },
  { name: "iPhone 17 Pro Max 512GB", price: "46 000 000 сум" },
  { name: "iPhone 17 Pro Max 1TB", price: "52 000 000 сум" },
  { name: "iPhone 17 Pro 128GB", price: "32 000 000 сум" },
  { name: "iPhone 17 Pro 256GB", price: "35 000 000 сум" },
  { name: "iPhone 17 Pro 512GB", price: "40 000 000 сум" },
  { name: "iPhone 17 128GB", price: "22 000 000 сум" },
  { name: "iPhone 17 256GB", price: "25 000 000 сум" },
  { name: "iPhone 17 512GB", price: "30 000 000 сум" },
];

export default function Home() {
  const [selectedModel, setSelectedModel] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [currentTheme] = useState(() => {
    // Initialize with random theme
    return themes[Math.floor(Math.random() * themes.length)];
  });

  const selectedPrice = models.find((m) => m.name === selectedModel)?.price || "";

  useEffect(() => {
    // Apply theme to document
    document.documentElement.setAttribute("data-theme", currentTheme.id);
  }, [currentTheme]);

  return (
    <div className="page-container">
      <div className="theme-indicator">{currentTheme.name}</div>
      <main className="content">
        <div className="glass-card text-center max-w-2xl mx-auto px-6">
          <h1 className="title">iPhone 17</h1>

          <p className="subtitle">Все комплектации и цвета доступны</p>

          <p className="subtitle-secondary">Нажать кнопку &quot;Купить&quot; ≈ сделать свой последний звонок не с айфона</p>

          <div className="actions">
            <div className="dropdown-container">
              <button className="dropdown-button" onClick={() => setIsOpen(!isOpen)}>
                {selectedModel || "Выберите модель"}
                <svg className={`dropdown-icon ${isOpen ? "rotate" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {isOpen && (
                <div className="dropdown-menu">
                  {models.map((model) => (
                    <button
                      key={model.name}
                      className="dropdown-item"
                      onClick={() => {
                        setSelectedModel(model.name);
                        setIsOpen(false);
                      }}
                    >
                      {model.name}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div className="price-container">
              {selectedPrice ? <div className="price-display">{selectedPrice}</div> : <div className="price-placeholder">Цена</div>}
            </div>

            <a href="tel:+79999999999" className="buy-button">
              Купить
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
