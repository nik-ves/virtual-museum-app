import Container from "../../components/UI/Container";
import { SettingsContext } from "../../context/settings-context";
import { useContext, useState } from "react";
import SettingCard from "./SettingCard";
import classes from "./SettingsList.module.css";
import SettingsSearch from "./SettingsSearch";
import { Link } from "react-router-dom";

const SettingsList = () => {
  const [showAll, setShowAll] = useState(true);
  const settingsCtx = useContext(SettingsContext);
  const settings = settingsCtx.settingsList;

  return (
    <Container>
      <SettingsSearch setShowAll={setShowAll} />

      {showAll && (
        <div className={classes["settings-list"]}>
          {settings.map((setting) => (
            <SettingCard key={setting.id} setting={setting} />
          ))}
        </div>
      )}

      {!showAll && (
        <div className={classes["settings-list"]}>
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
