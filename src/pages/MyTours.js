import Container from "../components/UI/Container";
import { useState, useContext } from "react";
import { SettingsContext } from "../context/settings-context";
import ExhibitCard from "../components/profile/ExhibitCard";
import { ToursContext } from "../context/tours-context";
import { AuthContext } from "../context/auth-context";
import TourForm from "../components/profile/TourForm";

const MyTours = () => {
  const [showExhibits, setShowExhibits] = useState(false);

  const settingsCtx = useContext(SettingsContext);
  const toursCtx = useContext(ToursContext);

  const sum = [];
  settingsCtx.settingsList.forEach((setting) => {
    sum.push(setting.exhibits);
  });
  const allExhibits = sum.flat();

  return (
    <Container>
      <div className="my-tours-box">
        <h2>Select exhibits for your personal tour!</h2>

        <TourForm allExhibits={allExhibits} />
      </div>
    </Container>
  );
};

export default MyTours;
