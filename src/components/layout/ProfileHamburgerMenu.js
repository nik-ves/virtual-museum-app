import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/auth-context";
import classes from "./ProfileHamburgerMenu.module.css";
import useModal from "../../hooks/use-modal";

const ProfileHamburgerMenu = (props) => {
  const authCtx = useContext(AuthContext);
  const isLoggedIn = authCtx.isLoggedIn;

  const { showModal, showModalHandler, modalBox } = useModal(
    "Are you sure you want to log out?",
    authCtx.logoutUser
  );

  return (
    <>
      {showModal && modalBox}

      {isLoggedIn && (
        <ul className={classes["hamburger-menu"]}>
          <li>
            <NavLink
              to="/profile"
              onClick={props.showProfileHamburgerHandler}
              exact
              activeClassName={classes.active}
            >
              Profile
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/profile/my-planner"
              exact
              onClick={props.showProfileHamburgerHandler}
              activeClassName={classes.active}
            >
              My Planner
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/profile/my-tours"
              exact
              onClick={props.showProfileHamburgerHandler}
              activeClassName={classes.active}
            >
              My Tours
            </NavLink>
          </li>

          <li onClick={showModalHandler} className={classes["dropdown-item"]}>
            <button>Logout</button>
          </li>
        </ul>
      )}
    </>
  );
};

export default ProfileHamburgerMenu;
