import React from "react";
import "../styles_pages/Video.css";
function VideoCon(props) {
  return (
    <div>
      <div id="videoWrap">
        <video autoPlay muted loop id="myVideo">
          <source src={props.video} type="video/mp4" />
        </video>
      </div>
    </div>
  );
}

export default VideoCon;
