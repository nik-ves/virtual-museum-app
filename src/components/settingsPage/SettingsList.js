import Container from "../../components/UI/Container";
import { SettingsContext } from "../../context/settings-context";
import { useContext, useState } from "react";
import SettingCard from "./SettingCard";
import classes from "./SettingsList.module.css";

const SettingsList = () => {
  const [type, setType] = useState("");
  const [exhibits, setExhibits] = useState();
  const settingsCtx = useContext(SettingsContext);
  const settings = settingsCtx.settingsList;

  const typeChangeHandler = (event) => {
    setType(event.target.value);
  };

  const exhibitsChangeHandler = (event) => {
    setExhibits(event.target.value);
  };

  let element;

  const submitHandler = (event) => {
    event.preventDefault();

    element = settings.filter((setting) => setting.type.includes(type));
    console.log(element);
  };

  return (
    <Container>
      <section className={classes["settings-search"]}>
        <form onSubmit={submitHandler}>
          <label htmlFor="settingType">Vrsta postavke</label>
          <input
            type="text"
            id="settingType"
            value={type}
            onChange={typeChangeHandler}
          />

          <label htmlFor="settingType">Vrsta postavke</label>
          <input
            type="text"
            id="settingType"
            value={exhibits}
            onChange={exhibitsChangeHandler}
          />

          <button type="submit">Submit</button>
        </form>
      </section>

      <div className={classes["settings-list"]}>
        {element?.map((el) => (
          <div>
            <p>{el.type}</p>
            {/* <p>{el.exhibits.length}</p> */}
          </div>
        ))}
      </div>

      {/* <div className={classes["settings-list"]}>
        {settings
          .filter((setting) => setting.type.includes(type))
          .map((el) => (
            <div>
              <p>{el.type}</p>
              <p>{el.exhibits.length}</p>
            </div>
          ))}
      </div> */}

      {/* <div className={classes["settings-list"]}>
        {settings.map((el) => (
          <li>{el.type}</li>
        ))}
      </div> */}

      {/* <div className={classes["settings-list"]}>
        {settings.map((setting) => (
          <SettingCard
            key={setting.id}
            type={setting.type}
            image={setting.image}
            shortDescription={setting.shortDescription}
            exhibits={setting.exhibits}
          />
        ))}
      </div> */}
    </Container>
  );
};

export default SettingsList;

{
  /* <div className={classes["settings-list"]}>
        {settings.map((setting) => (
          <SettingCard
            key={setting.id}
            type={setting.type}
            image={setting.image}
            shortDescription={setting.shortDescription}
            exhibits={setting.exhibits}
          />
        ))}
      </div> */
}
