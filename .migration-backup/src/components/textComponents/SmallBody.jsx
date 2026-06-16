import React from "react";

export const SmallBody = ({ children, className, style, ...props }) => {
  return (
    <p
      style={style}
      className={`font-inter text-body 4xl:text-smbody 7xl:text-mdbody font-normal ${className}`}
      {...props}
    >
      {children}
    </p>
  );
};
