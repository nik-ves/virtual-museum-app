import { Link } from "react-router-dom";
import classes from "./TourCard.module.css";
import { AuthContext } from "../../context/auth-context";
import { ToursContext } from "../../context/tours-context";
import { useContext } from "react";

const TourCard = ({ tour }) => {
  const { currentUser } = useContext(AuthContext);
  const { deleteTour } = useContext(ToursContext);

  const validateUser = currentUser.email === tour.maker;

  const tourPrice = tour.selectedExhibits
    .map((exhibit) => {
      return exhibit.price;
    })
    .reduce((prev, cur) => {
      return prev + cur;
    });

  const tourTime = tour.selectedExhibits
    .map((exhibit) => {
      return exhibit.time;
    })
    .reduce((prev, cur) => {
      return prev + cur;
    });

  return (
    <Link to="/tours" className={classes["tour-link"]}>
      <div className={classes["tour-content"]}>
        <div className={classes["test"]}>
          <p>{tour.name}</p>
        </div>
        <div className={classes["test2"]}>
          <p>Description: {tour.description}</p>
          <p>Length: {tourPrice} min</p>
          {/* <p>Price: {tourTime} $</p> */}
          <p>Status: {tour.status}</p>
          <p>By: {tour.maker}</p>
        </div>
        {validateUser && (
          <button onClick={deleteTour.bind(this, tour.name)}>
            Delete your tour
          </button>
        )}
      </div>
    </Link>
  );
};

export default TourCard;
