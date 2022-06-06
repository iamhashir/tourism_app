import React from "react";
import "./header.css";
function Header() {
  return (
    <div className="mainHeader">
      <div className="Header flex">
        <h1>Traverse</h1>
        <img src="" />
        <div className="nav flex">
          <a href="">Things to do</a>
          <a href="">Virtual Experience</a>
          <a href="">New in UAE!</a>
        </div>
        <div className="Languages">
          <p>Languages</p>
        </div>
      </div>
    </div>
  );
}

export default Header;
