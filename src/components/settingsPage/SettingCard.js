import { Link } from "react-router-dom";
import classes from "./SettingCard.module.css";

const SettingCard = (props) => {
  return (
    <Link to="/sign-in" className={classes.setting}>
      <div className={classes["setting-image"]}>
        <img src={props.image} alt="home-setting-card-background" />
      </div>

      <div className={classes["setting-text"]}>
        <h3>{props.type}</h3>
        <p>{props.description}</p>

        <div className={classes["setting-links"]}>
          <p>Length: 59 mins</p>

          <p>Exhibit number: 10</p>

          <Link className={classes["settings-link"]} to="/sign-up">
            Click to see more
          </Link>
        </div>
      </div>
    </Link>
  );
};

export default SettingCard;
