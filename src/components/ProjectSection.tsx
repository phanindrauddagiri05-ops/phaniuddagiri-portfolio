import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ChevronDown, ChevronLeft, ChevronRight, Grid, SlidersHorizontal, Layers } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { ProjectCard } from './ProjectCard';

export const ProjectSection: React.FC = () => {
  const { projects, personal } = portfolioData;
  const [viewMode, setViewMode] = useState<'slider' | 'grid'>('slider');
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -360 : 360;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="projects" className="py-16 sm:py-24 bg-gradient-to-b from-slate-50 via-slate-100/70 to-slate-50 border-y border-slate-200/80 relative overflow-hidden">
      
      {/* Decorative Subtle Radial Glow Background */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 space-y-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-2">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-2"
          >
            <div className="flex items-center gap-2">
              <span className="text-xs sm:text-sm font-bold tracking-widest text-blue-600 uppercase font-mono flex items-center gap-1.5">
                <Layers className="w-4 h-4 text-blue-500" />
                FEATURED WORK
              </span>
              <span className="text-[11px] font-bold text-slate-600 bg-slate-200/80 px-2.5 py-0.5 rounded-full border border-slate-300/60">
                {projects.length} Projects
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Some Things I've Built
            </h2>
            <p className="text-sm text-slate-600 max-w-xl">
              Real-world web applications, enterprise tools, and developer projects built with modern web technologies.
            </p>
          </motion.div>

          {/* View Mode Switcher & Controls */}
          <div className="flex flex-wrap items-center justify-between sm:justify-end gap-3 w-full md:w-auto">
            
            <div className="flex items-center gap-2">
              {/* View Mode Toggle Pill */}
              <div className="inline-flex items-center p-1 bg-slate-200/80 rounded-full border border-slate-300/60 text-xs font-semibold text-slate-700 shadow-inner">
                <button
                  onClick={() => setViewMode('slider')}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full transition-all duration-200 ${
                    viewMode === 'slider'
                      ? 'bg-white text-blue-600 shadow-sm font-bold'
                      : 'hover:text-slate-900'
                  }`}
                >
                  <SlidersHorizontal className="w-3.5 h-3.5" />
                  <span>Slider</span>
                </button>

                <button
                  onClick={() => setViewMode('grid')}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full transition-all duration-200 ${
                    viewMode === 'grid'
                      ? 'bg-white text-blue-600 shadow-sm font-bold'
                      : 'hover:text-slate-900'
                  }`}
                >
                  <Grid className="w-3.5 h-3.5" />
                  <span>Grid</span>
                </button>
              </div>

              {/* Slider Navigation Buttons (Visible in Slider Mode) */}
              {viewMode === 'slider' && (
                <div className="flex items-center gap-1 bg-white p-1 rounded-full border border-slate-200 shadow-sm">
                  <button
                    onClick={() => scroll('left')}
                    aria-label="Scroll left"
                    className="p-1.5 sm:p-2 rounded-full text-slate-600 hover:text-blue-600 hover:bg-slate-100 active:scale-95 transition-all"
                    title="Previous Project"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <div className="w-[1px] h-4 bg-slate-200" />
                  <button
                    onClick={() => scroll('right')}
                    aria-label="Scroll right"
                    className="p-1.5 sm:p-2 rounded-full text-slate-600 hover:text-blue-600 hover:bg-slate-100 active:scale-95 transition-all"
                    title="Next Project"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              )}
            </div>

            {/* GitHub Repositories Link */}
            <a
              href={personal.socials.githubRepositories || "https://github.com/phanindrauddagiri05-ops?tab=repositories"}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-blue-600 hover:text-blue-700 transition-colors group py-1"
            >
              <span>GitHub Repos</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>

        {/* Content Area */}
        <AnimatePresence mode="wait">
          {viewMode === 'slider' ? (
            /* Horizontal Slider Mode showing ALL projects on mobile & desktop */
            <motion.div
              key="slider-view"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="relative space-y-3"
            >
              <div
                ref={scrollRef}
                className="flex items-stretch gap-4 sm:gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-4 pt-1 no-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0"
              >
                {projects.map((project, index) => (
                  <div
                    key={project.id}
                    className="w-[84vw] max-w-[320px] sm:w-[350px] lg:w-[380px] shrink-0 snap-center sm:snap-start h-auto"
                  >
                    <ProjectCard project={project} index={index} />
                  </div>
                ))}
              </div>

              {/* Slider Footer Status */}
              <div className="flex items-center justify-between text-xs font-semibold text-slate-500 pt-1 px-1">
                <span className="flex items-center gap-1.5 text-[11px] sm:text-xs">
                  <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                  <span>Swipe to browse all {projects.length} projects</span>
                </span>
                
                <button
                  onClick={() => setViewMode('grid')}
                  className="text-blue-600 hover:underline font-bold text-[11px] sm:text-xs"
                >
                  View as Grid →
                </button>
              </div>
            </motion.div>
          ) : (
            /* Full Multi-Column Grid Mode showing ALL projects */
            <motion.div
              key="grid-view"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8"
            >
              {projects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="h-full"
                >
                  <ProjectCard project={project} index={index} />
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Bottom View Switcher CTA */}
        <div className="text-center pt-4">
          <button
            onClick={() => setViewMode(viewMode === 'slider' ? 'grid' : 'slider')}
            className="inline-flex items-center gap-2 px-7 py-3 rounded-full text-xs sm:text-sm font-bold bg-white hover:bg-slate-50 text-blue-600 border border-slate-300 hover:border-blue-400 shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer group hover:scale-105 active:scale-95"
          >
            <span>
              {viewMode === 'slider' 
                ? `View All Projects in Grid (${projects.length})` 
                : 'Switch Back to Slider View'}
            </span>
            <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${viewMode === 'grid' ? 'rotate-180' : ''}`} />
          </button>
        </div>

      </div>
    </section>
  );
};







