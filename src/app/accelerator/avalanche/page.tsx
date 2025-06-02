"use client";

import { Mountain } from "lucide-react";
import AcceleratorTemplate from "../AcceleratorTemplate";

export default function AvalanchePage() {
  return (
    <AcceleratorTemplate
      title="Avalanche Accelerator"
      description="Building the next generation of applications on the Avalanche ecosystem."
      overview="Our Avalanche Accelerator is designed for teams building innovative solutions on the Avalanche platform. This program focuses on developing high-performance applications, DeFi protocols, and infrastructure solutions that leverage Avalanche's unique capabilities in speed, scalability, and security."
      focusAreas={[
        "DeFi Applications",
        "NFT & Gaming",
        "Infrastructure Tools",
        "Cross-chain Solutions",
        "Enterprise Applications",
      ]}
      highlights={[
        "Avalanche-specific technical mentorship",
        "Protocol design and optimization",
        "Ecosystem integration support",
        "Performance optimization",
        "Cross-chain bridge development",
      ]}
      duration="12 Weeks"
      format="Hybrid (Online & In-person events)"
      cohort="Cohort 003 - Q4 2024"
      target="Avalanche Ecosystem Projects"
      benefits={[
        "Technical expertise",
        "Ecosystem integration",
        "Performance optimization",
        "Cross-chain support",
        "Community access",
      ]}
      ctaTitle="Ready to Build on Avalanche?"
      ctaDescription="Join our Avalanche Accelerator and help shape the future of the ecosystem."
      icon={Mountain}
    />
  );
}
 