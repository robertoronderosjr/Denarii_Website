"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

import { NAV_LINKS, SITE_NAME } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="sticky top-4 z-50 w-full transition-all duration-300 px-4">
      <div
        className={cn(
          "w-full max-w-7xl mx-auto flex items-center justify-between rounded-full px-6 py-3 backdrop-blur-lg border border-white/10 ring-1 ring-white/5 shadow-lg shadow-purple-900/5 transition-all duration-300",
          isScrolled
            ? "bg-black/80 backdrop-blur-xl backdrop-saturate-150"
            : "bg-black/80 backdrop-blur-xl backdrop-saturate-150"
        )}
      >
        {/* Logo on the left */}
        <Link
          href="/"
          className="flex items-center gap-4"
          aria-label={`${SITE_NAME} homepage`}
        >
          <div className="relative h-14 w-14 overflow-hidden">
            <Image
              src="/D_Logo.svg"
              alt="Denarii Labs Logo"
              width={56}
              height={56}
              className="h-full w-full object-contain filter brightness-0 invert"
              priority
              quality={100}
            />
          </div>
          <span className="text-2xl font-extrabold tracking-tight">
            {SITE_NAME}
          </span>
        </Link>

        {/* Navigation links and CTA button on the right */}
        <div className="hidden md:flex items-center gap-8">
          <nav className="flex items-center gap-8">
            {NAV_LINKS.map((link) => {
              // Special handling for Accelerator dropdown
              if (link.label === "Accelerator") {
                return (
                  <div key={link.href} className="relative group">
                    <Link
                      href={link.href}
                      className={cn(
                        "text-lg font-medium transition-colors hover:text-primary flex items-center",
                        pathname === link.href
                          ? "text-primary"
                          : "text-gray-100"
                      )}
                    >
                      {link.label}
                      <svg
                        className="ml-1 h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </Link>

                    {/* Invisible bridge to ensure continuous hover area */}
                    <div className="absolute h-4 w-full left-0 bottom-0 translate-y-full"></div>

                    {/* Dropdown menu */}
                    <div className="absolute top-[calc(100%+12px)] left-0 z-50 bg-black w-56 rounded-xl shadow-md py-1 border border-white/10 transition-all duration-200 ease-out origin-top scale-y-95 opacity-0 group-hover:opacity-100 group-hover:scale-y-100 hidden group-hover:flex hover:flex flex-col pointer-events-auto">
                      <Link
                        href="/accelerator/wire-network"
                        className="block px-4 py-3 text-base font-medium text-white hover:bg-purple-600 cursor-pointer transition-colors rounded-lg mx-1 my-0.5 whitespace-nowrap"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        Wire Network
                      </Link>
                      <Link
                        href="/accelerator/avalanche"
                        className="block px-4 py-3 text-base font-medium text-white hover:bg-purple-600 cursor-pointer transition-colors rounded-lg mx-1 my-0.5 whitespace-nowrap"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        Avalanche
                      </Link>
                      <Link
                        href="/accelerator/xion"
                        className="block px-4 py-3 text-base font-medium text-white hover:bg-purple-600 cursor-pointer transition-colors rounded-lg mx-1 my-0.5 whitespace-nowrap"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        XION
                      </Link>
                      <Link
                        href="/accelerator/f-ecosystem"
                        className="block px-4 py-3 text-base font-medium text-white hover:bg-purple-600 cursor-pointer transition-colors rounded-lg mx-1 my-0.5 whitespace-nowrap"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        F-Ecosystem
                      </Link>
                    </div>
                  </div>
                );
              }

              // Regular nav links
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "text-lg font-medium transition-colors hover:text-primary",
                    pathname === link.href ? "text-primary" : "text-gray-100"
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <Button
            asChild
            className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-semibold rounded-full px-6 py-2.5 shadow-md hover:scale-105 transition-all duration-300 ease-in-out text-lg"
          >
            <Link href="/apply">Apply Now</Link>
          </Button>
        </div>

        <div className="md:hidden relative">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleMobileMenu}
            className="text-white"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
            <span className="sr-only">
              {isMobileMenuOpen
                ? "Close navigation menu"
                : "Open navigation menu"}
            </span>
          </Button>

          {isMobileMenuOpen && (
            <div className="absolute top-16 right-4 bg-gradient-to-r from-black/50 to-black/30 backdrop-blur-md rounded-lg p-4 space-y-4 shadow-md shadow-white/5 border border-white/10 ring-1 ring-white/10 z-50 min-w-[200px]">
              <nav className="flex flex-col space-y-4">
                {NAV_LINKS.map((link) => {
                  // Special handling for Accelerator in mobile menu
                  if (link.label === "Accelerator") {
                    return (
                      <div key={link.href} className="space-y-2">
                        <Link
                          href={link.href}
                          className={cn(
                            "px-3 py-2 text-base font-medium transition-colors hover:text-primary rounded-md flex items-center justify-between",
                            pathname === link.href
                              ? "text-primary"
                              : "text-gray-100"
                          )}
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {link.label}
                        </Link>

                        {/* Mobile submenu items */}
                        <div className="pl-4 space-y-2 border-l border-white/10">
                          <Link
                            href="/accelerator/wire-network"
                            className="px-3 py-1 text-sm text-gray-300 hover:bg-purple-600 hover:text-white rounded-md transition-colors block"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            Wire Network
                          </Link>
                          <Link
                            href="/accelerator/avalanche"
                            className="px-3 py-1 text-sm text-gray-300 hover:bg-purple-600 hover:text-white rounded-md transition-colors block"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            Avalanche
                          </Link>
                          <Link
                            href="/accelerator/xion"
                            className="px-3 py-1 text-sm text-gray-300 hover:bg-purple-600 hover:text-white rounded-md transition-colors block"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            XION
                          </Link>
                          <Link
                            href="/accelerator/f-ecosystem"
                            className="px-3 py-1 text-sm text-gray-300 hover:bg-purple-600 hover:text-white rounded-md transition-colors block"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            F-Ecosystem
                          </Link>
                        </div>
                      </div>
                    );
                  }

                  // Regular mobile nav links
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={cn(
                        "px-3 py-2 text-base font-medium transition-colors hover:text-primary rounded-md",
                        pathname === link.href
                          ? "text-primary"
                          : "text-gray-100"
                      )}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  );
                })}
                <Link
                  href="/apply"
                  className="rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 px-6 py-2.5 text-base font-semibold text-white shadow-md hover:scale-105 transition-all duration-300 ease-in-out flex items-center justify-center"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Apply Now
                </Link>
              </nav>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
