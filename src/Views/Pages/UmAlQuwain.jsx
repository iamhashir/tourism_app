import React from "react";
import As1 from "../img/ummbeach.jpg";
import As2 from "../img/forrt.jpg";
import As3 from "../img/seneyah.jpg";
import As4 from "../img/CAmelrace.jpg";
import As5 from "../img/Dreamland-Aqua-Park.jpg";
import As6 from "../img/Barracuda.jpg";

import UmVid from "../videos/3141048014.mp4"
import Header from "./Header";
import Footer from "./Footer";

import "../styles_pages/common.css";
import "../styles_pages/umm.css";
import VideoCon from "./VideoCon"
import ButtonMain from "./ButtonMain";

function UmAlQuwain() {
  return (
    <div>
      <Header />

      <div className="hero-banner8">
        <div>
          <div className="hero-content">
            <h1>UMM AL QUWAIN</h1>
            <p className="Para">
              Umm Al-Quwain is filled with natural beauty and manmade tourist
              attractions, drawing many sightseers and tourists from bigger
              regions like Dubai.
            </p>
          </div>
        </div>
      </div>
      <div className="History">
        Umm al Quwain History
        <p className="hispara">
          The Emirate of Umm Al Quwain holds significant archaeological
          interest, with major finds at both Tell Abraq and Ed-Dur pointing to
          significant Ancient Near Eastern Cities. Arrowheads and other polished
          flint tools have been unearthed in various sites across the UAE while
          pieces of Ubaid Age pottery have been unearthed along the shores of
          the emirate. All evidence obtained so far indicate that contact with
          Mesopotamia existed as early as the 5th millennium BC, as an
          indigenous ceramic industry, did not emerge until the 3rd century BC.
          Finds at both Tell Abraq and Ed-Dur show habitation in the area
          throughout the Bronze Age, from the Hafit period, through the Umm Al
          Nar period and the later Wadi Suq and Iron I, II and III ages. Finds
          also link Ed-Dur with the inland settlement of Mleiha, especially
          distinctive burials of animals with their heads turned back on their
          bodies. Significant trading links with both the western Sumerian
          culture and the eastern Indus Valley culture are displayed at these
          sites, with the semi-nomadic Magan people smelting bronze mined in the
          Hajar Mountains and then shipping the smelted ore. Macedonian coinage
          unearthed at Ed-Dur dates back to Alexander the Great, while hundreds
          of coins have been found bearing the name of Abi'el. In March 2019, 15
          tombs, bronze statues, settlement remains, jewellery and pottery,
          dating back to the 1st century CE, were unearthed here. It is thought
          Ed-Dur is the site of Omana, mentioned by both Pliny and Strabo as an
          important town in the Lower Persian Gulf.
        </p>
      </div>
      <div className="container">
        <h1 id="trending-title">Explore More!</h1>
        <div className="grid">
          <div className="grid-item">
            <div className="card">
              <img className="card-img" src={As1} alt="AS" />
              <div className="card-content">
                <a
                  href="https://www.google.com/maps/place/Umm+Al+Quwain+-+Umm+Al+Quawain/@25.5514973,55.489213,12z/data=!3m1!4b1!4m5!3m4!1s0x3ef5fea6ff2b925d:0x4a02589b92c58613!8m2!3d25.5507975!4d55.5524476"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h1 className="card-header">Umm al Quwain Beach</h1>
                  <p className="card-text">
                    Umm Al-Quwain's main beach runs along the western rim of the
                    emirate's thin peninsula. Among Dubai residents, the
                    scattering of resorts and hotels here are known for their
                    good-value room rates.
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
              <img className="card-img" src={As2} alt="AS1" />
              <div className="card-content">
                <a
                  href="https://www.google.com/maps/place/UAQ+National+Museum+-+Al+Ali+Fort/@25.584084,55.5684871,17z/data=!3m1!4b1!4m5!3m4!1s0x3ef5fe72f3b437ad:0x9a6feb4a7dd2c32a!8m2!3d25.5840793!4d55.570628"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h1 className="card-header">Umm Al-Quwain Fort and Museum</h1>
                  <p className="card-text">
                    Umm Al-Quwain's Al-Ali Fort, built in 1768, once guarded the
                    entrance to the old town by overseeing both the sea and the
                    creek. The facade, with its two rounded towers has been well
                    restored.
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
              <img className="card-img" src={As3} alt="AS2" />
              <div className="card-content">
                <a
                  href="https://www.google.com/maps/place/Jaz%C4%ABrat+as+S%C4%ABn%C4%AByah/@25.6041854,55.619023,15z/data=!3m1!4b1!4m5!3m4!1s0x3ef5fd74565f0793:0xcf5feeb793eb348b!8m2!3d25.6041667!4d55.6277778"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h1 className="card-header">Seneyah Island</h1>
                  <p className="card-text">
                    Beautiful Seneyah Island, where Al Qaram trees (native to
                    the United Arab Emirates) grow, is the largest of the island
                    group and makes for a great nature escape from the hustle
                    and bustle of the UAE's cities.
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
              <img className="card-img" src={As4} alt="AS3" />
              <div className="card-content">
                <a
                  href="https://www.google.com/maps/place/Camel+Race+Track+-+Al+Lebsa+-+Umm+Al+Quawain/@25.4263668,55.7121589,13.89z/data=!4m5!3m4!1s0x3ef5eed149a2d701:0x713d5f833a70c02!8m2!3d25.4407072!4d55.7550573"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h1 className="card-header">Camel Race</h1>
                  <p className="card-text">
                    Camel racing is the UAE's national sport. For a morning at
                    the races, head out to Umm Al-Quwain's camel racing track in
                    Al Labsa (29 kilometers southeast of Umm Al-Quwain city).
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
              <img className="card-img" src={As5} alt="AS4" />
              <div className="card-content">
                <a
                  href="https://www.google.com/maps/place/Dreamland+Aqua+Park/@25.587533,55.6572467,17z/data=!3m1!4b1!4m5!3m4!1s0x3ef5fcd7b547266b:0x8afe5187d3b0c3b1!8m2!3d25.5875282!4d55.6594354"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h1 className="card-header">Dreamland Aqua Park</h1>
                  <p className="card-text">
                    Umm Al Quwain Dreamland is the largest family water park in
                    the region with over 250,000 square meters expanse of lush,
                    green, landscaped gardens. Enjoy More Than 40 Rides.
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
              <img className="card-img" src={As6} alt="AS5" />
              <div className="card-content">
                <a
                  href="https://www.google.com/maps/place/Barracuda+Beach+Resort/@25.5882618,55.6520096,17z/data=!3m1!4b1!4m8!3m7!1s0x3ef5fcdf5ddec921:0xc65326d52de0ed30!5m2!4m1!1i2!8m2!3d25.5882897!4d55.65418"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h1 className="card-header">Barracuda Beach Resort</h1>
                  <p className="card-text">
                    Set on a beach along the Gulf, this laid-back hotel is 20
                    minutes’ walk from Dreamland Aqua Park and 65 km from Dubai
                    International Airport.
                  </p>
                  <button className="card-btn">
                    Visit <span>→</span>
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
        <VideoCon video={UmVid} />
        <ButtonMain downloadLink="https://www.dropbox.com/sh/e7g4h555i00g6qq/AAAg2N7aR132xaqWDuqwonaQa?dl=1" />
        <Footer />
      </div>
    </div>
  );
}

export default UmAlQuwain;
