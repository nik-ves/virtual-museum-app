import { Link } from "react-router-dom";
import classes from "./TourCard.module.css";
import { AuthContext } from "../../context/auth-context";
import { ToursContext } from "../../context/tours-context";
import { useContext } from "react";

import useModal from "../../hooks/use-modal";

const TourCard = ({ tour, showEditHandler }) => {
  const { currentUser } = useContext(AuthContext);
  const { deleteTour } = useContext(ToursContext);

  const { showModal, showModalHandler, modalBox } = useModal(
    "Are you sure you want to delete this tour?",
    deleteTour.bind(this, tour.name)
  );

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
    <>
      {showModal && modalBox}

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
            <button className="btn-general" onClick={showModalHandler}>
              Delete Tour
            </button>
          </div>
        )}
      </section>
    </>
  );
};

export default TourCard;
