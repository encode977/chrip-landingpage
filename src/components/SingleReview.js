import React from "react";
import { AiOutlineTwitter } from "react-icons/ai";
import "./SingleReview.scss";

function SingleReview({ image, name, text, username }) {
  return (
    <div className="singleReview">
      <div className="profile">
        <div className="profile__left">
          <img src={image} alt="" />
          <div className="profile__name">
            <h3>{name}</h3>
            <p>{username}</p>
          </div>
        </div>
        <AiOutlineTwitter className="twitter__icon" />
      </div>
      <p>{text}</p>
    </div>
  );
}

export default SingleReview;
