import React from "react";
import Price from "./Price";
import ActionIcon from "./ActionIcon";
import Button from "./Button";
import Review from "./Review";
import "./styles/BigProductCard.css";
import PriceTags from "./PriceTags";
import { icons } from "../../assets";

const BigProductCard = ({
  title,
  price,
  icon,
  rating,
  isPriceTag = true,
  isVisibility = true,
  isWishlist = true,
}) => {
  const [isHovered, setIsHovered] = React.useState(false);
  const [time, setTime] = React.useState("00:00:00");

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const priceTags = [
    {
      label: "50% off",
      color: "red",
    },
    {
      label: "50% off",
      color: "red",
    },
  ];

  //   setInterval(() => {
  //     setTime();
  //   }, 1000);
  return (
    <div
      className="big-product-card"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {isPriceTag && (
        <div className="price-tag">
          {priceTags.map((priceTag) => (
            <PriceTags
              params={{ label: priceTag.label, color: priceTag.color }}
            />
          ))}
        </div>
      )}
      <div className="big-product-card-image">
        <img src={icon} alt={title} />
      </div>
      <div className="big-product-card-actions">
        <ActionIcon type={"addToWishlist"} variant="default" />
        <Button variant="default" label="Add to Cart" logo={icons.addToCart} />
        <ActionIcon type={"visibilityIcon"} variant="default" />
      </div>
      <div className="big-product-card-content">
        <p>{title}</p>
        <Price price={price} />
        <Review rating={rating} />
        <p>Hurry Up! Offer ends in:</p>
        <p>{time}</p>
      </div>
    </div>
  );
};

export default BigProductCard;
