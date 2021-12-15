import { useParams } from "react-router-dom";
import { SettingsContext } from "../../context/settings-context";
import { useContext } from "react";
import Container from "../UI/Container";

import classes from "./ExhibitDetails.module.css";

// Korisnik bira eksponat iz postavke. Za svaki eksponat prikazati, naziv, opis, sliku, cenu obilaska,
// vreme obilaska, zemlju porekla i recenzije korisnika koji su eksponat prethodno posetili

const ExhibitDetails = () => {
  const settingCtx = useContext(SettingsContext);
  const settingsList = settingCtx.settingsList;

  const params = useParams();

  const setting = settingsList.find(
    (setting) => setting.type === params.settingId
  );

  const exhibit = setting.exhibits.find(
    (exhibit) => exhibit.name === params.exhibitId
  );

  const formatedName = (name) => {
    return name
      .split("-")
      .map((word) => word[0].toUpperCase() + word.slice(1))
      .join(" ");
  };

  console.log(exhibit);
  return (
    <Container>
      <section className={classes["exhibit"]}>
        <div className={classes["exhibit-image-box"]}>
          <img src={exhibit.image} alt="exhibit" />
        </div>

        <div className={classes["exhibit-text-box"]}>
          <p>
            <span>Name</span>: {formatedName(exhibit.name)}
          </p>
          <p>
            <span>Description</span>: {exhibit.description}
          </p>
          <p>
            <span>Country of origin</span>: {exhibit.countryOfOrigin}
          </p>
          <p>
            <span>Price</span>: {exhibit.price} EUR
          </p>
          <p>
            <span>Time to see</span>: {exhibit.time} min
          </p>
        </div>
      </section>
    </Container>
  );
};

export default ExhibitDetails;
