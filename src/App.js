import { Fragment, useContext } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import { AuthContext } from "./context/auth-context";
import MainNavigation from "./components/layout/MainNavigation";
import Home from "./pages/Home";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
import Profile from "./pages/Profile";

function App() {
  const authCtx = useContext(AuthContext);

  return (
    <Fragment>
      <MainNavigation />

      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>

        <Route path="/profile">
          {authCtx.isLoggedIn && <Profile />}
          {!authCtx.isLoggedIn && <Redirect to="/auth/login" />}
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
