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
