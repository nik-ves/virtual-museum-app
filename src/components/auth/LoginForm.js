import useInput from "../../hooks/use-input";

import { AuthContext } from "../../context/auth-context";
import { useContext, useState } from "react";
import { useHistory } from "react-router";

const LoginForm = () => {
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
    <section className="form-content">
      <form onSubmit={submitHandler}>
        <div className={emailClasses}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            onChange={emailChangeHandler}
            onBlur={emailBlurHandler}
          />
        </div>
        {emailHasError && <p>Enter a valid email address!</p>}

        <div className={passwordClasses}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            onChange={passwordChangeHandler}
            onBlur={passwordBlurHandler}
          />
        </div>
        {passwordHasError && <p>Password must be longer than 5 characters!</p>}

        <div className="form-actions">
          <button type="submit">Log In</button>
        </div>
        {<p>{errorMessage}</p>}
      </form>
    </section>
  );
};

export default LoginForm;
