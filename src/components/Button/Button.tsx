import React from "react";
import "./button.scss";

type Props = {
  type?: "primary" | "active" | "default";
  onClick?: any;
  disabled?: boolean;
  shape?: "rounded" | "default";
  isSubmit?: boolean;
  style?: any;
  className?: any;
  label?: string;
};

const Button: React.FC<Props> = ({
  type = "default",
  children,
  onClick,
  shape = "default",
  isSubmit,
  className,
  label,
  ...rest
}) => {
  return (
    <button
      {...rest}
      type={isSubmit ? "submit" : "button"}
      aria-label={label}
      title={label}
      tabIndex={0}
      role={isSubmit ? "submit" : "button"}
      className={`button type-${type} shape-${shape} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
