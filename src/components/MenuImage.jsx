import React, { useState } from 'react';
import './MenuImage.css';

export default function MenuImage({ src, alt, name, className = '' }) {
  const [error, setError] = useState(false);

  if (error || !src) {
    return (
      <div className={`menu-image-fallback ${className}`} title={name || alt}>
        <svg className="doodle-cup-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 8h1a4 4 0 0 1 0 8h-1" />
          <path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z" />
          <line x1="6" y1="2" x2="6" y2="4" />
          <line x1="10" y1="2" x2="10" y2="4" />
          <line x1="14" y1="2" x2="14" y2="4" />
        </svg>
        <span className="fallback-name">{name || alt}</span>
      </div>
    );
  }

  return (
    <img 
      src={src} 
      alt={alt || name} 
      className={`menu-image ${className}`}
      onError={() => setError(true)}
      loading="lazy"
    />
  );
}
