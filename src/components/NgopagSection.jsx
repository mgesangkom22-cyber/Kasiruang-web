import React from 'react';
import businessData from '../data/business.json';
import './NgopagSection.css';

export default function NgopagSection() {
  const { openingHours } = businessData;

  return (
    <section className="ngopag-section container">
      <div className="ngopag-card">
        <div className="ngopag-grid">
          {/* Left Column: Heading & Sun Doodle */}
          <div className="ngopag-left">
            {/* Sun Doodle */}
            <div className="ngopag-sun-doodle">
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="#ffffff" strokeWidth="2.2" strokeLinecap="round">
                <circle cx="24" cy="24" r="10" stroke="#f1c928" fill="#f1c928" />
                {/* Rays */}
                <line x1="24" y1="4" x2="24" y2="9" />
                <line x1="24" y1="39" x2="24" y2="44" />
                <line x1="4" y1="24" x2="9" y2="24" />
                <line x1="39" y1="24" x2="44" y2="24" />
                <line x1="9.8" y1="9.8" x2="13.3" y2="13.3" />
                <line x1="34.7" y1="34.7" x2="38.2" y2="38.2" />
                <line x1="9.8" y1="38.2" x2="13.3" y2="34.7" />
                <line x1="34.7" y1="13.3" x2="38.2" y2="9.8" />
              </svg>
            </div>

            <h2 className="ngopag-heading">
              <span>MINGGU PAGI?</span>
              <br />
              <span>NGOPAG.</span>
            </h2>

            <p className="ngopag-subheading">NGOPI PAGI.</p>
            <p className="ngopag-copy">Khusus Minggu kami buka dari pagi.</p>
          </div>

          {/* Vertical Separator */}
          <div className="ngopag-divider"></div>

          {/* Right Column: Operating Hours */}
          <div className="ngopag-right">
            {/* Sunday */}
            <div className="hours-row">
              <div className="hours-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
              </div>
              <div className="hours-info">
                <span className="day-name">Minggu</span>
                <span className="day-time">{openingHours?.sunday || "08.00 – 23.00"}</span>
              </div>
            </div>

            <div className="hours-line"></div>

            {/* Mon - Sat */}
            <div className="hours-row">
              <div className="hours-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
              </div>
              <div className="hours-info">
                <span className="day-name">Senin – Sabtu</span>
                <span className="day-time">{openingHours?.mondaySaturday || "16.00 – 23.00"}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
