import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import type { Project } from '../data/portfolioData';

interface ProjectCardProps {
  project: Project;
  index?: number;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
      className="bg-white border border-slate-200/90 hover:border-blue-400/60 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:shadow-blue-500/15 transition-colors duration-300 flex flex-col group h-full relative"
    >
      {/* Thumbnail Container */}
      <a 
        href={project.demoUrl} 
        target="_blank" 
        rel="noopener noreferrer"
        className="relative aspect-[16/9] overflow-hidden bg-slate-900 border-b border-slate-100 block group/img"
      >
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transform group-hover/img:scale-104 transition-transform duration-400 ease-out"
          onError={(e) => {
            // Fallback preview styling if image fails to load
            (e.target as HTMLElement).style.display = 'none';
          }}
        />
        
        {/* Dark Overlay Gradient on Hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent opacity-70 group-hover/img:opacity-40 transition-opacity duration-300" />

        {/* Index Badge */}
        {typeof index === 'number' && (
          <div className="absolute top-3 left-3 z-10">
            <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-bold tracking-wider bg-slate-900/85 text-blue-400 border border-slate-700/80 backdrop-blur-md shadow-sm">
              0{index + 1}
            </span>
          </div>
        )}

        {/* Floating Quick Action Overlay on Desktop Hover */}
        <div className="absolute inset-0 z-10 hidden sm:flex items-center justify-center gap-2.5 opacity-0 group-hover/img:opacity-100 transition-all duration-300 bg-slate-950/40 backdrop-blur-[2px]">
          <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold text-white bg-blue-600 hover:bg-blue-500 shadow-md shadow-blue-500/30">
            <span>Live Preview</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </span>
        </div>
      </a>

      {/* Card Content */}
      <div className="p-4 sm:p-5 flex flex-col flex-grow justify-between space-y-3.5">
        <div className="space-y-2">
          {/* Title */}
          <h3 className="text-base sm:text-lg font-extrabold text-slate-900 group-hover:text-blue-600 transition-colors leading-snug tracking-tight">
            <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="hover:underline">
              {project.title}
            </a>
          </h3>

          {/* Description */}
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3 font-normal">
            {project.description}
          </p>
        </div>

        {/* Tech Badges */}
        <div className="flex flex-wrap gap-1.5 pt-1">
          {project.technologies.map((tech) => (
            <motion.span
              key={tech}
              whileHover={{ scale: 1.05 }}
              className="px-2.5 py-0.5 rounded-md text-[10px] sm:text-[11px] font-semibold bg-slate-100 text-slate-700 border border-slate-200/80 group-hover:bg-blue-50 group-hover:text-blue-700 group-hover:border-blue-200/80 transition-colors cursor-default"
            >
              {tech}
            </motion.span>
          ))}
        </div>

        {/* Card Footer Links */}
        <div className="flex items-center justify-between gap-2 pt-3 border-t border-slate-100 mt-auto">
          <motion.a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.96 }}
            className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 shadow-sm transition-all group/link"
          >
            <span>Live Demo</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-1" />
          </motion.a>

          {project.githubUrl && (
            <motion.a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} GitHub repository`}
              whileHover={{ scale: 1.12 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 hover:text-slate-900 border border-slate-200 transition-all shadow-2xs"
            >
              <svg className="w-3.5 h-3.5 fill-current text-slate-700" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
              <span>Code</span>
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  );
};








