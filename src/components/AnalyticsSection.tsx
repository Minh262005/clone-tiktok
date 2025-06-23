import React from 'react';
import './AnalyticsSection.css';

const AnalyticsSection: React.FC = () => (
  <section className="analytics-section">
    <div className="analytics-content">
      <div className="analytics-mockup">
        <img
          src="//sf16-website-login.neutral.ttwstatic.com/obj/tiktok_web_login_static/tikcast/game/webapp/static/image/databoard.dc8d9c9e.png"
          alt="Databoard"
          className="analytics-bg"
        />
        <img
          src="//sf16-website-login.neutral.ttwstatic.com/obj/tiktok_web_login_static/tikcast/game/webapp/static/image/graph.530a9b2a.png"
          alt="Analytics Demo"
          className="analytics-overlay"
        />
      </div>
      <div className="analytics-description">
        <h2>Unlock the power of data</h2>
        <p>Gain insights into your LIVE and viewers with LIVE Analytics.</p>
      </div>
    </div>
  </section>
);

export default AnalyticsSection; 