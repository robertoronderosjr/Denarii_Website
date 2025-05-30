import type { LucideIcon } from 'lucide-react';

export type NavLink = {
  href: string;
  label: string;
  icon?: LucideIcon;
};

export const NAV_LINKS: NavLink[] = [
  { href: "/accelerator", label: "Accelerator" },
  { href: "/consulting", label: "Consulting" },
  { href: "/partners", label: "Partners" },
  { href: "/about", label: "About Us" },
];

export const SITE_NAME = "Denarii Labs";
