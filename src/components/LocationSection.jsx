import React from 'react';
import businessData from '../data/business.json';
import './LocationSection.css';

export default function LocationSection() {
  return (
    <section className="location-section container" id="location-section">
      <div className="location-grid">
        {/* Left Side: Address & Links */}
        <div className="location-left">
          <h2 className="location-heading">MAMPIR?</h2>

          <div className="location-info-box">
            <div className="location-name-row">
              <svg className="location-pin-icon" viewBox="0 0 24 24" fill="none" stroke="var(--blue)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <h3 className="location-name">{businessData.name}</h3>
            </div>

            <p className="location-address">{businessData.address}</p>

            <div className="location-maps-btn-wrap">
              <a 
                href={businessData.maps} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-secondary maps-btn"
              >
                BUKA GOOGLE MAPS ↗
              </a>
            </div>

            <div className="location-socials">
              <a 
                href={businessData.instagram} 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--blue)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
                Instagram
              </a>
              <span className="social-dot">•</span>
              <a 
                href={businessData.whatsapp} 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--blue)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                </svg>
                WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* Right Side: Map Doodle Illustration */}
        <div className="location-right">
          <div className="map-doodle-container">
            <svg viewBox="0 0 340 220" fill="none" stroke="var(--blue)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="map-doodle-svg">
              {/* Roads */}
              <path d="M 20,40 Q 120,45 180,60 T 320,80" strokeWidth="2.5" />
              <path d="M 180,60 Q 190,140 210,200" strokeWidth="2.5" />
              <path d="M 60,110 Q 180,120 300,140" strokeWidth="1.8" strokeDasharray="5 5" />
              
              {/* Trees */}
              <g className="map-trees">
                {/* Tree 1 */}
                <path d="M 50,160 C 40,150 40,140 50,135 C 60,130 70,140 70,145 C 75,155 60,165 50,160 Z" fill="#dceafa" />
                <line x1="58" y1="160" x2="58" y2="175" strokeWidth="2" />
                {/* Tree 2 */}
                <path d="M 90,175 C 80,165 80,155 90,150 C 100,145 110,155 110,160 C 115,170 100,180 90,175 Z" fill="#dceafa" />
                <line x1="98" y1="175" x2="98" y2="190" strokeWidth="2" />
                {/* Tree 3 */}
                <path d="M 270,160 C 260,150 260,140 270,135 C 280,130 290,140 290,145 C 295,155 280,165 270,160 Z" fill="#dceafa" />
                <line x1="278" y1="160" x2="278" y2="175" strokeWidth="2" />
              </g>

              {/* Kasiruang Building Hut Doodle */}
              <g className="map-building" transform="translate(225, 105)">
                {/* Roof */}
                <polygon points="0,20 25,0 50,20" fill="var(--paper)" strokeWidth="2" />
                {/* Base */}
                <rect x="5" y="20" width="40" height="25" fill="var(--paper)" strokeWidth="2" />
                {/* Door */}
                <rect x="20" y="30" width="10" height="15" fill="var(--blue)" />
              </g>

              {/* Kasiruang Location Pin */}
              <g className="map-pin-doodle" transform="translate(240, 65)">
                <circle cx="10" cy="10" r="8" fill="var(--yellow)" stroke="var(--blue)" strokeWidth="2" />
                <circle cx="10" cy="10" r="3" fill="var(--blue)" />
                <line x1="10" y1="18" x2="10" y2="28" strokeWidth="2.5" />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
