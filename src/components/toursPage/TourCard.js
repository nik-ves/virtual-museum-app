import { Link } from "react-router-dom";
import classes from "./TourCard.module.css";
import { AuthContext } from "../../context/auth-context";
import { ToursContext } from "../../context/tours-context";
import { useContext, useState } from "react";
import Rating from "@material-ui/lab/Rating";

const TourCard = ({ tour, showEditHandler }) => {
  const { currentUser } = useContext(AuthContext);
  const { deleteTour } = useContext(ToursContext);

  const [ratingValue, setRatingValue] = useState(0);

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
            {/* <p>Description: {tour.description}</p> */}
            <p>Price: {tourPrice} EUR</p>
            <p>Length: {tourTime} min</p>
            <p>Status: {tour.status}</p>
            {/* <p>By: {tour.maker}</p> */}
          </div>
        </div>
      </Link>

      <div className={classes["tour-actions"]}>
        {validateUser && (
          <button
            className="btn-general"
            onClick={showEditHandler.bind(this, tour)}
          >
            Edit Tour
          </button>
        )}
        {validateUser && (
          <button
            className="btn-general"
            onClick={deleteTour.bind(this, tour.name)}
          >
            Delete Tour
          </button>
        )}
        {tour.status === "Finished" && (
          <Rating
            name="star-rating"
            precision={0.5}
            size="large"
            className={classes["rating-stars"]}
            value={ratingValue}
            onChange={(event, newValue) => {
              setRatingValue(newValue);
            }}
          />
        )}
      </div>
    </section>
  );
};

export default TourCard;
