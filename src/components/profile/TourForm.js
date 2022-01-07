import { useState, useContext } from "react";
import { ToursContext } from "../../context/tours-context";
import { AuthContext } from "../../context/auth-context";
import classes from "./TourForm.module.css";
import ExhibitCard from "./ExhibitCard";

const TourForm = ({ allExhibits }) => {
  const [nameValue, setNameValue] = useState("");
  const [descriptionValue, setDescriptionValue] = useState("");

  const toursCtx = useContext(ToursContext);
  const { currentUser } = useContext(AuthContext);

  const nameValueChangeHandler = (event) => {
    setNameValue(event.target.value);
  };

  const descriptionValueChangeHandler = (event) => {
    setDescriptionValue(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    toursCtx.makeTour(nameValue, descriptionValue, currentUser.email);
  };

  return (
    <form onSubmit={submitHandler} className={classes["tour-form"]}>
      <h1>My Planner</h1>

      <p className={classes["tour-form-info"]}>
        Select exhibits to include in your personal tour. Mix histories by your
        choice. You can visit all available user made tours here or visit
        premade museum settings here.
      </p>

      <h2>Select exhibits</h2>
      <div className={classes["form-cards"]}>
        {allExhibits
          .filter((item) => !toursCtx.selectedExhibits.includes(item))
          .map((exhibit) => {
            return (
              <ExhibitCard
                key={Math.random()}
                exhibit={exhibit}
                onExhibit={toursCtx.addExhibit}
              />
            );
          })}
      </div>

      <h2>Your selected exhibits:</h2>
      <div className={classes["form-cards"]}>
        {toursCtx.selectedExhibits.map((exhibit) => {
          return (
            <ExhibitCard
              key={Math.random()}
              exhibit={exhibit}
              onExhibit={toursCtx.removeExhibit}
            />
          );
        })}
        {toursCtx.selectedExhibits.length === 0 && (
          <p>You have no selected exhibits yet!</p>
        )}
      </div>

      <div className={classes["form-inputs"]}>
        <div className={classes["form-control"]}>
          <label htmlFor="name">Tour Name</label>
          <input
            id="name"
            type="text"
            onChange={nameValueChangeHandler}
            value={nameValue}
          />
        </div>

        <div className={classes["form-control"]}>
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            type="text"
            onChange={descriptionValueChangeHandler}
            value={descriptionValue}
          />
        </div>
      </div>

      <div className={classes["form-actions"]}>
        <button className="btn-general" type="submit">
          Make a Tour
        </button>
      </div>
    </form>
  );
};

export default TourForm;
