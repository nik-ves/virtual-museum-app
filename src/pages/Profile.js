import { AuthContext } from "../context/auth-context";
import { useContext } from "react";

import Container from "../components/UI/Container";

const Profile = () => {
  const authCtx = useContext(AuthContext);

  return (
    <Container>
      <h1>{authCtx.currentUser?.firstName}</h1>
      <h1>{authCtx.currentUser?.lastName}</h1>
      <h1>{authCtx.currentUser?.email}</h1>
      <h1>{authCtx.currentUser?.password}</h1>
    </Container>
  );
};

export default Profile;
