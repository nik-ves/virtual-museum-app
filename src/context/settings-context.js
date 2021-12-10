import React, { useState } from "react";

export const SettingsContext = React.createContext({
  settingsList: [],
});

const SettingsContextProvider = (props) => {
  const [settingsList, setSettingsList] = useState([
    {
      id: 1,
      type: "Pharaohs of Egypt",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      typeOfExhibits: "",
      exibits: [],
      image: "../../images/1.jpg",
    },
    {
      id: 2,
      type: "Ancient Greece",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      typeOfExhibits: "",
      exibits: [],
      image: "../../images/2.jpg",
    },
    {
      id: 3,
      type: "World War I",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      typeOfExhibits: "",
      exibits: [],
      image: "../../images/3.jpg",
    },
    // {
    //   id: 4,
    //   type: "World War II",
    //   description:
    //     "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    //   typeOfExhibits: "",
    //   exibits: [],
    // },
  ]);

  const settingValue = {
    settingsList,
  };

  return (
    <SettingsContext.Provider value={settingValue}>
      {props.children}
    </SettingsContext.Provider>
  );
};

export default SettingsContextProvider;
