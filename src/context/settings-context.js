import React, { useState } from "react";

export const SettingsContext = React.createContext({});

const SettingsContextProvider = (props) => {
  const [settingsList, setSettingsList] = useState([
    {
      id: 1,
      type: "Art",
      typeOfExhibits: "",
      numberOfExhibits: "",
      price: "",
      timeToSee: "",
      comments: [],
    },
  ]);

  return <SettingsContext.Provider>{props.children}</SettingsContext.Provider>;
};

export default SettingsContextProvider;
