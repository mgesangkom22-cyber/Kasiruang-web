import React from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero-section">
      {/* Background Kasiruang Building Photo Banner */}
      <div className="hero-banner-wrap">
        <div className="hero-banner-image">
          <img 
            src="/images/kasiruang/kasiruang-front.webp" 
            alt="Kasiruang Coffee Shop Front" 
            onError={(e) => {
              e.target.style.display = 'none';
            }}
          />
          {/* Subtle overlay */}
          <div className="banner-overlay"></div>
        </div>

        {/* Torn Paper Transition to Content */}
        <div className="hero-torn-divider">
          <svg viewBox="0 0 1200 40" preserveAspectRatio="none">
            <path d="M0,0 Q150,35 300,10 T600,25 T900,5 T1200,30 L1200,40 L0,40 Z" fill="var(--cream)"></path>
          </svg>
        </div>
      </div>

      {/* Main Hero Card Content */}
      <div className="hero-content container">
        <div className="hero-paper-card">
          {/* Top Decorative Doodles */}
          <div className="doodle doodle-star-left">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--blue)" strokeWidth="2">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
          </div>

          <div className="doodle doodle-smiley-right">
            <svg width="44" height="44" viewBox="0 0 44 44" fill="none" stroke="var(--blue)" strokeWidth="2.5" strokeLinecap="round">
              <circle cx="22" cy="22" r="19" />
              <circle cx="15" cy="17" r="2" fill="var(--blue)" />
              <circle cx="29" cy="17" r="2" fill="var(--blue)" />
              <path d="M14 26 C18 33, 26 33, 30 26" />
            </svg>
          </div>

          {/* Main Title */}
          <h1 className="hero-title">
            <span>RUANG BUAT</span>
            <br />
            <span>NGOPI &</span>
            <br />
            <span>NONGKRONG.</span>
          </h1>

          {/* Subtitle Category Line */}
          <p className="hero-subtitle">
            Coffee • Non-Coffee • Jajanan
          </p>

          {/* Yellow Badge */}
          <div className="hero-badge-wrap">
            <span className="yellow-badge hero-badge">Mulai 5K</span>
          </div>

          {/* CTA Button */}
          <div className="hero-cta-wrap">
            <Link to="/menu" className="btn-primary hero-btn">
              LIHAT MENU <span className="btn-arrow">↗</span>
            </Link>
          </div>

          {/* Cat doodle right */}
          <div className="doodle doodle-cat-right">
            <svg width="52" height="42" viewBox="0 0 52 42" fill="none" stroke="var(--blue)" strokeWidth="2" strokeLinecap="round">
              {/* Ears */}
              <path d="M8 18 L3 5 L16 11" />
              <path d="M44 18 L49 5 L36 11" />
              {/* Head contour */}
              <path d="M8 18 C 5 28, 12 38, 26 38 C 40 38, 47 28, 44 18 C 36 11, 16 11, 8 18 Z" />
              {/* Eyes */}
              <circle cx="18" cy="22" r="2" fill="var(--blue)" />
              <circle cx="34" cy="22" r="2" fill="var(--blue)" />
              {/* Nose & mouth */}
              <path d="M24 26 L28 26 L26 28 Z" fill="var(--blue)" />
              <path d="M22 30 C 24 33, 26 33, 26 30 C 26 33, 28 33, 30 30" />
              {/* Whiskers */}
              <line x1="2" y1="23" x2="11" y2="24" />
              <line x1="3" y1="28" x2="11" y2="27" />
              <line x1="50" y1="23" x2="41" y2="24" />
              <line x1="49" y1="28" x2="41" y2="27" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
