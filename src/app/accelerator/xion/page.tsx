"use client";

import { Rocket } from "lucide-react";
import AcceleratorTemplate from "../AcceleratorTemplate";

export default function XionPage() {
  return (
    <AcceleratorTemplate
      title="XION Accelerator"
      description="Building the future of consumer-focused blockchain applications."
      overview="Our XION Accelerator is designed for teams building consumer-focused applications on the XION platform. This program focuses on developing user-friendly, scalable, and innovative solutions that bring blockchain technology to mainstream users."
      focusAreas={[
        "Consumer Applications",
        "User Experience",
        "Mobile Solutions",
        "Social Features",
        "Gaming & Entertainment",
      ]}
      highlights={[
        "UX/UI design mentorship",
        "Mobile development support",
        "User acquisition strategies",
        "Performance optimization",
        "Community building tools",
      ]}
      duration="14 Weeks"
      format="Hybrid (Online & In-person events)"
      cohort="Cohort 003 - Q4 2024"
      target="Consumer-Focused Projects"
      benefits={[
        "UX/UI expertise",
        "Mobile development",
        "User acquisition",
        "Performance tools",
        "Community support",
      ]}
      ctaTitle="Ready to Build for Consumers?"
      ctaDescription="Join our XION Accelerator and help bring blockchain to mainstream users."
      icon={Rocket}
    />
  );
}
 