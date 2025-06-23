import React from 'react';
import './FeaturesSection.css';

const icons = {
  goal: (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none"><circle cx="16" cy="16" r="15" stroke="#fff" strokeWidth="2"/><path d="M16 8v8l6 3" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
  ),
  sub: (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none"><rect x="6" y="10" width="20" height="12" rx="3" stroke="#fff" strokeWidth="2"/><path d="M16 16v2" stroke="#fff" strokeWidth="2" strokeLinecap="round"/><circle cx="16" cy="14" r="2" fill="#fff"/></svg>
  ),
  multi: (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none"><circle cx="10" cy="14" r="3" stroke="#fff" strokeWidth="2"/><circle cx="22" cy="14" r="3" stroke="#fff" strokeWidth="2"/><rect x="6" y="20" width="20" height="4" rx="2" stroke="#fff" strokeWidth="2"/></svg>
  ),
  cohost: (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none"><rect x="8" y="8" width="16" height="16" rx="4" stroke="#fff" strokeWidth="2"/><path d="M12 16h8" stroke="#fff" strokeWidth="2" strokeLinecap="round"/></svg>
  ),
  highlight: (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none"><path d="M16 6v4M16 22v4M6 16h4M22 16h4M10.93 10.93l2.12 2.12M19.07 19.07l2.12 2.12M10.93 21.07l2.12-2.12M19.07 12.93l2.12-2.12" stroke="#fff" strokeWidth="2" strokeLinecap="round"/></svg>
  ),
  poll: (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none"><rect x="8" y="10" width="16" height="4" rx="2" fill="#fff"/><rect x="8" y="18" width="16" height="4" rx="2" fill="#fff"/></svg>
  ),
};

const FeaturesSection: React.FC = () => (
  <section className="features-section-2col">
    <div className="features-left">
      <div className="features-image-wrapper">
        <img
          src="//sf16-website-login.neutral.ttwstatic.com/obj/tiktok_web_login_static/tikcast/game/webapp/static/image/personBg.9ac1f021.png"
          alt="Person BG"
          className="features-person-bg"
        />
        <div className="feature-label label-goal">{icons.goal}<span>LIVE goal</span></div>
        <div className="feature-label label-sub">{icons.sub}<span>Subscription</span></div>
        <div className="feature-label label-multi">{icons.multi}<span>Multi-guest</span></div>
        <div className="feature-label label-cohost">{icons.cohost}<span>Co-host</span></div>
        <div className="feature-label label-highlight">{icons.highlight}<span>Highlight</span></div>
        <div className="feature-label label-poll">{icons.poll}<span>Text poll</span></div>
        <img
          src="//sf16-website-login.neutral.ttwstatic.com/obj/tiktok_web_login_static/tikcast/game/webapp/static/image/pc.c595493d.png"
          alt="PC"
          className="features-pc"
        />
        <img
          src="//sf16-website-login.neutral.ttwstatic.com/obj/tiktok_web_login_static/tikcast/game/webapp/static/image/iphone.3c4af23a.png"
          alt="iPhone"
          className="features-iphone"
        />
      </div>
    </div>
    <div className="features-right">
      <h2>Explore exclusive TikTok features</h2>
      <p>Engage with viewers using TikTok's exclusive interaction features like co-host, multi-guest, LIVE goal, and more.</p>
    </div>
  </section>
);

export default FeaturesSection; 