import { ArrowRight, Lightbulb, CheckCircle, Milestone, FileText, ShieldCheck, TrendingUp, Users } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { SectionWrapper } from '@/components/common/section-wrapper';
import { CtaButton } from '@/components/common/cta-button';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const services = [
  {
    icon: Lightbulb,
    title: "Tokenomics Design & Strategy",
    description: "Crafting sustainable token economies tailored to your project's goals, including supply, distribution, utility, and governance mechanisms.",
  },
  {
    icon: FileText,
    title: "Whitepaper & Litepaper Review",
    description: "In-depth analysis and feedback on your project's foundational documents to ensure clarity, coherence, and robustness.",
  },
  {
    icon: ShieldCheck,
    title: "Security & Risk Assessment",
    description: "Identifying potential vulnerabilities in your token model and economic design to safeguard against exploits and ensure long-term stability.",
  },
  {
    icon: TrendingUp,
    title: "Incentive Mechanism Design",
    description: "Developing effective incentive structures to drive user adoption, network participation, and value accrual for your token holders.",
  },
];

const timelineSteps = [
  {
    id: 1,
    icon: Milestone,
    title: "Discovery & Assessment",
    description: "We start by understanding your project's vision, goals, target audience, and existing architecture. Deep dive into your concept and market positioning.",
  },
  {
    id: 2,
    icon: Users,
    title: "Strategic Workshop",
    description: "Collaborative sessions to define core token utilities, economic flows, and governance models. We align on key performance indicators for success.",
  },
  {
    id: 3,
    icon: Lightbulb,
    title: "Token Model Design",
    description: "Development of a comprehensive tokenomics framework, including supply dynamics, distribution schedules, staking mechanisms, and value capture strategies.",
  },
  {
    id: 4,
    icon: FileText,
    title: "Documentation & Review",
    description: "Detailed documentation of the token model. Iterative feedback sessions to refine the design and ensure it meets your project's needs.",
  },
   {
    id: 5,
    icon: CheckCircle,
    title: "Implementation Support & Go-to-Market",
    description: "Guidance on smart contract implementation best practices related to tokenomics and support for your launch strategy.",
  },
];

export default function ConsultingPage() {
  return (
    <>
      {/* Hero Section */}
      <SectionWrapper className="bg-gradient-to-br from-primary/20 to-background text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">Tokenomics Consulting Services</h1>
        <p className="mt-6 max-w-2xl mx-auto text-lg text-foreground/80 md:text-xl">
          Unlock the full potential of your Web3 project with expert tokenomics design and strategic advisory from Denarii Labs.
        </p>
        <div className="mt-10">
          <CtaButton href="#contact">
            Book a Consultation <ArrowRight className="ml-2 h-5 w-5" />
          </CtaButton>
        </div>
      </SectionWrapper>

      {/* Service Offerings Section */}
      <SectionWrapper>
        <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl">Our Expertise</h2>
        <div className="grid gap-8 md:grid-cols-2">
          {services.map((service) => (
            <Card key={service.title} className="flex flex-col bg-card transition-shadow duration-300 hover:shadow-lg hover:shadow-primary/20">
              <CardHeader className="flex-row items-start gap-4 p-6">
                <div className="mt-1 rounded-full bg-primary/10 p-3 text-primary">
                  <service.icon className="h-6 w-6" />
                </div>
                <div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="flex-grow p-6 pt-0 pl-[calc(1.5rem+0.75rem+1rem)]"> {/* Align with title text */}
                <CardDescription className="text-base">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </SectionWrapper>

      {/* Timeline Section */}
      <SectionWrapper className="bg-secondary/30">
        <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl">Our Consulting Process</h2>
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-primary/50 md:left-1/2 md:-ml-px"></div>
          
          <div className="space-y-12">
            {timelineSteps.map((step, index) => (
              <div key={step.id} className="relative flex items-start md:items-center">
                <div className="absolute left-0 top-1.5 z-10 flex h-10 w-10 -translate-x-1/2 transform items-center justify-center rounded-full border-2 border-primary bg-background md:left-1/2 md:top-auto md:-translate-y-1/2">
                  <step.icon className="h-5 w-5 text-primary" />
                </div>
                <Card className={`w-full bg-card shadow-lg md:max-w-md ${index % 2 === 0 ? 'ml-8 md:ml-auto md:mr-16' : 'ml-8 md:mr-auto md:ml-16'}`}>
                  <CardHeader>
                    <CardTitle className="text-xl">{step.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{step.description}</CardDescription>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* CTA Section */}
      <SectionWrapper id="contact" className="text-center">
        <h2 className="mb-6 text-3xl font-bold md:text-4xl">Ready to Elevate Your Tokenomics?</h2>
        <p className="mx-auto mb-8 max-w-xl text-lg text-foreground/80">
          Let's discuss how Denarii Labs can help your project succeed. Schedule a free initial consultation today.
        </p>
        <CtaButton href="/insights#contact-form"> {/* Link to contact form on Insights page */}
          Schedule Consultation <Lightbulb className="ml-2 h-5 w-5" />
        </CtaButton>
      </SectionWrapper>
    </>
  );
}
