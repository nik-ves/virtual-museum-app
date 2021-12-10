import { Fragment, useContext } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import { AuthContext } from "./context/auth-context";
import MainNavigation from "./components/layout/MainNavigation";
import Home from "./pages/Home";
import SignIn from "./pages/auth/SignIn";
import SignUp from "./pages/auth/SignUp";
import Profile from "./pages/Profile";
import Search from "./pages/Search";
import Footer from "./components/layout/Footer";

function App() {
  const authCtx = useContext(AuthContext);

  return (
    <Fragment>
      <MainNavigation />

      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>

        <Route path="/search">
          <Search />
        </Route>

        <Route path="/profile">
          {authCtx.isLoggedIn && <Profile />}
          {!authCtx.isLoggedIn && <Redirect to="/sign-in" />}
        </Route>

        <Route path="/sign-in">
          {authCtx.isLoggedIn && <Redirect to="/profile" />}
          {!authCtx.isLoggedIn && <SignIn />}
        </Route>

        <Route path="/sign-up">
          {authCtx.isLoggedIn && <Redirect to="/profile" />}
          {!authCtx.isLoggedIn && <SignUp />}
        </Route>
      </Switch>

      <Footer />
    </Fragment>
  );
}

export default App;
