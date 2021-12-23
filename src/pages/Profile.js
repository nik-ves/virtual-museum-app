import ProfileDetails from "../components/profile/ProfileDetails";
import EditProfile from "../components/profile/EditProfile";
import { Fragment, useState } from "react";

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);

  const editingChangeHandler = () => {
    setIsEditing(!isEditing);
  };

  return (
    <Fragment>
      {!isEditing && <ProfileDetails isEditing={editingChangeHandler} />}
      {isEditing && <EditProfile isEditing={editingChangeHandler} />}
    </Fragment>
  );
};

export default Profile;
