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
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

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
    linkedin: "https://www.linkedin.com/in/drewaustin",
    twitter: "https://x.com/DrewAustin",
  },
  {
    name: "Elana Gold",
    role: "Partner / Head of BD",
    image: "/team/elana-gold.jpg",
    linkedin: "https://www.linkedin.com/in/itselanagold",
    twitter: "https://x.com/ItsElanaGold",
  },
  {
    name: "Jennifer Styles",
    role: "Chief Operating Officer",
    image: "/team/jennifer-styles.jpg",
    linkedin: "https://www.linkedin.com/in/jennifer-styles-2757362",
    twitter: "#",
  },
  {
    name: "Joshua Howard",
    role: "Associate",
    image: "/team/joshua-howard.jpg",
    linkedin: "https://www.linkedin.com/in/joshuah1/",
    twitter: "https://x.com/jhowow_",
  },
  {
    name: "Jake Craven",
    role: "Product Manager",
    image: "/team/jake-craven.jpg",
    linkedin: "https://www.linkedin.com/in/jake-craven",
    twitter: "https://x.com/Craven_JE",
  },
  {
    name: "Nabil Allouche",
    role: "Tokenomics",
    image: "/team/nabil-allouche.jpg",
    linkedin: "https://www.linkedin.com/in/nabil-allouche-673a991b5/",
    twitter: "#",
  },
  {
    name: "Lauren Adelman",
    role: "Partnerships",
    image: "/team/lauren-adelman.jpg",
    linkedin: "https://www.linkedin.com/in/laurenadelman/",
    twitter: "https://x.com/ChiefofWeb3",
  },
  {
    name: "Edgar Woo",
    role: "Head of Digital & Social",
    image: "/team/edgar-woo.jpg",
    linkedin: "https://www.linkedin.com/in/edgarwoo",
    twitter: "https://x.com/_edgarwoo",
  },
  {
    name: "Simon Lacy",
    role: "KOL & Distribution Lead",
    image: "/team/simon-lacy.jpg",
    linkedin: "https://www.linkedin.com/in/mezcalpapi-eth-96a86424b/",
    twitter: "https://x.com/mezcalpapieth",
  },
  {
    name: "Brian Fanzo",
    role: "Web3 Strategy & Community",
    image: "/team/brian-fanzo.jpg",
    linkedin: "https://www.linkedin.com/in/brianfanzo",
    twitter: "https://x.com/iSocialFanz",
  },
  {
    name: "Austin Ritter",
    role: "AI & Operations Manager",
    image: "/team/austin-ritter.jpg",
    linkedin: "https://www.linkedin.com/in/austinritter",
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

// Blog preview data (replace with real data as needed)
const blogPreview = [
  {
    id: 1,
    title: "Understanding Tokenomics: A Comprehensive Guide",
    excerpt:
      "Learn the fundamentals of tokenomics and how to design sustainable token economies for your blockchain project.",
    date: "2024-03-15",
    image: "/blog/tokenomics-guide.jpg",
    link: "/blog/1",
  },
  {
    id: 2,
    title: "The Future of DeFi: Trends to Watch in 2024",
    excerpt:
      "Explore the emerging trends in decentralized finance and how they're shaping the future of blockchain technology.",
    date: "2024-03-10",
    image: "/blog/defi-trends.jpg",
    link: "/blog/2",
  },
  {
    id: 3,
    title: "Building Sustainable Token Economies",
    excerpt:
      "Discover the key principles and strategies for creating long-lasting token economies that benefit all stakeholders.",
    date: "2024-03-05",
    image: "/blog/sustainable-tokens.jpg",
    link: "/blog/3",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text */}
            <div className="flex flex-col justify-center max-w-xl mx-auto lg:mx-0">
              <h1 className="text-5xl font-extrabold tracking-tighter mb-6 text-white">
                Who We Are
              </h1>
              <p className="text-xl text-gray-300 mb-10">
                Denarii Labs is a pioneering Web3 accelerator and consulting
                firm, empowering blockchain projects with expert guidance,
                innovative tokenomics, and a global network. We help founders
                turn bold ideas into thriving ecosystems.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-bold hover:scale-105 transition-all duration-300 text-lg px-8 py-5"
                  size="lg"
                  asChild
                >
                  <Link href="#team">Meet the Team</Link>
                </Button>
                <Button
                  className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-bold hover:scale-105 transition-all duration-300 text-lg px-8 py-5"
                  size="lg"
                  asChild
                  variant="outline"
                >
                  <Link href="/blog">Visit Our Blog</Link>
                </Button>
              </div>
            </div>
            {/* Right Column - Illustration or Brand Visual */}
            <div className="relative flex items-center justify-center">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-purple-900/20 to-indigo-900/20 p-8 flex items-center justify-center">
                <div className="relative w-40 h-40 flex items-center justify-center">
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

      {/* Blog Section */}
      <section className="py-24">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold md:text-4xl text-white mb-4">
              From Our Blog
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Insights, news, and media from the Denarii Labs team
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
            {blogPreview.map((post) => (
              <article
                key={post.id}
                className="bg-gradient-to-br from-gray-900/80 to-gray-950/80 rounded-xl border border-gray-800/50 overflow-hidden shadow-lg hover:shadow-xl hover:shadow-purple-900/10 hover:border-purple-900/30 transition-all duration-300"
              >
                <div className="aspect-video relative">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="text-sm text-gray-400 mb-2">{post.date}</div>
                  <h3 className="text-lg font-bold text-white mb-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-400 mb-4">{post.excerpt}</p>
                  <Link
                    href={post.link}
                    className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors duration-200 font-medium"
                  >
                    Read More
                  </Link>
                </div>
              </article>
            ))}
          </div>
          <div className="text-center">
            <Button
              className="bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 text-white text-lg px-8 py-4 rounded-lg shadow-lg shadow-purple-900/30 transition-all duration-300"
              asChild
            >
              <Link href="/blog">See all posts</Link>
            </Button>
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
