import React from "react";

export const LargeHeading = ({ children, className, style }) => {
  return (
    <h2
      style={style}
      className={`font-inter text-xlcaptionLarge sm:text-mdsubTitle 7xl:text-title leading-snug font-extrabold ${className}`}
    >
      {children}
    </h2>
  );
};
