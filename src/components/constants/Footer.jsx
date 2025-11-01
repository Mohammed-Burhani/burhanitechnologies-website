import Image from "next/image";
import React from "react";
import { Body } from "../textComponents/Body";
import Container from "./Container";
import moment from "moment";
import { SmallBody } from "../textComponents/SmallBody";

export const Footer = () => {
  return (
    <footer className="bg-[#180030] h-96">
      <Container className="relative bg-[#180030]">
        {/* Map Section */}
        <div className="mb-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-2">Visit Our Office</h3>
            <Body className="text-gray-300">
              Located in the heart of Chennai's business district
            </Body>
          </div>
          
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <div className="aspect-video w-full h-80">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.1418227785625!2d80.28746827569132!3d13.090196912265775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526f458172cdb1%3A0x7218069a220fa332!2sBurhani%20Technologies!5e0!3m2!1sen!2sin!4v1761984836983!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale hover:grayscale-0 transition-all duration-300"
              ></iframe>
            </div>
            
            {/* Overlay with company info */}
            {/* <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-sm rounded-lg p-4 max-w-xs">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center">
                  <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h4 className="text-white font-semibold">Burhani Technologies</h4>
              </div>
              <SmallBody className="text-gray-300 text-sm">
                Vanguard House, Moore St<br />
                George Town, Chennai
              </SmallBody>
            </div> */}
          </div>
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
              1st Floor, Vanguard House, #48, Moore St, Parry's Corner, George
              Town, Chennai, Tamil Nadu 600001
            </Body>

            <Body className="mt-6 max-w-md text-gray-300 text-center md:text-start">
              info@burhanitechnologies.com
            </Body>
          </div>

          <ul className="mt-12 flex flex-wrap justify-center gap-6 md:gap-8 lg:mt-0 lg:justify-end lg:gap-12">
            <li>
              <a className="text-white transition hover:text-white/75" href="/about">
                <Body>About</Body>
              </a>
            </li>

            <li>
              <a className="text-white transition hover:text-white/75" href="/services">
                <Body>Services</Body>
              </a>
            </li>

            <li>
              <a className="text-white transition hover:text-white/75" href="/#projects">
                <Body>Projects</Body>
              </a>
            </li>

            <li>
              <a className="text-white transition hover:text-white/75" href="/blog">
                <Body>Blog</Body>
              </a>
            </li>

            <li>
              <a className="text-white transition hover:text-white/75" href="/contact">
                <Body>Contact</Body>
              </a>
            </li>
          </ul>
        </div>

        <div className="flex justify-between items-center border-t border-gray-700 mt-10 py-7">
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
