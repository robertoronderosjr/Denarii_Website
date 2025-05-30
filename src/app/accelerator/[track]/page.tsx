import { SectionWrapper } from '@/components/common/section-wrapper';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, CalendarDays, Users, Target } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

// Mock data structure for a track
const MOCK_TRACK_DATA = {
  defi: {
    name: "DeFi Track",
    description: "Dive deep into the world of decentralized finance. This track focuses on building innovative financial primitives, from lending protocols and DEXs to yield aggregators and stablecoins. We provide specialized mentorship from DeFi experts and connections to top liquidity providers.",
    longDescription: "The DeFi track at Denarii Labs is designed for ambitious teams looking to redefine financial systems. Participants will explore advanced topics like mechanism design for AMMs, risk management in lending, cross-chain DeFi strategies, and regulatory considerations. Our curriculum includes hands-on workshops, code reviews, and sessions on tokenomics specific to DeFi protocols. You'll get access to our network of DeFi investors and partners, helping you secure liquidity and traction.",
    focusAreas: ["Lending & Borrowing", "Decentralized Exchanges (DEXs)", "Yield Farming & Aggregation", "Stablecoins", "Derivatives", "Insurance"],
    mentors: [
      { name: "Alice DeFi", expertise: "AMM Design", imageUrl: "https://placehold.co/100x100.png", dataAiHint: "person professional" },
      { name: "Bob Yields", expertise: "Yield Optimization", imageUrl: "https://placehold.co/100x100.png", dataAiHint: "person expert" },
    ],
    curriculumHighlights: ["Advanced AMM Mechanics", "Smart Contract Security for DeFi", "DeFi Tokenomics", "Liquidity Provisioning Strategies"],
    alumniProjects: [
        { name: "LendFi", description: "A novel cross-chain lending protocol.", logoUrl: "https://placehold.co/80x80.png", dataAiHint: "abstract logo" },
        { name: "StableSwapX", description: "An efficient stablecoin exchange.", logoUrl: "https://placehold.co/80x80.png", dataAiHint: "modern logo" },
    ]
  },
  gaming: {
    name: "Gaming & Metaverse Track",
    description: "Build the next generation of immersive Web3 games and metaverse experiences. This track covers game design, NFT utility, virtual economies, and community building in the metaverse.",
    longDescription: "The Gaming & Metaverse track is for creators passionate about the intersection of gaming, NFTs, and decentralized technologies. We explore topics like play-to-earn (P2E) models, interoperable NFTs, governance in virtual worlds, and scaling on-chain game logic. Mentors include seasoned game developers and metaverse architects. You'll learn to design engaging game loops, build vibrant communities, and navigate the unique challenges of Web3 gaming.",
    focusAreas: ["Play-to-Earn (P2E) Models", "NFT Interoperability", "Virtual Economies", "Decentralized Game Infrastructure", "Community-driven Game Development"],
    mentors: [
      { name: "Eve Gamer", expertise: "Web3 Game Design", imageUrl: "https://placehold.co/100x100.png", dataAiHint: "person gamer" },
      { name: "Adam Verse", expertise: "Metaverse Architecture", imageUrl: "https://placehold.co/100x100.png", dataAiHint: "person tech" },
    ],
    curriculumHighlights: ["Designing Sustainable P2E Economies", "NFT Standards & Utility", "Building Scalable On-Chain Games", "Metaverse Community Engagement"],
     alumniProjects: [
        { name: "PixelVerse", description: "A community-owned pixel art metaverse.", logoUrl: "https://placehold.co/80x80.png", dataAiHint: "pixel art" },
        { name: "GuildMaster", description: "A platform for managing Web3 gaming guilds.", logoUrl: "https://placehold.co/80x80.png", dataAiHint: "gaming emblem" },
    ]
  },
  // Add more tracks here (infrastructure, security) with similar structure
  infrastructure: {
    name: "Infrastructure Track",
    description: "Develop foundational technologies for the Web3 ecosystem. Focus on scalability, interoperability, developer tools, and core blockchain protocols.",
    longDescription: "The Infrastructure track is dedicated to teams building the backbone of the decentralized web. This includes Layer 1 and Layer 2 solutions, cross-chain communication protocols, decentralized storage, oracles, and developer tooling. We provide deep technical mentorship and connections to established protocols and ecosystems. You'll tackle challenges in consensus mechanisms, network security, and creating user-friendly developer experiences.",
    focusAreas: ["Layer 1 & 2 Scaling", "Cross-chain Bridges", "Developer Tooling", "Decentralized Storage & Oracles", "Privacy Solutions"],
    mentors: [
      { name: "Charlie Chain", expertise: "L1 Consensus Design", imageUrl: "https://placehold.co/100x100.png", dataAiHint: "person engineer" },
      { name: "Diana DevTool", expertise: "Blockchain Developer Experience", imageUrl: "https://placehold.co/100x100.png", dataAiHint: "person developer" },
    ],
    curriculumHighlights: ["Scaling Blockchain Architectures", "Secure Interoperability Protocols", "Building Robust Developer SDKs", "Decentralized Network Operations"],
    alumniProjects: [
        { name: "ScaleNet", description: "A high-throughput Layer 2 solution.", logoUrl: "https://placehold.co/80x80.png", dataAiHint: "network diagram" },
        { name: "DevFlow", description: "An integrated development environment for smart contracts.", logoUrl: "https://placehold.co/80x80.png", dataAiHint: "code symbol" },
    ]
  },
  security: {
    name: "Security Track",
    description: "Pioneer new approaches to Web3 security. This track is for teams developing innovative solutions for smart contract auditing, threat detection, formal verification, and on-chain monitoring.",
    longDescription: "The Security track addresses the critical need for robust security in the blockchain space. We support teams working on automated auditing tools, novel cryptographic techniques for security, decentralized insurance protocols, and AI-driven threat intelligence. Mentors are leading security researchers and auditors. You'll learn about the latest attack vectors, defensive programming, and building trust in decentralized systems.",
    focusAreas: ["Smart Contract Auditing Tools", "Formal Verification", "On-Chain Monitoring & Anomaly Detection", "Cryptography & Privacy Enhancing Technologies", "Decentralized Insurance"],
    mentors: [
      { name: "Grace Guard", expertise: "Formal Verification", imageUrl: "https://placehold.co/100x100.png", dataAiHint: "person security" },
      { name: "Henry Hackless", expertise: "Smart Contract Auditing", imageUrl: "https://placehold.co/100x100.png", dataAiHint: "person analyst" },
    ],
    curriculumHighlights: ["Advanced Auditing Techniques", "Applied Cryptography for Security", "Building Secure Oracles", "Incident Response in DeFi"],
    alumniProjects: [
        { name: "AuditAI", description: "AI-powered smart contract vulnerability detection.", logoUrl: "https://placehold.co/80x80.png", dataAiHint: "ai security" },
        { name: "ChainWatch", description: "Real-time on-chain threat monitoring.", logoUrl: "https://placehold.co/80x80.png", dataAiHint: "eye logo" },
    ]
  }
};

