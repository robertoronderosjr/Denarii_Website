"use client";

import { Network } from "lucide-react";
import AcceleratorTemplate from "../AcceleratorTemplate";

export default function WireNetworkAccelerator() {
  return (
    <AcceleratorTemplate
      title="Wire Network Accelerator"
      description="Setting a new standard for blockchain technology with its Universal Transaction Layer (UTL), making digital transactions faster, more secure, and easier than ever."
      overview="Wire Network is redefining blockchain transactions through its Universal Polymorphic Address Protocol (UPAP) and Universal Transaction Layer (UTL). Our 12-week accelerator program focuses on advancing breakthroughs in decentralized finance (DeFi), social finance (SoFi), blockchain gaming, and AI-powered markets, all supported by Wire Network's fast, trustless, gas-free infrastructure."
      focusAreas={[
        "AI Agents",
        "AI DeFi",
        "Gaming",
        "Liquidity",
        "Dev Tools"
      ]}
      highlights={[
        "No Gas Fees: Eliminate transaction fees that slow down blockchain adoption",
        "All Chains: Interact with any major blockchain seamlessly",
        "Lightning-fast: Process 10,000 transactions per second in real-time",
        "AI Agent Support: Ideal infrastructure for AI agent-based systems",
        "Universal Connectivity: Work across every blockchain network without barriers",
        "Technical Support: Complete documentation and example code provided"
      ]}
      duration="12 weeks"
      format="Remote"
      cohort="Open Now"
      target="Early stage projects seeking funding and mentorship"
      benefits={[
        "Immediate $100,000 investment",
        "Direct access to Wire Network technology",
        "Expert mentorship and guidance",
        "Technical implementation support",
        "Cross-chain development capabilities",
        "Scalable infrastructure for global operations",
        "No gas fees for transactions",
        "Built-in capacity expansion"
      ]}
      ctaTitle="Build the Future of Blockchain with Wire Network"
      ctaDescription="Join our accelerator program to gain access to revolutionary blockchain technology, expert mentorship, and the resources you need to build the next generation of decentralized applications."
      icon={Network}
      technicalDetails={{
        title: "What is Wire Network?",
        description: "Wire Network is a revolutionary blockchain platform that eliminates gas fees and enables seamless cross-chain interactions. Known for its Universal Transaction Layer and blazing-fast processing speeds, Wire Network bridges the gap between different blockchain networks. With its unique architecture, Wire Network enables developers to create applications that work across all major blockchains while maintaining security, speed, and cost efficiency.",
        features: [
          "No Gas Fees: Eliminates transaction fees for seamless user experience.",
          "Cross-Chain: Enables seamless interaction with all major blockchains.",
          "Speed: Processes 10,000 transactions per second in real-time."
        ]
      }}
    />
  );
}
 