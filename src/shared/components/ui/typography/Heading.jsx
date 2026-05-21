const Heading = ({
  children,
  as: Tag = "h2",
  className = "",
  font = "cinzel",
}) => {
  const fontClass =
    font === "cinzel"
      ? "font-cinzel"
      : "font-lora";

  return (
    <Tag
      className={`
        ${fontClass}
        text-primary
        ${className}
      `}
    >
      {children}
    </Tag>
  );
};

export default Heading;