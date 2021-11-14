import classes from "./SignupForm.module.css";

import useInput from "../../../hooks/use-input";

const SignupForm = () => {
  const { value: firstName, valueChangeHandler: firstNameChangeHandler } =
    useInput();
  const { value: lastName, valueChangeHandler: lastNameChangeHandler } =
    useInput();
  const { value: number, valueChangeHandler: numberChangeHandler } = useInput();
  const { value: address, valueChangeHandler: addressChangeHandler } =
    useInput();
  const { value: favourites, valueChangeHandler: favouritesChangeHandler } =
    useInput();
  const { value: email, valueChangeHandler: emailChangeHandler } = useInput();
  const { value: password, valueChangeHandler: passwordChangeHandler } =
    useInput();

  const submitHandler = (event) => {
    event.preventDefault();

    console.log({
      firstName,
      lastName,
      number,
      address,
      favourites,
      email,
      password,
    });
  };
  return (
    <div className={classes['form-content']}>
      <form className={classes.form} onSubmit={submitHandler}>
        <label htmlFor="firstName">First Name</label>
        <input
          type="text"
          id="firstName"
          value={firstName}
          onChange={firstNameChangeHandler}
        />

        <label htmlFor="lastName">Last Name</label>
        <input
          type="text"
          id="lastName"
          value={lastName}
          onChange={lastNameChangeHandler}
        />

        <label htmlFor="number">Contact Number</label>
        <input
          type="number"
          id="number"
          value={number}
          onChange={numberChangeHandler}
        />

        <label htmlFor="address">Current Address</label>
        <input
          type="text"
          id="address"
          value={address}
          onChange={addressChangeHandler}
        />

        <label htmlFor="favourites">Favourite Stuff</label>
        <textarea
          id="favourites"
          rows="4"
          cols="50"
          value={favourites}
          onChange={favouritesChangeHandler}
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={emailChangeHandler}
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={passwordChangeHandler}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default SignupForm;
