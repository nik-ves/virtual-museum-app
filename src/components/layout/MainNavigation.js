import { NavLink } from "react-router-dom";
import Container from "../UI/Container";

import classes from "./MainNavigation.module.css";

const MainNavigation = () => {
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
            <li>
              <NavLink to="/profile" activeClassName={classes.active}>
                Profile
              </NavLink>
            </li>
            <li>
              <NavLink to="/auth/login" activeClassName={classes.active}>
                Login
              </NavLink>
            </li>
            <li>
              <NavLink to="/auth/signup" activeClassName={classes.active}>
                Sign Up
              </NavLink>
            </li>
          </ul>
        </div>
      </Container>
    </header>
  );
};

export default MainNavigation;
