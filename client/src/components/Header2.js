import React from "react";
import IconLogin from "./IconLogin";
// import { Route, Link, BrowserRouter as Router, Switch } from "react-router-dom";
import HamburgerMenu from "./HamburgerMenu";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    flexGrow: 1
  }
});

export default function SimpleAppBar() {
  const classes = useStyles();

  return (
    <div className="fixedTop" className={classes.root}>
      <AppBar
        position="static"
        color="default"
        style={{ position: "fixed", top: 0 }}
      >
        <Toolbar>
          <IconLogin />
          <HamburgerMenu />
          <Typography variant="h6" color="inherit">
            Welcome to MytineraryApp
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

// const Header2 = () => {
//   return (
//     <div className="account-icon myFlex">
//       <div>
//         <IconLogin />
//         <HamburgerMenu />
//       </div>
//     </div>
//   );
// };

// export default Header2;
