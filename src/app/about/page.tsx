"use client";

import {
  Users,
  Award,
  Globe,
  Shield,
  ArrowRight,
  Linkedin,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

// Custom X (formerly Twitter) icon component (copied from footer)
const XIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.width || 28}
    height={props.height || 28}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={props.className || "lucide"}
  >
    <path d="M13.6823 10.6218L20.2391 3H18.6854L12.9921 9.61788L8.44486 3H3.2002L10.0765 13.0074L3.2002 21H4.75404L10.7663 14.0113L15.5549 21H20.7996L13.6819 10.6218H13.6823ZM11.5541 13.0956L10.8574 12.0991L5.31391 4.16971H7.70053L12.1742 10.5689L12.8709 11.5655L18.6861 19.8835H16.2995L11.5541 13.096V13.0956Z" />
  </svg>
);

const teamMembers = [
  {
    name: "Drew Austin",
    role: "Founding Partner",
    image: "/team/drew-austin.jpg",
    linkedin: "https://www.linkedin.com/in/drewaustin",
    twitter: "https://x.com/DrewAustin",
  },
  {
    name: "Elana Gold",
    role: "Partner / Head of BD",
    image: "/team/elana-gold.jpg",
    linkedin: "https://www.linkedin.com/in/itselanagold",
    twitter: "https://x.com/ItsElanaGold",
  },
  {
    name: "Jennifer Styles",
    role: "Chief Operating Officer",
    image: "/team/jennifer-styles.jpg",
    linkedin: "https://www.linkedin.com/in/jennifer-styles-2757362",
    twitter: "#",
  },
  {
    name: "Joshua Howard",
    role: "Associate",
    image: "/team/joshua-howard.jpg",
    linkedin: "https://www.linkedin.com/in/joshuah1/",
    twitter: "https://x.com/jhowow_",
  },
  {
    name: "Jake Craven",
    role: "Product Manager",
    image: "/team/jake-craven.jpg",
    linkedin: "https://www.linkedin.com/in/jake-craven",
    twitter: "https://x.com/Craven_JE",
  },
  {
    name: "Nabil Allouche",
    role: "Tokenomics",
    image: "/team/nabil-allouche.jpg",
    linkedin: "https://www.linkedin.com/in/nabil-allouche-673a991b5/",
    twitter: "#",
  },
  {
    name: "Lauren Adelman",
    role: "Partnerships",
    image: "/team/lauren-adelman.jpg",
    linkedin: "https://www.linkedin.com/in/laurenadelman/",
    twitter: "https://x.com/ChiefofWeb3",
  },
  {
    name: "Edgar Woo",
    role: "Head of Digital & Social",
    image: "/team/edgar-woo.jpg",
    linkedin: "https://www.linkedin.com/in/edgarwoo",
    twitter: "https://x.com/_edgarwoo",
  },
  {
    name: "Simon Lacy",
    role: "KOL & Distribution Lead",
    image: "/team/simon-lacy.jpg",
    linkedin: "https://www.linkedin.com/in/mezcalpapi-eth-96a86424b/",
    twitter: "https://x.com/mezcalpapieth",
  },
  {
    name: "Brian Fanzo",
    role: "Web3 Strategy & Community",
    image: "/team/brian-fanzo.jpg",
    linkedin: "https://www.linkedin.com/in/brianfanzo",
    twitter: "https://x.com/iSocialFanz",
  },
  {
    name: "Austin Ritter",
    role: "AI & Operations Manager",
    image: "/team/austin-ritter.jpg",
    linkedin: "https://www.linkedin.com/in/austinritter",
    twitter: "#",
  },
];

// Blog preview data (replace with real data as needed)
const blogPreview = [
  {
    id: 1,
    title: "Understanding Tokenomics: A Comprehensive Guide",
    excerpt:
      "Learn the fundamentals of tokenomics and how to design sustainable token economies for your blockchain project.",
    date: "2024-03-15",
    image: "/blog/tokenomics-guide.jpg",
    link: "/blog/1",
  },
  {
    id: 2,
    title: "The Future of DeFi: Trends to Watch in 2024",
    excerpt:
      "Explore the emerging trends in decentralized finance and how they're shaping the future of blockchain technology.",
    date: "2024-03-10",
    image: "/blog/defi-trends.jpg",
    link: "/blog/2",
  },
  {
    id: 3,
    title: "Building Sustainable Token Economies",
    excerpt:
      "Discover the key principles and strategies for creating long-lasting token economies that benefit all stakeholders.",
    date: "2024-03-05",
    image: "/blog/sustainable-tokens.jpg",
    link: "/blog/3",
  },
];

