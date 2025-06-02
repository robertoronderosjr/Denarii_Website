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
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CtaButton } from "@/components/common/cta-button";

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
}: AcceleratorPageProps) {
  return (
    <>
      {/* Hero Section */}
      <SectionWrapper className="bg-gradient-to-br from-primary/20 to-background">
        <div className="mb-8">
          <Button variant="outline" asChild size="sm">
            <Link href="/accelerator">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Accelerator
            </Link>
          </Button>
        </div>
        <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">
          {title}
        </h1>
        <p className="text-xl text-foreground/80">{description}</p>
      </SectionWrapper>

      {/* Program Overview */}
      <SectionWrapper>
        <div className="grid gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <h2 className="mb-6 text-3xl font-semibold">Program Overview</h2>
            <p className="whitespace-pre-line text-foreground/90 leading-relaxed">
              {overview}
            </p>

            <h3 className="mt-10 mb-4 text-2xl font-semibold">
              Key Focus Areas
            </h3>
            <div className="flex flex-wrap gap-2">
              {focusAreas.map((area, index) => (
                <Badge
                  key={index}
                  variant="secondary"
                  className="px-3 py-1 text-sm"
                >
                  {area}
                </Badge>
              ))}
            </div>

            <h3 className="mt-10 mb-4 text-2xl font-semibold">
              Program Highlights
            </h3>
            <ul className="list-disc space-y-2 pl-5 text-foreground/90">
              {highlights.map((highlight, index) => (
                <li key={index}>{highlight}</li>
              ))}
            </ul>
          </div>

          <div className="space-y-8 lg:col-span-1">
            <Card className="bg-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-xl">
                  <CalendarDays className="h-5 w-5 text-primary" />
                  Program Details
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm text-foreground/80">
                <p>
                  <strong>Duration:</strong> {duration}
                </p>
                <p>
                  <strong>Format:</strong> {format}
                </p>
                <p>
                  <strong>Next Cohort:</strong> {cohort}
                </p>
                <p>
                  <strong>Target:</strong> {target}
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-xl">
                  <Icon className="h-5 w-5 text-primary" />
                  {title} Benefits
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm text-foreground/80">
                {benefits.map((benefit, index) => (
                  <p key={index}>• {benefit}</p>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </SectionWrapper>

      {/* Application CTA */}
      <SectionWrapper className="text-center">
        <h2 className="mb-6 text-3xl font-bold md:text-4xl">{ctaTitle}</h2>
        <p className="mx-auto mb-8 max-w-xl text-lg text-foreground/80">
          {ctaDescription}
        </p>
        <CtaButton href="/accelerator#apply">
          Apply Now <Target className="ml-2 h-5 w-5" />
        </CtaButton>
      </SectionWrapper>
    </>
  );
}
