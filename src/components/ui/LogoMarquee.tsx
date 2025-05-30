'use client';

import React from 'react';

interface LogoMarqueeProps {
  direction?: 'left' | 'right';
  count?: number;
  className?: string;
}

export function LogoMarquee({ 
  direction = 'left', 
  count = 8, 
  className = '' 
}: LogoMarqueeProps) {
  return (
    <div className={`relative overflow-hidden w-full ${className}`}>
      <div className="flex w-max">
        {/* First set */}
        <div 
          className={`flex items-center whitespace-nowrap ${
            direction === 'left' ? 'animate-marquee' : 'animate-marquee-reverse'
          }`}
        >
          {[...Array(count)].map((_, i) => (
            <div key={`first-${i}`} className="px-8 text-white text-lg font-medium">
              LOGO
            </div>
          ))}
        </div>
        
        {/* Duplicate for seamless loop */}
        <div 
          className={`flex items-center whitespace-nowrap ${
            direction === 'left' ? 'animate-marquee' : 'animate-marquee-reverse'
          }`}
          aria-hidden="true"
        >
          {[...Array(count)].map((_, i) => (
            <div key={`dup-${i}`} className="px-8 text-white text-lg font-medium">
              LOGO
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
