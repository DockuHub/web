import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { NavigationBar } from "./components/global/NavigationBar";

interface RouteConfig {
  path: string;
  component: any;
}

interface AppRouterProps {
  public_routes: Array<RouteConfig>;
  private_routes: Array<RouteConfig>;
}

const App: React.FunctionComponent<AppRouterProps> = props => {
  const { public_routes, private_routes } = props;

  return (
    <Router>
      <NavigationBar />
      <Switch>
        {/* Public Routes */}
        {public_routes.map((route, index) => (
          <Route key={index} exact {...route} />
        ))}

        {/* Private Routes */}
        {private_routes.map((route, index) => (
          <Route key={index} exact {...route} />
        ))}
      </Switch>
    </Router>
  );
};

export default App;
