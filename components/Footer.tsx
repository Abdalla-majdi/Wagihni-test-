import React from 'react';
import { Zap, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-900 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
               <div className="w-8 h-8 bg-brand-600 rounded-lg flex items-center justify-center text-white">
                  <Zap size={20} fill="currentColor" />
                </div>
              <span className="font-serif font-bold text-xl text-white">Wagihni</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Empowering brands with words, data, and automation. The modern agency for the modern web.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><a href="#services" className="hover:text-brand-400 transition-colors">Copywriting</a></li>
              <li><a href="#services" className="hover:text-brand-400 transition-colors">Social Strategy</a></li>
              <li><a href="#services" className="hover:text-brand-400 transition-colors">SEO Optimization</a></li>
              <li><a href="#services" className="hover:text-brand-400 transition-colors">Automation</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><a href="#" className="hover:text-brand-400 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-brand-400 transition-colors">Case Studies</a></li>
              <li><a href="#" className="hover:text-brand-400 transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-brand-400 transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-slate-900 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} Wagihni Agency. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Designed with intent.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;