import React from "react";

export const ToursContext = React.createContext({
  items: [],
  totalAmout: "",
});

const ToursContextProvider = (props) => {
  const toursValue = {};

  return (
    <ToursContext.Provider value={toursValue}>
      {props.children}
    </ToursContext.Provider>
  );
};

export default ToursContextProvider;
