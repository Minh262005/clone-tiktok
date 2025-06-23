import React from 'react';
import './FaqSection.css';

const faqs = [
  {
    question: '1. What is LIVE Studio?',
    answer: (
      <>
        TikTok LIVE Studio is the official LIVE tool for Windows users.
      </>
    ),
  },
  {
    question: '2. Is TikTok LIVE Studio available to all creators?',
    answer: (
      <>
        1. All LIVE creators can go LIVE on LIVE Studio if they meet the access requirements. For more details, visit the access application page.&nbsp;
        <a href="https://www.tiktok.com/studio/download" target="_blank" rel="noopener noreferrer" className="faq-link">
          https://www.tiktok.com/studio/download
        </a>
        <br />
        2. Note that, due to security reasons, you may not be able to apply for access. Contact us if you have any questions.&nbsp;
        <a href="https://www.tiktok.com/legal/report/feedback" target="_blank" rel="noopener noreferrer" className="faq-link">
          https://www.tiktok.com/legal/report/feedback
        </a>
      </>
    ),
  },
  {
    question: '3. How do I get access to TikTok LIVE Studio?',
    answer: (
      <>
        1. You can find the download page entrance on the profile list.<br />
        2. Download TikTok LIVE Studio (latest official version).<br />
        3. Start LIVE Studio and log in to your TikTok account.
      </>
    ),
  },
  {
    question: '4. Is there a macOS version?',
    answer: (
      <>
        TikTok LIVE Studio only supports Windows at the moment.
      </>
    ),
  },
  {
    question: "5. What's the difference between LIVE Studio and OBS?",
    answer: (
      <>
        TikTok LIVE Studio and OBS have similar functions. However, LIVE Studio is developed by TikTok. Creators can use it by logging in to TikTok. It also offers better information and content safety for creators.
      </>
    ),
  },
];

const FaqSection: React.FC = () => (
  <section className="faq-section">
    <h2 className="faq-title">Frequently asked questions on LIVE Studio</h2>
    <div className="faq-list">
      {faqs.map((faq, idx) => (
        <div className="faq-item" key={idx}>
          <div className="faq-question">{faq.question}</div>
          <div className="faq-answer">{faq.answer}</div>
        </div>
      ))}
    </div>
    <div className="faq-see-more">
      <a href="#" className="faq-see-more-link">See more <span aria-hidden>↗</span></a>
    </div>
  </section>
);

export default FaqSection;
