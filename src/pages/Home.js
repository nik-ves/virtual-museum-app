import { Fragment } from "react";

import HomeIntro from "../components/homePage/HomeIntro";
import HomeSettingsInfo from "../components/homePage/HomeSettingsInfo";
import HomeImageInfo from "../components/homePage/HomeImageInfo";
import HomeNewsletter from "../components/homePage/HomeNewsletter";

const Home = () => {
  return (
    <Fragment>
      <HomeIntro />
      <HomeSettingsInfo />
      <HomeImageInfo />
      <HomeNewsletter />
    </Fragment>
  );
};

export default Home;
