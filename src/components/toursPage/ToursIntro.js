import classes from "./ToursIntro.module.css";
import Container from "../UI/Container";
import { Link } from "react-router-dom";

const ToursIntro = ({ showFilter, showFilterHandler }) => {
  return (
    <Container>
      <section className={classes["tour-section-intro"]}>
        <h1>Tours</h1>

        <p>
          Tours are user made settings. Each setting includes selected exhibits
          for said setting. You can combine any available museum exhibits into
          your own tour, mix histories and places.
        </p>

        <p>
          To make your own tour, visit your profile or click{" "}
          <Link to="/profile/my-planner">here</Link>.
        </p>

        {!showFilter && (
          <p>
            If you're looking for something specific, click{" "}
            <Link to="/tours" onClick={showFilterHandler}>
              here
            </Link>{" "}
            for filter form.
          </p>
        )}
      </section>
    </Container>
  );
};

export default ToursIntro;
