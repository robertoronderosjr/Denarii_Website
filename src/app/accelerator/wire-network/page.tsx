"use client";

import { Network } from "lucide-react";
import AcceleratorTemplate from "../AcceleratorTemplate";

export default function WireNetworkPage() {
  return (
    <AcceleratorTemplate
      title="Wire Network Accelerator"
      description="Building the next generation of decentralized network infrastructure and connectivity solutions."
      overview="Our Wire Network Accelerator is designed for teams building innovative solutions in network infrastructure, connectivity, and decentralized communication protocols. This program focuses on developing scalable, secure, and efficient network solutions that power the future of Web3."
      focusAreas={[
        "Network Infrastructure",
        "Decentralized Connectivity",
        "Protocol Development",
        "Network Security",
        "Cross-chain Communication",
      ]}
      highlights={[
        "Network architecture and design mentorship",
        "Protocol development and optimization",
        "Security and scalability best practices",
        "Infrastructure deployment strategies",
        "Cross-chain integration support",
      ]}
      duration="16 Weeks"
      format="Hybrid (Online & In-person events)"
      cohort="Cohort 003 - Q4 2024"
      target="Network Infrastructure Projects"
      benefits={[
        "Network architecture expertise",
        "Protocol development support",
        "Infrastructure partnerships",
        "Security best practices",
        "Cross-chain integration",
      ]}
      ctaTitle="Ready to Build the Future of Networks?"
      ctaDescription="Join our Wire Network Accelerator and help build the infrastructure of tomorrow."
      icon={Network}
    />
  );
}
 