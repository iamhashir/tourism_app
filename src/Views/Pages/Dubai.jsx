import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Traverse from "../img/traverseff.png";

import LoveLake from "../img/lovelake.jpg";
import BurjKhalifah from "../img/Khalifah.jpg";
import BurjArab from "../img/Burjarab.jpg";
import QuranicPark from "../img/Museum_of_the_future,_Dubai.jpeg";
import MusuemOfFuture from "../img/Quranic-Park-Dubai-Entrance-1024x640.jpg";

import Atlantis from "../img/atlantis.jpeg";

import "../styles_pages/dubai.css";
import "../styles_pages/common.css";

function Dubai() {
  return (
    <div>
      <Header />
      <div className="hero-banner2">
        <div>
          <div className="hero-content">
            <h1>DUBAI</h1>
            <p className="Para">
              Dubai is a city that needs to be seen to be believed. Find out all
              you need to know about the place of endless possibilities.
              Discover the warm hospitality, rich culinary heritage and proud
              traditions that make up Dubai's vibrant culture.
            </p>
          </div>
        </div>
      </div>
      {/* History */}
      <div className="History">
        Dubai History
        <p className="hispara">
          Dubai History Within less than 300 years, Dubai has grown from small
          pearl fishing village into a modern metropolis withaskyline studded
          with skyscrapers.The story begins with the current rulers, the Al
          Maktoum family. In 1833,they led 800 members of the Bani Yas tribe to
          what is now Dubai Creek,where they set up home.The creek wasanatural
          harbour and during the 19th century,it served as Dubai's commercial
          engine,establishing itself asacentre for fishing,pearling and maritime
          trade. Old dhows(traditional sailing boats)still ply the routes
          between Dubai,India and beyond. By the turn of the 20th century, Dubai
          had established itself asasuccessful port.The souk on the Deira side
          of the Creek was the largest on the coast with 350 shops,
          attractingasteady stream of visitors and businessmen. By the 1930s,the
          city's population was nearly 20,000,aquarter of whom were expatriates.
          In the 1950s the creek began to silt, so ruler Sheikh Rashid bin Saeed
          Al Maktoum decided to have the waterway dredged. It was ambitious and
          costly project but one that proved visionary thanks to the vast
          increase of cargo traffic asaresult. When oil was discovered in
          1966,Sheikh Rashid turned the petro-dollars into building projects,and
          also used it to kick-start the tourist industry. In 1971,Dubai became
          part of the United Arab Emirates following the British withdrawal.In
          1972,the project was completed when the final emirate,Ras Al
          Khaimah,joined the fledgling country. Even though the visionary Sheikh
          Rashid died in 2006,and was succeeded by his son Sheikh Mohammed,Dubai
          and the United Arab Emirates have continued to flourish. The city
          state sufferedasetback in 2008 when recession hit and it had to be
          bailed out by Abu Dhabi,but today Dubai is back on track and the
          cranes that dot its skyline are as busy as ever.
        </p>
      </div>
      {/*--- TRENDING GAMES ---*/}
      <div className="container">
        <h1 id="trending-title">Explore More!</h1>
        <div className="grid">
          <div className="grid-item">
            <div className="card">
              <img className="card-img" src={Atlantis} alt="AS" />
              <div className="card-content">
                <a
                  href="https://www.google.com/maps/place/Atlantis,+The+Palm/@25.1304474,55.1149611,17z/data=!3m1!4b1!4m8!3m7!1s0x3e5f153e3609c979:0x5945a418a804ac5!5m2!4m1!1i2!8m2!3d25.1304426!4d55.1171498"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h1 className="card-header">Atlantis</h1>
                  <p className="card-text">
                    You can expect endless entertainment with top-rated dining
                    outlets, unique aquarium experiences and outstanding
                    architectural feats at this world-famous luxury hotel.
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
              <img className="card-img" src={BurjArab} alt="AS1" />
              <div className="card-content">
                <a
                  href="https://www.google.com/maps/place/Burj+Al+Arab/@25.1415573,55.183884,18z/data=!3m1!4b1!4m8!3m7!1s0x3e5f6a576414cf2d:0xb3da71b879f0e038!5m2!4m1!1i2!8m2!3d25.1411914!4d55.1852468
"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h1 className="card-header">Burj Al Arab</h1>
                  <p className="card-text">
                    The Burj Al Arab is a five-star hotel, the highest official
                    ranking. While the hotel is sometimes erroneously described
                    as "the world's only 'seven-star' hotel".
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
              <img className="card-img" src={BurjKhalifah} alt="AS2" />
              <div className="card-content">
                <a
                  href="https://www.google.com/maps/place/Burj+Khalifa,Dubai/@25.1971543,55.2719704,17z/data=!3m1!4b1!4m5!3m4!1s0x3e5f4364bfab654d:0x3205c8554167f4bf!8m2!3d25.1971495!4d55.2741591/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h1 className="card-header">Burj Khalifah</h1>
                  <p className="card-text">
                    At over 828 metres (2,716.5 feet) and more than 160 stories,
                    Burj Khalifa holds the following records: Tallest building
                    in the world. Tallest free-standing structure in the world.
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
              <img className="card-img" src={LoveLake} alt="AS3" />
              <div className="card-content">
                <a
                  href="Love lake
https://www.google.com/maps/place/Love+Lake+-+Dubai/@24.8352147,55.3914268,14.31z/data=!4m5!3m4!1s0x3e5f814706f7833b:0xf002386f582fba3d!8m2!3d24.8351908!4d55.4033872

"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h1 className="card-header">Love Lake</h1>
                  <p className="card-text">
                    There is love everywhere, in the air, on top of the trees,
                    stones, walls, and even water. There is a remarkable
                    collection of flowers and plants to make it even better.
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
              <img className="card-img" src={QuranicPark} alt="AS4" />
              <div className="card-content">
                <a
                  href="https://www.google.com/maps/place/Museum+of+The+Future/@25.2192082,55.2774481,17z/data=!3m1!4b1!4m5!3m4!1s0x3e5f434ba1c34fa9:0x2bfd06ff9c202fc4!8m2!3d25.2192034!4d55.2819328"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h1 className="card-header">Museum of the Future</h1>
                  <p className="card-text">
                    The Museum of the Future is an exhibition space for
                    innovative and futuristic ideologies, services, and
                    products. Located in the Financial District of Dubai, UAE.
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
              <img className="card-img" src={MusuemOfFuture} alt="AS5" />
              <div className="card-content">
                <a
                  href="https://www.google.com/maps/place/Quranic+Park/@25.2402597,55.4696426,17z/data=!3m1!4b1!4m5!3m4!1s0x3e5f614e08ec9e1f:0x4a3d3ecba9d43558!8m2!3d25.2402549!4d55.4718313"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h1 className="card-header">Quranic Park</h1>
                  <p className="card-text">
                    Dubai's Quranic Park offers wonderful insights into the Holy
                    Quran, enhancing awareness of the Islamic values of peace,
                    love and tolerance.
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
      </div>
      <Footer />
    </div>
  );
}

export default Dubai;
