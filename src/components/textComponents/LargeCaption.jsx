import React from "react";

export const LargeCaption = ({ children, className, style }) => {
  return (
    <h2
      style={style}
      className={`font-inter text-captionSmall sm:text-captionLarge 4xl:text-mdCaptionLarge leading-snug font-extrabold ${className}`}
    >
      {children}
    </h2>
  );
};
