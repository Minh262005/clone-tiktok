import React from 'react';
import './Footer.css';

const Footer: React.FC = () => (
  <footer className="tiktok-footer">
    <hr className="footer-divider" />
    <div className="footer-content">
      <div className="footer-logo-section">
        <span className="footer-logo">
          <svg width="32" height="32" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g>
              <path d="M33.5 7.5c0 4.7 3.8 8.5 8.5 8.5v6.1c-3.2 0-6.2-1-8.5-2.7v13.6c0 7.2-5.8 13-13 13s-13-5.8-13-13 5.8-13 13-13c.5 0 1 .1 1.5.1v6.2c-.5-.1-1-.1-1.5-.1-3.7 0-6.8 3-6.8 6.8s3 6.8 6.8 6.8 6.8-3 6.8-6.8V4h6.7c0 1.2.1 2.3.3 3.5z" fill="#fff"/>
              <path d="M33.5 7.5c0 4.7 3.8 8.5 8.5 8.5v6.1c-3.2 0-6.2-1-8.5-2.7v13.6c0 7.2-5.8 13-13 13s-13-5.8-13-13 5.8-13 13-13c.5 0 1 .1 1.5.1v6.2c-.5-.1-1-.1-1.5-.1-3.7 0-6.8 3-6.8 6.8s3 6.8 6.8 6.8 6.8-3 6.8-6.8V4h6.7c0 1.2.1 2.3.3 3.5z" fill="#25F4EE" fillOpacity=".7"/>
              <path d="M33.5 7.5c0 4.7 3.8 8.5 8.5 8.5v6.1c-3.2 0-6.2-1-8.5-2.7v13.6c0 7.2-5.8 13-13 13s-13-5.8-13-13 5.8-13 13-13c.5 0 1 .1 1.5.1v6.2c-.5-.1-1-.1-1.5-.1-3.7 0-6.8 3-6.8 6.8s3 6.8 6.8 6.8 6.8-3 6.8-6.8V4h6.7c0 1.2.1 2.3.3 3.5z" fill="#FE2C55" fillOpacity=".5"/>
            </g>
          </svg>
        </span>
        <span className="footer-tiktok-text">TikTok</span>
      </div>
      <div className="footer-columns">
        <div className="footer-col">
          <div className="footer-col-title">Company</div>
          <a href="#">About TikTok</a>
          <a href="#">Newsroom</a>
          <a href="#">Contact</a>
          <a href="#">Careers</a>
          <a href="#">ByteDance</a>
        </div>
        <div className="footer-col">
          <div className="footer-col-title">Programs</div>
          <a href="#">TikTok for Good</a>
          <a href="#">TikTok for Developers</a>
          <a href="#">Effect House</a>
          <a href="#">Advertise on TikTok</a>
          <a href="#">TikTok Browse</a>
          <a href="#">TikTok Embeds</a>
          <a href="#">TikTok Rewards</a>
          <a href="#">TikTok Video Download</a>
          <a href="#">Fan Club</a>
        </div>
        <div className="footer-col">
          <div className="footer-col-title">Resources</div>
          <a href="#">Help Center</a>
          <a href="#">Safety Center</a>
          <a href="#">Privacy Center</a>
          <a href="#">Creator Academy</a>
          <a href="#">Community Guidelines</a>
          <a href="#">Transparency</a>
          <a href="#">Accessibility</a>
        </div>
        <div className="footer-col">
          <div className="footer-col-title">Legal</div>
          <a href="#">Terms of Service</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Intellectual Property Policy</a>
          <a href="#">TikTok Law Enforcement Guidelines</a>
        </div>
      </div>
    </div>
    <div className="footer-bottom">
      <div className="footer-lang-select">
        <select>
          <option>English</option>
          <option>Tiếng Việt</option>
          <option>日本語</option>
          <option>한국어</option>
          <option>Español</option>
          <option>Français</option>
        </select>
      </div>
      <div className="footer-copyright">© 2025 TikTok</div>
    </div>
  </footer>
);

export default Footer; 