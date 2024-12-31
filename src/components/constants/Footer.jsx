import Image from "next/image";
import React from "react";
import { Body } from "../textComponents/Body";
import Container from "./Container";
import moment from "moment";

export const Footer = () => {
  return (
    <footer className="bg-[#180030]">
      <Container className="relative">
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
              <a className="text-white transition hover:text-white/75" href="#">
                <Body>About</Body>
              </a>
            </li>

            <li>
              <a className="text-white transition hover:text-white/75" href="#">
                <Body>Services</Body>
              </a>
            </li>

            <li>
              <a className="text-white transition hover:text-white/75" href="#">
                <Body>Projects</Body>
              </a>
            </li>

            <li>
              <a className="text-white transition hover:text-white/75" href="#">
                <Body>Blog</Body>
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
