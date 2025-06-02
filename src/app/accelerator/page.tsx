"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  ArrowRight,
  Users,
  Mountain,
  Rocket,
  Leaf,
  Network,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { SectionWrapper } from "@/components/common/section-wrapper";
import { CtaButton } from "@/components/common/cta-button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";

const tracks = [
  {
    id: "avalanche",
    name: "Avalanche Accelerator",
    icon: Mountain,
    description:
      "Building the next generation of applications on the Avalanche ecosystem.",
    dataAiHint: "mountain peak",
  },
  {
    id: "xion",
    name: "XION Accelerator",
    icon: Rocket,
    description:
      "Building the future of consumer-focused blockchain applications.",
    dataAiHint: "rocket launch",
  },
  {
    id: "f-ecosystem",
    name: "F-Ecosystem Accelerator",
    icon: Leaf,
    description:
      "Building sustainable and innovative solutions for the future of finance.",
    dataAiHint: "leaf growth",
  },
  {
    id: "wire-network",
    name: "Wire Network Accelerator",
    icon: Network,
    description:
      "Building the next generation of decentralized network infrastructure and connectivity solutions.",
    dataAiHint: "network nodes",
  },
];

const pastCohorts = [
  {
    name: "Cohort 001",
    year: "2022",
    description: "Pioneering projects in early DeFi and NFT marketplaces.",
    imageUrl: "https://placehold.co/600x400.png",
    dataAiHint: "team success",
  },
  {
    name: "Cohort 002",
    year: "2023",
    description: "Focused on DAO tooling and decentralized identity solutions.",
    imageUrl: "https://placehold.co/600x400.png",
    dataAiHint: "community collaboration",
  },
];

export default function AcceleratorPage() {
  const router = useRouter();

  const handleTrackNavigation = (trackId: string) => {
    if (trackId) {
      router.push(`/accelerator/${trackId}`);
    }
  };

  return (
    <>
      {/* Hero Section */}
      <SectionWrapper className="bg-gradient-to-br from-primary/20 to-background text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
          Denarii Labs Accelerator
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-lg text-foreground/80 md:text-xl">
          Empowering the next wave of Web3 builders. Currently accepting
          applications for Cohort 003.
        </p>
        <div className="mt-10">
          <CtaButton href="#apply">
            Apply to Cohort 003 <ArrowRight className="ml-2 h-5 w-5" />
          </CtaButton>
        </div>
      </SectionWrapper>

      {/* Tracks Section */}
      <SectionWrapper>
        <div className="mb-12 flex flex-col items-center justify-between gap-4 md:flex-row">
          <h2 className="text-3xl font-bold md:text-4xl">Explore Our Tracks</h2>
          <div className="w-full md:w-auto md:min-w-[250px]">
            <Select onValueChange={handleTrackNavigation}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Navigate to Track Page" />
              </SelectTrigger>
              <SelectContent>
                {tracks.map((track) => (
                  <SelectItem key={track.id} value={track.id}>
                    {track.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {tracks.map((track) => (
            <Card
              key={track.id}
              className="flex transform flex-col overflow-hidden bg-card transition-all duration-300 hover:shadow-2xl hover:shadow-primary/30 hover:-translate-y-1"
            >
              <CardHeader className="items-center p-6">
                <div className="mb-4 rounded-full bg-primary/10 p-3 text-primary">
                  <track.icon className="h-8 w-8" />
                </div>
                <CardTitle className="text-center text-xl">
                  {track.name}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-grow p-6 pt-0">
                <CardDescription className="text-center text-sm">
                  {track.description}
                </CardDescription>
              </CardContent>
              <CardFooter className="p-6 pt-0">
                <Button variant="link" asChild className="mx-auto text-primary">
                  <Link href={`/accelerator/${track.id}`}>
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </SectionWrapper>

      {/* Past Cohorts Section */}
      <SectionWrapper id="past-cohorts" className="bg-secondary/30">
        <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl">
          Past Cohorts
        </h2>
        <div className="grid gap-8 md:grid-cols-2">
          {pastCohorts.map((cohort) => (
            <Card
              key={cohort.name}
              className="overflow-hidden bg-card transition-shadow duration-300 hover:shadow-lg hover:shadow-primary/20"
            >
              <Image
                src={cohort.imageUrl}
                alt={cohort.name}
                width={600}
                height={400}
                className="aspect-[16/9] w-full object-cover"
                data-ai-hint={cohort.dataAiHint}
              />
              <CardHeader className="p-6">
                <CardTitle className="text-2xl">
                  {cohort.name} - {cohort.year}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 pt-0">
                <CardDescription>{cohort.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </SectionWrapper>

      {/* Application CTA Section */}
      <SectionWrapper id="apply" className="text-center">
        <h2 className="mb-6 text-3xl font-bold md:text-4xl">
          Ready to Build the Future?
        </h2>
        <p className="mx-auto mb-8 max-w-xl text-lg text-foreground/80">
          Join Cohort 003 and get the support you need to succeed. Applications
          are now open!
        </p>
        <CtaButton href="/application-form">
          {" "}
          {/* Placeholder link */}
          Apply Now <Users className="ml-2 h-5 w-5" />
        </CtaButton>
      </SectionWrapper>
    </>
  );
}
