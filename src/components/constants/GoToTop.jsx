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
      className={`${isScrolled ? "hidden sm:fixed sm:block" : "hidden"} bottom-24 right-7 z-40`}
    >
      <a
        className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#6F36D2] text-white shadow transition hover:bg-[#5C27BB] sm:h-12 sm:w-12"
        href="#site-top"
        aria-label="Back to top"
      >
        <ArrowUp2 color="#fff" size={22} aria-hidden="true" />
      </a>
    </div>
  );
};
