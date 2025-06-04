"use client";

import AcceleratorTemplate from "../AcceleratorTemplate";
import { Network } from "lucide-react";

export default function AvalancheAccelerator() {
  return (
    <AcceleratorTemplate
      title="Avalanche Accelerator"
      description="Empowering modular blockchain innovation with Avalanche 9000, enabling founders to launch custom L1s with seamless scalability and integrated token architecture."
      overview="Denarii Labs and Avalanche have partnered to accelerate blockchain startups with a focus on financial services, enterprise solutions, sustainability, gaming, and data intensive applications.

 

The 12-week program empowers projects to unlock their potential with Avalanche's cutting edge platform, Avalanche 9000."
      focusAreas={[
        "DeFi",
        "Enterprise",
        "ESG",
        "Gaming",
        "Data"
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
        title: "What is Avalanche?",
        description: "Avalanche is a cutting-edge blockchain platform designed to power decentralized applications, enterprise solutions, and financial ecosystems. Known for its eco-conscious design and blazing-fast transaction speeds, Avalanche bridges the gap between performance, scalability, and sustainability. With its unique architecture, Avalanche enables developers to create custom blockchain solutions while maintaining security, interoperability, and ease of use.",
        features: [
          "Sustainability: Low-energy consensus mechanism for reduced environmental impact.",
          "Speed: Sub-second transaction finality to enable real-time applications.",
          "Flexibility: Customizable infrastructure tailored to specific industries and use cases."
        ]
      }}
      learnMoreUrl="https://www.avax.network/"
      applyUrl="https://airtable.com/apphGHvP2djrz67Ij/page3HaBQAelT3whO/form"
    />
  );
}
 