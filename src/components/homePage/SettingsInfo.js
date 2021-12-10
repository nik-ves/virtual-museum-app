import { useContext } from "react";

import { SettingsContext } from "../../context/settings-context";
import classes from "./SettingsInfo.module.css";
import Setting from "./Setting";

const SettingsInfo = () => {
  const settingsCtx = useContext(SettingsContext);
  const settings = settingsCtx.settingsList;

  return (
    <section className={classes["home-settings-info"]}>
      <h1>Our settings</h1>

      <div className={classes["home-settings"]}>
        {settings.map((setting) => (
          <Setting
            type={setting.type}
            description={setting.description}
            image={setting.image}
          />
        ))}
      </div>

      <button>See all of our settings</button>
    </section>
  );
};

export default SettingsInfo;
