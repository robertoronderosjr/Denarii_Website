"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Users,
  Mountain,
  Rocket,
  Leaf,
  Network,
  Calendar,
  Award,
  Star,
  Clock,
  Sparkles,
  Briefcase,
  Code,
  Megaphone,
  GraduationCap,
  Zap,
  LineChart,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { SectionWrapper } from "@/components/common/section-wrapper";
import { CtaButton } from "@/components/common/cta-button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";

const tracks = [
  {
    id: "avalanche",
    name: "Avalanche Accelerator",
    icon: Mountain,
    description:
      "Building the next generation of applications on the Avalanche ecosystem.",
    dataAiHint: "mountain peak",
  },
  {
    id: "xion",
    name: "XION Accelerator",
    icon: Rocket,
    description:
      "Building the future of consumer-focused blockchain applications.",
    dataAiHint: "rocket launch",
  },
  {
    id: "f-ecosystem",
    name: "F-Ecosystem Accelerator",
    icon: Leaf,
    description:
      "Building sustainable and innovative solutions for the future of finance.",
    dataAiHint: "leaf growth",
  },
  {
    id: "wire-network",
    name: "Wire Network Accelerator",
    icon: Network,
    description:
      "Building the next generation of decentralized network infrastructure and connectivity solutions.",
    dataAiHint: "network nodes",
  },
];

const pastCohorts = [
  {
    name: "Cohort 001",
    year: "2022",
    description: "Pioneering projects in early DeFi and NFT marketplaces.",
    imageUrl: "https://placehold.co/600x400.png",
    dataAiHint: "team success",
  },
  {
    name: "Cohort 002",
    year: "2023",
    description: "Focused on DAO tooling and decentralized identity solutions.",
    imageUrl: "https://placehold.co/600x400.png",
    dataAiHint: "community collaboration",
  },
];

const stats = [
  { label: "Startups Accelerated", value: "15+" },
  { label: "Capital Supported", value: "$3M+" },
  { label: "Total Applicants", value: "1200+" },
  { label: "Ecosystem Partners", value: "50+" },
];

const timeline = [
  {
    phase: "Application",
    duration: "2 Weeks",
    description: "Submit your project and team details",
  },
  {
    phase: "Selection",
    duration: "1 Week",
    description: "Review and interview process",
  },
  {
    phase: "Program",
    duration: "16 Weeks",
    description: "Intensive acceleration program",
  },
  {
    phase: "Demo Day",
    duration: "1 Day",
    description: "Present to investors and partners",
  },
];

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Founder, DeFi Protocol",
    cohort: "Cohort 001",
    quote:
      "The Denarii Labs Accelerator provided us with invaluable mentorship and connections that were crucial for our success.",
    imageUrl: "https://placehold.co/100x100.png",
  },
  {
    name: "Michael Rodriguez",
    role: "CEO, NFT Platform",
    cohort: "Cohort 002",
    quote:
      "The structured program and expert guidance helped us refine our product and secure significant funding.",
    imageUrl: "https://placehold.co/100x100.png",
  },
];

const benefits = [
  {
    icon: Briefcase,
    label: "Direct investment capital",
  },
  {
    icon: Code,
    label: "Technical development support",
  },
  {
    icon: Megaphone,
    label: "Strategic marketing assistance",
  },
  {
    icon: GraduationCap,
    label: "Mentorship from blockchain and business experts",
  },
];

