import { NavLink } from "react-router-dom";
import { useContext, useState } from "react";
import classes from "./MainNavigation.module.css";
import Container from "../UI/Container";
import { AuthContext } from "../../context/auth-context";
import DropdownMenu from "./DropdownMenu";
import { CgProfile } from "react-icons/cg";

const MainNavigation = () => {
  const authCtx = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);
  const isLoggedIn = authCtx.isLoggedIn;

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
                <NavLink
                  to="/auth/sign-in"
                  activeClassName={classes.active}
                  exact
                >
                  Account
                </NavLink>
              </li>
            )}
            {isLoggedIn && (
              <li className={classes["profile-item"]}>
                {/* <button
                  className="btn-dropdown"
                  href="#"
                  onClick={isOpenHandler}
                >
                  Drop
                </button> */}
                <CgProfile onClick={isOpenHandler} className="btn-profile" />

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
