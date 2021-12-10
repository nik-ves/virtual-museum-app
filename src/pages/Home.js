import { Fragment } from "react";

import HomeIntro from "../components/homePage/HomeIntro";
import SettingsInfo from "../components/homePage/SettingsInfo";
import HomeImageInfo from "../components/homePage/HomeImageInfo";
import HomeNewsletter from "../components/homePage/HomeNewsletter";

const Home = () => {
  return (
    <Fragment>
      <HomeIntro />
      <SettingsInfo />
      <HomeImageInfo />
      <HomeNewsletter />
    </Fragment>
  );
};

export default Home;
