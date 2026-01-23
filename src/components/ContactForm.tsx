
import React, { useState } from 'react';
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Using Formspree for form submission
      const response = await fetch("https://formspree.io/f/xwplwgee", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });
      
      if (response.ok) {
        toast.success("Tack för ditt meddelande! Vi återkommer så snart som möjligt.");
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: ''
        });
      } else {
        toast.error("Det gick inte att skicka meddelandet. Försök igen senare.");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      toast.error("Ett fel uppstod. Kontrollera din internetanslutning och försök igen.");
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
      <Button 
        type="submit" 
        disabled={isSubmitting}
        className="w-full bg-folk-purple hover:bg-folk-dark-purple text-white transition-colors duration-300"
      >
        {isSubmitting ? "Skickar..." : "Skicka meddelande"}
      </Button>
    </form>
  );
};

export default ContactForm;
