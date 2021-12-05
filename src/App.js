import { Fragment } from "react";
import { Route, Switch } from "react-router-dom";

import MainNavigation from "./components/layout/MainNavigation";
import Home from "./pages/Home";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
import Profile from "./pages/Profile";

function App() {
  return (
    <Fragment>
      <MainNavigation />

      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>

        <Route path="/profile">
          <Profile />
        </Route>

        <Route path="/auth/login">
          <Login />
        </Route>

        <Route path="/auth/signup">
          <Signup />
        </Route>
      </Switch>
    </Fragment>
  );
}

export default App;
