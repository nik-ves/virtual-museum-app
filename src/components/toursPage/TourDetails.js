import { useParams } from "react-router";
import { useContext, useState } from "react";
import { ToursContext } from "../../context/tours-context";
import Container from "../UI/Container";
import ExhibitCard from "./ExhibitCard";
import classes from "./TourDetails.module.css";
import Rating from "@material-ui/lab/Rating";

const TourDetails = () => {
  const [ratingValue, setRatingValue] = useState(0);
  const toursCtx = useContext(ToursContext);
  const params = useParams();

  const tour = toursCtx.tours.find(
    (tour) => tour.name.split(" ").join("-").toLowerCase() === params.tourId
  );

  const canRate = tour.status === "Finished";

  return (
    <Container>
      <div className={classes["exhibit-box"]}>
        <div className={classes["exhibit-heading"]}>
          <h2>{tour.name}</h2>
          <p>By: {tour.maker}</p>
        </div>

        {canRate && (
          <div className={classes["exhibit-rating"]}>
            <p>This tour is finished. Rate it: </p>
            <Rating
              name="simple-controlled"
              value={ratingValue}
              size="large"
              precision={0.5}
              onChange={(event, newValue) => {
                setRatingValue(newValue);
              }}
            />
          </div>
        )}

        <div className={classes["exhibit-link"]}>
          <ExhibitCard
            exhibits={tour.selectedExhibits}
            params={params.tourId}
          />
        </div>
      </div>
    </Container>
  );
};

export default TourDetails;
