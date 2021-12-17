import Container from "../../components/UI/Container";
import { SettingsContext } from "../../context/settings-context";
import { useContext, useEffect, useState } from "react";
import SettingCard from "./SettingCard";
import classes from "./SettingsList.module.css";

const SettingsList = () => {
  const [showAll, setShowAll] = useState(true);
  const [exhibitName, setExhibitName] = useState("");
  const [exhibits, setExhibits] = useState();
  const settingsCtx = useContext(SettingsContext);
  const settings = settingsCtx.settingsList;

  const exhibitNameChangeHandler = (event) => {
    setExhibitName(event.target.value);
  };

  const exhibitsChangeHandler = (event) => {
    setExhibits(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    setShowAll(false);

    settingsCtx.filterSettings(exhibitName, exhibits);
  };

  return (
    <Container>
      <section className={classes["settings-search"]}>
        <form onSubmit={submitHandler}>
          <label htmlFor="settingName">Ime postavke</label>
          <input
            type="text"
            id="settingName"
            onChange={exhibitNameChangeHandler}
          />

          <label htmlFor="exhibitsNumber">Broj eksponata</label>
          <input
            type="text"
            id="exhibitsNumber"
            onChange={exhibitsChangeHandler}
          />

          <button type="submit">Submit</button>
        </form>
      </section>

      {showAll && (
        <div className={classes["settings-list"]}>
          {settings.map((setting) => (
            <SettingCard key={setting.id} setting={setting} />
          ))}
        </div>
      )}

      <div className={classes["settings-list"]}>
        {settingsCtx.filteredSettings.map((setting) => (
          <SettingCard key={setting.id} setting={setting} />
        ))}
      </div>
    </Container>
  );
};

export default SettingsList;
