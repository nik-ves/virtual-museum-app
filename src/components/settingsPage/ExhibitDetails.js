import { useParams } from "react-router-dom";
import { SettingsContext } from "../../context/settings-context";
import { useContext } from "react";
import Container from "../UI/Container";
import CommentList from "./CommentList";
import useRating from "../../hooks/use-rating";

import classes from "./ExhibitDetails.module.css";

const ExhibitDetails = () => {
  const settingCtx = useContext(SettingsContext);
  const settingsList = settingCtx.settingsList;

  const params = useParams();
  const setting = settingsList.find(
    (setting) => setting.params === params.settingId
  );
  const exhibit = setting.exhibits.find(
    (exhibit) => exhibit.name === params.exhibitId
  );

  const formatedName = (name) => {
    return name
      .split("-")
      .map((word) => word[0].toUpperCase() + word.slice(1))
      .join(" ");
  };

  const { rating } = useRating(exhibit.comments);

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
          <p>
            <span>Grade</span>: {rating.toFixed(1)} / 5
          </p>
        </div>
      </section>

      <section className={classes["comments"]}>
        <CommentList comments={exhibit.comments} />
      </section>
    </Container>
  );
};

export default ExhibitDetails;
