import { useContext, useState } from "react";
import { SettingsContext } from "../../context/settings-context";
import classes from "./EditTour.module.css";
import ExhibitCard from "./ExhibitCard";
import useEdit from "../../hooks/use-edit";
import useModal from "../../hooks/use-modal";
const _ = require("lodash");

const EditTour = ({ currentTour, showEditHandler }) => {
  const { value: nameValue, valueChangeHandler: nameValueChangeHandler } =
    useEdit(currentTour.name);
  const {
    value: descriptionValue,
    valueChangeHandler: descriptionValueChangeHandler,
  } = useEdit(currentTour.description);
  const [infoMessage, setInfoMessage] = useState(null);

  const settingsCtx = useContext(SettingsContext);

  const { showModal, showModalHandler, modalBox } = useModal(
    "Are you sure you want to exit? Changes will not be saved!",
    showEditHandler
  );

  const sum = [];
  settingsCtx.settingsList.forEach((setting) => {
    sum.push(setting.exhibits);
  });
  const allExhibits = sum.flat();

  const [selectedExhibits, setSelectedExhibits] = useState(
    currentTour.selectedExhibits
  );

  const addExhibit = (exhibit) => {
    setSelectedExhibits((prevState) => {
      return [...prevState, exhibit];
    });
  };

  const removeExhibit = (clickedExhibit) => {
    setSelectedExhibits(
      selectedExhibits.filter((exhibit) => {
        return exhibit.name !== clickedExhibit.name;
      })
    );
  };

  const submitHandler = (event) => {
    event.preventDefault();

    currentTour.name = nameValue;
    currentTour.description = descriptionValue;
    currentTour.selectedExhibits = selectedExhibits;

    setInfoMessage("Changes Saved!");
  };

  setTimeout(() => {
    if (infoMessage) {
      setInfoMessage(null);
    }
  }, 5000);

  const filteredArray = _.differenceBy(allExhibits, selectedExhibits, "name");

  return (
    <form onSubmit={submitHandler} className={classes["tour-form"]}>
      {showModal && modalBox}
      <h1>Edit Your Tour</h1>

      <h2>Select new exhibits</h2>
      <div className={classes["form-cards"]}>
        {filteredArray.map((exhibit) => {
          return (
            <ExhibitCard
              key={Math.random()}
              exhibit={exhibit}
              onExhibit={addExhibit}
            />
          );
        })}
      </div>

      <h2>Your selected exhibits:</h2>
      <div className={classes["form-cards"]}>
        {selectedExhibits.map((exhibit) => {
          return (
            <ExhibitCard
              key={Math.random()}
              exhibit={exhibit}
              onExhibit={removeExhibit}
            />
          );
        })}
        {selectedExhibits.length === 0 && (
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
        <button className="btn-save" type="submit">
          Save Changes
        </button>

        <button type="button" className="btn-cancel" onClick={showModalHandler}>
          Cancel
        </button>
      </div>
      {<p className="info-message">{infoMessage}</p>}
    </form>
  );
};

export default EditTour;
