import { Fragment } from "react";
import { Route, Switch } from "react-router-dom";

import MainNavigation from "./components/layout/MainNavigation";
import Home from "./components/pages/Home";
import LoginForm from "./components/pages/Auth/LoginForm";
import SignupForm from "./components/pages/Auth/SignupForm";

function App() {
  return (
    <Fragment>
      <MainNavigation />

      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>

        <Route path="/auth/login">
          <LoginForm />
        </Route>

        <Route path="/auth/signup">
          <SignupForm />
        </Route>
      </Switch>
    </Fragment>
  );
}

export default App;
