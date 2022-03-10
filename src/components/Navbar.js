import React from "react";
import rabbit from "../images/rabbit (2).png";
import background from "../images/background (2).jpg";
import "./Navbar.css";

export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-none">
        <div className="container-fluid">
          <a className="navbar-brand py-2" href="/">
            <img
              src={rabbit}
              alt="empowerwitlogo"
              srcSet=""
              className="rabbitlogo"
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-a active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li>
                <a
                  className="nav-a active"
                  aria-current="page"
                  href="#exchange"
                >
                  Exchanges
                </a>
              </li>
              <li>
                <a className="nav-a active" aria-current="page" href="#roadmap-cont">
                  Roadmap
                </a>
              </li> 
              <li>
                <a className="nav-a active" aria-current="page" href="#tokenomics">
                  Tokenomics
                </a>
              </li>
              <button className="buy">BUY NOW</button>
              <button className="staking">Staking DAPP</button>
            </ul>
          </div>
        </div>
        <div className="background-image">
          <img src={background} alt="" className="background" />
        </div>
      </nav>
    </>
  );
}
