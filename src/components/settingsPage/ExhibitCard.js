import { Fragment } from "react";
import { Link } from "react-router-dom";
import classes from "./ExhibitCard.module.css";

const ExhibitCard = ({ link, exhibits, setting }) => {
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
            to={`/${link}/${setting.params}/${exhibit.name}`}
          >
            <div className={classes["exhibit-image-box"]}>
              <img
                src={exhibit.image}
                alt="exhibit-card"
                className={classes["exhibit-image"]}
              />
            </div>

            <div className={classes["exhibit-text-box"]}>
              <h3>{formatedName(exhibit.name)}</h3>
              {/* <h3>{averageGrade}</h3> */}
            </div>
          </Link>
        );
      })}
    </Fragment>
  );
};

export default ExhibitCard;
