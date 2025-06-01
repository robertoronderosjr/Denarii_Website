"use client";

import {
  Calendar,
  Clock,
  ArrowRight,
  Search,
  Tag,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { Input } from "@/components/ui/input";

// Placeholder blog posts data - we'll replace this with your actual content
const blogPosts = [
  {
    id: 1,
    title: "Understanding Tokenomics: A Comprehensive Guide",
    excerpt:
      "Learn the fundamentals of tokenomics and how to design sustainable token economies for your blockchain project.",
    image: "/blog/tokenomics-guide.jpg",
    date: "2024-03-15",
    readTime: "10 min read",
    category: "Tokenomics",
    tags: ["Tokenomics", "Blockchain", "Guide"],
  },
  {
    id: 2,
    title: "The Future of DeFi: Trends to Watch in 2024",
    excerpt:
      "Explore the emerging trends in decentralized finance and how they're shaping the future of blockchain technology.",
    image: "/blog/defi-trends.jpg",
    date: "2024-03-10",
    readTime: "8 min read",
    category: "DeFi",
    tags: ["DeFi", "Trends", "2024"],
  },
  {
    id: 3,
    title: "Building Sustainable Token Economies",
    excerpt:
      "Discover the key principles and strategies for creating long-lasting token economies that benefit all stakeholders.",
    image: "/blog/sustainable-tokens.jpg",
    date: "2024-03-05",
    readTime: "12 min read",
    category: "Tokenomics",
    tags: ["Tokenomics", "Sustainability", "Strategy"],
  },
];

const categories = [
  "All Posts",
  "Tokenomics",
  "DeFi",
  "Blockchain",
  "Strategy",
  "Technology",
];

export default function BlogPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none mb-8">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-600 animate-sparkle">
                Denarii Blog
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-12">
              Insights, analysis, and expert perspectives on tokenomics, DeFi,
              and blockchain technology
            </p>
            {/* Search Bar */}
            <div className="relative max-w-xl mx-auto">
              <Input
                type="text"
                placeholder="Search articles..."
                className="w-full pl-12 pr-4 py-6 bg-gray-900/50 border-gray-800 text-white placeholder-gray-400 rounded-xl focus:ring-2 focus:ring-purple-500/50"
              />
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-12 border-b border-gray-800">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <Button
                key={index}
                variant="ghost"
                className={`px-6 py-2 rounded-full text-gray-300 hover:text-white hover:bg-purple-900/20 transition-colors duration-200 ${
                  index === 0 ? "bg-purple-900/20 text-white" : ""
                }`}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-24">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
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
                  <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {post.readTime}
                    </span>
                  </div>
                  <h2 className="text-xl font-bold text-white mb-3">
                    {post.title}
                  </h2>
                  <p className="text-gray-400 mb-4">{post.excerpt}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {post.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-purple-900/20 text-purple-300 rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Link
                    href={`/blog/${post.id}`}
                    className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors duration-200"
                  >
                    Read More
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-24 bg-gradient-to-b from-gray-900/50 to-transparent">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold md:text-4xl mb-6 text-white">
              Stay Updated
            </h2>
            <p className="text-xl text-gray-300 mb-10">
              Subscribe to our newsletter for the latest insights on tokenomics
              and blockchain technology
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-gray-900/50 border-gray-800 text-white placeholder-gray-400"
              />
              <Button className="bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 text-white">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
