import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';
import AnimatedUnderline from './AnimatedUnderline';

const HeroSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (sectionRef.current) {
        sectionRef.current.querySelectorAll('.animate-on-load').forEach((el, index) => {
          setTimeout(() => {
            el.classList.add('opacity-100');
            el.classList.remove('opacity-0', 'translate-y-8');
          }, index * 200);
        });
      }
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      ref={sectionRef}
      className="min-h-screen relative flex flex-col justify-center items-center px-6 md:px-10 bg-white"
    >
      <div className="max-w-6xl w-full mx-auto text-center space-y-6 md:space-y-8">
        {/* Logo at the top */}
        <img 
          src="/lovable-uploads/925fca25-40c3-4a66-a2fa-3e5f0f5b7a8d.png"
          alt="Folkviljan Orust Logo"
          className="mx-auto mb-4 w-48 md:w-64 max-w-xs drop-shadow-lg animate-on-load opacity-0 translate-y-8 transition-all duration-500"
          style={{background: 'rgba(255,255,255,0.95)', borderRadius: '1.5rem', padding: '0.5rem'}}
        />

        {/* Slogan under logo */}
        <h2 className="text-2xl md:text-3xl font-semibold text-folk-dark-purple opacity-0 translate-y-8 transition-all duration-500 animate-on-load">
          Frihet, Omtanke & Sund Ekonomi
        </h2>
        
        <h1 className="text-4xl md:text-5xl lg:text-7xl text-folk-dark-purple font-bold leading-tight md:leading-tight opacity-0 translate-y-8 transition-all duration-500 animate-on-load">
          {/* Empty, to avoid duplicate as per design */}
        </h1>
        
        <div className="w-24 mx-auto opacity-0 translate-y-8 transition-all duration-500 animate-on-load">
          <AnimatedUnderline className="bg-folk-purple" />
        </div>
        
        {/* Subtitle */}
        <p className="text-lg md:text-xl text-folk-purple max-w-3xl mx-auto opacity-0 translate-y-8 transition-all duration-500 animate-on-load text-balance">
          Med sans och balans skapar vi tillsammans ett Orust med omtanke om varandra och naturen – där varje invånares röst beaktas, och besluten grundas i verkligheten snarare än i höger- eller vänsterideologi
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8 opacity-0 translate-y-8 transition-all duration-500 animate-on-load">
          <Button 
            className="bg-folk-purple hover:bg-folk-dark-purple text-white px-6 py-6 rounded-md text-lg transition-all duration-300 shadow-md hover:shadow-lg"
            onClick={() => scrollToSection('policy')}
          >
            Läs om vår politik
          </Button>
          <Button 
            variant="outline" 
            className="bg-transparent text-folk-dark-purple border-folk-dark-purple hover:bg-folk-lavender hover:text-folk-dark-purple px-6 py-6 rounded-md text-lg transition-all duration-300"
            onClick={() => scrollToSection('join')}
          >
            Bli medlem
          </Button>
        </div>
      </div>
      
      <div className="absolute bottom-12 left-0 right-0 flex justify-center opacity-0 translate-y-8 transition-all duration-500 animate-on-load">
        <a href="#policy" className="animate-bounce p-2 rounded-full">
          <ChevronDown className="text-folk-dark-purple w-8 h-8" />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
