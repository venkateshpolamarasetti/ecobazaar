import React from "react";
import { icons } from "../../assets";
import "./styles/Review.css";

const Review = ({ rating = 0 }) => {
  const clampedRating = Math.max(0, Math.min(5, rating));
  const percentage = (clampedRating / 5) * 100;

  return (
    <div className="review">
      <div className="review-stars">
        <div className="review-stars-bg">
          {[...Array(5)].map((_, index) => (
            <img key={index} src={icons.starIcon} alt="star" />
          ))}
        </div>

        <div className="review-stars-fg" style={{ width: `${percentage}%` }}>
          {[...Array(5)].map((_, index) => (
            <img key={index} src={icons.starIcon} alt="star" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Review;
