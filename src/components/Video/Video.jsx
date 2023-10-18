import video from "../../data/videos.json";
import videoDetails from "../../data/video-details.json";
import "./Video.scss";
import viewIcon from "../../assets/images/Icons/views.svg";
import likeIcon from "../../assets/images/Icons/likes.svg";

const Video = () => {
  const videoImage = video[0].image;
  return (
    <div className="video">
      <video className="video__image" poster={videoImage} controls></video>
      <div className="video__details">
        <h2 className="video__title">{video[0].title}</h2>
        <div className="video__container">
          <div className="video__container-top">
            <h3 className="video__channel">By {video[0].channel}</h3>
            <div className="video__views">
              <img src={viewIcon} alt="view icon" />
              <p className="video__viewcount">{videoDetails[0].views}</p>
            </div>
          </div>
          <div className="video__container-bottom">
            <p className="video__date">
              {new Date(videoDetails[0].timestamp).toLocaleDateString("en-US")}
            </p>
            <div className="video__likes">
              <img src={likeIcon} alt="like icon" />
              <p className="video__likecount">{videoDetails[0].likes}</p>
            </div>
          </div>
        </div>
        <p className="video__description">{videoDetails[0].description}</p>
      </div>
    </div>
  );
};

export default Video;
