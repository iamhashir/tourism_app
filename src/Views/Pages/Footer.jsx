import React from 'react'
// import "../styles_pages/Abudhabi.css"
import "../styles_pages/Footer.css"
import Traverse from "../img/traverseff.png";

function footer() {
  return (
    <div>
      <footer>
        <div className="content">
          <div className="left box">
            <div className="upper">
              <div className="topic">About us</div>
              <p>
                Traverse is a virtual tourist experience that attempts to enable
                people learn about the history and culture of the United Arab
                Emirates and explore all tourist spots available through all seven emirates
              </p>
            </div>
          </div>
          <div className="right box">
            <img className="bottomimg" style={{paddingTop:0}} src={ Traverse } alt="" />
          </div>
          <div className="middle box">
            <div className="Emarat">Emirates</div>
            <div>
              <a href="/dxb"> Dubai </a>
            </div>
            <div>
              <a href="/ajman">Ajman</a>
            </div>
            <div>
              <a href="/shj">Sharjah</a>
            </div>
            <div>
              <a href="/fujairah">Fujairah</a>
            </div>
            <div>
              <a href="/auh">ِAbu Dhabi</a>
            </div>
            <div>
              <a href="/rak">Ras Al Khaimah</a>
            </div>
            <div>
              <a href="/UmmAlQuwain">Umm Al Quwain</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default footer