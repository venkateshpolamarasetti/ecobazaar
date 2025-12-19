import React from "react";
import Price from "./Price";
import ActionIcon from "./ActionIcon";
import Review from "./Review";
import "./styles/ProductCard.css";
import { products } from "../../assets";
import PriceTags from "./PriceTags";

const ProductCard = ({
  title,
  price,
  icon,
  rating,
  isPriceTag = true,
  isVisibility = true,
  isWishlist = true,
}) => {
  const [isHovered, setIsHovered] = React.useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  return (
    <div
      className="product-card"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {isPriceTag && (
        <div className="price-tag">
          <PriceTags params={{ label: "50% off", color: "red" }} />
        </div>
      )}
      {isVisibility && isHovered && (
        <div className="visibility-icon">
          <ActionIcon type={"visibilityIcon"} variant="default" />
        </div>
      )}
      {isWishlist && isHovered && (
        <div className="wishlist-icon">
          <ActionIcon type={"addToWishlist"} variant="default" />
        </div>
      )}
      <div className="product-card-image">
        <img src={icon} alt={title} />
      </div>
      <div className="product-card-content">
        <p>{title}</p>
        <div className="product-card-content-middle">
          <Price price={price} />
          <ActionIcon type={"addToCart"} variant="default" />
        </div>
        <Review rating={rating} />
      </div>
    </div>
  );
};

export default ProductCard;
