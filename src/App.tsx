import React from 'react';
import './App.css';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import DemoSection from './components/DemoSection';
import ScenarioSection from './components/ScenarioSection';
import FeaturesSection from './components/FeaturesSection';
import RealtimeSection from './components/RealtimeSection';
import AnalyticsSection from './components/AnalyticsSection';
import SystemRequirementsSection from './components/SystemRequirementsSection';
import WidgetsSection from './components/WidgetsSection';
import FaqSection from './components/FaqSection';
import Footer from './components/Footer';
// Swiper import
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Mousewheel, Pagination } from 'swiper/modules';

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <Swiper
        direction="vertical"
        slidesPerView={1}
        spaceBetween={0}
        mousewheel={true}
        pagination={{ clickable: true }}
        modules={[Mousewheel, Pagination]}
        style={{ height: '100vh' }}
        className="tiktok-vertical-swiper"
      >
        <SwiperSlide><HeroSection /></SwiperSlide>
        <SwiperSlide><DemoSection /></SwiperSlide>
        <SwiperSlide><ScenarioSection /></SwiperSlide>
        <SwiperSlide><FeaturesSection /></SwiperSlide>
        <SwiperSlide><WidgetsSection /></SwiperSlide>
        <SwiperSlide><AnalyticsSection /></SwiperSlide>
        <SwiperSlide><SystemRequirementsSection /></SwiperSlide>
      </Swiper>
      <FaqSection />
      <Footer />
    </div>
  );
};

export default App;
