"use client";

import { useState } from "react";

const models = [
  { name: "iPhone 17 Pro Max 256GB", price: "129 990 ₽" },
  { name: "iPhone 17 Pro Max 512GB", price: "144 990 ₽" },
  { name: "iPhone 17 Pro Max 1TB", price: "164 990 ₽" },
  { name: "iPhone 17 Pro 128GB", price: "109 990 ₽" },
  { name: "iPhone 17 Pro 256GB", price: "119 990 ₽" },
  { name: "iPhone 17 Pro 512GB", price: "139 990 ₽" },
  { name: "iPhone 17 128GB", price: "89 990 ₽" },
  { name: "iPhone 17 256GB", price: "99 990 ₽" },
  { name: "iPhone 17 512GB", price: "119 990 ₽" },
];

export default function Home() {
  const [selectedModel, setSelectedModel] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const selectedPrice = models.find((m) => m.name === selectedModel)?.price || "";

  return (
    <div className="page-container">
      <main className="content">
        <div className="glass-card text-center max-w-2xl mx-auto px-6">
          <h1 className="title">iPhone 17</h1>

          <p className="subtitle">Все комплектации и цвета доступны</p>

          <div className="actions">
            <div className="dropdown-container">
              <button className="dropdown-button" onClick={() => setIsOpen(!isOpen)}>
                Узнать цену
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
              {selectedPrice ? (
                <div className="price-display">{selectedPrice}</div>
              ) : (
                <div className="price-placeholder">Выберите модель</div>
              )}
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
