import { AuthContext } from "../context/auth-context";
import { useContext } from "react";

const Profile = () => {
  const authCtx = useContext(AuthContext);

  return (
    <div>
      <h1>{authCtx.currentUser.firstName}</h1>
      <h1>{authCtx.currentUser.lastName}</h1>
      <h1>{authCtx.currentUser.email}</h1>
      <h1>{authCtx.currentUser.password}</h1>
    </div>
  );
};

export default Profile;
