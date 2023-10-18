import "./Form.scss";

const Form = () => {
  return (
    <form className="form">
      <div className="form__left">
        <div className="form__profile"></div>
      </div>

      <div className="form__right">
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
        <button className="form__button">COMMENT</button>
      </div>
    </form>
  );
};

export default Form;
