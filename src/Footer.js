import React from "react";
import "./styles.css";
import "./fonts/ionicons.min.css";
import "./css/Footer-Basic.css";

export default function Footer() {
  return (
    <div className="Footer">
      <div className="jumbotron jumbotron-fluid banner-3">
        <div className="container">
          <h3 className="text-center para">Contact me</h3>
          <footer>
            <div className="footer-basic">
              <div className="social">
                <a
                  className="para"
                  href="mailto:saket.suman96@gmail.com?subject = Contact &body = Message"
                >
                  <ion-icon name="mail"></ion-icon>
                </a>
                <a href="https://www.linkedin.com/in/mysaket/">
                  <ion-icon name="logo-linkedin"></ion-icon>
                </a>
                <a href="https://www.instagram.com/iamsaketsuman/">
                  <ion-icon name="logo-instagram"></ion-icon>
                </a>
                <a href="https://www.facebook.com/saket.suman.7">
                  <ion-icon name="logo-facebook"></ion-icon>
                </a>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}
