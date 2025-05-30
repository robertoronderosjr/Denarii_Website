"use client";

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, BookOpen, Users, Send, UploadCloud, Linkedin, Twitter } from 'lucide-react';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, type SubmitHandler } from "react-hook-form";
import * as z from "zod";

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { SectionWrapper } from '@/components/common/section-wrapper';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from '@/hooks/use-toast';

const teamMembers = [
  { name: "Alice L.", role: "CEO & Co-Founder", imageUrl: "https://placehold.co/200x200.png", bio: "Visionary leader with a decade of experience in blockchain technology and venture capital.", social: {linkedin: "#"}, dataAiHint: "person ceo" },
  { name: "Bob K.", role: "CTO & Co-Founder", imageUrl: "https://placehold.co/200x200.png", bio: "Expert architect in decentralized systems and smart contract development.", social: {linkedin: "#"}, dataAiHint: "person cto" },
  { name: "Carol M.", role: "Head of Research", imageUrl: "https://placehold.co/200x200.png", bio: "Leading our research initiatives with a focus on tokenomics and market analysis.", social: {twitter: "#"}, dataAiHint: "person researcher" },
];

const blogPosts = [
  { title: "The Future of Tokenization", snippet: "Exploring how tokenization is reshaping industries beyond finance...", imageUrl: "https://placehold.co/600x400.png", link: "/insights/future-of-tokenization", category: "Tokenomics", date: "2024-07-15", dataAiHint: "future technology" },
  { title: "Navigating Web3 Regulation", snippet: "A guide for startups on understanding the evolving regulatory landscape.", imageUrl: "https://placehold.co/600x400.png", link: "/insights/web3-regulation", category: "Legal", date: "2024-07-10", dataAiHint: "law business" },
  { title: "Deep Dive: Layer 2 Scaling Solutions", snippet: "Comparing and contrasting the leading L2 solutions for Ethereum.", imageUrl: "https://placehold.co/600x400.png", link: "/insights/layer-2-scaling", category: "Technology", date: "2024-07-05", dataAiHint: "network chart" },
  { title: "The DAO Handbook: Governance Best Practices", snippet: "Practical advice for structuring and managing effective DAOs.", imageUrl: "https://placehold.co/600x400.png", link: "/insights/dao-handbook", category: "Governance", date: "2024-06-28", dataAiHint: "community meeting" },
  { title: "Web3 Security: A Proactive Approach", snippet: "Key strategies for protecting your decentralized applications.", imageUrl: "https://placehold.co/600x400.png", link: "/insights/web3-security", category: "Security", date: "2024-06-20", dataAiHint: "security abstract" },
];

const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
  pitchDeck: z.instanceof(FileList).optional(), // For file upload
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

