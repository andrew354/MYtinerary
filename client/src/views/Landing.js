import React, { Component } from "react";
import arrow from "../assets/arrow.png";
import MYtinerary from "../assets/MYtineraryLogo.png";
import Container from "@material-ui/core/Container";
import SlickSlider from "../components/SlickSlider";

class Landing extends Component {
  render() {
    return (
      <Container fixed>
        <div className="landing-page myFlexCol">
          <div className="myitineraryLogo marginTop">
            <img src={MYtinerary} alt="MYtinerary" />
          </div>
          <div className="marginTop">
            <h5>
              Find your perfect trip, designed by insiders who know and love
              their cities
            </h5>
          </div>
          <div>
            <img src={arrow} alt="arrow" />
          </div>
        </div>
        <div className="marginTop">
          <SlickSlider />
        </div>
      </Container>
    );
  }
}

export default Landing;
