import classes from "./CommentList.module.css";
import { useState, useContext } from "react";
import CommentForm from "./CommentForm";
import { AuthContext } from "../../context/auth-context";

const CommentList = (props) => {
  const [comments, setComments] = useState(props.comments);

  const authCtx = useContext(AuthContext);
  const currentUser = authCtx.currentUser;

  const hasCommented = comments.find((comment) => {
    return comment.from === currentUser?.email;
  });

  return (
    <section className={classes["section-comments"]}>
      <h1>Comment section</h1>

      {!hasCommented && <CommentForm setComments={setComments} />}

      {comments.map((comment) => {
        return (
          <div key={Math.random()} className={classes["comment-box"]}>
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

export default CommentList;
