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
      <img
        className={classes["setting-image"]}
        src={props.image}
        alt="home-setting-card-background"
      />
      <div className={classes["setting-text"]}>
        <h2>{formatedName(props.type)}</h2>

        <div className={classes["setting-info"]}>
          <p>Exhibits: {props.exhibits.length}</p>
          <p>Price: {settingPrice} EUR</p>
          <p>Length: {settingTime} min</p>
        </div>
      </div>
    </Link>
  );
};

export default SettingCard;
