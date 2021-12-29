import { useState, useContext } from "react";
import { ToursContext } from "../../context/tours-context";
import { AuthContext } from "../../context/auth-context";
import classes from "./TourForm.module.css";
import ExhibitCard from "./ExhibitCard";

const TourForm = ({ allExhibits }) => {
  const [inputValue, setInputValue] = useState("");
  const [showExhibits, setShowExhibits] = useState(false);

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
    <>
      <form onSubmit={submitHandler} className={classes["tour-form"]}>
        <div className={classes["form-control"]}>
          <label htmlFor="name">Name of your tour</label>
          <input
            id="name"
            type="text"
            onChange={inputChangeHandler}
            value={inputValue}
          />
        </div>

        <h3>Select exhibits to include in your tour:</h3>
        <p
          onClick={() => {
            setShowExhibits(!showExhibits);
          }}
        >
          {showExhibits ? "Hide Exhibits" : "Show Exhibits"}
        </p>
        <div className={classes["form-cards"]}>
          {showExhibits &&
            allExhibits
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

        <h3>Your selected exhibits:</h3>
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
        </div>
        {console.log(toursCtx.selectedExhibits)}

        <div className={classes["form-actions"]}>
          <button type="submit">Make a tour</button>
        </div>
      </form>
    </>
  );
};

export default TourForm;