const partnerLogos = Array(8)
  .fill(null)
  .map((_, i) => ({
    src: `https://placehold.co/120x60?text=Logo+${i + 1}`,
    alt: `Partner Logo ${i + 1}`,
  }));

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function AcceleratorPage() {
  const router = useRouter();

  const handleTrackNavigation = (trackId: string) => {
    if (trackId) {
      router.push(`/accelerator/${trackId}`);
    }
  };

  return (
    <main>
      {/* Hero Section (copied exactly from main site, but accelerator-specific) */}
      <section className="py-24 md:py-32 w-full relative overflow-hidden min-h-[90vh] flex items-center bg-black">
        <div className="container px-4 md:px-6 max-w-5xl mx-auto text-center">
          <div className="flex flex-col items-center justify-center space-y-10">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none mb-2">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-600 animate-sparkle">
                Backing the Next Generation
              </span>
              <br />
              <span className="text-white">of Tokenized Startups</span>
            </h1>
            <p className="max-w-2xl text-gray-300 md:text-xl font-medium mb-4">
              Scaling Web3 startups with capital, mentorship, and a world-class
              network. Backed by Red Beard Ventures.
            </p>

            <div className="flex flex-col sm:flex-row gap-5 sm:gap-8 w-full max-w-xl mx-auto">
              <Button
                className="flex-1 bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-bold hover:scale-110 hover:shadow-xl hover:shadow-purple-500/20 transition-all duration-300 text-xl py-8 px-10 min-w-[240px]"
                size="lg"
                asChild
              >
                <Link
                  href="#apply"
                  className="flex items-center justify-center gap-3"
                >
                  <Zap className="h-6 w-6" />
                  Apply to Accelerator
                </Link>
              </Button>
              <Button
                variant="outline"
                className="flex-1 bg-transparent text-white border-purple-600 hover:bg-black hover:border-purple-400 hover:text-white hover:scale-110 hover:shadow-xl hover:shadow-purple-500/20 transition-all duration-300 text-xl py-8 px-10 min-w-[240px]"
                size="lg"
                asChild
              >
                <Link
                  href="#tracks"
                  className="flex items-center justify-center gap-3"
                >
                  <LineChart className="h-6 w-6" />
                  Explore Tracks
                </Link>
              </Button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full mt-16">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center justify-center p-6 bg-gradient-to-br from-gray-800/30 to-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-800 hover:border-purple-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10"
                >
                  <span className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
                    {stat.value}
                  </span>
                  <span className="text-gray-400 text-sm text-center mt-2">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About/Overview Section */}
      <SectionWrapper className="relative z-10 py-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-5xl rounded-3xl bg-background/80 p-8 shadow-xl ring-1 ring-primary/10 backdrop-blur-lg md:p-14"
        >
          <div className="flex flex-col md:flex-row gap-10 items-center">
            {/* Left: Text */}
            <div className="flex-1">
              <h2 className="text-3xl font-bold mb-4 md:text-4xl">
                Accelerator Track
              </h2>
              <p className="mb-4 text-lg text-foreground/90">
                Denarii Labs, powered by Red Beard Ventures, presents a{" "}
                <span className="font-semibold">
                  24-week intensive accelerator program
                </span>{" "}
                designed to drive companies to build on the selected chain or
                ecosystem, focused on developing applications that leverage
                tokens.
              </p>
              <p className="mb-4 text-lg text-foreground/80">
                Our mission is to expand the ecosystem through the strategic
                development of projects that foster real-world adoption and
                activity.
              </p>
              <div className="mb-6">
                <h3 className="font-semibold mb-2 text-primary">
                  Program Benefits:
                </h3>
                <ul className="grid gap-2 md:grid-cols-2">
                  {benefits.map((benefit) => (
                    <li
                      key={benefit.label}
                      className="flex items-center gap-2 text-foreground/90"
                    >
                      <benefit.icon className="h-5 w-5 text-primary" />
                      {benefit.label}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            {/* Right: Logo Card */}
            <div className="flex-1 flex flex-col items-center justify-center gap-6">
              <div className="mb-2 rounded-2xl bg-secondary/40 p-8 shadow-lg">
                <Image
                  src="https://placehold.co/120x120/orange/white?text=RBV"
                  alt="Red Beard Ventures Logo"
                  width={120}
                  height={120}
                  className="mx-auto rounded-full shadow-md"
                />
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-2">
                {partnerLogos.map((logo, i) => (
                  <motion.div
                    key={logo.alt}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.07 }}
                    className="flex items-center justify-center rounded-lg bg-secondary/30 p-2 shadow hover:scale-105 transition-transform"
                  >
                    <Image
                      src={logo.src}
                      alt={logo.alt}
                      width={120}
                      height={60}
                      className="object-contain"
                    />
                  </motion.div>
                ))}
              </div>
              <span className="mt-2 text-xs text-foreground/60">
                Our Partners & Sponsors
              </span>
            </div>
          </div>
        </motion.div>
      </SectionWrapper>

      {/* Stats Section */}
      <SectionWrapper className="bg-secondary/10">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <Card key={stat.label} className="text-center">
              <CardHeader>
                <div className="mx-auto mb-4 rounded-full bg-primary/10 p-3 text-primary">
                  <LineChart className="h-6 w-6" />
                </div>
                <CardTitle className="text-3xl font-bold">
                  {stat.value}
                </CardTitle>
                <CardDescription className="text-lg">
                  {stat.label}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </SectionWrapper>

      {/* Tracks Section */}
      <SectionWrapper>
        <div className="mb-12 flex flex-col items-center justify-between gap-4 md:flex-row">
          <h2 className="text-3xl font-bold md:text-4xl">Explore Our Tracks</h2>
          <div className="w-full md:w-auto md:min-w-[250px]">
            <Select onValueChange={handleTrackNavigation}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Navigate to Track Page" />
              </SelectTrigger>
              <SelectContent>
                {tracks.map((track) => (
                  <SelectItem key={track.id} value={track.id}>
                    {track.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {tracks.map((track) => (
            <Card
              key={track.id}
              className="flex transform flex-col overflow-hidden bg-card transition-all duration-300 hover:shadow-2xl hover:shadow-primary/30 hover:-translate-y-1"
            >
              <CardHeader className="items-center p-6">
                <div className="mb-4 rounded-full bg-primary/10 p-3 text-primary">
                  <track.icon className="h-8 w-8" />
                </div>
                <CardTitle className="text-center text-xl">
                  {track.name}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-grow p-6 pt-0">
                <CardDescription className="text-center text-sm">
                  {track.description}
                </CardDescription>
              </CardContent>
              <CardFooter className="p-6 pt-0">
                <Button variant="link" asChild className="mx-auto text-primary">
                  <Link href={`/accelerator/${track.id}`}>
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </SectionWrapper>

      {/* Timeline Section */}
      <SectionWrapper className="bg-secondary/30">
        <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl">
          Program Timeline
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {timeline.map((item) => (
            <Card key={item.phase} className="relative">
              <CardHeader>
                <CardTitle className="text-xl">{item.phase}</CardTitle>
                <CardDescription className="text-sm font-semibold text-primary">
                  {item.duration}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-foreground/80">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </SectionWrapper>

      {/* Past Cohorts Section */}
      <SectionWrapper id="past-cohorts" className="bg-secondary/30">
        <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl">
          Past Cohorts
        </h2>
        <div className="grid gap-8 md:grid-cols-2">
          {pastCohorts.map((cohort) => (
            <Card
              key={cohort.name}
              className="overflow-hidden bg-card transition-shadow duration-300 hover:shadow-lg hover:shadow-primary/20"
            >
              <Image
                src={cohort.imageUrl}
                alt={cohort.name}
                width={600}
                height={400}
                className="aspect-[16/9] w-full object-cover"
                data-ai-hint={cohort.dataAiHint}
              />
              <CardHeader className="p-6">
                <CardTitle className="text-2xl">
                  {cohort.name} - {cohort.year}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 pt-0">
                <CardDescription>{cohort.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </SectionWrapper>

      {/* Testimonials Section */}
      <SectionWrapper>
        <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl">
          Success Stories
        </h2>
        <div className="grid gap-8 md:grid-cols-2">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.name} className="relative">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <Image
                    src={testimonial.imageUrl}
                    alt={testimonial.name}
                    width={100}
                    height={100}
                    className="rounded-full"
                  />
                  <div>
                    <CardTitle className="text-xl">
                      {testimonial.name}
                    </CardTitle>
                    <CardDescription>
                      {testimonial.role} • {testimonial.cohort}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-lg italic text-foreground/80">
                  "{testimonial.quote}"
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </SectionWrapper>

      {/* Application CTA Section */}
      <SectionWrapper id="apply" className="text-center">
        <h2 className="mb-6 text-3xl font-bold md:text-4xl">
          Ready to Build the Future?
        </h2>
        <p className="mx-auto mb-8 max-w-xl text-lg text-foreground/80">
          Join Cohort 003 and get the support you need to succeed. Applications
          are now open!
        </p>
        <CtaButton href="/application-form">
          {" "}
          {/* Placeholder link */}
          Apply Now <Users className="ml-2 h-5 w-5" />
        </CtaButton>
      </SectionWrapper>
    </main>
  );
}
