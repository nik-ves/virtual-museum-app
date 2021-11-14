import classes from "./LoginForm.module.css";

import useInput from "../../../hooks/use-input";

const LoginForm = () => {
  const { value: email, valueChangeHandler: emailChangeHandler } = useInput();
  const { value: password, valueChangeHandler: passwordChangeHandler } =
    useInput();

  const submitHandler = (event) => {
    event.preventDefault();

    console.log({
      email,
      password,
    });
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
