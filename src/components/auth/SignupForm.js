import { useState } from "react";
import { AuthContext } from "../../context/auth-context";
import { useContext } from "react";

import classes from "./SignupForm.module.css";

const SignupForm = () => {
  const authCtx = useContext(AuthContext);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const firstNameChangeHandler = (event) => {
    setFirstName(event.target.value);
  };

  const lastNameChangeHandler = (event) => {
    setLastName(event.target.value);
  };

  const emailChangeHandler = (event) => {
    setEmail(event.target.value);
  };

  const passwordChangeHandler = (event) => {
    setPassword(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    authCtx.createUser({
      id: Math.random(),
      firstName,
      lastName,
      email,
      password,
    });
  };

  return (
    <div className={classes["form-content"]}>
      <form onSubmit={submitHandler} className={classes.form}>
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
