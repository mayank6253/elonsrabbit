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

export default function HerosSection() {
  // const timelineData = [
  //   {
  //     text: "Started working on the app-ideas repository",
  //     date: "February 25 2019",
  //     category: {
  //       tag: "app-ideas",
  //       color: "#FFDB14",
  //     },
  //     link: {
  //       url: "https://github.com/florinpop17/app-ideas",
  //       text: "Check it out on GitHub",
  //     },
  //   },
  //   {
  //     text: "Started the Weekly Coding Challenge program",
  //     date: "March 04 2019",
  //     category: {
  //       tag: "blog",
  //       color: "#e17b77",
  //     },
  //     link: {
  //       url: "https://florin-pop/blog/2019/03/weekly-coding-challenge/",
  //       text: "Check it out here",
  //     },
  //   },
  //   {
  //     text: "Got 1.000 followers on Twitter",
  //     date: "March 07 2019",
  //     category: {
  //       tag: "twitter",
  //       color: "#1DA1F2",
  //     },
  //     link: {
  //       url: "https://twitter.com/florinpop1705",
  //       text: "See profile",
  //     },
  //   },
  //   {
  //     text: "I published my first article in the FreeCodeCamp Medium Publication",
  //     date: "March 18 2019",
  //     category: {
  //       tag: "medium",
  //       color: "#018f69",
  //     },
  //     link: {
  //       url: "https://medium.freecodecamp.org/how-to-build-a-double-slider-sign-in-and-sign-up-form-6a5d03612a34",
  //       text: "Check it out here",
  //     },
  //   },
  //   {
  //     text: "Over 12.000 views in a single day on my Medium posts",
  //     date: "April 05 2019",
  //     category: {
  //       tag: "medium",
  //       color: "#018f69",
  //     },
  //     link: {
  //       url: "https://medium.com/@popflorin1705",
  //       text: "See profile",
  //     },
  //   },
  // ];

  // const TimelineItem = ({ data }) => (
  //   <div className="timeline-item">
  //     <div className="timeline-item-content">
  //       <span className="tag" style={{ background: data.category.color }}>
  //         {data.category.tag}
  //       </span>
  //       <time>{data.date}</time>
  //       <p>{data.text}</p>
  //       {data.link && (
  //         <a href={data.link.url} target="_blank" rel="noopener noreferrer">
  //           {data.link.text}
  //         </a>
  //       )}
  //       <span className="circle" />
  //     </div>
  //   </div>
  // );

  // const Timeline = () =>
  //   timelineData.length > 0 && (
  //     <div className="timeline-container">
  //       {timelineData.map((data, idx) => (
  //         <TimelineItem data={data} key={idx} />
  //       ))}
  //     </div>
  //   );

  return (
    <>
      {/* HOME */}

      <section className="header-scetion">
        <div className="header-container">
          <div className="header-content">
            <h1 className="heading1">HEADING 1</h1>
            <p className="text-para">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis ab
              deleniti corporis voluptas minima excepturi aperiam. Maxime
              praesentium ad hic, temporibus fuga corrupti harum deleniti
              explicabo provident ut tempore consequatur nihil dolore dicta sit
              deserunt enim labore excepturi, recusandae quaerat optio. Magnam
              aliquam sunt soluta aspernatur fugiat laudantium, fugit ratione!
            </p>
            <div className="header-buttons">
              <button className="buynow">Buy#Now</button>
              <button className="telgram">Telegram</button>
              <button className="whitepaper">White Paper</button>
            </div>
            <div className="wb"></div>
          </div>
          <div className="image-container">
            <img src={headerimage} alt="" className="header-image" />
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

      {/* TOKENS */}

      <div id="tokenomics" className="row">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="token-area">
                <div className="row">
                  <div className="col-12">
                    <div className="section-header">
                      <div className="section-title">Tokenomics</div>
                      <div className="section-desc">
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit.
                      </div>
                    </div>

                    <div className="section-content">
                      <div className="row align-items-end">
                        <div className="area-block col-xl-4 col-md-6 col-12">
                          <div className="info-listing">
                            <div className="info-block">
                              <div className="title">
                                <span className="percent">5%</span>
                                <span className="dot"></span>
                                <span className="count">Airdrop</span>
                              </div>
                              <div className="desc">
                                Lorem ipsum dolor sit amet consectetur,
                                adipisicing elit. Debitis quia aliquid error
                                porro optio repudiandae, possimus sit laborum
                                natus beatae, quibusdam libero, facere molestias
                                aut esse fugit in doloribus corrupti.
                              </div>
                            </div>

                            <div className="info-block">
                              <div className="title">
                                <span className="percent">50%</span>
                                <span className="dot"></span>
                                <span className="count">Luquidity</span>
                              </div>
                              <div className="desc">
                                Lorem ipsum dolor sit amet consectetur,
                                adipisicing elit. Debitis quia aliquid error
                                porro optio repudiandae, possimus sit laborum
                                natus beatae, quibusdam libero, facere molestias
                                aut esse fugit in doloribus corrupti.
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="area-block tokenemics-block col-xl-4 col-12">
                          <div className="tokenomics-circle">
                            <div className="circle-block marketing">
                              <div className="content">
                                <span>5%</span> Airdrop
                              </div>
                            </div>

                            <div className="circle-block team">
                              <div className="content">
                                <span>10%</span> IDO
                              </div>
                            </div>

                            <div className="circle-block liquidity">
                              <div className="content">
                                <span>30%</span> Staking Rewards
                              </div>
                            </div>

                            <div className="circle-block airdrop">
                              <div className="content">
                                <span>50%</span> CEX/DEX
                              </div>
                            </div>
                          </div>

                          <div className="tokenomics-total">
                            <div className="title">Total Supply</div>
                            <div className="value">1,000,000</div>
                            <div className="name">XYZ</div>
                          </div>
                        </div>

                        <div className="area-block col-xl-4 col-md-6 col-12">
                          <div className="info-listing">
                            <div className="info-block">
                              <div className="title">
                                <span className="percent">15%</span>
                                <span className="dot"></span>
                                <span className="count">
                                  Allocation for CEX/DEX
                                </span>
                              </div>
                              <div className="desc">
                                Lorem ipsum dolor sit amet consectetur,
                                adipisicing elit. Debitis quia aliquid error
                                porro optio repudiandae, possimus sit laborum
                                natus beatae, quibusdam libero, facere molestias
                                aut esse fugit in doloribus corrupti.
                              </div>
                            </div>

                            <div className="info-block">
                              <a href="/" className="block">
                                <div className="title">
                                  <span className="percent">30%</span>
                                  <span className="dot"></span>
                                  <span className="count">Staking Rewards</span>
                                </div>
                                <div className="desc">
                                  Lorem ipsum dolor sit amet consectetur,
                                  adipisicing elit. Debitis quia aliquid error
                                  porro optio repudiandae, possimus sit laborum
                                  natus beatae, quibusdam libero, facere
                                  molestias aut esse fugit in doloribus
                                  corrupti.
                                </div>
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

      {/* FOOTERS */}

      <section className="footer-maincontainer">
        <div className="footercontainer">
          <div className="footer-content">
            <img src={rabbit} alt="" className="footerlogo" />
            <p className="footer-para">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Provident ipsum recusandae placeat officia laborum.
            </p>
          </div>
          <div className="social-links">
            <a href="/">
              <AiOutlineTwitter size={35} className="twitter" />
            </a>
            <a href="/">
              <FaTelegram size={35} className="telegram" />
            </a>
          </div>
          <div className="copyright-container">
            <div className="copyright-content">
              <p className="copyright">
                Copyright ®2021 Elon Rabbit. All Rights Reserved.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
