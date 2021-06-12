import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import Home from "../Pages/Home";
import Login from "../Pages/Login";

function ProtectedRoute({ path, component: Component, ...rest }) {
  const { user } = useAuth();
  return (
    <Route
      {...rest}
      path={path}
      render={({ location }) => {
        if (user) {
          return <Component />;
        } else {
          return (
            <Redirect
              to={{
                pathname: "/",
                state: { from: location },
              }}
            />
          );
        }
      }}
    />
  );
}

function Routes() {
  return (
    <Router>
      <Switch>
        <Route path={"/"} exact component={Login} />
        <ProtectedRoute path={"/home"} exact component={Home} />
      </Switch>
    </Router>
  );
}

export default Routes;
