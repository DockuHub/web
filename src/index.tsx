import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import * as serviceWorker from "./serviceWorker";

// UI Theme
import { ThemeProvider } from "@material-ui/styles";
import { theme } from "./styles/theme";

// Routes
import { public_routes } from "./routes/public_routes";
import { private_routes } from "./routes/private_routes";

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App public_routes={public_routes} private_routes={private_routes} />
  </ThemeProvider>,
  document.getElementById("root")
);

serviceWorker.unregister();
