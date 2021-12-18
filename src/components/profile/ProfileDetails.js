import Container from "../UI/Container";
import { useContext } from "react";
import { AuthContext } from "../../context/auth-context";
import classes from "./ProfileDetails.module.css";
import BackgroundImage from "../UI/BackroundImage";

const ProfileDetails = (props) => {
  const authCtx = useContext(AuthContext);
  const userProfile = authCtx.currentUser;

  return (
    <BackgroundImage>
      <Container>
        <section className={classes["user-profile"]}>
          <div className={classes["user-profile-image-box"]}>
            <img src="images/profile.jpg" alt="profile" />
          </div>

          <div className={classes["user-profile-text-box"]}>
            <h1>Your information</h1>

            <p>
              <span>First name:</span> {userProfile.firstName}
            </p>
            <p>
              <span>Last name:</span> {userProfile.lastName}
            </p>
            <p>
              <span>Contact number:</span> {userProfile.contactNumber}
            </p>
            <p>
              <span>Address:</span> {userProfile.currentAddress}
            </p>
            <p>
              <span>Favorites:</span> {userProfile.favorites}
            </p>
            <p>
              <span>Email:</span> {userProfile.email}
            </p>

            <button
              className={classes["user-profile-edit"]}
              onClick={props.isEditing}
            >
              Edit Profile
            </button>
          </div>
        </section>
      </Container>
    </BackgroundImage>
  );
};

export default ProfileDetails;
