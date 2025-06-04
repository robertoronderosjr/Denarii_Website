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
        <div className="grid gap-20 lg:grid-cols-3">
          {/* Overview and Tags */}
          <div className="lg:col-span-2">
            <Card className="bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20">
              <CardHeader className="pb-4">
                <CardTitle className="text-4xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-600 leading-tight">
                  Program Overview
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-8">
                <p className="whitespace-pre-line text-foreground/90 leading-relaxed text-xl">
                  {overview}
                </p>
                <div className="flex flex-wrap gap-3">
                  {focusAreas.map((area, index) => (
                    <Badge
                      key={index}
                      variant="outline"
                      className="px-4 py-2 text-lg font-medium bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20 group"
                    >
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-purple-400 group-hover:scale-110 transition-transform duration-300" />
                        {area}
                      </div>
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

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
                    <div className="flex justify-center pt-4">
                      <CtaButton 
                        href={technicalDetails?.website || "#"} 
                        className="text-lg px-10 py-4 bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 text-foreground hover:text-purple-300 shadow-lg hover:shadow-purple-500/20 hover:scale-105 transition-all duration-300"
                      >
                        Learn More <ArrowRight className="ml-2 h-5 w-5" />
                      </CtaButton>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}
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
                <CtaButton 
                  href="/accelerator#apply" 
                  className="w-full text-lg px-6 py-4 bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 text-white shadow-lg shadow-purple-900/30 hover:scale-105 transition-all duration-300"
                >
                  Apply Now <ArrowRight className="ml-2 h-5 w-5" />
                </CtaButton>
              </CardContent>
            </Card>
          </div>
        </div>
      </SectionWrapper>

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
            href="/accelerator#apply" 
            className="text-lg px-10 py-7 bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 text-white shadow-lg shadow-purple-900/30 hover:scale-105 transition-all duration-300"
          >
            Apply Now <ArrowRight className="ml-2 h-6 w-6" />
          </CtaButton>
        </div>
      </SectionWrapper>
    </>
  );
}
