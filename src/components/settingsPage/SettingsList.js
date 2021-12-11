import Container from "../../components/UI/Container";
import { SettingsContext } from "../../context/settings-context";
import { useContext } from "react";
import SettingCard from "./SettingCard";
import classes from "./SettingsList.module.css";

const SettingsList = () => {
  const settingsCtx = useContext(SettingsContext);
  const settings = settingsCtx.settingsList;

  return (
    <Container>
      <div className={classes["settings-list"]}>
        {settings.map((setting) => (
          <SettingCard
            type={setting.type}
            image={setting.image}
            description={setting.description}
          />
        ))}
      </div>
    </Container>
  );
};

export default SettingsList;
