import Container from "../../components/UI/Container";
import { SettingsContext } from "../../context/settings-context";
import { useContext, useState } from "react";
import SettingCard from "./SettingCard";
import classes from "./SettingsList.module.css";
import SettingsSearch from "./SettingsSearch";

const SettingsList = () => {
  const [showAll, setShowAll] = useState(true);
  const settingsCtx = useContext(SettingsContext);
  const settings = settingsCtx.settingsList;

  return (
    <Container>
      {/* <h1>Settings</h1> */}
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
          <button onClick={setShowAll}>Back to all settings</button>
          {settingsCtx.filteredSettings.map((setting) => (
            <SettingCard key={setting.id} setting={setting} />
          ))}
        </div>
      )}
    </Container>
  );
};

export default SettingsList;
