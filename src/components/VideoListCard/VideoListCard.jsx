import "./VideoListCard.scss";
import { useParams } from "react-router-dom";

const VideoListCard = (props) => {
  const params = useParams();
  // console.log(params);
  return (
    <div
      onClick={() => {
        return props.changeVideo(props.video.id);
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
