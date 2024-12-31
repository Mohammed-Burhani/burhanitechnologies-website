"use client";
import { ArrowRight } from "iconsax-react";
import Image from "next/image";
import Link from "next/link";
import { Body } from "../textComponents/Body";
import { useEffect } from "react";
import { useAtom } from "jotai";
import { checkScrollStatus } from "@/store/store";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { usePathname, useRouter } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useAtom(checkScrollStatus);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > window.innerHeight);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isHomePage = pathname === "/";

  return (
    <header
      className={`fixed w-full pr-10 2xl:px-16 py-2 border-b border-gray-300 bg-clip-padding backdrop-filter backdrop-blur-md !z-[9999999999] transition-colors duration-300 h-24 ${
        isScrolled ? "bg-white/60" : "!bg-white/10"
      }`}
    >
      <div className="flex justify-between items-center">
        <div className="">
          <Image
            alt="Burhani Technologies"
            width={500}
            height={500}
            src={"/BT-Logo.svg"}
            className="w-52 h-14 md:w-64 md:h-16 7xl:w-72 7xl:h-20"
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
                  className={` ${
                    isHomePage
                      ? isScrolled
                        ? "text-black"
                        : "text-white"
                      : "text-black"
                  } transition hover:text-[#8000ff]`}
                >
                  Home
                </Body>
              </Link>
            </li>

            <li>
              <DropdownMenu>
                <DropdownMenuTrigger className="border-0 p-0">
                  <Body
                    className={` ${
                      isHomePage
                        ? isScrolled
                          ? "text-black"
                          : "text-white"
                        : "text-black"
                    } transition hover:text-[#8000ff]`}
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
                    <Link href="/about">Why choose us?</Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </li>

            <li>
              <Body
                className={` ${
                  isHomePage
                    ? isScrolled
                      ? "text-black"
                      : "text-white"
                    : "text-black"
                } transition hover:text-[#8000ff]`}
              >
                Services
              </Body>
            </li>

            <li>
              <Body
                className={` ${
                  isHomePage
                    ? isScrolled
                      ? "text-black"
                      : "text-white"
                    : "text-black"
                } transition hover:text-[#8000ff]`}
              >
                Blog
              </Body>
            </li>
          </ul>
        </nav>

        <div className="flex items-center gap-4">
          <div className="hidden md:flex sm:gap-4">
            <button className="rounded-2xl p-4 bg-[#6F36D2] px-5 7xl:px-7 7xl:p-5 py-2.5 text-sm font-medium text-white shadow flex gap-4 items-center w-max">
              <Body>Get In Touch</Body>

              <ArrowRight color="#fff" size={24} className="rotate-45" />
            </button>
          </div>

          <button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75 w-full block md:hidden">
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
    </header>
  );
};

export default Navbar;
