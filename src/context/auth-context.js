import React, { useState } from "react";

export const AuthContext = React.createContext({
  createUser: () => {},
  authUser: () => {},
  currentUser: "",
  // isLoggedIn: "",
});

const AuthContextProvider = (props) => {
  const [currentUser, setCurrentUser] = useState({});
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

  const createUserHandler = (user) => {
    setUsersList((prevState) => [...prevState, user]);
  };

  const authUserHandler = (email, password) => {
    let user = usersList.find((user) => {
      return email === user.email && password === user.password;
    });

    setCurrentUser(user);
  };

  const providerValue = {
    createUser: createUserHandler,
    authUser: authUserHandler,
    currentUser,
  };

  return (
    <AuthContext.Provider value={providerValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
