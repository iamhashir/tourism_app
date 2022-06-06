import React from "react";
import "react-slideshow-image/dist/styles.css";
import "react-alice-carousel/lib/alice-carousel.css";
import AliceCarousel from "react-alice-carousel";

const handleDragStart = (e) => e.preventDefault();

const items = [
  <img
    src="https://www.dropbox.com/s/9wdtvjcisk4m9go/Group%2078.png?raw=1"
    onDragStart={handleDragStart}
    role="present"
    style={{ width: "100%", height: "100%" }}
  />,
  <img
    src="https://www.dropbox.com/s/ktvvjrlr0sdljmz/Group%2079.png?raw=1"
    onDragStart={handleDragStart}
    role="present"
    style={{ width: "100%", height: "100%" }}
  />,
  <img
    src="https://www.dropbox.com/s/ium6ift63ukv1yq/Group%2080.png?raw=1"
    onDragStart={handleDragStart}
    role="present"
    style={{ width: "100%", height: "100%" }}
  />,
  <img
    src="https://www.dropbox.com/s/xt1zn2yw7xl6nyi/Group%2081.png?raw=1"
    onDragStart={handleDragStart}
    role="present"
    style={{ width: "100%", height: "100%" }}
  />,
];
function Feedback() {
  return (
    <div style={{ width: "100%", height: "50vh", margin: "auto" }}>
      <AliceCarousel
        autoPlay={true}
        animationDuration={2000}
        mouseTracking
        infinite={true}
        items={items}
        keyboardNavigation={true}
        responsive={{
          0: {
            items: 1,
          },
          1024: {
            items: 2,
          },
        }}
      />
      ;
    </div>
  );
}

export default Feedback;
{
  /* <div
      className="slide-container1"
      style={{
        overflow: "hidden",
        width: "70%",
        height: "70%",
        marginRight: "auto",
        marginLeft: "auto",
      }}
    >
      <Zoom
        style={{
          // duration: 200,
          transitionDuration: 10000,
          infinite: true,
          indicators: false,
          // scale: 1.4,
          // arrows: false,
        }}
        Easing="ease-in"
        scale={0.5}
        transitionDuration={2500}
        duration={100}
        indicators={true}
        pauseOnHover={true}
        arrows={false}
        infinite={true}
      >
        {images.map((each, index) => (
          <img
            key={index}
            style={{ width: "100%", height: "100%" }}
            src={each}
          />
        ))}
      </Zoom>
    </div> */
}
