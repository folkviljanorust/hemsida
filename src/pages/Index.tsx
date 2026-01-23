
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import PolicySection from '@/components/PolicySection';
import AboutSection from '@/components/AboutSection';
import JoinSection from '@/components/JoinSection';
import DonationSection from '@/components/DonationSection';
import Footer from '@/components/Footer';
import RecentNews from '@/components/RecentNews';

const FacebookBanner = () => (
  <div className="max-w-6xl mx-auto my-12 px-4">
    <div className="bg-[#f5edf9] border-2 border-folk-purple rounded-lg flex flex-col md:flex-row items-center gap-6 p-8 shadow-lg text-center md:text-left">
      <img
        src="/lovable-uploads/8147cd35-fc57-42f5-a090-3076463ba0f9.png"
        alt="Facebook logotyp Folkviljan Orust"
        className="h-20 w-20 rounded-full border p-2 border-[#1877F2] bg-white"
      />
      <div className="flex-grow">
        <h3 className="text-xl md:text-2xl font-bold text-folk-dark-purple mb-2">
          Senaste nytt och uppdateringar hittar du på Facebook!
        </h3>
        <p className="text-folk-purple mb-3">
          Följ oss på Facebook för att ta del av aktuella händelser, nyheter och diskussioner.
        </p>
        <a
          href="https://www.facebook.com/folkviljanorust"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block"
        >
          <span className="bg-[#1877F2] hover:bg-[#0e5dc3] text-white font-bold py-2 px-5 rounded transition-all">
            Besök vår Facebook-sida
          </span>
        </a>
      </div>
    </div>
  </div>
);

const Index = () => {
  useEffect(() => {
    const animateElements = () => {
      const elements = document.querySelectorAll('.animate-on-scroll');
      elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (elementTop < windowHeight * 0.85) {
          element.classList.add('visible');
        }
      });
    };

    animateElements();
    window.addEventListener('scroll', animateElements);
    return () => window.removeEventListener('scroll', animateElements);
  }, []);

  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <PolicySection />
        <RecentNews />
        <FacebookBanner />
        <JoinSection />
        <DonationSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
