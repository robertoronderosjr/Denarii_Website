"use client";

import AcceleratorTemplate from "../AcceleratorTemplate";
import { Network } from "lucide-react";

export default function FEcosystemAccelerator() {
  return (
    <AcceleratorTemplate
      title="F Ecosystem Accelerator"
      description="Build the future of AI-powered applications with the F Ecosystem's battle-tested tools, games, and blockchain infrastructure."
      overview="The F Ecosystem Accelerator is a 12-week program designed to help innovative projects build tools and protocols that integrate with RIFT AI. With over 3 million lifetime users, $250 million in NFT trading volume, and partnerships with leading brands, the F Ecosystem provides the perfect foundation for scaling your project."
      focusAreas={[
        "RWA Protocols: Agents interacting with tokenized real-world assets",
        "DePIN Projects: Infrastructure for agentic businesses",
        "Low-Risk Yield Strategies: Automated yield optimization for agents",
        "Agent-Led Growth & GTM: AI-powered content and distribution",
        "Intelligent Simulations: Environments for agent coordination and testing"
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
        title: "Why Build in the F Ecosystem?",
        description: "Built by experienced operators who've successfully delivered products to millions, the F Ecosystem empowers you to achieve similar scale - faster and more cost-effectively than ever.",
        features: [
          "Battle-tested Developer Tools: Multi-chain embedded wallets, audited smart contracts, and whitelabel solutions",
          "Plug-and-Play AI Agent Stack: Launch tokens for AI Agents or tools for agents to leverage on RIFT AI",
          "FCHAIN Integration: Avalanche-powered Layer 1 with gasless transactions and high performance",
          "RIFT AI Platform: Create autonomous businesses with AI-driven strategies",
          "Internet Capital: Fast funding mechanism leveraging RIFT AI for OTC token deals",
          "Faraway Games: Access to successful games and original brands",
          "Credibility + Capital: Access to Denarii Labs, Red Beard Ventures, and the Faraway investor network"
        ]
      }}
    />
  );
}
 