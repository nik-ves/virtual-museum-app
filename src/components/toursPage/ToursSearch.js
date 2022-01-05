import classes from "./ToursSearch.module.css";
import Container from "../UI/Container";
import { useState, useContext } from "react";
import { ToursContext } from "../../context/tours-context";

const ToursSearch = () => {
  const [priceFrom, setPriceFrom] = useState("");
  const [priceTo, setPriceTo] = useState("");
  const [lengthInMin, setLengthInMin] = useState("");
  const [status, setStatus] = useState("");

  const toursCtx = useContext(ToursContext);

  const priceFromHandler = (event) => {
    setPriceFrom(event.target.value);
  };

  const priceToHandler = (event) => {
    setPriceTo(event.target.value);
  };

  const lengthHandler = (event) => {
    setLengthInMin(event.target.value);
  };

  const statusHandler = (event) => {
    setStatus(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    // console.log(priceFrom, priceTo, lengthInMin, status);
    toursCtx.filterTours(priceFrom, priceTo, lengthInMin, status);
  };

  console.log(toursCtx.filteredTours);

  return (
    <Container>
      <form onSubmit={submitHandler}>
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

        <label>Length in Minutes</label>
        <input
          type="number"
          id="length"
          value={lengthInMin}
          onChange={lengthHandler}
          required
        />

        <label htmlFor="exhibitType">Status</label>
        <select id="status" value={status} onChange={statusHandler} required>
          <option disabled hidden value=""></option>
          <option value="Ongoing">Ongoing</option>
          <option value="Canceled">Canceled</option>
          <option value="Finished">Finished</option>
        </select>

        <button type="submit">Submit</button>
      </form>
    </Container>
  );
};

export default ToursSearch;
