import { Fragment, useContext } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import { AuthContext } from "./context/auth-context";
import MainNavigation from "./components/layout/MainNavigation";
import ScrollToTop from "./components/UI/ScrollToTop";
import Home from "./pages/Home";
import SignIn from "./pages/auth/SignIn";
import SignUp from "./pages/auth/SignUp";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import Footer from "./components/layout/Footer";
import SettingInfo from "./pages/SettingInfo";
import ExhibitInfo from "./pages/ExhibitInfo";

function App() {
  const authCtx = useContext(AuthContext);
  const isLoggedIn = authCtx.isLoggedIn;

  return (
    <Fragment>
      <MainNavigation />

      <ScrollToTop />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>

        <Route path="/settings" exact>
          <Settings />
        </Route>

        <Route path="/settings/:settingId" exact>
          <SettingInfo />
        </Route>

        <Route path="/settings/:settingId/:exhibitId">
          <ExhibitInfo />
        </Route>

        <Route path="/profile">
          {isLoggedIn && <Profile />}
          {!isLoggedIn && <Redirect to="/sign-in" />}
        </Route>

        <Route path="/sign-in">
          {isLoggedIn && <Redirect to="/profile" />}
          {!isLoggedIn && <SignIn />}
        </Route>

        <Route path="/sign-up">
          {isLoggedIn && <Redirect to="/profile" />}
          {!isLoggedIn && <SignUp />}
        </Route>
      </Switch>

      <Footer />
    </Fragment>
  );
}

export default App;
