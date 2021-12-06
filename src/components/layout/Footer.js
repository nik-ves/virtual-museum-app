import Container from "../UI/Container";

import {
  FiMapPin,
  FiPhone,
  FiMail,
  FiFacebook,
  FiInstagram,
  FiTwitter,
} from "react-icons/fi";

import classes from "./Footer.module.css";
import { Fragment } from "react";

const Footer = () => {
  return (
    <Fragment>
      <div className={classes["footer-main"]}>
        <Container>
          <footer className={classes["footer-content"]}>
            <div className={classes["footer-text-box"]}>
              <div className={classes["footer-heading"]}>
                <h2>Working Hours</h2>
              </div>

              <ul className={classes["footer-list"]}>
                <li className={classes["footer-list-day"]}>
                  <span className={classes["contact-day"]}>
                    Monday - Firday:
                  </span>{" "}
                  <span className={classes["contact-time"]}>10:00 - 18:00</span>
                </li>
                <li className={classes["footer-list-day"]}>
                  <span className={classes["contact-day"]}>Saturday:</span>{" "}
                  <span className={classes["contact-time"]}>12:00 - 18:00</span>
                </li>
                <li className={classes["footer-list-day"]}>
                  <span className={classes["contact-day"]}>Sunday:</span>{" "}
                  <span className={classes["contact-time"]}>Closed!</span>
                </li>
              </ul>
            </div>

            <div className={classes["footer-text-box"]}>
              <div className={classes["footer-heading"]}>
                <h2>Information</h2>
              </div>

              <ul className={classes["footer-list"]}>
                <li className={classes["footer-list-item"]}>
                  <FiMapPin className={classes["footer-icon"]} />
                  <p>- Vuka Karadžića 18, Beograd</p>
                </li>
                <li className={classes["footer-list-item"]}>
                  <FiPhone className={classes["footer-icon"]} />{" "}
                  <p>- 011 2626841</p>
                </li>
                <li className={classes["footer-list-item"]}>
                  <FiMail className={classes["footer-icon"]} />{" "}
                  <p>- virtualmuseum@museum.com</p>
                </li>
              </ul>
            </div>

            <div className={classes["footer-text-box"]}>
              <div className={classes["footer-heading"]}>
                <h2>Social Network</h2>
              </div>

              <ul className={classes[("footer-list", "footer-list-last")]}>
                <li>
                  <a href="https://www.facebook.com/">
                    <FiFacebook className={classes["footer-social"]} />
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/">
                    <FiInstagram className={classes["footer-social"]} />
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/">
                    <FiTwitter className={classes["footer-social"]} />
                  </a>
                </li>
              </ul>
            </div>
          </footer>
        </Container>

        <section className={classes["footer-copyright-text"]}>
          <p>&copy; 2021 Made by nik-ves.</p>
        </section>
      </div>
    </Fragment>
  );
};

export default Footer;
