import classes from "./HomeImageInfo.module.css";

const HomeImageInfo = () => {
  return (
    <section className={classes["home-image-text"]}>
      <div className={classes["content-box-box--1"]}>
        <img src="images/4.jpg" alt="image4" />
        <div className={classes["text-box"]}>
          <h1>
            “A visit to a museum is a search for beauty, truth, and meaning in
            our lives. Go to museums as often as you can.”
          </h1>
          <p>– Maira Kalman</p>
        </div>
      </div>

      <div className={classes["content-box-box--2"]}>
        <img src="images/6.jpg" alt="image6" />

        <div className={classes["text-box"]}>
          <h1>“Give me a museum and I’ll fill it.”</h1>
          <p>– Pablo Picasso</p>
        </div>
      </div>

      <div className={classes["content-box-box--3"]}>
        <img src="images/9.jpg" alt="image9" />

        <div className={classes["text-box"]}>
          <h1>
            “It’s not a museum. It’s not a place of artifacts; it’s a place of
            ideas “
          </h1>
          <p>– Jeanie Kahnke</p>
        </div>
      </div>
    </section>
  );
};

export default HomeImageInfo;
