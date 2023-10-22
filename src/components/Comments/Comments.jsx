import "./Comments.scss";
import Form from "../Form/Form";
import Comment from "../Comment/Comment";

const Comments = (props) => {
  return (
    <div className="comments">
      <h3 className="comments__number">
        {props.selectedVideo.comments.length} Comments
      </h3>
      <Form />
      <div className="comments__container">
        {props.selectedVideo.comments.map((comment) => {
          return (
            <Comment
              calculateTimeAgo={props.calculateTimeAgo}
              key={comment.id}
              comment={comment}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Comments;
