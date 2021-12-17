import { Link } from "react-router-dom";
import classes from "./SettingCard.module.css";

const SettingCard = (props) => {
  const settingPrice = props.setting.exhibits
    .map((exhibit) => {
      return exhibit.price;
    })
    .reduce((prev, cur) => {
      return prev + cur;
    });

  let average = [];

  const settingTime = props.setting.exhibits
    .map((exhibit) => {
      return exhibit.time;
    })
    .reduce((prev, cur) => {
      return prev + cur;
    });

  props.setting.exhibits.forEach((exhibit) => {
    let test =
      exhibit.grade.reduce((prev, cur) => {
        return prev + cur;
      }) / exhibit.grade.length;

    average.push(test);
  });

  const averageGradeOfSetting =
    average.reduce((prev, cur) => {
      return prev + cur;
    }) / average.length;

  return (
    <Link to={`/settings/${props.setting.params}`} className={classes.setting}>
      <img
        className={classes["setting-image"]}
        src={props.setting.image}
        alt="home-setting-card-background"
      />
      <div className={classes["setting-text"]}>
        <h2>{props.setting.name}</h2>

        <div className={classes["setting-info"]}>
          <p>Exhibits: {props.setting.exhibits.length}</p>
          <p>Type: {props.setting.type}</p>
          <p>Price: {settingPrice} EUR</p>
          <p>Length: {settingTime} min</p>
          <p>Average Grade: {averageGradeOfSetting} / 5</p>
        </div>
      </div>
    </Link>
  );
};

export default SettingCard;
