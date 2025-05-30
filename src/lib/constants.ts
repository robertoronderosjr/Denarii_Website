import type { LucideIcon } from 'lucide-react';

export type NavLink = {
  href: string;
  label: string;
  icon?: LucideIcon;
};

export const NAV_LINKS: NavLink[] = [
  { href: "/", label: "Home" },
  { href: "/accelerator", label: "Accelerator" },
  { href: "/consulting", label: "Consulting" },
  { href: "/partners", label: "Partners" },
  { href: "/insights", label: "Insights" },
];

export const SITE_NAME = "Denarii Labs";
