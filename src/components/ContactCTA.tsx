import React from 'react';
import { motion } from 'framer-motion';
import { Mail, ArrowRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const ContactCTA: React.FC = () => {
  const { socials } = portfolioData.personal;

  return (
    <section id="contact" className="relative bg-[#080F1D] py-16 sm:py-24 text-white overflow-hidden border-t border-slate-800">
      {/* Background Abstract Glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[300px] sm:w-[500px] h-[200px] sm:h-[300px] bg-blue-600/10 rounded-full blur-[100px] sm:blur-[140px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[250px] sm:w-[400px] h-[200px] sm:h-[300px] bg-purple-600/15 rounded-full blur-[90px] sm:blur-[120px] pointer-events-none" />

      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 sm:gap-8 bg-[#0B1220]/70 border border-slate-800/80 rounded-3xl p-6 sm:p-12 backdrop-blur-md"
        >
          {/* Left Text */}
          <div className="max-w-2xl space-y-3 sm:space-y-4">
            <span className="text-xs sm:text-sm font-bold tracking-widest text-[#5B7CFF] uppercase block">
              LET'S CONNECT
            </span>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
              Let's Create Something{' '}
              <span className="bg-gradient-to-r from-[#60A5FA] via-[#818CF8] to-[#C084FC] bg-clip-text text-transparent">
                Amazing
              </span>
            </h2>
            <p className="text-sm sm:text-lg text-slate-400 leading-relaxed">
              I'm always open to discussing new opportunities, collaborations, or just tech and software ideas.
            </p>
          </div>

          {/* Right CTA Button */}
          <div className="shrink-0 w-full sm:w-auto">
            <a
              href={socials.email}
              className="inline-flex items-center justify-center gap-3 w-full sm:w-auto px-8 py-4 rounded-2xl text-base font-bold text-white bg-gradient-to-r from-[#4F7CFF] to-[#8B5CF6] hover:from-[#3B66FF] hover:to-[#7C3AED] shadow-xl shadow-blue-500/20 hover:shadow-purple-500/30 transition-all transform hover:-translate-y-1 group"
            >
              <Mail className="w-5 h-5" />
              <span>Get In Touch</span>
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

