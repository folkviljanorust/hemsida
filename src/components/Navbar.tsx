import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  const scrollToSection = (id: string) => {
    setIsMenuOpen(false);
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
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      isScrolled ? "py-2 bg-white shadow-md" : "py-4 bg-transparent"
    )}>
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="flex justify-center items-center">
          <span className="sr-only">Folkviljan Orust</span>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-folk-dark-purple hover:text-folk-purple transition-colors">Hem</Link>
            <Link 
              to="/#about" 
              className="text-folk-dark-purple hover:text-folk-purple transition-colors"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('about');
              }}
            >
              Berättelsen
            </Link>
            <Link 
              to="/#policy" 
              className="text-folk-dark-purple hover:text-folk-purple transition-colors"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('policy');
              }}
            >
              Vår politik
            </Link>
            <Link 
              to="/#news" 
              className="text-folk-dark-purple hover:text-folk-purple transition-colors"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('news');
              }}
            >
              Aktuellt
            </Link>
            <Link 
              to="/#join" 
              className="text-folk-dark-purple hover:text-folk-purple transition-colors"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('join');
              }}
            >
              Bli medlem
            </Link>
            <Link 
              to="/#donate" 
              className="text-folk-dark-purple hover:text-folk-purple transition-colors"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('donate');
              }}
            >
              Stöd oss
            </Link>
            <Button 
              className="bg-folk-purple hover:bg-folk-dark-purple text-white transition-colors" 
              onClick={() => scrollToSection('join')}
            >
              Bli medlem
            </Button>
          </div>
          
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-folk-dark-purple focus:outline-none"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      <div className={cn(
        "md:hidden fixed inset-x-0 glass-effect transition-all duration-300 overflow-hidden",
        isMenuOpen ? "max-h-screen py-4 opacity-100" : "max-h-0 py-0 opacity-0"
      )}>
        <div className="px-6 space-y-4">
          <Link 
            to="/" 
            className="block text-folk-dark-purple hover:text-folk-purple transition-colors py-2"
            onClick={() => setIsMenuOpen(false)}
          >
            Hem
          </Link>
          <Link 
            to="/#about" 
            className="block text-folk-dark-purple hover:text-folk-purple transition-colors py-2"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('about');
              setIsMenuOpen(false);
            }}
          >
            Berättelsen
          </Link>
          <Link 
            to="/#policy" 
            className="block text-folk-dark-purple hover:text-folk-purple transition-colors py-2"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('policy');
              setIsMenuOpen(false);
            }}
          >
            Vår politik
          </Link>
          <Link 
            to="/#news" 
            className="block text-folk-dark-purple hover:text-folk-purple transition-colors py-2"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('news');
              setIsMenuOpen(false);
            }}
          >
            Aktuellt
          </Link>
          <Link 
            to="/#join" 
            className="block text-folk-dark-purple hover:text-folk-purple transition-colors py-2"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('join');
              setIsMenuOpen(false);
            }}
          >
            Bli medlem
          </Link>
          <Link 
            to="/#donate" 
            className="block text-folk-dark-purple hover:text-folk-purple transition-colors py-2"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('donate');
              setIsMenuOpen(false);
            }}
          >
            Stöd oss
          </Link>
          <Button 
            className="w-full bg-folk-purple hover:bg-folk-dark-purple text-white transition-colors"
            onClick={() => {
              setIsMenuOpen(false);
              scrollToSection('join');
            }}
          >
            Bli medlem
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
