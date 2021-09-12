import React from "react";
import "./Footer.scss";
import { AiOutlineTwitter } from "react-icons/ai";

function Footer() {
  return (
    <footer className="footer">
      <h3>CHRIP</h3>
      <ul>
        <li>
          <AiOutlineTwitter />
        </li>
        <li>Privacy Policy</li>
        <li>Terms of use</li>
      </ul>
    </footer>
  );
}

export default Footer;
