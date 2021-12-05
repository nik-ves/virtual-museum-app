import { Fragment, useContext } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import { AuthContext } from "./context/auth-context";
import MainNavigation from "./components/layout/MainNavigation";
import Home from "./pages/Home";
import SignIn from "./pages/auth/SignIn";
import SignUp from "./pages/auth/SignUp";
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
          {!authCtx.isLoggedIn && <Redirect to="/sign-in" />}
        </Route>

        <Route path="/sign-in">
          <SignIn />
        </Route>

        <Route path="/sign-up">
          <SignUp />
        </Route>
      </Switch>
    </Fragment>
  );
}

export default App;
