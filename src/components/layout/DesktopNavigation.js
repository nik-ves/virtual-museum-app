import { NavLink } from "react-router-dom";
import { useContext, useState } from "react";
import classes from "./DesktopNavigation.module.css";
import { AuthContext } from "../../context/auth-context";
import DropdownMenu from "./DropdownMenu";
import { CgProfile } from "react-icons/cg";

const DesktopNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const authCtx = useContext(AuthContext);
  const isLoggedIn = authCtx.isLoggedIn;

  const isOpenHandler = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={classes["desktop-nav"]}>
      <ul className={classes["desktop-list"]}>
        <li>
          <NavLink
            to="/"
            onClick={() => setIsOpen(false)}
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
              onClick={() => setIsOpen(false)}
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
              onClick={() => setIsOpen(false)}
              activeClassName={classes.active}
            >
              Tours
            </NavLink>
          </li>
        )}
        {!isLoggedIn && (
          <li>
            <NavLink to="/sign-in" activeClassName={classes.active} exact>
              Sign In
            </NavLink>
          </li>
        )}
        {!isLoggedIn && (
          <li>
            <NavLink to="/sign-up" activeClassName={classes.active} exact>
              Sign Up
            </NavLink>
          </li>
        )}
        {isLoggedIn && (
          <li>
            <CgProfile onClick={isOpenHandler} className="btn-profile" />

            {isOpen && <DropdownMenu isOpen={isOpenHandler} />}
          </li>
        )}
      </ul>
    </nav>
  );
};

export default DesktopNavigation;
