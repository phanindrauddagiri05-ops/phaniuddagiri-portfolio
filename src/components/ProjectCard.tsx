import React from 'react';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import type { Project } from '../data/portfolioData';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="bg-white border border-[#E5EAF2] hover:border-[#4F7CFF]/40 rounded-2xl overflow-hidden card-shadow hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 transform hover:-translate-y-1.5 flex flex-col group h-full relative">
      
      {/* Thumbnail Container */}
      <div className="relative aspect-[16/10] overflow-hidden bg-slate-900 border-b border-slate-100">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
          onError={(e) => {
            // Fallback gradient if image fails to load
            (e.target as HTMLElement).style.display = 'none';
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#080F1D]/80 via-transparent to-transparent opacity-90 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
          <span className="inline-flex items-center gap-1 text-xs font-semibold text-white/95 bg-white/15 backdrop-blur-md px-3 py-1 rounded-full border border-white/20">
            <Sparkles className="w-3 h-3 text-blue-400" />
            <span>View Details</span>
          </span>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-5 sm:p-6 flex flex-col flex-grow justify-between space-y-4">
        <div className="space-y-2">
          {/* Title */}
          <h3 className="text-base sm:text-lg md:text-xl font-bold text-[#101828] group-hover:text-[#4F7CFF] transition-colors leading-snug">
            {project.title}
          </h3>

          {/* Description */}
          <p className="text-xs sm:text-sm text-[#667085] leading-relaxed line-clamp-3">
            {project.description}
          </p>
        </div>

        {/* Tech Badges */}
        <div className="flex flex-wrap gap-1.5 sm:gap-2 pt-1">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full text-xs font-semibold bg-[#F7F9FC] text-[#4F7CFF] border border-[#E5EAF2] group-hover:border-[#4F7CFF]/30 transition-all"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Card Footer Links */}
        <div className="flex items-center justify-between pt-4 border-t border-slate-100">
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#4F7CFF] hover:text-[#3B66FF] transition-colors group/link py-1"
          >
            <span>Live Demo</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
          </a>

          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${project.title} GitHub repository`}
            className="text-slate-400 hover:text-[#101828] transition-colors p-2 rounded-lg hover:bg-slate-100"
          >
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};




