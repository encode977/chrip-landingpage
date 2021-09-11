import React from "react";
import "./Header.scss";

function Header() {
  return (
    <header className="header">
      <div className="header__left">
        <h3>CHRIP</h3>
      </div>
      <div className="header__right">
        <ul className="header__menu">
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">Pricing</a>
          </li>
          <li>
            <a href="">FAQ</a>
          </li>
        </ul>
        <button className="header__btn">Sign in with Twitter</button>
      </div>
    </header>
  );
}

export default Header;
