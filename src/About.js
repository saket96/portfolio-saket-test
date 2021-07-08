import React from "react";
import "./styles.css";
import profile from "./img/profile.jpg";
export default function About() {
  return (
    <div className="About">
      <div className="text-center col-xl-12">
        <img
          src={profile}
          alt="myimage"
          className="profile-logo mx-auto d-block mt rounded-circle"
        />
        <p className="text-white  text-center  mt-5 about-saket">
          I'm a developer currently based in Mumbai. I'm currently working as a
          Javascript developer and a Shopify developer. I also have degrees in
          computer science, so I am learning the advanced Javascript to become a
          full stack developer and developing Shopify apps, which can help the
          business.
        </p>
      </div>
    </div>
  );
}
