import React from "react";
import { image } from "../data/data";

function about() {
  return(
  <div id="about">
    <h2>About Me</h2>
      <p>Holy cow!</p>
      <img src={image} alt="I made this" />
  </div>
  )
}

export default about;