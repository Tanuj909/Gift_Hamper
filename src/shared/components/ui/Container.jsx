import React from "react";

const Container = ({ children, className = "", ...props }) => {
  return (
    <div className={`max-w-[92%] xl:max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 ${className}`} {...props}>
      {children}
    </div>
  );
};

export default Container;
