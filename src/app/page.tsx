import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Zap, Users, Handshake, BookOpen, Lightbulb, Users2, Target, ShieldCheck, LineChart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { SectionWrapper } from '@/components/common/section-wrapper';
import { CtaButton } from '@/components/common/cta-button';

const productSuite = [
  {
    icon: Zap,
    title: "Accelerator Program",
    description: "Fueling the next generation of Web3 innovators with mentorship, resources, and funding.",
    link: "/accelerator",
    dataAiHint: "innovation tech"
  },
  {
    icon: Lightbulb,
    title: "Tokenomics Consulting",
    description: "Expert guidance in designing sustainable and robust token economies for your project.",
    link: "/consulting",
    dataAiHint: "finance strategy"
  },
  {
    icon: BookOpen,
    title: "Research & Insights",
    description: "Deep dives into market trends, protocol analysis, and emerging blockchain technologies.",
    link: "/insights",
    dataAiHint: "analysis data"
  },
];

const cohortProjects = [
  { name: "Project Alpha", description: "Revolutionizing DeFi with AI-powered yield optimization.", logoUrl: "https://placehold.co/100x100.png", dataAiHint: "abstract tech" },
  { name: "Nexus Gaming", description: "Building the next-gen metaverse gaming platform on a decentralized L2.", logoUrl: "https://placehold.co/100x100.png", dataAiHint: "gaming future" },
  { name: "InfraSecure", description: "Providing cutting-edge security solutions for blockchain infrastructure.", logoUrl: "https://placehold.co/100x100.png", dataAiHint: "security shield" },
];

const partnerLogos = [
  { name: "Partner One", logoUrl: "https://placehold.co/150x60.png", dataAiHint: "logo brand" },
  { name: "Partner Two", logoUrl: "https://placehold.co/150x60.png", dataAiHint: "logo company" },
  { name: "Partner Three", logoUrl: "https://placehold.co/150x60.png", dataAiHint: "logo tech" },
  { name: "Partner Four", logoUrl: "https://placehold.co/150x60.png", dataAiHint: "logo business" },
];

const blogPosts = [
  { title: "The Future of Tokenization", snippet: "Exploring how tokenization is reshaping industries beyond finance...", imageUrl: "https://placehold.co/600x400.png", link: "/insights/future-of-tokenization", dataAiHint: "future technology" },
  { title: "Navigating Web3 Regulation", snippet: "A guide for startups on understanding the evolving regulatory landscape.", imageUrl: "https://placehold.co/600x400.png", link: "/insights/web3-regulation", dataAiHint: "law business" },
  { title: "Deep Dive: Layer 2 Scaling Solutions", snippet: "Comparing and contrasting the leading L2 solutions for Ethereum.", imageUrl: "https://placehold.co/600x400.png", link: "/insights/layer-2-scaling", dataAiHint: "network chart" },
];

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-background to-primary/20">
        <SectionWrapper className="min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            Build the Future of <span className="text-primary">Decentralization</span>
          </h1>
          <p className="mt-6 max-w-3xl text-lg text-foreground/80 md:text-xl">
            Denarii Labs empowers visionary founders and projects with the tools, expertise, and network to thrive in the Web3 ecosystem.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <CtaButton href="/accelerator">
              Join Our Accelerator <ArrowRight className="ml-2 h-5 w-5" />
            </CtaButton>
            <CtaButton href="/consulting" variant="outline">
              Consulting Services
            </CtaButton>
          </div>
        </SectionWrapper>
      </div>

      {/* Product Suite Section */}
      <SectionWrapper>
        <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl">Our Product Suite</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {productSuite.map((product) => (
            <Card key={product.title} className="flex transform flex-col overflow-hidden bg-card transition-all duration-300 hover:shadow-2xl hover:shadow-primary/30 hover:-translate-y-1">
              <CardHeader className="items-center p-6">
                <div className="mb-4 rounded-full bg-primary/10 p-4 text-primary">
                  <product.icon className="h-10 w-10" />
                </div>
                <CardTitle className="text-center text-2xl">{product.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow p-6 pt-0">
                <CardDescription className="text-center text-base">{product.description}</CardDescription>
              </CardContent>
              <CardFooter className="p-6 pt-0">
                 <Button variant="link" asChild className="mx-auto text-primary">
                   <Link href={product.link}>Learn More <ArrowRight className="ml-2 h-4 w-4" /></Link>
                 </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </SectionWrapper>
      
      {/* Cohort Showcase Section */}
      <SectionWrapper className="bg-secondary/30">
        <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl">Cohort Showcase</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {cohortProjects.map((project) => (
            <Card key={project.name} className="overflow-hidden bg-card transition-shadow duration-300 hover:shadow-lg hover:shadow-primary/20">
              <CardHeader className="flex flex-row items-center gap-4 p-6">
                <Image src={project.logoUrl} alt={`${project.name} logo`} width={60} height={60} className="rounded-full" data-ai-hint={project.dataAiHint} />
                <div>
                  <CardTitle className="text-xl">{project.name}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="p-6 pt-0">
                <CardDescription>{project.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-12 text-center">
          <CtaButton href="/accelerator#past-cohorts" variant="outline">
            View All Cohorts <Users className="ml-2 h-5 w-5" />
          </CtaButton>
        </div>
      </SectionWrapper>

      {/* Partner Logos Section */}
      <SectionWrapper>
        <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl">Our Partners</h2>
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 lg:gap-16">
          {partnerLogos.map((partner, index) => (
            <div key={index} className="grayscale transition-all duration-300 hover:grayscale-0 hover:scale-105">
              <Image src={partner.logoUrl} alt={`${partner.name} logo`} width={150} height={60} className="object-contain" data-ai-hint={partner.dataAiHint}/>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <CtaButton href="/partners">
            Become a Partner <Handshake className="ml-2 h-5 w-5" />
          </CtaButton>
        </div>
      </SectionWrapper>

      {/* Blog Preview Section */}
      <SectionWrapper className="bg-secondary/30">
        <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl">Latest Insights</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {blogPosts.map((post) => (
            <Card key={post.title} className="flex transform flex-col overflow-hidden bg-card transition-all duration-300 hover:shadow-2xl hover:shadow-primary/30 hover:-translate-y-1">
              <CardContent className="p-0">
                <Link href={post.link} aria-label={`Read more about ${post.title}`}>
                  <Image src={post.imageUrl} alt={post.title} width={600} height={400} className="aspect-[3/2] w-full object-cover" data-ai-hint={post.dataAiHint}/>
                </Link>
              </CardContent>
              <CardHeader className="p-6">
                <CardTitle className="text-xl leading-tight">
                  <Link href={post.link} className="hover:text-primary transition-colors">{post.title}</Link>
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-grow p-6 pt-0">
                <CardDescription>{post.snippet}</CardDescription>
              </CardContent>
              <CardFooter className="p-6 pt-0">
                <Button variant="link" asChild className="text-primary">
                  <Link href={post.link}>Read More <ArrowRight className="ml-2 h-4 w-4" /></Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        <div className="mt-12 text-center">
          <CtaButton href="/insights" variant="outline">
            Explore All Insights <BookOpen className="ml-2 h-5 w-5" />
          </CtaButton>
        </div>
      </SectionWrapper>
    </>
  );
}
