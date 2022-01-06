import { useState } from "react";
import ToursIntro from "../components/toursPage/ToursIntro";
import ToursSearch from "../components/toursPage/ToursSearch";
import ToursList from "../components/toursPage/ToursList";

const Tours = () => {
  const [showAll, setShowAll] = useState(true);
  const [showFilter, setShowFilter] = useState(false);

  const showAllHandler = () => {
    setShowAll(!showAll);
  };

  const showFilterHandler = () => {
    setShowFilter(!showFilter);
  };

  return (
    <>
      <ToursIntro
        showFilterHandler={showFilterHandler}
        showFilter={showFilter}
      />
      {showFilter && (
        <ToursSearch
          showAll={showAll}
          showAllHandler={showAllHandler}
          showFilterHandler={showFilterHandler}
        />
      )}
      <ToursList showAll={showAll} showAllHandler={showAllHandler} />
    </>
  );
};

export default Tours;
