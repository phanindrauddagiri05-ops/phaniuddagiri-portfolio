import React from 'react';

interface TechIconProps {
  name: string;
  className?: string;
}

export const TechIcon: React.FC<TechIconProps> = ({ name, className = "w-10 h-10" }) => {
  const normName = name.toLowerCase().trim();

  switch (normName) {
    case 'python':
      return (
        <svg className={className} viewBox="0 0 128 128">
          <path fill="#3776AB" d="M63.5 12.5c-27 0-25.5 11.7-25.5 11.7l.1 12.2h26.1v3.7H27.9s-12.7-.1-12.7 26.8c0 26.9 11.1 25.8 11.1 25.8h6.6v-9.3s-.4-11.1 11.1-11.1h26.4s10.5.2 10.5-10.3V23.2s1.7-10.7-25.4-10.7zm-14 8.2c2.2 0 4 1.8 4 4s-1.8 4-4 4-4-1.8-4-4 1.8-4 4-4z"/>
          <path fill="#FFD43B" d="M64.5 115.5c27 0 25.5-11.7 25.5-11.7l-.1-12.2H63.8v-3.7h36.3s12.7.1 12.7-26.8c0-26.9-11.1-25.8-11.1-25.8h-6.6v9.3s.4 11.1-11.1 11.1H57.6s-10.5-.2-10.5 10.3v29.5s-1.7 10.7 25.4 10.7zm14-8.2c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4z"/>
        </svg>
      );
    case 'c':
      return (
        <svg className={className} viewBox="0 0 128 128">
          <path fill="#A8B9CC" d="M117.5 64c0 29.5-24 53.5-53.5 53.5S10.5 93.5 10.5 64 34.5 10.5 64 10.5 117.5 34.5 117.5 64z"/>
          <path fill="#FFFFFF" d="M43.7 45.3c-2.4 3.7-3.7 8.3-3.7 13.5 0 13.5 8.9 23.5 22.3 23.5 7.1 0 12.8-2.6 16.7-7.7l-7.2-5.4c-2.6 3.2-5.7 4.7-9.5 4.7-6.8 0-11.7-5.5-11.7-15.1 0-9.6 4.9-15 11.7-15 3.8 0 6.9 1.5 9.5 4.7l7.2-5.4c-3.9-5.1-9.6-7.7-16.7-7.7-13.4 0-22.3 10-22.3 23.5z"/>
        </svg>
      );
    case 'c++':
    case 'cpp':
      return (
        <svg className={className} viewBox="0 0 128 128">
          <path fill="#00599C" d="M117.5 64c0 29.5-24 53.5-53.5 53.5S10.5 93.5 10.5 64 34.5 10.5 64 10.5 117.5 34.5 117.5 64z"/>
          <path fill="#FFFFFF" d="M43.7 45.3c-2.4 3.7-3.7 8.3-3.7 13.5 0 13.5 8.9 23.5 22.3 23.5 7.1 0 12.8-2.6 16.7-7.7l-7.2-5.4c-2.6 3.2-5.7 4.7-9.5 4.7-6.8 0-11.7-5.5-11.7-15.1 0-9.6 4.9-15 11.7-15 3.8 0 6.9 1.5 9.5 4.7l7.2-5.4c-3.9-5.1-9.6-7.7-16.7-7.7-13.4 0-22.3 10-22.3 23.5zm44.2 12.7v5.5h-5.5v5.5h5.5v5.5h5.5v-5.5h5.5v-5.5h-5.5v-5.5h-5.5zm19.3 0v5.5h-5.5v5.5h5.5v5.5h5.5v-5.5h5.5v-5.5h-5.5v-5.5h-5.5z"/>
        </svg>
      );
    case 'java':
      return (
        <svg className={className} viewBox="0 0 128 128">
          <path fill="#5382A1" d="M43.2 88.5s-4.6 2.7 3.3 3.6c9.6 1.1 28.7 1.4 39.5-3.6 0 0 3 1.9-2.2 3.3-15.7 4.1-39.7 3.6-47-1.4 0 0-1.7-1.1 6.4-1.9z"/>
          <path fill="#E76F00" d="M51.1 76.5s-5.6 4.1 2.5 4.9c10 1 23.6.9 33.9-2.7 0 0 2.2 1.4-2.8 2.5-12.7 2.7-31.4 2.8-38.9-.9 0 0-2.3-1.6 5.3-3.8zM47.7 64s-11.5 8.1 4.7 9.4c17.5 1.4 43.8-.4 48.7-11.6 0 0 1.7 4.2-12.6 7.4-20 4.5-44.5 3.4-40.8-5.2z"/>
          <path fill="#5382A1" d="M67.7 22.8s8.9 9.1-8.3 24.3c-13.6 12-3.1 19 0 26.6-8-7.2-13.8-13.7-9.5-19.4 6.3-8.3 19.3-14.8 17.8-31.5z"/>
        </svg>
      );
    case 'javascript':
    case 'js':
      return (
        <svg className={className} viewBox="0 0 128 128">
          <rect width="128" height="128" fill="#F7DF1E" rx="16"/>
          <path fill="#000000" d="M67.3 100c3.5 2.1 7.9 3.5 12.3 3.5 7.1 0 11.6-3.5 11.6-8.5 0-5.7-4.4-7.8-11.9-11l-4.1-1.8c-12-5.1-17.6-11.5-17.6-22.6 0-12.4 9.7-21.7 25.1-21.7 8.2 0 14.5 2.2 19 4.8l-5.6 11.5c-3.7-2.1-8.3-3.6-13.4-3.6-6.4 0-10.2 3.1-10.2 7.3 0 5.1 4.1 7.2 11.1 10.2l4.1 1.8c13.7 5.9 18.7 12 18.7 23.6 0 13.5-10.4 23.3-27.5 23.3-9.5 0-17.3-2.7-21.9-5.7l5.3-12zm-35-1.9c3.2 2 7.2 3.4 11.3 3.4 6.6 0 10.5-3.3 10.5-11.5V38.8h15.2v51.5c0 16.4-9.2 23.6-25.2 23.6-8.9 0-16.1-2.6-20.3-5.3l3.5-10.5z"/>
        </svg>
      );
    case 'django':
      return (
        <svg className={className} viewBox="0 0 128 128">
          <rect width="128" height="128" rx="16" fill="#092E20"/>
          <path fill="#44B78B" d="M48.2 30h13.2v52.6c0 12.3-5.2 18-16.2 18-3.9 0-8.2-.8-11.3-2.1l2.4-10.2c2.1.9 4.5 1.5 6.8 1.5 4.6 0 6.8-2.6 6.8-8.8V30zm29 16.8c0-3.3 2.6-5.8 6.1-5.8 3.4 0 6 2.5 6 5.8 0 3.4-2.6 5.9-6 5.9-3.5 0-6.1-2.5-6.1-5.9zm.6 12.3h11.1v40.5H77.8V59.1z"/>
        </svg>
      );
    case 'react':
      return (
        <svg className={className} viewBox="0 0 128 128">
          <circle cx="64" cy="64" r="11.5" fill="#61DAFB"/>
          <g stroke="#61DAFB" strokeWidth="6" fill="none">
            <ellipse cx="64" cy="64" rx="48" ry="18"/>
            <ellipse cx="64" cy="64" rx="48" ry="18" transform="rotate(60 64 64)"/>
            <ellipse cx="64" cy="64" rx="48" ry="18" transform="rotate(120 64 64)"/>
          </g>
        </svg>
      );
    case 'node.js':
    case 'nodejs':
    case 'node':
      return (
        <svg className={className} viewBox="0 0 128 128">
          <path fill="#339933" d="M64 10.5L18.4 36.8v52.7L64 115.8l45.6-26.3V36.8L64 10.5zm0 10.8l36.3 20.9v41.9L64 105 27.7 84.1V42.2L64 21.3z"/>
          <path fill="#339933" d="M64 47.6c-9.1 0-16.5 7.4-16.5 16.4s7.4 16.4 16.5 16.4 16.5-7.4 16.5-16.4-7.4-16.4-16.5-16.4z"/>
        </svg>
      );
    case 'html5':
    case 'html':
      return (
        <svg className={className} viewBox="0 0 128 128">
          <path fill="#E34F26" d="M19.5 13.8l8.8 98.7L64 124.2l35.7-11.7 8.8-98.7H19.5z"/>
          <path fill="#EF652A" d="M64 21.7v93.2l28.6-9.4 7.2-83.8H64z"/>
          <path fill="#FFFFFF" d="M64 47.3H46.4l-1.2-13.6H64V21.7H30.4l.4 4.5 3.2 36.3H64V47.3zm0 30.6l-14.7-4-1-10.7H34.7l1.9 21.7 27.4 7.6V77.9z"/>
          <path fill="#ECECEC" d="M64 47.3v15.2h16.4l-1.6 17.5-14.8 4V99l27.4-7.6 3.6-40.4H64V47.3zm0-25.6v12h33.2l.4-4.5.7-7.5H64z"/>
        </svg>
      );
    case 'css3':
    case 'css':
      return (
        <svg className={className} viewBox="0 0 128 128">
          <path fill="#1572B6" d="M19.5 13.8l8.8 98.7L64 124.2l35.7-11.7 8.8-98.7H19.5z"/>
          <path fill="#33A9DC" d="M64 21.7v93.2l28.6-9.4 7.2-83.8H64z"/>
          <path fill="#FFFFFF" d="M64 47.3H46.4l-1.2-13.6H64V21.7H30.4l.4 4.5 3.2 36.3H64V47.3zm0 30.6l-14.7-4-1-10.7H34.7l1.9 21.7 27.4 7.6V77.9z"/>
          <path fill="#ECECEC" d="M64 47.3v15.2h16.4l-1.6 17.5-14.8 4V99l27.4-7.6 3.6-40.4H64V47.3zm0-25.6v12h33.2l.4-4.5.7-7.5H64z"/>
        </svg>
      );
    case 'bootstrap':
      return (
        <svg className={className} viewBox="0 0 128 128">
          <rect width="128" height="128" rx="24" fill="#7952B3"/>
          <path fill="#FFFFFF" d="M43 32h24.5c10.2 0 16.5 4.8 16.5 12.3 0 5.4-3.4 9.6-9 11.2v.3c6.8 1.4 11.5 6.1 11.5 13 0 8.7-7.4 14.2-18.5 14.2H43V32zm14.2 18.5h9.8c4.2 0 6.8-2 6.8-5.3 0-3.3-2.6-5.2-6.8-5.2h-9.8v10.5zm0 21.5h10.8c4.8 0 7.8-2.2 7.8-5.7 0-3.5-3-5.6-7.8-5.6H57.2V72z"/>
        </svg>
      );
    case 'tailwind css':
    case 'tailwind':
      return (
        <svg className={className} viewBox="0 0 128 128">
          <path fill="#06B6D4" d="M64 24c-16 0-26.7 8-32 24 6.4-9.6 13.9-12 22.4-7.2 4.9 2.7 8.3 8 13.9 13.8C77.5 64 89.2 76 112 76c16 0 26.7-8 32-24-6.4 9.6-13.9 12-22.4 7.2-4.9-2.7-8.3-8-13.9-13.8C98.5 36 86.8 24 64 24zM32 52C16 52 5.3 60 0 76c6.4-9.6 13.9-12 22.4-7.2 4.9 2.7 8.3 8 13.9 13.8C45.5 92 57.2 104 80 104c16 0 26.7-8 32-24-6.4 9.6-13.9 12-22.4 7.2-4.9-2.7-8.3-8-13.9-13.8C66.5 64 54.8 52 32 52z"/>
        </svg>
      );
    case 'rest apis':
    case 'rest api':
    case 'api':
      return (
        <svg className={className} viewBox="0 0 128 128">
          <rect width="128" height="128" rx="20" fill="#4F7CFF"/>
          <path fill="#FFFFFF" d="M30 45h68v12H30zm0 26h44v12H30zm0 26h68v6H30z"/>
          <circle cx="86" cy="77" r="7" fill="#8B5CF6"/>
        </svg>
      );
    case 'mysql':
      return (
        <svg className={className} viewBox="0 0 128 128">
          <path fill="#00758F" d="M64 12c-28.7 0-52 23.3-52 52s23.3 52 52 52 52-23.3 52-52-23.3-52-52-52zm25 70.8c-1.8 1.4-4.8 2.2-7.8 2.2-7.2 0-11.8-4.5-11.8-11.5 0-7.3 4.8-11.8 12.2-11.8 3 0 5.6.7 7.4 1.8l-1.6 5c-1.4-.9-3.3-1.4-5.4-1.4-4.1 0-6.7 2.6-6.7 6.6 0 3.8 2.5 6.3 6.6 6.3 2.1 0 4-.5 5.6-1.5l1.5 4.3z"/>
          <path fill="#F29111" d="M42 45h6v38h-6zm14 0h6v38h-6z"/>
        </svg>
      );
    case 'postgresql':
      return (
        <svg className={className} viewBox="0 0 128 128">
          <path fill="#336791" d="M64 10.5C34.5 10.5 10.5 34.5 10.5 64S34.5 117.5 64 117.5 117.5 93.5 117.5 64 93.5 10.5 64 10.5zm19.8 45c-2.3 8.6-8.9 14.8-17.7 15.6 1.8 4.2 4.4 7.6 7.6 10.1l-6.2 5.1c-4.4-3.6-7.8-8.5-9.9-14.3-5.2.3-10.2-1.3-14.1-4.6l4.6-5.8c2.7 2.3 6.2 3.4 9.8 3.1 6.5-.5 11.2-5 12.8-11.3H40V43.8h44.1v11.7z"/>
        </svg>
      );
    case 'sql':
      return (
        <svg className={className} viewBox="0 0 128 128">
          <rect width="128" height="128" rx="20" fill="#336791"/>
          <text x="64" y="78" textAnchor="middle" fill="#FFFFFF" fontSize="42" fontWeight="bold" fontFamily="sans-serif">SQL</text>
        </svg>
      );
    case 'mongodb':
      return (
        <svg className={className} viewBox="0 0 128 128">
          <path fill="#47A248" d="M64 10.5c-2.4 0-4.3 1.9-4.3 4.3v27c-16.2 4.1-28.3 18.7-28.3 36.2 0 19.3 14.8 35.1 33.7 36.9v3c0 1.2 1 2.2 2.2 2.2s2.2-1 2.2-2.2v-3c18.9-1.8 33.7-17.6 33.7-36.9 0-17.5-12.1-32.1-28.3-36.2v-27c-1.1-2.4-3.1-4.3-5.5-4.3z"/>
        </svg>
      );
    case 'git':
      return (
        <svg className={className} viewBox="0 0 128 128">
          <path fill="#F05032" d="M121.7 57.3L70.7 6.3c-3.6-3.6-9.4-3.6-13 0L37.1 26.9l16.4 16.4c3.9-1.3 8.3-.4 11.3 2.6 3.1 3.1 3.9 7.6 2.5 11.5l15.8 15.8c3.9-1.4 8.4-.6 11.5 2.5 4.3 4.3 4.3 11.3 0 15.6-4.3 4.3-11.3 4.3-15.6 0-3.3-3.3-4.1-8.1-2.5-12.1L62 64.6v23.2c1.3.7 2.4 1.7 3.2 3 3.3 5.1 1.8 12-3.3 15.3-5.1 3.3-12 1.8-15.3-3.3-3.3-5.1-1.8-12 3.3-15.3 1.8-1.2 3.9-1.7 6-1.7V62.7c-2.1 0-4.2-.6-6-1.7L33 78l.4.4c3.6 3.6 3.6 9.4 0 13l-2.9 2.9-24.2-24.2c-3.6-3.6-3.6-9.4 0-13L57.7 6.3"/>
        </svg>
      );
    case 'github':
      return (
        <svg className={className} viewBox="0 0 128 128">
          <path fill="#181717" d="M64 10.5C34.5 10.5 10.5 34.5 10.5 64c0 23.6 15.3 43.6 36.5 50.7 2.7.5 3.7-1.2 3.7-2.6 0-1.3-.1-5.5-.1-9.9-14.9 3.2-18-6.3-18-6.3-2.4-6.2-6-7.8-6-7.8-4.9-3.3.4-3.3.4-3.3 5.4.4 8.2 5.5 8.2 5.5 4.8 8.2 12.5 5.8 15.6 4.4.5-3.5 1.9-5.8 3.4-7.1-11.9-1.3-24.4-5.9-24.4-26.4 0-5.8 2.1-10.6 5.5-14.3-.5-1.3-2.4-6.8.5-14.1 0 0 4.5-1.4 14.7 5.5 4.3-1.2 8.9-1.8 13.5-1.8s9.2.6 13.5 1.8c10.2-6.9 14.7-5.5 14.7-5.5 2.9 7.3 1.1 12.8.5 14.1 3.5 3.7 5.5 8.5 5.5 14.3 0 20.6-12.5 25-24.5 26.3 1.9 1.6 3.6 4.8 3.6 9.8 0 7.1-.1 12.8-.1 14.6 0 1.4 1 3.1 3.7 2.6C102.3 107.6 117.5 87.6 117.5 64 117.5 34.5 93.5 10.5 64 10.5z"/>
        </svg>
      );
    case 'vs code':
    case 'vscode':
      return (
        <svg className={className} viewBox="0 0 128 128">
          <path fill="#007ACC" d="M96.7 10.5L34.1 48.6 15.2 34 5.5 39.5v49l9.7 5.5 18.9-14.6 62.6 38.1 21.8-10.5V21l-21.8-10.5zM34.1 79.4L18.4 64l15.7-15.4v30.8zm62.6 23.3L54.2 64l42.5-38.7v77.4z"/>
        </svg>
      );
    default:
      return (
        <div className={`${className} rounded-lg bg-[#4F7CFF]/10 text-[#4F7CFF] flex items-center justify-center font-bold text-xs`}>
          {name.substring(0, 2).toUpperCase()}
        </div>
      );
  }
};

interface SkillCardProps {
  name: string;
}

export const SkillCard: React.FC<SkillCardProps> = ({ name }) => {
  return (
    <div className="bg-white border border-[#E5EAF2] rounded-2xl p-4 sm:p-5 flex flex-col items-center justify-center space-y-2 sm:space-y-3 card-shadow card-shadow-hover transition-all duration-300 group cursor-default active:scale-95">
      <div className="p-1.5 sm:p-2 rounded-xl group-hover:scale-110 transition-transform duration-300">
        <TechIcon name={name} className="w-8 h-8 sm:w-11 sm:h-11" />
      </div>
      <span className="text-xs sm:text-sm font-semibold text-[#101828] tracking-tight group-hover:text-[#4F7CFF] transition-colors text-center">
        {name}
      </span>
    </div>
  );
};

