import React from 'react';
import './HeroSection.css';

const HeroSection: React.FC = () => (
  <section className="hero-section">
    <div className="hero-content">
      <h1>Build the ultimate TikTok<br />LIVE experience</h1>
      <div className="hero-buttons">
        <button className="download-btn">
          <span className="download-icon"></span> Download for Windows
        </button>
        <button className="access-btn">Get access</button>
      </div>
      <p className="note">Only supports 64-bit Windows 10 and newer</p>
    </div>
  </section>
);

export default HeroSection;