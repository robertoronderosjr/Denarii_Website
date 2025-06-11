"use client";

import { useState, useMemo } from 'react';
import Image from 'next/image';
import { 
  Search, 
  Filter, 
  SortAsc, 
  Cloud, 
  Shield, 
  Cpu, 
  DollarSign, 
  Users, 
  Briefcase, 
  Palette, 
  ExternalLink,
  Star,
  ArrowRight,
  Eye
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { SectionWrapper } from '@/components/common/section-wrapper';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// Partner categories with organized groupings
const partnerCategories = {
  'technical-infrastructure': {
    name: 'Technical Infrastructure',
    icon: Cpu,
    color: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
    subcategories: ['Cloud Credits', 'Infra (RPC, Nodes, Oracles)', 'Cybersecurity', 'Tech', 'Hardware', 'AI Compute']
  },
  'financial-services': {
    name: 'Financial Services',
    icon: DollarSign,
    color: 'bg-green-500/10 text-green-400 border-green-500/20',
    subcategories: ['Banking / Financial', 'Cap Table Management', 'Insurance / Tax', 'Market Makers / OTC Desks', 'Exchanges']
  },
  'blockchain-specific': {
    name: 'Blockchain Specific',
    icon: Shield,
    color: 'bg-purple-500/10 text-purple-400 border-purple-500/20',
    subcategories: ['Chains / L1s / L2s', 'Token Tools (Analytics, Staking, Bridges, Wallets)', 'Dev Studios / Auditors']
  },
  'business-operations': {
    name: 'Business Operations',
    icon: Briefcase,
    color: 'bg-orange-500/10 text-orange-400 border-orange-500/20',
    subcategories: ['Payroll / HR / Compliance', 'Productivity', 'Law Firms']
  },
  'marketing-design': {
    name: 'Marketing & Design',
    icon: Palette,
    color: 'bg-pink-500/10 text-pink-400 border-pink-500/20',
    subcategories: ['Marketing / Sales', 'Design / Marketing Agencies']
  }
};

// Sample partner data
const partners = [
  // Technical Infrastructure
  { id: 1, name: 'AWS', category: 'Cloud Credits', description: 'Cloud computing services and infrastructure solutions for scalable applications.', logo: 'https://placehold.co/200x100/333/fff?text=AWS', featured: true, dateAdded: '2024-01-15', dealValue: '$100K Credits' },
  { id: 2, name: 'Alchemy', category: 'Infra (RPC, Nodes, Oracles)', description: 'Blockchain developer platform providing APIs and infrastructure tools.', logo: 'https://placehold.co/200x100/333/fff?text=Alchemy', featured: false, dateAdded: '2024-02-01', dealValue: 'Free Tier' },
  { id: 3, name: 'CertiK', category: 'Cybersecurity', description: 'Leading blockchain security firm providing smart contract audits.', logo: 'https://placehold.co/200x100/333/fff?text=CertiK', featured: true, dateAdded: '2024-01-20', dealValue: '50% Off' },
  { id: 4, name: 'NVIDIA', category: 'AI Compute', description: 'High-performance computing solutions for AI and machine learning workloads.', logo: 'https://placehold.co/200x100/333/fff?text=NVIDIA', featured: false, dateAdded: '2024-03-01', dealValue: 'Startup Credits' },
  
  // Financial Services
  { id: 5, name: 'Mercury', category: 'Banking / Financial', description: 'Modern banking platform designed for startups and growing businesses.', logo: 'https://placehold.co/200x100/333/fff?text=Mercury', featured: true, dateAdded: '2024-01-10', dealValue: 'No Fees' },
  { id: 6, name: 'Carta', category: 'Cap Table Management', description: 'Equity management platform for private companies and investors.', logo: 'https://placehold.co/200x100/333/fff?text=Carta', featured: false, dateAdded: '2024-02-15', dealValue: '6 Months Free' },
  { id: 7, name: 'Wintermute', category: 'Market Makers / OTC Desks', description: 'Leading algorithmic trading and market making firm in crypto.', logo: 'https://placehold.co/200x100/333/fff?text=Wintermute', featured: true, dateAdded: '2024-01-25', dealValue: 'Preferred Rates' },
  { id: 8, name: 'Coinbase', category: 'Exchanges', description: 'Premier cryptocurrency exchange and trading platform.', logo: 'https://placehold.co/200x100/333/fff?text=Coinbase', featured: false, dateAdded: '2024-02-20', dealValue: 'Reduced Fees' },
  
  // Blockchain Specific
  { id: 9, name: 'Polygon', category: 'Chains / L1s / L2s', description: 'Ethereum scaling solution providing faster and cheaper transactions.', logo: 'https://placehold.co/200x100/333/fff?text=Polygon', featured: true, dateAdded: '2024-01-05', dealValue: 'Grant Program' },
  { id: 10, name: 'Dune Analytics', category: 'Token Tools (Analytics, Staking, Bridges, Wallets)', description: 'Blockchain analytics platform for querying and visualizing crypto data.', logo: 'https://placehold.co/200x100/333/fff?text=Dune', featured: false, dateAdded: '2024-02-10', dealValue: 'Pro Access' },
  { id: 11, name: 'OpenZeppelin', category: 'Dev Studios / Auditors', description: 'Security-focused development tools and smart contract auditing services.', logo: 'https://placehold.co/200x100/333/fff?text=OpenZeppelin', featured: true, dateAdded: '2024-01-30', dealValue: 'Audit Credits' },
  
  // Business Operations
  { id: 12, name: 'Gusto', category: 'Payroll / HR / Compliance', description: 'Comprehensive payroll, benefits, and HR platform for modern businesses.', logo: 'https://placehold.co/200x100/333/fff?text=Gusto', featured: false, dateAdded: '2024-02-05', dealValue: '3 Months Free' },
  { id: 13, name: 'Notion', category: 'Productivity', description: 'All-in-one workspace for notes, docs, wikis, and project management.', logo: 'https://placehold.co/200x100/333/fff?text=Notion', featured: true, dateAdded: '2024-01-12', dealValue: 'Team Plan' },
  { id: 14, name: 'Cooley LLP', category: 'Law Firms', description: 'Leading law firm specializing in technology and venture capital matters.', logo: 'https://placehold.co/200x100/333/fff?text=Cooley', featured: false, dateAdded: '2024-02-25', dealValue: 'Startup Package' },
  
  // Marketing & Design
  { id: 15, name: 'HubSpot', category: 'Marketing / Sales', description: 'Comprehensive CRM and marketing automation platform for growth.', logo: 'https://placehold.co/200x100/333/fff?text=HubSpot', featured: true, dateAdded: '2024-01-18', dealValue: 'Startup Tier' },
  { id: 16, name: 'Figma', category: 'Design / Marketing Agencies', description: 'Collaborative design platform for creating user interfaces and experiences.', logo: 'https://placehold.co/200x100/333/fff?text=Figma', featured: false, dateAdded: '2024-02-12', dealValue: 'Pro Features' },
];

// Helper function to get category group
const getCategoryGroup = (category: string) => {
  for (const [groupKey, group] of Object.entries(partnerCategories)) {
    if (group.subcategories.includes(category)) {
      return { key: groupKey, ...group };
    }
  }
  return null;
};

export default function PartnersPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('name');
  const [activeGroup, setActiveGroup] = useState<string | null>(null);

  // Filter and sort partners
  const filteredPartners = useMemo(() => {
    let filtered = partners.filter(partner => {
      const matchesSearch = partner.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           partner.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'all' || partner.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });

    // Sort partners
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'name':
          return a.name.localeCompare(b.name);
        case 'newest':
          return new Date(b.dateAdded).getTime() - new Date(a.dateAdded).getTime();
        case 'featured':
          return b.featured ? 1 : -1;
        default:
          return 0;
      }
    });

    return filtered;
  }, [searchTerm, selectedCategory, sortBy]);

  // Group partners by category group
  const groupedPartners = useMemo(() => {
    const groups: Record<string, typeof partners> = {};
    
    filteredPartners.forEach(partner => {
      const group = getCategoryGroup(partner.category);
      if (group) {
        if (!groups[group.key]) {
          groups[group.key] = [];
        }
        groups[group.key].push(partner);
      }
    });
    
    return groups;
  }, [filteredPartners]);

  // Get all unique categories for filter dropdown
  const allCategories = useMemo(() => {
    const categories = [...new Set(partners.map(p => p.category))];
    return categories.sort();
  }, []);

  return (
    <>
      {/* Clean Hero Section */}
      <SectionWrapper className="py-24 text-center">
        <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 mb-6">
          Preferred Partner Network
        </h1>
        <p className="text-xl text-foreground/80 max-w-3xl mx-auto mb-12">
          Connecting innovative Web3 projects with industry-leading partners to accelerate growth and success. 
          Access exclusive deals and resources from our curated network of trusted service providers.
        </p>

        {/* Simple Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
          {[
            { label: 'Partners', value: '50+' },
            { label: 'Categories', value: '18' },
            { label: 'Total Value', value: '$2M+' },
            { label: 'Success Rate', value: '95%' }
          ].map((stat, index) => (
            <div key={stat.label} className="p-4 rounded-lg bg-card border border-border">
              <div className="text-2xl font-bold text-purple-400">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Search and Filter Controls */}
      <SectionWrapper className="py-8 border-b border-border">
        <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
          {/* Search */}
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              type="text"
              placeholder="Search partners..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>

          {/* Filters */}
          <div className="flex gap-4 items-center">
            <div className="flex items-center gap-2">
              <Filter className="h-4 w-4 text-muted-foreground" />
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Filter by category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  {allCategories.map(category => (
                    <SelectItem key={category} value={category}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="flex items-center gap-2">
              <SortAsc className="h-4 w-4 text-muted-foreground" />
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="name">Name A-Z</SelectItem>
                  <SelectItem value="newest">Newest First</SelectItem>
                  <SelectItem value="featured">Featured First</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        {/* Results count */}
        <div className="mt-4 flex items-center justify-between">
          <div className="text-sm text-muted-foreground flex items-center gap-2">
            <Eye className="h-4 w-4" />
            Showing {filteredPartners.length} of {partners.length} partners
          </div>
          {searchTerm && (
            <Button
              onClick={() => setSearchTerm('')}
              variant="ghost"
              size="sm"
            >
              Clear search
            </Button>
          )}
        </div>
      </SectionWrapper>

      {/* Category Navigation */}
      <div className="sticky top-20 z-40 bg-background/95 backdrop-blur border-b border-border">
        <SectionWrapper className="py-4">
          <div className="flex flex-wrap gap-2 justify-center">
            {Object.entries(partnerCategories).map(([key, category]) => {
              const count = groupedPartners[key]?.length || 0;
              const Icon = category.icon;
              const isActive = activeGroup === key;
              
              return (
                <Button
                  key={key}
                  variant={isActive ? "default" : "ghost"}
                  onClick={() => setActiveGroup(isActive ? null : key)}
                  className="flex items-center gap-2"
                >
                  <Icon className="h-4 w-4" />
                  {category.name}
                  {count > 0 && (
                    <Badge variant="secondary" className="ml-1 text-xs">
                      {count}
                    </Badge>
                  )}
                </Button>
              );
            })}
          </div>
        </SectionWrapper>
      </div>

      {/* Partners Grid */}
      <SectionWrapper className="py-12">
        {Object.entries(groupedPartners).length === 0 ? (
          <div className="text-center py-16">
            <Search className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <div className="text-xl font-semibold mb-2">No partners found</div>
            <div className="text-muted-foreground mb-6">Try adjusting your search criteria</div>
            <Button 
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('all');
                setActiveGroup(null);
              }}
            >
              Clear All Filters
            </Button>
          </div>
        ) : (
          <div>
            {Object.entries(groupedPartners).map(([groupKey, groupPartners]) => {
              const categoryInfo = partnerCategories[groupKey as keyof typeof partnerCategories];
              const Icon = categoryInfo.icon;
              
              // Skip if activeGroup is set and this isn't the active group
              if (activeGroup && activeGroup !== groupKey) return null;
              
              return (
                <div key={groupKey} className="mb-16">
                  {/* Category Header */}
                  <div className="flex items-center gap-4 mb-8">
                    <div className={`p-3 rounded-lg ${categoryInfo.color}`}>
                      <Icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-foreground">
                        {categoryInfo.name}
                      </h2>
                      <p className="text-muted-foreground">{groupPartners.length} partners available</p>
                    </div>
                  </div>

                  {/* Partners Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {groupPartners.map((partner) => (
                      <Card key={partner.id} className="h-[400px] flex flex-col hover:shadow-lg transition-shadow duration-200">
                        {/* Featured badge */}
                        {partner.featured && (
                          <div className="absolute top-4 right-4 z-10">
                            <Badge className="bg-purple-500 text-white">
                              <Star className="h-3 w-3 mr-1" />
                              Featured
                            </Badge>
                          </div>
                        )}

                        {/* Deal value badge */}
                        <div className="absolute top-4 left-4 z-10">
                          <Badge variant="outline" className="bg-background">
                            {partner.dealValue}
                          </Badge>
                        </div>

                        <CardHeader className="pb-4">
                          {/* Logo */}
                          <div className="w-full h-24 mb-4 flex items-center justify-center bg-muted/50 rounded-lg">
                            <Image
                              src={partner.logo}
                              alt={`${partner.name} logo`}
                              width={120}
                              height={60}
                              className="object-contain max-w-full max-h-full"
                            />
                          </div>
                          
                          <CardTitle className="text-lg">{partner.name}</CardTitle>
                          <Badge variant="outline" className="w-fit text-xs">
                            {partner.category}
                          </Badge>
                        </CardHeader>

                        <CardContent className="flex-1 flex flex-col justify-between">
                          <CardDescription className="text-sm mb-4 line-clamp-3">
                            {partner.description}
                          </CardDescription>

                          <Button className="w-full bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 text-white">
                            <span>Access Deal</span>
                            <ExternalLink className="h-4 w-4 ml-2" />
                          </Button>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </SectionWrapper>

      {/* Simple CTA Section */}
      <SectionWrapper className="py-16 text-center bg-muted/30">
        <h2 className="text-3xl font-bold mb-4">Ready to Join Our Network?</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
          Partner with Denarii Labs to reach innovative Web3 startups and provide exclusive value to our portfolio companies.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 text-white">
            Become a Partner
            <ArrowRight className="h-4 w-4 ml-2" />
          </Button>
          <Button size="lg" variant="outline">
            Refer a Partner
            <Users className="h-4 w-4 ml-2" />
          </Button>
        </div>
      </SectionWrapper>
    </>
  );
}