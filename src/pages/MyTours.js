import Container from "../components/UI/Container";
import { useContext } from "react";
import { SettingsContext } from "../context/settings-context";
import TourForm from "../components/profile/TourForm";
import BackroundImage from "../components/UI/BackroundImage";

const MyTours = () => {
  const settingsCtx = useContext(SettingsContext);

  const sum = [];
  settingsCtx.settingsList.forEach((setting) => {
    sum.push(setting.exhibits);
  });
  const allExhibits = sum.flat();

  return (
    <BackroundImage>
      <Container>
        <div className="my-tours-box">
          <TourForm allExhibits={allExhibits} />
        </div>
      </Container>
    </BackroundImage>
  );
};

export default MyTours;
