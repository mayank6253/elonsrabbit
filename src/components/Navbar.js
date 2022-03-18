import React from "react";
import rabbit from "../images/rabbit (2).png";
import background from "../images/background (2).jpg";
// import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light py-3">
        <div className="container">
          <a className="navbar-brand" href="/">
            <img
              className="logo"
              src={rabbit}
              alt="..."
              width="130"
            />
          </a>
          <button
            className="navbar-toggler navbar-toggler-end"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              {/* <li className="nav-item">
                <a className="nav-a active" aria-current="page" href="/">
                  Home
                </a>
              </li> */}
              <li>
                <a
                  className="nav-a active"
                  aria-current="page"
                  href="#exchange"
                >
                  Listings
                </a>
              </li>
              <li>
                <a
                  className="nav-a active"
                  aria-current="page"
                  href="#roadmap-cont"
                >
                  Roadmap
                </a>
              </li>
              <li>
                <a
                  className="nav-a active"
                  aria-current="page"
                  href="#tokenomics"
                >
                  Tokenomics
                </a>
              </li>
              {/* <button className="buy">BUY NOW</button>
              <button className="staking">Staking DAPP</button> */}
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
