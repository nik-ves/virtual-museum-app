import { useState, useContext } from "react";
import classes from "./CommentForm.module.css";
import { AuthContext } from "../../context/auth-context";

const CommentForm = ({ setComments }) => {
  const [commentMessage, setCommentMessage] = useState("");
  const [commentRating, setCommentRating] = useState("");

  const authCtx = useContext(AuthContext);
  const currentUser = authCtx.currentUser;

  const commentMessageChangeHandler = (event) => {
    setCommentMessage(event.target.value);
  };

  const commentRatingChangeHandler = (event) => {
    setCommentRating(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    setComments((prevState) => [
      ...prevState,
      {
        id: Math.random(),
        from: currentUser.email,
        message: commentMessage,
        rating: commentRating,
      },
    ]);
  };
  return (
    <form onSubmit={submitHandler} className={classes["comments-form"]}>
      <div className={classes["form-control"]}>
        <label htmlFor="message">Your message</label>
        <textarea
          type="text"
          id="message"
          value={commentMessage}
          onChange={commentMessageChangeHandler}
        />
      </div>

      <div className={classes["form-control"]}>
        <label htmlFor="rating">Rating</label>
        <select
          id="rating"
          required
          value={commentRating}
          onChange={commentRatingChangeHandler}
        >
          <option disabled hidden value=""></option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
      </div>

      <div className={classes["form-actions"]}>
        <button className="btn-general" type="submit">
          Add Comment
        </button>
      </div>
    </form>
  );
};

export default CommentForm;
