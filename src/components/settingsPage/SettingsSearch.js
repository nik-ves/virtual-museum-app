import { SettingsContext } from "../../context/settings-context";
import { useContext, useState } from "react";
import useInput from "../../hooks/use-input";
import { IoClose } from "react-icons/io5";

import classes from "./SettingsSearch.module.css";

const SettingsSearch = (props) => {
  const settingsCtx = useContext(SettingsContext);
  const [showAdvancedMenu, setShowAdvancedMenu] = useState(false);

  const showAdvancedMenuHandler = () => {
    setShowAdvancedMenu(!showAdvancedMenu);
  };

  // setting type
  const {
    value: settingType,
    valueChangeHandler: settingTypeChangeHandler,
    resetValue: settingTypeResetValue,
  } = useInput((value) => value.trim());

  // exhibit type
  const {
    value: exhibitType,
    valueChangeHandler: exhibitTypeChangeHandler,
    resetValue: exhibitTypeResetValue,
  } = useInput((value) => value.trim());

  // number of exhibits
  const {
    value: exhibitNumber,
    valueChangeHandler: exhibitNumberChangeHandler,
    resetValue: exhibitNumberResetValue,
  } = useInput((value) => value.trim());

  // price from
  const {
    value: priceFrom,
    valueChangeHandler: priceFromChangeHandler,
    resetValue: priceFromResetValue,
  } = useInput((value) => value.trim());

  // price to
  const {
    value: priceTo,
    valueChangeHandler: priceToChangeHandler,
    resetValue: priceToResetValue,
  } = useInput((value) => value.trim());

  // average time
  const {
    value: averageTime,
    valueChangeHandler: averageTimeChangeHandler,
    resetValue: averageTimeResetValue,
  } = useInput((value) => value.trim());

  // grade
  const {
    value: grade,
    valueChangeHandler: gradeChangeHandler,
    resetValue: gradeResetValue,
  } = useInput((value) => value.trim());

  const resetFormValues = () => {
    exhibitTypeResetValue();
    settingTypeResetValue();
    exhibitNumberResetValue();
    priceFromResetValue();
    priceToResetValue();
    averageTimeResetValue();
    gradeResetValue();
  };

  const submitHandler = (event) => {
    event.preventDefault();

    props.setShowAll(false);

    settingsCtx.filterSettings(
      settingType,
      exhibitType,
      exhibitNumber,
      priceFrom,
      priceTo,
      averageTime,
      grade
    );

    resetFormValues();
  };

  return (
    <section className={classes["settings-search"]}>
      <form onSubmit={submitHandler} className={classes["form"]}>
        <div className={classes["form-header"]}>
          <h2>Search our settings</h2>
          <IoClose
            onClick={props.showFilterForm}
            className={classes["form-close"]}
          />
        </div>

        <div className={classes["form-control"]}>
          <label htmlFor="settingType">Type of setting</label>
          <select
            id="settingType"
            required
            value={settingType}
            onChange={settingTypeChangeHandler}
          >
            <option disabled hidden value=""></option>
            <option value="art">Art</option>
            <option value="history">History</option>
            <option value="war">War</option>
          </select>

          <label htmlFor="exhibitType">Type of exhibits</label>
          <select
            id="exhibitType"
            required
            value={exhibitType}
            onChange={exhibitTypeChangeHandler}
          >
            <option disabled hidden value=""></option>
            <option value="Masks">Masks</option>
            <option value="Vases">Vases</option>
            <option value="Statues">Statues</option>
            <option value="Pictures">Pictures</option>
          </select>

          <label htmlFor="exhibitNumber">Max number of exhibits</label>
          <input
            id="exhibitNumber"
            required
            type="text"
            value={exhibitNumber}
            onChange={exhibitNumberChangeHandler}
          />

          <p onClick={showAdvancedMenuHandler}>
            {showAdvancedMenu ? "Hide advanced search" : "Show advanced search"}
          </p>
        </div>

        {showAdvancedMenu && (
          <div className={classes["form-control"]}>
            <label htmlFor="priceFrom">Price from</label>
            <input
              id="priceFrom"
              required
              type="number"
              value={priceFrom}
              onChange={priceFromChangeHandler}
            />

            <label htmlFor="priceTo">Price to</label>
            <input
              id="priceTo"
              required
              type="number"
              value={priceTo}
              onChange={priceToChangeHandler}
            />
          </div>
        )}

        {showAdvancedMenu && (
          <div className={classes["form-control"]}>
            <label htmlFor="averageTime">Average time</label>
            <input
              id="averageTime"
              required
              type="number"
              value={averageTime}
              onChange={averageTimeChangeHandler}
            />

            <label htmlFor="grade">Max rating</label>
            <input
              id="grade"
              required
              type="number"
              value={grade}
              onChange={gradeChangeHandler}
            />
          </div>
        )}

        <div className={classes["form-actions"]}>
          <button className="btn-general" type="submit">
            Search
          </button>
        </div>
      </form>
    </section>
  );
};

export default SettingsSearch;
