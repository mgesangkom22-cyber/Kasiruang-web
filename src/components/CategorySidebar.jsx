import React from 'react';
import businessData from '../data/business.json';
import './CategorySidebar.css';

const categories = [
  { id: 'all', label: 'Semua Menu', mobileLabel: 'Semua' },
  { id: 'coffee', label: 'Coffee', mobileLabel: 'Coffee' },
  { id: 'non-coffee', label: 'Non-Coffee', mobileLabel: 'Non-Coffee' },
  { id: 'rakyatku', label: 'Rakyatku', mobileLabel: 'Rakyatku' },
  { id: 'squash', label: 'Squash', mobileLabel: 'Squash' },
  { id: 'limun', label: 'Limun', mobileLabel: 'Limun' },
  { id: 'food', label: 'Snacks & Food', mobileLabel: 'Food' }
];

export default function CategorySidebar({ activeCategory, onSelectCategory }) {
  const { openingHours } = businessData;

  return (
    <aside className="category-sidebar-wrap">
      {/* Mobile Category Chips (Horizontal Scroll) */}
      <div className="mobile-category-chips">
        {categories.map((cat) => (
          <button
            key={cat.id}
            className={`chip-button ${activeCategory === cat.id ? 'active' : ''}`}
            onClick={() => onSelectCategory(cat.id)}
          >
            {cat.mobileLabel}
          </button>
        ))}
      </div>

      {/* Desktop Sidebar (Torn Paper Note) */}
      <div className="desktop-sidebar-content">
        <div className="category-torn-card">
          <h3 className="category-title">
            <span>KATEGORI</span>
            <span className="title-underline"></span>
          </h3>

          <ul className="category-list">
            {categories.map((cat) => (
              <li key={cat.id}>
                <button
                  className={`category-pill-btn ${activeCategory === cat.id ? 'active' : ''}`}
                  onClick={() => onSelectCategory(cat.id)}
                >
                  {cat.label}
                </button>
              </li>
            ))}
          </ul>

          {/* Decorative Arrow Doodle */}
          <div className="doodle doodle-category-arrow">
            <svg width="40" height="32" viewBox="0 0 40 32" fill="none" stroke="var(--blue)" strokeWidth="2.2" strokeLinecap="round">
              <path d="M5 16 H30 M22 8 L32 16 L22 24 M10 8 L2 16 L10 24" />
            </svg>
          </div>
        </div>

        {/* Desktop Blue Ngopag Reminder Card */}
        <div className="sidebar-ngopag-card">
          <div className="ngopag-card-sun">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round">
              <circle cx="16" cy="16" r="6" fill="#f1c928" stroke="#f1c928" />
              <line x1="16" y1="3" x2="16" y2="7" />
              <line x1="16" y1="25" x2="16" y2="29" />
              <line x1="3" y1="16" x2="7" y2="16" />
              <line x1="25" y1="16" x2="29" y2="16" />
            </svg>
          </div>

          <h4 className="sidebar-ngopag-title">
            MINGGU<br />NGOPAG!
          </h4>

          <p className="sidebar-ngopag-desc">
            Buka lebih pagi buat teman-teman yang cari ngopi pagi.
          </p>

          <div className="sidebar-ngopag-hours">
            <div className="ngopag-hour-row">
              <span className="hour-label">Minggu</span>
              <span className="hour-val">{openingHours?.sunday || "08.00 - 23.00"}</span>
            </div>

            <div className="sidebar-hours-line"></div>

            <div className="ngopag-hour-row">
              <span className="hour-label">Senin - Sabtu</span>
              <span className="hour-val">{openingHours?.mondaySaturday || "16.00 - 23.00"}</span>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
