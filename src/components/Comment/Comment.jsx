import "./Comment.scss";

const Comment = (props) => {
  return (
    <div className="comment">
      <div className="comment__left">
        <div className="comment__profile"></div>
      </div>
      <div className="comment__right">
        <div className="comment__right-top">
          <p className="comment__name">{props.comment.name}</p>
          <p className="comment__date">
            {props.calculateTimeAgo(
              new Date(props.comment.timestamp).toLocaleDateString("en-US")
            )}
          </p>
        </div>
        <p className="comment__text">{props.comment.comment}</p>
      </div>
    </div>
  );
};

export default Comment;
