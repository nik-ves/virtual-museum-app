import { Link } from "react-router-dom";
import classes from "./HomeSettingCard.module.css";

const Setting = (props) => {
  return (
    <Link
      to="/sign-in"
      className={classes.setting}
      // style={{
      //   backgroundImage: `url("${props.image}")`,
      // }}
    >
      <img
        className={classes["setting-image"]}
        src={props.image}
        alt="home-setting-card-background"
      />
      <div className={classes["setting-text"]}>
        <h2>{props.type}</h2>
        <p>{props.description}</p>
        <Link className={classes["settings-link"]} to="/sign-up">
          Click to see more
        </Link>
      </div>
    </Link>
  );
};

export default Setting;
