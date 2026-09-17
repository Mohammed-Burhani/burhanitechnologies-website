"use client";

import Image from "next/image";
import Link from "next/link";
import { List, X } from "@phosphor-icons/react";
import { useEffect, useState } from "react";
import { useAtom } from "jotai";
import { usePathname } from "next/navigation";
import { ContactModal } from "./ContactModal";
import { checkScrollStatus } from "@/store/store";

const NAV_LINKS = [
  { href: "/", label: "Home", match: (p) => p === "/" },
  { href: "/about", label: "Why Burhani", match: (p) => p === "/about" || p.startsWith("/about/") },
  { href: "/services", label: "Services", match: (p) => p === "/services" || p.startsWith("/services/") },
  { href: "/case-studies", label: "Case Studies", match: (p) => p === "/case-studies" || p.startsWith("/case-studies/") },
  { href: "/blog", label: "Blog", match: (p) => p === "/blog" || p.startsWith("/blog/") },
  { href: "/knowledge-base", label: "Work we do", match: (p) => p === "/knowledge-base" || p.startsWith("/knowledge-base/") },
];

const Navbar = () => {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useAtom(checkScrollStatus);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isHomePage = pathname === "/" || /^\/services\/.+/.test(pathname);
  const isDarkSurface = isHomePage && !isScrolled;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > window.innerHeight);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [setIsScrolled]);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  const linkClasses = (active) => {
    if (active) return "bg-[#6F36D2]/10 text-[#6F36D2]";
    if (isDarkSurface) return "text-white/80 hover:bg-white/10 hover:text-white";
    return "text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900";
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 h-16 border-b backdrop-blur-md transition-colors duration-300 lg:h-[72px] ${
        isDarkSurface
          ? "border-white/10 bg-black/30"
          : "border-zinc-200 bg-white/80"
      }`}
    >
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-7 sm:px-10 xl:px-20">
        <Link href="/" className="flex shrink-0 items-center" onClick={closeMobileMenu}>
          <Image
            alt="Burhani Technologies"
            width={180}
            height={44}
            priority
            src="/BT-Logo.svg"
            className={`h-8 w-auto sm:h-9 lg:h-10 ${isDarkSurface ? "" : ""}`}
          />
        </Link>

        <nav aria-label="Global" className="hidden lg:flex">
          <ul className="flex items-center gap-1 text-sm font-medium">
            {NAV_LINKS.map((link) => {
              const active = link.match(pathname);
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`rounded-lg px-3.5 py-2 transition-colors duration-200 ${linkClasses(active)}`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <div className="hidden md:block">
            <ContactModal />
          </div>

          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(true)}
            aria-label="Open menu"
            className={`inline-flex items-center justify-center rounded-lg p-2 transition-colors duration-200 lg:hidden ${
              isDarkSurface
                ? "text-white hover:bg-white/10"
                : "text-zinc-700 hover:bg-zinc-100"
            }`}
          >
            <List size={22} weight="bold" />
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="absolute inset-0 flex h-[100dvh] flex-col overflow-y-auto bg-white">
            <div className="flex items-center justify-between border-b border-zinc-200 p-4 sm:p-6">
              <Image
                alt="Burhani Technologies"
                width={160}
                height={40}
                src="/BT-Logo.svg"
                className="h-8 w-auto sm:h-9"
              />
              <button
                type="button"
                onClick={closeMobileMenu}
                aria-label="Close menu"
                className="rounded-lg p-2 text-zinc-600 transition-colors duration-200 hover:bg-zinc-100"
              >
                <X size={22} weight="bold" />
              </button>
            </div>

            <nav className="flex-1 px-6 py-6">
              <ul className="space-y-1">
                {NAV_LINKS.map((link) => {
                  const active = link.match(pathname);
                  return (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        onClick={closeMobileMenu}
                        className={`block rounded-lg px-4 py-3 text-base font-medium transition-colors duration-200 ${
                          active
                            ? "bg-[#6F36D2]/10 text-[#6F36D2]"
                            : "text-zinc-900 hover:bg-zinc-50"
                        }`}
                      >
                        {link.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>

            <div className="mt-auto border-t border-zinc-200 p-6">
              <div onClick={closeMobileMenu}>
                <ContactModal className="w-full justify-center" />
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;