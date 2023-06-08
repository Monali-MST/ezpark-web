import React, { useState } from "react";
import StarRating from "./starRating.jsx";
import './Feedback.css';

const ReviewPage = () => {
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState("");

  const handleRatingChange = (value) => {
    setRating(value);
  };

  const handleReviewChange = (e) => {
    setReview(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle submission of rating and review
    console.log("Rating:", rating);
    console.log("Review:", review);
    // Reset form fields
    setRating(0);
    setReview("");
  };

  return (
    <div>
        <div className="form">
      <h1>Rate your Experience</h1>
      <form onSubmit={handleSubmit}>
        <div>
            <h3>How happy are you with our product?</h3>
          
          <StarRating  rating={rating} onRatingChange={handleRatingChange}/>
        </div>
        <div>
          
          <textarea value={review} onChange={handleReviewChange} style={{width:"400px",height:"200px"}}/>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
    </div>
  );
};

export default ReviewPage;
