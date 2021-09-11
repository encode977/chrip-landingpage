import React from "react";
import "./Features.scss";
import Card from "./Card";
import featuresData from "../handlers/FeaturesData";

function Features() {
  return (
    <div className="features">
      {featuresData.slice(0, 4).map((item) => (
        <Card
          key={item.id}
          title={item.title}
          Icon={item.image}
          text={item.text}
        />
      ))}
    </div>
  );
}

export default Features;
