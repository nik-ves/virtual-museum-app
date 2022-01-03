import { useParams } from "react-router";
import { useContext } from "react";
import { ToursContext } from "../../context/tours-context";
import Container from "../UI/Container";
import ExhibitCard from "./ExhibitCard";
import classes from "./TourDetails.module.css";

const TourDetails = () => {
  const toursCtx = useContext(ToursContext);
  const params = useParams();

  const tour = toursCtx.tours.find(
    (tour) => tour.name.split(" ").join("-").toLowerCase() === params.tourId
  );

  return (
    <Container>
      <h1>{tour.name}</h1>

      <div className={classes["exhibit-box"]}>
        <h2>Selected exhibits for this setting</h2>

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
