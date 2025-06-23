import React from 'react';
import './DemoSection.css';

const DemoSection: React.FC = () => (
  <section className="demo-section-centered">
    <div className="demo-mockup-centered">
      <video
        src="//sf16-website-login.neutral.ttwstatic.com/obj/tiktok_web_login_static/tikcast/game/webapp/static/media/studio-view.1ecb44e7.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="demo-video"
        style={{ width: '100%', borderRadius: 16 }}
      />
    </div>
  </section>
);

export default DemoSection; 