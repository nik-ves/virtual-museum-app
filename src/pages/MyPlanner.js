import Container from "../components/UI/Container";
import { useContext } from "react";
import { SettingsContext } from "../context/settings-context";

const MyPlanner = () => {
  const settingsCtx = useContext(SettingsContext);
  const settings = settingsCtx.settingsList;

  const sum = [];
  settings.forEach((setting) => {
    sum.push(setting.exhibits);
  });
  const allExhibits = sum.flat();

  return (
    <Container>
      <h1>My planner</h1>

      {allExhibits.map((exhibit) => {
        return <div key={Math.random()}>{exhibit.name}</div>;
      })}
    </Container>
  );
};

export default MyPlanner;
