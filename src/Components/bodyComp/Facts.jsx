import React from "react";
import "./Body_stylesheets/facts.css";
function Facts() {
  const myStyle = {
    backgroundImage:
      "url('https://images.unsplash.com/photo-1580674684081-7617fbf3d745?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80')",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };
  const myStyle1 = {
    backgroundImage:
      "url('https://images.unsplash.com/photo-1542272201-b1ca555f8505?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80)",
    backgroundSize: "cover",
    filter: " blur(.1px)",
    backgroundRepeat: "no-repeat",
  };
  return (
    <div className="facts">
      <div className="fact_content" style={myStyle1}>
        <div id="fact_info">
          <h1>Did You know !!!</h1>
          <h3>
            It holds some pretty unusual world records Of the many, many
            Guinness World Records the UAE holds there are well-known feats such
            as the Burj Khalifa, the world’s tallest tower and largest picture
            frame for Dubai Frame, but there are also some more obscure ones.
            For example, the UAE holds the record for the most dominoes toppled
            in a circle field (it was 89,995 in case you were curious), the
            heaviest vehicle pulled by hair and the fastest 10 metres completed
            by a horse on its hind legs
          </h3>
        </div>
      </div>
      <div style={myStyle} className="side_image">
        <div  className="fact_info2">
          {/* <h1>Did You know !!!</h1> */}
          <h3>
            The UAE population is made up of over 200 nationalities In a
            population of 9.89 million, more than 80% of UAE residents are
            expats, originating from more than 200 countries around the world.
            Citizens from India, Pakistan, Bangladesh and the Philippines make
            up the largest portion of expats in the UAE.
          </h3>
        </div>
      </div>
    </div>
  );
}
export default Facts;
