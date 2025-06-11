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
  ChevronDown,
  ExternalLink,
  Star,
  ArrowRight,
  Sparkles,
  Zap,
  Network,
  Globe,
  TrendingUp,
  Award,
  Eye,
  Heart,
  Rocket
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
import { motion } from 'framer-motion';

// Partner categories with organized groupings and enhanced styling
const partnerCategories = {
  'technical-infrastructure': {
    name: 'Technical Infrastructure',
    icon: Cpu,
    color: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
    gradient: 'from-blue-500/20 to-cyan-500/20',
    subcategories: ['Cloud Credits', 'Infra (RPC, Nodes, Oracles)', 'Cybersecurity', 'Tech', 'Hardware', 'AI Compute']
  },
  'financial-services': {
    name: 'Financial Services',
    icon: DollarSign,
    color: 'bg-green-500/10 text-green-400 border-green-500/20',
    gradient: 'from-green-500/20 to-emerald-500/20',
    subcategories: ['Banking / Financial', 'Cap Table Management', 'Insurance / Tax', 'Market Makers / OTC Desks', 'Exchanges']
  },
  'blockchain-specific': {
    name: 'Blockchain Specific',
    icon: Shield,
    color: 'bg-purple-500/10 text-purple-400 border-purple-500/20',
    gradient: 'from-purple-500/20 to-indigo-500/20',
    subcategories: ['Chains / L1s / L2s', 'Token Tools (Analytics, Staking, Bridges, Wallets)', 'Dev Studios / Auditors']
  },
  'business-operations': {
    name: 'Business Operations',
    icon: Briefcase,
    color: 'bg-orange-500/10 text-orange-400 border-orange-500/20',
    gradient: 'from-orange-500/20 to-red-500/20',
    subcategories: ['Payroll / HR / Compliance', 'Productivity', 'Law Firms']
  },
  'marketing-design': {
    name: 'Marketing & Design',
    icon: Palette,
    color: 'bg-pink-500/10 text-pink-400 border-pink-500/20',
    gradient: 'from-pink-500/20 to-rose-500/20',
    subcategories: ['Marketing / Sales', 'Design / Marketing Agencies']
  }
};

