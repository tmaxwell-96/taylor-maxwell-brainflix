import "./Video.scss";
import viewIcon from "../../assets/images/Icons/views.svg";
import likeIcon from "../../assets/images/Icons/likes.svg";

const Video = (props) => {
  const videoImage = props.selectedVideo.image;
  return (
    <div className="video">
      <video className="video__image" poster={videoImage} controls></video>
      <div className="video__details">
        <h2 className="video__title">{props.selectedVideo.title}</h2>
        <div className="video__container">
          <div className="video__container-top">
            <h3 className="video__channel">By {props.selectedVideo.channel}</h3>
            <div className="video__views">
              <img src={viewIcon} alt="view icon" />
              <p className="video__viewcount">{props.selectedVideo.views}</p>
            </div>
          </div>
          <div className="video__container-bottom">
            <p className="video__date">
              {new Date(props.selectedVideo.timestamp).toLocaleDateString(
                "en-US"
              )}
            </p>
            <div className="video__likes">
              <img src={likeIcon} alt="like icon" />
              <p className="video__likecount">{props.selectedVideo.likes}</p>
            </div>
          </div>
        </div>
        <p className="video__description">{props.selectedVideo.description}</p>
      </div>
    </div>
  );
};

export default Video;
