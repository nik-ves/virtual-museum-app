import classes from "./ToursSearch.module.css";
import Container from "../UI/Container";
import { useContext } from "react";
import { ToursContext } from "../../context/tours-context";
import useInput from "../../hooks/use-input";
import { IoClose } from "react-icons/io5";

const ToursSearch = ({ showAllHandler, showFilterHandler }) => {
  const toursCtx = useContext(ToursContext);

  const {
    value: priceFrom,
    valueChangeHandler: priceFromHandler,
    resetValue: resetPriceFrom,
  } = useInput((value) => value.trim() <= 1);

  const {
    value: priceTo,
    valueChangeHandler: priceToHandler,
    resetValue: resetPriceTo,
  } = useInput((value) => value.trim() <= 1);

  const {
    value: maxLength,
    valueChangeHandler: maxLengthChangeHandler,
    resetValue: resetMaxLength,
  } = useInput((value) => value.trim() <= 1);

  const {
    value: status,
    valueChangeHandler: statusHandler,
    resetValue: resetStatus,
  } = useInput((value) => value.trim() <= 1);

  const resetValues = () => {
    resetPriceFrom();
    resetPriceTo();
    resetMaxLength();
    resetStatus();
  };

  const submitHandler = (event) => {
    event.preventDefault();

    toursCtx.filterTours(priceFrom, priceTo, maxLength, status);

    showAllHandler();
    resetValues();
  };

  return (
    <Container>
      <form onSubmit={submitHandler} className={classes["tour-search-form"]}>
        <div className={classes["form-header"]}>
          <h2>Search our tours</h2>
          <IoClose
            onClick={showFilterHandler}
            className={classes["form-close"]}
          />
        </div>
        <div className={classes["form-control"]}>
          <label htmlFor="priceFrom">Price From</label>
          <input
            type="number"
            id="priceFrom"
            value={priceFrom}
            onChange={priceFromHandler}
            required
          />

          <label>Price To</label>
          <input
            type="number"
            id="priceTo"
            value={priceTo}
            onChange={priceToHandler}
            required
          />
        </div>
        <div className={classes["form-control"]}>
          <label htmlFor="length">Max Length in Minutes</label>
          <input
            type="number"
            id="length"
            value={maxLength}
            onChange={maxLengthChangeHandler}
            required
          />

          <label htmlFor="status">Status</label>
          <select id="status" value={status} onChange={statusHandler} required>
            <option disabled hidden value=""></option>
            <option value="Ongoing">Ongoing</option>
            <option value="Canceled">Canceled</option>
            <option value="Finished">Finished</option>
          </select>
        </div>

        <div className={classes["form-actions"]}>
          <button className="btn-general" type="submit">
            Search
          </button>
        </div>
      </form>
    </Container>
  );
};

export default ToursSearch;
