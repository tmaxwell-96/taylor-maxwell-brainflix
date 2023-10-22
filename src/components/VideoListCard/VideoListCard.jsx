import "./VideoListCard.scss";

const VideoListCard = (props) => {
  // console.log(props.videoDetails[0].image);
  // console.log(props.changeVideo);
  return (
    <div
      onClick={() => {
        return props.changeVideo(props.video.id);
        // return console.log(props.video.id);
      }}
      className="videolistcard"
    >
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
