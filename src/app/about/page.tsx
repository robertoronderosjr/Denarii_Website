"use client";

import {
  Users,
  Target,
  Award,
  Lightbulb,
  Globe,
  Shield,
  ArrowRight,
  Linkedin,
  Twitter,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

const teamMembers = [
  {
    name: "Drew Austin",
    role: "Founding Partner",
    image: "/team/drew-austin.jpg",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Elana Gold",
    role: "Partner / Head of BD",
    image: "/team/elana-gold.jpg",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Jennifer Styles",
    role: "Chief Operating Officer",
    image: "/team/jennifer-styles.jpg",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Joshua Howard",
    role: "Associate",
    image: "/team/joshua-howard.jpg",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Jake Craven",
    role: "Product Manager",
    image: "/team/jake-craven.jpg",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Nabil Allouche",
    role: "Tokenomics",
    image: "/team/nabil-allouche.jpg",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Lauren Adelman",
    role: "Partnerships",
    image: "/team/lauren-adelman.jpg",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Edgar Woo",
    role: "Head of Digital & Social",
    image: "/team/edgar-woo.jpg",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Simon Lacy",
    role: "KOL & Distribution Lead",
    image: "/team/simon-lacy.jpg",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Brian Fanzo",
    role: "Web3 Strategy & Community",
    image: "/team/brian-fanzo.jpg",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Austin Ritter",
    role: "AI & Operations Manager",
    image: "/team/austin-ritter.jpg",
    linkedin: "#",
    twitter: "#",
  },
];

const values = [
  {
    icon: Target,
    title: "Innovation",
    description: "Pushing the boundaries of what's possible in tokenomics",
  },
  {
    icon: Shield,
    title: "Security",
    description: "Building robust and secure token economies",
  },
  {
    icon: Globe,
    title: "Accessibility",
    description: "Making tokenomics accessible to projects of all sizes",
  },
  {
    icon: Lightbulb,
    title: "Education",
    description: "Empowering teams with knowledge and best practices",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col justify-center max-w-xl mx-auto lg:mx-0">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none mb-8">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-600 animate-sparkle">
                  About Denarii
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                We're a team of blockchain experts and tokenomics specialists
                dedicated to helping projects build sustainable token economies.
              </p>
              <div className="flex gap-4">
                <Button
                  className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-bold hover:scale-105 transition-all duration-300"
                  size="lg"
                  asChild
                >
                  <Link href="#team">
                    Meet Our Team <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-purple-900/20 to-indigo-900/20 p-8">
                <div className="relative w-full h-full">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-indigo-500/10 rounded-2xl"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Users className="w-32 h-32 text-purple-400/50" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 bg-gradient-to-b from-gray-900/50 to-transparent">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold md:text-4xl text-white mb-4">
              Our Mission
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              To empower blockchain projects with sustainable tokenomics that
              drive long-term value and adoption
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-900/80 to-gray-950/80 rounded-xl border border-gray-800/50 p-6 shadow-lg hover:shadow-xl hover:shadow-purple-900/10 hover:border-purple-900/30 transition-all duration-300"
              >
                <div className="rounded-full bg-gradient-to-br from-purple-600/20 to-indigo-600/20 p-4 w-16 h-16 flex items-center justify-center mb-4">
                  <value.icon className="h-8 w-8 text-purple-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-400">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-24">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold md:text-4xl text-white mb-4">
              Meet Our Team
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Experienced professionals dedicated to your project's success
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-900/80 to-gray-950/80 rounded-xl border border-gray-800/50 p-8 shadow-lg hover:shadow-xl hover:shadow-purple-900/10 hover:border-purple-900/30 transition-all duration-300 flex flex-col items-center"
              >
                <div className="relative w-32 h-32 mb-6">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover rounded-full border-4 border-purple-700/30 shadow-md"
                    style={{ objectPosition: "center" }}
                  />
                </div>
                <h3 className="text-xl font-bold text-white mb-1 text-center w-full">
                  {member.name}
                </h3>
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between w-full mb-4 gap-2">
                  <span
                    className="text-purple-400 text-left text-base font-medium w-full sm:w-2/3"
                    title={member.role}
                  >
                    {member.role}
                  </span>
                  <span className="flex gap-4 sm:ml-2 mt-2 sm:mt-0">
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`LinkedIn profile of ${member.name}`}
                    >
                      <Linkedin className="h-8 w-8 text-purple-300 hover:text-purple-100 transition-colors duration-200" />
                    </a>
                    <a
                      href={member.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Twitter profile of ${member.name}`}
                    >
                      <Twitter className="h-8 w-8 text-purple-300 hover:text-purple-100 transition-colors duration-200" />
                    </a>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="container px-4 md:px-6 mx-auto text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold md:text-4xl mb-6 text-white">
              Ready to Work With Us?
            </h2>
            <p className="text-xl text-gray-300 mb-10">
              Let's discuss how we can help your project succeed with
              sustainable tokenomics.
            </p>
            <div>
              <Button
                className="bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 text-white text-lg py-6 px-10 rounded-lg shadow-lg shadow-purple-900/30 transition-all duration-300"
                size="lg"
                asChild
              >
                <Link href="/consulting#contact">
                  Get Started <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