// Enhanced sample partner data with more realistic information
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

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
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
      {/* Epic Hero Section */}
      <SectionWrapper className="py-32 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-purple-500/5 via-pink-500/5 to-indigo-500/5 rounded-full blur-3xl animate-spin" style={{ animationDuration: '20s' }} />
        </div>

        <div className="relative text-center max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            {/* Floating Icons */}
            <div className="flex items-center justify-center gap-6 mb-8">
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="p-4 rounded-2xl bg-gradient-to-r from-purple-500/10 to-indigo-500/10 border border-purple-500/20"
              >
                <Users className="h-8 w-8 text-purple-400" />
              </motion.div>
              <motion.div
                className="h-px w-24 bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
              />
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="p-4 rounded-2xl bg-gradient-to-r from-indigo-500/10 to-purple-500/10 border border-indigo-500/20"
              >
                <Sparkles className="h-8 w-8 text-indigo-400" />
              </motion.div>
            </div>

            <motion.h1 
              className="text-5xl md:text-7xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 leading-tight"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Preferred Partner Network
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-foreground/80 max-w-4xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Connecting innovative Web3 projects with industry-leading partners to accelerate growth and success. 
              Access exclusive deals and resources from our curated network of trusted service providers.
            </motion.p>

            {/* Stats Cards */}
            <motion.div
              className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mt-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {[
                { label: 'Partners', value: '50+', icon: Users },
                { label: 'Categories', value: '18', icon: Grid3X3 },
                { label: 'Total Value', value: '$2M+', icon: DollarSign },
                { label: 'Success Rate', value: '95%', icon: TrendingUp }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="group relative p-6 rounded-2xl bg-gradient-to-br from-gray-900/80 to-gray-950/90 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/20"
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-indigo-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative text-center">
                    <stat.icon className="h-8 w-8 text-purple-400 mx-auto mb-3" />
                    <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </SectionWrapper>

      {/* Enhanced Search and Filter Controls */}
      <SectionWrapper className="py-12 border-b border-gray-800/50 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/5 via-transparent to-indigo-900/5" />
        <div className="relative">
          <motion.div
            className="flex flex-col lg:flex-row gap-8 items-center justify-between"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {/* Enhanced Search */}
            <div className="relative flex-1 max-w-md group">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-indigo-500/20 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-purple-400 h-5 w-5 z-10" />
                <Input
                  type="text"
                  placeholder="Search partners..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-12 pr-4 py-4 bg-gray-900/80 border border-purple-500/20 text-white placeholder-gray-400 rounded-xl focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all duration-300"
                />
              </div>
            </div>

            {/* Enhanced Filters */}
            <div className="flex flex-wrap gap-6 items-center">
              <div className="flex items-center gap-3 group">
                <div className="p-2 rounded-lg bg-gradient-to-r from-purple-500/10 to-indigo-500/10 border border-purple-500/20 group-hover:border-purple-500/40 transition-colors duration-300">
                  <Filter className="h-4 w-4 text-purple-400" />
                </div>
                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                  <SelectTrigger className="w-56 bg-gray-900/80 border border-purple-500/20 text-white hover:border-purple-500/40 transition-colors duration-300">
                    <SelectValue placeholder="Filter by category" />
                  </SelectTrigger>
                  <SelectContent className="bg-gray-900 border-purple-500/20">
                    <SelectItem value="all">All Categories</SelectItem>
                    {allCategories.map(category => (
                      <SelectItem key={category} value={category}>
                        {category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="flex items-center gap-3 group">
                <div className="p-2 rounded-lg bg-gradient-to-r from-indigo-500/10 to-purple-500/10 border border-indigo-500/20 group-hover:border-indigo-500/40 transition-colors duration-300">
                  <SortAsc className="h-4 w-4 text-indigo-400" />
                </div>
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-48 bg-gray-900/80 border border-indigo-500/20 text-white hover:border-indigo-500/40 transition-colors duration-300">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent className="bg-gray-900 border-indigo-500/20">
                    <SelectItem value="name">Name A-Z</SelectItem>
                    <SelectItem value="newest">Newest First</SelectItem>
                    <SelectItem value="featured">Featured First</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </motion.div>

          {/* Enhanced Results count */}
          <motion.div 
            className="mt-6 flex items-center justify-between"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <div className="text-sm text-gray-400 flex items-center gap-2">
              <Eye className="h-4 w-4" />
              Showing <span className="text-purple-400 font-semibold">{filteredPartners.length}</span> of <span className="text-indigo-400 font-semibold">{partners.length}</span> partners
            </div>
            {searchTerm && (
              <Button
                onClick={() => setSearchTerm('')}
                variant="ghost"
                size="sm"
                className="text-purple-400 hover:text-white hover:bg-purple-900/20"
              >
                Clear search
              </Button>
            )}
          </motion.div>
        </div>
      </SectionWrapper>

      {/* Floating Category Navigation */}
      <div className="sticky top-20 z-40 bg-black/95 backdrop-blur-xl border-b border-gray-800/50">
        <SectionWrapper className="py-6">
          <motion.div 
            className="flex flex-wrap gap-3 justify-center"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {Object.entries(partnerCategories).map(([key, category]) => {
              const count = groupedPartners[key]?.length || 0;
              const Icon = category.icon;
              const isActive = activeGroup === key;
              
              return (
                <motion.div key={key} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    variant="ghost"
                    onClick={() => setActiveGroup(isActive ? null : key)}
                    className={`group relative flex items-center gap-3 px-6 py-3 rounded-2xl transition-all duration-300 overflow-hidden ${
                      isActive 
                        ? 'bg-gradient-to-r from-purple-500/20 to-indigo-500/20 text-white border-2 border-purple-500/40 shadow-lg shadow-purple-500/20' 
                        : 'text-gray-300 hover:text-white hover:bg-gray-800/50 border-2 border-transparent hover:border-gray-700/50'
                    }`}
                  >
                    {/* Animated background */}
                    <div className={`absolute inset-0 bg-gradient-to-r ${category.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                    
                    <div className="relative flex items-center gap-3">
                      <div className={`p-2 rounded-lg ${category.color} transition-all duration-300 ${isActive ? 'scale-110' : 'group-hover:scale-105'}`}>
                        <Icon className="h-4 w-4" />
                      </div>
                      <span className="font-medium">{category.name}</span>
                      {count > 0 && (
                        <Badge 
                          variant="secondary" 
                          className={`ml-1 text-xs transition-all duration-300 ${
                            isActive 
                              ? 'bg-purple-500/30 text-purple-200 border-purple-400/30' 
                              : 'bg-gray-700/50 text-gray-300 border-gray-600/30'
                          }`}
                        >
                          {count}
                        </Badge>
                      )}
                    </div>
                  </Button>
                </motion.div>
              );
            })}
          </motion.div>
        </SectionWrapper>
      </div>

      {/* Epic Partners Grid */}
      <SectionWrapper className="py-16">
        {Object.entries(groupedPartners).length === 0 ? (
          <motion.div 
            className="text-center py-32"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-indigo-500/10 rounded-3xl blur-2xl" />
              <div className="relative p-16 rounded-3xl bg-gradient-to-br from-gray-900/80 to-gray-950/90 border border-purple-500/20">
                <Search className="h-16 w-16 text-purple-400 mx-auto mb-6" />
                <div className="text-2xl font-bold text-white mb-4">No partners found</div>
                <div className="text-gray-400 text-lg mb-8">Try adjusting your search criteria</div>
                <Button 
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedCategory('all');
                    setActiveGroup(null);
                  }}
                  className="bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 text-white font-semibold px-8 py-3 rounded-xl transition-all duration-300 hover:scale-105"
                >
                  Clear All Filters
                </Button>
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {Object.entries(groupedPartners).map(([groupKey, groupPartners]) => {
              const categoryInfo = partnerCategories[groupKey as keyof typeof partnerCategories];
              const Icon = categoryInfo.icon;
              
              // Skip if activeGroup is set and this isn't the active group
              if (activeGroup && activeGroup !== groupKey) return null;
              
              return (
                <motion.div key={groupKey} className="mb-20" variants={itemVariants}>
                  {/* Enhanced Category Header */}
                  <motion.div 
                    className="flex items-center gap-6 mb-12 relative"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                  >
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-2xl blur-lg opacity-50" />
                      <div className={`relative p-4 rounded-2xl ${categoryInfo.color} border-2`}>
                        <Icon className="h-8 w-8" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-indigo-400">
                        {categoryInfo.name}
                      </h2>
                      <div className="flex items-center gap-4 mt-2">
                        <p className="text-gray-400 text-lg">{groupPartners.length} partners available</p>
                        <div className="h-px flex-1 bg-gradient-to-r from-purple-500/50 to-transparent" />
                      </div>
                    </div>
                  </motion.div>

                  {/* Enhanced Partners Grid */}
                  <motion.div 
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
                    variants={containerVariants}
                  >
                    {groupPartners.map((partner, index) => (
                      <motion.div
                        key={partner.id}
                        variants={itemVariants}
                        whileHover={{ y: -10, scale: 1.02 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                      >
                        <Card className="group relative h-[450px] bg-gradient-to-br from-gray-900/90 to-gray-950/95 border border-gray-800/50 hover:border-purple-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-900/30 overflow-hidden">
                          {/* Animated background effects */}
                          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />

                          {/* Featured badge with enhanced styling */}
                          {partner.featured && (
                            <motion.div 
                              className="absolute top-4 right-4 z-20"
                              initial={{ scale: 0, rotate: -180 }}
                              animate={{ scale: 1, rotate: 0 }}
                              transition={{ delay: index * 0.1, duration: 0.5, type: "spring" }}
                            >
                              <Badge className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white border-none shadow-lg shadow-purple-500/30 px-3 py-1">
                                <Star className="h-3 w-3 mr-1 animate-pulse" />
                                Featured
                              </Badge>
                            </motion.div>
                          )}

                          {/* Deal value badge */}
                          <motion.div 
                            className="absolute top-4 left-4 z-20"
                            initial={{ scale: 0, rotate: 180 }}
                            animate={{ scale: 1, rotate: 0 }}
                            transition={{ delay: index * 0.1 + 0.2, duration: 0.5, type: "spring" }}
                          >
                            <Badge className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 text-green-400 border border-green-500/30 px-3 py-1">
                              {partner.dealValue}
                            </Badge>
                          </motion.div>

                          <CardHeader className="relative z-10 pb-4">
                            {/* Enhanced Logo */}
                            <motion.div 
                              className="w-full h-28 mb-6 flex items-center justify-center bg-white/5 rounded-xl overflow-hidden border border-white/10 group-hover:border-purple-500/30 transition-all duration-300"
                              whileHover={{ scale: 1.05 }}
                            >
                              <Image
                                src={partner.logo}
                                alt={`${partner.name} logo`}
                                width={180}
                                height={90}
                                className="object-contain max-w-full max-h-full filter group-hover:brightness-110 transition-all duration-300"
                              />
                            </motion.div>
                            
                            {/* Partner name with enhanced typography */}
                            <CardTitle className="text-xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-indigo-400 transition-all duration-300">
                              {partner.name}
                            </CardTitle>
                            
                            {/* Enhanced category badge */}
                            <Badge 
                              variant="outline" 
                              className={`w-fit text-xs mt-2 ${categoryInfo.color} group-hover:scale-105 transition-transform duration-300`}
                            >
                              {partner.category}
                            </Badge>
                          </CardHeader>

                          <CardContent className="relative z-10 flex-1 flex flex-col justify-between">
                            {/* Enhanced description */}
                            <CardDescription className="text-gray-300 text-sm leading-relaxed mb-6 line-clamp-3 group-hover:text-gray-200 transition-colors duration-300">
                              {partner.description}
                            </CardDescription>

                            {/* Enhanced CTA Button */}
                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                              <Button className="w-full bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 text-white font-bold py-4 rounded-xl shadow-lg shadow-purple-500/30 transition-all duration-300 group-hover:shadow-purple-500/50 flex items-center justify-center gap-3 relative overflow-hidden">
                                {/* Button background animation */}
                                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                <div className="relative flex items-center gap-3">
                                  <Rocket className="h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
                                  Access Deal
                                  <ExternalLink className="h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                                </div>
                              </Button>
                            </motion.div>
                          </CardContent>
                        </Card>
                      </motion.div>
                    ))}
                  </motion.div>
                </motion.div>
              );
            })}
          </motion.div>
        )}
      </SectionWrapper>

      {/* Epic CTA Section */}
      <SectionWrapper className="py-32 relative overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-900/10 via-transparent to-indigo-900/10" />
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        <div className="relative max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Floating elements */}
            <div className="flex items-center justify-center gap-6 mb-8">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="p-4 rounded-2xl bg-gradient-to-r from-purple-500/10 to-indigo-500/10 border border-purple-500/20"
              >
                <Network className="h-8 w-8 text-purple-400" />
              </motion.div>
              <motion.div
                className="h-px w-24 bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="p-4 rounded-2xl bg-gradient-to-r from-indigo-500/10 to-purple-500/10 border border-indigo-500/20"
              >
                <Heart className="h-8 w-8 text-indigo-400" />
              </motion.div>
            </div>

            <h2 className="text-4xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 leading-tight">
              Ready to Join Our Network?
            </h2>
            
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Partner with Denarii Labs to reach innovative Web3 startups and provide exclusive value to our portfolio companies. 
              Join the most trusted partner network in Web3.
            </p>

            <motion.div
              className="flex flex-col sm:flex-row gap-6 justify-center mt-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button className="group relative bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 text-white font-bold py-6 px-12 rounded-2xl shadow-2xl shadow-purple-500/30 transition-all duration-300 text-lg overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative flex items-center gap-3">
                    <Rocket className="h-6 w-6 group-hover:rotate-12 transition-transform duration-300" />
                    Become a Partner
                    <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </Button>
              </motion.div>
              
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button 
                  variant="outline"
                  className="group border-2 border-purple-500/30 text-purple-300 hover:bg-purple-900/20 hover:text-white hover:border-purple-500/60 py-6 px-12 rounded-2xl transition-all duration-300 text-lg font-bold"
                >
                  <div className="flex items-center gap-3">
                    <Users className="h-6 w-6 group-hover:scale-110 transition-transform duration-300" />
                    Refer a Partner
                    <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </Button>
              </motion.div>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              className="flex items-center justify-center gap-8 mt-16 text-gray-400"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-green-400" />
                <span>Trusted by 50+ partners</span>
              </div>
              <div className="h-4 w-px bg-gray-600" />
              <div className="flex items-center gap-2">
                <Award className="h-5 w-5 text-purple-400" />
                <span>$2M+ in partner value</span>
              </div>
              <div className="h-4 w-px bg-gray-600" />
              <div className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-indigo-400" />
                <span>95% success rate</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </SectionWrapper>
    </>
  );
}

// Helper component for grid icon
function Grid3X3(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="18" height="18" x="3" y="3" rx="2" />
      <path d="M9 3v18" />
      <path d="M15 3v18" />
      <path d="M3 9h18" />
      <path d="M3 15h18" />
    </svg>
  );
}