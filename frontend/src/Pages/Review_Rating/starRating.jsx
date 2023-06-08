import React from "react";
import { FaRegStar } from "react-icons/fa";

const StarRating = ({ rating, onRatingChange }) => {
  const handleStarClick = (value) => {
    onRatingChange(value);
  };

  return (
    <div className="star-rating">
      {[1, 2, 3, 4, 5].map((value) => (
        <label key={value}>
          <input
            type="radio"
            name="rating"
            value={value}
            checked={rating === value}
            onChange={() => handleStarClick(value)}
          />
          <i><FaRegStar/></i>
        </label>
      ))}
    </div>
  );
};

export default StarRating;
