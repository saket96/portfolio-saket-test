import React from "react";
import "./styles.css";
import About from "./About";
export default function Body() {
  return (
    <div className="Body">
      <div className=" jumbotron jumbotron-fluid  banner-1 ">
        <div className="container text-white text-center">
          <h1 className="display-5 text-dark font-weight-light ">
            Hi, I'm Saket
          </h1>
          <blockquote>
            <h4>A Front-end and Shopify Developer</h4>
          </blockquote>
        </div>
        {/* <a href="#about"><span id="scrollIcon" class="front-glyph glyphicon glyphicon-menu-down" aria-hidden="true"></span></a> */}
      </div>
      <div className="jumbotron jumbotron-fluid banner-2 ">
        <h1 className=" mt-5 text-center font-weight-light purple">About me</h1>
        <About />
      </div>
    </div>
  );
}
