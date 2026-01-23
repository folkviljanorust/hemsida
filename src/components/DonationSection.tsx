
import React from 'react';
import { AspectRatio } from './ui/aspect-ratio';
import AnimatedUnderline from './AnimatedUnderline';

const DonationSection: React.FC = () => {
  const scrollToContactForm = () => {
    const formEl = document.getElementById('contact-form');
    if (formEl) {
      formEl.scrollIntoView({ behavior: 'smooth' });
      // Focus the name input after a short delay to allow the scroll to complete
      const nameInput = document.querySelector('input[name="name"]') as HTMLInputElement;
      if (nameInput) setTimeout(() => nameInput.focus(), 800);
    }
  };

  return (
    <section 
      id="donate" 
      className="py-16 px-6 md:px-10 bg-folk-lavender animate-on-scroll"
    >
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-block px-3 py-1 rounded-full bg-white bg-opacity-50 text-folk-dark-purple text-sm font-medium mb-4">
          Stöd oss
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-folk-dark-purple mb-4">
          Stöd vårt arbete för Orust
        </h2>
        <div className="w-24 mx-auto mb-6">
          <AnimatedUnderline className="bg-folk-purple" />
        </div>
        <p className="text-folk-dark-purple mb-8 text-lg max-w-2xl mx-auto">
          Din donation hjälper oss att fortsätta arbetet för en starkare kommun med sund ekonomi, 
          personlig frihet och tillväxt med kvalitet. Tillsammans kan vi skapa förändring.
        </p>
        
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-md mx-auto">
          <div className="flex flex-col items-center gap-6">
            <div className="w-full max-w-xs">
              <AspectRatio ratio={1/1} className="overflow-hidden rounded-lg">
                <img 
                  src="/lovable-uploads/fbd9820f-679a-4518-9504-8bb6d4b8cfa5.png" 
                  alt="Swish QR-kod for Donation till Folkviljan" 
                  className="w-full h-full object-contain"
                />
              </AspectRatio>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold text-folk-dark-purple mb-2">Swish</h3>
              <p className="text-folk-dark-purple mb-4">123-221 43 10</p>
            </div>
          </div>
        </div>
        
        <p className="text-folk-dark-purple mt-8 text-sm">
          Har du frågor om donationer?{' '}
          <span 
            className="text-folk-purple cursor-pointer"
            onClick={scrollToContactForm}
          >
            Skicka ett meddelande via formuläret
          </span>
        </p>
      </div>
    </section>
  );
};

export default DonationSection;
