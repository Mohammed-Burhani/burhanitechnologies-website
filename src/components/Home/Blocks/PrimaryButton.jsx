import { Body } from "@/components/textComponents/Body";
import React from "react";

export const PrimaryButton = ({ onClick, className, title }) => {
  return (
    <button
      onClick={onClick}
      className={`rounded-xl 2xl:rounded-2xl p-4 bg-[#6F36D2] px-5 7xl:px-7 7xl:p-5 py-2.5 text-lg font-medium text-white shadow flex gap-4 justify-center items-center min-w-fit ${className}`}
    >
      <Body className={"!text-center"}>{title}</Body>

      {/* <span className="text-2xl">•</span> */}
    </button>
  );
};
