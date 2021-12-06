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
              <h1>Virtual Museum</h1>
            </NavLink>
          </div>

          <ul className={classes.list}>
            <li>
              <NavLink to="/" exact activeClassName={classes.active}>
                Home
              </NavLink>
            </li>
            {authCtx.isLoggedIn && (
              <li>
                <NavLink to="/profile" activeClassName={classes.active}>
                  Profile
                </NavLink>
              </li>
            )}
            {!authCtx.isLoggedIn && (
              <li>
                <NavLink to="/sign-in" activeClassName={classes.active}>
                  Sign In
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
