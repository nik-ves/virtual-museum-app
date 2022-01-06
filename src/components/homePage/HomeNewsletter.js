import classes from "./HomeNewsletter.module.css";
import Container from "../UI/Container";

const HomeNewsletter = () => {
  return (
    <Container>
      <section className={classes["home-newsletter"]}>
        <form className={classes["home-newsletter-form"]}>
          <h1>Signup for Our Newsletter</h1>

          <p>
            Stay updated and get our latest news right into your inbox. No spam.
          </p>

          <div className={classes["home-newsletter-input"]}>
            <input type="email" placeholder="Your email address" />

            <button className="btn-general">Sign Up</button>
          </div>
        </form>
      </section>
    </Container>
  );
};

export default HomeNewsletter;
