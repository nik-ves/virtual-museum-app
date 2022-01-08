import { Link } from "react-router-dom";
import classes from "./TourCard.module.css";
import { AuthContext } from "../../context/auth-context";
import { ToursContext } from "../../context/tours-context";
import { useContext } from "react";

const TourCard = ({ tour, showEditHandler }) => {
  const { currentUser } = useContext(AuthContext);
  const { deleteTour } = useContext(ToursContext);

  const validateUser = currentUser.email === tour.maker;
  const validateTour = tour.status === "Finished";

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
    <section className={classes["toursTest"]}>
      <Link
        to={`/tours/${tour.name.split(" ").join("-").toLowerCase()}`}
        className={classes["tour-link"]}
      >
        <div className={classes["tour-content"]}>
          <div className={classes["tour-name"]}>
            <p>{tour.name}</p>
          </div>

          <div className={classes["tour-info"]}>
            <p>Price: {tourPrice} EUR</p>
            <p>Length: {tourTime} min</p>
            <p>Status: {tour.status}</p>
          </div>
        </div>
      </Link>

      {validateUser && (
        <div className={classes["tour-actions"]}>
          {!validateTour && (
            <button
              className="btn-general"
              onClick={showEditHandler.bind(this, tour)}
            >
              Edit Tour
            </button>
          )}
          <button
            className="btn-general"
            onClick={deleteTour.bind(this, tour.name)}
          >
            Delete Tour
          </button>
        </div>
      )}
    </section>
  );
};

export default TourCard;
