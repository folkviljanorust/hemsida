import React, { useEffect, useRef } from 'react';
import AnimatedUnderline from './AnimatedUnderline';

const AboutSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Observe section for scroll animation
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    const animElements = document.querySelectorAll('.animate-on-scroll');
    animElements.forEach(el => observer.observe(el));

    return () => {
      animElements.forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="py-20 px-6 md:px-10 bg-folk-gray"
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <div className="w-full lg:w-1/2 animate-on-scroll">
            <div className="relative">
              <div className="w-full h-[400px] md:h-[500px] rounded-lg overflow-hidden">
                <img 
                  src="/lovable-uploads/7667349e-6360-4a36-bb73-9d0f4264b1ac.png" 
                  alt="Solnedgång över Orust" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-folk-purple p-6 rounded-lg shadow-lg hidden md:block">
                <p className="text-white font-medium text-lg">En plats för tillväxt och gemenskap</p>
              </div>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 animate-on-scroll" style={{ transitionDelay: '200ms' }}>
            <div className="inline-block px-3 py-1 rounded-full bg-white text-folk-dark-purple text-sm font-medium mb-4">
              Berättelsen
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-folk-dark-purple mb-4">
              Folkviljan Orust
            </h2>
            <div className="w-24 mb-6">
              <AnimatedUnderline className="bg-folk-purple" />
            </div>
            <p className="text-folk-purple mb-6 text-lg">
              Välkommen till Orust, en kommun mitt i hjärtat av Bohuslän, där vi sträver efter att skapa en plats för frihet, sund ekonomi och tillväxt med kvalitet. Föreställ dig en framtid där invånare och företag blomstrar, där vi tar hand om vår vackra natur och där politiska beslut grundas på sunt förnuft.
            </p>
            <p className="text-folk-purple mb-6 text-lg">
              Vi vill minska byråkratin så att alla – familjer, pensionärer och småföretagare – kan växa och trivas utan att tyngas av ständigt ökande taxor och avgifter. Vår vision är att alla ska få den hjälp de behöver för att nå sin fulla potential.
            </p>
            <p className="text-folk-purple mb-8 text-lg">
              Tillsammans kan vi göra Orust till en levande och attraktiv plats för både invånare och besökare. Vi är dedikerade till att skapa en dynamisk miljö där alla har möjlighet att delta och bidra.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
