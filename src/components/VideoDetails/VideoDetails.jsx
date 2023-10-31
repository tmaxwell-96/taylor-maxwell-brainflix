import "./VideoDetails.scss";
import viewIcon from "../../assets/images/Icons/views.svg";
import likeIcon from "../../assets/images/Icons/likes.svg";

const VideoDetails = ({ selectedVideo, calculateTimeAgo }) => {
  return (
    <section className="video__details">
      <h2 className="video__title">{selectedVideo.title}</h2>
      <div className="video__container">
        <div className="video__container-left">
          <h3 className="video__channel">By {selectedVideo.channel}</h3>
          <p className="video__date">
            {calculateTimeAgo(new Date(selectedVideo.timestamp))}
          </p>
        </div>
        <div className="video__container-right">
          <div className="video__views">
            <img src={viewIcon} alt="view icon" />
            <p className="video__viewcount">{selectedVideo.views}</p>
          </div>

          <div className="video__likes">
            <img src={likeIcon} alt="like icon" />
            <p className="video__likecount">{selectedVideo.likes}</p>
          </div>
        </div>
      </div>
      <p className="video__description">{selectedVideo.description}</p>
    </section>
  );
};

export default VideoDetails;
