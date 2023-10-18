import "./Comments.scss";
import Form from "../Form/Form";
import Comment from "../Comment/Comment";

const Comments = (props) => {
  return (
    <div className="comments">
      <h3 className="comments__number">SOME MATH Comments</h3>
      <Form />
      <div className="comments__container">
        {props.videoDetails[0].comments.map((comment) => {
          return <Comment key={comment.id} comment={comment} />;
        })}
      </div>
    </div>
  );
};

export default Comments;
