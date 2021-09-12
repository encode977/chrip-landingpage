import React, { useState } from "react";
import SingleReview from "../components/SingleReview";
import "./Reviews.scss";
import reviewData from "../handlers/ReviewsData";

function Reviews() {
  const [reviews, setReviews] = useState(reviewData);
  return (
    <div className="reviews">
      {reviews.slice(0, 3).map((item) => (
        <SingleReview
          key={item.id}
          image={item.image}
          name={item.name}
          text={item.text}
          username={item.username}
        />
      ))}
    </div>
  );
}

export default Reviews;
