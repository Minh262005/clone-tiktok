import React from 'react';
import './RealtimeSection.css';

const RealtimeSection: React.FC = () => (
  <section className="realtime-section">
    <div className="realtime-content">
      <div className="realtime-mockup">
        {/* Thay ảnh demo bằng ảnh thật nếu có */}
        <img src="//sf16-website-login.neutral.ttwstatic.com/obj/tiktok_web_login_static/tikcast/game/webapp/static/image/databoard.dc8d9c9e.png" alt="Realtime Demo" className="realtime-img" />
      </div>
      <div className="realtime-description">
        <h2>Catch everything in real time</h2>
        <p>Never miss a beat! Find out comments, Gifts, and new followers all in real time.</p>
      </div>
    </div>
  </section>
);

export default RealtimeSection; 