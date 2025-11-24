import React, { useState } from 'react';
import { Mail, Phone, MapPin, CheckCircle, Loader2 } from 'lucide-react';
import { Button } from './Button';
import { ContactFormState } from '../types';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormState>({
    name: '',
    email: '',
    service: 'Strategy',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Prevent double submissions
    if (isSubmitting) return;

    setIsSubmitting(true);
    
    try {
      const form = e.currentTarget;
      const payload = new FormData(form);
      
      const response = await fetch("https://formspree.io/f/manzojew", {
        method: "POST",
        body: payload,
        headers: {
          "Accept": "application/json"
        }
      });

      const data = await response.json().catch(() => ({}));

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({ name: '', email: '', service: 'Strategy', message: '' });
      } else {
        if (data.errors) {
            const errorMessages = data.errors.map((err: any) => err.message).join(", ");
            alert(`Submission failed: ${errorMessages}`);
        } else {
            alert("Oops! There was a problem submitting your form. Please check your details and try again.");
        }
      }
    } catch (error) {
      console.error("Form error:", error);
      alert("There was a network error. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="contact" className="py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Info Side */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white font-serif mb-6">Let's Build Something Great</h2>
            <p className="text-slate-400 text-lg mb-8">
              Ready to scale? Fill out the form or reach out directly. We accept a limited number of clients each quarter to ensure maximum attention to detail.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center flex-shrink-0 text-brand-400">
                  <Mail size={20} />
                </div>
                <div>
                  <h3 className="text-white font-medium">Email Us</h3>
                  <p className="text-slate-400">hello@wagihni.agency</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center flex-shrink-0 text-brand-400">
                  <Phone size={20} />
                </div>
                <div>
                  <h3 className="text-white font-medium">Call Us</h3>
                  <p className="text-slate-400">+1 (555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                 <div className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center flex-shrink-0 text-brand-400">
                  <MapPin size={20} />
                </div>
                <div>
                  <h3 className="text-white font-medium">Headquarters</h3>
                  <p className="text-slate-400">Dubai Internet City, UAE</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800">
            {isSubmitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center min-h-[400px]">
                <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle className="w-8 h-8 text-green-500" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Message Received!</h3>
                <p className="text-slate-400">We'll get back to you within 24 hours to schedule your consultation.</p>
                <button 
                  onClick={() => setIsSubmitted(false)}
                  className="mt-6 text-brand-400 hover:text-brand-300 font-medium"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-brand-500 focus:border-transparent focus:outline-none transition-all"
                    placeholder="John Doe"
                    disabled={isSubmitting}
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-brand-500 focus:border-transparent focus:outline-none transition-all"
                    placeholder="john@company.com"
                    disabled={isSubmitting}
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-slate-300 mb-2">Interested Service</label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-brand-500 focus:border-transparent focus:outline-none transition-all"
                    disabled={isSubmitting}
                  >
                    <option value="Strategy">Social Strategy</option>
                    <option value="Copywriting">Copywriting</option>
                    <option value="SEO">SEO Optimization</option>
                    <option value="Automation">Workflow Automation</option>
                    <option value="Full Package">Full Agency Package</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">Project Details</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-brand-500 focus:border-transparent focus:outline-none transition-all resize-none"
                    placeholder="Tell us about your goals..."
                    disabled={isSubmitting}
                  />
                </div>

                <Button type="submit" fullWidth disabled={isSubmitting}>
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Sending...
                    </span>
                  ) : (
                    "Send Message"
                  )}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;