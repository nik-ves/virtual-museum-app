import Container from "../UI/Container";
import { ToursContext } from "../../context/tours-context";
import { useContext, useState } from "react";
import classes from "./ToursList.module.css";
import TourCard from "./TourCard";
import EditTour from "../profile/EditTour";
import { Link } from "react-router-dom";

const ToursList = ({ showAll, showAllHandler }) => {
  const toursCtx = useContext(ToursContext);

  // edit states
  const [showEdit, setShowEdit] = useState(false);
  const [currentTour, setCurrentTour] = useState(null);

  const showEditHandler = (tour) => {
    setShowEdit(!showEdit);
    setCurrentTour(tour);
  };

  return (
    <Container>
      {!showAll && (
        <div className={classes["tours-list-cards"]}>
          <div className={classes["tour-error"]}>
            <p>
              {toursCtx.filteredTours.length === 0
                ? "No tours found."
                : `${toursCtx.filteredTours.length} tours found.`}
            </p>

            <p>
              Click{" "}
              <Link onClick={showAllHandler} to="/tours">
                here
              </Link>{" "}
              to show all of our tours.
            </p>
          </div>

          {!showAll &&
            !showEdit &&
            toursCtx.filteredTours.map((tour) => (
              <TourCard
                key={tour.id}
                tour={tour}
                showEditHandler={showEditHandler}
              />
            ))}
        </div>
      )}

      {!showEdit && showAll && (
        <div className={classes["tours"]}>
          {toursCtx.tours.map((tour) => {
            return (
              <TourCard
                key={tour.id}
                tour={tour}
                showEditHandler={showEditHandler}
              />
            );
          })}
        </div>
      )}
      {showEdit && (
        <EditTour currentTour={currentTour} showEditHandler={showEditHandler} />
      )}
    </Container>
  );
};

export default ToursList;
