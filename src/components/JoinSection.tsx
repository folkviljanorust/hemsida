
import React from 'react';
import AnimatedUnderline from './AnimatedUnderline';
import ContactForm from './ContactForm';

const JoinSection: React.FC = () => {
  return (
    <section id="join" className="py-16 px-6 md:px-10 bg-folk-gray animate-on-scroll">
      <div className="max-w-6xl mx-auto">
        <div className="bg-folk-lavender rounded-xl p-8 md:p-12 shadow-lg">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="w-full lg:w-1/2">
              <div className="inline-block px-3 py-1 rounded-full bg-white bg-opacity-70 text-folk-dark-purple text-sm font-medium mb-4">
                Bli medlem
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-folk-dark-purple mb-4">
                Bli en del av Folkviljan Orust
              </h2>
              <div className="w-24 mb-6">
                <AnimatedUnderline className="bg-folk-purple" />
              </div>
              <p className="text-folk-dark-purple mb-6 text-lg">
                Vill du bli medlem och bidra till ett starkare Orust? Fyll i formuläret så kontaktar vi dig med mer information om hur du kan engagera dig.
              </p>
              <p className="text-folk-dark-purple mb-6 text-lg">
                Som medlem i Folkviljan Orust får du vara med och påverka kommunens framtid och bidra till positiv förändring.
              </p>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-folk-dark-purple mb-4">Medlemskap innebär:</h3>
                <ul className="space-y-3 text-folk-purple">
                  <li className="flex items-start gap-3">
                    <span className="text-folk-purple font-bold text-xl">•</span>
                    <span>Möjlighet att delta i medlemsmöten och påverka politiken</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-folk-purple font-bold text-xl">•</span>
                    <span>Inbjudan till evenemang och sociala aktiviteter</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-folk-purple font-bold text-xl">•</span>
                    <span>En direkt kanal till lokala beslutsfattare</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="w-full lg:w-1/2">
              <div className="bg-folk-purple bg-opacity-20 p-6 md:p-8 rounded-lg">
                <h3 className="text-xl font-semibold text-folk-dark-purple mb-6">Kontakta oss</h3>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinSection;
