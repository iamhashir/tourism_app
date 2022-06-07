import React from "react";

import Header from "./Header";
import Footer from "./Footer";
import shjVid from "../videos/pexels-mikhail-nilov-8396962.mp4"
import Sh1 from "../img/sh1.jpg";
import Sh2 from "../img/sh2.jpg";
import Sh3 from "../img/sh3.jpg";
import Sh4 from "../img/sh4.jpg";
import Sh5 from "../img/sh5.jpg";
import Sh6 from "../img/sh6.jpg";

import "../styles_pages/common.css";
import "../styles_pages/Sharjah.css";
import VideoCon from "./VideoCon";
import ButtonMain from "./ButtonMain";

function Sharjah() {
  return (
    <div>
      <Header />
      <div class="hero-banner">
        <div>
          <div class="hero-content">
            <h1>SHARJAH</h1>
            <p class="Para">
              Sharjah is the third largest emirate in the UAE, its largest city
              and its most family-friendly destination. Experience a Sharjah
              museum, a desert safari and a Sharjah beach the emirate offers
              things to do for everyone.
            </p>
          </div>
        </div>
      </div>
      <div class="History">
        Sharjah History
        <p class="hispara">
          Human settlement in the area covered by the emirate has existed for
          over 120,000 years, with significant finds made of early axes and
          stone tools as well as Copper and Iron Age implements in Al Dhaid, Al
          Thuqeibah, Mileiha, Tell Abraq, Muwailah, Al Madam and Jebel
          Faya.Archaeological finds in the Mleiha area point to human habitation
          consistent with the spread of humanity from Africa to the wider world,
          evidenced by finds displayed at the Mleiha Archaeological Centre.
          Historically the emirate was one of the wealthiest towns in the
          region. Around 1727, Al Qasimi clan took control of Sharjah and
          declared the polity independent. The first in a long series of
          maritime skirmishes between the Al Qasimi and British vessels took
          place in 1797, when the British-flagged snow the Bassein was seized
          and released two days later. The cruiser Viper was subsequently
          attacked off Bushire. The Al Qasimi leader, Saqr bin Rashid Al Qasimi,
          protested innocence in both cases. A period of great instability
          followed along the coast, with a number of actions between British and
          Al Qasimi vessels alongside various changes of leadership and
          allegiances between the Rulers of Ras Al Khaimah, Ajman and Sharjah
          with Sheikh Sultan bin Saqr Al Qasimi claiming sovereignty over 'all
          the Joasmee ports' in 1823, a claim recognised by the British at the
          time.
        </p>
      </div>

      {/* <!----- TRENDING GAMES -----> */}
      <div class="container">
        <h1 id="trending-title">Explore More!</h1>
        <div class="grid">
          <div class="grid-item">
            <div class="card">
              <img class="card-img" src={Sh1} alt="AS" />
              <div class="card-content">
                <a
                  href="https://www.google.com/maps/place/Al+Khan+-+Al+Qasba+-+Sharjah/@25.3223329,55.3753377,18z/data=!3m1!4b1!4m5!3m4!1s0x3e5f5b9474ef66a3:0x713a89a36c11ed8c!8m2!3d25.322311!4d55.3762336"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h1 class="card-header">Al Qasba</h1>
                  <p class="card-text">
                    Located right at the heart of Sharjah, Al Qasba is the
                    perfect place to relax and spend some quality time with your
                    kids and family.The city is a centre for culture. ''{" "}
                  </p>
                  <button class="card-btn">
                    Visit <span>&rarr;</span>
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div class="grid-item">
            <div class="card">
              <img class="card-img" src={Sh2} alt="AS1" />
              <div class="card-content">
                <a
                  href="https://www.google.com/maps/place/Sharjah+Aquarium/@25.3312754,55.3546908,17z/data=!3m1!4b1!4m5!3m4!1s0x3e5f5b082b96861f:0x1401d31b640e5fea!8m2!3d25.3312584!4d55.3592025"
                  target="_blank"
                  rel="noopener noreferrer"
                ></a>
                <h1 class="card-header">Sharjah Aquarium</h1>
                <p class="card-text">
                  One of the most beautiful places in Sharjah is the Sharjah
                  Aquarium where you can visit with your family and enjoy a wide
                  range of marine life.
                </p>
                <button class="card-btn">
                  Visit <span>&rarr;</span>
                </button>
              </div>
            </div>
          </div>
          <div class="grid-item">
            <div class="card">
              <img class="card-img" src={Sh3} alt="AS2" />
              <div class="card-content">
                <a
                  href="https://www.google.com/maps/place/Sharjah+Museum+of+Islamic+Civilization/@25.3649204,55.3870106,17z/data=!3m1!4b1!4m5!3m4!1s0x3e5f5a3b0636b9b9:0x9807be7e0f780fb5!8m2!3d25.3649156!4d55.3891993"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h1 class="card-header">Sharjah Museum</h1>
                  <p class="card-text">
                    Dive into the roots of Arab and Islamic culture at the
                    massive and beautiful Sharjah Museum of Islamic
                    Civilization. Visit this mesmerizing place to learn about
                    the rituals of Islam.
                  </p>
                  <button class="card-btn">
                    Visit <span>&rarr;</span>
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div class="grid-item">
            <div class="card">
              <img class="card-img" src={Sh4} alt="AS3" />
              <div class="card-content">
                <a
                  href="https://www.google.com/maps/place/Sharjah+Art+Museum/@25.3613798,55.384854,17z/data=!3m1!4b1!4m5!3m4!1s0x3e5f5a3b089ab213:0x259a69d8104cd1f2!8m2!3d25.3613345!4d55.3871084"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h1 class="card-header">Sharjah Arts Museum</h1>
                  <p class="card-text">
                    Located in the heart of Sharjah, the Sharjah Arts Museum is
                    one of the most exciting places to visit in Sharjah as it
                    houses.
                  </p>
                  <button class="card-btn">
                    Visit <span>&rarr;</span>
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div class="grid-item">
            <div class="card">
              <img class="card-img" src={Sh5} alt="AS4" />
              <div class="card-content">
                <a
                  href="https://www.google.com/maps/place/Al+Majaz+Waterfront/@25.3272365,55.3854359,17z/data=!3m1!4b1!4m5!3m4!1s0x3e5f5be9734eab43:0x6c791474b1180d5d!8m2!3d25.3272317!4d55.3876246
"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h1 class="card-header">Al Majaz Waterfront</h1>
                  <p class="card-text">
                    Enjoy your beautiful evening while strolling inside the
                    massive and amazing Al Majaz Waterfront. It is one of the
                    best places to visit in Sharjah.
                  </p>
                  <button class="card-btn">
                    Visit <span>&rarr;</span>
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div class="grid-item">
            <div class="card">
              <img class="card-img" src={Sh6} alt="AS5" />
              <div class="card-content">
                <a
                  href="https://www.google.com/maps/place/Sharjah+National+Park/@25.3125757,55.5357054,17z/data=!3m1!4b1!4m5!3m4!1s0x3ef5f45485146907:0xadb1254899e5e59!8m2!3d25.3125709!4d55.5378941
"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h1 class="card-header">Sharjah National Park</h1>
                  <p class="card-text">
                    Spread over a humongous area of around 630000 sq meters,
                    Sharjah Park is one of the tourist attractions here. One of
                    the most amazing.
                  </p>
                  <button class="card-btn">
                    Visit <span>&rarr;</span>
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
        <script src="https://www.gstatic.com/dialogflow-console/fast/messenger/bootstrap.js?v=1"></script>
        <df-messenger
          intent="WELCOME"
          chat-title="TraverseFeedback"
          agent-id="0bd5f576-da86-48b0-83fb-f101a90eafd8"
          language-code="en"
        ></df-messenger>
        <VideoCon video={shjVid} />
        <ButtonMain downloadLink="https://www.dropbox.com/sh/b41lvmmuum0g0fv/AADRxGfECOwEQfoARBZexUB4a?dl=1" />
        <Footer />
      </div>
    </div>
  );
}

export default Sharjah;
