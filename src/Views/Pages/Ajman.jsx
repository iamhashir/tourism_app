import React from "react";
import Aj1 from "../img/uae-ajman-beaches.jpg";
import Aj2 from "../img/natureajman.jpg";
import Aj3 from "../img/manamaajman.jpg";
import Aj4 from "../img/Ajmanmuseum.jpg";
import Aj5 from "../img/Ajmanmarina.jpg";
import Aj6 from "../img/jarah.jpg";
import Ajvideo from "../videos/pexels-tima-miroshnichenko-7169446.mp4";
import Header from "./Header";
import VideoCon from "./VideoCon";

import Footer from "./Footer";
import "../styles_pages/Ajman.css";
import ButtonMain from "./ButtonMain";
function Ajman() {
  return (
    <div>
      <Header />
      <div className="hero-banner4">
        <div>
          <div className="hero-content">
            <h1>AJMAN</h1>
            <p className="Para">
              Ajman's coastline is home to luxury hotels, each with their
              private patch of pristine white sand.
            </p>
          </div>
        </div>
      </div>
      {/* History */}
      <div className="History">
        Ajman History
        <p className="hispara">
          Al Bu Kharaiban Nuaimi rule in Ajman started in 1816, when Sheikh
          Rashid bin Humaid Al Nuaimi and fifty of his followers took the
          coastal settlement of Ajman from members of the Al Bu Shamis Nuaimi
          tribe in a short conflict. It wasn't until 1816 or 1817, however, that
          the Ajman fort finally fell to Rashid's followers and his rule was
          endorsed by the powerful Sheikh of neighbouring Sharjah and Ras Al
          Khaimah, Sheikh Sultan bin Saqr Al Qasimi. On 8 January 1820,
          following the sack of Ras Al Khaimah by a British force led by Sir
          W.G. Keir, Sultan bin Saqr signed the General Maritime Treaty with the
          United Kingdom on 4 February 1820, followed on 15 March by Rashid bin
          Humaid at Falaya Fort. An 1822 British maritime survey noted that
          Ajman had one of the best backwaters on the coast and was a small town
          with a single fortified building, the ruler's house. In common with
          many other coastal towns on what became the Trucial Coast, the
          population was mobile depending on the season – there were as many as
          1,400 to 1,700 men of the 'Mahamee' tribe living there during the
          pearl hunting season (April–September), many of whom would migrate to
          Al Buraimi in the date season. The survey notes that Ajman's ruler
          Rashid bin Ahmed considered his dominion independent of Emirate of
          Sharjah, but that Sharjah did not maintain that view even though it
          had no power over Ajman. The survey noted that the inhabitants of
          Ajman were 'mostly strict Wahhabis' and recorded the presence of the
          ruined village of Fasht down the shore from Ajman town, which is today
          the Fisht suburb of Sharjah city.
        </p>
      </div>

      <div className="container">
        <h1 id="trending-title">Explore More!</h1>
        <div className="grid">
          <div className="grid-item">
            <div className="card">
              <img className="card-img" src={Aj1} alt="AS1" />
              <div className="card-content">
                <a
                  href="https://www.google.com/maps/place/Public+beach/@25.4061074,55.3598962,13z/data=!4m9!1m2!2m1!1sajman+beach+!3m5!1s0x3e5f59dfbe15efcd:0xe967a724ac9309d0!8m2!3d25.4013789!4d55.4266584!15sCgtham1hbiBiZWFjaFoNIgtham1hbiBiZWFjaJIBBWJlYWNomgEgQ2hSRFNVaE5NRzluUzBWSlEwRm5TVVF3Y1ZreExSQUI

"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h1 className="card-header">Ajman Beach</h1>
                  <p className="card-text">
                    Ajman's coastline is home to luxury hotels, each with their
                    private patch of pristine white sand. Noted for some of the
                    prettiest beaches in the United Arab Emirates, this is the
                    place to come if you're looking for serious relaxation time.
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
              <img className="card-img" src={Aj2} alt="AS1" />
              <div className="card-content">
                <a
                  href="https://www.google.com/maps/place/Public+beach/@25.4061074,55.3598962,13z/data=!4m9!1m2!2m1!1sajman+beach+!3m5!1s0x3e5f59dfbe15efcd:0xe967a724ac9309d0!8m2!3d25.4013789!4d55.4266584!15sCgtham1hbiBiZWFjaFoNIgtham1hbiBiZWFjaJIBBWJlYWNomgEgQ2hSRFNVaE5NRzluUzBWSlEwRm5TVVF3Y1ZreExSQUI"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h1 className="card-header">Al Zorah Nature Reserve </h1>
                  <p className="card-text">
                    The northern side of Ajman Creek is home to the new Al-Zorah
                    coastal development, which mixes luxury villa residential
                    neighborhoods with beachfront hotel resorts.
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
              <img className="card-img" src={Aj3} alt="AS2" />
              <div className="card-content">
                <a
                  href="​​https://www.google.com/maps/place/Al+Hajar+Mountains/@23.3000187,57.0912461,15z/data=!3m1!4b1!4m5!3m4!1s0x3e8e8e7b25ace27d:0xa5efd21e3074b744!8m2!3d23.2999996!4d57.1000009
"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h1 className="card-header">Ajman Exclaves</h1>
                  <p className="card-text">
                    The Hajar Mountain towns of Manama (72 kilometers east from
                    Ajman city) and Masfut (127 kilometers southeast from Ajman
                    city) are both exclaves of the Emirate of Ajman.
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
              <img className="card-img" src={Aj4} alt="AS3" />
              <div className="card-content">
                <a
                  href="https://www.google.com/maps/place/Ajman+Museum/@25.4134621,55.441119,17z/data=!3m1!4b1!4m5!3m4!1s0x3e5f5778c9a1343d:0x562a16a1ef84dd73!8m2!3d25.4134573!4d55.4456037"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h1 className="card-header">Ajman Museum</h1>
                  <p className="card-text">
                    The fort is adorned with some unique features including its
                    grand gateway protected by two cannons, two watchtowers, and
                    two wind towers. Located in the heart of the city, the Ajman
                    Museum is the emirate's foremost museum illustrating life as
                    it once was.
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
              <img className="card-img" src={Aj5} alt="AS4" />
              <div className="card-content">
                <a
                  href="https://www.google.com/maps/place/Al+Zorah+Marina+1/@25.4296694,55.463582,17z/data=!3m1!4b1!4m5!3m4!1s0x3e5f579480eec91f:0x4efac8fb371f696a!8m2!3d25.4296646!4d55.4657707"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h1 className="card-header">Al Zorah</h1>
                  <p className="card-text">
                    Al Zorah is a 25-minute drive from Dubai International
                    Airport and 20 minutes from Sharjah International Airport.
                    The development includes world-class hotels and resorts.
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
              <img className="card-img" src={Aj6} alt="AS5" />
              <div className="card-content">
                <a
                  href="​​https://www.google.com/maps/place/AJMAN+CULTURE+CENTER/@25.429712,55.4482611,14z/data=!4m9!1m2!2m1!1sal+jarah+cultural+!3m5!1s0x3ef5f7fb7bf09343:0x500d0dac2a799b89!8m2!3d25.4134972!4d55.4973922!15sChFhbCBqYXJhaCBjdWx0dXJhbFoTIhFhbCBqYXJhaCBjdWx0dXJhbJIBGWZlZGVyYWxfZ292ZXJubWVudF9vZmZpY2WaASRDaGREU1VoTk1HOW5TMFZKUTBGblNVUk5OWE50WVhOUlJSQUI"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h1 className="card-header">Al Jarah Cultural Center</h1>
                  <p className="card-text">
                    Al Jarah Cultural Center is a place that will let you know
                    about the cultural heritage of United Arab Emirates.
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
        <VideoCon video={Ajvideo} />
        <ButtonMain downloadLink="https://www.dropbox.com/sh/nte0e0qifusuomg/AAB6ytbUZ0dXMZ-CjClJ2Doca?dl=1" />
        <Footer />
      </div>
    </div>
  );
}

export default Ajman;
