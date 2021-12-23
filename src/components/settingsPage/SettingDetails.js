import { useParams } from "react-router";
import { SettingsContext } from "../../context/settings-context";
import { useContext } from "react";
import Container from "../UI/Container";
import ExhibitCard from "./ExhibitCard";
import classes from "./SettingDetails.module.css";
import CommentList from "./CommentList";

const SettingDetails = () => {
  const settingCtx = useContext(SettingsContext);
  const settingsList = settingCtx.settingsList;

  const params = useParams();

  const setting = settingsList.find(
    (setting) => setting.params === params.settingId
  );

  const exhibits = setting.exhibits;

  return (
    <Container>
      <section className={classes["setting"]}>
        <div className={classes["setting-image-box"]}>
          <img src={setting.image} alt="setting" />
        </div>

        <div className={classes["setting-text-box"]}>
          <h1>{setting.name}</h1>
          {Object.values(setting.longDescription).map((value) => {
            return <p key={Math.random()}>{value}</p>;
          })}
        </div>

        <div className={classes["exhibit-box"]}>
          <h2>Selected exhibits for this setting</h2>

          <div className={classes["exhibit-link"]}>
            <ExhibitCard exhibits={exhibits} setting={setting} />
          </div>
        </div>

        <CommentList comments={setting.comments} />
      </section>
    </Container>
  );
};

export default SettingDetails;
