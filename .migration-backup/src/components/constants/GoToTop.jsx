"use client";
import { checkScrollStatus } from "@/store/store";
import { ArrowUp2 } from "iconsax-react";
import { useAtom } from "jotai";
import React, { useEffect, useState } from "react";

export const GoToTop = () => {
  const [isScrolled] = useAtom(checkScrollStatus);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div
      className={` ${isScrolled ? "fixed" : "hidden"}  right-7 bottom-24 z-50`}
    >
      <a
        className="inline-block rounded-full bg-[#8000FF] p-4 text-white shadow transition hover:bg-[#8000FF]/70 "
        href="#"
      >
        <ArrowUp2 color="#fff" size={28} />
      </a>
    </div>
  );
};
