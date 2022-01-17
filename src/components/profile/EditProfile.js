import { AuthContext } from "../../context/auth-context";
import { useContext } from "react";
import BackgroundImage from "../UI/BackroundImage";
import classes from "./EditProfile.module.css";
import useEdit from "../../hooks/use-edit";
import Container from "../UI/Container";
import useModal from "../../hooks/use-modal";

const EditProfile = (props) => {
  const authCtx = useContext(AuthContext);
  const currentUser = authCtx.currentUser;

  const { showModal, showModalHandler, modalBox } = useModal(
    "Are you sure you want to exit? Changes will not be saved!",
    props.isEditing
  );

  const {
    value: firstNameValue,
    valueChangeHandler: firstNameChangeHandler,
    hasError: firstNameHasError,
  } = useEdit(currentUser.firstName);

  const {
    value: lastNameValue,
    valueChangeHandler: lastNameChangeHandler,
    hasError: lastNameHasError,
  } = useEdit(currentUser.lastName);

  const {
    value: contactNumberValue,
    valueChangeHandler: contactNumberChangeHandler,
    hasError: contactNumberHasError,
  } = useEdit(currentUser.contactNumber);

  const {
    value: currentAddressValue,
    valueChangeHandler: currentAddressChangeHandler,
    hasError: currentAddressHasError,
  } = useEdit(currentUser.currentAddress);

  const {
    value: favoritesValue,
    valueChangeHandler: favoritesChangeHandler,
    hasError: favoritesHasError,
  } = useEdit(currentUser.favorites);

  const submitHandler = (event) => {
    event.preventDefault();

    if (
      firstNameHasError ||
      lastNameHasError ||
      contactNumberHasError ||
      currentAddressHasError ||
      favoritesHasError
    ) {
      return;
    }

    currentUser.firstName = firstNameValue;
    currentUser.lastName = lastNameValue;
    currentUser.contactNumber = contactNumberValue;
    currentUser.currentAddress = currentAddressValue;
    currentUser.favorites = favoritesValue;

    props.isEditing();
  };

  return (
    <BackgroundImage>
      {showModal && modalBox}
      <Container>
        <section className={classes["form-content"]}>
          <form onSubmit={submitHandler} className={classes["form-edit"]}>
            <h1>Edit Profile</h1>

            <div className={classes["form-row"]}>
              <div className={classes["form-control"]}>
                <label htmlFor="firstName">First Name</label>
                <input
                  type="text"
                  id="firstName"
                  value={firstNameValue}
                  onChange={firstNameChangeHandler}
                />
                {firstNameHasError && <p>Field must not be empty!</p>}
              </div>

              <div className={classes["form-control"]}>
                <label htmlFor="lastName">Last Name</label>
                <input
                  type="text"
                  id="lastName"
                  value={lastNameValue}
                  onChange={lastNameChangeHandler}
                />
                {lastNameHasError && <p>Field must not be empty!</p>}
              </div>

              <div className={classes["form-control"]}>
                <label htmlFor="contactNumber">Contact Number</label>
                <input
                  type="number"
                  id="contactNumber"
                  value={contactNumberValue}
                  onChange={contactNumberChangeHandler}
                />
                {contactNumberHasError && <p>Field must not be empty!</p>}
              </div>
            </div>

            <div className={classes["form-row"]}>
              <div className={classes["form-control"]}>
                <label htmlFor="currentAddress">Current Address</label>
                <input
                  type="text"
                  id="currentAddress"
                  value={currentAddressValue}
                  onChange={currentAddressChangeHandler}
                />
                {currentAddressHasError && <p>Field must not be empty!</p>}
              </div>

              <div className={classes["form-control"]}>
                <label htmlFor="favorites">Favorites</label>
                <textarea
                  type="text"
                  id="favorites"
                  value={favoritesValue}
                  onChange={favoritesChangeHandler}
                />
                {favoritesHasError && <p>Field must not be empty!</p>}
              </div>
            </div>

            <div className={classes["form-actions"]}>
              <button className="btn-save" type="submit">
                Save Changes
              </button>
              <button
                onClick={showModalHandler}
                type="button"
                className="btn-cancel"
              >
                Cancel
              </button>
            </div>
          </form>
        </section>
      </Container>
    </BackgroundImage>
  );
};

export default EditProfile;
