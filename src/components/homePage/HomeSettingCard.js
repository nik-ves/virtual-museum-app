import { Link } from "react-router-dom";
import classes from "./HomeSettingCard.module.css";

const Setting = (props) => {
  const formatedName = (name) => {
    return name
      .split("-")
      .map((word) => word[0].toUpperCase() + word.slice(1))
      .join(" ");
  };

  return (
    <Link to={`/settings/${props.type}`} className={classes.setting}>
      <img
        className={classes["setting-image"]}
        src={props.image}
        alt="home-setting-card-background"
      />
      <div className={classes["setting-text"]}>
        <h2>{props.name}</h2>
        <p>{props.shortDescription}</p>
        <p className={classes["settings-link"]} to="/sign-up">
          Click to see more
        </p>
      </div>
    </Link>
  );
};

export default Setting;
