
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/home/Hero';
import Features from '@/components/home/Features';
import Pricing from '@/components/home/Pricing';
import HowItWorks from '@/components/home/HowItWorks';
import Reviews from '@/components/home/Reviews';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <HowItWorks />
        <Reviews />
        <Features />
        <Pricing />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
