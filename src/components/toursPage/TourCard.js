import { Link } from "react-router-dom";
import classes from "./TourCard.module.css";

const TourCard = ({ tour }) => {
  return (
    <Link to="/" className={classes["tour-link"]}>
      <div className={classes["tour-text"]}>
        <p>{tour.name}</p>
        <p>By: {tour.maker}</p>
      </div>
    </Link>
  );
};

export default TourCard;
