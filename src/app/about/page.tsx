"use client";

import {
  Users,
  Award,
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
      <section className="py-32 relative overflow-hidden">
        {/* Background gradient effects */}
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 via-transparent to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-500/10 via-transparent to-transparent pointer-events-none" />

        <div className="container px-4 md:px-6 mx-auto relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Column - Text */}
            <div className="flex flex-col justify-center max-w-xl mx-auto lg:mx-0">
              <div className="space-y-2 mb-8">
                <span className="text-purple-400 font-semibold tracking-wider uppercase text-sm">
                  Our Story
                </span>
                <h1 className="text-6xl font-extrabold tracking-tighter text-white">
                  Who We Are
                </h1>
              </div>
              <div className="space-y-8 mb-12">
                <p className="text-xl text-gray-300 leading-relaxed">
                  Denarii Labs is a tokenomics accelerator and strategic growth
                  partner for Web3 protocols. We collaborate with projects at
                  every stage–refining token design, crafting go-to-market
                  strategies, and executing high-impact growth initiatives to
                  drive real adoption.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-7 h-7 rounded-full bg-purple-500/20 flex items-center justify-center ring-1 ring-purple-500/20">
                      <span className="text-purple-400 text-sm">✓</span>
                    </div>
                    <p className="text-gray-300 text-base">
                      Full-spectrum tokenomics expertise
                    </p>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-7 h-7 rounded-full bg-purple-500/20 flex items-center justify-center ring-1 ring-purple-500/20">
                      <span className="text-purple-400 text-sm">✓</span>
                    </div>
                    <p className="text-gray-300 text-base">
                      Strategic growth & execution
                    </p>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-7 h-7 rounded-full bg-purple-500/20 flex items-center justify-center ring-1 ring-purple-500/20">
                      <span className="text-purple-400 text-sm">✓</span>
                    </div>
                    <p className="text-gray-300 text-base">
                      Proven accelerator framework
                    </p>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-7 h-7 rounded-full bg-purple-500/20 flex items-center justify-center ring-1 ring-purple-500/20">
                      <span className="text-purple-400 text-sm">✓</span>
                    </div>
                    <p className="text-gray-300 text-base">
                      Powered by Red Beard Ventures
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-6">
                <Button
                  className="group relative bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-bold hover:scale-105 transition-all duration-300 text-lg h-14 min-w-[200px] shadow-lg shadow-purple-500/20 hover:shadow-purple-500/30 overflow-hidden"
                  size="lg"
                  asChild
                >
                  <Link
                    href="/about/team"
                    className="relative z-10 flex items-center justify-center gap-2 w-full"
                  >
                    Meet the Team
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button
                  className="group relative bg-transparent text-white font-bold hover:scale-105 transition-all duration-300 text-lg h-14 min-w-[200px] border-2 border-purple-500/30 hover:border-purple-500/50 shadow-lg shadow-purple-500/10 hover:shadow-purple-500/20 overflow-hidden"
                  size="lg"
                  asChild
                  variant="outline"
                >
                  <Link
                    href="/about/blog"
                    className="relative z-10 flex items-center justify-center gap-2 w-full"
                  >
                    Visit Our Blog
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
            </div>
            {/* Right Column - Illustration or Brand Visual */}
            <div className="relative flex items-center justify-center">
              <div className="relative w-full aspect-square max-w-lg">
                {/* Outer glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-indigo-500/20 rounded-3xl blur-2xl" />

                {/* Main container */}
                <div className="relative aspect-square rounded-3xl bg-gradient-to-br from-purple-900/40 to-indigo-900/40 p-8 flex items-center justify-center border border-white/10 backdrop-blur-xl">
                  {/* Animated gradient background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-indigo-500/10 rounded-3xl animate-pulse" />

                  {/* Content */}
                  <div className="relative w-full h-full flex items-center justify-center">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-indigo-500/5 rounded-2xl" />
                    <div className="relative flex items-center justify-center">
                      <Users className="w-40 h-40 text-purple-400/60" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
              Have Questions or Want to Connect?
            </h2>
            <p className="text-xl text-gray-300 mb-10">
              Reach out to Denarii Labs and our team will get back to you as
              soon as possible.
            </p>
            <div>
              <Button
                className="bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 text-white text-lg py-6 px-10 rounded-lg shadow-lg shadow-purple-900/30 transition-all duration-300"
                size="lg"
                asChild
              >
                <Link href="/about/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
