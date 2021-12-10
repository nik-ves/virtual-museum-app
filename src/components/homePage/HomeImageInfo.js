import classes from "./HomeImageInfo.module.css";

const HomeImageInfo = () => {
  return (
    <section className={classes["home-image-text"]}>
      <div className={classes["content-box-box--1"]}>
        <img src="images/4.jpg" />
        <div className={classes["text-box"]}>
          <p>Neki tekst</p>
        </div>
      </div>

      <div className={classes["content-box-box--2"]}>
        <img src="images/5.jpg" />

        <div className={classes["text-box"]}>
          <p>Neki tekst</p>
        </div>
      </div>

      <div className={classes["content-box-box--3"]}>
        <img src="images/6.jpg" />

        <div className={classes["text-box"]}>
          <p>Neki tekst</p>
        </div>
      </div>
    </section>
  );
};

export default HomeImageInfo;