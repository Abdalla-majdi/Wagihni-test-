import React from 'react';
import { Button } from './Button';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 opacity-30 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-brand-600 rounded-full mix-blend-multiply filter blur-[128px] animate-pulse"></div>
        <div className="absolute top-20 right-1/4 w-[400px] h-[400px] bg-purple-600 rounded-full mix-blend-multiply filter blur-[128px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/50 border border-slate-700 text-brand-300 text-sm font-medium mb-8 backdrop-blur-sm">
            <span className="flex h-2 w-2 rounded-full bg-brand-400"></span>
            Accepting new clients for Q4 2024
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6 font-serif">
            Transform Your Brand <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-purple-400">
              Into A Powerhouse
            </span>
          </h1>
          
          <p className="mt-4 max-w-2xl mx-auto text-xl text-slate-400 mb-10">
            Wagihni Agency combines elite copywriting, data-driven SEO, and workflow automation to scale your business effortlessly.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#contact">
              <Button variant="primary" className="group">
                Book a Consultation
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
            <a href="#services">
              <Button variant="secondary">
                Explore Services
                <ChevronRight className="ml-2 w-4 h-4 text-slate-400" />
              </Button>
            </a>
          </div>
        </motion.div>

        {/* Social Proof Strip */}
        <motion.div 
          className="mt-20 pt-10 border-t border-slate-800/50"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <p className="text-sm text-slate-500 uppercase tracking-wider mb-6">Trusted by innovative companies</p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
             {/* Simple text placeholders for logos to keep it clean */}
             {['TechFlow', 'Nebula Corp', 'Vertex', 'Oasis Systems', 'Bolt Shift'].map((logo) => (
               <span key={logo} className="text-xl font-bold text-slate-300">{logo}</span>
             ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;