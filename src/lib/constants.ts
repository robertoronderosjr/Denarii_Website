import type { LucideIcon } from "lucide-react";

export type NavLink = {
  href: string;
  label: string;
  icon?: LucideIcon;
  children?: { href: string; label: string }[];
};

export const NAV_LINKS: NavLink[] = [
  { href: "/accelerator", label: "Accelerator" },
  { href: "/consulting", label: "Consulting" },
  { href: "/partners", label: "Partners" },
  {
    href: "/about",
    label: "About Us",
    children: [
      { href: "/about/team", label: "Team" },
      { href: "/blog", label: "Blog" },
    ],
  },
];

export const SITE_NAME = "Denarii Labs";
