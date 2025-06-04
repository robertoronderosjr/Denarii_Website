"use client";

import AcceleratorTemplate from "../AcceleratorTemplate";
import { Sparkles } from "lucide-react";

export default function XionAccelerator() {
  return (
    <AcceleratorTemplate
      title="XION Accelerator"
      description="Build the next generation of Web3 applications with XION's Web2-like user experience and Denarii Labs' expertise in blockchain development."
      overview="The XION Accelerator is a 12-week program designed to help innovative projects build consumer-focused Web3 applications. By leveraging XION's user-friendly platform and Denarii Labs' expertise, we help you create applications that drive mainstream adoption of Web3 technology."
      focusAreas={[
        "Real-World Applications & User-Friendly Design",
        "Community & Social Engagement Tools",
        "Creative & Entertainment Innovations",
        "Asset Tokenization & Digital-Physical Integration",
        "Web3 Enhancements & Privacy Solutions",
        "Marketplaces, Rewards, and Marketing with IP Integration"
      ]}
      highlights={[
        "Access to Red Beard Ventures and other leading VCs",
        "12-week accelerator with weekly sessions on tokenomics, GTM, legal, and fundraising",
        "$100K investment, immediate funding for selected projects",
        "Technical support while building on XION with expert guidance",
        "Marketing and visibility to amplify your project with content and event participation"
      ]}
      duration="12 weeks"
      format="Remote"
      cohort="Open"
      target="Entrepreneurs building real-world applications that solve practical problems for mainstream users"
      benefits={[
        "Immediate $100,000 investment upon selection",
        "Direct access to XION's technical team and resources",
        "Weekly mentorship sessions on tokenomics and GTM strategy",
        "Marketing support and ecosystem visibility",
        "Networking opportunities with investors and partners"
      ]}
      ctaTitle="Build the Future of Web3"
      ctaDescription="Join our accelerator program and create the next generation of user-friendly Web3 applications with XION's powerful platform."
      icon={Sparkles}
      technicalDetails={{
        title: "Why Build on XION?",
        description: "XION redefines blockchain by eliminating complexity, creating a seamless Web2-like experience for users and developers.",
        features: [
          "Web2-Like Usability: Simplifies blockchain interactions for broader audience adoption",
          "Developer-Centric Tools: Rust-based development environment for increased developer adoption",
          "Consumer Ready: Instant finality, gasless transactions, and high throughput",
          "Walletless Interaction: Removes wallet requirements for smooth onboarding",
          "Ecosystem Support: Comprehensive support throughout the entire product lifecycle",
          "Customizable for Diverse Use Cases: Adaptable to finance, entertainment, loyalty, and marketplaces",
          "Sustainable Ecosystem Growth: Innovative funding models for high-quality projects"
        ]
      }}
    />
  );
}
 