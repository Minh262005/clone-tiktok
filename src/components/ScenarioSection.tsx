import React, { useEffect, useState } from 'react';
import './ScenarioSection.css';

const videos = [
  {
    src: "//sf16-website-login.neutral.ttwstatic.com/obj/tiktok_web_login_static/tikcast/game/webapp/static/media/video-effect.f784a600.mp4",
    label: "Effects",
  },
  {
    src: "//sf16-website-login.neutral.ttwstatic.com/obj/tiktok_web_login_static/tikcast/game/webapp/static/media/video-gaming.5598fcfc.mp4",
    label: "Gaming",
  },
  {
    src: "//sf16-website-login.neutral.ttwstatic.com/obj/tiktok_web_login_static/tikcast/game/webapp/static/media/video-chatting.007ebf1d.mp4",
    label: "Chat",
  },
];

const getIndex = (base: number, offset: number, length: number) => (base + offset + length) % length;

const ScenarioSection: React.FC = () => {
  const [centerIdx, setCenterIdx] = useState(1); // Start with Gaming in center

  useEffect(() => {
    const interval = setInterval(() => {
      setCenterIdx((prev) => (prev + 1) % videos.length);
    }, 3000); // 3s mỗi lần chuyển
    return () => clearInterval(interval);
  }, []);

  // Tính toán index cho left, center, right
  const leftIdx = getIndex(centerIdx, -1, videos.length);
  const rightIdx = getIndex(centerIdx, 1, videos.length);

  return (
    <section className="scenario-section-2col">
      <div className="scenario-left">
        <h2>Empower your LIVE<br />for various scenarios</h2>
        <p>Maximize your LIVE experience by sharing gaming content, engaging in discussions, or hosting a live show.</p>
      </div>
      <div className="scenario-right">
        <div className="scenario-videos-carousel">
          <div className="scenario-video-block left">
            <video
              src={videos[leftIdx].src}
              autoPlay
              loop
              muted
              playsInline
              className="scenario-video"
            />
            <div className="scenario-label">{videos[leftIdx].label}</div>
          </div>
          <div className="scenario-video-block center">
            <video
              src={videos[centerIdx].src}
              autoPlay
              loop
              muted
              playsInline
              className="scenario-video"
            />
            <div className="scenario-label">{videos[centerIdx].label}</div>
          </div>
          <div className="scenario-video-block right">
            <video
              src={videos[rightIdx].src}
              autoPlay
              loop
              muted
              playsInline
              className="scenario-video"
            />
            <div className="scenario-label">{videos[rightIdx].label}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScenarioSection; 