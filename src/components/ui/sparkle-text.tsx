"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface SparkleProps {
  children: React.ReactNode;
  className?: string;
}

// Sparkle component that appears and disappears
const Sparkle = ({ size, color, style }: { size: number; color: string; style: React.CSSProperties }) => {
  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 68 68"
      fill="none"
      style={style}
      initial={{ scale: 0 }}
      animate={{
        scale: [0, 1, 0],
        opacity: [0, 1, 0],
        rotate: [0, 180]
      }}
      transition={{
        duration: 0.8,
        ease: "easeInOut",
        times: [0, 0.5, 1],
      }}
    >
      <path
        d="M26.5 4.5C30.5 16.5 43.5 18.5 43.5 18.5C43.5 18.5 41.5 31.5 53.5 34.5C41.5 38.5 43.5 50.5 43.5 50.5C43.5 50.5 30.5 53.5 26.5 64.5C23.5 52.5 9.5 50.5 9.5 50.5C9.5 50.5 11.5 37.5 0.5 34.5C11.5 30.5 9.5 18.5 9.5 18.5C9.5 18.5 22.5 15.5 26.5 4.5Z"
        fill={color}
      />
    </motion.svg>
  );
};

// Generate random positions for sparkles
const generateSparkles = (count: number, bounds: { width: number; height: number }) => {
  return Array.from({ length: count }).map(() => ({
    id: Math.random().toString(36).slice(2),
    size: Math.random() * 10 + 10,
    color: Math.random() > 0.5 ? '#8B5CF6' : '#EC4899',
    style: {
      position: 'absolute' as const,
      left: `${Math.random() * bounds.width}px`,
      top: `${Math.random() * bounds.height}px`,
      zIndex: 2,
      pointerEvents: 'none' as const,
    },
  }));
};

export const SparkleText: React.FC<SparkleProps> = ({ children, className = '' }) => {
  const [sparkles, setSparkles] = useState<any[]>([]);
  const [bounds, setBounds] = useState({ width: 0, height: 0 });
  const containerRef = React.useRef<HTMLDivElement>(null);

  // Update bounds when component mounts
  useEffect(() => {
    if (containerRef.current) {
      const { width, height } = containerRef.current.getBoundingClientRect();
      setBounds({ width, height });
    }
  }, []);

  // Generate new sparkles periodically
  useEffect(() => {
    const interval = setInterval(() => {
      if (containerRef.current) {
        const { width, height } = containerRef.current.getBoundingClientRect();
        setBounds({ width, height });
        setSparkles(generateSparkles(3, { width, height }));
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`relative inline-block ${className}`} ref={containerRef}>
      {sparkles.map(sparkle => (
        <Sparkle
          key={sparkle.id}
          size={sparkle.size}
          color={sparkle.color}
          style={sparkle.style}
        />
      ))}
      <span className="relative z-1">{children}</span>
    </div>
  );
};
