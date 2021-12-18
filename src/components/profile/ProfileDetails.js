import Container from "../UI/Container";
import { useContext } from "react";
import { AuthContext } from "../../context/auth-context";
import classes from "./ProfileDetails.module.css";

const ProfileDetails = (props) => {
  const authCtx = useContext(AuthContext);
  const userProfile = authCtx.currentUser;

  return (
    <Container>
      <section className={classes["user-profile"]}>
        <h1>Your Profile</h1>

        <ul>
          <li>
            <span className={classes["user-property"]}>First Name:</span>
            <span className={classes["user-info"]}>
              {" "}
              {userProfile.firstName}
            </span>
          </li>
          <li>
            <span className={classes["user-property"]}>Last Name:</span>
            <span className={classes["user-info"]}>
              {" "}
              {userProfile.lastName}
            </span>
          </li>
          <li>
            <span className={classes["user-property"]}>Contact Number:</span>
            <span className={classes["user-info"]}>
              {" "}
              {userProfile.contactNumber}
            </span>
          </li>
          <li>
            <span className={classes["user-property"]}>Current Address:</span>
            <span className={classes["user-info"]}>
              {" "}
              {userProfile.currentAddress}
            </span>
          </li>
          <li>
            <span className={classes["user-property"]}>Favorites:</span>
            <span className={classes["user-info"]}>
              {" "}
              {userProfile.favorites}
            </span>
          </li>
          <li>
            <span className={classes["user-property"]}>Email:</span>
            <span className={classes["user-info"]}> {userProfile.email}</span>
          </li>
        </ul>

        <button onClick={props.isEditing}>Edit Profile</button>
      </section>
    </Container>
  );
};

export default ProfileDetails;
