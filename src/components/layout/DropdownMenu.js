import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/auth-context";
import classes from "./DropdownMenu.module.css";
import useModal from "../../hooks/use-modal";

const DropdownMenu = (props) => {
  const authCtx = useContext(AuthContext);

  const { showModal, showModalHandler, modalBox } = useModal(
    "Are you sure you want to log out?",
    authCtx.logoutUser
  );

  return (
    <>
      {showModal && modalBox}

      <nav className={classes["dropdown-nav"]}>
        <ul className={classes.dropdown}>
          <li className={classes["dropdown-item"]}>
            <NavLink
              to="/profile"
              exact
              activeClassName={classes.active}
              onClick={props.isOpen}
            >
              Profile
            </NavLink>
          </li>

          <li className={classes["dropdown-item"]}>
            <NavLink
              to="/profile/my-planner"
              exact
              activeClassName={classes.active}
              onClick={props.isOpen}
            >
              My Planner
            </NavLink>
          </li>

          <li className={classes["dropdown-item"]}>
            <NavLink
              to="/profile/my-tours"
              exact
              activeClassName={classes.active}
              onClick={props.isOpen}
            >
              My Tours
            </NavLink>
          </li>

          <li onClick={showModalHandler} className={classes["dropdown-item"]}>
            <button>Logout</button>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default DropdownMenu;
