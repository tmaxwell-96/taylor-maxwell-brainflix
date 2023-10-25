import "./VideoListCard.scss";

const VideoListCard = (props) => {
  return (
    <div className="videolistcard">
      <div className="videolistcard__image-container">
        <img
          className="videolistcard__image"
          src={props.video.image}
          alt={props.video.title}
        />
      </div>

      <div className="videolistcard__details">
        <p className="videolistcard__title">{props.video.title}</p>
        <p className="videolistcard__channel">{props.video.channel}</p>
      </div>
    </div>
  );
};

export default VideoListCard;
