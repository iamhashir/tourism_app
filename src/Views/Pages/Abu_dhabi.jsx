import React from "react";
// import "../styles_pages/Abudhabi.css";
import "../styles_pages/common.css";

import Header from "./Header";
import Footer from "./Footer";
import Traverse from "../img/traverseff.png";
import SheikhZayedMosque from "../img/sheikhzayed.jpg";
import EmiratesPalace from "../img/emirates-palace-01.jpg";
import Louvre from "../img/louvre-abu-dhabi.png";
import WarnerBros from "../img/WARNER-BROS.-PLAZA.jpg";
import YasWaterworld from "../img/Yas-Waterworld-Abu-Dhabi.jpg";
import FerrariWorld from "../img/FerrariWorldAbuDhabi.jpg";

function Abu_dhabi() {
  return (
    <div>
      <Header />
      {/*---------------------------- CONTENT ----------------------------*/}
      <div className="main_head" style={{}}>
        <div className="hero-banner1">
          <div className="hero-content">
            <h1>ABU DHABI</h1>
            <p className="Para">
              Thanks to its geographically diverse scenery and rich culture and
              history, the emirate is a dream to explore. Wander beneath palm
              trees in the centuries-old oasis, go crazy in adventure and
              amusement parks, rest at luxury resorts, and shop at some of the
              world's top shopping malls.
            </p>
          </div>
        </div>
        {/* History */}
        <div className="History">
          Abu Dhabi History
          <p className="hispara">
            While much of the city is new,Abu Dhabi(which translates as'Father
            of the Gazelle') has roots that go much deeper.The first people to
            inhabit what would become the Emirati capital were probably nomadic
            tribesmen,although the earliest building, discovered in
            2010,isaNestorian church that dates from 600 CE. The monks of Abu
            Dhabi appeared to have remained for several centuries,accruing
            mentions in 16th century European literature as well as by jeweller
            Gasparo Balbi who set off to India in 1579 in search of pearls.
            Quitealot of what happened to the monks of Abu Dhabi is unknown but
            what is certain is that the area was settled by the Bedouins of the
            Bani Yas tribe,the ancestors of today's natives,in 1761. Having
            initially settled in Liwa Oasis,the tribe,led by the Al-Nahyan
            family,moved into what would become Abu Dhabi to take advantage of
            the pearl trade. Acentury later,with trade booming,ruler Sheikh
            Zayed bin Mohammed al-Nahyan (also known as Zayed the Great)signed
            protection agreement with Britain and the city duly became one of
            the Trucial States. While the protection agreement kept the citizens
            safe,it didn't make them rich and at the dawn of the 20th
            century,Abu Dhabi was one of the poorest towns in the area- largely
            asaresult of the Japanese discovery of how to make cultured
            pearls.But in 1958,its fate and fortunes changed forever as oil was
            unearthed in the desert. But with oil came turbulence and in
            1966,Sheikh Zayed bin Sultan al-Nahyan stageda coup against his
            ruling brother.In 1971 the United Arab Emirates was established and
            Sheikh Zayed bin Sultan al-Nahyan became the UAE's first president.
            In November 2004,after his death,his oldest son Sheikh Khalifa bin
            Zayed al-Nahyan became the leader of Abu Dhabi and was later elected
            President of the United Arab Emirates.
          </p>
        </div>
        {/*--- TRENDING GAMES ---*/}
        <div className="container">
          <h1 id="trending-title">Explore More!</h1>
          <div className="grid">
            <div className="grid-item">
              <div className="card">
                <img className="card-img" src={EmiratesPalace} alt="AS1" />
                <div className="card-content">
                  <a
                    target="_blank"
                    href="https://www.google.com/maps/place/Sheikh+Zayed+Grand+Mosque/@24.4128383,54.4727867,17z/data=!3m1!4b1!4m5!3m4!1s0x3e5e4273e8dafe49:0x248fbbcbefe2afc7!8m2!3d24.4128334!4d54.4749754"
                  >
                    <h1 className="card-header">Emirates Palace</h1>
                    <p className="card-text">
                      Emirates Palace is for everyone who is looking for a break
                      from everyday life. Located on a pristine private beach,
                      Emirates Palace is the epitome of luxury in Abu Dhabi.
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
                <img className="card-img" src={SheikhZayedMosque} alt="AS1" />
                <div className="card-content">
                  <a
                    target="_blank"
                    href="https://www.google.com/maps/place/Sheikh+Zayed+Grand+Mosque/@24.4128383,54.4727867,17z/data=!3m1!4b1!4m5!3m4!1s0x3e5e4273e8dafe49:0x248fbbcbefe2afc7!8m2!3d24.4128334!4d54.4749754"
                  >
                    <h1 className="card-header" id="mosque">
                      Sheikh Zayed Mosque{" "}
                    </h1>
                    <p className="card-text">
                      The Sheikh Zayed Grand Mosque is one the world's largest
                      mosques and a massive architectural work of art.
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
                <img className="card-img" src={Louvre} alt="AS2" />
                <div className="card-content">
                  <a
                    target="_blank"
                    href="https://www.google.com/maps/place/Louvre+Abu+Dhabi/@24.5337002,54.3936521,17z/data=!3m1!4b1!4m5!3m4!1s0x3e5e6724630067f1:0x42191ffb02753df9!8m2!3d24.5336954!4d54.3981368"
                  >
                    <h1 className="card-header">Louvre</h1>
                    <p className="card-text">
                      The Louvre Abu Dhabi is an art museum located on Saadiyat
                      Island in Abu Dhabi, United Arab Emirates. It runs under
                      an agreement between the UAE and France.
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
                <img className="card-img" src={FerrariWorld} alt="AS3" />
                <div className="card-content">
                  <a
                    href="https://www.google.com/maps/place/Ferrari+World+Abu+Dhabi/@24.4835529,54.6029024,16z/data=!3m1!4b1!4m5!3m4!1s0x3e5e457e2d394a05:0x6076df4876c470a9!8m2!3d24.4837634!4d54.6070066"
                    target="_blank"
                  >
                    <h1 className="card-header">Ferrari world</h1>
                    <p className="card-text">
                      Ferrari World in Abu Dhabi is the first Ferrari branded
                      theme park in the world. The amusement park in the capital
                      city of United Arab Emirates has 37 record-breaking rides.
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
                <img className="card-img" src={YasWaterworld} alt="AS4" />
                <div className="card-content">
                  <h1 className="card-header">Yas Water World</h1>
                  <a
                    href="https://www.google.com/maps/place/Yas+Waterworld+Abu+Dhabi/@24.4876219,54.5974583,17z/data=!3m1!4b1!4m5!3m4!1s0x3e5e457acea5a845:0x12d3db84713d00d9!8m2!3d24.487617!4d54.599647"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <p className="card-text">
                      Yas Waterworld Abu Dhabi is an Emirati-themed waterpark
                      located on Yas Island in Abu Dhabi, United Arab Emirates,
                      that is home to 45 rides, slides and attractions.
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
                <img className="card-img" src={WarnerBros} alt="AS5" />
                <div className="card-content">
                  <a
                    href="https://www.google.com/maps/place/Warner+Bros+World+Abu+Dhabi/@24.4909322,54.5970472,17z/data=!3m1!4b1!4m5!3m4!1s0x3e5e4569238902a7:0x5a3f2432f3fb33b9!8m2!3d24.4909273!4d54.5992359"
                    target="_blank"
                    rel="noopener noreferrer"
                  >

                  <h1 className="card-header">Warner Bros World</h1>
                  <p className="card-text">
                    Warner Bros. World Abu Dhabi is an indoor theme park in Abu
                    Dhabi, United Arab Emirates, owned and developed by Miral
                    Asset Management.
                  </p>
                  <button className="card-btn">
                    Visit <span>→</span>
                  </button>
                  </a>
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
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Abu_dhabi;
