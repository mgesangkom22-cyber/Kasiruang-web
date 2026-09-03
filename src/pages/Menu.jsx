import React, { useState, useMemo } from 'react';
import menuData from '../data/menu.json';
import CategorySidebar from '../components/CategorySidebar';
import MenuCard from '../components/MenuCard';
import './Menu.css';

const categoryMap = [
  { id: 'coffee', label: 'COFFEE' },
  { id: 'non-coffee', label: 'NON-COFFEE' },
  { id: 'rakyatku', label: 'RAKYATKU' },
  { id: 'squash', label: 'SQUASH' },
  { id: 'limun', label: 'LIMUN' },
  { id: 'food', label: 'SNACKS & FOOD' }
];

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState('all');

  // Group items by category
  const categorizedItems = useMemo(() => {
    const map = {};
    categoryMap.forEach(cat => {
      map[cat.id] = menuData.filter(item => item.category === cat.id);
    });
    return map;
  }, []);

  return (
    <main className="menu-page">
      {/* Menu Top Hero Banner */}
      <div className="menu-hero-banner-wrap">
        <div className="menu-hero-image">
          <img 
            src="/images/kasiruang/kasiruang-front.webp" 
            alt="Kasiruang Menu Header" 
          />
          <div className="banner-overlay"></div>
        </div>

        {/* Torn Paper Divider */}
        <div className="hero-torn-divider">
          <svg viewBox="0 0 1200 40" preserveAspectRatio="none">
            <path d="M0,0 Q150,35 300,10 T600,25 T900,5 T1200,30 L1200,40 L0,40 Z" fill="var(--cream)"></path>
          </svg>
        </div>
      </div>

      <div className="menu-container container">
        {/* Menu Page Header Area */}
        <div className="menu-header-card">
          <div className="menu-header-left">
            <h1 className="menu-page-title">
              <span>MENU</span>
              <span className="title-underline"></span>
            </h1>

            <p className="menu-page-subcopy">
              Semua menu kami dibuat dengan senang hati.<br />
              Pilih favoritmu!
            </p>

            {/* Arrow Doodle pointing down */}
            <div className="doodle doodle-menu-arrow">
              <svg width="45" height="40" viewBox="0 0 45 40" fill="none" stroke="var(--blue)" strokeWidth="2.2" strokeLinecap="round">
                <path d="M10 5 Q25 25 35 30" />
                <path d="M22 28 L35 30 L30 18" />
              </svg>
            </div>
          </div>

          {/* Floating Paper Note (Harga Mulai 5K) */}
          <div className="menu-price-note">
            <div className="tape-strip tape-top-center"></div>
            <div className="note-content">
              <div className="note-cat-doodle">
                <svg width="32" height="24" viewBox="0 0 32 24" fill="none" stroke="var(--blue)" strokeWidth="1.8" strokeLinecap="round">
                  <path d="M4 10 L1 2 L8 6" />
                  <path d="M28 10 L31 2 L24 6" />
                  <path d="M4 10 C 2 18, 8 22, 16 22 C 24 22, 30 18, 28 10 Z" />
                  <circle cx="11" cy="13" r="1.5" fill="var(--blue)" />
                  <circle cx="21" cy="13" r="1.5" fill="var(--blue)" />
                </svg>
              </div>
              <div className="note-text">
                <span>Harga mulai</span>
                <div className="yellow-badge-circle">
                  <span>5K</span>
                  {/* Sparkle rays */}
                  <div className="circle-sparkles">✨</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Service Bar */}
        <div className="service-bar">
          <span className="service-label">JENIS LAYANAN</span>
          <span className="service-divider">|</span>
          <span className="service-items">Dine-in  •  Takeaway  •  Ngopag Pagi (Minggu)</span>
        </div>

        {/* Main Content Layout (Sidebar + Products) */}
        <div className="menu-layout-grid">
          {/* Sidebar */}
          <CategorySidebar 
            activeCategory={activeCategory} 
            onSelectCategory={setActiveCategory} 
          />

          {/* Menu Items Content */}
          <div className="menu-products-content">
            {categoryMap.map((cat) => {
              const items = categorizedItems[cat.id] || [];
              if (items.length === 0) return null;
              if (activeCategory !== 'all' && activeCategory !== cat.id) return null;

              return (
                <section key={cat.id} className="menu-category-section">
                  <h2 className="category-section-heading">
                    <span>{cat.label}</span>
                    <span className="double-underline"></span>
                  </h2>

                  <div className="menu-cards-grid">
                    {items.map((item) => (
                      <MenuCard key={item.id} item={item} />
                    ))}
                  </div>
                </section>
              );
            })}
          </div>
        </div>
      </div>
    </main>
  );
}