export default function InsightsPage() {
  const { toast } = useToast();
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit: SubmitHandler<ContactFormValues> = async (data) => {
    // Simulate form submission
    console.log("Contact form data:", data);
    // In a real app, you would send this data to a server/API
    // And handle the file upload (data.pitchDeck)
    
    toast({
      title: "Message Sent!",
      description: "Thanks for reaching out. We'll get back to you soon.",
    });
    form.reset();
  };


  return (
    <>
      {/* Hero Section / Page Title */}
      <SectionWrapper className="bg-gradient-to-br from-primary/20 to-background text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">Insights & About Us</h1>
        <p className="mt-6 max-w-2xl mx-auto text-lg text-foreground/80 md:text-xl">
          Discover our mission, meet the team, explore our latest research, and get in touch.
        </p>
      </SectionWrapper>

      {/* About Us Section */}
      <SectionWrapper id="about-us">
        <h2 className="mb-4 text-center text-3xl font-bold md:text-4xl">Our Mission</h2>
        <p className="mx-auto mb-12 max-w-3xl text-center text-lg text-foreground/80">
          At Denarii Labs, we are dedicated to catalyzing innovation in the decentralized web. We empower visionary founders and projects by providing strategic guidance, access to a robust network, and deep expertise in tokenomics, technology, and go-to-market strategy. Our goal is to foster a thriving Web3 ecosystem built on sustainable and impactful solutions.
        </p>
        
        <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl">Meet the Team</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {teamMembers.map((member) => (
            <Card key={member.name} className="transform overflow-hidden bg-card text-center transition-all duration-300 hover:shadow-2xl hover:shadow-primary/30 hover:-translate-y-1">
              <CardContent className="p-0">
                 <Image src={member.imageUrl} alt={member.name} width={200} height={200} className="mx-auto mt-6 h-32 w-32 rounded-full object-cover" data-ai-hint={member.dataAiHint}/>
              </CardContent>
              <CardHeader className="p-6">
                <CardTitle className="text-xl">{member.name}</CardTitle>
                <CardDescription className="text-primary">{member.role}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow p-6 pt-0">
                <p className="text-sm text-foreground/70">{member.bio}</p>
              </CardContent>
              <CardFooter className="justify-center p-6 pt-0">
                <div className="flex space-x-3">
                  {member.social?.linkedin && (
                    <Link href={member.social.linkedin} target="_blank" rel="noopener noreferrer" aria-label={`${member.name} LinkedIn`}>
                      <Linkedin className="h-5 w-5 text-foreground/70 hover:text-primary" />
                    </Link>
                  )}
                  {member.social?.twitter && (
                     <Link href={member.social.twitter} target="_blank" rel="noopener noreferrer" aria-label={`${member.name} Twitter`}>
                      <Twitter className="h-5 w-5 text-foreground/70 hover:text-primary" />
                    </Link>
                  )}
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </SectionWrapper>

      {/* Blog/Insights Section */}
      <SectionWrapper id="blog" className="bg-secondary/30">
        <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl">Latest Blog & Insights</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <Card key={post.title} className="flex transform flex-col overflow-hidden bg-card transition-all duration-300 hover:shadow-2xl hover:shadow-primary/30 hover:-translate-y-1">
              <CardContent className="p-0">
                <Link href={post.link} aria-label={`Read more about ${post.title}`}>
                  <Image src={post.imageUrl} alt={post.title} width={600} height={400} className="aspect-[3/2] w-full object-cover" data-ai-hint={post.dataAiHint}/>
                </Link>
              </CardContent>
              <CardHeader className="p-6">
                <div className="mb-2 flex items-center justify-between text-xs text-foreground/70">
                  <span>{post.category}</span>
                  <span>{post.date}</span>
                </div>
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
        {/* Add pagination if many posts */}
      </SectionWrapper>

      {/* Contact Form Section */}
      <SectionWrapper id="contact-form">
        <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl">Get In Touch</h2>
        <Card className="mx-auto max-w-2xl bg-card p-6 sm:p-8">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Full Name</FormLabel>
                    <FormControl>
                      <Input placeholder="John Doe" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email Address</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="you@example.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="subject"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Subject</FormLabel>
                    <FormControl>
                      <Input placeholder="Regarding..." {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Message</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Your message..." rows={5} {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="pitchDeck"
                render={({ field: { onChange, value, ...restField }}) => (
                  <FormItem>
                    <FormLabel htmlFor="pitchDeck" className="flex items-center gap-2">
                      Pitch Deck (Optional) <UploadCloud className="h-4 w-4 text-foreground/70" />
                    </FormLabel>
                    <FormControl>
                      <Input 
                        id="pitchDeck" 
                        type="file" 
                        accept=".pdf,.doc,.docx,.ppt,.pptx"
                        onChange={(e) => onChange(e.target.files)}
                        {...restField} 
                        className="file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-primary/10 file:text-primary hover:file:bg-primary/20"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" size="lg" className="w-full transition-transform hover:scale-105" disabled={form.formState.isSubmitting}>
                {form.formState.isSubmitting ? "Sending..." : <>Send Message <Send className="ml-2 h-5 w-5" /></>}
              </Button>
            </form>
          </Form>
        </Card>
      </SectionWrapper>
    </>
  );
}
