import React, { Component } from "react";
// import Landing from "./views/Landing";
// import Header from "./components/Header";
import { Route, Link, BrowserRouter as Router, Switch } from "react-router-dom";
import CreateAccount from "./views/CreateAccount";
import Login from "./views/Login";

import Landing2 from "./views/Landing2";
import Header2 from "./components/Header2";
import Cities from "./views/Cities";
import { Provider } from "react-redux";
import Itinerary from "./components/Itinerary";
// import Footer from "./components/Footer";
//you have wrap the App.js into Provider,
//the Provider take in a property
import store from "./store";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="my-itinerary ">
          <Router>
            <Header2 />
            <Switch>
              <Route exact path="/" component={Landing2} />
              <Route path="/login" component={Login} />
              <Route path="/createaccount" component={CreateAccount} />
              <Route exact path="/itinerary/:cityId" component={Itinerary} />
              <Route path="/cities" component={Cities} />
            </Switch>

            <Link to="/">
              <i className="medium  material-icons home-button fixed">home</i>
            </Link>
          </Router>
          {/* <Footer /> */}
        </div>
      </Provider>
    );
  }
}

export default App;
