import React from "react";

const SectionTitle = ({
  title,
  subtitle,
  align = "center",
  className = "",
}) => {
  const alignmentClasses = {
    left: "text-left items-start",
    center: "text-center items-center",
    right: "text-right items-end",
  };

  return (
    <div className={`flex flex-col ${alignmentClasses[align]} mb-12 ${className}`}>
      {subtitle && (
        <span className="text-xs uppercase tracking-[0.2em] text-primary/70 font-lora mb-2 block font-semibold">
          {subtitle}
        </span>
      )}
      <h2 className="font-cinzel text-3xl md:text-4xl text-primary font-bold relative pb-4">
        {title}
        {/* Decorative underline */}
        <span 
          className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-[2px] bg-primary/30 flex items-center justify-center
            ${align === "left" ? "left-0 translate-x-0" : ""}
            ${align === "right" ? "left-auto right-0 translate-x-0" : ""}
          `}
        >
          <span className="w-2 h-2 rotate-45 bg-primary absolute"></span>
        </span>
      </h2>
    </div>
  );
};

export default SectionTitle;
