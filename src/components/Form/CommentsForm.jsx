import "./CommentsForm.scss";
import addCommentIcon from "../../assets/images/Icons/add_comment.svg";

// Added just to prevent page refresh if click form button
const CommentsForm = ({ createComment }) => {
  const form = document.querySelector(".comments-form");

  const handleSubmission = (event) => {
    event.preventDefault();

    createComment(event);
    form.reset();
  };

  return (
    <form className="comments-form" onSubmit={handleSubmission}>
      <div className="comments-form__left">
        <div className="form__profile"></div>
      </div>

      <div className="comments-form__right">
        <div className="comments-form__comment-wrapper">
          {" "}
          <label htmlFor="comments-form__name" className="comments-form__label">
            NAME
          </label>{" "}
          <input
            className="comments-form__name"
            type="text"
            name="commentFormName"
            id="comments-form__name"
            placeholder="Enter Your Name"
          />
          <label
            htmlFor="comments-form__comment"
            name="commentText"
            className="comments-form__label"
          >
            JOIN THE CONVERSATION
          </label>
          <textarea
            className="comments-form__comment"
            name="commentFormText"
            id="comments-form__comment"
            placeholder="Add a New Comment"
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
