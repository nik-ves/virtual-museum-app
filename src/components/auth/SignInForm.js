import useInput from "../../hooks/use-input";
import BackgroundImage from "../UI/BackroundImage";
import { AuthContext } from "../../context/auth-context";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Container from "../UI/Container";

const SignInForm = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const authCtx = useContext(AuthContext);
  const {
    value: emailValue,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    valueBlurHandler: emailBlurHandler,
  } = useInput((value) => value.includes("@"));

  const {
    value: passwordValue,
    hasError: passwordHasError,
    valueChangeHandler: passwordChangeHandler,
    valueBlurHandler: passwordBlurHandler,
  } = useInput((value) => value.length > 5);

  const submitHandler = (event) => {
    event.preventDefault();

    authCtx.authUser(emailValue, passwordValue);

    setErrorMessage("Incorrect login parameters!");
  };

  const emailClasses = emailHasError ? "form-control invalid" : "form-control";

  const passwordClasses = passwordHasError
    ? "form-control invalid"
    : "form-control";

  return (
    <BackgroundImage>
      <Container>
        <section className="form-content form-signin">
          <form onSubmit={submitHandler}>
            <h1>Sign In</h1>

            <div className={emailClasses}>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                onChange={emailChangeHandler}
                onBlur={emailBlurHandler}
              />
              {emailHasError && <p>Enter a valid email address!</p>}
            </div>

            <div className={passwordClasses}>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                onChange={passwordChangeHandler}
                onBlur={passwordBlurHandler}
              />
              {passwordHasError && (
                <p>Password must be longer than 5 characters!</p>
              )}
            </div>

            <div className="form-actions">
              <button className="btn-general" type="submit">
                Sign In
              </button>
            </div>
            {<p>{errorMessage}</p>}
            <p className="form-question">
              No account? Create account <Link to="/sign-up">here</Link>.
            </p>
          </form>
        </section>
      </Container>
    </BackgroundImage>
  );
};

export default SignInForm;
