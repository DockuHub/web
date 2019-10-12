import React from "react";
import { withTheme } from "@material-ui/styles";

function HomeRaw(props: any) {
  return (
    <div>
      <h2 style={{ color: props.theme.palette.primary.main }}>
        Home
      </h2>
    </div>
  );
}

export const Home = withTheme(HomeRaw);
