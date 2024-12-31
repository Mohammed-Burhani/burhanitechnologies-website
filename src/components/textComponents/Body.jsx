import React from "react";

export const Body = ({ children, className, style }) => {
  return (
    <p style={style} className={`font-inter text-body 4xl:text-mdbody 7xl:text-lgbody font-normal ${className}`}>
      {children}
    </p>
  );
};
