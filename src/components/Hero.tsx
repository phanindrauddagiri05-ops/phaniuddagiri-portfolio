import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { SocialLinks } from './SocialLinks';

export const Hero: React.FC = () => {
  const { eyebrow, name, role, bio, avatar } = portfolioData.personal;

  return (
    <section id="home" className="relative bg-[#0B1220] pt-24 pb-16 sm:pt-32 sm:pb-20 lg:pt-36 lg:pb-24 overflow-hidden">
      {/* Background Floating Glow Blobs */}
      <motion.div
        animate={{ x: [0, 20, 0], y: [0, -20, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[320px] sm:w-[600px] h-[320px] sm:h-[600px] bg-blue-600/10 rounded-full blur-[90px] sm:blur-[120px] pointer-events-none"
      />
      <motion.div
        animate={{ x: [0, -20, 0], y: [0, 20, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/3 right-4 sm:right-10 w-[240px] sm:w-[400px] h-[240px] sm:h-[400px] bg-purple-600/15 rounded-full blur-[80px] sm:blur-[100px] pointer-events-none"
      />

      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ========================================================= */}
        {/* MOBILE VIEW (< 768px screens): Eyebrow -> Image -> Text & Details */}
        {/* ========================================================= */}
        <div className="flex flex-col items-start md:hidden space-y-5 text-left">

          {/* 1. Eyebrow Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-semibold tracking-wider text-[#60A5FA] uppercase"
          >
            <span>{eyebrow}</span>
          </motion.div>

          {/* 2. Profile Image & Visuals */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="relative w-full max-w-[320px] sm:max-w-[360px] aspect-square flex items-center justify-center my-2 self-center mx-auto"
          >
            {/* Circular Gradient Backdrop with Glow Pulse */}
            <motion.div
              animate={{ opacity: [0.7, 1, 0.7], scale: [0.98, 1.02, 0.98] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute w-[210px] h-[210px] sm:w-[250px] sm:h-[250px] rounded-full bg-gradient-to-br from-[#3B82F6] via-[#6366F1] to-[#8B5CF6] blur-[2px] shadow-2xl shadow-purple-500/30"
            />

            {/* Profile Image Frame with Floating Motion */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
              className="relative z-10 p-1.5 rounded-full bg-gradient-to-br from-[#4F7CFF] via-[#6366F1] to-[#8B5CF6] shadow-2xl shadow-blue-500/20"
            >
              <img
                src={avatar}
                alt={name}
                className="w-[200px] h-[200px] sm:w-[240px] sm:h-[240px] object-cover rounded-full bg-slate-900 border-2 border-white/20"
              />
            </motion.div>

            {/* Handwritten Note Top-Right */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute top-1 right-6 sm:top-8 sm:right-6 z-20 pointer-events-none select-none"
            >
              <div className="font-handwriting text-slate-200 text-sm sm:text-lg leading-tight font-bold rotate-6 drop-shadow">
                Build<br />
                Learn<br />
                Improve<br />
                Repeat
              </div>
              <svg className="w-5 h-5 sm:w-7 sm:h-7 text-blue-400 stroke-current ml-2 -mt-1 transform rotate-45" viewBox="0 0 24 24" fill="none" strokeWidth="2">
                <path d="M4 14c4 4 10 4 14-2m0 0l-4-1m4 1l-1 4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </motion.div>

            {/* Compact Floating Code Card */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: [0, -5, 0] }}
              transition={{
                opacity: { duration: 0.5, delay: 0.8 },
                y: { duration: 4.5, repeat: Infinity, ease: 'easeInOut' }
              }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="absolute -bottom-3 right-0 sm:right-2 z-30 code-card-glass rounded-xl p-2.5 sm:p-3 shadow-2xl max-w-[165px] sm:max-w-[190px] text-left cursor-pointer transition-shadow hover:shadow-blue-500/20"
            >
              {/* Card Window Controls */}
              <div className="flex items-center gap-1.5 mb-1.5">
                <div className="w-2 h-2 rounded-full bg-rose-500/80" />
                <div className="w-2 h-2 rounded-full bg-amber-500/80" />
                <div className="w-2 h-2 rounded-full bg-emerald-500/80" />
              </div>

              {/* Monospace Code snippet */}
              <div className="font-mono text-[8px] sm:text-[9px] leading-snug">
                <div>
                  <span className="text-purple-400">while</span>{' '}
                  <span className="text-slate-300">(</span>
                  <span className="text-pink-400">dream</span>
                  <span className="text-slate-300">)</span>{' '}
                  <span className="text-slate-300">{'{'}</span>
                </div>
                <div className="pl-2.5 text-emerald-400">learn();</div>
                <div className="pl-2.5 text-blue-400">code();</div>
                <div className="pl-2.5 text-amber-300">build();</div>
                <div className="pl-2.5 text-indigo-400">repeat();</div>
                <div className="text-slate-300">{'}'}</div>
                <div className="mt-1 text-slate-500 text-[9px] font-sans italic">
                  // A better tomorrow
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* 3. Heading ("I'm Phanindra Uddagiri") */}
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight pt-1"
          >
            I'm{' '}
            <span className="bg-gradient-to-r from-[#60A5FA] via-[#818CF8] to-[#C084FC] bg-clip-text text-transparent">
              {name}
            </span>
          </motion.h1>

          {/* 4. Role Subtitle */}
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-xs sm:text-sm font-medium text-slate-200 leading-relaxed max-w-sm"
          >
            {role}
          </motion.h2>

          {/* 5. Bio Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-xs sm:text-sm text-slate-400 max-w-md leading-relaxed"
          >
            {bio}
          </motion.p>

          {/* 6. Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-row items-center justify-center gap-3 w-full max-w-sm pt-2"
          >
            <motion.a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
              }}
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.97, y: 0 }}
              className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-full text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-[#4F7CFF] to-[#8B5CF6] hover:from-[#3B66FF] hover:to-[#7C3AED] shadow-lg shadow-blue-500/25 text-center group"
            >
              <span>View Projects</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
            </motion.a>

            <motion.a
              href={portfolioData.personal.socials.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.97, y: 0 }}
              className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-full text-xs sm:text-sm font-semibold text-slate-200 bg-slate-800/50 border border-slate-700/80 hover:border-slate-500 hover:bg-slate-800 text-center"
            >
              <Download className="w-3.5 h-3.5 text-slate-300" />
              <span>Resume</span>
            </motion.a>
          </motion.div>

          {/* 7. Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="pt-2 flex justify-center"
          >
            <SocialLinks className="flex items-center gap-5 text-slate-400" iconClassName="w-5 h-5 hover:text-white transition-colors" />
          </motion.div>

        </div>


        {/* ========================================================= */}
        {/* TABLET & DESKTOP VIEW (>= 768px screens): 2-Column Side-by-Side Layout */}
        {/* ========================================================= */}
        <div className="hidden md:grid md:grid-cols-12 gap-6 lg:gap-12 items-center min-h-[550px] md:min-h-[620px] lg:min-h-[680px]">

          {/* Left Column Content (58% approx) */}
          <div className="md:col-span-7 space-y-4 lg:space-y-6 text-left">
            {/* 1. Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs lg:text-sm font-semibold tracking-wider text-[#60A5FA] uppercase"
            >
              <span>{eyebrow}</span>
            </motion.div>

            {/* 2. Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-3xl md:text-4xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight lg:leading-[1.15]"
            >
              I'm{' '}
              <span className="bg-gradient-to-r from-[#60A5FA] via-[#818CF8] to-[#C084FC] bg-clip-text text-transparent">
                {name}
              </span>
            </motion.h1>

            {/* 3. Role Subtitle */}
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-sm md:text-base lg:text-lg font-medium text-slate-200 leading-relaxed md:leading-snug"
            >
              {role}
            </motion.h2>

            {/* 4. Bio Paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-xs md:text-sm lg:text-lg text-slate-400 max-w-md lg:max-w-xl leading-relaxed"
            >
              {bio}
            </motion.p>

            {/* 5. Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex items-center gap-3 lg:gap-4 pt-1 lg:pt-2"
            >
              <motion.a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
                }}
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.97, y: 0 }}
                className="inline-flex items-center gap-1.5 lg:gap-2 px-4 py-2.5 lg:px-6 lg:py-3.5 rounded-full text-xs lg:text-sm font-semibold text-white bg-gradient-to-r from-[#4F7CFF] to-[#8B5CF6] hover:from-[#3B66FF] hover:to-[#7C3AED] shadow-lg shadow-blue-500/25 hover:shadow-purple-500/35 transition-all group"
              >
                <span>View My Projects</span>
                <ArrowRight className="w-3.5 h-3.5 lg:w-4 lg:h-4 transition-transform group-hover:translate-x-1" />
              </motion.a>

              <motion.a
                href={portfolioData.personal.socials.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.97, y: 0 }}
                className="inline-flex items-center gap-1.5 lg:gap-2 px-4 py-2.5 lg:px-6 lg:py-3.5 rounded-full text-xs lg:text-sm font-semibold text-slate-200 bg-slate-800/50 border border-slate-700/80 hover:border-slate-500 hover:bg-slate-800 transition-all"
              >
                <Download className="w-3.5 h-3.5 lg:w-4 lg:h-4 text-slate-300" />
                <span>Resume</span>
              </motion.a>
            </motion.div>

            {/* 6. Social Links Row */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="pt-2 lg:pt-3 flex items-center gap-3"
            >
              <SocialLinks className="flex items-center gap-4 lg:gap-5 text-slate-400" iconClassName="w-4 h-4 lg:w-5 lg:h-5 hover:text-white transition-colors" />
            </motion.div>
          </div>

          {/* 7. Right Column: Hero Visual & Portrait (42% approx) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-5 relative flex justify-center md:justify-end"
          >
            <div className="relative w-full max-w-[310px] md:max-w-[340px] lg:max-w-[420px] aspect-square flex items-center justify-center">

              {/* Circular Gradient Backdrop with Glow Pulse */}
              <motion.div
                animate={{ opacity: [0.7, 1, 0.7], scale: [0.98, 1.02, 0.98] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute w-[230px] h-[230px] md:w-[250px] md:h-[250px] lg:w-[320px] lg:h-[320px] rounded-full bg-gradient-to-br from-[#3B82F6] via-[#6366F1] to-[#8B5CF6] blur-[2px] shadow-2xl shadow-purple-500/30 -translate-y-2 lg:-translate-y-4"
              />

              {/* Developer Portrait Image with Floating Motion */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
                className="relative z-10 p-1.5 lg:p-2 rounded-full bg-gradient-to-br from-[#4F7CFF] via-[#6366F1] to-[#8B5CF6] shadow-2xl shadow-blue-500/20"
              >
                <img
                  src={avatar}
                  alt={name}
                  className="w-[210px] h-[210px] md:w-[230px] md:h-[230px] lg:w-[290px] lg:h-[290px] object-cover rounded-full bg-slate-900 border-2 border-white/20"
                />
              </motion.div>

              {/* Handwritten Note Top-Right */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute top-2 right-2 lg:top-4 lg:right-4 z-20 pointer-events-none select-none"
              >
                <div className="font-handwriting text-slate-200 text-sm md:text-base lg:text-xl leading-tight font-bold rotate-6 drop-shadow">
                  Build<br />
                  Learn<br />
                  Improve<br />
                  Repeat
                </div>
                <svg className="w-5 h-5 md:w-6 md:h-6 lg:w-8 lg:h-8 text-blue-400 stroke-current ml-1.5 -mt-1 transform rotate-45" viewBox="0 0 24 24" fill="none" strokeWidth="2">
                  <path d="M4 14c4 4 10 4 14-2m0 0l-4-1m4 1l-1 4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </motion.div>

              {/* Floating Code Card Bottom-Right */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: [0, -6, 0] }}
                transition={{
                  opacity: { duration: 0.6, delay: 0.8 },
                  y: { duration: 5, repeat: Infinity, ease: 'easeInOut' }
                }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="absolute -bottom-2 -right-2 md:-right-4 lg:-bottom-2 lg:-right-6 z-30 code-card-glass rounded-xl p-2.5 md:p-3 lg:p-4 shadow-2xl max-w-[175px] md:max-w-[195px] lg:max-w-[230px] cursor-pointer transition-shadow hover:shadow-blue-500/20"
              >
                {/* Card Window Controls */}
                <div className="flex items-center gap-1.5 mb-1.5 lg:mb-2.5">
                  <div className="w-2 h-2 lg:w-2.5 lg:h-2.5 rounded-full bg-rose-500/80" />
                  <div className="w-2 h-2 lg:w-2.5 lg:h-2.5 rounded-full bg-amber-500/80" />
                  <div className="w-2 h-2 lg:w-2.5 lg:h-2.5 rounded-full bg-emerald-500/80" />
                </div>

                {/* Monospace Code snippet */}
                <div className="font-mono text-[9px] md:text-[10px] lg:text-[13px] leading-relaxed">
                  <div>
                    <span className="text-purple-400">while</span>{' '}
                    <span className="text-slate-300">(</span>
                    <span className="text-pink-400">dream</span>
                    <span className="text-slate-300">)</span>{' '}
                    <span className="text-slate-300">{'{'}</span>
                  </div>
                  <div className="pl-3 lg:pl-4 text-emerald-400">learn();</div>
                  <div className="pl-3 lg:pl-4 text-blue-400">code();</div>
                  <div className="pl-3 lg:pl-4 text-amber-300">build();</div>
                  <div className="pl-3 lg:pl-4 text-indigo-400">repeat();</div>
                  <div className="text-slate-300">{'}'}</div>
                  <div className="mt-1 lg:mt-2 text-slate-500 text-[8px] md:text-[9px] lg:text-[11px] font-sans italic">
                    // A better tomorrow
                  </div>
                </div>
              </motion.div>

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};



