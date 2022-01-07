import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/auth-context";
import classes from "./HamburgerMenu.module.css";

const HamburgerMenu = ({ showHamburgerMenuHandler }) => {
  const authCtx = useContext(AuthContext);
  const isLoggedIn = authCtx.isLoggedIn;

  return (
    <ul className={classes["hamburger-menu"]}>
      <li>
        <NavLink
          to="/"
          onClick={showHamburgerMenuHandler}
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
            onClick={showHamburgerMenuHandler}
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
            onClick={showHamburgerMenuHandler}
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
            onClick={showHamburgerMenuHandler}
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
            onClick={showHamburgerMenuHandler}
            activeClassName={classes.active}
            exact
          >
            Sign Up
          </NavLink>
        </li>
      )}
    </ul>
  );
};

export default HamburgerMenu;
