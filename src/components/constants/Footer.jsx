import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Body } from "../textComponents/Body";
import Container from "./Container";
import moment from "moment";
import { SmallBody } from "../textComponents/SmallBody";

export const Footer = () => {
  return (
    <footer className="bg-[#180030]">
      <Container className="relative bg-[#180030]">
        <div className="mb-12 flex flex-col gap-5 rounded-xl border border-white/15 bg-white/5 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-7">
          <div>
            <h3 className="text-lg font-semibold text-white">Visit Our Office</h3>
            <Body className="mt-2 text-sm text-gray-300">Located in the heart of Chennai&apos;s business district</Body>
          </div>
          <a href="https://www.google.com/maps/search/?api=1&query=Burhani%20Technologies%20Vanguard%20House%20Chennai" target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 shrink-0 items-center justify-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-semibold text-[#50219D] transition-colors hover:bg-[#F0E9FA]">
            Get directions <span aria-hidden="true">↗</span>
          </a>
        </div>
        <div className="lg:flex lg:items-end lg:justify-between">
          <div>
            <div className="flex justify-center text-teal-600 lg:justify-start">
              <Image
                alt="Burhani Technologies"
                width={500}
                height={500}
                src={"/Logos/BT-White.svg"}
                className="w-72 h-20 7xl:w-80 7xl:h-32"
              />
            </div>

            <Body className="mt-6 max-w-xl text-gray-300 text-center md:text-start">
              1st Floor, Vanguard House, #48, Moore St, Parry&apos;s Corner, George
              Town, Chennai, Tamil Nadu 600001
            </Body>

            <Body className="mt-6 max-w-md break-all text-gray-300 text-center md:text-start">
              <a href="mailto:connect@burhanitechnologies.com" className="underline-offset-4 hover:underline">connect@burhanitechnologies.com</a>
            </Body>
          </div>

          <ul className="mt-12 flex flex-wrap justify-center gap-6 md:gap-8 lg:mt-0 lg:max-w-2xl lg:justify-end lg:gap-8">
            <li><Link className="text-white transition hover:text-white/75" href="/industries">Industries</Link></li>
            <li><Link className="text-white transition hover:text-white/75" href="/leadership">Leadership</Link></li>
            <li><Link className="text-white transition hover:text-white/75" href="/book-a-consultation">Book a consultation</Link></li>
            <li>
              <a className="text-white transition hover:text-white/75" href="/about">
                <Body>About</Body>
              </a>
            </li>

            <li>
              <Link className="text-white transition hover:text-white/75" href="/why-choose-us">
                <Body>Why Burhani</Body>
              </Link>
            </li>

            <li>
              <Link className="text-white transition hover:text-white/75" href="/values">
                <Body>Values</Body>
              </Link>
            </li>

            <li>
              <Link className="text-white transition hover:text-white/75" href="/services">
                <Body>Services</Body>
              </Link>
            </li>

            <li>
              <Link className="text-white transition hover:text-white/75" href="/#client-projects">
                <Body>Projects</Body>
              </Link>
            </li>

            <li>
              <Link className="text-white transition hover:text-white/75" href="/blog">
                <Body>Blog</Body>
              </Link>
            </li>

            <li>
              <Link className="text-white transition hover:text-white/75" href="/knowledge-base">
                <Body>Help</Body>
              </Link>
            </li>

            <li>
              <a className="text-white transition hover:text-white/75" href="/contact">
                <Body>Contact</Body>
              </a>
            </li>
          </ul>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-between gap-6 border-t border-gray-700 py-7">
          <nav aria-label="Legal and page controls" className="flex flex-wrap gap-6 text-sm text-zinc-300"><Link href="/privacy-policy" className="hover:text-white">Privacy policy</Link><Link href="/terms-of-service" className="hover:text-white">Terms of service</Link><a href="#site-top" className="hover:text-white">Back to top</a></nav>
          <Body className="text-center text-sm text-white lg:text-right">
            Copyright &copy; {moment().format("YYYY")}. All rights reserved.
          </Body>

          <Body className="text-center text-sm text-white lg:text-right">
            Crafted with ❤️ By Burhani Technologies
          </Body>
        </div>
      </Container>
    </footer>
  );
};
