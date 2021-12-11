import { useContext } from "react";

import { SettingsContext } from "../../context/settings-context";
import classes from "./SettingsInfo.module.css";
import Setting from "./Setting";
import { Link } from "react-router-dom";

const SettingsInfo = () => {
  const settingsCtx = useContext(SettingsContext);
  const settings = settingsCtx.settingsList;

  return (
    <section className={classes["home-settings-info"]}>
      <h1>FEATURED SETTINGS</h1>
      <p>Some of our featured settings that you might like.</p>
      {/* <p>Some of our selected settings that you might like.</p> */}

      <div className={classes["home-settings"]}>
        {settings.map((setting) => (
          <Setting
            type={setting.type}
            description={setting.description}
            image={setting.image}
          />
        ))}
      </div>

      <Link className={classes["home-settings-link"]} to="/settings">
        See all of our settings &#8594;
      </Link>
    </section>
  );
};

export default SettingsInfo;
