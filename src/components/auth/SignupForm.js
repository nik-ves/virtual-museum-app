import { useState } from "react";
import { AuthContext } from "../../context/auth-context";
import { useContext } from "react";
import BackgroundImage from "../UI/BackroundImage";
import useInput from "../../hooks/use-input";
import { Link } from "react-router-dom";

const SignUpForm = () => {
  const [signupMessage, setSignupMessage] = useState("");
  const authCtx = useContext(AuthContext);

  const {
    value: firstNameValue,
    hasError: firstNameHasError,
    valueChangeHandler: firstNameChangeHandler,
    valueBlurHandler: firstNameBlurHandler,
    resetValue: firstNameValueReset,
  } = useInput((value) => value.trim() !== "");

  const {
    value: lastNameValue,
    hasError: lastNameHasError,
    valueChangeHandler: lastNameChangeHandler,
    valueBlurHandler: lastNameBlurHandler,
    resetValue: lastNameValueReset,
  } = useInput((value) => value.trim() !== "");

  const {
    value: contactNumberValue,
    hasError: contactNumberHasError,
    valueChangeHandler: contactNumberChangeHandler,
    valueBlurHandler: contactNumberBlurHandler,
    resetValue: contactNumberValueReset,
  } = useInput((value) => value.length >= 8);

  const {
    value: addressValue,
    hasError: addressHasError,
    valueChangeHandler: addressChangeHandler,
    valueBlurHandler: addressBlurHandler,
    resetValue: addressValueReset,
  } = useInput((value) => value.trim() !== "");

  const {
    value: favoritesValue,
    hasError: favoritesHasError,
    valueChangeHandler: favoritesChangeHandler,
    valueBlurHandler: favoritesBlurHandler,
    resetValue: favoritesValueReset,
  } = useInput((value) => value.trim() !== "");

  const {
    value: emailValue,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    valueBlurHandler: emailBlurHandler,
    resetValue: emailValueReset,
  } = useInput((value) => value.includes("@"));

  const {
    value: passwordValue,
    hasError: passwordHasError,
    valueChangeHandler: passwordChangeHandler,
    valueBlurHandler: passwordBlurHandler,
    resetValue: passwordValueReset,
  } = useInput((value) => value.length > 5);

  const resetValues = () => {
    firstNameValueReset();
    lastNameValueReset();
    contactNumberValueReset();
    addressValueReset();
    favoritesValueReset();
    emailValueReset();
    passwordValueReset();
  };

  const formClasses = (value) => {
    let formClass;

    if (value) {
      formClass = "form-control invalid";
    } else {
      formClass = "form-control";
    }

    return formClass;
  };

  const submitHandler = (event) => {
    event.preventDefault();

    authCtx.createUser({
      id: Math.trunc(Math.random() * 1000),
      firstName: firstNameValue,
      lastName: lastNameValue,
      contactNumber: contactNumberValue,
      currentAddress: addressValue,
      favorites: favoritesValue,
      email: emailValue,
      password: passwordValue,
    });

    setSignupMessage("Signup successful!");

    resetValues();
  };

  const firstNameClasses = formClasses(firstNameHasError);
  const lastNameClasses = formClasses(firstNameHasError);
  const emailClasses = formClasses(firstNameHasError);
  const passwordClasses = formClasses(firstNameHasError);

  return (
    <BackgroundImage>
      {" "}
      <section className="form-content form-signup">
        <form onSubmit={submitHandler} className="form">
          <h1 className="test">Sign Up</h1>

          <div className="form-personal">
            <h2>Personal Information</h2>
            <div className={firstNameClasses}>
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                id="firstName"
                value={firstNameValue}
                onChange={firstNameChangeHandler}
                onBlur={firstNameBlurHandler}
              />
              {firstNameHasError && <p>First name field must not be empty!</p>}
            </div>

            <div className={lastNameClasses}>
              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                id="lastName"
                value={lastNameValue}
                onChange={lastNameChangeHandler}
                onBlur={lastNameBlurHandler}
              />
              {lastNameHasError && <p>Last name field must not be empty!</p>}
            </div>

            <div className={lastNameClasses}>
              <label htmlFor="contactNumber">Contact Number</label>
              <input
                type="number"
                id="contactNumber"
                value={contactNumberValue}
                onChange={contactNumberChangeHandler}
                onBlur={contactNumberBlurHandler}
              />
              {contactNumberHasError && (
                <p>Number must be at least 8 characters long!</p>
              )}
            </div>

            <div className={lastNameClasses}>
              <label htmlFor="address">Current Address</label>
              <input
                type="text"
                id="address"
                value={addressValue}
                onChange={addressChangeHandler}
                onBlur={addressBlurHandler}
              />
              {addressHasError && <p>Address field must not be empty!</p>}
            </div>

            <div className={lastNameClasses}>
              <label htmlFor="favorites">Favorite settings and exhibits</label>
              <textarea
                type="text"
                id="address"
                value={favoritesValue}
                onChange={favoritesChangeHandler}
                onBlur={favoritesBlurHandler}
              />
              {favoritesHasError && <p>Favorites field must not be empty!</p>}
            </div>
          </div>

          <div className="form-login">
            <h2>Login Information</h2>
            <div className={emailClasses}>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                value={emailValue}
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
                value={passwordValue}
                onChange={passwordChangeHandler}
                onBlur={passwordBlurHandler}
              />
              {passwordHasError && (
                <p>Password must be longer than 5 characters!</p>
              )}
            </div>
          </div>

          <div className="form-actions">
            <button className="btn-general" type="submit">
              Sign Up
            </button>
            {<p>{signupMessage}</p>}
            <p className="form-question">
              Already have an account? Log in{" "}
              <Link to="/auth/sign-in">here</Link>.
            </p>
          </div>
        </form>
      </section>
    </BackgroundImage>
  );
};

export default SignUpForm;
