import React from 'react';
import './OyenSection.css';

export default function OyenSection() {
  return (
    <section className="oyen-section grid-bg">
      {/* Torn Edge Top */}
      <div className="torn-paper-edge-top">
        <svg viewBox="0 0 1200 30" preserveAspectRatio="none">
          <path d="M0,30 Q200,0 400,20 T800,5 T1200,25 L1200,0 L0,0 Z" fill="var(--cream)"></path>
        </svg>
      </div>

      <div className="oyen-container container">
        <div className="oyen-content-grid">
          {/* Left Column: Oyen Cutout Photo with Whiskers / Hand-Drawn Doodle */}
          <div className="oyen-photo-wrap">
            <div className="oyen-photo-card">
              <img 
                src="/images/kasiruang/kasiruang-cat.webp" 
                alt="Kucing Oyen Kasiruang" 
              />
              {/* White handwritten accent lines doodle */}
              <div className="oyen-doodle-lines">
                <svg viewBox="0 0 100 100" fill="none" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round">
                  <path d="M10 20 L25 15 M8 30 L28 32 M12 42 L26 39" />
                  <path d="M85 20 L70 15 M88 30 L68 32 M85 42 L70 39" />
                </svg>
              </div>
            </div>
          </div>

          {/* Right Column: Heading & Subcopy */}
          <div className="oyen-text-wrap">
            <h2 className="oyen-heading">
              <span>NGOPI,</span>
              <br />
              <span>NONGKRONG,</span>
              <br />
              <span>KETEMU OYEN.</span>
            </h2>

            <p className="oyen-subcopy">
              Gak harus buru-buru pulang.
            </p>

            {/* Paw Print Doodle */}
            <div className="doodle doodle-paw">
              <svg width="42" height="42" viewBox="0 0 42 42" fill="var(--blue)" opacity="0.85">
                {/* Main Pad */}
                <ellipse cx="21" cy="27" rx="10" ry="8" />
                {/* Toes */}
                <circle cx="10" cy="15" r="4" />
                <circle cx="17" cy="10" r="4.5" />
                <circle cx="25" cy="10" r="4.5" />
                <circle cx="32" cy="15" r="4" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Torn Edge Bottom */}
      <div className="torn-paper-edge-bottom">
        <svg viewBox="0 0 1200 30" preserveAspectRatio="none">
          <path d="M0,0 Q250,25 500,10 T900,28 T1200,5 L1200,30 L0,30 Z" fill="var(--cream)"></path>
        </svg>
      </div>
    </section>
  );
}
