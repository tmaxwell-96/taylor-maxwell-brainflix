import "./CommentsForm.scss";
import addCommentIcon from "../../assets/images/Icons/add_comment.svg";
import { useState } from "react";

const CommentsForm = ({ createComment }) => {
  // State variables for form validation
  //-----------------------------------------
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");

  // use submitted state to only apply error class after submission
  //-----------------------------------------
  const [submitted, setSubmitted] = useState(false);

  const handleNameChange = (event) => {
    setName(event.target.value);
    setSubmitted(false);
  };

  const handleCommentChange = (event) => {
    setComment(event.target.value);
    setSubmitted(false);
  };

  const isNameValid = () => {
    if (name) {
      return true;
    } else {
      return false;
    }
  };

  const isCommentValid = () => {
    if (comment) {
      return true;
    } else {
      return false;
    }
  };

  const handleSubmission = (event) => {
    event.preventDefault();

    if (!isNameValid() || !isCommentValid()) {
      setSubmitted(true);
      return;
    }

    createComment(event);
    setName("");
    setComment("");
  };

  return (
    <form className="comments-form" onSubmit={handleSubmission}>
      <div className="comments-form__left">
        <div className="form__profile"></div>
      </div>

      <div className="comments-form__right">
        <div className="comments-form__comment-wrapper">
          <label htmlFor="comments-form__name" className="comments-form__label">
            NAME
          </label>
          <input
            className={`comments-form__name ${
              submitted && !isNameValid() ? "comments-form__name--error" : ""
            }`}
            type="text"
            name="commentFormName"
            id="comments-form__name"
            placeholder={"Enter Your Name"}
            onChange={handleNameChange}
            value={name}
          />
          <label
            htmlFor="comments-form__comment"
            name="commentText"
            className="comments-form__label"
          >
            JOIN THE CONVERSATION
          </label>
          <textarea
            className={`comments-form__comment ${
              submitted && !isCommentValid()
                ? "comments-form__comment--error"
                : ""
            }`}
            name="commentFormText"
            id="comments-form__comment"
            placeholder="Add a New Comment"
            onChange={handleCommentChange}
            value={comment}
          ></textarea>
        </div>

        <div className="comments-form__buttonwrapper">
          <div className="comments-form__button-overlay">
            <img
              className="comments-form__upload-icon"
              src={addCommentIcon}
              alt="upload icon"
            />
          </div>
          <button className="comments-form__button">COMMENT</button>
        </div>
      </div>
    </form>
  );
};

export default CommentsForm;
