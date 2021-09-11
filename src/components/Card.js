import React from "react";
import "./Card.scss";

function Card({ title, text, Icon }) {
  return (
    <div className="card">
      <Icon />
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
}

export default Card;
