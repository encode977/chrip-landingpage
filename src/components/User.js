import React from "react";
import user from "../assets/userAvatar01.svg";
import "./User.scss";
import Users from "../handlers/userData";

function User() {
  return (
    <div className="user">
      {/* <img src={user} alt="" />
      <img src={user} alt="" />
      <img src={user} alt="" /> */}
      {Users.map((user) => (
        <img key={user.id} src={user.image} alt={user.image} />
      ))}
    </div>
  );
}

export default User;
