import "./Form.scss";
import addCommentIcon from "../../assets/images/Icons/add_comment.svg";

const Form = () => {
  return (
    <form className="form">
      <div className="form__left">
        <div className="form__profile"></div>
      </div>

      <div className="form__right">
        <div className="form__comment-wrapper">
          <label
            htmlFor="form__comment"
            name="commentText"
            className="form__label"
          >
            JOIN THE CONVERSATION
          </label>
          <textarea
            className="form__comment"
            name="commentFormText"
            id="form__comment"
            placeholder="Add a New Comment"
          ></textarea>
        </div>

        <div className="form__buttonwrapper">
          <div className="form__button-overlay">
            <img
              className="form__upload-icon"
              src={addCommentIcon}
              alt="upload icon"
            />
          </div>
          <button className="form__button">COMMENT</button>
        </div>
      </div>
    </form>
  );
};

export default Form;
