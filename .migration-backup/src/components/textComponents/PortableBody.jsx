import React from "react";

export const PortableBody = ({ children, className, style, ...props }) => {
  return (
    <div
      style={style}
      className={`font-inter text-body 4xl:text-mdbody 7xl:text-lgbody font-normal ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};
