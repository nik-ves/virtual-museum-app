import { Link } from "react-router-dom";
import classes from "./SettingCard.module.css";

const SettingCard = (props) => {
  const formatedName = (name) => {
    return name
      .split("-")
      .map((word) => word[0].toUpperCase() + word.slice(1))
      .join(" ");
  };

  return (
    <Link to={`/settings/${props.type}`} className={classes.setting}>
      <div className={classes["setting-image"]}>
        <img src={props.image} alt="home-setting-card-background" />
      </div>

      <div className={classes["setting-text"]}>
        <h3>{formatedName(props.type)}</h3>
        <p>{props.shortDescription}</p>

        <div className={classes["setting-links"]}>
          <p>Length: 59 mins</p>

          <p>Exhibit number: 10</p>
        </div>
      </div>
    </Link>
  );
};

export default SettingCard;
