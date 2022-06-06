import React from "react";

import fj1 from "../img/Fjfort.jpg";
import fj2 from "../img/Umbrea.jpg";
import fj3 from "../img/manamaajman.jpg";
import fj4 from "../img/fjheritage.jpg";
import fj5 from "../img/Adventure Park Fj.jpg";
import fj6 from "../img/Cornichekalba.jpg";

import Header from "./Header";
import Footer from "./Footer";
import "../styles_pages/Fujairah.css";

function Fujairah() {
  return (
    <div>
      <Header />
      <div className="hero-banner6">
        <div>
          <div className="hero-content">
            <h1>FUJAIRAH</h1>
            <p className="Para">
              Fujairah is known for its beaches and the solitude and relaxation
              they present. Offshore activities include scuba diving and
              snorkelling and there are many beautiful sites for these available
              in the area.
            </p>
          </div>
        </div>
      </div>
      {/* History */}
      <div className="History">
        Fujairah History
        <p className="hispara">
          The Emirate of Fujairah, dominated by the Sharqiyin tribe, sits at the
          mouth of the important trade route, the Wadi Ham (which is guarded by
          the Sharqiyin Al Bithnah Fort), through the mountains to the interior
          and the Persian Gulf Coast. Known as the Shamaliyah, the east coast of
          what is now the UAE was subject to Muscat until 1850, when it was
          annexed by Al Qasimi of Sharjah, in an agreement made between Sheikh
          Sultan bin Saqr Al Qasimi and the Sultan of Muscat. The Shamaliyah was
          governed by Al-Qasimi Wali at Kalba although frequently seceded and in
          1901 Sheikh Hamad bin Abdullah Al Sharqi, chief of the Sharqiyin,
          declared independence from Sharjah. This was recognized by a number of
          the Trucial Sheikhs and also by Muscat, but not the British, who were
          frequently provoked by the independently minded Ruler. At this time,
          The Emirate of Fujairah consisted of some 150 houses and 3,000 date
          palms and its people lived mainly through pearling and date
          cultivation. Since the absorption of Kalba by Sharjah in 1952, the
          Shamaliyah is shared by the emirates of Fujairah and Sharjah. In 1952,
          The Emirate of Fujairah entered into treaty relations with Britain,
          becoming the last of the emirates to join the Trucial States. Having
          withheld this recognition for over fifty years, the British government
          only granted it because the oil exploration company Petroleum
          Concessions Limited (PCL) needed to sign a concession with a
          recognized ruler. On 2 December 1971, The Emirate of Fujairah joined
          the United Arab Emirates.
        </p>
      </div>
      {/*--- TRENDING GAMES ---*/}
      <div className="container">
        <h1 id="trending-title">Explore More!</h1>
        <div className="grid">
          <div className="grid-item">
            <div className="card">
              <img className="card-img" src={fj1} />
              <div className="card-content">
                <a
                  href="https://www.google.com/maps/place/Fujairah+Fort/@25.1386801,56.3349147,17z/data=!3m1!4b1!4m5!3m4!1s0x3ef4f8444c57e4d9:0xab6c9e5e43f4820d!8m2!3d25.1386753!4d56.3371034

"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h1 className="card-header">Fujairah Fort</h1>
                  <p className="card-text">
                    Fujairah Fort is a fort in the city of Fujairah, United Arab
                    Emirates. Dating back to the 16th century, it is the among
                    the oldest as well as the largest castles in the country. It
                    is noted for playing significant roles.
                    <button className="card-btn">
                      Visit <span>→</span>
                    </button>
                  </p>
                </a>
              </div>
            </div>
          </div>
          <div className="grid-item">
            <div className="card">
              <img className="card-img" src={fj2} alt="AS1" />
              <div className="card-content">
                <a
                  href="https://www.google.com/maps/place/Umbrella+Beach/@25.1480324,56.3470101,15z/data=!3m1!4b1!4m5!3m4!1s0x3ef457df400d3953:0x9b48b86a19fc63bc!8m2!3d25.1480137!4d56.3557649"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h1 className="card-header">Umbrella Beach </h1>
                  <p className="card-text">
                    Umbrella Beach is a newly developed seafront complex
                    consisting of, restaurants, coffee shops, food trucks, and
                    more.Come to Umbrella Beach to be a place for everyone!. It
                    is the best place to visit.
                  </p>
                  <button className="card-btn">
                    Visit <span>→</span>
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div className="grid-item">
            <div className="card">
              <img className="card-img" src={fj3} alt="AS2" />
              <div className="card-content">
                <a
                  href="https://www.google.com/maps/place/Fujairah+Museum/@25.1350587,56.3366943,17z/data=!3m1!4b1!4m5!3m4!1s0x3ef4f87e03e9da29:0x59245307613ba75f!8m2!3d25.1350539!4d56.3388518
"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h1 className="card-header">Fujairah Museum</h1>
                  <p className="card-text">
                    Fujairah Museum is one of the most popular attractions in
                    the emirate. Each year, from October to March, the museum
                    hosts thousands of visitors every week. Great place to
                    visit.
                  </p>
                  <button className="card-btn">
                    Visit <span>→</span>
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div className="grid-item">
            <div className="card">
              <img className="card-img" src={fj4} alt="AS3" />
              <div className="card-content">
                <a
                  href="https://www.google.com/maps/place/Fujairah+Heritage+Village+%D9%82%D8%B1%D9%8A%D8%A9+%D8%A7%D9%84%D9%81%D8%AC%D9%8A%D8%B1%D8%A9+%D8%A7%D9%84%D8%AA%D8%B1%D8%A7%D8%AB%D9%8A%D8%A9%E2%80%AD/@25.1370964,56.3351366,17z/data=!3m1!4b1!4m5!3m4!1s0x3ef4f880abf81839:0x8b09a79ffbbbe29e!8m2!3d25.1370916!4d56.3373253"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h1 className="card-header">Fujairah Heritage Village</h1>
                  <p className="card-text">
                    Fujairah Heritage Village is a heritage-based tourist
                    attraction located close to Madhab Spring Park and Madhab
                    Palaces.
                  </p>
                  <button className="card-btn">
                    Visit <span>→</span>
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div className="grid-item">
            <div className="card">
              <img className="card-img" src={fj5} alt="AS4" />
              <div className="card-content">
                <a
                  href="https://www.google.com/maps/place/Fujairah+Adventures+Park/@25.1363668,56.2974824,17z/data=!3m1!4b1!4m5!3m4!1s0x3ef45755c721cf53:0x4fb28581e5d887c0!8m2!3d25.136362!4d56.2996711"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h1 className="card-header">Adventure Park</h1>
                  <p className="card-text">
                    The number one urban adventure park in Fujairah. With
                    expertly-designed bike and hiking trails spread out over 20
                    hectares. Best adventurous place in Fujairah.
                    <button className="card-btn">
                      Visit <span>→</span>
                    </button>
                  </p>
                </a>
              </div>
            </div>
          </div>
          <div className="grid-item">
            <div className="card">
              <img className="card-img" src={fj6} alt="AS5" />
              <div className="card-content">
                <a
                  href="https://www.google.com/maps/place/Kalba+Corniche+Park/@25.0867967,56.3566919,17z/data=!3m1!4b1!4m5!3m4!1s0x3ef4f9955f56df61:0x6d8b1d69096ad2c7!8m2!3d25.0867919!4d56.3588806"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h1 className="card-header">Kalba Corniche Park</h1>
                  <p className="card-text">
                    This is well maintained beach with park.There are only few
                    beaches like this around norther part of emirates.Head over
                    to Kalba Corniche Park,
                  </p>
                  <button className="card-btn">
                    Visit <span>→</span>
                  </button>
                </a>
              </div>
            </div>
          </div>
          <df-messenger
            intent="WELCOME"
            chat-title="TraverseFeedback"
            agent-id="0bd5f576-da86-48b0-83fb-f101a90eafd8"
            language-code="en"
          />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Fujairah;
