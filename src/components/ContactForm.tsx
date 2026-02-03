import React, { useState, useEffect } from 'react';
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

  // Ladda Turnstile-scriptet
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js';
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleTurnstileSuccess = (token: string) => {
    setTurnstileToken(token);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!turnstileToken) {
      toast.error("Validering misslyckades. Försök igen.");
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
          "cf-turnstile-response": turnstileToken  // Turnstile-token skickas med
        })
      });

      if (response.ok) {
        toast.success("Tack för ditt meddelande! Vi återkommer så snart som möjligt.");
        setFormData({ name: '', email: '', phone: '', message: '' });
        setTurnstileToken(null); // Återställ token
        // Återställ Turnstile-widget (valfritt, men bra UX)
        if (window.turnstile) {
          window.turnstile.reset();
        }
      } else {
        toast.error("Det gick inte att skicka meddelandet. Försök igen senare.");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      toast.error("Ett fel uppstod. Kontrollera din internetanslutning.");
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

      {/* Cloudflare Turnstile */}
      <div className="cf-turnstile"
           data-sitekey="0x4AAAAAACXRdYGLoG1JZGqn"
           data-callback="handleTurnstileSuccess"
           data-theme="dark"  
           data-size="normal">
      </div>

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
