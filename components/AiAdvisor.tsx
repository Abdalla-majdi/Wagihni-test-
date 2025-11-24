import React, { useState } from 'react';
import { Sparkles, Send, Loader2, ArrowUpRight } from 'lucide-react';
import { generateServiceRecommendation } from '../services/geminiService';
import { Button } from './Button';
import { LoadingState } from '../types';

const AiAdvisor: React.FC = () => {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState<string | null>(null);
  const [status, setStatus] = useState<LoadingState>(LoadingState.IDLE);

  const handleAnalyze = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    setStatus(LoadingState.LOADING);
    setResponse(null);

    try {
      const result = await generateServiceRecommendation(input);
      setResponse(result);
      setStatus(LoadingState.SUCCESS);
    } catch (error) {
      setResponse("Sorry, something went wrong. Please try again.");
      setStatus(LoadingState.ERROR);
    }
  };

  return (
    <section id="ai-advisor" className="py-24 bg-gradient-to-b from-slate-950 to-slate-900 border-y border-slate-800/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-950 border border-slate-800 rounded-2xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
          {/* Decorative glow */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-brand-500/10 rounded-full blur-3xl"></div>
          
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-brand-500/10 rounded-lg">
                <Sparkles className="w-6 h-6 text-brand-400" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-white">Wagihni AI Advisor</h2>
            </div>
            
            <p className="text-slate-400 mb-8">
              Not sure which service you need? Describe your current business challenge or goal, and our AI agent will recommend the best path forward.
            </p>

            <form onSubmit={handleAnalyze} className="space-y-4">
              <div className="relative">
                <textarea
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="e.g., I have a great product but nobody is visiting my website, and I'm spending too much time sending manual emails."
                  className="w-full h-32 bg-slate-900 border border-slate-700 rounded-xl p-4 text-slate-200 placeholder-slate-500 focus:ring-2 focus:ring-brand-500 focus:border-transparent focus:outline-none resize-none transition-all"
                />
                <div className="absolute bottom-4 right-4">
                    <Button 
                      type="submit" 
                      variant="primary" 
                      disabled={status === LoadingState.LOADING || !input.trim()}
                      className="!py-2 !px-4 text-sm"
                    >
                      {status === LoadingState.LOADING ? (
                        <Loader2 className="w-4 h-4 animate-spin mr-2" />
                      ) : (
                        <Send className="w-4 h-4 mr-2" />
                      )}
                      Analyze
                    </Button>
                </div>
              </div>
            </form>

            {response && (
              <div className="mt-8 p-6 bg-slate-900/50 border border-brand-500/30 rounded-xl animate-in fade-in slide-in-from-bottom-4 duration-500">
                <h4 className="text-brand-300 font-semibold mb-2 text-sm uppercase tracking-wide">Recommendation</h4>
                <p className="text-slate-200 leading-relaxed">
                  {response}
                </p>
                <div className="mt-4 pt-4 border-t border-slate-800 flex justify-end">
                  <a href="#contact" className="text-sm text-brand-400 hover:text-brand-300 font-medium flex items-center gap-1">
                    Discuss this strategy <ArrowUpRight className="w-3 h-3" />
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AiAdvisor;