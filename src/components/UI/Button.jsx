import React from "react";
import "./styles/Button.css";

const Button = ({
  label = "button",
  variant,
  size,
  logo,
  onClick,
  type = "button",
  purpose = "",
}) => {
  const variants = {
    primary: "btn-primary",
    outline: "btn-outline",
    disabled: "btn-disabled",
  };
  const sizes = {
    small: "btn-small",
    medium: "btn-medium",
    large: "btn-large",
  };
  const variantClass = variants[variant] || variants.primary;
  const sizeClass = sizes[size] || sizes.medium;
  return (
    <button
      className={`btn ${variantClass} ${sizeClass} ${type} ${purpose}`}
      onClick={onClick}
      disabled={variant === "disabled"}
      type={type}
    >
      {label}
      {logo && <div className="btn-logo">{logo}</div>}
    </button>
  );
};

export default Button;
