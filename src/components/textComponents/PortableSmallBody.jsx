import React from "react";

export const PortableSmallBody = ({ children, className, style, ...props }) => {
  return (
    <div
      style={style}
      className={`font-inter text-body 4xl:text-smbody 7xl:text-mdbody font-normal ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};
