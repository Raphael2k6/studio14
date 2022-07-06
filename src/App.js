import React, { useEffect } from "react";
import "./App.scss";
import NavBar from "./component/navBar/NavBar";
import mapImage from "./assets/img/image1.png";
import iphoneImg from "./assets/img/iPhone.png";
import Icon from "./assets/icons/Icons";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

function App() {
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    gsap.to("#text1", {
      x: 10,
      opacity: 0.9,
      duration: 4,
      scrollTrigger: {
        trigger: "#text1",
        toggleActions: "play complete reverse reset",
      },
    });
    gsap.to("#img", {
      y: 22,
      opacity: 0.9,
      duration: 4,
      scrollTrigger: {
        trigger: "#img",
        toggleActions: "play complete reverse reset",
      },
    });
    gsap.to("#h2", {
      x: -30,
      opacity: 0.9,
      duration: 4,
      scrollTrigger: {
        trigger: "#h2",
        // toggleActions: "play complete reverse reset",
      },
    });
    gsap.to("#image", {
      y: -30,
      opacity: 0.9,
      duration: 3,
      scrollTrigger: {
        trigger: "#image",
        toggleActions: "play complete reverse reset",
      },
    });
    gsap.to("#header", {
      y: -30,
      opacity: 0.9,
      duration: 3,
      scrollTrigger: {
        trigger: "#header",
        toggleActions: "play complete reverse reset",
      },
    });
    gsap.to("#left", {
      x: 40,
      opacity: 0.9,
      duration: 3,
      scrollTrigger: {
        trigger: "#left",
        toggleActions: "play complete reverse reset",
      },
    });
  }, []);

  return (
    <div className="container">
      <section className="container-content">
        <NavBar />
        <div className="container-content_items">
          <div className="text" id="text1">
            <h2>Compare & book ride-hailing providers</h2>
            <p>
              Save money and time with WhichrRide. Think Compare the market but
              for taxis.
            </p>
          </div>
          <div className="img" id="img">
            <img src={mapImage} />
          </div>
        </div>
      </section>

      <section className="purple-section">
        <div>
          <div className="text">
            <div>
              <h3>
                Whichride brings together multiple ride hailing providers and
                local taxi firms in one app
              </h3>

              <p>
                Whichride brings together multiple ride hailing providers and
                local taxi firms in one app
              </p>
            </div>
          </div>
          <div className="app-features">
            <div>
              <img src={iphoneImg}  id="image" />
            </div>
            <div className="step" id="h2">
              <div className="step1">
                <div>
                  <Icon name="step1" />
                </div>
                <div>
                  <h5>Enter Location</h5>
                  <p>
                    Enter your destination to see a list of taxi providers near
                    you.
                  </p>
                </div>
              </div>
              <div className="step2">
                <div>
                  <Icon name="step2" />
                </div>
                <div>
                  <h5>Find the perfect ride</h5>
                  <p>
                    Filter results by driver rating, driver sex, waiting times,
                    price or speed. Reduce carbon footprint by only showing
                    hybrid or electric cars.
                  </p>
                </div>
              </div>
              <div className="step3">
                <div>
                  <Icon name="step3" />
                </div>
                <div>
                  <h5>Pay and Save</h5>
                  <p>
                    Once you select a ride, we search the web for coupons to get
                    you an even better deal, then book seemlessly within our app
                    and earn points while you ride.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="why-whichRide">
        <div className="header" id="header">
          <h1>Why Whichride</h1>
        </div>
        <div className="column">
          <div className="left">
            <div className="left-content" id="left">
              <div>
                <Icon name="carIcon" />
              </div>

              <span>More choices</span>
              <p>
                WhichRide lets you compare pricing across the major rideshares
                so you can save money on every ride.
              </p>
              <div>
                <Icon name="group10" />
              </div>
              <span>More choices</span>
              <p>
                WhichRide lets you compare pricing across the major rideshares
                so you can save money on every ride.
              </p>
            </div>
          </div>
        </div>
        <div className="column">
          <div className="right">
            <div>
              <Icon name="setting" />
            </div>
            <span>More choices</span>
            <p>
              WhichRide lets you compare pricing across the major rideshares so
              you can save money on every ride.
            </p>
            <div>
              <Icon name="secure" />
            </div>
            <span>Safety first</span>
            <p>
              WhichRide lets you compare pricing across the major rideshares so
              you can save money on every ride.
            </p>
          </div>
        </div>
      </section>
      <section className="footer-top">
        <div>
          <div className="text">
            <h1>Sign up to our beta form</h1>
            <p>
              Sign up to our mailing list to find out more information and keep
              up to date about our activities
            </p>
          </div>
          <div className="email-input">
            <div>
              <input placeholder="email" />
              <button>Subscribe</button>
            </div>
          </div>
        </div>
      </section>
      <footer>
        <div className="content">
          <div>
            <p>© 2020 Whichride - All rights reserved.</p>
          </div>
          <div>
            <p>Privacy Policy Terms and Conditions</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
