import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/auth-context";
import classes from "./ProfileHamburgerMenu.module.css";

const ProfileHamburgerMenu = ({ showProfileHamburgerHandler }) => {
  const authCtx = useContext(AuthContext);
  const isLoggedIn = authCtx.isLoggedIn;

  return (
    <ul className={classes["hamburger-menu"]}>
      <li>
        <NavLink
          to="/profile"
          onClick={showProfileHamburgerHandler}
          exact
          activeClassName={classes.active}
        >
          Profile
        </NavLink>
      </li>
      {isLoggedIn && (
        <li>
          <NavLink
            to="/profile/my-planner"
            onClick={showProfileHamburgerHandler}
            activeClassName={classes.active}
          >
            My Planner
          </NavLink>
        </li>
      )}
      {isLoggedIn && (
        <li>
          <NavLink
            to="/profile/my-tours"
            onClick={showProfileHamburgerHandler}
            activeClassName={classes.active}
          >
            My Tours
          </NavLink>
        </li>
      )}
      <li
        className={classes["dropdown-item"]}
        onClick={showProfileHamburgerHandler}
      >
        <button onClick={authCtx.logoutUser}>Logout</button>
      </li>
    </ul>
  );
};

export default ProfileHamburgerMenu;
