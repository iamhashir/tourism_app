import React, { Component } from "react";
import "../styles_pages/Header.css";
import Traverse from "../img/traverseff.png";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scroll: 0,
    };
  }
  componentDidMount() {
    window.addEventListener("scroll", this.progressBar);
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.progressBar);
  }
  progressBar = () => {
    const scrollTotal = document.documentElement.scrollTop;
    const heightWin =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scroll = `${(scrollTotal / heightWin) * 100}%`;
    this.setState({
      scroll: scroll,
    });
  };

  render() {
    const progressMainWrapper = {
      background: "black",
      height: "15px",
      position: "fixed",
      top: 0,
      left: 0,
      zIndex: 101,
      width: "100%",
    };
    const progressMainStyle = {
      height: "15px",
      background: "aqua",
      width: this.state.scroll,
    };
    return (
      <maine>
        <div className="progress-bar" style={progressMainWrapper}>
          <div style={progressMainStyle} />
        </div>
        <header>
          <div className="mainHeader">
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
              <ul className="menu__box ">
                <li>
                  <a className="menu__item abc" href="/">
                    Home
                  </a>
                </li>

                <li>
                  <a className="menu__item" href="/Auh">
                    Abu Dhabi
                  </a>
                </li>
                <li>
                  <a className="menu__item" href="/dxb">
                    Dubai
                  </a>
                </li>
                <li>
                  <a className="menu__item" href="/shj">
                    Sharjah
                  </a>
                </li>
                <li>
                  <a className="menu__item" href="/ajman">
                    Ajman
                  </a>
                </li>
                <li>
                  <a className="menu__item" href="/UmmAlQuwain">
                    Umm Al Quwain
                  </a>
                </li>
                <li>
                  <a className="menu__item" href="/Rak">
                    Ras AL khaimah
                  </a>
                </li>
                <li>
                  <a className="menu__item" href="/Fujairah">
                    Fujairah
                  </a>
                </li>
                {/* <li><a class="menu__item" href="#">Twitter</a></li> */}
              </ul>
            </div>
          </div>
        </header>
      </maine>
    );
  }
}

export default Header;
