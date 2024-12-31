"use client";
import { checkScrollStatus } from "@/store/store";
import { useAtom } from "jotai";
import React from "react";

export const GoToTop = () => {
  const [isScrolled] = useAtom(checkScrollStatus);
  return (
    <div
      className={` ${isScrolled ? "fixed" : "hidden"}  right-7 bottom-7 z-50`}
    >
      <a
        className="inline-block rounded-full bg-[#8000FF] p-4 text-white shadow transition hover:bg-[#8000FF]/70 "
        href="#"
      >
        <span className="sr-only">Back to top</span>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="size-7"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
            clipRule="evenodd"
          />
        </svg>
      </a>
    </div>
  );
};
