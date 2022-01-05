import Container from "../../components/UI/Container";
import { SettingsContext } from "../../context/settings-context";
import { useContext, useState } from "react";
import SettingCard from "./SettingCard";
import classes from "./SettingsList.module.css";
import SettingsSearch from "./SettingsSearch";
import { Link } from "react-router-dom";

const SettingsList = () => {
  const [showAll, setShowAll] = useState(true);
  const [showFilterForm, setShowFilterForm] = useState(false);
  const settingsCtx = useContext(SettingsContext);
  const settings = settingsCtx.settingsList;

  const showFilterFormHandler = () => {
    setShowFilterForm(!showFilterForm);
  };

  return (
    <Container>
      <div className={classes["setting-list"]}>
        <h1>History in one place</h1>

        <p>
          Tour the history of Europe through our settings bellow. Each setting
          has a large number of unique exhibits to show you how once pharaohs or
          greek philosophers lived. See sculptures and paintings made by
          Michelangelo and Leonardo and many other things...{" "}
        </p>

        {!showFilterForm && (
          <p>
            If you're looking for something specific, click{" "}
            <Link to="/settings" onClick={showFilterFormHandler}>
              here
            </Link>{" "}
            for filter form.
          </p>
        )}
      </div>

      {showFilterForm && (
        <SettingsSearch
          showFilterForm={showFilterFormHandler}
          setShowAll={setShowAll}
        />
      )}

      {showAll && (
        <div className={classes["settings-list-cards"]}>
          {settings.map((setting) => (
            <SettingCard key={setting.id} setting={setting} />
          ))}
        </div>
      )}

      {!showAll && (
        <div className={classes["settings-list-cards"]}>
          <div className={classes["setting-error"]}>
            <p>
              {settingsCtx.filteredSettings.length === 0
                ? "No settings found."
                : `${settingsCtx.filteredSettings.length} settings found.`}
            </p>

            <p>
              Click{" "}
              <Link onClick={setShowAll} to="/settings">
                here
              </Link>{" "}
              to show all of our settings.
            </p>
          </div>

          {settingsCtx.filteredSettings.map((setting) => (
            <SettingCard key={setting.id} setting={setting} />
          ))}
        </div>
      )}
    </Container>
  );
};

export default SettingsList;
