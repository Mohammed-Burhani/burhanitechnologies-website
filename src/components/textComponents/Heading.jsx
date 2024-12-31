import React from "react";

export const Heading = ({ children, className, style }) => {
  return (
    <h1 style={style} className={`font-inter text-captionLarge xl:text-mdcaptionLarge 4xl:text-lgcaptionLarge 7xl:mdtext-captionLarge leading-snug font-bold ${className}`}>
      {children}
    </h1>
  );
};
