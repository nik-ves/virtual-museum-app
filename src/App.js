import { Fragment, useContext } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import { AuthContext } from "./context/auth-context";
import MainNavigation from "./components/layout/MainNavigation";
import ScrollToTop from "./components/UI/ScrollToTop";
import Home from "./pages/Home";
import SignIn from "./pages/auth/SignIn";
import SignUp from "./pages/auth/SignUp";
import Profile from "./pages/Profile";
import MyPlanner from "./pages/MyPlanner";
import Tours from "./pages/Tours";
import Settings from "./pages/Settings";
import SettingInfo from "./pages/SettingInfo";
import ExhibitInfo from "./pages/ExhibitInfo";
import ExhibitDetails from "./components/toursPage/ExhibitDetails";
import Footer from "./components/layout/Footer";
import TourDetails from "./components/toursPage/TourDetails";
import MyTours from "./pages/MyTours";
import NotFound from "./pages/NotFound";
import Fix from "./components/UI/Fix";

function App() {
  const { isLoggedIn } = useContext(AuthContext);

  return (
    <Fragment>
      <Fix />
      <MainNavigation />

      <ScrollToTop />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>

        {/* ===== SETTINGS ===== */}
        <Route path="/settings" exact>
          {isLoggedIn && <Settings />}
          {!isLoggedIn && <Redirect to="/sign-in" />}
        </Route>

        <Route path="/settings/:settingId" exact>
          {isLoggedIn && <SettingInfo />}
          {!isLoggedIn && <Redirect to="/sign-in" />}
        </Route>

        <Route path="/settings/:settingId/:exhibitId">
          {isLoggedIn && <ExhibitInfo />}
          {!isLoggedIn && <Redirect to="/sign-in" />}
        </Route>

        {/* ===== PROFLE ===== */}
        <Route path="/profile" exact>
          {isLoggedIn && <Profile />}
          {!isLoggedIn && <Redirect to="/sign-in" />}
        </Route>

        <Route path="/profile/my-planner">
          {isLoggedIn && <MyPlanner />}
          {!isLoggedIn && <Redirect to="/sign-in" />}
        </Route>

        <Route path="/profile/my-tours">
          {isLoggedIn && <MyTours />}
          {!isLoggedIn && <Redirect to="/sign-in" />}
        </Route>

        {/* ===== TOURS ===== */}
        <Route path="/tours" exact>
          {isLoggedIn && <Tours />}
          {!isLoggedIn && <Redirect to="/sign-in" />}
        </Route>

        <Route path="/tours/:tourId" exact>
          {isLoggedIn && <TourDetails />}
          {!isLoggedIn && <Redirect to="/sign-in" />}
        </Route>

        <Route path="/tours/:tourId/:exhibitId" exact>
          {isLoggedIn && <ExhibitDetails />}
          {!isLoggedIn && <Redirect to="/sign-in" />}
        </Route>

        {/* ===== AUTH ===== */}
        <Route path="/sign-in">
          {isLoggedIn && <Redirect to="/" />}
          {!isLoggedIn && <SignIn />}
        </Route>

        <Route path="/sign-up">
          {isLoggedIn && <Redirect to="/" />}
          {!isLoggedIn && <SignUp />}
        </Route>

        <Route path="*" exact>
          <NotFound />
        </Route>
      </Switch>

      <Footer />
    </Fragment>
  );
}

export default App;
