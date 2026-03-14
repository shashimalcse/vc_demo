"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

const landingLinks = [
  { label: "About VCs", href: "#what-are-vcs", isHash: true },
  { label: "Issuance", href: "/issuance", isHash: false },
  { label: "Verification", href: "/verification", isHash: false },
];

const issuanceLinks = [
  { label: "OID4VCI", href: "#what-is-oid4vci", isHash: true },
  { label: "Try It", href: "#credentials", isHash: true },
  { label: "Wallets", href: "#wallets", isHash: true },
];

const verificationLinks = [
  { label: "Home", href: "/", isHash: false },
  { label: "Issuance", href: "/issuance", isHash: false },
];

function getNavLinks(pathname: string) {
  if (pathname === "/issuance") return issuanceLinks;
  if (pathname === "/verification") return verificationLinks;
  return landingLinks;
}

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuPath, setMobileMenuPath] = useState<string | null>(null);
  const isLanding = pathname === "/";
  const mobileOpen = mobileMenuPath === pathname;

  const navLinks = getNavLinks(pathname);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const showBg = !isLanding || scrolled;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        showBg
          ? "bg-white/95 backdrop-blur-sm shadow-sm border-b border-gray-200/60"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center">
            <span className="text-gray-900 font-semibold text-lg">
              Verifiable Credentials
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) =>
              link.isHash ? (
                <a
                  key={link.href}
                  href={link.href}
                  className="px-3 py-2 text-sm text-gray-500 hover:text-gray-900 transition-colors rounded-md hover:bg-gray-100"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-3 py-2 text-sm text-gray-500 hover:text-gray-900 transition-colors rounded-md hover:bg-gray-100"
                >
                  {link.label}
                </Link>
              ),
            )}
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-gray-900"
            onClick={() => setMobileMenuPath(mobileOpen ? null : pathname)}
          >
            {mobileOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="md:hidden bg-white/95 backdrop-blur-sm border-t border-gray-200/60 overflow-hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
          >
            <div className="px-4 py-3 space-y-1">
              {navLinks.map((link) =>
                link.isHash ? (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuPath(null)}
                    className="block px-3 py-2 text-sm text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded-md"
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuPath(null)}
                    className="block px-3 py-2 text-sm text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded-md"
                  >
                    {link.label}
                  </Link>
                ),
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
