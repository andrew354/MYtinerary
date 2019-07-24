import React from "react";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { Route, Link, BrowserRouter as Router, Switch } from "react-router-dom";

export default function SimpleMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  return (
    <div>
      <i onClick={handleClick} className="medium  material-icons">
        account_circle
      </i>

      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <Link to="/login">
          <MenuItem onClick={handleClose}>Login</MenuItem>
        </Link>
        <Link to="/createaccount">
          <MenuItem onClick={handleClose}>Create Account</MenuItem>
        </Link>
        {/* <MenuItem onClick={handleClose}>Logout</MenuItem> */}
      </Menu>
    </div>
  );
}
