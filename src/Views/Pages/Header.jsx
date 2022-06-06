import React from "react";
import "../styles_pages/Header.css";
import Traverse from "../img/traverseff.png";
function Header() {
  return (
    <header>
      <div className="mainHeader"  >
        <div className="Header flex">
          <a href="/">
            <h1>
              <img className="Mono" src={Traverse} alt="" />
            </h1>
          </a>
        </div>
        <div className="hamburger-menu">
          <input id="menu__toggle" type="checkbox" />
          <label className="menu__btn" htmlFor="menu__toggle">
            <span />
          </label>
          <ul className="menu__box">
            <li>
              <a className="menu__item" href="/">
                Home
              </a>
            </li>
            <li>
              <a className="menu__item" href="/Auh">
                Things to do!
              </a>
            </li>
            <li>
              <a className="menu__item" href="/dxb">
                Virtual Experience!
              </a>
            </li>
            <li>
              <a className="menu__item" href="/fujairah">
                New in UAE!
              </a>
            </li>
            {/* <li><a class="menu__item" href="#">Twitter</a></li> */}
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
