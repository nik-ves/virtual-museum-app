import Container from "../UI/Container";
import { ToursContext } from "../../context/tours-context";
import { useContext, useState } from "react";
import classes from "./ToursList.module.css";
import TourCard from "./TourCard";
import EditTour from "../profile/EditTour";

const ToursList = () => {
  const [showEdit, setShowEdit] = useState(false);
  const [currentTour, setCurrentTour] = useState(null);

  const showEditHandler = (tour) => {
    setShowEdit(!showEdit);
    setCurrentTour(tour);
  };

  const tourCtx = useContext(ToursContext);
  return (
    <Container>
      {!showEdit && (
        <div className={classes["tours"]}>
          {tourCtx.tours.map((tour) => {
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
