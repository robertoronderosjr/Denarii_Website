"use client";

import Image from 'next/image';
import { ArrowRight, Handshake, Users, Rocket, FileText, Shield, Building, CreditCard, BarChart3, UserCheck, Wrench, HardDrive, Briefcase, Calculator, Lock, Link as LinkIcon, Scale, Code, Server, TrendingUp, Repeat, Palette, Cpu, Star, CheckCircle, Globe, Zap, Network } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { SectionWrapper } from '@/components/common/section-wrapper';
import { CtaButton } from '@/components/common/cta-button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useState } from 'react';

const partnerCategories = {
  "cloud-credits": {
    name: "Cloud Credits",
    icon: Cpu,
    color: "from-blue-500 to-cyan-500",
    description: "Cloud infrastructure and computing resources",
    partners: [
      { name: "AWS Credits", logoUrl: "https://placehold.co/150x60/1f2937/ffffff?text=AWS", description: "Amazon Web Services cloud credits" },
      { name: "Google Cloud", logoUrl: "https://placehold.co/150x60/1f2937/ffffff?text=GCP", description: "Google Cloud Platform credits" },
      { name: "Azure Credits", logoUrl: "https://placehold.co/150x60/1f2937/ffffff?text=Azure", description: "Microsoft Azure cloud services" },
    ]
  },
  "banking": {
    name: "Banking / Financial",
    icon: Building,
    color: "from-green-500 to-emerald-500",
    description: "Financial services and banking solutions",
    partners: [
      { name: "Mercury Bank", logoUrl: "https://placehold.co/150x60/1f2937/ffffff?text=Mercury", description: "Banking for startups" },
      { name: "Silicon Valley Bank", logoUrl: "https://placehold.co/150x60/1f2937/ffffff?text=SVB", description: "Innovation banking" },
      { name: "Brex", logoUrl: "https://placehold.co/150x60/1f2937/ffffff?text=Brex", description: "Corporate credit cards" },
    ]
  },
  "cap-table": {
    name: "Cap Table Management",
    icon: BarChart3,
    color: "from-purple-500 to-violet-500",
    description: "Equity and cap table management platforms",
    partners: [
      { name: "Carta", logoUrl: "https://placehold.co/150x60/1f2937/ffffff?text=Carta", description: "Equity management platform" },
      { name: "Pulley", logoUrl: "https://placehold.co/150x60/1f2937/ffffff?text=Pulley", description: "Cap table management" },
      { name: "AngelList", logoUrl: "https://placehold.co/150x60/1f2937/ffffff?text=AngelList", description: "Startup equity platform" },
    ]
  },
  "marketing": {
    name: "Marketing / Sales",
    icon: Palette,
    color: "from-pink-500 to-rose-500",
    description: "Marketing and sales automation tools",
    partners: [
      { name: "HubSpot", logoUrl: "https://placehold.co/150x60/1f2937/ffffff?text=HubSpot", description: "CRM and marketing platform" },
      { name: "Salesforce", logoUrl: "https://placehold.co/150x60/1f2937/ffffff?text=Salesforce", description: "Customer relationship management" },
      { name: "Mailchimp", logoUrl: "https://placehold.co/150x60/1f2937/ffffff?text=Mailchimp", description: "Email marketing platform" },
    ]
  },
  "payroll": {
    name: "Payroll / HR / Compliance",
    icon: UserCheck,
    color: "from-orange-500 to-amber-500",
    description: "Human resources and compliance solutions",
    partners: [
      { name: "Gusto", logoUrl: "https://placehold.co/150x60/1f2937/ffffff?text=Gusto", description: "Payroll and HR platform" },
      { name: "Rippling", logoUrl: "https://placehold.co/150x60/1f2937/ffffff?text=Rippling", description: "HR management system" },
      { name: "BambooHR", logoUrl: "https://placehold.co/150x60/1f2937/ffffff?text=BambooHR", description: "Human resources software" },
    ]
  },
  "tech": {
    name: "Tech",
    icon: Wrench,
    color: "from-indigo-500 to-blue-500",
    description: "Technology tools and development platforms",
    partners: [
      { name: "GitHub", logoUrl: "https://placehold.co/150x60/1f2937/ffffff?text=GitHub", description: "Code repository platform" },
      { name: "Vercel", logoUrl: "https://placehold.co/150x60/1f2937/ffffff?text=Vercel", description: "Frontend deployment platform" },
      { name: "Notion", logoUrl: "https://placehold.co/150x60/1f2937/ffffff?text=Notion", description: "Workspace and documentation" },
    ]
  },
  "hardware": {
    name: "Hardware",
    icon: HardDrive,
    color: "from-gray-500 to-slate-500",
    description: "Hardware and infrastructure solutions",
    partners: [
      { name: "Dell Technologies", logoUrl: "https://placehold.co/150x60/1f2937/ffffff?text=Dell", description: "Enterprise hardware solutions" },
      { name: "HP Enterprise", logoUrl: "https://placehold.co/150x60/1f2937/ffffff?text=HPE", description: "Hardware infrastructure" },
      { name: "Lenovo", logoUrl: "https://placehold.co/150x60/1f2937/ffffff?text=Lenovo", description: "Computing hardware" },
    ]
  },
  "productivity": {
    name: "Productivity",
    icon: Briefcase,
    color: "from-teal-500 to-cyan-500",
    description: "Productivity and collaboration tools",
    partners: [
      { name: "Slack", logoUrl: "https://placehold.co/150x60/1f2937/ffffff?text=Slack", description: "Team communication platform" },
      { name: "Zoom", logoUrl: "https://placehold.co/150x60/1f2937/ffffff?text=Zoom", description: "Video conferencing" },
      { name: "Asana", logoUrl: "https://placehold.co/150x60/1f2937/ffffff?text=Asana", description: "Project management" },
    ]
  },
  "insurance": {
    name: "Insurance / Tax",
    icon: Calculator,
    color: "from-yellow-500 to-orange-500",
    description: "Insurance and tax services",
    partners: [
      { name: "Pilot", logoUrl: "https://placehold.co/150x60/1f2937/ffffff?text=Pilot", description: "Bookkeeping and tax services" },
      { name: "Embroker", logoUrl: "https://placehold.co/150x60/1f2937/ffffff?text=Embroker", description: "Business insurance" },
      { name: "TaxJar", logoUrl: "https://placehold.co/150x60/1f2937/ffffff?text=TaxJar", description: "Sales tax automation" },
    ]
  },
  "cybersecurity": {
    name: "Cybersecurity",
    icon: Lock,
    color: "from-red-500 to-pink-500",
    description: "Security and protection services",
    partners: [
      { name: "CrowdStrike", logoUrl: "https://placehold.co/150x60/1f2937/ffffff?text=CrowdStrike", description: "Endpoint protection" },
      { name: "1Password", logoUrl: "https://placehold.co/150x60/1f2937/ffffff?text=1Password", description: "Password management" },
      { name: "Okta", logoUrl: "https://placehold.co/150x60/1f2937/ffffff?text=Okta", description: "Identity management" },
    ]
  },
  "chains": {
    name: "Chains / L1s / L2s",
    icon: LinkIcon,
    color: "from-purple-500 to-indigo-500",
    description: "Blockchain networks and layer solutions",
    partners: [
      { name: "Ethereum", logoUrl: "https://placehold.co/150x60/1f2937/ffffff?text=Ethereum", description: "Leading blockchain platform" },
      { name: "Polygon", logoUrl: "https://placehold.co/150x60/1f2937/ffffff?text=Polygon", description: "Ethereum scaling solution" },
      { name: "Arbitrum", logoUrl: "https://placehold.co/150x60/1f2937/ffffff?text=Arbitrum", description: "Layer 2 scaling solution" },
    ]
  },
  "law-firms": {
    name: "Law Firms",
    icon: Scale,
    color: "from-blue-600 to-indigo-600",
    description: "Legal services and compliance",
    partners: [
      { name: "Cooley LLP", logoUrl: "https://placehold.co/150x60/1f2937/ffffff?text=Cooley", description: "Technology law firm" },
      { name: "Wilson Sonsini", logoUrl: "https://placehold.co/150x60/1f2937/ffffff?text=WSGR", description: "Corporate law specialists" },
      { name: "Fenwick & West", logoUrl: "https://placehold.co/150x60/1f2937/ffffff?text=Fenwick", description: "Technology legal services" },
    ]
  },
  "dev-studios": {
    name: "Dev Studios / Auditors",
    icon: Code,
    color: "from-green-600 to-teal-600",
    description: "Development and security audit services",
    partners: [
      { name: "OpenZeppelin", logoUrl: "https://placehold.co/150x60/1f2937/ffffff?text=OpenZeppelin", description: "Smart contract security" },
      { name: "ConsenSys Diligence", logoUrl: "https://placehold.co/150x60/1f2937/ffffff?text=ConsenSys", description: "Blockchain security audits" },
      { name: "Trail of Bits", logoUrl: "https://placehold.co/150x60/1f2937/ffffff?text=TrailOfBits", description: "Security research and auditing" },
    ]
  },
  "infra": {
    name: "Infra (RPC, Nodes, Oracles)",
    icon: Server,
    color: "from-slate-600 to-gray-600",
    description: "Blockchain infrastructure services",
    partners: [
      { name: "Alchemy", logoUrl: "https://placehold.co/150x60/1f2937/ffffff?text=Alchemy", description: "Blockchain development platform" },
      { name: "Infura", logoUrl: "https://placehold.co/150x60/1f2937/ffffff?text=Infura", description: "Ethereum infrastructure" },
      { name: "Chainlink", logoUrl: "https://placehold.co/150x60/1f2937/ffffff?text=Chainlink", description: "Decentralized oracle network" },
    ]
  },
  "market-makers": {
    name: "Market Makers / OTC Desks",
    icon: TrendingUp,
    color: "from-emerald-600 to-green-600",
    description: "Trading and liquidity services",
    partners: [
      { name: "Jump Trading", logoUrl: "https://placehold.co/150x60/1f2937/ffffff?text=Jump", description: "Algorithmic trading firm" },
      { name: "Cumberland", logoUrl: "https://placehold.co/150x60/1f2937/ffffff?text=Cumberland", description: "Crypto trading and market making" },
      { name: "Wintermute", logoUrl: "https://placehold.co/150x60/1f2937/ffffff?text=Wintermute", description: "Digital asset market maker" },
    ]
  },
  "exchanges": {
    name: "Exchanges",
    icon: Repeat,
    color: "from-orange-600 to-red-600",
    description: "Cryptocurrency exchanges and trading platforms",
    partners: [
      { name: "Coinbase", logoUrl: "https://placehold.co/150x60/1f2937/ffffff?text=Coinbase", description: "Leading crypto exchange" },
      { name: "Binance", logoUrl: "https://placehold.co/150x60/1f2937/ffffff?text=Binance", description: "Global crypto exchange" },
      { name: "Kraken", logoUrl: "https://placehold.co/150x60/1f2937/ffffff?text=Kraken", description: "Secure crypto trading" },
    ]
  },
  "token-tools": {
    name: "Token Tools",
    icon: Zap,
    color: "from-violet-600 to-purple-600",
    description: "Analytics, staking, bridges, and wallet solutions",
    partners: [
      { name: "Dune Analytics", logoUrl: "https://placehold.co/150x60/1f2937/ffffff?text=Dune", description: "Blockchain analytics platform" },
      { name: "MetaMask", logoUrl: "https://placehold.co/150x60/1f2937/ffffff?text=MetaMask", description: "Web3 wallet and gateway" },
      { name: "Lido", logoUrl: "https://placehold.co/150x60/1f2937/ffffff?text=Lido", description: "Liquid staking protocol" },
    ]
  },
  "design-agencies": {
    name: "Design / Marketing Agencies",
    icon: Palette,
    color: "from-pink-600 to-rose-600",
    description: "Creative and marketing agency services",
    partners: [
      { name: "IDEO", logoUrl: "https://placehold.co/150x60/1f2937/ffffff?text=IDEO", description: "Design and innovation consultancy" },
      { name: "Pentagram", logoUrl: "https://placehold.co/150x60/1f2937/ffffff?text=Pentagram", description: "Design consultancy" },
      { name: "R/GA", logoUrl: "https://placehold.co/150x60/1f2937/ffffff?text=R/GA", description: "Digital agency" },
    ]
  },
  "ai-compute": {
    name: "AI Compute",
    icon: Cpu,
    color: "from-cyan-600 to-blue-600",
    description: "AI and machine learning compute resources",
    partners: [
      { name: "NVIDIA", logoUrl: "https://placehold.co/150x60/1f2937/ffffff?text=NVIDIA", description: "AI computing platform" },
      { name: "RunPod", logoUrl: "https://placehold.co/150x60/1f2937/ffffff?text=RunPod", description: "GPU cloud computing" },
      { name: "Lambda Labs", logoUrl: "https://placehold.co/150x60/1f2937/ffffff?text=Lambda", description: "AI infrastructure" },
    ]
  }
};

