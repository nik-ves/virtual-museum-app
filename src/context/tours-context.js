import React, { useState } from "react";

export const ToursContext = React.createContext({
  tours: [],
  addExhibit: () => {},
  removeExhibit: () => {},
  makeTour: () => {},
  selectedExhibits: [],
});

const ToursContextProvider = (props) => {
  const [tours, setTours] = useState([]);
  const [selectedExhibits, setSelectedExhibits] = useState([]);

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

  const makeTour = (name, currentUser) => {
    setTours((prevState) => {
      return [
        ...prevState,
        {
          id: Math.random(),
          name,
          currentUser,
          selectedExhibits,
        },
      ];
    });

    setSelectedExhibits([]);
  };

  const toursValue = {
    tours,
    addExhibit,
    removeExhibit,
    makeTour,
    selectedExhibits,
  };

  return (
    <ToursContext.Provider value={toursValue}>
      {props.children}
    </ToursContext.Provider>
  );
};

export default ToursContextProvider;
