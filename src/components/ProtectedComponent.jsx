"use client";
import React, { useEffect } from "react";
import Navbar from "./constants/Navbar";
import { GoToTop } from "./constants/GoToTop";
import { Footer } from "./constants/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import { ContactModal } from "./constants/ContactModal";

const ProtectedComponent = ({ children }) => {
  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
    });
  }, []);
  return (
    <div>
      <Navbar />
      <GoToTop />
      {children}
      <Footer />
    </div>
  );
};

export default ProtectedComponent;
