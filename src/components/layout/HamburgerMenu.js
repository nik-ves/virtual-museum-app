import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/auth-context";
import { CSSTransition } from "react-transition-group";

import classes from "./HamburgerMenu.module.css";
import { GiBowlingPropulsion } from "react-icons/gi";

const HamburgerMenu = (props) => {
  const authCtx = useContext(AuthContext);
  const isLoggedIn = authCtx.isLoggedIn;

  return (
    <CSSTransition
      in={props.isActive}
      timeout={400}
      mountOnEnter
      unmountOnExit
      classNames={{
        enterActive: classes["hamburger-open"],
        exitActive: classes["hamburger-close"],
      }}
    >
      <ul className={classes["hamburger-menu"]}>
        <li>
          <NavLink
            to="/"
            onClick={props.showHamburgerMenuHandler}
            exact
            activeClassName={classes.active}
          >
            Home
          </NavLink>
        </li>
        {isLoggedIn && (
          <li>
            <NavLink
              to="/settings"
              onClick={props.showHamburgerMenuHandler}
              activeClassName={classes.active}
            >
              Museum Settings
            </NavLink>
          </li>
        )}
        {isLoggedIn && (
          <li>
            <NavLink
              to="/tours"
              onClick={props.showHamburgerMenuHandler}
              activeClassName={classes.active}
            >
              Tours
            </NavLink>
          </li>
        )}
        {!isLoggedIn && (
          <li>
            <NavLink
              to="/sign-in"
              onClick={props.showHamburgerMenuHandler}
              activeClassName={classes.active}
              exact
            >
              Sign In
            </NavLink>
          </li>
        )}
        {!isLoggedIn && (
          <li>
            <NavLink
              to="/sign-up"
              onClick={props.showHamburgerMenuHandler}
              activeClassName={classes.active}
              exact
            >
              Sign Up
            </NavLink>
          </li>
        )}
      </ul>
    </CSSTransition>
  );
};

export default HamburgerMenu;
