import Container from "../UI/Container";

import classes from "./HomeIntro.module.css";

const HomeIntro = () => {
  return (
    <section className={classes["home-section"]}>
      <Container>
        <h1>First online museum</h1>
      </Container>
    </section>
  );
};

export default HomeIntro;
