import { Fragment } from "react";
import { Link } from "react-router-dom";
import classes from "./ExhibitCard.module.css";

const ExhibitCard = ({ exhibits, setting }) => {
  const formatedName = (name) => {
    return name
      .split("-")
      .map((word) => word[0].toUpperCase() + word.slice(1))
      .join(" ");
  };

  return (
    <Fragment>
      {exhibits.map((exhibit) => {
        return (
          <Link
            key={exhibit.id}
            to={`/settings/${setting.type}/${exhibit.name}`}
          >
            <div className={classes["exhibit-image-box"]}>
              <img src={exhibit.image} alt="exhibit-card" />
            </div>

            <div className={classes["exhibit-text-box"]}>
              <h3>{formatedName(exhibit.name)}</h3>
            </div>
          </Link>
        );
      })}
    </Fragment>
  );
};

export default ExhibitCard;
