import { Fragment, useContext } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import { AuthContext } from "./context/auth-context";
import MainNavigation from "./components/layout/MainNavigation";
import ScrollToTop from "./components/UI/ScrollToTop";
import Home from "./pages/Home";
import SignIn from "./pages/auth/SignIn";
import SignUp from "./pages/auth/SignUp";
import Profile from "./pages/Profile";
import MyTours from "./pages/MyTours";
import Tours from "./pages/Tours";
import Settings from "./pages/Settings";
import SettingInfo from "./pages/SettingInfo";
import ExhibitInfo from "./pages/ExhibitInfo";
import Footer from "./components/layout/Footer";

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

        <Route path="/tours" exact>
          <Tours />
        </Route>

        <Route path="/settings" exact>
          {isLoggedIn && <Settings />}
          {!isLoggedIn && <Redirect to="/auth/sign-in" />}
        </Route>

        <Route path="/settings/:settingId" exact>
          {isLoggedIn && <SettingInfo />}
          {!isLoggedIn && <Redirect to="/auth/sign-in" />}
        </Route>

        <Route path="/settings/:settingId/:exhibitId">
          {isLoggedIn && <ExhibitInfo />}
          {!isLoggedIn && <Redirect to="/auth/sign-in" />}
        </Route>

        <Route path="/profile" exact>
          {isLoggedIn && <Profile />}
          {!isLoggedIn && <Redirect to="/auth/sign-in" />}
        </Route>

        <Route path="/profile/my-tours">
          <MyTours />
        </Route>

        <Route path="/auth/sign-in">
          {isLoggedIn && <Redirect to="/" />}
          {!isLoggedIn && <SignIn />}
        </Route>

        <Route path="/auth/sign-up">
          {isLoggedIn && <Redirect to="/" />}
          {!isLoggedIn && <SignUp />}
        </Route>
      </Switch>

      <Footer />
    </Fragment>
  );
}

export default App;
