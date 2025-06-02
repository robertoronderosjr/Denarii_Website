"use client";

import { Leaf } from "lucide-react";
import AcceleratorTemplate from "../AcceleratorTemplate";

export default function FEcosystemPage() {
  return (
    <AcceleratorTemplate
      title="F-Ecosystem Accelerator"
      description="Building sustainable and innovative solutions for the future of finance."
      overview="Our F-Ecosystem Accelerator is designed for teams building innovative financial solutions that bridge traditional finance with Web3. This program focuses on developing sustainable, compliant, and user-friendly financial applications that drive mainstream adoption."
      focusAreas={[
        "Traditional Finance Integration",
        "Regulatory Compliance",
        "Sustainable Finance",
        "Institutional Solutions",
        "Financial Inclusion",
      ]}
      highlights={[
        "Regulatory compliance guidance",
        "Traditional finance integration",
        "Institutional partnership access",
        "Compliance framework development",
        "Market access strategies",
      ]}
      duration="16 Weeks"
      format="Hybrid (Online & In-person events)"
      cohort="Cohort 003 - Q4 2024"
      target="Financial Innovation Projects"
      benefits={[
        "Regulatory expertise",
        "Traditional finance access",
        "Institutional partnerships",
        "Compliance frameworks",
        "Market strategies",
      ]}
      ctaTitle="Ready to Transform Finance?"
      ctaDescription="Join our F-Ecosystem Accelerator and help build the future of sustainable finance."
      icon={Leaf}
    />
  );
}
