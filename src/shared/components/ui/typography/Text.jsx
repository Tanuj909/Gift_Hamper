const Text = ({
  children,
  className = "",
}) => {
  return (
    <p
      className={`
        font-lora
        text-primary
        ${className}
      `}
    >
      {children}
    </p>
  );
};

export default Text;