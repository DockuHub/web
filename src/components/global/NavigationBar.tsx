import React from "react";
import styled from "styled-components";
import { withTheme, withStyles } from "@material-ui/styles";

import { AppBar, MenuItem, Toolbar, Button } from "@material-ui/core";

const BootstrapButton = withStyles({
  root: {
    boxShadow: "none",
    color: "white",
    textTransform: "none",
    backgroundColor: "#4C5DF0",
    "&:hover": {
      backgroundColor: "#0069d9",
      borderColor: "#0062cc"
    },
    "&:active": {
      boxShadow: "none",
      backgroundColor: "#0062cc",
      borderColor: "#005cbf"
    },
    "&:focus": {
      boxShadow: "0 0 0 0.2rem rgba(0,123,255,.5)"
    }
  }
})(Button);

function NavigationBarRaw(props: any) {
  return (
    <AppBar elevation={0} position="static" style={{ backgroundColor: "#fff" }}>
      <Toolbar>
        <BootstrapButton style={{ marginLeft: "auto" }}>
          Get Started
        </BootstrapButton>
      </Toolbar>
    </AppBar>
  );
}

export const NavigationBar = withTheme(NavigationBarRaw);
