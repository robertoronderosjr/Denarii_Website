"use client";

import React, { useEffect, useState } from "react";

interface ScrollBackgroundProps {
  children: React.ReactNode;
}

export const ScrollBackground: React.FC<ScrollBackgroundProps> = ({
  children,
}) => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll, { passive: true });

    // Call handler right away to update initial position
    handleScroll();

    // Clean up
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Calculate opacity and intensity based on scroll position with smoother transitions
  // We'll use a more gradual curve for the hero glow fade out
  const heroGlowOpacity = Math.max(0, 1 - scrollY / 800);

  // Pulsing effect intensity that decreases with scroll
  const pulseIntensity = Math.max(0, 1 - scrollY / 1000);

  // We'll fade in a secondary background effect as we approach the stats section with a longer transition
  const statsBackgroundOpacity = Math.min(
    1,
    Math.max(0, (scrollY - 200) / 500)
  );

  return (
    <div className="relative min-h-screen">
      {/* Fixed background elements that change with scroll */}
      <div className="fixed inset-0 z-[-2]">
        {/* Base dark background */}
        <div className="absolute inset-0 bg-black"></div>

        {/* SVG grid background */}
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-repeat bg-fixed opacity-10"></div>

        {/* Hero radial glow that fades out on scroll with pulsing effect */}
        <div
          className="absolute inset-0 transition-all duration-700 ease-in-out"
          style={{
            opacity: heroGlowOpacity,
            background:
              "radial-gradient(circle at 50% 30%, rgba(139, 92, 246, 0.25) 0%, rgba(30, 27, 75, 0.1) 25%, rgba(0, 0, 0, 0) 50%)",
            animation:
              pulseIntensity > 0.1
                ? `pulse ${8 - 3 * (1 - pulseIntensity)}s ease-in-out infinite`
                : "none",
            filter: `blur(${2 * pulseIntensity}px)`,
          }}
        ></div>

        {/* Left side glow with enhanced transition */}
        <div
          className="absolute left-0 top-0 w-1/3 h-screen transition-all duration-700 ease-in-out"
          style={{
            opacity: heroGlowOpacity * 0.8,
            background:
              "radial-gradient(ellipse at left, rgba(125, 80, 230, 0.18) 0%, rgba(0, 0, 0, 0) 70%)",
            filter: `blur(${40 + 10 * pulseIntensity}px)`,
            transform: "translateY(10%)",
            animation:
              pulseIntensity > 0.1
                ? `float ${
                    12 - 4 * (1 - pulseIntensity)
                  }s ease-in-out infinite alternate`
                : "none",
          }}
        ></div>

        {/* Right side glow with enhanced transition */}
        <div
          className="absolute right-0 top-0 w-1/3 h-screen transition-all duration-700 ease-in-out"
          style={{
            opacity: heroGlowOpacity * 0.8,
            background:
              "radial-gradient(ellipse at right, rgba(79, 70, 229, 0.18) 0%, rgba(0, 0, 0, 0) 70%)",
            filter: `blur(${40 + 15 * pulseIntensity}px)`,
            transform: "translateY(20%)",
            animation:
              pulseIntensity > 0.1
                ? `float ${
                    15 - 5 * (1 - pulseIntensity)
                  }s ease-in-out infinite alternate-reverse`
                : "none",
          }}
        ></div>

        {/* Stats section background that fades in on scroll with subtle glow */}
        <div
          className="absolute inset-0 transition-all duration-700 ease-in-out"
          style={{
            opacity: statsBackgroundOpacity,
            background:
              "radial-gradient(circle at 80% 80%, rgba(79, 70, 229, 0.12) 0%, rgba(0, 0, 0, 0) 50%)",
            filter: "blur(5px)",
            animation:
              statsBackgroundOpacity > 0.5
                ? "pulse 10s ease-in-out infinite"
                : "none",
          }}
        ></div>
      </div>

      {/* Content */}
      <div className="relative z-[1]">{children}</div>
    </div>
  );
};
