"use client";

import {
  ArrowRight,
  Lightbulb,
  CheckCircle,
  Milestone,
  FileText,
  ShieldCheck,
  TrendingUp,
  Users,
  BarChart3,
  Network,
  Zap,
  Building,
  Plus,
  ChevronDown,
  Layers,
  Circle,
  Triangle,
  PenLine,
  MessageCircle,
  Calculator,
} from "lucide-react";
import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { SectionWrapper } from "@/components/common/section-wrapper";
import { CtaButton } from "@/components/common/cta-button";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

const services = [
  {
    icon: Lightbulb,
    title: "Tokenomics Design & Strategy",
    description:
      "Crafting sustainable token economies tailored to your project's goals, including supply, distribution, utility, and governance mechanisms.",
  },
  {
    icon: FileText,
    title: "Whitepaper & Litepaper Review",
    description:
      "In-depth analysis and feedback on your project's foundational documents to ensure clarity, coherence, and robustness.",
  },
  {
    icon: ShieldCheck,
    title: "Security & Risk Assessment",
    description:
      "Identifying potential vulnerabilities in your token model and economic design to safeguard against exploits and ensure long-term stability.",
  },
  {
    icon: TrendingUp,
    title: "Incentive Mechanism Design",
    description:
      "Developing effective incentive structures to drive user adoption, network participation, and value accrual for your token holders.",
  },
];

const timelineSteps = [
  {
    id: 1,
    icon: Milestone,
    title: "Discovery & Assessment",
    description:
      "We start by understanding your project's vision, goals, target audience, and existing architecture. Deep dive into your concept and market positioning.",
  },
  {
    id: 2,
    icon: Users,
    title: "Strategic Workshop",
    description:
      "Collaborative sessions to define core token utilities, economic flows, and governance models. We align on key performance indicators for success.",
  },
  {
    id: 3,
    icon: Lightbulb,
    title: "Token Model Design",
    description:
      "Development of a comprehensive tokenomics framework, including supply dynamics, distribution schedules, staking mechanisms, and value capture strategies.",
  },
  {
    id: 4,
    icon: FileText,
    title: "Documentation & Review",
    description:
      "Detailed documentation of the token model. Iterative feedback sessions to refine the design and ensure it meets your project's needs.",
  },
  {
    id: 5,
    icon: CheckCircle,
    title: "Implementation Support & Go-to-Market",
    description:
      "Guidance on smart contract implementation best practices related to tokenomics and support for your launch strategy.",
  },
];

