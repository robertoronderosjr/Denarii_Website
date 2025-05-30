'use client';

import React, { useEffect, useRef } from 'react';

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
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  // Duplicate the content for seamless looping
  const renderItems = () => {
    return (
      <>
        {[...Array(count * 2)].map((_, i) => (
          <div 
            key={i} 
            className="inline-flex items-center justify-center px-10 py-6 text-2xl font-medium text-white whitespace-nowrap"
          >
            LOGO
          </div>
        ))}
      </>
    );
  };

  return (
    <div className={`relative w-full overflow-hidden ${className}`} ref={containerRef}>
      <div 
        ref={contentRef}
        className={`inline-flex items-center ${
          direction === 'left' ? 'animate-marquee' : 'animate-marquee-reverse'
        }`}
      >
        {renderItems()}
      </div>
    </div>
  );
}
