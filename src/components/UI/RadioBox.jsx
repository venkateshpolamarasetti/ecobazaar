import React, { useState } from "react";
import "./styles/RadioBox.css";

const RadioBox = ({ isDisabled = false, data }) => {
  const [selectedValue, setSelectedValue] = useState(null);

  return (
    <>
      {data?.map((item, index) => (
        <label className="radio-label" key={index}>
          <input
            type="radio"
            name={item.name}
            value={item.value}
            disabled={isDisabled}
            checked={selectedValue === item.value}
            onChange={() => {
              if (!isDisabled) {
                setSelectedValue(item.value);
              }
            }}
          />

          {/* Custom radio UI */}
          <span className="radio-custom"></span>

          <span className="radio-label-text">{item.label}</span>
        </label>
      ))}
    </>
  );
};

export default RadioBox;
