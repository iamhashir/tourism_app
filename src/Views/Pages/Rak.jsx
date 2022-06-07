import React from "react";

import As1 from "../img/AS.jpg"
import As2 from "../img/AS1.jpg"
import As3 from "../img/AS2.jpg"
import As4 from "../img/AS3.jpg"
import As5 from "../img/AS4.jpg"
import As6 from "../img/AS5.jpg"
import RakVid from "../videos/HeroV3_compressed.mp4"
import "../styles_pages/rak.css"

import Header from "./Header";
import Footer from "./Footer";
import VideoCon from "./VideoCon";
import ButtonMain from "./ButtonMain";

function Rak() {
  return (
    <div>
      <Header />

      <div className="hero-banner5">
        <div>
          <div className="hero-content">
            <h1>RAS AL KHAIMAH</h1>
            <p className="Para">
              A haven of year-round sunshine, the Emirate features pristine
              beaches, lush mangrove trees and terracotta dunes, as well as
              fertile, green oases and the dramatic, awe-inspiring vistas of the
              majestic Hajjar mountains, including the UAE’s highest mountain
              peak.
            </p>
          </div>
        </div>
      </div>
      {/* History */}
      <div className="History">
        Ras Al Khaimah History
        <p className="hispara">
          The northern area of the city today known as Ras Al Khaimah was
          previously the location of the important Islamic era settlement and
          port of Julfar. Ras Al Khaimah has been the site of continuous human
          habitation for 7,000 years, one of the few places in the country and
          the world where this is the case. Archaeological evidence has
          demonstrated that the settlement known as Julfar shifted location over
          time as harbour channels silted up. Excavations of a sizable tell,
          which revealed remnants of a Sassanid era fortification, indicate that
          early Julfar was located in the north of the present city of Ras Al
          Khaimah, not far from other sites of historical and archaeological
          interest such as the Pre-Islamic fort, 'Sheba's Palace' (Shimal Fort).
          One of Ras Al Khaimah's most celebrated sons, Ibn Majid, was a hugely
          influential seaman, navigator and cartographer, and there is evidence
          in his writing that the town he came from was at that time known as
          Ras Al Khaimah, that town having eclipsed Julfar as the principal port
          and settlement of the Shimal coast. In the early 18th century, the
          Qawasim (singular Al Qasimi) established themselves in Ras Al Khaimah
          and Sharjah on the Arabian Peninsula, growing to become a significant
          maritime force with holdings on both the Persian and Arabian coasts
          that frequently came into conflict with British flagged shipping. In
          the aftermath of a series of attacks against shipping sailing under
          Omani flags and following 1809 monsoon season, the British mounted the
          Persian Gulf campaign of 1809 against Ras Al Khaimah, in which the Al
          Qasimi fleet was largely destroyed. The British operation continued to
          Lingeh on the Persian coast which was, like the Greater and Lesser
          Tunbs islands, administered by the Al Qasimi. By the morning of 14
          November, the military expedition was over and the British forces
          returned to their ships, having suffered light casualties of five
          killed and 34 wounded. Arab losses are unknown, but were probably
          significant, while the damage done to the Al Qasimi fleets was severe:
          a significant portion of their vessels had been destroyed.
        </p>
      </div>
      {/*--- TRENDING GAMES ---*/}
      <div className="container">
        <h1 id="trending-title">Explore More!</h1>
        <div className="grid">
          <div className="grid-item">
            <div className="card">
              <img className="card-img" src={As1} alt="AS" />
              <div className="card-content">
                <h1 className="card-header">Jebel Jais</h1>
                <p className="card-text">
                  Jebel Jais in Ras Al Khaimah rests at 1,934 metres above sea
                  level and is the highest peak in the UAE. The mountain offers
                  stunning sunrise and sunset views.
                </p>
                <button className="card-btn">
                  Visit <span>→</span>
                </button>
              </div>
            </div>
          </div>
          <div className="grid-item">
            <div className="card">
              <img className="card-img" src={As2} alt="AS1" />
              <div className="card-content">
                <h1 className="card-header">Jazirat Al Hamra</h1>
                <p className="card-text">
                  Al Jazirah Al Hamra is a town to the south of the city of Ras
                  Al Khaimah in the United Arab Emirates. There is a collection
                  of abandoned houses and other buildings.
                </p>
                <button className="card-btn">
                  Visit <span>→</span>
                </button>
              </div>
            </div>
          </div>
          <div className="grid-item">
            <div className="card">
              <img className="card-img" src={As3} alt="AS2" />
              <div className="card-content">
                <h1 className="card-header">RAK Museum</h1>
                <p className="card-text">
                  Once served as the residence of the former ruler until 1960s,
                  Ras Al-Khaimah Museum is a Pandora Box of historical wonders
                  of the emirate. The museum exhibits a vast.
                </p>
                <button className="card-btn">
                  Visit <span>→</span>
                </button>
              </div>
            </div>
          </div>
          <div className="grid-item">
            <div className="card">
              <img className="card-img" src={As4} alt="AS3" />
              <div className="card-content">
                <h1 className="card-header">Dhayah Fort</h1>
                <p className="card-text">
                  Established in the early 19th century, Dhayah Fort is an
                  ancient building located at a strategic position as a
                  defensive military tower. Made out of mud and brick, this fort
                  has served.
                </p>
                <button className="card-btn">
                  Visit <span>→</span>
                </button>
              </div>
            </div>
          </div>
          <div className="grid-item">
            <div className="card">
              <img className="card-img" src={As5} alt="AS4" />
              <div className="card-content">
                <h1 className="card-header">Wadi Shawka</h1>
                <p className="card-text">
                  Wadi Shawka is a popular hiking destination in Ras-al-Khaimah
                  and is considered to be an exploration hike because the trail
                  offers an all-in-one experience like off-road drives,
                </p>
                <button className="card-btn">
                  Visit <span>→</span>
                </button>
              </div>
            </div>
          </div>
          <div className="grid-item">
            <div className="card">
              <img className="card-img" src={As6} alt="AS5" />
              <div className="card-content">
                <h1 className="card-header">Iceland Water Park</h1>
                <p className="card-text">
                  Iceland Water Park is UAE's first ice-themed water park and
                  has a wide range of high-speed slides which are suitable for
                  all age groups. It is the largest waterpark in UAE.
                </p>
                <button className="card-btn">
                  Visit <span>→</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <df-messenger
          intent="WELCOME"
          chat-title="TraverseFeedback"
          agent-id="0bd5f576-da86-48b0-83fb-f101a90eafd8"
          language-code="en"
        />
        <VideoCon video={RakVid} />
        <ButtonMain downloadLink="https://www.dropbox.com/sh/zx8paep9bta8d14/AAB_wOHJ_jGMP0P8k2fgB1oWa?dl=1" />
        <Footer />
      </div>
    </div>
  );
}

export default Rak;
