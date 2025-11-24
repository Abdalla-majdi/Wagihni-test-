import React from 'react';
import { PenTool, Share2, Search, Bot, ArrowUpRight } from 'lucide-react';
import { ServiceItem } from '../types';
import { motion } from 'framer-motion';

const services: ServiceItem[] = [
  {
    id: 'copy',
    title: 'Copywriting',
    description: 'Persuasive words that sell. From landing pages to email sequences, we craft narratives that convert visitors into loyal customers.',
    icon: <PenTool className="w-6 h-6" />,
  },
  {
    id: 'social',
    title: 'Social Strategy',
    description: 'Stop posting into the void. We build community-driven strategies that amplify your voice across LinkedIn, Twitter, and Instagram.',
    icon: <Share2 className="w-6 h-6" />,
  },
  {
    id: 'seo',
    title: 'SEO Optimization',
    description: 'Dominate search results. Our technical and content SEO audits ensure your brand is found by the people actively looking for you.',
    icon: <Search className="w-6 h-6" />,
  },
  {
    id: 'auto',
    title: 'Workflow Automation',
    description: 'Scale without burnout. We build custom automations (Zapier, Make, n8n) to handle repetitive tasks so you can focus on strategy.',
    icon: <Bot className="w-6 h-6" />,
  },
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white font-serif mb-4">Our Expertise</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Comprehensive digital solutions designed to work together for maximum impact.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group p-6 bg-slate-900 border border-slate-800 rounded-xl hover:border-brand-500/50 transition-colors duration-300 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <ArrowUpRight className="text-brand-400 w-5 h-5" />
              </div>
              
              <div className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center text-brand-400 mb-6 group-hover:bg-brand-900/30 group-hover:text-brand-300 transition-colors">
                {service.icon}
              </div>
              
              <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;