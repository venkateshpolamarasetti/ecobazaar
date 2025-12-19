import React from "react";
import "./styles/PriceTags.css";

const PriceTags = ({ params }) => {
  console.log(params);

  const labels = [
    "New",
    "Bestseller",
    "Top Rated",
    "Hot",
    "Sale",
    "Discount",
    "New Arrivals",
    "50% Off",
    "Out of Stock",
  ];

  const getLabel = () => {
    return labels.find(
      (label) => label.toLowerCase() === params.label.toLowerCase()
    );
  };

  return (
    <div className={`price-tag-container ${params.color}`}>
      <p className="tag-title">{getLabel() || params.label}</p>
    </div>
  );
};

export default PriceTags;
