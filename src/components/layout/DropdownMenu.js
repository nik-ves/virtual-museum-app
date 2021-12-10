import { NavLink } from "react-router-dom";
import { AuthContext } from "../../context/auth-context";
import { useContext } from "react";

import classes from "./DropdownMenu.module.css";

const DropdownMenu = (props) => {
  const authCtx = useContext(AuthContext);

  return (
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
          to="/"
          exact
          activeClassName={classes.active}
          onClick={props.isOpen}
        >
          My Planner
        </NavLink>
      </li>

      <li onClick={props.isOpen} className={classes["dropdown-item"]}>
        <button onClick={authCtx.logoutUser}>Logout</button>
      </li>
    </ul>
  );
};

export default DropdownMenu;
