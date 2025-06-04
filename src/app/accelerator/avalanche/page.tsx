"use client";

import AcceleratorTemplate from "../AcceleratorTemplate";
import { Network } from "lucide-react";

export default function AvalancheAccelerator() {
  return (
    <AcceleratorTemplate
      title="Avalanche Accelerator"
      description="Build your own Layer 1 blockchain with Avalanche's cutting-edge technology and Denarii Labs' expertise in tokenomics and blockchain development."
      overview="The Avalanche Accelerator is a 12-week program designed to help early-stage projects launch their own Layer 1 blockchain using Avalanche's powerful platform. With immediate funding, expert guidance, and comprehensive support, we help you build scalable, sustainable, and high-performance blockchain solutions."
      focusAreas={[
        "Layer 1 Blockchain Development",
        "Custom Subnet Architecture",
        "DeFi and Financial Services",
        "Enterprise Blockchain Solutions",
        "Gaming and NFT Platforms"
      ]}
      highlights={[
        "Build your own Layer 1 blockchain with Avalanche's subnet architecture",
        "Immediate $100,000 investment for selected projects",
        "Weekly sessions on tokenomics, GTM, legal, and fundraising",
        "Technical support from Avalanche and Denarii Labs experts",
        "Access to Red Beard Ventures and other leading VCs"
      ]}
      duration="12 weeks"
      format="Remote"
      cohort="Open"
      target="Early-stage projects looking to build their own Layer 1 blockchain"
      benefits={[
        "Immediate $100,000 investment upon selection",
        "Direct access to Avalanche's technical team and resources",
        "Weekly mentorship sessions on tokenomics and GTM strategy",
        "Marketing support and ecosystem visibility",
        "Networking opportunities with investors and partners"
      ]}
      ctaTitle="Launch Your Layer 1 on Avalanche"
      ctaDescription="Join our accelerator program and build your own blockchain with Avalanche's powerful technology stack and Denarii Labs' expertise."
      icon={Network}
      technicalDetails={{
        title: "Why Build Your L1 on Avalanche?",
        description: "Avalanche provides the perfect foundation for building custom Layer 1 blockchains with its unique subnet architecture and powerful features.",
        features: [
          "Sub-second transaction finality for real-time applications",
          "Custom subnet architecture for tailored blockchain solutions",
          "Low transaction costs and high throughput",
          "Full Ethereum compatibility for easy dApp migration",
          "Cross-chain interoperability through Avalanche Bridge",
          "Energy-efficient consensus mechanism",
          "Scalable infrastructure for growing applications"
        ]
      }}
    />
  );
}
 