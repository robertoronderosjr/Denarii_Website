"use client";

import AcceleratorTemplate from "../AcceleratorTemplate";
import { Network } from "lucide-react";

export default function FEcosystemAccelerator() {
  return (
    <AcceleratorTemplate
      title="F Ecosystem Accelerator"
      description="Power intelligent Web3 applications with the F Ecosystem's proven gaming tools, AI modules, and modular blockchain infrastructure. Built to scale and perform."
      overview="The F Ecosystem Accelerator is a 12-week program designed to help innovative projects build tools and protocols that integrate with RIFT AI. With over 3 million lifetime users, $250 million in NFT trading volume, and partnerships with leading brands, the F Ecosystem provides the perfect foundation for scaling your project."
      focusAreas={[
        "RWA",
        "DePIN",
        "Yield",
        "GTM",
        "Simulation"
      ]}
      highlights={[
        "12-week accelerator with weekly sessions on tokenomics, GTM, legal, and fundraising",
        "$100K investment, immediate funding for selected projects",
        "Technical support while integrating with any products in the F Ecosystem",
        "Marketing and visibility to amplify your project with content and event participation",
        "Access to Red Beard Ventures and other leading VCs"
      ]}
      duration="12 weeks"
      format="Remote"
      cohort="Open"
      target="Teams building tools, protocols, or systems that can be leveraged by agents through RIFT AI"
      benefits={[
        "Immediate $100,000 investment upon selection",
        "Access to battle-tested developer tools and infrastructure",
        "Weekly mentorship sessions on tokenomics and GTM strategy",
        "Marketing support and ecosystem visibility",
        "Networking opportunities with investors and partners"
      ]}
      ctaTitle="Build with the F Ecosystem"
      ctaDescription="Join our accelerator program and leverage the power of the F Ecosystem's tools, games, and blockchain infrastructure to scale your project."
      icon={Network}
      technicalDetails={{
        title: "What is the F Ecosystem?",
        description: "The F Ecosystem is a comprehensive blockchain platform designed to power the next generation of Web3 applications. Known for its battle-tested infrastructure and innovative AI integration, F Ecosystem bridges the gap between traditional gaming and blockchain technology. With its unique architecture, F Ecosystem enables developers to create engaging applications while maintaining security, scalability, and user experience.",
        features: [
          "Gaming: Battle-tested games with millions of active users.",
          "Infrastructure: High-performance Layer 1 blockchain with gasless transactions.",
          "AI Integration: Platform for creating autonomous AI-driven businesses."
        ]
      }}
      whyBuildTitle="Why build in the F Ecosystem?"
      learnMoreUrl="https://fchain.xyz/"
      applyUrl="https://airtable.com/apphGHvP2djrz67Ij/page3HaBQAelT3whO/form"
    />
  );
}
 