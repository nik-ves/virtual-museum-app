import { NavLink } from "react-router-dom";
import { useState, useContext } from "react";
import classes from "./MainNavigation.module.css";
import Container from "../UI/Container";
import { CgProfile } from "react-icons/cg";
import { GiHamburgerMenu } from "react-icons/gi";
import HamburgerMenu from "./HamburgerMenu";
import DesktopNavigation from "./DesktopNavigation";
import ProfileHamburgerMenu from "./ProfileHamburgerMenu";
import { AuthContext } from "../../context/auth-context";

const MainNavigation = () => {
  const [showHamburgerMenu, setShowHamburgerMenu] = useState(false);
  const [showProfileHamburger, setShowProfileHamburger] = useState(false);

  const { isLoggedIn } = useContext(AuthContext);

  const showHamburgerMenuHandler = () => {
    setShowHamburgerMenu(!showHamburgerMenu);
    setShowProfileHamburger(false);
  };

  const showProfileHamburgerHandler = () => {
    setShowProfileHamburger(!showProfileHamburger);
    setShowHamburgerMenu(false);
  };

  return (
    <header className={classes.header}>
      <Container>
        <div className={classes.content}>
          {showHamburgerMenu && (
            <HamburgerMenu
              showHamburgerMenuHandler={showHamburgerMenuHandler}
            />
          )}
          {showProfileHamburger && (
            <ProfileHamburgerMenu
              showProfileHamburgerHandler={showProfileHamburgerHandler}
            />
          )}

          {isLoggedIn && (
            <div className={classes["profile-btn-box"]}>
              <CgProfile
                onClick={showProfileHamburgerHandler}
                className={classes.icon}
                size={24}
              />
            </div>
          )}

          <div className={classes["logo-box"]}>
            <NavLink to="/">
              <h1>Virtual Museum</h1>
            </NavLink>
          </div>

          <div className={classes["hamburger-btn-box"]}>
            <GiHamburgerMenu
              onClick={showHamburgerMenuHandler}
              className={classes.icon}
              size={24}
            />
          </div>

          <DesktopNavigation />
        </div>
      </Container>
    </header>
  );
};

export default MainNavigation;
