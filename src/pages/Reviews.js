import React from "react";
import SingleReview from "../components/SingleReview";
import "./Reviews.scss";
import reviewData from "../handlers/ReviewsData";

function Reviews() {
  return (
    <div className="reviews">
      {reviewData.slice(0, 3).map((item) => (
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
