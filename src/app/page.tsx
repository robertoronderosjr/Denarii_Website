import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Zap, Shield, LineChart, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { SectionWrapper } from "@/components/common/section-wrapper";

const stats = [
  { label: "Companies Graduated", value: "15+" },
  { label: "Capital Supported", value: "$3M+" },
  { label: "Total Applicants", value: "1200+" },
  { label: "Ecosystem Partners", value: "50+" },
];

const features = [
  {
    icon: Zap,
    title: "Accelerator Program",
    description:
      "12-week intensive program to transform your Web3 project from concept to market-ready.",
    link: "/accelerator",
  },
  {
    icon: Shield,
    title: "Tokenomics Design",
    description:
      "Expert guidance in crafting sustainable token economies and incentive mechanisms.",
    link: "/consulting",
  },
  {
    icon: LineChart,
    title: "Market Strategy",
    description:
      "Data-driven insights to position your project for success in the Web3 ecosystem.",
    link: "/consulting",
  },
];

const testimonials = [
  {
    quote:
      "Denarii Labs transformed our vision into a thriving protocol with over $50M TVL.",
    author: "Sarah Chen",
    role: "Founder, DeFi Protocol",
    avatar:
      "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg",
  },
  {
    quote:
      "Their tokenomics expertise helped us create a sustainable economic model that actually works.",
    author: "Michael Roberts",
    role: "CEO, GameFi Platform",
    avatar:
      "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg",
  },
  {
    quote:
      "The network and mentorship we gained were invaluable for our growth and market presence.",
    author: "Elena Martinez",
    role: "CTO, Web3 Infrastructure",
    avatar:
      "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
  },
];

const partners = [
  { name: "Ethereum Foundation", logo: "https://placehold.co/200x80.png" },
  { name: "Polygon", logo: "https://placehold.co/200x80.png" },
  { name: "Chainlink", logo: "https://placehold.co/200x80.png" },
  { name: "Arbitrum", logo: "https://placehold.co/200x80.png" },
  { name: "Optimism", logo: "https://placehold.co/200x80.png" },
  { name: "Avalanche", logo: "https://placehold.co/200x80.png" },
];

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-black py-24 md:py-32 w-full relative overflow-hidden min-h-[90vh] flex items-center">
        <div className="absolute inset-0 z-[-1] will-change-transform">
          <div className="absolute inset-0 bg-black/90"></div>
          {/* Parallax SVG grid background */}
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-repeat bg-fixed opacity-10"></div>
          <div
            className="absolute inset-0 opacity-50 animate-pulse-slow"
            style={{
              background:
                "radial-gradient(circle at 50% 50%, rgba(139, 92, 246, 0.15) 0%, rgba(30, 27, 75, 0.1) 25%, rgba(0, 0, 0, 0) 50%)",
            }}
          ></div>
          <div
            className="absolute inset-0 opacity-30 animate-float-bg"
            style={{
              background:
                "radial-gradient(circle at 80% 20%, rgba(168, 85, 247, 0.2) 0%, rgba(0, 0, 0, 0) 40%)",
            }}
          ></div>
        </div>
        <div className="container px-4 md:px-6 max-w-5xl mx-auto text-center">
          <div className="flex flex-col items-center justify-center space-y-10">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none mb-2">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-indigo-600">
                Backing the Next Generation
              </span>
              <br />
              <span className="text-white">of Tokenized Startups</span>
            </h1>
            <p className="max-w-2xl text-gray-300 md:text-xl font-medium mb-4">
              Scaling Web3 startups with capital, tokenomics, <br /> and backed
              by Red Beard Ventures
            </p>

            <div className="flex flex-col gap-5 sm:flex-row sm:gap-8 w-full max-w-xl mx-auto">
              <Button
                className="flex-1 bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-bold hover:scale-110 hover:shadow-xl hover:shadow-purple-500/20 transition-all duration-300 text-xl py-8 px-10 min-w-[240px]"
                size="lg"
                asChild
              >
                <Link
                  href="/accelerator"
                  className="flex items-center justify-center gap-3"
                >
                  <Zap className="h-6 w-6" />
                  Apply to Accelerator
                </Link>
              </Button>
              <Button
                variant="outline"
                className="flex-1 bg-transparent text-white border-purple-600 hover:bg-black hover:border-purple-400 hover:text-white hover:scale-110 hover:shadow-xl hover:shadow-purple-500/20 transition-all duration-300 text-xl py-8 px-10 min-w-[240px]"
                size="lg"
                asChild
              >
                <Link
                  href="/consulting"
                  className="flex items-center justify-center gap-3"
                >
                  <LineChart className="h-6 w-6" />
                  Tokenomics Consulting
                </Link>
              </Button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full mt-16">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center justify-center h-28 p-4 rounded-xl bg-gradient-to-b from-gray-900 to-gray-950 shadow-lg transition-all duration-300 hover:shadow-purple-900/30 hover:shadow-xl hover:border-purple-500/40 border border-transparent"
                >
                  <span className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-indigo-500 whitespace-nowrap">
                    {stat.value}
                  </span>
                  <span className="text-sm text-gray-300 font-medium whitespace-nowrap mt-2">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <SectionWrapper className="relative">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold md:text-4xl mb-4">
            Comprehensive Support
          </h2>
          <p className="text-foreground/80 max-w-2xl mx-auto">
            End-to-end support for Web3 projects, from ideation to market
            leadership.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {features.map((feature) => (
            <Card
              key={feature.title}
              className="bg-card/50 backdrop-blur border-primary/10 hover:border-primary/20 transition-all duration-300"
            >
              <CardHeader>
                <div className="mb-4 inline-flex rounded-lg bg-primary/10 p-3">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/70">{feature.description}</p>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" className="text-primary" asChild>
                  <Link href={feature.link}>
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </SectionWrapper>

      {/* Testimonials Section */}
      <SectionWrapper className="bg-secondary/30">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold md:text-4xl mb-4">
            Success Stories
          </h2>
          <p className="text-foreground/80 max-w-2xl mx-auto">
            Join the ranks of successful projects that have grown with our
            support.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.author} className="bg-card/50 backdrop-blur">
              <CardContent className="pt-6">
                <div className="mb-4">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.author}
                    width={48}
                    height={48}
                    className="rounded-full"
                  />
                </div>
                <blockquote className="text-foreground/80 mb-4">
                  "{testimonial.quote}"
                </blockquote>
                <div>
                  <div className="font-semibold">{testimonial.author}</div>
                  <div className="text-sm text-foreground/70">
                    {testimonial.role}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </SectionWrapper>

      {/* Partners Section */}
      <SectionWrapper>
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold md:text-4xl mb-4">
            Trusted Partners
          </h2>
          <p className="text-foreground/80 max-w-2xl mx-auto">
            Working with leading protocols and platforms in the Web3 ecosystem.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="flex items-center justify-center p-4"
            >
              <Image
                src={partner.logo}
                alt={partner.name}
                width={200}
                height={80}
                className="opacity-50 hover:opacity-100 transition-opacity duration-300"
              />
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* CTA Section */}
      <SectionWrapper className="bg-gradient-to-t from-primary/5 to-background text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold md:text-4xl mb-4">
            Ready to Build the Future?
          </h2>
          <p className="text-foreground/80 mb-8">
            Join our next cohort and get the support you need to succeed in
            Web3.
          </p>
          <Button size="lg" className="text-lg px-8 py-6" asChild>
            <Link href="/accelerator">
              Apply to Accelerator <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </SectionWrapper>
    </main>
  );
}
