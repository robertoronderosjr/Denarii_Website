"use client";

import { SectionWrapper } from "@/components/common/section-wrapper";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ArrowLeft,
  CalendarDays,
  Users,
  Target,
  LucideIcon,
  Sparkles,
  Zap,
  Network,
  DollarSign,
  CheckCircle,
  ArrowRight,
  Star,
  Rocket,
  Shield,
  Code,
  Clock,
  MapPin,
  CircleCheck,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CtaButton } from "@/components/common/cta-button";
import { motion } from "framer-motion";

interface AcceleratorPageProps {
  title: string;
  description: string;
  overview: string;
  focusAreas: string[];
  highlights: string[];
  duration: string;
  format: string;
  cohort: string;
  target: string;
  benefits: string[];
  ctaTitle: string;
  ctaDescription: string;
  icon: LucideIcon;
  technicalDetails?: {
    title: string;
    description: string;
    features: string[];
    website?: string;
  };
  whyBuildTitle?: string;
  learnMoreUrl?: string;
  applyUrl?: string;
}

interface ProgramDetail {
  label: string;
  value: string;
  icon: LucideIcon;
  className: string;
}

export default function AcceleratorTemplate({
  title,
  description,
  overview,
  focusAreas,
  highlights,
  duration,
  format,
  cohort,
  target,
  benefits,
  ctaTitle,
  ctaDescription,
  icon: Icon,
  technicalDetails,
  whyBuildTitle,
  learnMoreUrl,
  applyUrl,
}: AcceleratorPageProps) {
  const programDetails: ProgramDetail[] = [
    { 
      label: "Application Status", 
      value: "OPEN", 
      icon: CircleCheck,
      className: "text-green-400"
    },
    { 
      label: "Investment", 
      value: "$100,000", 
      icon: DollarSign,
      className: "text-purple-400"
    },
    { 
      label: "Location", 
      value: "Remote", 
      icon: MapPin,
      className: "text-purple-400"
    },
    { 
      label: "Duration", 
      value: "12 weeks", 
      icon: Clock,
      className: "text-purple-400"
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <SectionWrapper className="relative py-16 sm:py-24 md:py-32">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div className="max-w-4xl">
            <h1 className="mb-6 sm:mb-8 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-600 animate-sparkle break-words">
              {title}
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-foreground/80 leading-relaxed">{description}</p>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8 lg:gap-12 mt-8 lg:mt-0">
            <div className="w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] lg:w-[300px] lg:h-[300px]">
              {title.includes('Avalanche') && (
                <img 
                  src="/sponsors/avalanchelogo.png" 
                  alt="Avalanche Logo" 
                  className="w-full h-full object-contain"
                />
              )}
              {title.includes('Wire') && (
                <img 
                  src="/sponsors/wirelogo.png" 
                  alt="Wire Network Logo" 
                  className="w-full h-full object-contain"
                />
              )}
              {title.includes('XION') && (
                <img 
                  src="/chains/xion.png" 
                  alt="XION Logo" 
                  className="w-full h-full object-contain"
                />
              )}
              {title.includes('F Ecosystem') && (
                <img 
                  src="/chains/fchain.png" 
                  alt="F Ecosystem Logo" 
                  className="w-full h-full object-contain"
                />
              )}
            </div>
            <div className="h-[2px] w-[200px] sm:h-[250px] sm:w-[2px] lg:h-[300px] bg-gradient-to-r sm:bg-gradient-to-b from-purple-500/50 via-pink-500/50 to-indigo-500/50" />
            <div className="w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] lg:w-[300px] lg:h-[300px]">
              <img 
                src="/logo/Denarii-Logo_Stacked-Vertical -white.svg" 
                alt="Denarii Logo" 
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Program Overview and Details Section */}
      <SectionWrapper className="py-32">
        <div className="grid gap-20 lg:grid-cols-3 items-stretch">
          {/* Overview and Tags */}
          <div className="lg:col-span-2 h-full flex flex-col">
            <Card className="bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20 h-full flex flex-col">
              <CardHeader className="pb-4">
                <CardTitle className="text-4xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-600 leading-tight">
                  Program Overview
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col justify-between space-y-3">
                <div>
                  <p className="whitespace-pre-line text-foreground/90 leading-relaxed text-lg md:text-xl">
                    {overview}
                  </p>
                  {/* Types of Projects Section */}
                  <div className="pt-4 border-t border-primary/20 mt-4">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 rounded-xl bg-gradient-to-r from-purple-500/10 to-indigo-500/10">
                        <Rocket className="h-6 w-6 text-purple-400" />
                      </div>
                      <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-600 drop-shadow-md">
                        Types of Projects We're Looking For
                      </h3>
                    </div>
                    <div className="grid gap-4 p-4 rounded-xl bg-gradient-to-br from-purple-900/10 via-background to-indigo-900/10 shadow-inner border border-primary/10">
                      {/* Map tags to their descriptions for Wire Network */}
                      {title.includes('Wire') ? ([
                        { tag: 'AI Agent-based Projects', desc: 'Platforms for autonomous transactions' },
                        { tag: 'AI-Powered DeFi', desc: 'Lending, trading, and liquidity platforms driven by AI' },
                        { tag: 'Gaming Ecosystems', desc: 'Real-time games requiring high-speed transactions' },
                        { tag: 'Universal Liquidity', desc: 'Cross-chain marketplaces for assets and NFTs' },
                        { tag: 'Developer Tools', desc: 'SDKs, APIs, and modular components' },
                      ].map((item, idx) => (
                        <div key={idx} className="flex flex-col sm:flex-row sm:items-center gap-2">
                          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-600/30 to-indigo-600/30 text-purple-100 font-semibold text-base shadow-md">
                            <CheckCircle className="h-4 w-4 text-purple-400" />
                            {item.tag}
                          </span>
                          <span className="text-foreground/70 text-sm sm:ml-3 sm:mt-0 mt-1">
                            {item.desc}
                          </span>
                        </div>
                      ))) : title.includes('Avalanche') ? ([
                        { tag: 'Financial Services', desc: 'On-chain finance, tokenized assets, and DeFi applications.' },
                        { tag: 'Enterprise Solutions', desc: 'Permissioned blockchains and custom Layer 1s for specific industries.' },
                        { tag: 'Sustainability-Focused Projects', desc: 'Blockchain applications with ESG goals leveraging eco-friendly consensus.' },
                        { tag: 'Gaming & Digital Assets', desc: 'High-speed, low-cost platforms for gaming and NFTs.' },
                        { tag: 'Data-Intensive Applications', desc: 'Robust transaction processing and privacy-focused projects.' },
                      ].map((item, idx) => (
                        <div key={idx} className="flex flex-col sm:flex-row sm:items-center gap-2">
                          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-600/30 to-indigo-600/30 text-purple-100 font-semibold text-base shadow-md">
                            <CheckCircle className="h-4 w-4 text-purple-400" />
                            {item.tag}
                          </span>
                          <span className="text-foreground/70 text-sm sm:ml-3 sm:mt-0 mt-1">
                            {item.desc}
                          </span>
                        </div>
                      ))) : title.includes('XION') ? ([
                        { tag: 'Consumer Platforms', desc: 'E-commerce, payments, and services for non-crypto-native users.' },
                        { tag: 'Social & Community Tools', desc: 'SocialFi apps, creator rewards, and decentralized engagement.' },
                        { tag: 'Entertainment & Gaming', desc: 'Music, gaming, and event platforms with immersive Web3 features.' },
                        { tag: 'Asset Tokenization', desc: 'Real-world asset linking via NFC chips, digital twins, and collectibles.' },
                        { tag: 'Web3 Enhancements', desc: 'Crypto payments, on-chain subscriptions, and privacy-preserving tools.' },
                      ].map((item, idx) => (
                        <div key={idx} className="flex flex-col sm:flex-row sm:items-center gap-2">
                          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-600/30 to-indigo-600/30 text-purple-100 font-semibold text-base shadow-md">
                            <CheckCircle className="h-4 w-4 text-purple-400" />
                            {item.tag}
                          </span>
                          <span className="text-foreground/70 text-sm sm:ml-3 sm:mt-0 mt-1">
                            {item.desc}
                          </span>
                        </div>
                      ))) : title.includes('F Ecosystem') ? ([
                        { tag: 'RWA Protocols', desc: 'Agent-driven access to tokenized real-world assets and collectibles.' },
                        { tag: 'DePIN Infrastructure', desc: 'Decentralized physical networks powering agentic automation.' },
                        { tag: 'Automated Yield', desc: 'Low-risk yield strategies optimized by autonomous agents.' },
                        { tag: 'AI-Powered GTM', desc: 'Agent-led growth, distribution, and go-to-market execution.' },
                        { tag: 'Intelligent Simulations', desc: 'Environments for agent coordination, testing, and strategy modeling.' },
                      ].map((item, idx) => (
                        <div key={idx} className="flex flex-col sm:flex-row sm:items-center gap-2">
                          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-600/30 to-indigo-600/30 text-purple-100 font-semibold text-base shadow-md">
                            <CheckCircle className="h-4 w-4 text-purple-400" />
                            {item.tag}
                          </span>
                          <span className="text-foreground/70 text-sm sm:ml-3 sm:mt-0 mt-1">
                            {item.desc}
                          </span>
                        </div>
                      ))) : (
                        focusAreas.map((area, index) => (
                          <span key={index} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-600/30 to-indigo-600/30 text-purple-100 font-semibold text-base shadow-md">
                            <CheckCircle className="h-4 w-4 text-purple-400" />
                            {area}
                          </span>
                        ))
                      )}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Program Details */}
          <div className="lg:col-span-1">
            <Card className="bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20">
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-xl bg-gradient-to-r from-purple-500/10 to-indigo-500/10">
                    <CalendarDays className="h-6 w-6 text-purple-400" />
                  </div>
                  <CardTitle className="text-2xl">
                    Program Details
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                {programDetails.map((item: ProgramDetail, index: number) => (
                  <div key={index} className="flex items-center gap-4 p-4 rounded-lg bg-gradient-to-r from-purple-500/5 to-indigo-500/5 hover:from-purple-500/10 hover:to-indigo-500/10 transition-all duration-300">
                    <div className="p-2 rounded-lg bg-gradient-to-r from-purple-500/10 to-indigo-500/10">
                      <item.icon className={`h-5 w-5 ${item.className}`} />
                    </div>
                    <div>
                      <p className="font-medium text-foreground text-lg">{item.label}</p>
                      <p className="text-foreground/70">{item.value}</p>
                    </div>
                  </div>
                ))}
                <a 
                  href={applyUrl || "/accelerator#apply"} 
                  className="w-full text-lg px-6 py-4 bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 text-white shadow-lg shadow-purple-900/30 hover:scale-105 transition-all duration-300 mt-4 flex items-center justify-center gap-2 rounded-xl font-semibold"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Apply Now <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </SectionWrapper>

      {/* Technical Details Section */}
      {technicalDetails && (
        <div className="mt-20">
          <Card className="bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20">
            <CardHeader className="pb-4">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-gradient-to-r from-purple-500/10 to-indigo-500/10">
                  <Code className="h-8 w-8 text-purple-400" />
                </div>
                <CardTitle className="text-4xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-600 leading-tight">
                  {technicalDetails.title}
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-8">
              {/* Description */}
              <p className="text-lg text-foreground/80 leading-relaxed">
                {technicalDetails.description}
              </p>

              {/* Core Features */}
              <div className="space-y-4">
                {technicalDetails.features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="p-2 rounded-lg bg-gradient-to-r from-purple-500/10 to-indigo-500/10">
                      <Zap className="h-5 w-5 text-purple-400" />
                    </div>
                    <p className="text-lg text-foreground/90">
                      {feature}
                    </p>
                  </div>
                ))}
              </div>

              {/* Learn More Button */}
              <div className="flex justify-center my-8">
                <CtaButton
                  href={learnMoreUrl || technicalDetails?.website || "#"}
                  className="text-lg px-12 py-5 rounded-xl bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500 text-white font-semibold shadow-xl shadow-purple-900/20 border-none transition-all duration-300 transform hover:scale-105 hover:from-purple-600 hover:to-indigo-600 hover:shadow-pink-500/30 flex items-center gap-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Learn More
                  <ArrowRight className="ml-2 h-6 w-6 group-hover:translate-x-1 transition-transform duration-300" />
                </CtaButton>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Why Build Section */}
      <SectionWrapper className="py-32">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left Column - Text */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h3 className="text-4xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-600">
                  {whyBuildTitle ? whyBuildTitle : `Why Build on ${title.split(' ')[0]}?`}
                </h3>
                <p className="text-xl text-foreground/80 leading-relaxed">
                  {overview.split('\n\n')[0]}
                </p>
              </div>
            </div>

            {/* Right Column - Visual Cards */}
            <div className="grid grid-cols-1 gap-6">
              {highlights.slice(0, 5).map((highlight, index) => (
                <Card 
                  key={index}
                  className="bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20 group"
                >
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-xl bg-gradient-to-r from-purple-500/10 to-indigo-500/10 group-hover:scale-110 transition-transform duration-300">
                        {index === 0 && <Zap className="h-6 w-6 text-purple-400" />}
                        {index === 1 && <Network className="h-6 w-6 text-purple-400" />}
                        {index === 2 && <DollarSign className="h-6 w-6 text-purple-400" />}
                        {index === 3 && <Code className="h-6 w-6 text-purple-400" />}
                        {index === 4 && <Shield className="h-6 w-6 text-purple-400" />}
                      </div>
                      <p className="text-lg group-hover:text-purple-300 transition-colors duration-300">{highlight}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Application CTA */}
      <SectionWrapper className="py-32 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-background" />
        <div className="relative">
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="p-3 rounded-xl bg-gradient-to-r from-purple-500/10 to-indigo-500/10">
              <Target className="h-8 w-8 text-purple-400" />
            </div>
            <h2 className="text-5xl font-bold md:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-600">
              {ctaTitle}
            </h2>
          </div>
          <p className="mx-auto mb-12 max-w-3xl text-xl text-foreground/80 leading-relaxed">
            {ctaDescription}
          </p>
          <CtaButton 
            href={applyUrl || "/accelerator#apply"} 
            className="text-lg px-10 py-7 bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 text-white shadow-lg shadow-purple-900/30 hover:scale-105 transition-all duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            Apply Now <ArrowRight className="ml-2 h-6 w-6" />
          </CtaButton>
        </div>
      </SectionWrapper>
    </>
  );
}
