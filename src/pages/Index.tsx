
import React from 'react';
import Navbar from '@/components/ui/Navbar';
import '../i18n'; // o './i18n' según tu estructura
import LanguageSwitcher from '@/components/LanguageSwitcher';
import Gallery6 from '@/components/ui/Gallery6';
import HeroSection from '@/components/ui/HeroSection';
import ServiceSection from '@/components/ui/ServiceSection';
import ProductSection from '@/components/ui/ProductSection';
import VideoSection from '@/components/ui/VideoSection';
import SubscriptionSection from '@/components/ui/SubscriptionSection';
import DemoSection from '@/components/ui/DemoSection';
import ReviewSection from '@/components/ui/ReviewSection';
import Footer from '@/components/ui/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-vr-dark text-white">
      <Navbar />
      <HeroSection />
      <ProductSection />
      <ServiceSection />
      <VideoSection />
      <DemoSection />
      <Gallery6 />
      <SubscriptionSection />
      <ReviewSection />
      <Footer />
    </div>
  );
};

export default Index;
