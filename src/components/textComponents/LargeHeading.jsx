import React from "react";

export const LargeHeading = ({ children, className, style }) => {
  return (
    <h2
      style={style}
      className={`font-inter text-mdcaptionLarge sm:text-subTitle 7xl:text-mdsubTitle leading-snug font-extrabold ${className}`}
    >
      {children}
    </h2>
  );
};
