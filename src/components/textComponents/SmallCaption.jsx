import React from "react";

export const SmallCaption = ({ children, className, style }) => {
  return (
    <h2
      style={style}
      className={`font-inter text-captionSmall sm:text-mdcaptionSmall 4xl:text-mdCaptionLarge leading-snug font-extrabold ${className}`}
    >
      {children}
    </h2>
  );
};
