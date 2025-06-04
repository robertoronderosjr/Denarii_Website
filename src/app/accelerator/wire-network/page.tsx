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
        "AI Agent-based Projects",
        "AI-Powered DeFi",
        "Gaming Ecosystems",
        "Universal Liquidity",
        "Developer Tools",
        "Cross-chain Solutions"
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
        title: "Why Build on Wire Network?",
        description: "Wire Network addresses the main obstacles that restrict blockchain applications today. With Wire, your application can operate instantly across blockchains with zero gas fees. Users can interact with your application using assets from any chain without bridges or added complexity.",
        features: [
          "Straightforward implementation through Wire's SDKs: Start building in minutes with complete documentation and example code",
          "Easy-to-use APIs: Write code once to interact across blockchain networks",
          "Proven security and stability: Built on established security principles with no bridge vulnerabilities",
          "Built-in capacity expansion: A network built for scaling your applications to support your growing user base",
          "Connect with users from every major blockchain ecosystem: Reach users regardless of which blockchain they prefer",
          "Remove transaction fees that block adoption: Eliminate the primary barrier that prevents users from trying new applications",
          "Build applications ready for tomorrow's demands: Create solutions that scale from hundreds to millions of users without modification",
          "Universal Polymorphic Address Protocol (UPAP): Enables seamless interaction between different blockchains"
        ]
      }}
    />
  );
}
 