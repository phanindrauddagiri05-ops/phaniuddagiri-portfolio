import React from 'react';
import { motion } from 'framer-motion';
import { User, GraduationCap, MapPin, Heart } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const About: React.FC = () => {
  const { name, education, location, interests } = portfolioData.personal;
  const { stats } = portfolioData;

  const infoList = [
    { label: 'Name', value: name, icon: User },
    { label: 'Education', value: education, icon: GraduationCap },
    { label: 'Location', value: location, icon: MapPin },
    { label: 'Interests', value: interests, icon: Heart },
  ];

  return (
    <section id="about" className="py-16 sm:py-24 bg-white text-[#101828] relative">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          
          {/* Left Column: Text & Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6 sm:space-y-8"
          >
            {/* Section Header */}
            <div>
              <span className="text-xs sm:text-sm font-bold tracking-widest text-[#4F7CFF] uppercase block mb-2">
                ABOUT ME
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#101828] tracking-tight leading-tight">
                Turning Curiosity <br className="hidden sm:inline" />
                Into Real Solutions
              </h2>
            </div>

            {/* Paragraph Bio */}
            <p className="text-base sm:text-lg text-[#667085] leading-relaxed">
              I'm a Computer Science Engineering student who enjoys solving real-world problems through code. I'm particularly interested in full-stack web development, algorithms, and emerging AI technologies. I believe in continuous learning and building practical systems that deliver value.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 pt-6 border-t border-slate-100">
              {stats.map((stat, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ y: -4, scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                  className="bg-[#F7F9FC] sm:bg-slate-50/80 p-4 sm:p-3 rounded-2xl space-y-1 text-center sm:text-left border border-slate-200/80 shadow-2xs hover:shadow-md hover:border-blue-300 transition-all cursor-default"
                >
                  <div className="text-2xl sm:text-3xl font-extrabold text-[#101828] tracking-tight bg-gradient-to-r from-[#4F7CFF] to-[#8B5CF6] bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-xs font-semibold text-[#667085]">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Info Card & Handwritten Quote */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-5 relative w-full"
          >
            {/* Card Background */}
            <div className="bg-[#F7F9FC] border border-[#E5EAF2] hover:border-blue-400/40 rounded-3xl p-5 sm:p-8 shadow-sm hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300 relative overflow-hidden">
              <div className="space-y-5 sm:space-y-6">
                {infoList.map((item, index) => {
                  const IconComp = item.icon;
                  return (
                    <motion.div
                      key={index}
                      whileHover={{ x: 4 }}
                      transition={{ duration: 0.2 }}
                      className="flex items-start gap-3.5 sm:gap-4 p-2 rounded-xl transition-colors hover:bg-white/90"
                    >
                      <div className="w-10 h-10 rounded-xl bg-[#4F7CFF]/10 text-[#4F7CFF] flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                        <IconComp className="w-5 h-5" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="text-xs font-semibold text-[#667085] uppercase tracking-wider">
                          {item.label}
                        </div>
                        <div className="text-sm sm:text-base font-semibold text-[#101828] mt-0.5 break-words">
                          {item.value}
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* Handwritten Quote overlay */}
              <div className="mt-6 pt-5 border-t border-slate-200/70 flex justify-end">
                <motion.div
                  whileHover={{ rotate: 0, scale: 1.03 }}
                  transition={{ duration: 0.2 }}
                  className="text-right cursor-default"
                >
                  <div className="font-handwriting text-xl sm:text-3xl font-bold text-[#8B5CF6] leading-tight rotate-[-2deg]">

                    "Better Software<br />A Brighter Tomorrow"
                  </div>
                  <svg className="w-24 sm:w-28 h-3 text-[#8B5CF6]/50 ml-auto mt-1" viewBox="0 0 100 10" fill="none">
                    <path d="M0 5 Q 25 0, 50 5 T 100 5" stroke="currentColor" strokeWidth="2" fill="none" />
                  </svg>
                </motion.div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

