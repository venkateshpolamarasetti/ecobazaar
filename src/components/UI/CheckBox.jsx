import React, { useState } from "react";
import "./styles/CheckBox.css";

const CheckBox = ({ variant, label }) => {
  const [checked, setChecked] = useState(false);
  const variants = {
    default: "default",
    active: "active",
    disabled: "disabled",
    none: "none",
  };

  const variantClass = variants[variant];

  return (
    <label className="check-label">
      <input
        className={`checkbox ${variantClass}`}
        type="checkbox"
        disabled={variant === "disabled"}
        checked={checked || variant === "active"}
        onChange={() => setChecked(!checked)}
      />
      {label}
    </label>
  );
};

export default CheckBox;
