import React from 'react';
import './Header.css';

const Header: React.FC = () => (
  <header className="tiktok-header">
    <div className="tiktok-header-left">
      <span className="tiktok-logo-svg" aria-label="TikTok logo">
        <svg width="32" height="32" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g>
            <path d="M33.5 7.5c0 4.7 3.8 8.5 8.5 8.5v6.1c-3.2 0-6.2-1-8.5-2.7v13.6c0 7.2-5.8 13-13 13s-13-5.8-13-13 5.8-13 13-13c.5 0 1 .1 1.5.1v6.2c-.5-.1-1-.1-1.5-.1-3.7 0-6.8 3-6.8 6.8s3 6.8 6.8 6.8 6.8-3 6.8-6.8V4h6.7c0 1.2.1 2.3.3 3.5z" fill="#fff"/>
            <path d="M33.5 7.5c0 4.7 3.8 8.5 8.5 8.5v6.1c-3.2 0-6.2-1-8.5-2.7v13.6c0 7.2-5.8 13-13 13s-13-5.8-13-13 5.8-13 13-13c.5 0 1 .1 1.5.1v6.2c-.5-.1-1-.1-1.5-.1-3.7 0-6.8 3-6.8 6.8s3 6.8 6.8 6.8 6.8-3 6.8-6.8V4h6.7c0 1.2.1 2.3.3 3.5z" fill="#25F4EE" fillOpacity=".7"/>
            <path d="M33.5 7.5c0 4.7 3.8 8.5 8.5 8.5v6.1c-3.2 0-6.2-1-8.5-2.7v13.6c0 7.2-5.8 13-13 13s-13-5.8-13-13 5.8-13 13-13c.5 0 1 .1 1.5.1v6.2c-.5-.1-1-.1-1.5-.1-3.7 0-6.8 3-6.8 6.8s3 6.8 6.8 6.8 6.8-3 6.8-6.8V4h6.7c0 1.2.1 2.3.3 3.5z" fill="#FE2C55" fillOpacity=".5"/>
          </g>
        </svg>
      </span>
      <span className="tiktok-logo-text">TikTok</span>
      <span className="tiktok-live-studio-badge">LIVE Studio</span>
    </div>
    <div className="tiktok-header-right">
      <a href="#" className="tiktok-header-btn help">Help Center</a>
      <button className="tiktok-header-btn download">Download</button>
      <button className="tiktok-header-btn login">Log in</button>
    </div>
  </header>
);

export default Header; 