export default function ConsultingPage() {
  // State for expanded cards
  const [expandedCards, setExpandedCards] = useState<{
    [key: string]: boolean;
  }>({
    tokenDesign: false,
    growthVolume: false,
    brandContent: false,
    financialManagement: false,
  });

  // Toggle card expansion
  const toggleCard = (cardId: string) => {
    setExpandedCards((prev) => ({
      ...prev,
      [cardId]: !prev[cardId],
    }));
  };

  return (
    <>
      {/* Split-Section Intro */}
      <section className="py-24">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text */}
            <div className="flex flex-col justify-center max-w-xl mx-auto lg:mx-0">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none mb-8">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-600 animate-sparkle">
                  Tokenomics Consulting Services
                </span>
              </h1>
              <ul className="space-y-6 mb-4">
                <li className="flex items-start gap-4 group transition-all duration-300 cursor-pointer">
                  <div className="rounded-full bg-purple-600/20 p-1.5 mt-1.5 group-hover:bg-purple-600/40 group-hover:scale-110 transition-all duration-300">
                    <CheckCircle className="h-6 w-6 text-purple-400 group-hover:text-purple-300" />
                  </div>
                  <span className="text-2xl text-gray-300 font-medium leading-tight group-hover:text-white group-hover:translate-x-1 transition-all duration-300">
                    Customized tokenomics designs tailored to your project's
                    unique goals
                  </span>
                </li>
                <li className="flex items-start gap-4 group transition-all duration-300 cursor-pointer">
                  <div className="rounded-full bg-purple-600/20 p-1.5 mt-1.5 group-hover:bg-purple-600/40 group-hover:scale-110 transition-all duration-300">
                    <CheckCircle className="h-6 w-6 text-purple-400 group-hover:text-purple-300" />
                  </div>
                  <span className="text-2xl text-gray-300 font-medium leading-tight group-hover:text-white group-hover:translate-x-1 transition-all duration-300">
                    Strategic expertise from Web3 veterans with proven success
                  </span>
                </li>
                <li className="flex items-start gap-4 group transition-all duration-300 cursor-pointer">
                  <div className="rounded-full bg-purple-600/20 p-1.5 mt-1.5 group-hover:bg-purple-600/40 group-hover:scale-110 transition-all duration-300">
                    <CheckCircle className="h-6 w-6 text-purple-400 group-hover:text-purple-300" />
                  </div>
                  <span className="text-2xl text-gray-300 font-medium leading-tight group-hover:text-white group-hover:translate-x-1 transition-all duration-300">
                    Sustainable frameworks that drive long-term value and
                    adoption
                  </span>
                </li>
              </ul>
              <div className="mt-8">
                <Button
                  className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-bold hover:scale-110 hover:shadow-xl hover:shadow-purple-500/20 transition-all duration-300 text-xl py-8 px-10 min-w-[240px]"
                  size="lg"
                  asChild
                >
                  <Link
                    href="#contact"
                    className="flex items-center justify-center gap-3"
                  >
                    <Lightbulb className="h-6 w-6" />
                    Book a Consultation
                  </Link>
                </Button>
              </div>
            </div>

            {/* Right Column - Tokenomics Illustration */}
            <div className="p-8 bg-transparent">
              <div className="aspect-square relative flex items-center justify-center">
                <div className="relative w-full h-full flex items-center justify-center">
                  {/* Central token circle - increased size */}
                  <div className="w-48 h-48 rounded-full bg-gradient-to-br from-purple-900/80 to-indigo-900/80 flex items-center justify-center z-20 shadow-lg shadow-purple-900/30 animate-[pulse_8s_ease-in-out_infinite]">
                    <span className="text-4xl font-bold text-white">TOKEN</span>
                  </div>

                  {/* Connecting lines and orbit */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    {/* Static connecting lines to corners */}
                    <div className="absolute w-full h-full">
                      {/* Line to top-left */}
                      <div className="absolute top-0 left-0 w-1/3 h-1/3 border-t-2 border-l-2 border-blue-500/30 rounded-tl-xl"></div>
                      {/* Line to top-right */}
                      <div className="absolute top-0 right-0 w-1/3 h-1/3 border-t-2 border-r-2 border-indigo-500/30 rounded-tr-xl"></div>
                      {/* Line to bottom-left */}
                      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 border-b-2 border-l-2 border-pink-500/30 rounded-bl-xl"></div>
                      {/* Line to bottom-right */}
                      <div className="absolute bottom-0 right-0 w-1/3 h-1/3 border-b-2 border-r-2 border-purple-500/30 rounded-br-xl"></div>
                    </div>

                    {/* Increased orbit size */}
                    <div className="w-80 h-80 rounded-full border-2 border-dashed border-purple-500/30 animate-[spin_30s_linear_infinite]">
                      {/* Orbit elements - larger and more prominent with slower animation */}
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-500 p-3 rounded-full shadow-lg shadow-blue-500/30 hover:scale-110 transition-all duration-300">
                        <BarChart3 className="h-6 w-6 text-white" />
                      </div>
                      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 bg-purple-500 p-3 rounded-full shadow-lg shadow-purple-500/30 hover:scale-110 transition-all duration-300">
                        <Network className="h-6 w-6 text-white" />
                      </div>
                      <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-indigo-500 p-3 rounded-full shadow-lg shadow-indigo-500/30 hover:scale-110 transition-all duration-300">
                        <Building className="h-6 w-6 text-white" />
                      </div>
                      <div className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 bg-pink-500 p-3 rounded-full shadow-lg shadow-pink-500/30 hover:scale-110 transition-all duration-300">
                        <Zap className="h-6 w-6 text-white" />
                      </div>
                    </div>
                  </div>

                  {/* Extremely slow and subtle breathing effect on labels */}
                  <div className="absolute top-[10%] left-[10%] px-4 py-2 bg-blue-500/90 text-white text-base font-medium rounded-full border border-blue-300/30 shadow-md shadow-blue-500/30 hover:scale-110 transition-all duration-300 animate-[breathe_20s_ease-in-out_infinite]">
                    Supply
                  </div>
                  <div className="absolute bottom-[10%] right-[10%] px-4 py-2 bg-purple-500/90 text-white text-base font-medium rounded-full border border-purple-300/30 shadow-md shadow-purple-500/30 hover:scale-110 transition-all duration-300 animate-[breathe_24s_ease-in-out_infinite_5s]">
                    Utility
                  </div>
                  <div className="absolute top-[10%] right-[10%] px-4 py-2 bg-indigo-500/90 text-white text-base font-medium rounded-full border border-indigo-300/30 shadow-md shadow-indigo-500/30 hover:scale-110 transition-all duration-300 animate-[breathe_22s_ease-in-out_infinite_8s]">
                    Governance
                  </div>
                  <div className="absolute bottom-[10%] left-[10%] px-4 py-2 bg-pink-500/90 text-white text-base font-medium rounded-full border border-pink-300/30 shadow-md shadow-pink-500/30 hover:scale-110 transition-all duration-300 animate-[breathe_26s_ease-in-out_infinite_12s]">
                    Distribution
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Consulting Categories */}
      <section className="py-20">
        <div className="container px-4 md:px-6 mx-auto">
          <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl text-white">
            Core Consulting Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Token Design */}
            <div
              className={`relative h-[340px] perspective-1000 cursor-pointer group`}
              onClick={() => toggleCard("tokenDesign")}
            >
              <div
                className={`relative w-full h-full transition-transform duration-700 transform-style-3d group/card-outer ${
                  expandedCards.tokenDesign ? "rotate-y-180" : ""
                }`}
                style={
                  !expandedCards.tokenDesign ? { willChange: "transform" } : {}
                }
              >
                {/* Slight flip on hover if not flipped */}
                <style jsx>{`
                  .group\/card-outer:hover:not(.rotate-y-180) {
                    transform: perspective(1000px) rotateY(8deg);
                  }
                `}</style>
                {/* Front */}
                <div className="absolute w-full h-full backface-hidden bg-gradient-to-br from-purple-900/10 via-indigo-900/5 to-purple-800/10 rounded-2xl border border-purple-400/30 shadow-xl flex flex-col items-center justify-center p-8 overflow-hidden group/card">
                  {/* Pattern Background */}
                  <div className="absolute inset-0 opacity-5">
                    <div
                      className="absolute inset-0"
                      style={{
                        backgroundImage: `radial-gradient(circle at 1px 1px, rgba(147, 51, 234, 0.3) 1px, transparent 0)`,
                        backgroundSize: "24px 24px",
                      }}
                    ></div>
                    <div
                      className="absolute inset-0"
                      style={{
                        backgroundImage: `linear-gradient(45deg, rgba(147, 51, 234, 0.1) 25%, transparent 25%, transparent 75%, rgba(147, 51, 234, 0.1) 75%, rgba(147, 51, 234, 0.1)), linear-gradient(45deg, rgba(147, 51, 234, 0.1) 25%, transparent 25%, transparent 75%, rgba(147, 51, 234, 0.1) 75%, rgba(147, 51, 234, 0.1))`,
                        backgroundSize: "48px 48px",
                        backgroundPosition: "0 0, 24px 24px",
                      }}
                    ></div>
                  </div>
                  {/* Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-indigo-500/10 opacity-50"></div>

                  <div className="relative z-10 flex flex-col items-center">
                    <div className="rounded-full bg-gradient-to-br from-purple-600/20 to-indigo-600/20 p-7 w-24 h-24 flex items-center justify-center mb-8 group-hover:scale-110 transition-all duration-300">
                      <Lightbulb className="h-12 w-12 text-purple-300 group-hover:text-purple-200 transition-colors duration-300" />
                    </div>
                    <h3 className="text-3xl font-extrabold text-white text-center tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-200 to-indigo-200 group-hover:from-purple-100 group-hover:to-indigo-100 transition-all duration-300">
                      Product & Token Design
                    </h3>
                  </div>
                </div>
                {/* Back */}
                <div className="absolute w-full h-full backface-hidden bg-gradient-to-br from-gray-900/95 via-purple-900/40 to-gray-900/95 rounded-2xl border border-purple-400/20 shadow-lg flex flex-col justify-center p-6 rotate-y-180 backdrop-blur-xs">
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <span className="text-purple-300 text-lg font-bold">
                        •
                      </span>
                      <div>
                        <span className="font-bold text-purple-200">
                          Research & Analysis:
                        </span>
                        <span className="text-white/90 ml-1">
                          Monitor on-chain growth metrics and analyze comparable
                          tokens.
                        </span>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-300 text-lg font-bold">
                        •
                      </span>
                      <div>
                        <span className="font-bold text-purple-200">
                          Utility:
                        </span>
                        <span className="text-white/90 ml-1">
                          Design features that incentivize participation and
                          create value.
                        </span>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-300 text-lg font-bold">
                        •
                      </span>
                      <div>
                        <span className="font-bold text-purple-200">
                          Token Model:
                        </span>
                        <span className="text-white/90 ml-1">
                          Optimize token structures for sustainability and
                          utility.
                        </span>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-300 text-lg font-bold">
                        •
                      </span>
                      <div>
                        <span className="font-bold text-purple-200">
                          Governance:
                        </span>
                        <span className="text-white/90 ml-1">
                          Empower communities with governance models and
                          decision-making tools.
                        </span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Growth & Volume */}
            <div
              className={`relative h-[340px] perspective-1000 cursor-pointer group`}
              onClick={() => toggleCard("growthVolume")}
            >
              <div
                className={`relative w-full h-full transition-transform duration-700 transform-style-3d group/card-outer ${
                  expandedCards.growthVolume ? "rotate-y-180" : ""
                }`}
                style={
                  !expandedCards.growthVolume ? { willChange: "transform" } : {}
                }
              >
                {/* Slight flip on hover if not flipped */}
                <style jsx>{`
                  .group\/card-outer:hover:not(.rotate-y-180) {
                    transform: perspective(1000px) rotateY(8deg);
                  }
                `}</style>
                {/* Front */}
                <div className="absolute w-full h-full backface-hidden bg-gradient-to-br from-purple-900/10 via-indigo-900/5 to-purple-800/10 rounded-2xl border border-purple-400/30 shadow-xl flex flex-col items-center justify-center p-8 overflow-hidden group/card">
                  {/* Pattern Background */}
                  <div className="absolute inset-0 opacity-5">
                    <div
                      className="absolute inset-0"
                      style={{
                        backgroundImage: `radial-gradient(circle at 1px 1px, rgba(147, 51, 234, 0.3) 1px, transparent 0)`,
                        backgroundSize: "24px 24px",
                      }}
                    ></div>
                    <div
                      className="absolute inset-0"
                      style={{
                        backgroundImage: `linear-gradient(45deg, rgba(147, 51, 234, 0.1) 25%, transparent 25%, transparent 75%, rgba(147, 51, 234, 0.1) 75%, rgba(147, 51, 234, 0.1)), linear-gradient(45deg, rgba(147, 51, 234, 0.1) 25%, transparent 25%, transparent 75%, rgba(147, 51, 234, 0.1) 75%, rgba(147, 51, 234, 0.1))`,
                        backgroundSize: "48px 48px",
                        backgroundPosition: "0 0, 24px 24px",
                      }}
                    ></div>
                  </div>
                  {/* Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-indigo-500/10 opacity-50"></div>

                  <div className="relative z-10 flex flex-col items-center">
                    <div className="rounded-full bg-gradient-to-br from-purple-600/20 to-indigo-600/20 p-7 w-24 h-24 flex items-center justify-center mb-8 group-hover:scale-110 transition-all duration-300">
                      <TrendingUp className="h-12 w-12 text-purple-300 group-hover:text-purple-200 transition-colors duration-300" />
                    </div>
                    <h3 className="text-3xl font-extrabold text-white text-center tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-200 to-indigo-200 group-hover:from-purple-100 group-hover:to-indigo-100 transition-all duration-300">
                      Growth and Volume
                    </h3>
                  </div>
                </div>
                {/* Back */}
                <div className="absolute w-full h-full backface-hidden bg-gradient-to-br from-gray-900/95 via-purple-900/40 to-gray-900/95 rounded-2xl border border-purple-400/20 shadow-lg flex flex-col justify-center p-6 rotate-y-180 backdrop-blur-xs">
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <span className="text-purple-300 text-lg font-bold">
                        •
                      </span>
                      <div>
                        <span className="font-bold text-purple-200">
                          Market Making:
                        </span>
                        <span className="text-white/90 ml-1">
                          Liquidity strategies and implementation for healthy
                          trading and price stability.
                        </span>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-300 text-lg font-bold">
                        •
                      </span>
                      <div>
                        <span className="font-bold text-purple-200">
                          Exchange Relations:
                        </span>
                        <span className="text-white/90 ml-1">
                          Listing strategy and management to maximize token
                          accessibility.
                        </span>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-300 text-lg font-bold">
                        •
                      </span>
                      <div>
                        <span className="font-bold text-purple-200">
                          Community Growth:
                        </span>
                        <span className="text-white/90 ml-1">
                          Engagement and retention programs to foster a loyal
                          user base.
                        </span>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-300 text-lg font-bold">
                        •
                      </span>
                      <div>
                        <span className="font-bold text-purple-200">
                          Volume Generation:
                        </span>
                        <span className="text-white/90 ml-1">
                          Sustainable trading strategies to drive consistent
                          token volume.
                        </span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Brand & Content */}
            <div
              className={`relative h-[340px] perspective-1000 cursor-pointer group`}
              onClick={() => toggleCard("brandContent")}
            >
              <div
                className={`relative w-full h-full transition-transform duration-700 transform-style-3d group/card-outer ${
                  expandedCards.brandContent ? "rotate-y-180" : ""
                }`}
                style={
                  !expandedCards.brandContent ? { willChange: "transform" } : {}
                }
              >
                {/* Slight flip on hover if not flipped */}
                <style jsx>{`
                  .group\/card-outer:hover:not(.rotate-y-180) {
                    transform: perspective(1000px) rotateY(8deg);
                  }
                `}</style>
                {/* Front */}
                <div className="absolute w-full h-full backface-hidden bg-gradient-to-br from-purple-900/10 via-indigo-900/5 to-purple-800/10 rounded-2xl border border-purple-400/30 shadow-xl flex flex-col items-center justify-center p-8 overflow-hidden group/card">
                  {/* Pattern Background */}
                  <div className="absolute inset-0 opacity-5">
                    <div
                      className="absolute inset-0"
                      style={{
                        backgroundImage: `radial-gradient(circle at 1px 1px, rgba(147, 51, 234, 0.3) 1px, transparent 0)`,
                        backgroundSize: "24px 24px",
                      }}
                    ></div>
                    <div
                      className="absolute inset-0"
                      style={{
                        backgroundImage: `linear-gradient(45deg, rgba(147, 51, 234, 0.1) 25%, transparent 25%, transparent 75%, rgba(147, 51, 234, 0.1) 75%, rgba(147, 51, 234, 0.1)), linear-gradient(45deg, rgba(147, 51, 234, 0.1) 25%, transparent 25%, transparent 75%, rgba(147, 51, 234, 0.1) 75%, rgba(147, 51, 234, 0.1))`,
                        backgroundSize: "48px 48px",
                        backgroundPosition: "0 0, 24px 24px",
                      }}
                    ></div>
                  </div>
                  {/* Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-indigo-500/10 opacity-50"></div>

                  <div className="relative z-10 flex flex-col items-center">
                    <div className="rounded-full bg-gradient-to-br from-purple-600/20 to-indigo-600/20 p-7 w-24 h-24 flex items-center justify-center mb-8 group-hover:scale-110 transition-all duration-300">
                      <FileText className="h-12 w-12 text-purple-300 group-hover:text-purple-200 transition-colors duration-300" />
                    </div>
                    <h3 className="text-3xl font-extrabold text-white text-center tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-200 to-indigo-200 group-hover:from-purple-100 group-hover:to-indigo-100 transition-all duration-300">
                      Brand and Content
                    </h3>
                  </div>
                </div>
                {/* Back */}
                <div className="absolute w-full h-full backface-hidden bg-gradient-to-br from-gray-900/95 via-purple-900/40 to-gray-900/95 rounded-2xl border border-purple-400/20 shadow-lg flex flex-col justify-center p-6 rotate-y-180 backdrop-blur-xs">
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <span className="text-purple-300 text-lg font-bold">
                        •
                      </span>
                      <div>
                        <span className="font-bold text-purple-200">
                          Brand Identity:
                        </span>
                        <span className="text-white/90 ml-1">
                          Positioning and visual strategy to create a memorable
                          brand.
                        </span>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-300 text-lg font-bold">
                        •
                      </span>
                      <div>
                        <span className="font-bold text-purple-200">
                          Content Strategy:
                        </span>
                        <span className="text-white/90 ml-1">
                          Creation and distribution planning to engage your
                          audience.
                        </span>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-300 text-lg font-bold">
                        •
                      </span>
                      <div>
                        <span className="font-bold text-purple-200">
                          Narrative:
                        </span>
                        <span className="text-white/90 ml-1">
                          Messaging and story frameworks to communicate your
                          vision.
                        </span>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-300 text-lg font-bold">
                        •
                      </span>
                      <div>
                        <span className="font-bold text-purple-200">
                          Community:
                        </span>
                        <span className="text-white/90 ml-1">
                          Engagement and educational content to build a strong
                          community.
                        </span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Token Financial Management */}
            <div
              className={`relative h-[340px] perspective-1000 cursor-pointer group`}
              onClick={() => toggleCard("financialManagement")}
            >
              <div
                className={`relative w-full h-full transition-transform duration-700 transform-style-3d group/card-outer ${
                  expandedCards.financialManagement ? "rotate-y-180" : ""
                }`}
                style={
                  !expandedCards.financialManagement
                    ? { willChange: "transform" }
                    : {}
                }
              >
                {/* Slight flip on hover if not flipped */}
                <style jsx>{`
                  .group\/card-outer:hover:not(.rotate-y-180) {
                    transform: perspective(1000px) rotateY(8deg);
                  }
                `}</style>
                {/* Front */}
                <div className="absolute w-full h-full backface-hidden bg-gradient-to-br from-purple-900/10 via-indigo-900/5 to-purple-800/10 rounded-2xl border border-purple-400/30 shadow-xl flex flex-col items-center justify-center p-8 overflow-hidden group/card">
                  {/* Pattern Background */}
                  <div className="absolute inset-0 opacity-5">
                    <div
                      className="absolute inset-0"
                      style={{
                        backgroundImage: `radial-gradient(circle at 1px 1px, rgba(147, 51, 234, 0.3) 1px, transparent 0)`,
                        backgroundSize: "24px 24px",
                      }}
                    ></div>
                    <div
                      className="absolute inset-0"
                      style={{
                        backgroundImage: `linear-gradient(45deg, rgba(147, 51, 234, 0.1) 25%, transparent 25%, transparent 75%, rgba(147, 51, 234, 0.1) 75%, rgba(147, 51, 234, 0.1)), linear-gradient(45deg, rgba(147, 51, 234, 0.1) 25%, transparent 25%, transparent 75%, rgba(147, 51, 234, 0.1) 75%, rgba(147, 51, 234, 0.1))`,
                        backgroundSize: "48px 48px",
                        backgroundPosition: "0 0, 24px 24px",
                      }}
                    ></div>
                  </div>
                  {/* Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-indigo-500/10 opacity-50"></div>

                  <div className="relative z-10 flex flex-col items-center">
                    <div className="rounded-full bg-gradient-to-br from-purple-600/20 to-indigo-600/20 p-7 w-24 h-24 flex items-center justify-center mb-8 group-hover:scale-110 transition-all duration-300">
                      <BarChart3 className="h-12 w-12 text-purple-300 group-hover:text-purple-200 transition-colors duration-300" />
                    </div>
                    <h3 className="text-3xl font-extrabold text-white text-center tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-200 to-indigo-200 group-hover:from-purple-100 group-hover:to-indigo-100 transition-all duration-300">
                      Token Financial Management
                    </h3>
                  </div>
                </div>
                {/* Back */}
                <div className="absolute w-full h-full backface-hidden bg-gradient-to-br from-gray-900/95 via-purple-900/40 to-gray-900/95 rounded-2xl border border-purple-400/20 shadow-lg flex flex-col justify-center p-6 rotate-y-180 backdrop-blur-xs">
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <span className="text-purple-300 text-lg font-bold">
                        •
                      </span>
                      <div>
                        <span className="font-bold text-purple-200">
                          Treasury:
                        </span>
                        <span className="text-white/90 ml-1">
                          Diversification and optimization of treasury assets
                          for sustainability.
                        </span>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-300 text-lg font-bold">
                        •
                      </span>
                      <div>
                        <span className="font-bold text-purple-200">Risk:</span>
                        <span className="text-white/90 ml-1">
                          Mitigation strategies and planning to safeguard assets
                          and operations.
                        </span>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-300 text-lg font-bold">
                        •
                      </span>
                      <div>
                        <span className="font-bold text-purple-200">
                          Modeling:
                        </span>
                        <span className="text-white/90 ml-1">
                          Scenario planning and analysis to inform strategic
                          decisions.
                        </span>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-300 text-lg font-bold">
                        •
                      </span>
                      <div>
                        <span className="font-bold text-purple-200">
                          Revenue:
                        </span>
                        <span className="text-white/90 ml-1">
                          Sustainable framework development to maximize and
                          diversify revenue.
                        </span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Consulting Timeline Section */}
      <section className="py-24 relative overflow-hidden">
        {/* Background gradient elements */}
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/5 to-transparent opacity-30 pointer-events-none"></div>

        <div className="container px-4 md:px-6 mx-auto relative">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold md:text-4xl text-white mb-4">
              Our Consulting Process
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              A structured approach to designing and implementing effective
              tokenomics solutions
            </p>
          </div>

          {/* Desktop Timeline (hidden on mobile) */}
          <div className="hidden md:block relative">
            {/* Continuous Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-purple-600/80 to-indigo-600/80 rounded-full z-10"></div>

            {timelineSteps.map((step, index) => (
              <div key={step.id} className="relative mb-24 last:mb-0">
                {/* Timeline Node */}
                <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center z-20">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-purple-600 to-indigo-600 shadow-lg shadow-purple-900/30 border-2 border-gray-900 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white text-xl font-bold">
                      {step.id}
                    </span>
                  </div>
                </div>

                {/* Content Grid */}
                <div className="grid grid-cols-2 gap-16 items-center">
                  {/* Left Content - For odd steps */}
                  <div
                    className={
                      index % 2 === 0
                        ? "pr-16"
                        : "opacity-0 pointer-events-none"
                    }
                  >
                    <div className="bg-gradient-to-br from-gray-900/80 to-gray-950/80 backdrop-blur-sm rounded-xl border border-gray-800/50 p-8 shadow-lg hover:shadow-xl hover:shadow-purple-900/10 hover:border-purple-900/30 transition-all duration-300 group">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="rounded-full bg-gradient-to-br from-purple-600/20 to-indigo-600/20 p-3 text-purple-400 group-hover:text-purple-300 transition-colors duration-300">
                          <step.icon className="h-6 w-6" />
                        </div>
                        <h3 className="text-xl font-bold text-white group-hover:text-purple-200 transition-colors duration-300">
                          {step.title}
                        </h3>
                      </div>
                      <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Right Content - For even steps */}
                  <div
                    className={
                      index % 2 === 1
                        ? "pl-16"
                        : "opacity-0 pointer-events-none"
                    }
                  >
                    <div className="bg-gradient-to-br from-gray-900/80 to-gray-950/80 backdrop-blur-sm rounded-xl border border-gray-800/50 p-8 shadow-lg hover:shadow-xl hover:shadow-purple-900/10 hover:border-purple-900/30 transition-all duration-300 group">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="rounded-full bg-gradient-to-br from-purple-600/20 to-indigo-600/20 p-3 text-purple-400 group-hover:text-purple-300 transition-colors duration-300">
                          <step.icon className="h-6 w-6" />
                        </div>
                        <h3 className="text-xl font-bold text-white group-hover:text-purple-200 transition-colors duration-300">
                          {step.title}
                        </h3>
                      </div>
                      <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Timeline (visible only on mobile) */}
          <div className="md:hidden relative">
            {/* Continuous Timeline Line */}
            <div className="absolute left-6 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-600/80 to-indigo-600/80 rounded-full"></div>

            {timelineSteps.map((step) => (
              <div key={step.id} className="relative pl-16 mb-12 last:mb-0">
                {/* Timeline Node */}
                <div className="absolute left-6 transform -translate-x-1/2 flex items-center justify-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-purple-600 to-indigo-600 shadow-lg shadow-purple-900/30 border-2 border-gray-900">
                    <span className="text-white text-base font-bold">
                      {step.id}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="bg-gradient-to-br from-gray-900/80 to-gray-950/80 backdrop-blur-sm rounded-xl border border-gray-800/50 p-6 shadow-lg">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="rounded-full bg-gradient-to-br from-purple-600/20 to-indigo-600/20 p-2 text-purple-400">
                      <step.icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-lg font-bold text-white">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-gray-400 text-sm">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Conceptual Diagram Section */}
      <section className="py-24">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold md:text-4xl text-white mb-4">
              Our Tokenomics Framework
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              We apply a comprehensive framework to design and optimize token
              economies that drive sustainable value creation.
            </p>
          </div>

          <div className="bg-gradient-to-br from-gray-900 to-gray-950 rounded-xl border border-gray-800 p-8 shadow-xl">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
              {/* Left Column - Text */}
              <div className="lg:col-span-1">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Token Value Capture Model
                </h3>
                <p className="text-gray-400 mb-6">
                  Our proprietary framework analyzes how your token captures and
                  distributes value across your ecosystem, ensuring alignment
                  between stakeholders and long-term sustainability.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <div className="rounded-full bg-purple-900/30 p-1 mt-1">
                      <CheckCircle className="h-4 w-4 text-purple-400" />
                    </div>
                    <span className="text-gray-300">
                      Value creation mechanisms
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="rounded-full bg-purple-900/30 p-1 mt-1">
                      <CheckCircle className="h-4 w-4 text-purple-400" />
                    </div>
                    <span className="text-gray-300">
                      Stakeholder incentive alignment
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="rounded-full bg-purple-900/30 p-1 mt-1">
                      <CheckCircle className="h-4 w-4 text-purple-400" />
                    </div>
                    <span className="text-gray-300">
                      Supply & demand equilibrium
                    </span>
                  </li>
                </ul>
              </div>

              {/* Right Column - Diagram */}
              <div className="lg:col-span-2 relative">
                <div className="aspect-[16/9] bg-gray-900 rounded-lg overflow-hidden border border-gray-800 p-4">
                  <div className="h-full w-full flex items-center justify-center relative">
                    {/* Central Protocol Node */}
                    <div className="absolute w-32 h-32 rounded-full bg-gradient-to-br from-purple-600/80 to-indigo-600/80 flex items-center justify-center z-30 border-2 border-gray-800">
                      <span className="text-white font-bold">PROTOCOL</span>
                    </div>

                    {/* Outer Circle */}
                    <div className="absolute w-[90%] h-[90%] rounded-full border-2 border-gray-700/50 border-dashed"></div>

                    {/* Nodes */}
                    <div className="absolute top-[15%] left-[25%] bg-blue-600/80 rounded-lg p-3 shadow-lg shadow-blue-900/30 border border-gray-800">
                      <span className="text-white font-medium">Users</span>
                    </div>
                    <div className="absolute top-[15%] right-[25%] bg-green-600/80 rounded-lg p-3 shadow-lg shadow-green-900/30 border border-gray-800">
                      <span className="text-white font-medium">Stakers</span>
                    </div>
                    <div className="absolute bottom-[15%] left-[25%] bg-amber-600/80 rounded-lg p-3 shadow-lg shadow-amber-900/30 border border-gray-800">
                      <span className="text-white font-medium">Treasury</span>
                    </div>
                    <div className="absolute bottom-[15%] right-[25%] bg-pink-600/80 rounded-lg p-3 shadow-lg shadow-pink-900/30 border border-gray-800">
                      <span className="text-white font-medium">Governance</span>
                    </div>

                    {/* Connection Lines */}
                    <svg
                      className="absolute inset-0 w-full h-full"
                      viewBox="0 0 400 225"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M200 112.5 L100 70"
                        stroke="rgba(147, 51, 234, 0.5)"
                        strokeWidth="2"
                      />
                      <path
                        d="M200 112.5 L300 70"
                        stroke="rgba(147, 51, 234, 0.5)"
                        strokeWidth="2"
                      />
                      <path
                        d="M200 112.5 L100 155"
                        stroke="rgba(147, 51, 234, 0.5)"
                        strokeWidth="2"
                      />
                      <path
                        d="M200 112.5 L300 155"
                        stroke="rgba(147, 51, 234, 0.5)"
                        strokeWidth="2"
                      />
                    </svg>

                    {/* Flow Indicators */}
                    <div className="absolute top-[40%] left-[35%] text-purple-400 text-xs">
                      Value Flow
                    </div>
                    <div className="absolute top-[40%] right-[35%] text-purple-400 text-xs">
                      Rewards
                    </div>
                    <div className="absolute bottom-[40%] left-[35%] text-purple-400 text-xs">
                      Fees
                    </div>
                    <div className="absolute bottom-[40%] right-[35%] text-purple-400 text-xs">
                      Voting
                    </div>
                  </div>
                </div>
                <div className="text-center mt-4 text-gray-500 text-sm">
                  A simplified view of token value flows in a well-designed
                  tokenomics system
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section with Credibility Tagline */}
      <section id="contact" className="py-24">
        <div className="container px-4 md:px-6 mx-auto text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold md:text-4xl mb-6 text-white">
              Ready to Elevate Your Tokenomics?
            </h2>
            <p className="text-xl text-gray-300 mb-10">
              Let's discuss how our expert consultants can help your project
              succeed. Schedule a free initial consultation today.
            </p>
            <div>
              <Button
                className="bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 text-white text-lg py-6 px-10 rounded-lg shadow-lg shadow-purple-900/30 transition-all duration-300"
                size="lg"
                asChild
              >
                <Link href="/insights#contact-form">
                  Book a Consultation <Lightbulb className="ml-2 h-5 w-5" />
                </Link>
              </Button>

              <p className="mt-8 text-gray-400 text-sm font-medium">
                Trusted by protocols across 4+ ecosystems and backed by Red
                Beard Ventures
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
