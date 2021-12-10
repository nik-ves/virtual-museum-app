import useInput from "../../hooks/use-input";

import { AuthContext } from "../../context/auth-context";
import { useContext, useState } from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";

const SignInForm = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const authCtx = useContext(AuthContext);
  const history = useHistory();

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

  if (authCtx.isLoggedIn) {
    history.replace("/profile");
  }

  const emailClasses = emailHasError ? "form-control invalid" : "form-control";

  const passwordClasses = passwordHasError
    ? "form-control invalid"
    : "form-control";

  return (
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
          <button type="submit">Sign In</button>
        </div>
        {<p>{errorMessage}</p>}
        <p className="form-question">
          No account? Create account <Link to="/sign-up">here</Link>.
        </p>
      </form>
    </section>
  );
};

export default SignInForm;
