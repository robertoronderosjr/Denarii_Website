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
  CheckCircle,
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
    id: "modular",
    name: "Modular",
    logo: "https://placehold.co/100x100?text=Modular",
    description: "Accelerating modular blockchain infrastructure and tooling.",
    link: "/accelerator/modular",
  },
  {
    id: "app-chain",
    name: "App Chain",
    logo: "https://placehold.co/100x100?text=App+Chain",
    description:
      "Supporting the next wave of application-specific blockchains.",
    link: "/accelerator/app-chain",
  },
  {
    id: "consumer",
    name: "Consumer",
    logo: "https://placehold.co/100x100?text=Consumer",
    description: "Empowering consumer-facing Web3 products and platforms.",
    link: "/accelerator/consumer",
  },
  {
    id: "ai",
    name: "AI",
    logo: "https://placehold.co/100x100?text=AI",
    description:
      "Accelerating the intersection of AI and blockchain innovation.",
    link: "/accelerator/ai",
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

const programBenefits = [
  "Capital investment",
  "Technical development support",
  "Strategic marketing",
  "Expert mentorship",
];

const chainSponsors = [
  { name: "Avalanche", logo: "https://placehold.co/120x60?text=Avalanche" },
  {
    name: "Wire Network",
    logo: "https://placehold.co/120x60?text=Wire+Network",
  },
  { name: "Xion", logo: "https://placehold.co/120x60?text=Xion" },
  { name: "FLOW", logo: "https://placehold.co/120x60?text=FLOW" },
  { name: "Celo", logo: "https://placehold.co/120x60?text=Celo" },
  { name: "Futureverse", logo: "https://placehold.co/120x60?text=Futureverse" },
  { name: "Faraway", logo: "https://placehold.co/120x60?text=Faraway" },
  { name: "Fenwick", logo: "https://placehold.co/120x60?text=Fenwick" },
  { name: "Hedgy", logo: "https://placehold.co/120x60?text=Hedgy" },
  { name: "Kairon Labs", logo: "https://placehold.co/120x60?text=Kairon+Labs" },
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

const programHighlights = [
  "Cohort-based, founder-first accelerator",
  "Access to capital, mentorship, and top-tier partners",
  "Hands-on support for tokenomics, go-to-market, and growth",
  "Focus on Web3, DeFi, consumer, modular, and AI tracks",
];

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

      {/* About/Overview Section - Concise Copy, Chain Logos Right */}
      <SectionWrapper className="py-20">
        <div className="mx-auto max-w-6xl rounded-3xl bg-gradient-to-br from-gray-900/80 to-gray-950/90 border border-purple-700/20 shadow-2xl p-0 md:p-0 flex flex-col md:flex-row items-stretch overflow-hidden">
          {/* Left: Concise Copy */}
          <div className="flex-1 p-8 md:p-14 flex flex-col justify-center gap-6">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-1 tracking-tight">
              Accelerator Track
            </h2>
            <h3 className="text-lg font-medium text-purple-200 mb-4">
              Backing visionary startups building real utility across leading
              blockchain ecosystems.
            </h3>
            <p className="text-lg text-gray-200 mb-2 leading-relaxed max-w-xl">
              Denarii Labs, in partnership with Red Beard Ventures, offers a
              24-week accelerator driving projects to build meaningful,
              token-powered applications on partner chains.
            </p>
            <div>
              <span className="font-semibold text-white mb-2 block">
                Program Benefits:
              </span>
              <ul className="flex flex-col gap-2 mt-1">
                {programBenefits.map((benefit, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-2 text-gray-300 text-base font-medium"
                  >
                    <span className="text-purple-400 text-lg">•</span>
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {/* Right: Chain Sponsors Grid */}
          <div className="flex-1 min-h-[320px] bg-gradient-to-br from-purple-900/30 to-indigo-900/30 flex flex-col items-center justify-center p-8 md:p-14">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 w-full max-w-xs md:max-w-sm lg:max-w-md">
              {chainSponsors.map((sponsor) => (
                <div
                  key={sponsor.name}
                  className="flex items-center justify-center bg-gray-900/60 rounded-xl p-4 shadow hover:scale-105 hover:shadow-lg transition-transform duration-200"
                >
                  <Image
                    src={sponsor.logo}
                    alt={sponsor.name + " Logo"}
                    width={120}
                    height={60}
                    className="object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Cohorts & Tracks Section */}
      <section className="py-20 bg-black">
        <div className="container px-4 md:px-6 max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold md:text-4xl text-white mb-12 text-center">
            Cohorts & Tracks
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {tracks.map((track) => (
              <motion.a
                key={track.id}
                href={track.link}
                className="group relative rounded-2xl bg-gradient-to-br from-gray-900/70 to-gray-950/80 border border-purple-700/20 p-8 flex flex-col items-center justify-center shadow-xl transition-all duration-200 hover:shadow-2xl hover:border-purple-400/40 cursor-pointer min-h-[260px]"
                whileHover={{ scale: 1.04 }}
              >
                <div className="relative z-10 flex flex-col items-center justify-center w-full h-full">
                  <Image
                    src={track.logo}
                    alt={track.name + " Logo"}
                    width={80}
                    height={80}
                    className="mb-6 rounded-xl shadow-lg"
                  />
                  <h3 className="text-xl font-bold text-white mb-2">
                    {track.name}
                  </h3>
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileHover={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 flex items-center justify-center bg-black/90 rounded-2xl px-6 py-4 text-center text-gray-200 text-base font-medium opacity-0 group-hover:opacity-100 group-hover:backdrop-blur-sm transition-all duration-300"
                  >
                    {track.description}
                  </motion.div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

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
