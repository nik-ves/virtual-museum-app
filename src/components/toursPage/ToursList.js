import Container from "../UI/Container";
import { ToursContext } from "../../context/tours-context";
import { useContext } from "react";
import classes from "./ToursList.module.css";
import TourCard from "./TourCard";

const ToursList = () => {
  const tourCtx = useContext(ToursContext);
  return (
    <Container>
      <div className={classes["tours"]}>
        {tourCtx.tours.map((tour) => {
          return <TourCard key={tour.id} tour={tour} />;
        })}
      </div>
    </Container>
  );
};

export default ToursList;
