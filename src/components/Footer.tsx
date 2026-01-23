import React from 'react';
import { Facebook } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const scrollToSection = (id: string) => {
    if (window.location.pathname === '/') {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.location.href = `/#${id}`;
    }
  };

  return (
    <footer className="bg-folk-dark-purple py-16 px-6 md:px-10 text-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <div>
            <h3 className="text-2xl font-bold mb-6">Folkviljan Orust</h3>
            <p className="text-folk-gray mb-6 leading-relaxed">
              Vi arbetar för en starkare kommun med sund ekonomi, personlig frihet och tillväxt med kvalitet.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-6">Länkar</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-folk-gray hover:text-white transition-colors">Hem</Link>
              </li>
              <li>
                <Link 
                  to="/#about" 
                  className="text-folk-gray hover:text-white transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('about');
                  }}
                >
                  Berättelsen
                </Link>
              </li>
              <li>
                <Link 
                  to="/#policy" 
                  className="text-folk-gray hover:text-white transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('policy');
                  }}
                >
                  Vår politik
                </Link>
              </li>
              <li>
                <Link 
                  to="/#news" 
                  className="text-folk-gray hover:text-white transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('news');
                  }}
                >
                  Aktuellt
                </Link>
              </li>
              <li>
                <Link 
                  to="/#join" 
                  className="text-folk-gray hover:text-white transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('join');
                  }}
                >
                  Bli medlem
                </Link>
              </li>
              <li>
                <Link 
                  to="/#donate" 
                  className="text-folk-gray hover:text-white transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('donate');
                  }}
                >
                  Stöd oss
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-6">Följ oss på Facebook</h4>
            <p className="text-folk-gray mb-4">
              Håll dig uppdaterad om de senaste nyheterna och evenemangen genom att följa oss på Facebook.
            </p>
            <a 
              href="https://www.facebook.com/folkviljanorust" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block"
            >
              <Button className="bg-[#1877F2] hover:bg-[#0e5dc3] text-white flex items-center gap-2 px-4 py-2">
                <Facebook size={18} />
                <span>facebook.com/folkviljanorust</span>
              </Button>
            </a>
          </div>
        </div>
        
        <div className="border-t border-[#4c3b6f] mt-12 pt-6 text-folk-gray text-center">
          <p>&copy; {new Date().getFullYear()} Folkviljan Orust. Alla rättigheter reserverade.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
