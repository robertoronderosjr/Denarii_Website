import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Zap, Users, Handshake, BookOpen, Lightbulb, Target, Shield, LineChart, ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { SectionWrapper } from '@/components/common/section-wrapper';

const stats = [
  { label: "Projects Accelerated", value: "50+" },
  { label: "Total Value Locked", value: "$100M+" },
  { label: "Partner Network", value: "200+" },
  { label: "Success Rate", value: "85%" },
];

const features = [
  {
    icon: Zap,
    title: "Accelerator Program",
    description: "12-week intensive program to transform your Web3 project from concept to market-ready.",
    link: "/accelerator",
  },
  {
    icon: Shield,
    title: "Tokenomics Design",
    description: "Expert guidance in crafting sustainable token economies and incentive mechanisms.",
    link: "/consulting",
  },
  {
    icon: LineChart,
    title: "Market Strategy",
    description: "Data-driven insights to position your project for success in the Web3 ecosystem.",
    link: "/consulting",
  },
];

const testimonials = [
  {
    quote: "Denarii Labs transformed our vision into a thriving protocol with over $50M TVL.",
    author: "Sarah Chen",
    role: "Founder, DeFi Protocol",
    avatar: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg",
  },
  {
    quote: "Their tokenomics expertise helped us create a sustainable economic model that actually works.",
    author: "Michael Roberts",
    role: "CEO, GameFi Platform",
    avatar: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg",
  },
  {
    quote: "The network and mentorship we gained were invaluable for our growth and market presence.",
    author: "Elena Martinez",
    role: "CTO, Web3 Infrastructure",
    avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
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

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <div className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-background via-background to-primary/5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,_rgba(120,_58,_240,_0.05),_transparent_25%),radial-gradient(circle_at_70%_70%,_rgba(120,_58,_240,_0.05),_transparent_25%)]" />
        <SectionWrapper className="relative flex flex-col items-center text-center gap-8">
          <div className="animate-fade-in space-y-4">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl bg-clip-text text-transparent bg-gradient-to-r from-white to-white/70">
              Building the Future of<br />Web3 Innovation
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-foreground/80 md:text-xl">
              Empowering visionary founders with the expertise, resources, and network to build transformative decentralized technologies.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
            <Button size="lg" className="text-lg px-8 py-6" asChild>
              <Link href="/accelerator">
                Apply Now <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6" asChild>
              <Link href="/consulting">
                Our Services <ArrowUpRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
          
          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-sm text-foreground/70">{stat.label}</div>
              </div>
            ))}
          </div>
        </SectionWrapper>
      </div>

      {/* Features Section */}
      <SectionWrapper className="relative">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold md:text-4xl mb-4">Comprehensive Support</h2>
          <p className="text-foreground/80 max-w-2xl mx-auto">
            End-to-end support for Web3 projects, from ideation to market leadership.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {features.map((feature) => (
            <Card key={feature.title} className="bg-card/50 backdrop-blur border-primary/10 hover:border-primary/20 transition-all duration-300">
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
          <h2 className="text-3xl font-bold md:text-4xl mb-4">Success Stories</h2>
          <p className="text-foreground/80 max-w-2xl mx-auto">
            Join the ranks of successful projects that have grown with our support.
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
                  <div className="text-sm text-foreground/70">{testimonial.role}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </SectionWrapper>

      {/* Partners Section */}
      <SectionWrapper>
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold md:text-4xl mb-4">Trusted Partners</h2>
          <p className="text-foreground/80 max-w-2xl mx-auto">
            Working with leading protocols and platforms in the Web3 ecosystem.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {partners.map((partner) => (
            <div key={partner.name} className="flex items-center justify-center p-4">
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
          <h2 className="text-3xl font-bold md:text-4xl mb-4">Ready to Build the Future?</h2>
          <p className="text-foreground/80 mb-8">
            Join our next cohort and get the support you need to succeed in Web3.
          </p>
          <Button size="lg" className="text-lg px-8 py-6" asChild>
            <Link href="/accelerator">
              Apply to Accelerator <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </SectionWrapper>
    </>
  );
}