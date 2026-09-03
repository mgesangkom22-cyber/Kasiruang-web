import React from 'react';
import { Link } from 'react-router-dom';
import menuData from '../data/menu.json';
import './MenuPreview.css';

export default function MenuPreview() {
  // Get 6 coffee items from JSON dynamically
  const coffeePreviewItems = menuData
    .filter(item => item.category === 'coffee')
    .slice(0, 6);

  return (
    <section className="menu-preview-section container">
      <div className="menu-preview-grid">
        {/* Left Column: Handwritten Menu List */}
        <div className="menu-preview-left">
          <h2 className="preview-heading">
            <span>MAU</span>
            <br />
            <span>MINUM APA?</span>
          </h2>

          <h3 className="preview-category-title">COFFEE</h3>

          <ul className="preview-item-list">
            {coffeePreviewItems.map((item) => (
              <li key={item.id} className="preview-item">
                <span className="item-name">{item.name}</span>
                <span className="item-dots"></span>
                <span className="item-price">{item.priceLabel}</span>
              </li>
            ))}
          </ul>

          <div className="preview-cta">
            <Link to="/menu" className="btn-primary preview-btn">
              LIHAT SEMUA MENU <span className="btn-arrow">↗</span>
            </Link>
          </div>
        </div>

        {/* Right Column: Polaroid Photo Collage */}
        <div className="menu-preview-right">
          <div className="polaroid-collage">
            {/* Polaroid 1: Top Gazebo */}
            <div className="polaroid polaroid-1">
              <div className="tape-strip tape-top-center"></div>
              <img 
                src="/images/kasiruang/kasiruang-gazebo.webp" 
                alt="Gazebo Kasiruang" 
              />
            </div>

            {/* Polaroid 2: Space / Drinks */}
            <div className="polaroid polaroid-2">
              <div className="tape-strip tape-top-right"></div>
              <img 
                src="/images/kasiruang/kasiruang-space.webp" 
                alt="Kasiruang Space and Menu" 
              />
            </div>

            {/* Polaroid 3: Oyen Cat */}
            <div className="polaroid polaroid-3">
              <div className="tape-strip tape-top-left"></div>
              <img 
                src="/images/kasiruang/kasiruang-cat.webp" 
                alt="Oyen Cat Kasiruang" 
              />
            </div>

            {/* Polaroid 4: Gazebo Outdoor */}
            <div className="polaroid polaroid-4">
              <div className="tape-strip tape-top-right"></div>
              <img 
                src="/images/kasiruang/kasiruang-front.webp" 
                alt="Kasiruang Outdoor Area" 
              />
            </div>

            {/* Sparkles Doodle */}
            <div className="doodle doodle-sparkles">
              <svg width="36" height="36" viewBox="0 0 36 36" fill="none" stroke="var(--blue)" strokeWidth="2.2" strokeLinecap="round">
                <path d="M18 4 V32 M4 18 H32 M8 8 L28 28 M28 8 L8 28" opacity="0.6" />
                <path d="M26 4 L28 10 L34 12 L28 14 L26 20 L24 14 L18 12 L24 10 Z" fill="var(--blue)" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
