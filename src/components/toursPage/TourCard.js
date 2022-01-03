import { Link } from "react-router-dom";
import classes from "./TourCard.module.css";
import { AuthContext } from "../../context/auth-context";
import { ToursContext } from "../../context/tours-context";
import { useState, useContext } from "react";
import EditTour from "../profile/EditTour";

const TourCard = ({ tour, showEditHandler }) => {
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
            Delete tour
          </button>
        )}
        {validateUser && (
          <button onClick={showEditHandler.bind(this, tour)}>Edit tour</button>
        )}
      </div>
    </Link>
  );
};

export default TourCard;
