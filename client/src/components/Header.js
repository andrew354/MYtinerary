import React from "react";
import IconLogin from "./IconLogin";
import { Route, Link, BrowserRouter as Router, Switch } from "react-router-dom";
const Header = () => {
  return (
    <div className="account-icon myFlex">
      <div>
        <IconLogin />
      </div>
      <div>
        <Link to="/">
          <i className="medium  material-icons">home</i>
        </Link>
      </div>
    </div>
  );
};

export default Header;
