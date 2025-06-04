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
        "Real World",
        "Social",
        "Entertainment",
        "Tokenization",
        "Privacy",
        "Marketplace"
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
        title: "What is XION?",
        description: "XION is a next-generation blockchain platform designed to bring Web3 capabilities to the mainstream. Known for its user-friendly design and cutting-edge technology, XION bridges the gap between traditional applications and blockchain technology. With its unique architecture, XION enables developers to create consumer-ready applications while maintaining security, scalability, and ease of use.",
        features: [
          "Usability: Simplifies blockchain interactions for broader audience adoption.",
          "Developer Tools: Rust-based environment for increased developer adoption.",
          "Performance: Instant finality and gasless transactions for user-first applications."
        ]
      }}
    />
  );
}
 