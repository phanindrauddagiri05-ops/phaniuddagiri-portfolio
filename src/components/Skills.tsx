import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { SkillCard } from './SkillCard';

export const Skills: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const { skills } = portfolioData;

  const categories = ['All', 'Languages', 'Frontend', 'Backend', 'Database', 'Tools'];

  const filteredSkills = activeFilter === 'All'
    ? skills
    : skills.filter((skill) => skill.category === activeFilter);

  return (
    <section id="skills" className="py-16 sm:py-24 bg-[#F7F9FC] border-y border-[#E5EAF2]">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-10 gap-6">
          <div>
            <span className="text-xs sm:text-sm font-bold tracking-widest text-[#4F7CFF] uppercase block mb-2">
              MY SKILLS
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#101828] tracking-tight">
              Technologies I Work With
            </h2>
          </div>

          {/* Category Filter Pills (Scrollable on mobile) */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 -mb-2 sm:pb-0 sm:mb-0 sm:flex-wrap no-scrollbar">
            {categories.map((category) => {
              const isActive = activeFilter === category;
              return (
                <button
                  key={category}
                  onClick={() => setActiveFilter(category)}
                  className={`px-4 py-2 sm:py-1.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer shrink-0 ${
                    isActive
                      ? 'bg-gradient-to-r from-[#4F7CFF] to-[#8B5CF6] text-white shadow-md shadow-blue-500/20 scale-105'
                      : 'bg-white text-[#667085] hover:text-[#101828] border border-[#E5EAF2] hover:border-slate-300'
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>

        {/* Skills Grid */}
        <motion.div
          layout
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-5"
        >
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill) => (
              <motion.div
                key={skill.name}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.25 }}
              >
                <SkillCard name={skill.name} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
};

