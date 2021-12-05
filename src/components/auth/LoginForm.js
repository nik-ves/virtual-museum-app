import { useState } from "react";
import classes from "./LoginForm.module.css";
import { AuthContext } from "../../context/auth-context";
import { useContext } from "react";

const LoginForm = () => {
  const authCtx = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const emailChangeHandler = (event) => {
    setEmail(event.target.value);
  };

  const passwordChangeHandler = (event) => {
    setPassword(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    authCtx.authUser(email, password);
  };

  return (
    <div className={classes["form-content"]}>
      <form onSubmit={submitHandler} className={classes.form}>
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

export default LoginForm;
