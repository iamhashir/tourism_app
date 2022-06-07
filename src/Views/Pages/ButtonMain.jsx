import React from "react";
import "../styles_pages/button.css";

function ButtonMain(props) {
  return (
    <div>
      <a
        href={props.downloadLink}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "15vh",
        }}
      >
        <button className="card-btn" >Download Assets</button>
      </a>
    </div>
  );
}

export default ButtonMain;
