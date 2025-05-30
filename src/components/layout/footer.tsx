import Link from "next/link";
import { Coins, Linkedin, Twitter, Github } from "lucide-react";
import { NAV_LINKS, SITE_NAME } from "@/lib/constants";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Twitter, href: "https://twitter.com/denariilabs", label: "Twitter" },
    { icon: Linkedin, href: "https://linkedin.com/company/denariilabs", label: "LinkedIn" },
    { icon: Github, href: "https://github.com/denariilabs", label: "GitHub" },
  ];

  return (
    <footer className="border-t border-border/50 bg-background/90 py-12 text-foreground/80">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <Link href="/" className="mb-4 inline-flex items-center gap-2" aria-label={`${SITE_NAME} homepage`}>
              <Coins className="h-8 w-8 text-primary" />
              <span className="text-xl font-semibold text-foreground">{SITE_NAME}</span>
            </Link>
            <p className="text-sm">
              Pioneering the future of decentralized technologies.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold text-foreground">Quick Links</h3>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold text-foreground">Connect With Us</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <Link
                  key={social.href}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground/70 transition-colors hover:text-primary"
                  aria-label={social.label}
                >
                  <social.icon className="h-6 w-6" />
                </Link>
              ))}
            </div>
             <p className="mt-4 text-sm">
              contact@denariilabs.com
            </p>
          </div>
        </div>

        <div className="mt-8 border-t border-border/50 pt-8 text-center text-sm">
          <p>&copy; {currentYear} {SITE_NAME}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
