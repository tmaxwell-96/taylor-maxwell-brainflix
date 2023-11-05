import "./VideoListCard.scss";

const baseUrl = process.env.REACT_APP_BASE_URL;

const VideoListCard = ({ video }) => {
  return (
    <div className="videolist-card">
      <div className="videolist-card__image-container">
        <img
          className="videolist-card__image"
          src={`${baseUrl}/images/${video.image}`}
          alt={video.title}
        />
      </div>

      <div className="videolist-card__details">
        <p className="videolist-card__title">{video.title}</p>
        <p className="videolist-card__channel">{video.channel}</p>
      </div>
    </div>
  );
};

export default VideoListCard;
