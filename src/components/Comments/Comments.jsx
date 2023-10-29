import "./Comments.scss";
import CommentsForm from "../Form/CommentsForm";
import Comment from "../Comment/Comment";

const Comments = ({
  selectedVideo,
  createComment,
  calculateTimeAgo,
  changeComment,
}) => {
  return (
    <section className="comments">
      <h3 className="comments__number">
        {selectedVideo.comments.length} Comments
      </h3>
      <CommentsForm createComment={createComment} />
      <div className="comments__container">
        {selectedVideo.comments
          .sort((a, b) => {
            return b.timestamp - a.timestamp;
          })
          .map((comment) => {
            return (
              <Comment
                calculateTimeAgo={calculateTimeAgo}
                key={comment.id}
                comment={comment}
                changeComment={changeComment}
              />
            );
          })}
      </div>
    </section>
  );
};

export default Comments;
