import {
  ArrowRight,
  Lightbulb,
  CheckCircle,
  Milestone,
  FileText,
  ShieldCheck,
  TrendingUp,
  Users,
  BarChart3,
  Network,
  Zap,
  Building,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { SectionWrapper } from "@/components/common/section-wrapper";
import { CtaButton } from "@/components/common/cta-button";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

const services = [
  {
    icon: Lightbulb,
    title: "Tokenomics Design & Strategy",
    description:
      "Crafting sustainable token economies tailored to your project's goals, including supply, distribution, utility, and governance mechanisms.",
  },
  {
    icon: FileText,
    title: "Whitepaper & Litepaper Review",
    description:
      "In-depth analysis and feedback on your project's foundational documents to ensure clarity, coherence, and robustness.",
  },
  {
    icon: ShieldCheck,
    title: "Security & Risk Assessment",
    description:
      "Identifying potential vulnerabilities in your token model and economic design to safeguard against exploits and ensure long-term stability.",
  },
  {
    icon: TrendingUp,
    title: "Incentive Mechanism Design",
    description:
      "Developing effective incentive structures to drive user adoption, network participation, and value accrual for your token holders.",
  },
];

const timelineSteps = [
  {
    id: 1,
    icon: Milestone,
    title: "Discovery & Assessment",
    description:
      "We start by understanding your project's vision, goals, target audience, and existing architecture. Deep dive into your concept and market positioning.",
  },
  {
    id: 2,
    icon: Users,
    title: "Strategic Workshop",
    description:
      "Collaborative sessions to define core token utilities, economic flows, and governance models. We align on key performance indicators for success.",
  },
  {
    id: 3,
    icon: Lightbulb,
    title: "Token Model Design",
    description:
      "Development of a comprehensive tokenomics framework, including supply dynamics, distribution schedules, staking mechanisms, and value capture strategies.",
  },
  {
    id: 4,
    icon: FileText,
    title: "Documentation & Review",
    description:
      "Detailed documentation of the token model. Iterative feedback sessions to refine the design and ensure it meets your project's needs.",
  },
  {
    id: 5,
    icon: CheckCircle,
    title: "Implementation Support & Go-to-Market",
    description:
      "Guidance on smart contract implementation best practices related to tokenomics and support for your launch strategy.",
  },
];

export default function ConsultingPage() {
  return (
    <>
      {/* Split-Section Intro */}
      <section className="py-24 md:py-32 bg-black">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text */}
            <div className="flex flex-col space-y-6">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-600 animate-sparkle">
                  Tokenomics Consulting Services
                </span>
              </h1>
              <ul className="space-y-3 my-4">
                <li className="flex items-start gap-3">
                  <div className="rounded-full bg-purple-600/20 p-1 mt-1">
                    <CheckCircle className="h-5 w-5 text-purple-400" />
                  </div>
                  <span className="text-xl text-gray-300 font-medium">Customized tokenomics designs tailored to your project's unique goals</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="rounded-full bg-purple-600/20 p-1 mt-1">
                    <CheckCircle className="h-5 w-5 text-purple-400" />
                  </div>
                  <span className="text-xl text-gray-300 font-medium">Strategic expertise from Web3 veterans with proven success</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="rounded-full bg-purple-600/20 p-1 mt-1">
                    <CheckCircle className="h-5 w-5 text-purple-400" />
                  </div>
                  <span className="text-xl text-gray-300 font-medium">Sustainable frameworks that drive long-term value and adoption</span>
                </li>
              </ul>
              <div className="pt-4">
                <Button 
                  className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white hover:from-purple-600 hover:to-indigo-600 hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300"
                  size="lg"
                  asChild
                >
                  <Link href="#contact">
                    Book a Consultation <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
            
            {/* Right Column - Tokenomics Illustration */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-950 p-8 rounded-lg border border-gray-800 shadow-xl">
              <div className="aspect-square relative flex items-center justify-center">
                <div className="relative w-full h-full flex items-center justify-center">
                  {/* Central token circle */}
                  <div className="w-40 h-40 rounded-full bg-gradient-to-br from-purple-900/80 to-indigo-900/80 flex items-center justify-center z-20 shadow-lg shadow-purple-900/30">
                    <span className="text-3xl font-bold text-white">TOKEN</span>
                  </div>
                  
                  {/* Connecting lines */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-64 h-64 rounded-full border-2 border-dashed border-purple-500/30 animate-[spin_30s_linear_infinite]">
                      {/* Orbit elements */}
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-500 p-2 rounded-full shadow-lg shadow-blue-500/30">
                        <BarChart3 className="h-5 w-5 text-white" />
                      </div>
                      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 bg-purple-500 p-2 rounded-full shadow-lg shadow-purple-500/30">
                        <Network className="h-5 w-5 text-white" />
                      </div>
                      <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-indigo-500 p-2 rounded-full shadow-lg shadow-indigo-500/30">
                        <Building className="h-5 w-5 text-white" />
                      </div>
                      <div className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 bg-pink-500 p-2 rounded-full shadow-lg shadow-pink-500/30">
                        <Zap className="h-5 w-5 text-white" />
                      </div>
                    </div>
                  </div>
                  
                  {/* Labels */}
                  <div className="absolute top-4 left-1/2 -translate-x-1/2 text-blue-400 text-sm font-medium">Supply</div>
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-purple-400 text-sm font-medium">Utility</div>
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-indigo-400 text-sm font-medium">Governance</div>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 text-pink-400 text-sm font-medium">Distribution</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Services Grid */}
      <section className="py-24 relative overflow-hidden bg-gray-950">
        {/* Background gradient elements */}
        <div className="absolute top-0 left-1/4 w-1/2 h-1/2 bg-purple-900/20 rounded-full blur-[100px] -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-1/4 w-1/2 h-1/2 bg-indigo-900/20 rounded-full blur-[100px] translate-y-1/2"></div>
        
        <div className="container px-4 md:px-6 mx-auto relative z-10">
          <h2 className="mb-16 text-center text-3xl font-bold md:text-4xl text-white">
            Our Expertise
          </h2>
          
          <div className="grid gap-8 md:grid-cols-2">
            {services.map((service, index) => (
              <div 
                key={service.title}
                className="bg-gradient-to-br from-gray-900 to-gray-950 rounded-xl border border-gray-800/50 p-6 transition-all duration-300 hover:shadow-xl hover:shadow-purple-900/10 hover:border-purple-900/30 group"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="rounded-full bg-gradient-to-br from-purple-600/20 to-indigo-600/20 p-3 text-purple-400 group-hover:text-purple-300 transition-colors duration-300">
                    <service.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-purple-200 transition-colors duration-300">
                    {service.title}
                  </h3>
                </div>
                <p className="text-gray-400 pl-[calc(3rem+0.5rem)] group-hover:text-gray-300 transition-colors duration-300">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Consulting Timeline Section */}
      <section className="py-24 bg-black relative">
        <div className="container px-4 md:px-6 mx-auto">
          <h2 className="mb-16 text-center text-3xl font-bold md:text-4xl text-white">
            Our Consulting Process
          </h2>
          
          {/* Vertical Timeline Line */}
          <div className="absolute left-1/2 top-[12rem] bottom-24 w-0.5 bg-gradient-to-b from-purple-600 via-indigo-600 to-purple-600 transform -translate-x-1/2 hidden md:block"></div>
          
          <div className="relative z-10">
            {timelineSteps.map((step, index) => (
              <div key={step.id} className="mb-20 last:mb-0">
                <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center`}>
                  {/* Timeline Step Number & Icon */}
                  <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 items-center justify-center z-20">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-purple-600 to-indigo-600 shadow-lg shadow-purple-900/30 border-2 border-gray-900">
                      <step.icon className="h-5 w-5 text-white" />
                    </div>
                  </div>
                  
                  {/* Left Content - For even steps */}
                  <div className={`${index % 2 === 0 ? 'md:block' : 'md:hidden'} bg-gradient-to-br from-gray-900 to-gray-950 rounded-xl border border-gray-800 p-6 shadow-lg`}>
                    <div className="flex items-center gap-4 mb-4 md:hidden">
                      <div className="rounded-full bg-gradient-to-br from-purple-600 to-indigo-600 p-2 shadow-lg shadow-purple-900/30">
                        <step.icon className="h-5 w-5 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-white">
                        {step.id}. {step.title}
                      </h3>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4 hidden md:block">
                      {step.id}. {step.title}
                    </h3>
                    <p className="text-gray-400">
                      {step.description}
                    </p>
                  </div>
                  
                  {/* Empty space for even steps on mobile */}
                  <div className={`${index % 2 === 0 ? 'md:hidden' : 'md:block'} bg-gradient-to-br from-gray-900 to-gray-950 rounded-xl border border-gray-800 p-6 shadow-lg`}>
                    <div className="flex items-center gap-4 mb-4 md:hidden">
                      <div className="rounded-full bg-gradient-to-br from-purple-600 to-indigo-600 p-2 shadow-lg shadow-purple-900/30">
                        <step.icon className="h-5 w-5 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-white">
                        {step.id}. {step.title}
                      </h3>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4 hidden md:block">
                      {step.id}. {step.title}
                    </h3>
                    <p className="text-gray-400">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Conceptual Diagram Section */}
      <section className="py-24 bg-gray-950">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold md:text-4xl text-white mb-4">
              Our Tokenomics Framework
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              We apply a comprehensive framework to design and optimize token economies that drive sustainable value creation.
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-gray-900 to-gray-950 rounded-xl border border-gray-800 p-8 shadow-xl">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
              {/* Left Column - Text */}
              <div className="lg:col-span-1">
                <h3 className="text-2xl font-bold text-white mb-4">Token Value Capture Model</h3>
                <p className="text-gray-400 mb-6">
                  Our proprietary framework analyzes how your token captures and distributes value across your ecosystem, ensuring alignment between stakeholders and long-term sustainability.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <div className="rounded-full bg-purple-900/30 p-1 mt-1">
                      <CheckCircle className="h-4 w-4 text-purple-400" />
                    </div>
                    <span className="text-gray-300">Value creation mechanisms</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="rounded-full bg-purple-900/30 p-1 mt-1">
                      <CheckCircle className="h-4 w-4 text-purple-400" />
                    </div>
                    <span className="text-gray-300">Stakeholder incentive alignment</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="rounded-full bg-purple-900/30 p-1 mt-1">
                      <CheckCircle className="h-4 w-4 text-purple-400" />
                    </div>
                    <span className="text-gray-300">Supply & demand equilibrium</span>
                  </li>
                </ul>
              </div>
              
              {/* Right Column - Diagram */}
              <div className="lg:col-span-2 relative">
                <div className="aspect-[16/9] bg-gray-900 rounded-lg overflow-hidden border border-gray-800 p-4">
                  <div className="h-full w-full flex items-center justify-center relative">
                    {/* Central Protocol Node */}
                    <div className="absolute w-32 h-32 rounded-full bg-gradient-to-br from-purple-600/80 to-indigo-600/80 flex items-center justify-center z-30 border-2 border-gray-800">
                      <span className="text-white font-bold">PROTOCOL</span>
                    </div>
                    
                    {/* Outer Circle */}
                    <div className="absolute w-[90%] h-[90%] rounded-full border-2 border-gray-700/50 border-dashed"></div>
                    
                    {/* Nodes */}
                    <div className="absolute top-[15%] left-[25%] bg-blue-600/80 rounded-lg p-3 shadow-lg shadow-blue-900/30 border border-gray-800">
                      <span className="text-white font-medium">Users</span>
                    </div>
                    <div className="absolute top-[15%] right-[25%] bg-green-600/80 rounded-lg p-3 shadow-lg shadow-green-900/30 border border-gray-800">
                      <span className="text-white font-medium">Stakers</span>
                    </div>
                    <div className="absolute bottom-[15%] left-[25%] bg-amber-600/80 rounded-lg p-3 shadow-lg shadow-amber-900/30 border border-gray-800">
                      <span className="text-white font-medium">Treasury</span>
                    </div>
                    <div className="absolute bottom-[15%] right-[25%] bg-pink-600/80 rounded-lg p-3 shadow-lg shadow-pink-900/30 border border-gray-800">
                      <span className="text-white font-medium">Governance</span>
                    </div>
                    
                    {/* Connection Lines */}
                    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 225" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M200 112.5 L100 70" stroke="rgba(147, 51, 234, 0.5)" strokeWidth="2" />
                      <path d="M200 112.5 L300 70" stroke="rgba(147, 51, 234, 0.5)" strokeWidth="2" />
                      <path d="M200 112.5 L100 155" stroke="rgba(147, 51, 234, 0.5)" strokeWidth="2" />
                      <path d="M200 112.5 L300 155" stroke="rgba(147, 51, 234, 0.5)" strokeWidth="2" />
                    </svg>
                    
                    {/* Flow Indicators */}
                    <div className="absolute top-[40%] left-[35%] text-purple-400 text-xs">Value Flow</div>
                    <div className="absolute top-[40%] right-[35%] text-purple-400 text-xs">Rewards</div>
                    <div className="absolute bottom-[40%] left-[35%] text-purple-400 text-xs">Fees</div>
                    <div className="absolute bottom-[40%] right-[35%] text-purple-400 text-xs">Voting</div>
                  </div>
                </div>
                <div className="text-center mt-4 text-gray-500 text-sm">
                  A simplified view of token value flows in a well-designed tokenomics system
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section with Credibility Tagline */}
      <section id="contact" className="py-24 bg-gradient-to-br from-purple-950 to-black">
        <div className="container px-4 md:px-6 mx-auto text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold md:text-4xl mb-6 text-white">
              Ready to Elevate Your Tokenomics?
            </h2>
            <p className="text-xl text-gray-300 mb-10">
              Let's discuss how our expert consultants can help your project succeed. Schedule a free initial consultation today.
            </p>
            <div>
              <Button 
                className="bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 text-white text-lg py-6 px-10 rounded-lg shadow-lg shadow-purple-900/30 transition-all duration-300"
                size="lg"
                asChild
              >
                <Link href="/insights#contact-form">
                  Book a Consultation <Lightbulb className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              
              <p className="mt-8 text-gray-400 text-sm font-medium">
                Trusted by protocols across 4+ ecosystems and backed by Red Beard Ventures
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
