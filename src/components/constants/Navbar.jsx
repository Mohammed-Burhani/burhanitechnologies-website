"use client";
import Image from "next/image";
import Link from "next/link";
import { Body } from "../textComponents/Body";
import { useEffect, useState } from "react";
import { useAtom } from "jotai";
import { checkScrollStatus } from "@/store/store";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { usePathname } from "next/navigation";
import { ContactModal } from "./ContactModal";

const Navbar = () => {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useAtom(checkScrollStatus);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCompanyDropdownOpen, setIsCompanyDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > window.innerHeight);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const isHomePage = pathname === "/" || /^\/services\/.+/.test(pathname);

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setIsCompanyDropdownOpen(false);
  };

  return (
    <header
      className={`w-full border-b border-gray-100 bg-clip-padding backdrop-filter backdrop-blur-md !z-[9999999999] transition-colors duration-300 h-fit sm:h-32 pr-5 sm:px-20 py-4 fixed ${
        isScrolled ? "bg-white/60" : "!bg-white/50"
      }`}
    >
      <div className="flex !justify-between items-center">
        <div className="bg-white lg:px-10 rounded-xl ml-4 lg:ml-0">
          <Image
            alt="Burhani Technologies"
            width={500}
            height={500}
            src={"/BT-Logo.svg"}
            className="w-52 h-14 md:w-80 md:!h-24 7xl:!w-96 7xl:!h-24 -translate-x-4"
          />
        </div>

        <nav
          aria-label="Global"
          className="hidden md:flex w-full justify-center items-center"
        >
          <ul className="flex items-center gap-10 text-sm">
            <li>
              <Link href={"/"}>
                <Body
                  className={`px-4 py-2 rounded-lg transition ${
                    pathname === "/"
                      ? "bg-purple-100 text-[#6F36D2]"
                      : isHomePage
                      ? isScrolled
                        ? "text-black hover:bg-purple-50 hover:text-[#8000ff]"
                        : "text-white hover:bg-white/10 hover:text-[#8000ff]"
                      : "text-black hover:bg-purple-50 hover:text-[#8000ff]"
                  }`}
                >
                  Home
                </Body>
              </Link>
            </li>

            <li>
              <DropdownMenu>
                <DropdownMenuTrigger className="border-0 p-0">
                  <Body
                    className={`px-4 py-2 rounded-lg transition ${
                      ["/about", "/values", "/leadership", "/why-choose-us"].includes(pathname)
                        ? "bg-purple-100 text-[#6F36D2]"
                        : isHomePage
                        ? isScrolled
                          ? "text-black hover:bg-purple-50 hover:text-[#8000ff]"
                          : "text-white hover:bg-white/10 hover:text-[#8000ff]"
                        : "text-black hover:bg-purple-50 hover:text-[#8000ff]"
                    }`}
                  >
                    Company
                  </Body>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="!z-[999999999999] mt-5">
                  <DropdownMenuItem>
                    <Link href="/about">About</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link href="/values">Our Values</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link href="/leadership">Leadership</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link href="/why-choose-us">Why choose us?</Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </li>

            <Link href="/services">
              <Body
                className={`px-4 py-2 rounded-lg transition ${
                  pathname === "/services" || pathname.startsWith("/services/")
                    ? "bg-purple-100 text-[#6F36D2]"
                    : isHomePage
                    ? isScrolled
                      ? "text-black hover:bg-purple-50 hover:text-[#8000ff]"
                      : "text-white hover:bg-white/10 hover:text-[#8000ff]"
                    : "text-black hover:bg-purple-50 hover:text-[#8000ff]"
                }`}
              >
                Services
              </Body>
            </Link>

            <Link href="/blog">
              <Body
                className={`px-4 py-2 rounded-lg transition ${
                  pathname === "/blog" || pathname.startsWith("/blog/")
                    ? "bg-purple-100 text-[#6F36D2]"
                    : isHomePage
                    ? isScrolled
                      ? "text-black hover:bg-purple-50 hover:text-[#8000ff]"
                      : "text-white hover:bg-white/10 hover:text-[#8000ff]"
                    : "text-black hover:bg-purple-50 hover:text-[#8000ff]"
                }`}
              >
                Blog
              </Body>
            </Link>
          </ul>
        </nav>

        <div className="flex items-center gap-4">
          <div className="hidden md:flex sm:gap-4">
            <ContactModal />
          </div>

          <button 
            onClick={() => setIsMobileMenuOpen(true)}
            className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75 w-full block md:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[99999999999] md:hidden">
          {/* Drawer - Full Screen White Background */}
          <div className="absolute inset-0 w-full h-screen bg-white overflow-y-auto animate-in slide-in-from-right duration-300">
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200 bg-white">
              <Image
                alt="Burhani Technologies"
                width={200}
                height={60}
                src={"/BT-Logo.svg"}
                className="w-40 h-12"
              />
              <button
                onClick={closeMobileMenu}
                className="p-2 rounded-lg bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Navigation */}
            <div className="flex flex-col min-h-[calc(100vh-88px)] bg-white">
              <nav className="flex-1 px-6 py-8 bg-white">
                <ul className="space-y-6">
                  <li>
                    <Link 
                      href="/" 
                      onClick={closeMobileMenu}
                      className={`block text-lg font-medium transition-colors py-3 ${
                        pathname === "/" 
                          ? "text-[#6F36D2] bg-purple-50 px-4 rounded-lg" 
                          : "text-gray-900 hover:text-[#6F36D2]"
                      }`}
                    >
                      Home
                    </Link>
                  </li>

                  <li>
                    <div>
                      <button
                        onClick={() => setIsCompanyDropdownOpen(!isCompanyDropdownOpen)}
                        className="flex items-center justify-between w-full text-lg font-medium text-gray-900 hover:text-[#6F36D2] transition-colors py-3"
                      >
                        Company
                        <svg
                          className={`w-5 h-5 transition-transform ${isCompanyDropdownOpen ? 'rotate-180' : ''}`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      
                      {isCompanyDropdownOpen && (
                        <div className="ml-4 mt-2 space-y-3 animate-in slide-in-from-top duration-200">
                          <Link
                            href="/about"
                            onClick={closeMobileMenu}
                            className={`block transition-colors py-2 px-3 rounded ${
                              pathname === "/about"
                                ? "text-[#6F36D2] bg-purple-50"
                                : "text-gray-600 hover:text-[#6F36D2]"
                            }`}
                          >
                            About
                          </Link>
                          <Link
                            href="/values"
                            onClick={closeMobileMenu}
                            className={`block transition-colors py-2 px-3 rounded ${
                              pathname === "/values"
                                ? "text-[#6F36D2] bg-purple-50"
                                : "text-gray-600 hover:text-[#6F36D2]"
                            }`}
                          >
                            Our Values
                          </Link>
                          <Link
                            href="/leadership"
                            onClick={closeMobileMenu}
                            className={`block transition-colors py-2 px-3 rounded ${
                              pathname === "/leadership"
                                ? "text-[#6F36D2] bg-purple-50"
                                : "text-gray-600 hover:text-[#6F36D2]"
                            }`}
                          >
                            Leadership
                          </Link>
                          <Link
                            href="/why-choose-us"
                            onClick={closeMobileMenu}
                            className={`block transition-colors py-2 px-3 rounded ${
                              pathname === "/why-choose-us"
                                ? "text-[#6F36D2] bg-purple-50"
                                : "text-gray-600 hover:text-[#6F36D2]"
                            }`}
                          >
                            Why choose us?
                          </Link>
                        </div>
                      )}
                    </div>
                  </li>

                  <li>
                    <Link 
                      href="/services" 
                      onClick={closeMobileMenu}
                      className={`block text-lg font-medium transition-colors py-3 ${
                        pathname === "/services" || pathname.startsWith("/services/")
                          ? "text-[#6F36D2] bg-purple-50 px-4 rounded-lg" 
                          : "text-gray-900 hover:text-[#6F36D2]"
                      }`}
                    >
                      Services
                    </Link>
                  </li>

                  <li>
                    <Link 
                      href="/blog" 
                      onClick={closeMobileMenu}
                      className={`block text-lg font-medium transition-colors py-3 ${
                        pathname === "/blog" || pathname.startsWith("/blog/")
                          ? "text-[#6F36D2] bg-purple-50 px-4 rounded-lg" 
                          : "text-gray-900 hover:text-[#6F36D2]"
                      }`}
                    >
                      Blog
                    </Link>
                  </li>
                </ul>
              </nav>

              {/* Contact Button */}
              <div className="p-6 border-t border-gray-200 bg-white mt-auto">
                <div onClick={closeMobileMenu}>
                  <ContactModal className="w-full justify-center" />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
