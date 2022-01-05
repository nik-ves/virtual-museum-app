import { useState } from "react";
import ToursIntro from "../components/toursPage/ToursIntro";
import ToursSearch from "../components/toursPage/ToursSearch";
import ToursList from "../components/toursPage/ToursList";

const Tours = () => {
  const [showAll, setShowAll] = useState(true);

  const showAllHandler = () => {
    setShowAll(!showAll);
  };

  return (
    <>
      <ToursIntro />
      <ToursSearch showAll={showAll} showAllHandler={showAllHandler} />
      <ToursList showAll={showAll} showAllHandler={showAllHandler} />
    </>
  );
};

export default Tours;
