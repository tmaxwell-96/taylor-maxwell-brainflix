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
      className="videolist__card"
    >
      <div className="videolist__image-container">
        <img
          className="videolist__image"
          src={props.video.image}
          alt={props.video.title}
        />
      </div>

      <div className="videolist__details">
        <p className="videolist__title">{props.video.title}</p>
        <p className="videolist__channel">{props.video.channel}</p>
      </div>
    </div>
  );
};

export default VideoListCard;
