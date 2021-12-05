import { NavLink } from "react-router-dom";
import Container from "../UI/Container";
import { AuthContext } from "../../context/auth-context";
import { useContext } from "react";

import classes from "./MainNavigation.module.css";

const MainNavigation = () => {
  const authCtx = useContext(AuthContext);

  return (
    <header className={classes.header}>
      <Container>
        <div className={classes.content}>
          <div className={classes["logo-box"]}>
            <NavLink to="/">
              <h1>React Project</h1>
            </NavLink>
          </div>

          <ul className={classes.list}>
            {authCtx.isLoggedIn && (
              <li>
                <NavLink to="/profile" activeClassName={classes.active}>
                  Profile
                </NavLink>
              </li>
            )}
            {!authCtx.isLoggedIn && (
              <li>
                <NavLink to="/auth/login" activeClassName={classes.active}>
                  Sign In
                </NavLink>
              </li>
            )}
            {!authCtx.isLoggedIn && (
              <li>
                <NavLink to="/auth/signup" activeClassName={classes.active}>
                  Sign Up
                </NavLink>
              </li>
            )}
            {authCtx.isLoggedIn && <li onClick={authCtx.logoutUser}>Logout</li>}
          </ul>
        </div>
      </Container>
    </header>
  );
};

export default MainNavigation;
