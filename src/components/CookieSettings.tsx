
import React from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogClose, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Switch } from '@/components/ui/switch';

interface CookieSettingsProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSave: (settings: Record<string, boolean>) => void;
}

const CookieSettings: React.FC<CookieSettingsProps> = ({ open, onOpenChange, onSave }) => {
  const [cookieSettings, setCookieSettings] = React.useState({
    necessary: true, // Always true and cannot be changed
    functional: false,
    performance: false,
    analytics: false,
    advertisement: false,
    others: false
  });

  const handleSwitchChange = (category: string) => (checked: boolean) => {
    setCookieSettings(prev => ({ ...prev, [category]: checked }));
  };

  const handleSave = () => {
    localStorage.setItem('cookieSettings', JSON.stringify(cookieSettings));
    localStorage.setItem('cookieConsent', 'customized');
    onSave(cookieSettings);
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-xl max-h-[80vh] overflow-y-auto">
        <DialogClose className="absolute right-4 top-4" />
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-folk-dark-purple">Privacy Overview</DialogTitle>
        </DialogHeader>
        
        <div className="mt-4">
          <p className="text-folk-dark-purple mb-4">
            This website uses cookies to improve your experience while you navigate through the website.
            Out of these, the cookies that are categorized as necessary are stored on your browser as they
            are essential for the working of basic functionalities of the website. We also use third-party
            cookies that help us analyze and understand how you use this website. These cookies will be
            stored in your browser only with your consent. You also have the option to opt-out of these
            cookies. But opting out of some of these cookies may affect your browsing experience.
          </p>
          
          <Accordion type="multiple" defaultValue={["necessary"]}>
            <AccordionItem value="necessary">
              <AccordionTrigger className="text-folk-dark-purple font-medium">Necessary</AccordionTrigger>
              <AccordionContent className="flex justify-between items-center">
                <p className="text-sm text-folk-dark-purple">
                  Necessary cookies are absolutely essential for the website to function properly.
                </p>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-folk-gray">Alltid aktiverad</span>
                  <Switch checked={true} disabled />
                </div>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="functional">
              <AccordionTrigger className="text-folk-dark-purple font-medium">Functional</AccordionTrigger>
              <AccordionContent className="flex justify-between items-center">
                <p className="text-sm text-folk-dark-purple">
                  Functional cookies help to perform certain functionalities like sharing the content of the website.
                </p>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-folk-gray">Inaktiverad</span>
                  <Switch 
                    checked={cookieSettings.functional} 
                    onCheckedChange={handleSwitchChange('functional')} 
                  />
                </div>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="performance">
              <AccordionTrigger className="text-folk-dark-purple font-medium">Performance</AccordionTrigger>
              <AccordionContent className="flex justify-between items-center">
                <p className="text-sm text-folk-dark-purple">
                  Performance cookies are used to understand and analyze the key performance indexes of the website.
                </p>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-folk-gray">Inaktiverad</span>
                  <Switch 
                    checked={cookieSettings.performance} 
                    onCheckedChange={handleSwitchChange('performance')} 
                  />
                </div>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="analytics">
              <AccordionTrigger className="text-folk-dark-purple font-medium">Analytics</AccordionTrigger>
              <AccordionContent className="flex justify-between items-center">
                <p className="text-sm text-folk-dark-purple">
                  Analytical cookies are used to understand how visitors interact with the website.
                </p>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-folk-gray">Inaktiverad</span>
                  <Switch 
                    checked={cookieSettings.analytics} 
                    onCheckedChange={handleSwitchChange('analytics')} 
                  />
                </div>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="advertisement">
              <AccordionTrigger className="text-folk-dark-purple font-medium">Advertisement</AccordionTrigger>
              <AccordionContent className="flex justify-between items-center">
                <p className="text-sm text-folk-dark-purple">
                  Advertisement cookies are used to provide visitors with relevant ads and marketing campaigns.
                </p>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-folk-gray">Inaktiverad</span>
                  <Switch 
                    checked={cookieSettings.advertisement} 
                    onCheckedChange={handleSwitchChange('advertisement')} 
                  />
                </div>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="others">
              <AccordionTrigger className="text-folk-dark-purple font-medium">Others</AccordionTrigger>
              <AccordionContent className="flex justify-between items-center">
                <p className="text-sm text-folk-dark-purple">
                  Other uncategorized cookies are those that are being analyzed and have not been classified into a category as yet.
                </p>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-folk-gray">Inaktiverad</span>
                  <Switch 
                    checked={cookieSettings.others} 
                    onCheckedChange={handleSwitchChange('others')} 
                  />
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        
        <div className="mt-6 flex justify-end">
          <Button 
            className="bg-green-600 hover:bg-green-700 text-white py-2 px-4"
            onClick={handleSave}
          >
            SPARA OCH ACCEPTERA
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CookieSettings;
