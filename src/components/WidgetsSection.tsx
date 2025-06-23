import React from 'react';
import './WidgetsSection.css';

const WidgetsSection: React.FC = () => (
  <section className="widgets-section">
    <div className="widgets-content">
      <div className="widgets-text">
        <h2>Customize with widgets</h2>
        <p>Spice up your LIVE with widgets such as viewer ranking, countdown, and more.</p>
      </div>
      <div className="widgets-image">
        <img 
          src="//sf16-website-login.neutral.ttwstatic.com/obj/tiktok_web_login_static/tikcast/game/webapp/static/image/chat-widgets.f9579b9a.png"
          alt="Customize with widgets"
          className="widgets-bg"
        />
      
        <img
          src="//sf16-website-login.neutral.ttwstatic.com/obj/tiktok_web_login_static/tikcast/game/webapp/static/image/game-screen.6d94d93f.png"
          alt="Game overlay"
          className="widgets-overlay"
        />
      </div>
    </div>
  </section>
);

export default WidgetsSection; 