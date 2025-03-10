import React from "react";
import "../App.css";
import headerimage from "../images/headerimage (2).png";
import cmc from "../images/cmc.png";
import cg from "../images/cg.png";
import bsc from "../images/bsc.png";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaTelegram } from "react-icons/fa";
import rabbit from "../images/rabbit (2).png";
import Roadmap from "./Roadmap";
import BuyEFT from "./BuyErabbit";
import BuyErabbit from "./BuyErabbit";

export default function HerosSection() {
  return (
    <>
      {/* HOME */}

      <section className="header-scetion">
        <div className="header-container">
          <div className="header-content">
            <h1 className="heading1">Elon's Rabbit</h1>
            <p className="text-para">
              Elon's Rabbit took shape after Elon tweeted about his rabbit. It is a memecoin inspired by 
              the tweet. The contract is renounced and is entirely a community run project now.
            </p>
            <div className="header-buttons">
              <button className="buynow"><a href="https://pancakeswap.finance/swap?outputCurrency=0x92a4EbEE814AFe58741d7f216dC10211d5aBC250" target="_blank" style={{color:"#000", textDecoration:"none"}}>Buy Now</a></button>
              <button className="telgram"><a href="https://t.me/elonsrabbit" target="_blank" style={{color:"#000", textDecoration:"none"}}>Telegram</a></button>
              {/* <button className="whitepaper"><a href="#" target="_blank" style={{color:"#000", textDecoration:"none"}}>White Paper</a></button> */}
            </div>
            <div className="wb"></div>
          </div>
          <div className="image-container">
            <img src={headerimage} alt="" className="header-image" />
          </div>
        </div>
      </section>

      {/* TOKENS */}

      <div id="tokenomics" className="row">
        <div className="container-token">
          <div className="row">
            <div className="col-12">
              <div className="token-area">
                <div className="row">
                  <div className="col-12">
                    <div className="section-header">
                      <div className="section-title">Tokenomics</div>
                      <div className="section-desc">
                      </div>
                    </div>

                    <div className="section-content">
                      <div className="row align-items-end">
                        <div className="area-block col-xl-4 col-md-6 col-12">
                          <div className="info-listing">
                            <div className="info-block">
                              <div className="title">
                                <span className="percent">23.5%</span>
                                <span className="dot"></span>
                                <span className="count">Private Sale</span>
                              </div>
                              {/* <div className="desc">
                                Lorem ipsum dolor sit amet consectetur,
                                adipisicing elit. Debitis quia aliquid error
                                porro optio repudiandae, possimus sit laborum
                                natus beatae, quibusdam libero, facere molestias
                                aut esse fugit in doloribus corrupti.
                              </div> */}
                            </div>

                            <div className="info-block">
                              <div className="title">
                                <span className="percent">50%</span>
                                <span className="dot"></span>
                                <span className="count">Burned</span>
                              </div>
                              {/* <div className="desc">
                                Lorem ipsum dolor sit amet consectetur,
                                adipisicing elit. Debitis quia aliquid error
                                porro optio repudiandae, possimus sit laborum
                                natus beatae, quibusdam libero, facere molestias
                                aut esse fugit in doloribus corrupti.
                              </div> */}
                            </div>
                          </div>
                        </div>

                        <div className="area-block tokenemics-block col-xl-4 col-12">
                          <div className="tokenomics-circle">
                            <div className="circle-block marketing">
                              <div className="content">
                                <span>12%</span> Launch
                              </div>
                            </div>

                            <div className="circle-block team">
                              <div className="content">
                                <span>23.5%%</span> Private Sale &amp; founders
                              </div>
                            </div>

                            <div className="circle-block liquidity">
                              <div className="content">
                                <span>14.5%</span> CEX Listings &amp; Airdrops
                              </div>
                            </div>

                            <div className="circle-block airdrop">
                              <div className="content">
                                <span>50%</span> Burned
                              </div>
                            </div>
                          </div>

                          <div className="tokenomics-total">
                            <div className="title">Total Supply</div>
                            <div className="value">1,000,000,000</div>
                            <div className="name">ERabbit</div>
                          </div>
                        </div>

                        <div className="area-block col-xl-4 col-md-6 col-12">
                          <div className="info-listing">
                            <div className="info-block">
                              <div className="title">
                                <span className="percent">12%</span>
                                <span className="dot"></span>
                                <span className="count">
                                  PCS Launch
                                </span>
                              </div>
                              {/* <div className="desc">
                                Lorem ipsum dolor sit amet consectetur,
                                adipisicing elit. Debitis quia aliquid error
                                porro optio repudiandae, possimus sit laborum
                                natus beatae, quibusdam libero, facere molestias
                                aut esse fugit in doloribus corrupti.
                              </div> */}
                            </div>

                            <div className="info-block">
                              <a href="/" className="block">
                                <div className="title">
                                  <span className="percent">14.5%</span>
                                  <span className="dot"></span>
                                  <span className="count">Airdrops</span>
                                </div>
                                {/* <div className="desc">
                                  Lorem ipsum dolor sit amet consectetur,
                                  adipisicing elit. Debitis quia aliquid error
                                  porro optio repudiandae, possimus sit laborum
                                  natus beatae, quibusdam libero, facere
                                  molestias aut esse fugit in doloribus
                                  corrupti.
                                </div> */}
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* BUY NFT */}
      <BuyErabbit />
      {/*EXCHANGE */}

      <section className="partners-section">
        <div className="parterns-container">
          <div className="partners-content">
            <div className="heading-text">
              <h2 id="exchange">Patners</h2>
              <div className="partners-images">
                <a
                  href="https://coinmarketcap.com/currencies/elonsrabbit/"
                  target="_blank"
                  rel="noreferrer"
                  className="er-link"
                >
                  <div className="coinMraketCap">
                    <img src={cmc} alt="" className="mgb" /> <br />
                    Coinmarketcap
                  </div>
                </a>
                <a
                  href="https://www.coingecko.com/en/coins/elons-rabbit"
                  target="_blank"
                  rel="noreferrer"
                  className="er-link"
                >
                  <div className="coingecko">
                    <img src={cg} alt="" className="gb" /> <br />
                    Coingecko
                  </div>
                </a>
                <a
                  href="https://bscscan.com/token/0x92a4EbEE814AFe58741d7f216dC10211d5aBC250"
                  target="_blank"
                  rel="noreferrer"
                  className="er-link"
                >
                  <div className="coinMraketCap">
                    <img src={bsc} alt="" className="mgb" /> <br />
                    BSCscan.com
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ROADMAP */}

      <section>
        <div className="container">
          <h2 id="roadmap-cont">RoadMap</h2>
          <Roadmap />
        </div>
      </section>

      {/* FOOTERS */}

      <section className="footer-maincontainer">
        <div className="footercontainer">
          <div className="footer-content">
            <img src={rabbit} alt="" className="footerlogo" />
            {/* <p className="footer-para">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Provident ipsum recusandae placeat officia laborum.
            </p> */}

            <div className="copyright-content">
              <p className="copyright">
                Copyright ®2021 Elons Rabbit. All Rights Reserved.
              </p>
              <a href="/" target="_blank" rel="noopener noreferrer" className="email">info@elonsrabbit.com</a>
            </div>

            <div className="social-links">
              <a
                href="https://twitter.com/elonsrabbit"
                target="_blank"
                rel="noreferrer"
              >
                <AiOutlineTwitter size={35} className="twitter" color="#fff" />
              </a>
              <a href="https://t.me/elonsrabbit">
                <FaTelegram
                  size={35}
                  className="telegram"
                  color="#fff"
                  target="_blank"
                  rel="noreferrer"
                />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
