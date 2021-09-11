import React from "react";
import "./Banner.scss";
import Hero from "../assets/Hero.png";
import User from "../components/User";

function Banner() {
  return (
    <div className="banner">
      <div className="banner__left">
        <h1>
          Twitter analytics <br />
          taken to a whole new <br />
          level
        </h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s Lorem Ipsum is simply dummy text of the printing and
          typesetting industry. Lorem Ipsum has been the industry's standard
          dummy text ever since the 1500s
        </p>
        <button>Sign in with Twitter</button>
        <User />
        <p className="tweet__join">
          Join <span>195</span> others who have analyzed their followers and
          <br /> sheduled <span>1342</span> tweets.
        </p>
      </div>
      <div className="banner__right">
        <img src={Hero} alt="" />
      </div>
    </div>
  );
}

export default Banner;
