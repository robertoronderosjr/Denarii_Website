import Link from "next/link";
import Image from "next/image";
import { Linkedin, Youtube } from "lucide-react";
import { SITE_NAME } from "@/lib/constants";

// Custom X (formerly Twitter) icon component
const XIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="lucide"
  >
    <path d="M13.6823 10.6218L20.2391 3H18.6854L12.9921 9.61788L8.44486 3H3.2002L10.0765 13.0074L3.2002 21H4.75404L10.7663 14.0113L15.5549 21H20.7996L13.6819 10.6218H13.6823ZM11.5541 13.0956L10.8574 12.0991L5.31391 4.16971H7.70053L12.1742 10.5689L12.8709 11.5655L18.6861 19.8835H16.2995L11.5541 13.096V13.0956Z" />
  </svg>
);

// Custom Medium icon component based on the official logo
const MediumIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="lucide"
  >
    <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
  </svg>
);

export function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: XIcon, href: "https://twitter.com/denariilabs", label: "X" },
    {
      icon: Linkedin,
      href: "https://linkedin.com/company/denariilabs",
      label: "LinkedIn",
    },
    {
      icon: MediumIcon,
      href: "https://denariilabs.medium.com/",
      label: "Medium",
    },
    {
      icon: Youtube,
      href: "https://www.youtube.com/channel/UCw-77WSWOmUh6Q_3oTTHhLQ",
      label: "YouTube",
    },
  ];

  return (
    <footer className="border-t border-border/50 bg-background/90 py-10 text-foreground/80">
      <div className="w-full max-w-4xl px-4 md:px-6 mx-auto">
        <div className="w-full">
          <div className="grid grid-cols-1 gap-y-8 md:grid-cols-2 gap-x-4 lg:grid-cols-4 lg:gap-x-6">
            {/* Column 1: Brand */}
            <div className="flex flex-col space-y-5">
              <Link
                href="/"
                className="inline-flex items-center gap-3"
                aria-label={`${SITE_NAME} homepage`}
              >
                <div className="relative h-10 w-10 overflow-hidden">
                  <Image
                    src="/D_Logo.svg"
                    alt="Denarii Labs Logo"
                    width={40}
                    height={40}
                    className="h-full w-full object-contain filter brightness-0 invert"
                    quality={100}
                  />
                </div>
                <span className="text-xl font-bold text-foreground">
                  {SITE_NAME}
                </span>
              </Link>

              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <Link
                    key={social.href}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground/70 transition-colors hover:text-primary"
                    aria-label={social.label}
                    title={social.label}
                  >
                    <social.icon className="h-5 w-5" />
                  </Link>
                ))}
              </div>

              <p className="text-sm text-foreground/70">
                Pioneering the future of decentralized technologies.
              </p>
            </div>

            {/* Column 2: Services */}
            <div>
              <h3 className="mb-4 text-base font-semibold text-foreground">
                Services
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/accelerator"
                    className="text-sm text-foreground/70 transition-colors hover:text-primary"
                  >
                    Accelerator
                  </Link>
                </li>
                <li>
                  <Link
                    href="/consulting"
                    className="text-sm text-foreground/70 transition-colors hover:text-primary"
                  >
                    Consulting
                  </Link>
                </li>
                <li>
                  <Link
                    href="/partners"
                    className="text-sm text-foreground/70 transition-colors hover:text-primary"
                  >
                    Partners
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3: Company */}
            <div>
              <h3 className="mb-4 text-base font-semibold text-foreground">
                Company
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/about"
                    className="text-sm text-foreground/70 transition-colors hover:text-primary"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/team"
                    className="text-sm text-foreground/70 transition-colors hover:text-primary"
                  >
                    Team
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blog"
                    className="text-sm text-foreground/70 transition-colors hover:text-primary"
                  >
                    Blog
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 4: Legal */}
            <div>
              <h3 className="mb-4 text-base font-semibold text-foreground">
                Legal
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/privacy"
                    className="text-sm text-foreground/70 transition-colors hover:text-primary"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/terms"
                    className="text-sm text-foreground/70 transition-colors hover:text-primary"
                  >
                    Terms & Conditions
                  </Link>
                </li>
                <li>
                  <Link
                    href="/security"
                    className="text-sm text-foreground/70 transition-colors hover:text-primary"
                  >
                    Security Procedures
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="w-full">
            <div className="mt-10 border-t border-border/50 pt-8 text-sm text-foreground/60 text-center">
              <p>
                &copy; {currentYear} {SITE_NAME}. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
