import React, { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';

interface ContactFormProps {
  formId?: string;
}

const ContactForm: React.FC<ContactFormProps> = ({ formId = "contact-form" }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null);

  const turnstileRef = useRef<HTMLDivElement>(null);
  const widgetIdRef = useRef<string | null>(null);

  // Ladda Turnstile-scriptet
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit';
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  // Rendera widgeten explicit när scriptet är klart
  useEffect(() => {
    if (!turnstileRef.current) return;

    const tryRender = () => {
      if (window.turnstile && turnstileRef.current) {
        // Ta bort gammal widget om den finns
        if (widgetIdRef.current) {
          window.turnstile.remove(widgetIdRef.current);
        }

        const widgetId = window.turnstile.render(turnstileRef.current, {
          sitekey: '0x4AAAAAACXRdYGLoG1JZGqn',
          theme: 'dark',           // eller 'light' / 'auto'
          size: 'normal',
          callback: (token: string) => {
            setTurnstileToken(token);
            console.log('Turnstile OK → token:', token);
          },
          'error-callback': (err: any) => {
            console.error('Turnstile error:', err);
            toast.error('Valideringsfel – försök ladda om sidan');
          },
          'expired-callback': () => {
            setTurnstileToken(null);
            console.warn('Turnstile token expired');
          }
        });

        widgetIdRef.current = widgetId;
      }
    };

    
    const interval = setInterval(() => {
      if (window.turnstile) {
        tryRender();
        clearInterval(interval);
      }
    }, 150);

    return () => {
      clearInterval(interval);
      if (widgetIdRef.current && window.turnstile) {
        window.turnstile.remove(widgetIdRef.current);
      }
    };
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!turnstileToken) {
      toast.error("Vänligen verifiera att du inte är en robot.");
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await fetch("https://formspree.io/f/xwplwgee", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          ...formData,
          "cf-turnstile-response": turnstileToken
        })
      });

      if (response.ok) {
        toast.success("Tack för ditt meddelande! Vi återkommer så snart som möjligt.");
        setFormData({ name: '', email: '', phone: '', message: '' });
        setTurnstileToken(null);

        // Återställ widgeten efter lyckad submit
        if (widgetIdRef.current && window.turnstile) {
          window.turnstile.reset(widgetIdRef.current);
        }
      } else {
        toast.error("Kunde inte skicka meddelandet. Försök igen.");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      toast.error("Något gick fel – kolla nätverket.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form id={formId} onSubmit={handleSubmit} className="space-y-6">
      <div>
        <Input
          name="name"
          placeholder="Ditt namn"
          value={formData.name}
          onChange={handleChange}
          required
          className="bg-white border-folk-purple"
        />
      </div>
      <div>
        <Input
          name="email"
          type="email"
          placeholder="Din e-postadress"
          value={formData.email}
          onChange={handleChange}
          required
          className="bg-white border-folk-purple"
        />
      </div>
      <div>
        <Input
          name="phone"
          type="tel"
          placeholder="Ditt telefonnummer (valfritt)"
          value={formData.phone}
          onChange={handleChange}
          className="bg-white border-folk-purple"
        />
      </div>
      <div>
        <Textarea
          name="message"
          placeholder="Ditt meddelande"
          value={formData.message}
          onChange={handleChange}
          required
          className="bg-white border-folk-purple min-h-[150px]"
        />
      </div>

      {/* Turnstile container */}
      <div ref={turnstileRef} className="my-4 flex justify-center" />

      <Button
        type="submit"
        disabled={isSubmitting || !turnstileToken}
        className="w-full bg-folk-purple hover:bg-folk-dark-purple text-white transition-colors duration-300"
      >
        {isSubmitting ? "Skickar..." : "Skicka meddelande"}
      </Button>
    </form>
  );
};

export default ContactForm;
