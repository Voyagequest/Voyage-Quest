import React from 'react';

interface VoyageQuestLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showSubtitle?: boolean;
  subtitleText?: string;
  displayMode?: 'combined' | 'imageOnly';
  isFooter?: boolean;
}

export const VoyageQuestLogo: React.FC<VoyageQuestLogoProps> = ({
  className = '',
  size = 'md',
  showSubtitle = true,
  subtitleText = 'Procurement & Project Management Solutions',
  displayMode = 'combined',
  isFooter = false
}) => {
  const imageSizes = {
    sm: 'h-10 w-10',
    md: 'h-12 w-12',
    lg: 'h-16 w-16',
    xl: 'h-24 w-24'
  };

  const titleSizes = {
    sm: 'text-base',
    md: 'text-lg sm:text-xl',
    lg: 'text-2xl sm:text-3xl',
    xl: 'text-3xl sm:text-4xl'
  };

  const subtitleSizes = {
    sm: 'text-[9px]',
    md: 'text-[10px] sm:text-[11px]',
    lg: 'text-xs',
    xl: 'text-sm'
  };

  if (displayMode === 'imageOnly') {
    return (
      <div className={`flex items-center gap-3 select-none ${className}`}>
        <div className={`overflow-hidden rounded-xl bg-white p-1 shadow-sm border border-amber-300/60 ${imageSizes[size]}`}>
          <img 
            src="/voyage-quest-logo.jpg" 
            alt="Voyage Quest - your journey to success" 
            className="w-full h-full object-contain"
            referrerPolicy="no-referrer"
          />
        </div>
        {showSubtitle && (
          <div className="flex flex-col">
            <span className={`uppercase font-semibold tracking-wider ${isFooter ? 'text-slate-400' : 'text-slate-500 dark:text-slate-400'} ${subtitleSizes[size]}`}>
              {subtitleText}
            </span>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Visual Brand Mark with Gold Border Frame */}
      <div className="relative shrink-0 group">
        <div className={`overflow-hidden rounded-xl bg-white p-1 shadow-xs border border-amber-200/90 transition-transform duration-200 group-hover:scale-105 ${imageSizes[size]}`}>
          <img 
            src="/voyage-quest-logo.jpg" 
            alt="Voyage Quest Logo" 
            className="w-full h-full object-contain"
            referrerPolicy="no-referrer"
          />
        </div>
      </div>

      {/* Brand Identity & User Requested Subtitle */}
      <div className="flex flex-col justify-center">
        <div className="flex items-center gap-1.5">
          <span 
            className={`font-serif font-bold tracking-tight leading-none ${
              isFooter 
                ? 'text-amber-400' 
                : 'text-transparent bg-clip-text bg-gradient-to-r from-amber-700 via-amber-600 to-yellow-600 dark:from-amber-400 dark:via-yellow-300 dark:to-amber-500'
            } ${titleSizes[size]}`}
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Voyage Quest
          </span>
        </div>

        {/* Logo Tagline */}
        <span className={`text-[10px] sm:text-[11px] font-sans font-medium tracking-wide lowercase ${isFooter ? 'text-amber-200/80' : 'text-amber-800/80 dark:text-amber-300/80'}`}>
          your journey to success
        </span>

        {/* Retained Procurement & Project Management Solutions label */}
        {showSubtitle && (
          <span 
            className={`uppercase font-semibold tracking-wider mt-0.5 ${
              isFooter ? 'text-slate-400' : 'text-slate-500 dark:text-slate-400'
            } ${subtitleSizes[size]}`}
          >
            {subtitleText}
          </span>
        )}
      </div>
    </div>
  );
};

