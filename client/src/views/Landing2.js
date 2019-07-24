import React, { Component } from "react";
import arrow from "../assets/arrow.png";
import Container from "@material-ui/core/Container";
import MYtinerary from "../assets/MYtineraryLogo.png";
import { Route, Link, BrowserRouter as Router, Switch } from "react-router-dom";

class Landing2 extends Component {
  render() {
    return (
      <Container fixed>
        <div className="landing-page myFlexCol">
          <div className="myitineraryLogo marginTopLogo">
            <img src={MYtinerary} alt="MYtinerary" />
          </div>
          <div className="marginTop">
            <h5>
              Find your perfect trip, designed by insiders who know and love
              their cities
            </h5>
          </div>
          <div>
            <h4>Start browsing</h4>
          </div>
          <div>
            <Link to="/cities">
              <img src={arrow} alt="arrow" />
            </Link>
          </div>
        </div>

        <div className="marginTop">
          <h6>Want to build your own MYtinerary?</h6>
        </div>
        <div className="myFlex-two marginTop">
          <Link to="/login">Login</Link>
          <Link to="/createaccount">Create Account</Link>
        </div>
      </Container>
    );
  }
}

export default Landing2;
