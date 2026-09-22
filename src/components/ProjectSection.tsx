import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ChevronDown, ChevronLeft, ChevronRight, Layers } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { ProjectCard } from './ProjectCard';

export const ProjectSection: React.FC = () => {
  const { projects, personal } = portfolioData;
  const [showAllMobile, setShowAllMobile] = useState<boolean>(false);
  const [showAllDesktop, setShowAllDesktop] = useState<boolean>(false);
  const scrollMobileRef = useRef<HTMLDivElement>(null);
  const scrollDesktopRef = useRef<HTMLDivElement>(null);

  const scrollMobile = (direction: 'left' | 'right') => {
    if (scrollMobileRef.current) {
      const scrollAmount = direction === 'left' ? -320 : 320;
      scrollMobileRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const scrollDesktop = (direction: 'left' | 'right') => {
    if (scrollDesktopRef.current) {
      const scrollAmount = direction === 'left' ? -390 : 390;
      scrollDesktopRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const mobileInitialLimit = 3;

  const displayedProjectsMobile = showAllMobile ? projects : projects.slice(0, mobileInitialLimit);
  const hasMoreMobile = projects.length > mobileInitialLimit;

  return (
    <section id="projects" className="py-16 sm:py-24 bg-white border-b border-[#E5EAF2]">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 space-y-6 sm:space-y-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs sm:text-sm font-bold tracking-widest text-[#4F7CFF] uppercase font-mono flex items-center gap-1.5">
                <Layers className="w-4 h-4" />
                FEATURED PROJECTS
              </span>
              <span className="text-[11px] font-semibold text-purple-600 bg-purple-50 px-2.5 py-0.5 rounded-full border border-purple-200/60">
                {showAllDesktop || showAllMobile ? 'Full Grid View' : 'Horizontal Scroll ↔'}
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#101828] tracking-tight">
              Some Things I've Built
            </h2>
          </motion.div>

          <div className="flex items-center gap-3 self-between sm:self-auto">
            {/* Mobile Scroll Control Buttons */}
            {!showAllMobile && (
              <div className="flex md:hidden items-center gap-1.5 bg-slate-100 p-1 rounded-full border border-slate-200">
                <button
                  onClick={() => scrollMobile('left')}
                  aria-label="Scroll left"
                  className="p-1.5 rounded-full bg-white text-slate-700 hover:text-[#4F7CFF] shadow-sm active:scale-95 transition-all"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={() => scrollMobile('right')}
                  aria-label="Scroll right"
                  className="p-1.5 rounded-full bg-white text-slate-700 hover:text-[#4F7CFF] shadow-sm active:scale-95 transition-all"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            )}

            {/* Desktop Scroll Control Buttons (Active in slider mode) */}
            {!showAllDesktop && (
              <div className="hidden md:flex items-center gap-2 bg-slate-100 p-1 rounded-full border border-slate-200">
                <button
                  onClick={() => scrollDesktop('left')}
                  aria-label="Scroll desktop left"
                  className="p-2 rounded-full bg-white text-slate-700 hover:text-[#4F7CFF] hover:bg-slate-50 shadow-sm active:scale-95 transition-all"
                  title="Scroll Left"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={() => scrollDesktop('right')}
                  aria-label="Scroll desktop right"
                  className="p-2 rounded-full bg-white text-slate-700 hover:text-[#4F7CFF] hover:bg-slate-50 shadow-sm active:scale-95 transition-all"
                  title="Scroll Right"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            )}

            <a
              href={personal.socials.githubRepositories || "https://github.com/phanindrauddagiri05-ops?tab=repositories"}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#4F7CFF] hover:text-[#3B66FF] transition-colors group py-1"
            >
              <span>GitHub Repo</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>

        {/* Mobile View: Toggle between Single Row Slider and Vertical Expanded Grid */}
        <div className="md:hidden space-y-4">
          <AnimatePresence mode="wait">
            {!showAllMobile ? (
              /* Mobile Slider Mode (Collapsed) */
              <motion.div
                key="mobile-slider"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="relative"
              >
                <div
                  ref={scrollMobileRef}
                  className="flex items-stretch gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-4 pt-1 no-scrollbar -mx-4 px-4"
                >
                  {displayedProjectsMobile.map((project, idx) => (
                    <motion.div
                      key={project.id}
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: idx * 0.08 }}
                      className="w-[85vw] max-w-[320px] shrink-0 snap-center h-auto"
                    >
                      <ProjectCard project={project} />
                    </motion.div>
                  ))}
                </div>
                
                <div className="flex items-center justify-between text-[11px] font-semibold text-slate-400 pt-1 px-1">
                  <span>Swipe horizontally to explore cards</span>
                  <div className="flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#4F7CFF] animate-pulse" />
                    <span>{projects.length} Total Projects</span>
                  </div>
                </div>
              </motion.div>
            ) : (
              /* Mobile Grid Mode (Expanded) */
              <motion.div
                key="mobile-grid"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.35 }}
                className="grid grid-cols-1 gap-5"
              >
                {projects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.35, delay: index * 0.06 }}
                  >
                    <ProjectCard project={project} />
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Mobile View More / View Less Button */}
          {hasMoreMobile && (
            <div className="text-center pt-2">
              <button
                onClick={() => setShowAllMobile(!showAllMobile)}
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-bold bg-[#F7F9FC] hover:bg-slate-100 text-[#4F7CFF] border border-[#E5EAF2] hover:border-[#4F7CFF]/50 shadow-sm transition-all duration-200 cursor-pointer group active:scale-95"
              >
                <span>{showAllMobile ? 'View Less' : `View More (${projects.length - mobileInitialLimit} More)`}</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${showAllMobile ? 'rotate-180' : ''}`} />
              </button>
            </div>
          )}
        </div>

        {/* Desktop View: Toggle between Single Row Scrollable Slider and 3-Column Grid */}
        <div className="hidden md:block space-y-8">
          <AnimatePresence mode="wait">
            {!showAllDesktop ? (
              /* Desktop Horizontal Slider Mode */
              <motion.div
                key="desktop-slider"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.35 }}
                className="relative"
              >
                <div
                  ref={scrollDesktopRef}
                  className="flex items-stretch gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-4 pt-1 no-scrollbar -mx-4 px-4"
                >
                  {projects.map((project, index) => (
                    <motion.div
                      key={project.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.06 }}
                      className="w-[360px] lg:w-[384px] shrink-0 snap-start h-auto"
                    >
                      <ProjectCard project={project} />
                    </motion.div>
                  ))}
                </div>

                <div className="flex items-center justify-between text-xs font-semibold text-slate-400 pt-2 px-1">
                  <span>Scroll or use left/right arrows to browse all {projects.length} projects</span>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#4F7CFF] animate-ping" />
                    <span>{projects.length} Featured Projects</span>
                  </div>
                </div>
              </motion.div>
            ) : (
              /* Desktop Full Grid Mode */
              <motion.div
                key="desktop-grid"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="grid grid-cols-3 gap-8"
              >
                {projects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 25 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.35, delay: index * 0.06 }}
                    className="h-full"
                  >
                    <ProjectCard project={project} />
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Desktop View More / View Less Button */}
          <div className="text-center pt-2">
            <button
              onClick={() => setShowAllDesktop(!showAllDesktop)}
              className="inline-flex items-center gap-2 px-7 py-3 rounded-full text-sm font-bold bg-[#F7F9FC] hover:bg-slate-100 text-[#4F7CFF] border border-[#E5EAF2] hover:border-[#4F7CFF]/50 shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer group hover:scale-105 active:scale-95"
            >
              <span>{showAllDesktop ? 'View Less (Return to Horizontal Slider)' : 'View All Projects in Full Grid'}</span>
              <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${showAllDesktop ? 'rotate-180' : ''}`} />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};






