import "./Comment.scss";

const Comment = ({ comment, calculateTimeAgo }) => {
  return (
    <div className="comment">
      <div className="comment__left">
        <div className="comment__profile"></div>
      </div>
      <div className="comment__right">
        <div className="comment__right-top">
          <p className="comment__name">{comment.name}</p>
          <p className="comment__date">
            {calculateTimeAgo(new Date(comment.timestamp))}
          </p>
        </div>

        <p className="comment__text">{comment.comment}</p>
        <div className="comment__right-bottom">
          <button className="comment__delete">Delete</button>
        </div>
      </div>
    </div>
  );
};

export default Comment;