export default function AboutPage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleSlide = (direction: "prev" | "next") => {
    if (direction === "prev") {
      setCurrentSlide((prev) =>
        prev === 0 ? blogPreview.length - 1 : prev - 1
      );
    } else {
      setCurrentSlide((prev) =>
        prev === blogPreview.length - 1 ? 0 : prev + 1
      );
    }
  };

  // Auto-advance slides every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      handleSlide("next");
    }, 5000);

    return () => clearInterval(timer);
  }, [currentSlide]);

  return (
    <>
      {/* Hero Section */}
      <section className="py-32 relative overflow-hidden">
        {/* Background gradient effects */}
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 via-transparent to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-500/10 via-transparent to-transparent pointer-events-none" />

        <div className="container px-4 md:px-6 mx-auto relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Column - Text */}
            <div className="flex flex-col justify-center max-w-xl mx-auto lg:mx-0">
              <div className="space-y-2 mb-8">
                <span className="text-purple-400 font-semibold tracking-wider uppercase text-sm">
                  Our Story
                </span>
                <h1 className="text-6xl font-extrabold tracking-tighter text-white">
                  Who We Are
                </h1>
              </div>
              <div className="space-y-8 mb-12">
                <p className="text-xl text-gray-300 leading-relaxed">
                  Denarii Labs is a tokenomics accelerator and strategic growth
                  partner for Web3 protocols. We collaborate with projects at
                  every stage–refining token design, crafting go-to-market
                  strategies, and executing high-impact growth initiatives to
                  drive real adoption.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-7 h-7 rounded-full bg-purple-500/20 flex items-center justify-center ring-1 ring-purple-500/20">
                      <span className="text-purple-400 text-sm">✓</span>
                    </div>
                    <p className="text-gray-300 text-base">
                      Full-spectrum tokenomics expertise
                    </p>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-7 h-7 rounded-full bg-purple-500/20 flex items-center justify-center ring-1 ring-purple-500/20">
                      <span className="text-purple-400 text-sm">✓</span>
                    </div>
                    <p className="text-gray-300 text-base">
                      Strategic growth & execution
                    </p>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-7 h-7 rounded-full bg-purple-500/20 flex items-center justify-center ring-1 ring-purple-500/20">
                      <span className="text-purple-400 text-sm">✓</span>
                    </div>
                    <p className="text-gray-300 text-base">
                      Proven accelerator framework
                    </p>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-7 h-7 rounded-full bg-purple-500/20 flex items-center justify-center ring-1 ring-purple-500/20">
                      <span className="text-purple-400 text-sm">✓</span>
                    </div>
                    <p className="text-gray-300 text-base">
                      Powered by Red Beard Ventures
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-6">
                <Button
                  className="group relative bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-bold hover:scale-105 transition-all duration-300 text-lg h-14 min-w-[200px] shadow-lg shadow-purple-500/20 hover:shadow-purple-500/30 overflow-hidden"
                  size="lg"
                  asChild
                >
                  <Link
                    href="/about/team"
                    className="relative z-10 flex items-center justify-center gap-2 w-full"
                  >
                    Meet the Team
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button
                  className="group relative bg-transparent text-white font-bold hover:scale-105 transition-all duration-300 text-lg h-14 min-w-[200px] border-2 border-purple-500/30 hover:border-purple-500/50 shadow-lg shadow-purple-500/10 hover:shadow-purple-500/20 overflow-hidden"
                  size="lg"
                  asChild
                  variant="outline"
                >
                  <Link
                    href="/about/blog"
                    className="relative z-10 flex items-center justify-center gap-2 w-full"
                  >
                    Visit Our Blog
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
            </div>
            {/* Right Column - Illustration or Brand Visual */}
            <div className="relative flex items-center justify-center">
              <div className="relative w-full aspect-square max-w-lg">
                {/* Outer glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-indigo-500/20 rounded-3xl blur-2xl" />

                {/* Main container */}
                <div className="relative aspect-square rounded-3xl bg-gradient-to-br from-purple-900/40 to-indigo-900/40 p-8 flex items-center justify-center border border-white/10 backdrop-blur-xl">
                  {/* Animated gradient background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-indigo-500/10 rounded-3xl animate-pulse" />

                  {/* Content */}
                  <div className="relative w-full h-full flex items-center justify-center">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-indigo-500/5 rounded-2xl" />
                    <div className="relative flex items-center justify-center">
                      <Users className="w-40 h-40 text-purple-400/60" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-24 relative bg-gradient-to-b from-[#1a1333] via-[#221a3a] to-[#18122b]">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold md:text-4xl text-white mb-4 drop-shadow-lg">
              Trending Insights
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto text-lg">
              Latest perspectives and analysis from our team
            </p>
          </div>
          <div className="flex justify-center">
            <div className="relative w-full max-w-[1300px] rounded-2xl bg-white/10 border border-purple-400/20 shadow-2xl px-2 md:px-14 pt-24 pb-16 flex flex-col items-center overflow-visible">
              {/* Navigation Arrows */}
              <button
                className="absolute left-8 top-1/2 -translate-y-1/2 z-40 p-0 m-0 bg-transparent border-none outline-none cursor-pointer"
                style={{ transform: "translateY(-50%)" }}
                onClick={() => handleSlide("prev")}
                aria-label="Previous Slide"
              >
                <svg
                  width="56"
                  height="56"
                  viewBox="0 0 56 56"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="drop-shadow-xl"
                >
                  <polyline
                    points="36,8 16,28 36,48"
                    stroke="#fff"
                    strokeWidth="6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <button
                className="absolute right-8 top-1/2 -translate-y-1/2 z-40 p-0 m-0 bg-transparent border-none outline-none cursor-pointer"
                style={{ transform: "translateY(-50%)" }}
                onClick={() => handleSlide("next")}
                aria-label="Next Slide"
              >
                <svg
                  width="56"
                  height="56"
                  viewBox="0 0 56 56"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="drop-shadow-xl"
                >
                  <polyline
                    points="20,8 40,28 20,48"
                    stroke="#fff"
                    strokeWidth="6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              {/* Fan/Coverflow Carousel */}
              <div className="relative h-[500px] flex items-end justify-center pb-12 w-full px-2 md:px-8">
                <div className="w-full h-full flex items-center justify-center relative">
                  {blogPreview.map((post, index) => {
                    // Calculate position relative to center
                    const total = blogPreview.length;
                    let pos = index - currentSlide;
                    if (pos < -Math.floor(total / 2)) pos += total;
                    if (pos > Math.floor(total / 2)) pos -= total;

                    // Only render cards within -3 to 3 positions
                    if (Math.abs(pos) > 3) return null;

                    // Style for each position
                    let scale = 1,
                      rotate = 0,
                      x = 0,
                      z = 0,
                      opacity = 1,
                      zIndex = 10 - Math.abs(pos),
                      shadow = "",
                      border = "",
                      blur = "none",
                      width = 380,
                      bg = "#fff";
                    if (pos === 0) {
                      scale = 1.12;
                      rotate = 0;
                      x = 0;
                      z = 40;
                      opacity = 1;
                      shadow =
                        "0 10px 36px 0 rgba(80,0,120,0.16), 0 2px 8px 0 rgba(80,0,120,0.10)";
                      border = "2px solid rgba(168,85,247,0.18)";
                      width = 380;
                      bg = "#fff";
                    } else if (pos === -1) {
                      scale = 0.92;
                      rotate = -18;
                      x = -210;
                      z = 30;
                      opacity = 0.8;
                      shadow = "0 4px 16px 0 rgba(80,0,120,0.10)";
                      border = "1.5px solid rgba(168,85,247,0.10)";
                      blur = "blur(1px)";
                      width = 320;
                      bg = "#fff";
                    } else if (pos === 1) {
                      scale = 0.92;
                      rotate = 18;
                      x = 210;
                      z = 30;
                      opacity = 0.8;
                      shadow = "0 4px 16px 0 rgba(80,0,120,0.10)";
                      border = "1.5px solid rgba(168,85,247,0.10)";
                      blur = "blur(1px)";
                      width = 320;
                      bg = "#fff";
                    } else if (pos === -2) {
                      scale = 0.8;
                      rotate = -28;
                      x = -370;
                      z = 20;
                      opacity = 0.5;
                      shadow = "0 2px 8px 0 rgba(80,0,120,0.08)";
                      border = "1px solid rgba(168,85,247,0.08)";
                      blur = "blur(2px)";
                      width = 220;
                      bg = "#fff";
                    } else if (pos === 2) {
                      scale = 0.8;
                      rotate = 28;
                      x = 370;
                      z = 20;
                      opacity = 0.5;
                      shadow = "0 2px 8px 0 rgba(80,0,120,0.08)";
                      border = "1px solid rgba(168,85,247,0.08)";
                      blur = "blur(2px)";
                      width = 220;
                      bg = "#fff";
                    } else if (pos === -3) {
                      scale = 0.65;
                      rotate = -38;
                      x = -520;
                      z = 10;
                      opacity = 0.18;
                      shadow = "0 1px 4px 0 rgba(80,0,120,0.04)";
                      border = "1px solid rgba(168,85,247,0.04)";
                      blur = "blur(3px)";
                      width = 120;
                      bg = "#fff";
                    } else if (pos === 3) {
                      scale = 0.65;
                      rotate = 38;
                      x = 520;
                      z = 10;
                      opacity = 0.18;
                      shadow = "0 1px 4px 0 rgba(80,0,120,0.04)";
                      border = "1px solid rgba(168,85,247,0.04)";
                      blur = "blur(3px)";
                      width = 120;
                      bg = "#fff";
                    }

                    return (
                      <div
                        key={post.id}
                        className="absolute bottom-0 left-1/2 transition-all duration-700"
                        style={{
                          width: width + "px",
                          background: bg,
                          transform: `translateX(-50%) translateX(${x}px) scale(${scale}) rotateY(${rotate}deg) translateZ(${z}px)`,
                          opacity,
                          zIndex,
                          boxShadow: shadow,
                          border,
                          filter: blur,
                          pointerEvents: pos === 0 ? "auto" : "none",
                          borderRadius: "20px",
                          overflow: "hidden",
                        }}
                      >
                        <article className="rounded-xl overflow-hidden flex flex-col h-full bg-white">
                          <div className="aspect-video relative rounded-t-xl overflow-hidden">
                            <Image
                              src={post.image}
                              alt={post.title}
                              fill
                              className="object-cover rounded-t-xl"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                          </div>
                          <div className="p-6 flex-1 flex flex-col justify-between">
                            <div>
                              <div className="text-xs font-semibold text-purple-500 mb-1 tracking-wide uppercase">
                                {post.date}
                              </div>
                              <h3 className="text-lg font-bold text-gray-900 mb-2 leading-tight">
                                {post.title}
                              </h3>
                              <p className="text-gray-700 mb-4 line-clamp-2 text-sm">
                                {post.excerpt}
                              </p>
                            </div>
                            <Link
                              href={post.link}
                              className="inline-flex items-center text-purple-600 hover:text-indigo-600 font-semibold transition-colors duration-200 text-sm group"
                            >
                              Read More
                              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                            </Link>
                          </div>
                        </article>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Progress Dots */}
              <div className="flex justify-center gap-3 mt-8">
                {blogPreview.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`transition-all duration-300 h-2 rounded-full shadow-md focus:outline-none focus:ring-2 focus:ring-purple-400/60 ${
                      currentSlide === index
                        ? "bg-gradient-to-r from-purple-500 to-indigo-500 w-8 scale-110"
                        : "bg-white/60 w-3 hover:bg-purple-300/60"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="container px-4 md:px-6 mx-auto text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold md:text-4xl mb-6 text-white">
              Have Questions or Want to Connect?
            </h2>
            <p className="text-xl text-gray-300 mb-10">
              Reach out to Denarii Labs and our team will get back to you as
              soon as possible.
            </p>
            <div>
              <Button
                className="bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 text-white text-lg py-6 px-10 rounded-lg shadow-lg shadow-purple-900/30 transition-all duration-300"
                size="lg"
                asChild
              >
                <Link href="/about/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
