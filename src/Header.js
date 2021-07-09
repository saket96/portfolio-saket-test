import React from "react";
import "./styles.css";

export default function Header() {
  return (
    <div className="Header">
      <nav className="navbar navbar-expand-lg navbar-light fixed-top ">
        <a className="navbar-brand" href="https://blog.saketsuman.com">
          <b>Blog</b>
        </a>
        {/* <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a
              className="nav-item nav-link text-white"
              href="https://blog.saketsuman.com"
            >
              Blog<span className="sr-only"></span>
            </a>
          </div>
        </div> */}
      </nav>
    </div>
  );
}
