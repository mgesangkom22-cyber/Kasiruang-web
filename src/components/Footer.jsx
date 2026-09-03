import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer-section">
      <div className="footer-container container">
        {/* Left: Mini Logo Badge */}
        <Link to="/" className="footer-logo" aria-label="Kasiruang Homepage">
          <div className="kasiruang-logo-badge footer-logo-badge">
            <span>kas</span>
            <span>iru</span>
            <span>ang</span>
            <span className="logo-arrow">↑</span>
          </div>
        </Link>

        {/* Right: KASIRUANG ↗ text */}
        <div className="footer-brand-link">
          <Link to="/" className="footer-text-link">
            KASIRUANG <span className="btn-arrow">↗</span>
          </Link>
        </div>
      </div>
    </footer>
  );
}
