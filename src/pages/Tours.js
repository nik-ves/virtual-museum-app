import { useState } from "react";
import ToursList from "../components/toursPage/ToursList";
import ToursSearch from "../components/toursPage/ToursSearch";

const Tours = () => {
  const [showAll, setShowAll] = useState(true);

  const showAllHandler = () => {
    setShowAll(!showAll);
  };

  return (
    <>
      <ToursSearch showAll={showAll} showAllHandler={showAllHandler} />
      <ToursList showAll={showAll} showAllHandler={showAllHandler} />
    </>
  );
};

export default Tours;
