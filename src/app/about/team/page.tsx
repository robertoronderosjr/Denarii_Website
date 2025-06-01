"use client";

import { Linkedin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// Custom X (formerly Twitter) icon component (copied from footer)
const XIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.width || 28}
    height={props.height || 28}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={props.className || "lucide"}
  >
    <path d="M13.6823 10.6218L20.2391 3H18.6854L12.9921 9.61788L8.44486 3H3.2002L10.0765 13.0074L3.2002 21H4.75404L10.7663 14.0113L15.5549 21H20.7996L13.6819 10.6218H13.6823ZM11.5541 13.0956L10.8574 12.0991L5.31391 4.16971H7.70053L12.1742 10.5689L12.8709 11.5655L18.6861 19.8835H16.2995L11.5541 13.096V13.0956Z" />
  </svg>
);

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

export default function TeamPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold md:text-5xl text-white mb-4">
              Meet the Denarii Labs Team
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Experienced professionals dedicated to your project's success
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="relative bg-gradient-to-br from-gray-900/80 to-gray-950/80 rounded-2xl border border-purple-700/30 p-8 shadow-xl backdrop-blur-md transition-all duration-150 flex flex-col items-center group hover:-translate-y-1 hover:shadow-2xl hover:border-purple-400/60"
                style={{ minHeight: 320, maxWidth: 340, margin: "0 auto" }}
              >
                <div className="relative w-36 h-36 mb-4 flex-shrink-0">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover rounded-full border-4 border-purple-400/40 shadow-lg group-hover:shadow-purple-400/30 transition-all duration-150"
                    style={{ objectPosition: "center" }}
                  />
                </div>
                <div className="w-12 border-t-2 border-purple-700/20 mb-4 group-hover:border-purple-400/40 transition-colors duration-150" />
                <div className="flex flex-row items-center justify-between w-full gap-4 mb-2">
                  <div className="flex flex-col items-start flex-1 min-w-0">
                    <h3 className="text-lg font-bold text-white mb-1 tracking-tight w-full text-left leading-tight">
                      {member.name}
                    </h3>
                    <span
                      className="text-purple-200 text-base font-medium w-full text-left leading-tight"
                      title={member.role}
                    >
                      {member.role}
                    </span>
                  </div>
                  <div className="flex gap-3 flex-shrink-0">
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`LinkedIn profile of ${member.name}`}
                    >
                      <Linkedin className="h-7 w-7 text-purple-300 hover:text-purple-100 transition-colors duration-150 drop-shadow-md" />
                    </a>
                    <a
                      href={member.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`X profile of ${member.name}`}
                    >
                      <XIcon className="h-7 w-7 text-purple-300 hover:text-purple-100 transition-colors duration-150 drop-shadow-md" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
