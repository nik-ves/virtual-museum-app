import { NavLink } from "react-router-dom";
import { useContext, useState } from "react";

import classes from "./MainNavigation.module.css";
import Container from "../UI/Container";
import { AuthContext } from "../../context/auth-context";
import DropdownMenu from "./DropdownMenu";

const MainNavigation = () => {
  const authCtx = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);

  const isOpenHandler = () => {
    setIsOpen(!isOpen);
  };

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
              <NavLink
                to="/"
                onClick={() => setIsOpen(false)}
                exact
                activeClassName={classes.active}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/settings"
                onClick={() => setIsOpen(false)}
                activeClassName={classes.active}
              >
                Our Settings
              </NavLink>
            </li>
            {!authCtx.isLoggedIn && (
              <li>
                <NavLink to="/sign-in" activeClassName={classes.active}>
                  Account
                </NavLink>
              </li>
            )}
            {authCtx.isLoggedIn && (
              <li>
                <button
                  className="btn-dropdown"
                  href="#"
                  onClick={isOpenHandler}
                >
                  Drop
                </button>

                {isOpen && <DropdownMenu isOpen={isOpenHandler} />}
              </li>
            )}
          </ul>
        </div>
      </Container>
    </header>
  );
};

export default MainNavigation;