type PartnerCategoryKey = keyof typeof partnerCategories;

const fadeInUp = {
  initial: { opacity: 0, y: 32 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: "easeOut" },
};

const stagger = {
  animate: {
    transition: { staggerChildren: 0.12 },
  },
};

export default function PartnersPage() {
  const [selectedCategory, setSelectedCategory] = useState<PartnerCategoryKey>("cloud-credits");

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="py-24 md:py-32 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-indigo-900/20" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl" />
        
        <div className="container px-4 md:px-6 mx-auto relative">
          <motion.div
            initial="initial"
            animate="animate"
            variants={stagger}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div variants={fadeInUp} className="flex items-center justify-center gap-4 mb-8">
              <div className="p-3 rounded-xl bg-gradient-to-r from-purple-500/10 to-indigo-500/10 border border-purple-500/20">
                <Handshake className="h-8 w-8 text-purple-400" />
              </div>
              <div className="h-1 w-16 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full" />
            </motion.div>
            
            <motion.h1 variants={fadeInUp} className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-8">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400">
                Preferred Partner Network
              </span>
            </motion.h1>
            
            <motion.p variants={fadeInUp} className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-12">
              Connecting innovative Web3 projects with industry-leading partners across every aspect of building and scaling a successful startup. From cloud credits to legal services, we've got you covered.
            </motion.p>

            {/* Stats */}
            <motion.div variants={fadeInUp} className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
              {[
                { value: "20+", label: "Categories" },
                { value: "100+", label: "Partners" },
                { value: "$2M+", label: "Credits Available" },
                { value: "50+", label: "Startups Supported" },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-400 text-sm uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Partner Categories Section */}
      <section className="py-24">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold md:text-4xl text-white mb-4">
              Partner Categories
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Explore our comprehensive network of partners across all the essential services your startup needs
            </p>
          </div>

          {/* Category Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
            {(Object.keys(partnerCategories) as PartnerCategoryKey[]).map((key) => {
              const category = partnerCategories[key];
              const isSelected = selectedCategory === key;
              
              return (
                <motion.div
                  key={key}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Card 
                    className={`group cursor-pointer transition-all duration-300 border-2 ${
                      isSelected 
                        ? 'border-purple-500/50 bg-gradient-to-br from-purple-900/30 to-indigo-900/30 shadow-lg shadow-purple-500/20' 
                        : 'border-gray-800/50 bg-gradient-to-br from-gray-900/80 to-gray-950/80 hover:border-purple-500/30'
                    }`}
                    onClick={() => setSelectedCategory(key)}
                  >
                    <CardContent className="p-6 text-center">
                      <div className={`inline-flex p-4 rounded-xl mb-4 bg-gradient-to-r ${category.color} bg-opacity-10 border border-opacity-20`}>
                        <category.icon className={`h-8 w-8 ${isSelected ? 'text-white' : 'text-gray-300 group-hover:text-white'} transition-colors duration-300`} />
                      </div>
                      <h3 className={`font-bold text-lg mb-2 ${isSelected ? 'text-white' : 'text-gray-200 group-hover:text-white'} transition-colors duration-300`}>
                        {category.name}
                      </h3>
                      <p className={`text-sm ${isSelected ? 'text-gray-300' : 'text-gray-400 group-hover:text-gray-300'} transition-colors duration-300`}>
                        {category.description}
                      </p>
                      <div className="mt-4 text-xs text-gray-500">
                        {category.partners.length} partners
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>

          {/* Selected Category Partners */}
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-4 mb-4">
                <div className={`p-3 rounded-xl bg-gradient-to-r ${partnerCategories[selectedCategory].color} bg-opacity-10 border border-opacity-20`}>
                  <partnerCategories[selectedCategory].icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">
                  {partnerCategories[selectedCategory].name}
                </h3>
              </div>
              <p className="text-gray-300 max-w-xl mx-auto">
                {partnerCategories[selectedCategory].description}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {partnerCategories[selectedCategory].partners.map((partner, index) => (
                <motion.div
                  key={partner.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="group bg-gradient-to-br from-gray-900/80 to-gray-950/80 border border-gray-800/50 hover:border-purple-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10">
                    <CardContent className="p-8 text-center">
                      <div className="mb-6">
                        <Image 
                          src={partner.logoUrl} 
                          alt={`${partner.name} logo`} 
                          width={150} 
                          height={60} 
                          className="mx-auto object-contain grayscale group-hover:grayscale-0 transition-all duration-300" 
                        />
                      </div>
                      <h4 className="font-bold text-lg text-white mb-2 group-hover:text-purple-300 transition-colors duration-300">
                        {partner.name}
                      </h4>
                      <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300">
                        {partner.description}
                      </p>
                      <div className="mt-4 flex items-center justify-center">
                        <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                        <span className="text-xs text-green-400 font-medium">Verified Partner</span>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-gradient-to-br from-purple-900/10 via-transparent to-indigo-900/10">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold md:text-4xl text-white mb-4">
              Partner Benefits
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Access exclusive benefits and resources through our partner network
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: CreditCard,
                title: "Exclusive Credits",
                description: "Access to millions in cloud credits and software discounts"
              },
              {
                icon: Users,
                title: "Direct Access",
                description: "Skip the line with direct introductions to partner teams"
              },
              {
                icon: Star,
                title: "Preferred Rates",
                description: "Special pricing and terms negotiated for our portfolio"
              },
              {
                icon: Rocket,
                title: "Fast Track",
                description: "Accelerated onboarding and priority support"
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="bg-gradient-to-br from-gray-900/80 to-gray-950/80 border border-gray-800/50 hover:border-purple-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10 h-full">
                  <CardContent className="p-8 text-center">
                    <div className="inline-flex p-4 rounded-xl mb-6 bg-gradient-to-r from-purple-500/10 to-indigo-500/10 border border-purple-500/20">
                      <benefit.icon className="h-8 w-8 text-purple-400" />
                    </div>
                    <h3 className="font-bold text-xl text-white mb-4">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-400">
                      {benefit.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid gap-12 md:grid-cols-2 max-w-6xl mx-auto">
            <Card className="bg-gradient-to-br from-purple-900/30 to-indigo-900/30 border border-purple-500/30 shadow-xl shadow-purple-500/20 backdrop-blur-sm">
              <CardContent className="p-8 text-center">
                <div className="inline-flex p-4 rounded-xl mb-6 bg-gradient-to-r from-purple-500/20 to-indigo-500/20 border border-purple-500/30">
                  <Handshake className="h-8 w-8 text-purple-400" />
                </div>
                <CardTitle className="text-2xl font-bold text-white mb-4">
                  Become a Partner
                </CardTitle>
                <CardDescription className="text-gray-300 mb-8 text-lg">
                  Join our network of esteemed partners and collaborate with the most promising projects in Web3. Expand your reach and grow your business.
                </CardDescription>
                <CtaButton 
                  href="/partner-application"
                  className="group inline-flex items-center gap-2 text-lg px-8 py-4 rounded-xl bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-bold shadow-lg shadow-purple-900/30 border-none transition-all duration-300 transform hover:scale-105 hover:shadow-purple-500/40"
                >
                  <Handshake className="h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
                  Partner With Us
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </CtaButton>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-indigo-900/30 to-purple-900/30 border border-indigo-500/30 shadow-xl shadow-indigo-500/20 backdrop-blur-sm">
              <CardContent className="p-8 text-center">
                <div className="inline-flex p-4 rounded-xl mb-6 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 border border-indigo-500/30">
                  <Users className="h-8 w-8 text-indigo-400" />
                </div>
                <CardTitle className="text-2xl font-bold text-white mb-4">
                  Refer a Project
                </CardTitle>
                <CardDescription className="text-gray-300 mb-8 text-lg">
                  Know a high-potential Web3 project that could benefit from our network? Refer them today and help them access our partner ecosystem.
                </CardDescription>
                <CtaButton 
                  href="/project-referral" 
                  variant="outline"
                  className="group inline-flex items-center gap-2 text-lg px-8 py-4 rounded-xl bg-transparent text-white border-2 border-indigo-500/50 hover:border-indigo-400 hover:bg-indigo-500/10 font-bold transition-all duration-300 transform hover:scale-105"
                >
                  <Users className="h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
                  Refer a Project
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </CtaButton>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}