import { Link } from "react-router-dom";
import classes from "./SettingCard.module.css";

const SettingCard = (props) => {
  const formatedName = (name) => {
    return name
      .split("-")
      .map((word) => word[0].toUpperCase() + word.slice(1))
      .join(" ");
  };

  const settingPrice = props.exhibits
    .map((exhibit) => {
      return exhibit.price;
    })
    .reduce((prev, cur) => {
      return prev + cur;
    });

  const settingTime = props.exhibits
    .map((exhibit) => {
      return exhibit.time;
    })
    .reduce((prev, cur) => {
      return prev + cur;
    });

  return (
    <Link to={`/settings/${props.type}`} className={classes.setting}>
      <div className={classes["setting-image"]}>
        <img src={props.image} alt="home-setting-card-background" />
      </div>

      <div className={classes["setting-text"]}>
        <h3>{formatedName(props.type)}</h3>
        <p>{props.shortDescription}</p>

        <div className={classes["setting-links"]}>
          <p>Exhibits: {props.exhibits.length}</p>
          <p>Price: {settingPrice} EUR</p>
          <p>Time: {settingTime} min</p>
        </div>
      </div>
    </Link>
  );
};

export default SettingCard;
