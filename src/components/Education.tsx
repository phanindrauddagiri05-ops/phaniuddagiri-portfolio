import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Education: React.FC = () => {
  const { education } = portfolioData;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-white border border-[#E5EAF2] hover:border-blue-400/40 rounded-3xl p-5 sm:p-8 shadow-sm hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300 h-full flex flex-col justify-between"
    >
      <div>
        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <motion.div
            whileHover={{ scale: 1.1, rotate: 5 }}
            className="w-10 h-10 rounded-xl bg-[#4F7CFF]/10 text-[#4F7CFF] flex items-center justify-center shrink-0 shadow-sm"
          >
            <GraduationCap className="w-5 h-5" />
          </motion.div>
          <div>
            <span className="text-xs font-bold tracking-widest text-[#4F7CFF] uppercase block">
              EDUCATION
            </span>
            <h3 className="text-lg sm:text-xl font-bold text-[#101828]">
              Academic Background
            </h3>
          </div>
        </div>

        {/* Timeline List */}
        <div className="relative pl-5 sm:pl-6 space-y-6 sm:space-y-8 before:absolute before:left-[9px] sm:before:left-[11px] before:top-2 before:bottom-2 before:w-[2px] before:bg-gradient-to-b before:from-[#4F7CFF] before:to-[#8B5CF6]/40">
          {education.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              whileHover={{ x: 4 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="relative p-2 rounded-xl transition-colors hover:bg-slate-50/80"
            >
              {/* Timeline Marker */}
              <div className="absolute -left-[27px] sm:-left-[30px] top-3.5 w-[14px] h-[14px] rounded-full bg-[#4F7CFF] ring-4 ring-white shadow-sm" />

              <div className="space-y-1.5">
                <h4 className="text-sm sm:text-base font-bold text-[#101828] leading-snug">
                  {item.degree}
                </h4>
                <div className="text-xs sm:text-sm font-medium text-[#667085]">
                  {item.institution}
                </div>
                <div className="text-xs text-[#667085] flex flex-wrap items-center gap-2 sm:gap-3 pt-1">
                  <span className="bg-slate-100 text-slate-700 font-semibold px-2.5 py-0.5 rounded-md">
                    {item.period}
                  </span>
                  <span className="font-semibold text-[#4F7CFF]">
                    {item.grade}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};


