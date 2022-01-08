import classes from "./ErrorPage.module.css";
import { BiError } from "react-icons/bi";

const ErrorPage = () => {
  return (
    <section className={classes["error-page"]}>
      <BiError className={classes["error-sign"]} />

      <div className={classes["error-text"]}>
        <p>Page not found! Check your link!</p>
      </div>
    </section>
  );
};

export default ErrorPage;
