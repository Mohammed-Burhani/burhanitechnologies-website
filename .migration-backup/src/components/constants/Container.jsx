import React from "react";

const Container = ({ children, className }) => {
  return <div className={`p-7 sm:p-10 xl:p-20 ${className}`}>{children}</div>;
};

export default Container;
