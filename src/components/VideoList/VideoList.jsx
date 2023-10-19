import "./VideoList.scss";
import VideoListCard from "../VideoListCard/VideoListCard";

const VideoList = (props) => {
  // console.log(props.changeVideo);
  return (
    <div className="videolist">
      <h3 className="videolist__header">NEXT VIDEOS</h3>
      <div className="videolist__wrapper">
        {props.videoDetails.map((video) => {
          return (
            <VideoListCard
              key={video.id}
              changeVideo={props.changeVideo}
              video={video}
            />
          );
        })}
      </div>
    </div>
  );
};

export default VideoList;
