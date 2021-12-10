import { Fragment } from "react";

import HomeIntro from "../components/homePage/HomeIntro";
import SettingsInfo from "../components/homePage/SettingsInfo";
import HomeImageInfo from "../components/homePage/HomeImageInfo";

const Home = () => {
  return (
    <Fragment>
      <HomeIntro />
      <SettingsInfo />
      <HomeImageInfo />
    </Fragment>
  );
};

export default Home;
