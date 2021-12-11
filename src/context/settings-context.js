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
        "The pharaoh thus deputised for the deities in a role that was both as civil and religious administrator. The pharaoh owned all of the land in Egypt, enacted laws, collected taxes, and defended Egypt from invaders as the commander-in-chief of the army.",
      typeOfExhibits: "",
      exibits: [],
      image: "../../images/pharaoh1.jpeg",
    },
    {
      id: 2,
      type: "Ancient Greece",
      description:
        "Ancient Greece was a northeastern Mediterranean civilization, existing from the Greek Dark Ages of the 12th–9th centuries BC to the end of classical antiquity, that comprised a loose collection of culturally and linguistically related city-states and other territories—unified only once, for 13 years, under Alexander the Great's empire.",
      typeOfExhibits: "",
      exibits: [],
      image: "../../images/greece1.jpeg",
    },
    {
      id: 3,
      type: "World War I",
      description:
        "One of the deadliest conflicts in history, an estimated 9 million were killed in combat, while over 5 million civilians died from occupation, bombardment, hunger or disease.",
      typeOfExhibits: "",
      exibits: [],
      image: "../../images/ww1.jpg",
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
