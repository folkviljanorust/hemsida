
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import CookieSettings from './CookieSettings';

const CookieConsent: React.FC = () => {
  const [showConsent, setShowConsent] = useState(false);
  const [showSettings, setShowSettings] = useState(false);

  useEffect(() => {
    // Check if user has already consented
    const hasConsented = localStorage.getItem('cookieConsent');
    if (!hasConsented) {
      setShowConsent(true);
    }
    
    // For debugging - log the current cookie consent status
    console.log('Current cookie consent status:', localStorage.getItem('cookieConsent'));
    console.log('Current cookie settings:', localStorage.getItem('cookieSettings'));
  }, []);

  const acceptAll = () => {
    // Accept all cookies
    const allSettings = {
      necessary: true,
      functional: true,
      performance: true,
      analytics: true,
      advertisement: true,
      others: true
    };
    
    localStorage.setItem('cookieConsent', 'all');
    localStorage.setItem('cookieSettings', JSON.stringify(allSettings));
    console.log('All cookies accepted:', allSettings);
    setShowConsent(false);
  };

  const acceptNecessary = () => {
    // Accept only necessary cookies
    const necessarySettings = {
      necessary: true,
      functional: false,
      performance: false,
      analytics: false,
      advertisement: false,
      others: false
    };
    
    localStorage.setItem('cookieConsent', 'necessary');
    localStorage.setItem('cookieSettings', JSON.stringify(necessarySettings));
    console.log('Only necessary cookies accepted:', necessarySettings);
    setShowConsent(false);
  };

  const openSettings = () => {
    setShowSettings(true);
  };

  const handleSettingsSave = (settings: Record<string, boolean>) => {
    console.log('Cookie settings saved:', settings);
    localStorage.setItem('cookieSettings', JSON.stringify(settings));
    localStorage.setItem('cookieConsent', 'customized');
    setShowConsent(false);
  };

  if (!showConsent) return null;

  return (
    <>
      <div className="fixed bottom-0 left-0 right-0 bg-[#593f80] text-white z-50 p-3 shadow-lg">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm flex-1">
            Hos oss på FolkviljanOrust.se försöker vi ge dig som användare den mest relevanta upplevelsen genom att komma ihåg dina val och återkommande besök. Genom att klicka på "Acceptera Alla" godkänner du användningen av Alla cookies. Du kan besöka "Cookie Inställningar" för att genomföra ett urval av godkännande.
          </p>
          <div className="flex gap-2 flex-wrap">
            <Button 
              variant="outline" 
              className="bg-transparent border-white text-white hover:bg-white hover:text-[#593f80]"
              onClick={openSettings}
            >
              Cookie inställningar
            </Button>
            <Button 
              variant="outline" 
              className="bg-transparent border-white text-white hover:bg-white hover:text-[#593f80]"
              onClick={acceptNecessary}
            >
              Avvisa Alla
            </Button>
            <Button 
              className="bg-white text-[#593f80] hover:bg-gray-200"
              onClick={acceptAll}
            >
              Acceptera Alla
            </Button>
          </div>
        </div>
      </div>

      <CookieSettings 
        open={showSettings} 
        onOpenChange={setShowSettings} 
        onSave={handleSettingsSave} 
      />
    </>
  );
};

export default CookieConsent;
