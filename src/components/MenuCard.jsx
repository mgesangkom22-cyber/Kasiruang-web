import React from 'react';
import MenuImage from './MenuImage';
import './MenuCard.css';

export default function MenuCard({ item }) {
  if (!item) return null;

  return (
    <div className="menu-card">
      <div className="menu-card-image-wrap">
        <MenuImage 
          src={item.image} 
          alt={item.name} 
          name={item.name}
          className="menu-card-img" 
        />
      </div>

      <div className="menu-card-details">
        <div className="menu-card-header">
          <h4 className="menu-card-title">{item.name}</h4>
          <span className="menu-card-price">{item.priceLabel}</span>
        </div>
        <p className="menu-card-desc">{item.description}</p>
      </div>
    </div>
  );
}
