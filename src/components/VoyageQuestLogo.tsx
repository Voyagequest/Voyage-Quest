import React, { useId } from 'react';

export interface VoyageQuestLogoProps {
  className?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'hero';
  showDivider?: boolean;
  align?: 'center' | 'left';
  showTagline?: boolean;
  taglineText?: string;
  showSubtitle?: boolean;
  subtitleText?: string;
  isFooter?: boolean;
}

export const VoyageQuestLogo: React.FC<VoyageQuestLogoProps> = ({
  className = '',
  size = 'md',
  showDivider = false,
  align = 'center',
  showTagline = true,
  taglineText = 'YOUR JOURNEY TO SUCCESS',
  showSubtitle = false,
  subtitleText = '',
  isFooter = false
}) => {
  const reactId = useId();
  const safeId = reactId.replace(/[^a-zA-Z0-9]/g, '');

  const sizeClasses = {
    xs: 'h-8 sm:h-9',
    sm: 'h-10 sm:h-11',
    md: 'h-12 sm:h-13',
    lg: 'h-16 sm:h-20',
    xl: 'h-24 sm:h-28',
    hero: 'h-28 sm:h-36 lg:h-44'
  };

  const currentHeight = sizeClasses[size] || sizeClasses.md;
  const isCentered = align === 'center';

  return (
    <div 
      className={`inline-flex items-center select-none transition-transform duration-200 group ${className}`}
      aria-label="Voyage Quest - YOUR JOURNEY TO SUCCESS"
    >
      <div className={`flex flex-col ${isCentered ? 'items-center text-center' : 'items-start text-left'}`}>
        
        {/* Subtle Horizontal Gold Hairline Divider */}
        {showDivider && (
          <div 
            className="w-16 sm:w-24 h-[1px] mb-1.5 bg-gradient-to-r from-transparent via-[#F5D77F]/80 to-transparent" 
          />
        )}

        {/* Vector SVG Logo Lockup - Complete, unclipped glyphs for Y, Q, and full tagline */}
        <svg 
          viewBox="0 0 340 152" 
          className={`${currentHeight} w-auto overflow-visible drop-shadow-[0_1px_3px_rgba(0,0,0,0.5)]`}
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Luminous Warm Gold Gradient for Voyage */}
            <linearGradient id={`${safeId}-voyage`} x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#FFF9E6" />
              <stop offset="35%" stopColor="#ECD38D" />
              <stop offset="70%" stopColor="#C99E44" />
              <stop offset="100%" stopColor="#9E7321" />
            </linearGradient>

            {/* Specular Multi-Stop Metallic Gold Gradient for Quest */}
            <linearGradient id={`${safeId}-quest`} x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#FFFDF7" />
              <stop offset="18%" stopColor="#FDEAB0" />
              <stop offset="42%" stopColor="#E5B948" />
              <stop offset="72%" stopColor="#BD8E33" />
              <stop offset="100%" stopColor="#7F5610" />
            </linearGradient>
          </defs>

          {/* Voyage in Italic Serif with ample headroom and unclipped 'y' descender */}
          <text 
            x="170" 
            y="43" 
            textAnchor="middle" 
            style={{ 
              fontFamily: "'Playfair Display', Georgia, 'Times New Roman', serif",
              fontStyle: 'italic',
              fontWeight: 500,
              fontSize: '43px',
              fill: `url(#${safeId}-voyage)`,
            }}
          >
            Voyage
          </text>

          {/* Quest in Bold Classical Serif with complete, sweeping 'Q' tail */}
          <text 
            x="170" 
            y="104" 
            textAnchor="middle" 
            style={{ 
              fontFamily: "'Playfair Display', Georgia, 'Times New Roman', serif",
              fontStyle: 'normal',
              fontWeight: 700,
              fontSize: '76px',
              letterSpacing: '-1.5px',
              fill: `url(#${safeId}-quest)`,
            }}
          >
            Quest
          </text>

          {/* Tagline - Tracked Uppercase in rich gold */}
          {showTagline && (
            <text 
              x="171.8" 
              y="142" 
              textAnchor="middle" 
              style={{ 
                fontFamily: "'Plus Jakarta Sans', system-ui, -apple-system, sans-serif",
                fontStyle: 'normal',
                fontWeight: 700,
                fontSize: '11.5px',
                letterSpacing: '3.6px',
                fill: '#D4AF37',
              }}
            >
              {taglineText}
            </text>
          )}
        </svg>

      </div>

      {/* Optional Side Subtitle */}
      {showSubtitle && subtitleText && (
        <div className={`hidden sm:flex flex-col justify-center border-l border-white/15 pl-3 ml-3.5 ${isFooter ? 'border-zinc-800' : ''}`}>
          <span className="text-[10px] sm:text-[11px] uppercase font-semibold tracking-wider text-zinc-300">
            {subtitleText}
          </span>
          <span className="text-[9px] font-medium tracking-wider text-[#BF953F] uppercase mt-0.5">
            Nationwide Operations
          </span>
        </div>
      )}
    </div>
  );
};
