import { useState, useContext } from "react";
import { ToursContext } from "../../context/tours-context";
import { AuthContext } from "../../context/auth-context";
import classes from "./TourForm.module.css";
import ExhibitCard from "./ExhibitCard";

const TourForm = ({ allExhibits }) => {
  const [inputValue, setInputValue] = useState("");

  const toursCtx = useContext(ToursContext);
  const { currentUser } = useContext(AuthContext);

  const inputChangeHandler = (event) => {
    setInputValue(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    toursCtx.makeTour(inputValue, currentUser.email);
  };

  return (
    <form onSubmit={submitHandler} className={classes["tour-form"]}>
      <h1>Tour Maker</h1>

      <p className={classes["tour-form-info"]}>
        Select exhibits to include in your personal tour. Mix histories by your
        choice. You can visit all available user made tours here or visit
        premade museum settings here.
      </p>

      <h2>Select exhibits for your tour</h2>
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

      <div className={classes["form-control"]}>
        <label htmlFor="name">Name Your Tour</label>
        <input
          id="name"
          type="text"
          onChange={inputChangeHandler}
          value={inputValue}
        />
      </div>

      <div className={classes["form-actions"]}>
        <button type="submit">Make a tour</button>
      </div>
    </form>
  );
};

export default TourForm;
