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
  };
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
}: AcceleratorPageProps) {
  return (
    <>
      {/* Hero Section */}
      <SectionWrapper className="relative overflow-hidden bg-gradient-to-br from-primary/20 via-primary/10 to-background py-32">
        <div className="absolute inset-0 bg-grid-white/10 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]" />
        <div className="relative">
          <div className="mb-12">
            <Button variant="outline" asChild size="sm" className="hover:bg-primary/10 transition-colors">
              <Link href="/accelerator">
                <ArrowLeft className="mr-2 h-4 w-4" /> Back to Accelerator
              </Link>
            </Button>
          </div>
          <div className="max-w-4xl">
            <h1 className="mb-8 text-6xl font-bold tracking-tight sm:text-7xl bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-600 animate-sparkle">
              {title}
            </h1>
            <p className="text-2xl text-foreground/80 leading-relaxed">{description}</p>
          </div>
        </div>
      </SectionWrapper>

      {/* Program Overview */}
      <SectionWrapper className="py-32">
        <div className="grid gap-20 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-20">
            {/* Overview Card */}
            <Card className="bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20">
              <CardHeader>
                <CardTitle className="text-4xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-600">
                  Program Overview
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="whitespace-pre-line text-foreground/90 leading-relaxed text-xl">
                  {overview}
                </p>
              </CardContent>
            </Card>

            {/* Focus Areas Section */}
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-gradient-to-r from-purple-500/10 to-indigo-500/10">
                  <Star className="h-8 w-8 text-purple-400" />
                </div>
                <h3 className="text-3xl font-semibold">
                  Key Focus Areas
                </h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {focusAreas.map((area, index) => (
                  <Card 
                    key={index}
                    className="bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20 group"
                  >
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-gradient-to-r from-purple-500/10 to-indigo-500/10 group-hover:scale-110 transition-transform duration-300">
                          <CheckCircle className="h-5 w-5 text-purple-400" />
                        </div>
                        <p className="text-lg font-medium group-hover:text-purple-300 transition-colors duration-300">{area}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Highlights Section */}
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-gradient-to-r from-purple-500/10 to-indigo-500/10">
                  <Rocket className="h-8 w-8 text-purple-400" />
                </div>
                <h3 className="text-3xl font-semibold">
                  Program Highlights
                </h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {highlights.map((highlight, index) => (
                  <Card 
                    key={index}
                    className="bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20 group"
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="p-2 rounded-lg bg-gradient-to-r from-purple-500/10 to-indigo-500/10 group-hover:scale-110 transition-transform duration-300">
                          <Shield className="h-5 w-5 text-purple-400" />
                        </div>
                        <p className="text-lg group-hover:text-purple-300 transition-colors duration-300">{highlight}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-8 lg:col-span-1">
            {/* Program Details Card */}
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
                {[
                  { label: "Duration", value: duration, icon: Clock },
                  { label: "Format", value: format, icon: Users },
                  { label: "Next Cohort", value: cohort, icon: CalendarDays },
                  { label: "Target", value: target, icon: Target },
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-4 p-4 rounded-lg bg-gradient-to-r from-purple-500/5 to-indigo-500/5 hover:from-purple-500/10 hover:to-indigo-500/10 transition-all duration-300">
                    <div className="p-2 rounded-lg bg-gradient-to-r from-purple-500/10 to-indigo-500/10">
                      <item.icon className="h-5 w-5 text-purple-400" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground text-lg">{item.label}</p>
                      <p className="text-foreground/70">{item.value}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Benefits Card */}
            <Card className="bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20">
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-xl bg-gradient-to-r from-purple-500/10 to-indigo-500/10">
                    <Icon className="h-6 w-6 text-purple-400" />
                  </div>
                  <CardTitle className="text-2xl">
                    {title} Benefits
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 rounded-lg bg-gradient-to-r from-purple-500/5 to-indigo-500/5 hover:from-purple-500/10 hover:to-indigo-500/10 transition-all duration-300 group">
                    <div className="p-2 rounded-lg bg-gradient-to-r from-purple-500/10 to-indigo-500/10 group-hover:scale-110 transition-transform duration-300">
                      <CheckCircle className="h-5 w-5 text-purple-400" />
                    </div>
                    <p className="text-lg group-hover:text-purple-300 transition-colors duration-300">{benefit}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </SectionWrapper>

      {/* Technical Details Section */}
      {technicalDetails && (
        <SectionWrapper className="py-32 bg-gradient-to-br from-primary/5 to-background">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 rounded-xl bg-gradient-to-r from-purple-500/10 to-indigo-500/10">
                <Code className="h-8 w-8 text-purple-400" />
              </div>
              <h2 className="text-5xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-600">
                {technicalDetails.title}
              </h2>
            </div>
            <Card className="bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20 mb-12">
              <CardContent className="p-8">
                <p className="text-xl text-foreground/80 leading-relaxed">
                  {technicalDetails.description}
                </p>
              </CardContent>
            </Card>
            <div className="grid gap-6 md:grid-cols-2">
              {technicalDetails.features.map((feature, index) => (
                <Card 
                  key={index} 
                  className="bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20 group"
                >
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-2 rounded-lg bg-gradient-to-r from-purple-500/10 to-indigo-500/10 group-hover:scale-110 transition-transform duration-300">
                        <Zap className="h-5 w-5 text-purple-400" />
                      </div>
                      <p className="text-lg group-hover:text-purple-300 transition-colors duration-300">{feature}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </SectionWrapper>
      )}

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
