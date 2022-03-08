import React from "react";
import "../App.css";
import headerimage from "../images/headerimage (2).png";
import cmc from "../images/cmc.png";
import cg from "../images/cg.png";
import bsc from "../images/bsc.png";

export default function HerosSection() {
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

      {/*EXCHANGE */}

      <section className="partners-section">
        <div className="parterns-container">
          <div className="partners-content">
            <div className="heading-text">
              <h2 id="exchange">Patners</h2>
              <div className="partners-images">
                <a
                  href="https://coinmarketcap.com/currencies/elonsrabbit/"
                  className="er-link"
                >
                  <div className="coinMraketCap">
                    <img src={cmc} alt="" className="mgb" /> <br />
                    Coinmarketcap
                  </div>
                </a>
                <a
                  href="https://www.coingecko.com/en/coins/elons-rabbit"
                  className="er-link"
                >
                  <div className="coingecko">
                    <img src={cg} alt="" className="gb" /> <br />
                    Coingecko
                  </div>
                </a>
                <a
                  href="https://bscscan.com/token/0x92a4EbEE814AFe58741d7f216dC10211d5aBC250"
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
          <h2 id="roadmap">RoadMap</h2>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta
          perspiciatis a iste consectetur facere ullam eligendi, sit nulla
          cumque obcaecati mollitia aspernatur quia iure neque nesciunt magnam
          amet! Quidem veniam fuga ab neque, nostrum sint libero dolore, eos
          sunt doloremque inventore illum minus, assumenda est eligendi suscipit
          adipisci. Ex, molestiae?{" "}
        </div>
      </section>

      {/* TOKENS */}

      <section className="token-container">
        <div className="token-content">
          <h2 id="token">Tokenomics</h2>
          <p className="token-text">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.<br/> Atque
            laboriosam sed rem optio maiores eveniet a ab repudiandae facere ex!
          </p>
        </div>
        <section className="tokencontent-container">
          <div className="row d-flex align-items-end">
            <div className="area-block col-xl-4 col-md-6 col-12">
              <div className="info-listing">
                <div className="info-block">
                  <div className="title">
                    <span className="percent">5%</span>
                    <span className="dot"></span>
                    <span className="count">Airdrop</span>
                  </div>
                  <div className="desc">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
                    accusantium pariatur tenetur obcaecati ullam. Ratione?
                  </div>
                </div>

                <div className="info-block">
                  <div className="title">
                    <span className="percent">50%</span>
                    <span className="dot"></span>
                    <span className="count">Luquidity</span>
                  </div>
                  <div className="desc">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Quaerat nisi consequuntur itaque voluptatibus commodi
                    fugiat.
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
                <div className="value">1,00,000,00</div>
                <div className="name">ELONS RABBIT</div>
              </div>
            </div>

            <div className="area-block col-xl-4 col-md-6 col-12">
              <div className="info-listing">
                <div className="info-block">
                  <div className="title">
                    <span className="percent">15%</span>
                    <span className="dot"></span>
                    <span className="count">Allocation for CEX/DEX</span>
                  </div>
                  <div className="desc">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Assumenda earum amet sed? Libero, architecto voluptatem.
                  </div>
                </div>

                <div className="info-block">
                  <a href="/" className="info-link">
                    <div className="title">
                      <span className="percent">30%</span>
                      <span className="dot"></span>
                      <span className="count">Staking Rewards</span>
                    </div>
                    <div className="desc">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Minus magnam sed sit delectus. Laudantium, similique!
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
}
