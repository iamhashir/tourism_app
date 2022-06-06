import React, { Component } from "react";
import './Body_stylesheets/Maps.css';
const AnyReactComponent = ({ text }) => <div>{text}</div>;

class Map extends Component {
  static defaultProps = {
    center: {
      lat: 25.2048,
      lng: 55.2708,
    },
    zoom: 11,
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div className="MapWrapper">
        <iframe className="mapHover"
          width="800"
          height="450"
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          src="https://www.google.com/maps/embed/v1/view?key=AIzaSyBE8rJsrkrxda-eRv3tXaGP_bVrm-8E4Ps&center=24.4241,53.8478&zoom=7"
        ></iframe>
      </div>
    );
  }
}

export default Map;
