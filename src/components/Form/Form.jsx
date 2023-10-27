import "./Form.scss";
import addCommentIcon from "../../assets/images/Icons/add_comment.svg";

//Testing DOM copy
// <form class="form">
//         <div class="form__left">
//           <div class="form__profile"></div>
//         </div>

//         <div class="form__right">
//           <label for="form__name" class="form__label">NAME</label>
//           <input class="form__name" type="text" name="commentFormName" id="form__name" placeholder="Enter Your Name">
//           <label for="form__comment" name="commentText" class="form__label">COMMENT</label>
//           <textarea class="form__comment" name="commentFormText" id="form__comment" placeholder="Add a New Comment"></textarea>
//           <button class="form__button">COMMENT</button>
//         </div>
//       </form>
// // end of test

// Added just to prevent page refresh if click form button
const Form = (props) => {
  const form = document.querySelector(".form");
  const handleSubmission = (event) => {
    event.preventDefault();
    props.createComment(event);
    form.reset();
  };

  return (
    <form className="form" onSubmit={handleSubmission}>
      <div className="form__left">
        <div className="form__profile"></div>
      </div>

      <div className="form__right">
        <div className="form__comment-wrapper">
          {" "}
          <label htmlFor="form__name" className="form__label">
            NAME
          </label>{" "}
          <input
            className="form__name"
            type="text"
            name="commentFormName"
            id="form__name"
            placeholder="Enter Your Name"
          />
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
