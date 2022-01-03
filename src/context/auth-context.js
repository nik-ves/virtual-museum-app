import React, { useState } from "react";

export const AuthContext = React.createContext({
  currentUser: "",
  isLoggedIn: "",
  users: [],
  createUser: () => {},
  authUser: () => {},
  logoutUser: () => {},
});

/* {
  id: 3,
  firstName: "Nikola",
  lastName: "Nikolic",
  contactNumber: "123456789",
  currentAddress: "Adresa 1",
  favorites:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.",
  email: "nikola@test.com",
  password: "nikola123",
}
*/

const AuthContextProvider = (props) => {
  const [currentUser, setCurrentUser] = useState({
    id: 3,
    firstName: "Nikola",
    lastName: "Nikolic",
    contactNumber: "123456789",
    currentAddress: "Adresa 1",
    favorites:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.",
    email: "nikola@test.com",
    password: "nikola123",
  });
  const [usersList, setUsersList] = useState([
    {
      id: 1,
      firstName: "Stefan",
      lastName: "Stefanovic",
      contactNumber: "123456789",
      currentAddress: "Adresa 1",
      favorites:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.",
      email: "stefan@test.com",
      password: "stefan123",
    },
    {
      id: 2,
      firstName: "Marko",
      lastName: "Markovic",
      contactNumber: "987654321",
      currentAddress: "Adresa 2",
      favorites: "Testenina",
      email: "marko@test.com",
      password: "marko123",
    },
    {
      id: 3,
      firstName: "Pera",
      lastName: "Peric",
      contactNumber: "987654321",
      currentAddress: "Adresa 2",
      favorites: "Testenina",
      email: "pera@test.com",
      password: "pera123",
    },
    {
      id: 4,
      firstName: "Boban",
      lastName: "Bobanic",
      contactNumber: "987654321",
      currentAddress: "Adresa 2",
      favorites: "Testenina",
      email: "boban@test.com",
      password: "boban123",
    },
    {
      id: 5,
      firstName: "Katarina",
      lastName: "Katarinovic",
      contactNumber: "987654321",
      currentAddress: "Adresa 2",
      favorites: "Testenina",
      email: "katarina@test.com",
      password: "katarina123",
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
    users: usersList,
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
