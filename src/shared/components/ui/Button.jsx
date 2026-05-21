import React from "react";

const Button = ({
  children,
  onClick,
  type = "button",
  variant = "primary",
  size = "md",
  className = "",
  disabled = false,
  href,
  ...props
}) => {
  const baseStyles = "inline-flex items-center justify-center font-lora font-medium rounded-full transition-all duration-300 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer text-center";
  
  const variants = {
    primary: "bg-primary text-white hover:bg-opacity-90 shadow-sm hover:shadow-md hover:-translate-y-0.5",
    secondary: "bg-[#f5e6e6] text-primary hover:bg-[#ebd0d0] hover:-translate-y-0.5",
    outline: "border-2 border-primary text-primary hover:bg-primary hover:text-white hover:-translate-y-0.5",
    text: "text-primary hover:opacity-75 underline-offset-4 hover:underline",
    cream: "bg-[#FAF4E8]/60 backdrop-blur-md border border-primary/10 text-primary hover:bg-primary hover:text-[#FAF4E8] shadow-sm hover:shadow-md hover:-translate-y-0.5",
  };

  const sizes = {
    sm: "px-4 py-1.5 text-sm",
    md: "px-6 py-2.5 text-base",
    lg: "px-8 py-3.5 text-lg",
  };

  const combinedClasses = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <a
        href={href}
        onClick={onClick}
        className={combinedClasses}
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={combinedClasses}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
