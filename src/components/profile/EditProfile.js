import useInput from "../../hooks/use-input";
import { AuthContext } from "../../context/auth-context";
import { useContext } from "react";
import BackgroundImage from "../UI/BackroundImage";
import classes from "./EditProfile.module.css";

const EditProfile = (props) => {
  const authCtx = useContext(AuthContext);
  const currentUser = authCtx.currentUser;

  const {
    value: newFirstNameValue,
    valueChangeHandler: newFirstNameChangeHandler,
  } = useInput((value) => value.includes("@"));

  const {
    value: newLastNameValue,
    valueChangeHandler: newLastNameChangeHandler,
  } = useInput((value) => value.length > 5);

  const {
    value: newContactNumberValue,
    valueChangeHandler: newContactNumberChangeHandler,
  } = useInput((value) => value.length > 5);

  const {
    value: newAddressValue,
    valueChangeHandler: newAddressChangeHandler,
  } = useInput((value) => value.length > 5);

  const { value: newFavorites, valueChangeHandler: newFavoritesChangeHandler } =
    useInput((value) => value.length > 5);

  const submitHandler = (event) => {
    event.preventDefault();

    currentUser.firstName = newFirstNameValue;
    currentUser.lastName = newLastNameValue;
    currentUser.contactNumber = newContactNumberValue;
    currentUser.currentAddress = newAddressValue;
    currentUser.favorites = newFavorites;

    props.isEditing();
  };

  return (
    <BackgroundImage>
      {" "}
      <section className="form-content form-signin">
        <form onSubmit={submitHandler}>
          <h1>Edit Profile</h1>

          <div className="form-control">
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              id="firstName"
              onChange={newFirstNameChangeHandler}
              placeholder={currentUser.firstName}
            />
          </div>

          <div className="form-control">
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              id="lastName"
              onChange={newLastNameChangeHandler}
              placeholder={currentUser.lastName}
            />
          </div>

          <div className="form-control">
            <label htmlFor="contactNumber">Contact Number</label>
            <input
              type="number"
              id="contactNumber"
              onChange={newContactNumberChangeHandler}
              placeholder={currentUser.contactNumber}
            />
          </div>

          <div className="form-control">
            <label htmlFor="currentAddress">Current Address</label>
            <input
              type="text"
              id="currentAddress"
              onChange={newAddressChangeHandler}
              placeholder={currentUser.currentAddress}
            />
          </div>

          <div className="form-control">
            <label htmlFor="favorites">Favorites</label>
            <textarea
              type="text"
              id="favorites"
              onChange={newFavoritesChangeHandler}
              placeholder={currentUser.favorites}
            />
          </div>

          <div className="form-actions">
            <button type="submit">Save Changes</button>
            <button onClick={props.isEditing}>Cancel</button>
          </div>
        </form>
      </section>
    </BackgroundImage>
  );
};

export default EditProfile;
