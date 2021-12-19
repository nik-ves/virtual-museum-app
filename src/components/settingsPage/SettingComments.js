import classes from "./SettingComments.module.css";
import { useState, useContext } from "react";
import SettingCommentsForm from "./SettingCommentsForm";
import { AuthContext } from "../../context/auth-context";

const SettingComments = (props) => {
  const [comments, setComments] = useState(props.comments);

  const authCtx = useContext(AuthContext);
  const currentUser = authCtx.currentUser;

  const hasCommented = comments.find((comment) => {
    return comment.from === currentUser?.email;
  });

  return (
    <section className={classes["section-comments"]}>
      <h1>Comment section</h1>

      {!hasCommented && <SettingCommentsForm setComments={setComments} />}

      {comments.map((comment) => {
        return (
          <div className={classes["comment-box"]}>
            <p>
              <span>From:</span> {comment.from}
            </p>
            <p>
              <span>Message:</span> {comment.message}
            </p>
            <p>
              <span>Rating:</span> {comment.rating} / 5
            </p>
          </div>
        );
      })}
    </section>
  );
};

export default SettingComments;
