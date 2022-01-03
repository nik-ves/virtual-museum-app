import { useParams } from "react-router";
import { useContext } from "react";
import { ToursContext } from "../../context/tours-context";
import Container from "../UI/Container";

const TourDetails = () => {
  const toursCtx = useContext(ToursContext);
  const params = useParams();
  console.log(params);

  const tour = toursCtx.tours.find(
    (tour) => tour.name.split(" ").join("-").toLowerCase() === params.tourId
  );
  console.log(tour);

  return (
    <Container>
      <h1>{tour.name}</h1>
    </Container>
  );
};

export default TourDetails;
