import React from "react";

export const SecondaryHeading = ({ children, className, style, ...props }) => {
  return (
    <h2
      style={style}
      className={`font-inter text-captionLarge xl:text-mdcaptionLarge 4xl:text-lgcaptionLarge 7xl:mdtext-captionLarge leading-snug font-bold ${className}`}
      {...props}
    >
      {children}
    </h2>
  );
};
