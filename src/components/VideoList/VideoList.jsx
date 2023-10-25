import "./VideoList.scss";
import VideoListCard from "../VideoListCard/VideoListCard";
import { Link } from "react-router-dom";

const VideoList = (props) => {
  return (
    <div className="videolist">
      <h3 className="videolist__header">NEXT VIDEOS</h3>
      <div className="videolist__wrapper">
        {props.videoDetailsSimple
          .filter((video) => video.id !== props.selectedVideo.id)
          .map((video) => {
            return (
              <Link
                key={video.id}
                to={`/${video.id}`}
                className="videolist__child"
              >
                <VideoListCard
                  key={video.id}
                  changeVideo={props.changeVideo}
                  video={video}
                />
              </Link>
            );
          })}
      </div>
    </div>
  );
};

export default VideoList;
