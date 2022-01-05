import { useContext } from "react";
import { useParams } from "react-router-dom";
import Container from "../UI/Container";
import classes from "./ExhibitDetails.module.css";
import { ToursContext } from "../../context/tours-context";

const ExhibitDetails = () => {
  const toursCtx = useContext(ToursContext);

  const params = useParams();

  const formatedName = (name) => {
    return name
      .split("-")
      .map((word) => word[0].toUpperCase() + word.slice(1))
      .join(" ");
  };

  const tour = toursCtx.tours.find(
    (tour) => tour.name.split(" ").join("-").toLowerCase() === params.tourId
  );
  const exhibit = tour.selectedExhibits.find(
    (exhibit) => exhibit.name === params.exhibitId
  );

  return (
    <Container>
      <section className={classes["exhibit"]}>
        <div className={classes["exhibit-image-box"]}>
          <img src={exhibit.image} alt="exhibit" />
        </div>

        <div className={classes["exhibit-text-box"]}>
          <p>
            <span>Name</span>: {formatedName(exhibit.name)}
          </p>
          <p>
            <span>Description</span>: {exhibit.description}
          </p>
          <p>
            <span>Country of origin</span>: {exhibit.countryOfOrigin}
          </p>
          <p>
            <span>Price</span>: {exhibit.price} EUR
          </p>
          <p>
            <span>Time to see</span>: {exhibit.time} min
          </p>
        </div>
      </section>

      {/* <section className={classes["comments"]}>
        <CommentList comments={exhibit.comments} />
      </section> */}
    </Container>
  );
};

export default ExhibitDetails;
