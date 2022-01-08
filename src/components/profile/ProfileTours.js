import classes from "./ProfileTours.module.css";
import Container from "../UI/Container";
import TourCard from "../toursPage/TourCard";
import { useState, useContext } from "react";
import { ToursContext } from "../../context/tours-context";
import { AuthContext } from "../../context/auth-context";
import EditTour from "./EditTour";
import { Link } from "react-router-dom";

const ProfileTours = () => {
  const [showEdit, setShowEdit] = useState(false);
  const [currentTour, setCurrentTour] = useState(null);

  const { currentUser } = useContext(AuthContext);
  const toursCtx = useContext(ToursContext);

  const showEditHandler = (tour) => {
    setShowEdit(!showEdit);
    setCurrentTour(tour);
  };

  const hasTours =
    toursCtx.tours.filter((tour) => {
      return currentUser.email === tour.maker;
    }).length > 0;

  return (
    <Container>
      {!showEdit && hasTours && (
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
      {!hasTours && (
        <div className={classes["tours-info"]}>
          <p>
            No tours found. Make one <Link to="/profile/my-planner">here</Link>!
          </p>
        </div>
      )}
    </Container>
  );
};

export default ProfileTours;
