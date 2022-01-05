import classes from "./ProfileTours.module.css";
import Container from "../UI/Container";
import TourCard from "../toursPage/TourCard";
import { useState, useContext } from "react";
import { ToursContext } from "../../context/tours-context";
import { AuthContext } from "../../context/auth-context";
import EditTour from "./EditTour";

const ProfileTours = () => {
  const [showEdit, setShowEdit] = useState(false);
  const [currentTour, setCurrentTour] = useState(null);

  const { currentUser } = useContext(AuthContext);
  const toursCtx = useContext(ToursContext);

  const showEditHandler = (tour) => {
    setShowEdit(!showEdit);
    setCurrentTour(tour);
  };

  return (
    <Container>
      {!showEdit && (
        <div className={classes["tours"]}>
          {toursCtx.tours
            .filter((tour) => {
              return currentUser.email === tour.maker;
            })
            .map((tour) => {
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

export default ProfileTours;
