import Image from 'next/image';
import { ArrowRight, Handshake, Users, Rocket, FileText } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { SectionWrapper } from '@/components/common/section-wrapper';
import { CtaButton } from '@/components/common/cta-button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const partnerCategories = {
  vcs: {
    name: "Venture Capital",
    icon: Rocket,
    partners: [
      { name: "VC Firm Alpha", logoUrl: "https://placehold.co/150x60.png", dataAiHint: "logo vc" },
      { name: "Web3 Ventures", logoUrl: "https://placehold.co/150x60.png", dataAiHint: "logo investment" },
      { name: "Future Fund", logoUrl: "https://placehold.co/150x60.png", dataAiHint: "logo finance" },
    ]
  },
  market_makers: {
    name: "Market Makers",
    icon: Handshake,
    partners: [
      { name: "Liquidity Pro", logoUrl: "https://placehold.co/150x60.png", dataAiHint: "logo trading" },
      { name: "TokenFlow MM", logoUrl: "https://placehold.co/150x60.png", dataAiHint: "logo market" },
    ]
  },
  auditors: {
    name: "Security Auditors",
    icon: FileText, // Using FileText as there's no specific audit icon. Could use Shield.
    partners: [
      { name: "SecureContracts Inc.", logoUrl: "https://placehold.co/150x60.png", dataAiHint: "logo security" },
      { name: "AuditChain", logoUrl: "https://placehold.co/150x60.png", dataAiHint: "logo audit" },
      { name: "VeriSafe", logoUrl: "https://placehold.co/150x60.png", dataAiHint: "logo verify" },
    ]
  },
  exchanges: {
    name: "Exchanges",
    icon: Users, // Using Users for 'community/platform access'
    partners: [
      { name: "Global Crypto X", logoUrl: "https://placehold.co/150x60.png", dataAiHint: "logo exchange" },
      { name: "DecentralEx", logoUrl: "https://placehold.co/150x60.png", dataAiHint: "logo crypto" },
    ]
  }
};

type PartnerCategoryKey = keyof typeof partnerCategories;

export default function PartnersPage() {
  return (
    <>
      {/* Hero Section */}
      <SectionWrapper className="bg-gradient-to-br from-primary/20 to-background text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">Preferred Partner Network</h1>
        <p className="mt-6 max-w-2xl mx-auto text-lg text-foreground/80 md:text-xl">
          Connecting innovative Web3 projects with industry-leading partners to accelerate growth and success.
        </p>
      </SectionWrapper>

      {/* Partner Categories & Grid Section */}
      <SectionWrapper>
        <Tabs defaultValue="vcs" className="w-full">
          <TabsList className="mb-12 grid w-full grid-cols-2 md:grid-cols-4">
            {(Object.keys(partnerCategories) as PartnerCategoryKey[]).map((key) => {
              const category = partnerCategories[key];
              return (
                <TabsTrigger key={key} value={key} className="flex items-center gap-2 py-3 text-sm md:text-base">
                  <category.icon className="h-5 w-5" />
                  {category.name}
                </TabsTrigger>
              );
            })}
          </TabsList>

          {(Object.keys(partnerCategories) as PartnerCategoryKey[]).map((key) => {
            const category = partnerCategories[key];
            return (
              <TabsContent key={key} value={key}>
                <h2 className="mb-8 text-center text-2xl font-semibold md:text-3xl">
                  {category.name}
                </h2>
                {category.partners.length > 0 ? (
                  <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                    {category.partners.map((partner) => (
                      <Card key={partner.name} className="group flex transform flex-col items-center justify-center p-6 bg-card transition-all duration-300 hover:shadow-xl hover:shadow-primary/20 hover:-translate-y-1">
                        <Image src={partner.logoUrl} alt={`${partner.name} logo`} width={120} height={50} className="object-contain grayscale transition-all duration-300 group-hover:grayscale-0" data-ai-hint={partner.dataAiHint} />
                        <p className="mt-3 text-sm font-medium text-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">{partner.name}</p>
                      </Card>
                    ))}
                  </div>
                ) : (
                  <p className="text-center text-foreground/70">No partners listed in this category yet.</p>
                )}
              </TabsContent>
            );
          })}
        </Tabs>
      </SectionWrapper>

      {/* CTA Section */}
      <SectionWrapper className="bg-secondary/30">
        <div className="grid gap-10 md:grid-cols-2">
          <Card className="bg-card p-8 text-center">
            <Handshake className="mx-auto mb-4 h-12 w-12 text-primary" />
            <CardTitle className="mb-3 text-2xl font-semibold">Apply to Partner</CardTitle>
            <CardDescription className="mb-6 text-foreground/80">
              Join our network of esteemed partners and collaborate with the most promising projects in Web3.
            </CardDescription>
            <CtaButton href="/partner-application"> {/* Placeholder link */}
              Partner With Us <ArrowRight className="ml-2 h-5 w-5" />
            </CtaButton>
          </Card>

          <Card className="bg-card p-8 text-center">
            <Users className="mx-auto mb-4 h-12 w-12 text-primary" />
            <CardTitle className="mb-3 text-2xl font-semibold">Refer a Project</CardTitle>
            <CardDescription className="mb-6 text-foreground/80">
              Know a high-potential Web3 project that could benefit from our network? Refer them today.
            </CardDescription>
             <CtaButton href="/project-referral" variant="outline"> {/* Placeholder link */}
              Refer a Project <ArrowRight className="ml-2 h-5 w-5" />
            </CtaButton>
          </Card>
        </div>
      </SectionWrapper>
    </>
  );
}
