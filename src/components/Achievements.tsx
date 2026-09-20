import React from 'react';
import { Trophy, Award, FileCheck, Star } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import type { AchievementItem } from '../data/portfolioData';

export const Achievements: React.FC = () => {
  const { achievements } = portfolioData;

  const renderIcon = (type: AchievementItem['iconType']) => {
    switch (type) {
      case 'trophy':
        return <Trophy className="w-5 h-5 text-amber-500" />;
      case 'medal':
        return <Award className="w-5 h-5 text-blue-500" />;
      case 'certificate':
        return <FileCheck className="w-5 h-5 text-slate-400" />;
      case 'star':
        return <Star className="w-5 h-5 text-amber-400" />;
      default:
        return <Trophy className="w-5 h-5 text-blue-500" />;
    }
  };

  return (
    <div className="bg-white border border-[#E5EAF2] rounded-3xl p-5 sm:p-8 card-shadow h-full flex flex-col justify-between">
      <div>
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#8B5CF6]/10 text-[#8B5CF6] flex items-center justify-center shrink-0">
              <Trophy className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-bold tracking-widest text-[#8B5CF6] uppercase block">
                ACHIEVEMENTS
              </span>
              <h3 className="text-lg sm:text-xl font-bold text-[#101828]">
                Milestones & Hackathons
              </h3>
            </div>
          </div>
        </div>

        {/* List of Achievements */}
        <div className="space-y-3.5">
          {achievements.map((item, index) => (
            <div
              key={index}
              className="flex items-start sm:items-center justify-between p-3.5 rounded-2xl bg-[#F7F9FC]/70 hover:bg-[#F7F9FC] transition-colors border border-[#E5EAF2]/60 gap-3"
            >
              <div className="flex items-start gap-3 min-w-0">
                <div className="w-9 h-9 rounded-xl bg-white flex items-center justify-center shrink-0 border border-slate-200/80 mt-0.5 sm:mt-0 shadow-sm">
                  {renderIcon(item.iconType)}
                </div>
                <div className="min-w-0">
                  <h4 className="text-xs sm:text-sm font-bold text-[#101828] leading-tight">
                    {item.title}
                  </h4>
                  <p className="text-[11px] sm:text-xs text-[#667085] mt-0.5">
                    {item.subtitle}
                  </p>
                </div>
              </div>

              <span className="text-[11px] sm:text-xs font-semibold text-[#667085] bg-white border border-slate-200 px-2.5 py-1 rounded-md shrink-0 self-start sm:self-center">
                {item.year}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

