import React, { useState } from "react";

export const AuthContext = React.createContext({
  currentUser: "",
  isLoggedIn: "",
  createUser: () => {},
  authUser: () => {},
  logoutUser: () => {},
});

const AuthContextProvider = (props) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [usersList, setUsersList] = useState([
    {
      id: 1,
      firstName: "Stefan",
      lastName: "Stefanovic",
      email: "stefan@test.com",
      password: "stefan123",
    },
    {
      id: 2,
      firstName: "Marko",
      lastName: "Markovic",
      email: "marko@test.com",
      password: "marko123",
    },
  ]);

  const isLoggedIn = currentUser;

  const createUserHandler = (user) => {
    setUsersList((prevState) => [...prevState, user]);
  };

  const authUserHandler = (email, password) => {
    let user = usersList.find((user) => {
      return email === user.email && password === user.password;
    });
    setCurrentUser(user);
  };

  const logoutUserHandler = () => {
    setCurrentUser(null);
  };

  const providerValue = {
    currentUser,
    isLoggedIn,
    createUser: createUserHandler,
    authUser: authUserHandler,
    logoutUser: logoutUserHandler,
  };

  return (
    <AuthContext.Provider value={providerValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
