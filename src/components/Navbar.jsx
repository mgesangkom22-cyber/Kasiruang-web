import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import businessData from '../data/business.json';
import './Navbar.css';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const isHome = location.pathname === '/';
  const isMenu = location.pathname === '/menu';

  const handleLocationClick = (e) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    if (isHome) {
      const el = document.getElementById('location-section');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate('/#location-section');
      setTimeout(() => {
        const el = document.getElementById('location-section');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <header className="navbar-header">
      <nav className="navbar-container container">
        {/* Logo */}
        <Link to="/" className="navbar-logo" aria-label="Kasiruang Homepage">
          <div className="kasiruang-logo-badge">
            <span>kas</span>
            <span>iru</span>
            <span>ang</span>
            <span className="logo-arrow">↑</span>
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <ul className="navbar-links">
          <li>
            <Link 
              to="/" 
              className={`nav-item ${isHome ? 'active' : ''}`}
            >
              Beranda
              {isHome && <span className="nav-underline"></span>}
            </Link>
          </li>
          <li>
            <Link 
              to="/menu" 
              className={`nav-item ${isMenu ? 'active' : ''}`}
            >
              Menu
              {isMenu && <span className="nav-underline"></span>}
            </Link>
          </li>
          <li>
            <a 
              href="#location-section" 
              onClick={handleLocationClick}
              className="nav-item"
            >
              Lokasi
            </a>
          </li>
          <li>
            <a 
              href={businessData.instagram} 
              target="_blank" 
              rel="noopener noreferrer"
              className="nav-item nav-instagram"
            >
              Instagram
            </a>
          </li>
        </ul>

        {/* Mobile Hamburger Toggle */}
        <button 
          className="navbar-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Navigation Menu"
          aria-expanded={mobileMenuOpen}
        >
          <span className={`hamburger-bar ${mobileMenuOpen ? 'open' : ''}`}></span>
          <span className={`hamburger-bar ${mobileMenuOpen ? 'open' : ''}`}></span>
          <span className={`hamburger-bar ${mobileMenuOpen ? 'open' : ''}`}></span>
        </button>

        {/* Mobile Dropdown Menu */}
        <div className={`mobile-menu ${mobileMenuOpen ? 'show' : ''}`}>
          <div className="mobile-menu-inner">
            <Link to="/" className={`mobile-nav-item ${isHome ? 'active' : ''}`}>
              Beranda ☕
            </Link>
            <Link to="/menu" className={`mobile-nav-item ${isMenu ? 'active' : ''}`}>
              Menu 📋
            </Link>
            <a href="#location-section" onClick={handleLocationClick} className="mobile-nav-item">
              Lokasi 📍
            </a>
            <a href={businessData.instagram} target="_blank" rel="noopener noreferrer" className="mobile-nav-item">
              Instagram 📸
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
