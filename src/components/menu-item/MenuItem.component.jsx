import React from 'react';
import './MenuItem.styles.scss';

export const MenuItem = ({title, imageUrl, size}) => (
  <div className={`${size} menu-item`}>
    <div
      style={{
        backgroundImage: `url(${imageUrl})`
      }}
      className="background-img"
      >
      </div>
      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
  </div>
  )