type TrackData = typeof MOCK_TRACK_DATA.defi; // Use one as a template for type

export default function TrackPage({ params }: { params: { track: string } }) {
  const trackId = params.track as keyof typeof MOCK_TRACK_DATA;
  const track: TrackData | undefined = MOCK_TRACK_DATA[trackId];

  if (!track) {
    return (
      <SectionWrapper className="text-center">
        <h1 className="mb-4 text-3xl font-bold md:text-4xl">Track Not Found</h1>
        <p className="mb-8 text-lg text-foreground/80">The accelerator track you're looking for doesn't exist.</p>
        <Button asChild>
          <Link href="/accelerator">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Accelerator
          </Link>
        </Button>
      </SectionWrapper>
    );
  }

  return (
    <>
      <SectionWrapper className="bg-gradient-to-br from-primary/20 to-background">
        <div className="mb-8">
          <Button variant="outline" asChild size="sm">
            <Link href="/accelerator">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to All Tracks
            </Link>
          </Button>
        </div>
        <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">{track.name}</h1>
        <p className="text-xl text-foreground/80">{track.description}</p>
      </SectionWrapper>

      <SectionWrapper>
        <div className="grid gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <h2 className="mb-6 text-3xl font-semibold">About the Track</h2>
            <p className="whitespace-pre-line text-foreground/90 leading-relaxed">{track.longDescription}</p>

            <h3 className="mt-10 mb-4 text-2xl font-semibold">Focus Areas</h3>
            <div className="flex flex-wrap gap-2">
              {track.focusAreas.map((area) => (
                <Badge key={area} variant="secondary" className="px-3 py-1 text-sm">{area}</Badge>
              ))}
            </div>
            
            <h3 className="mt-10 mb-4 text-2xl font-semibold">Curriculum Highlights</h3>
            <ul className="list-disc space-y-2 pl-5 text-foreground/90">
                {track.curriculumHighlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                ))}
            </ul>

          </div>
          <div className="space-y-8 lg:col-span-1">
            <Card className="bg-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-xl">
                  <CalendarDays className="h-5 w-5 text-primary" />
                  Program Details
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm text-foreground/80">
                <p><strong>Duration:</strong> 12 Weeks</p>
                <p><strong>Format:</strong> Hybrid (Online & In-person events)</p>
                <p><strong>Next Cohort:</strong> Cohort 003 - Q4 2024</p>
              </CardContent>
            </Card>
            <Card className="bg-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-xl">
                  <Users className="h-5 w-5 text-primary" />
                  Meet the Mentors
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {track.mentors.map((mentor) => (
                  <div key={mentor.name} className="flex items-center gap-3">
                    <Image src={mentor.imageUrl} alt={mentor.name} width={50} height={50} className="rounded-full" data-ai-hint={mentor.dataAiHint} />
                    <div>
                      <p className="font-semibold">{mentor.name}</p>
                      <p className="text-xs text-foreground/70">{mentor.expertise}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </SectionWrapper>
      
      {track.alumniProjects && track.alumniProjects.length > 0 && (
         <SectionWrapper className="bg-secondary/30">
            <h2 className="mb-8 text-center text-3xl font-semibold">Notable Alumni from this Track</h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
                {track.alumniProjects.map((project) => (
                    <Card key={project.name} className="bg-card p-4 text-center">
                        <Image src={project.logoUrl} alt={`${project.name} logo`} width={60} height={60} className="mx-auto mb-3 rounded-md" data-ai-hint={project.dataAiHint}/>
                        <h4 className="text-lg font-medium">{project.name}</h4>
                        <p className="text-sm text-foreground/70">{project.description}</p>
                    </Card>
                ))}
            </div>
        </SectionWrapper>
      )}

      <SectionWrapper className="text-center">
         <h2 className="mb-6 text-3xl font-bold md:text-4xl">Interested in the {track.name}?</h2>
        <p className="mx-auto mb-8 max-w-xl text-lg text-foreground/80">
            Applications for Cohort 003 are open. Don't miss your chance!
        </p>
        <Button size="lg" asChild>
            <Link href="/accelerator#apply">Apply to Accelerator <Target className="ml-2 h-5 w-5" /></Link>
        </Button>
      </SectionWrapper>
    </>
  );
}

// This function can be used if you need to generate static paths for each track
// export async function generateStaticParams() {
//   return Object.keys(MOCK_TRACK_DATA).map((trackId) => ({
//     track: trackId,
//   }));
// }
