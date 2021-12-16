import classes from "./SettingsSearch.module.css";
import Container from "../UI/Container";
import { SettingsContext } from "../../context/settings-context";
import { useContext } from "react";

const SettingsSearch = () => {
  const settingsCtx = useContext(SettingsContext);
  const settings = settingsCtx.settingsList;

  // console.log(testFilter);
  return (
    <Container>
      <section className={classes["settings-search"]}>
        <form>
          <label htmlFor="settingType">Vrsta postavke</label>
          <input id="settingType" />

          <label>Vrsta eksponata</label>
          <input id="exhibitType" />

          <label>Broj eksponata</label>
          <input id="numberOfExhibits" />

          <label>Rang cene</label>
          <input />

          <label>Vreme obilaska</label>
          <input />

          <label>Rating</label>
          <input />
        </form>
      </section>
    </Container>
  );
};

export default SettingsSearch;
